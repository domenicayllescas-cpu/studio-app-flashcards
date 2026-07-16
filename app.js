/* ============================================================
   Estudio por Capítulos - app.js
   - Tarjetas (pregunta/respuesta) guardadas en localStorage
   - Material de cada capítulo (archivos) guardado en IndexedDB
     (localStorage no soporta archivos grandes, IndexedDB sí)
   ============================================================ */

const LS_CHAPTERS_KEY = 'sa_chapters';
const LS_CARDS_PREFIX = 'sa_flashcards_';

/* ---------- Estado ---------- */
let chapters = [];
let currentChapterId = null;

/* ---------- Utilidades localStorage ---------- */
// Capítulos del libro (1 al 8) reordenados en la secuencia más eficiente
// para estudiar: primero anatomía y biología base, luego la causa de la
// enfermedad (microbiología) y su alcance (epidemiología), y por último
// los temas de reborde edéntulo / implantes que se apoyan en todo lo anterior.
const DEFAULT_CHAPTERS = [
  { id: 'cap_1', bookChapter: 1, name: 'Anatomía de los Tejidos Periodontales', color: 'pink', file: 'capitulos/cap1-anatomia-periodontal.pdf' },
  { id: 'cap_2', bookChapter: 2, name: 'El Hueso como Órgano Vivo', color: 'blue', file: 'capitulos/cap2-hueso-organo-vivo.pdf' },
  { id: 'cap_3', bookChapter: 8, name: 'Biofilms Dentales', color: 'teal', file: 'capitulos/cap8-biofilms-dentales.pdf' },
  { id: 'cap_4', bookChapter: 7, name: 'Epidemiología de las Enfermedades Periodontales', color: 'orange', file: 'capitulos/cap7-epidemiologia.pdf' },
  { id: 'cap_5', bookChapter: 3, name: 'El Reborde Edéntulo', color: 'yellow', file: 'capitulos/cap3-reborde-edentulo.pdf' },
  { id: 'cap_6', bookChapter: 4, name: 'La Mucosa en Dientes e Implantes', color: 'purple', file: 'capitulos/cap4-mucosa-dientes-implantes.pdf' },
  { id: 'cap_7', bookChapter: 5, name: 'Osteointegración', color: 'pink', file: 'capitulos/cap5-osteointegracion.pdf' },
  { id: 'cap_8', bookChapter: 6, name: 'De la Función Táctil a la Osteopercepción', color: 'blue', file: 'capitulos/cap6-osteopercepcion.pdf' },
  { id: 'cap_9', name: 'Banco de Práctica (Javeriana)', color: 'teal' },
];

function loadChapters() {
  const raw = localStorage.getItem(LS_CHAPTERS_KEY);
  if (raw) {
    const saved = JSON.parse(raw);
    // Migración: si son los capítulos genéricos de una versión anterior
    // ("Capítulo 1"..."Capítulo 8"), se actualizan a los nuevos nombres y
    // orden optimizado. Los IDs se mantienen, así que las tarjetas ya
    // creadas por el usuario no se pierden.
    const looksLikeOldDefaults = saved.length === 8
      && saved.every((c, i) => c.name === 'Capítulo ' + (i + 1));
    if (looksLikeOldDefaults) {
      localStorage.setItem(LS_CHAPTERS_KEY, JSON.stringify(DEFAULT_CHAPTERS));
      return DEFAULT_CHAPTERS.slice();
    }
    return saved;
  }

  localStorage.setItem(LS_CHAPTERS_KEY, JSON.stringify(DEFAULT_CHAPTERS));
  return DEFAULT_CHAPTERS.slice();
}

// Carga automáticamente el PDF de cada capítulo por defecto como material,
// la primera vez que se abre la app (solo si aún no se subió nada para ese capítulo).
async function ensureDefaultMaterials() {
  for (const chapter of DEFAULT_CHAPTERS) {
    if (!chapter.file) continue;
    try {
      const existing = await getMaterialsByChapter(chapter.id);
      if (existing.length > 0) continue;

      const response = await fetch(chapter.file);
      if (!response.ok) continue;
      const blob = await response.blob();
      const fileName = chapter.file.split('/').pop();
      const file = new File([blob], fileName, { type: 'application/pdf' });
      await addMaterial(chapter.id, file);
    } catch (err) {
      console.warn('No se pudo precargar el material de', chapter.name, err);
    }
  }
}

function saveChapters() {
  localStorage.setItem(LS_CHAPTERS_KEY, JSON.stringify(chapters));
}

function loadCards(chapterId) {
  const raw = localStorage.getItem(LS_CARDS_PREFIX + chapterId);
  return raw ? JSON.parse(raw) : [];
}

function saveCards(chapterId, cards) {
  localStorage.setItem(LS_CARDS_PREFIX + chapterId, JSON.stringify(cards));
}

// Precarga 25 tarjetas de estudio por capítulo (generadas del contenido real
// de cada capítulo) la primera vez que se abre la app. Si el usuario ya tiene
// tarjetas guardadas para un capítulo (propias o precargadas), no se tocan.
function ensureDefaultFlashcards() {
  if (typeof DEFAULT_FLASHCARDS === 'undefined') return;
  for (const chapterId in DEFAULT_FLASHCARDS) {
    const existing = loadCards(chapterId);
    if (existing.length > 0) continue;
    const seeded = DEFAULT_FLASHCARDS[chapterId].map((card, i) => ({
      id: 'card_seed_' + chapterId + '_' + i,
      question: card.question,
      answer: card.answer
    }));
    saveCards(chapterId, seeded);
  }
}

/* ---------- IndexedDB para material de estudio (archivos) ---------- */
const DB_NAME = 'StudyAppDB';
const DB_STORE = 'materials';
let dbPromise = null;

function openDB() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(DB_STORE)) {
        const store = db.createObjectStore(DB_STORE, { keyPath: 'id' });
        store.createIndex('chapterId', 'chapterId', { unique: false });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbPromise;
}

async function addMaterial(chapterId, file) {
  const db = await openDB();
  const record = {
    id: 'mat_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
    chapterId,
    fileName: file.name,
    fileType: file.type,
    size: file.size,
    date: new Date().toISOString(),
    blob: file
  };
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, 'readwrite');
    tx.objectStore(DB_STORE).add(record);
    tx.oncomplete = () => resolve(record);
    tx.onerror = () => reject(tx.error);
  });
}

async function getMaterialsByChapter(chapterId) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, 'readonly');
    const index = tx.objectStore(DB_STORE).index('chapterId');
    const req = index.getAll(chapterId);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function deleteMaterial(id) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, 'readwrite');
    tx.objectStore(DB_STORE).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function deleteMaterialsByChapter(chapterId) {
  const items = await getMaterialsByChapter(chapterId);
  await Promise.all(items.map(item => deleteMaterial(item.id)));
}

/* ---------- Referencias DOM ---------- */
const chapterListEl = document.getElementById('chapter-list');
const addChapterForm = document.getElementById('add-chapter-form');
const newChapterNameInput = document.getElementById('new-chapter-name');
const currentChapterTitle = document.getElementById('current-chapter-title');
const bookChapterBadge = document.getElementById('book-chapter-badge');
const chapterDropdownToggle = document.getElementById('chapter-dropdown-toggle');
const chapterDropdown = document.getElementById('chapter-dropdown');

const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

const addCardForm = document.getElementById('add-card-form');
const newQuestionInput = document.getElementById('new-question');
const newAnswerInput = document.getElementById('new-answer');
const cardsGrid = document.getElementById('cards-grid');
const cardCountEl = document.getElementById('card-count');
const shuffleBtn = document.getElementById('shuffle-btn');

const viewStudyBtn = document.getElementById('view-study-btn');
const viewGridBtn = document.getElementById('view-grid-btn');
const studyModeEl = document.getElementById('study-mode');
const studyCardEl = document.getElementById('study-card');
const studyCardFront = document.getElementById('study-card-front');
const studyCardBack = document.getElementById('study-card-back');
const studyPositionEl = document.getElementById('study-position');
const prevCardBtn = document.getElementById('prev-card-btn');
const nextCardBtn = document.getElementById('next-card-btn');

let viewMode = 'study';
let studyIndex = 0;

const uploadForm = document.getElementById('upload-form');
const fileInput = document.getElementById('file-input');
const materialList = document.getElementById('material-list');

const aiGenerateBtn = document.getElementById('ai-generate-btn');
const aiCountBtns = document.querySelectorAll('.ai-count-btn');
let aiSelectedCount = 10;

const testStartBtn = document.getElementById('test-start-btn');
const testIntroEl = document.getElementById('test-intro');
const testQuizEl = document.getElementById('test-quiz');
const testResultsEl = document.getElementById('test-results');
const testProgressLabel = document.getElementById('test-progress-label');
const testScoreLabel = document.getElementById('test-score-label');
const testQuestionText = document.getElementById('test-question-text');
const testOptionsEl = document.getElementById('test-options');
const testNextBtn = document.getElementById('test-next-btn');
const testFinalScore = document.getElementById('test-final-score');
const testRetryBtn = document.getElementById('test-retry-btn');

let testQuestions = [];
let testIndex = 0;
let testScore = 0;

/* TEST General (banco de preguntas CENEVAL, independiente de los capítulos) */
const globalTestNavBtn = document.getElementById('global-test-nav-btn');
const chapterViewEl = document.getElementById('chapter-view');
const globalTestViewEl = document.getElementById('global-test-view');

const gtestIntroEl = document.getElementById('gtest-intro');
const gtestQuizEl = document.getElementById('gtest-quiz');
const gtestResultsEl = document.getElementById('gtest-results');
const gtestReviewEl = document.getElementById('gtest-review');

const gtestStartBtn = document.getElementById('gtest-start-btn');
const gtestProgressLabel = document.getElementById('gtest-progress-label');
const gtestTimerLabel = document.getElementById('gtest-timer-label');
const gtestScoreLabel = document.getElementById('gtest-score-label');
const gtestQuestionText = document.getElementById('gtest-question-text');
const gtestOptionsEl = document.getElementById('gtest-options');
const gtestNextBtn = document.getElementById('gtest-next-btn');
const gtestFinalScore = document.getElementById('gtest-final-score');
const gtestReviewBtn = document.getElementById('gtest-review-btn');
const gtestRetryBtn = document.getElementById('gtest-retry-btn');
const gtestRetryBtn2 = document.getElementById('gtest-retry-btn-2');
const gtestReviewList = document.getElementById('gtest-review-list');

const GTEST_NUM_QUESTIONS = 20;
const GTEST_DURATION_SECONDS = 30 * 60;

let gtestQuestions = [];
let gtestIndex = 0;
let gtestScore = 0;
let gtestTimerInterval = null;
let gtestRemainingSeconds = 0;

const CHAPTER_COLORS = {
  pink: '#f4a6c0',
  orange: '#ffb066',
  teal: '#5ecbc0',
  blue: '#8fa6ef',
  yellow: '#ffd166',
  purple: '#6C4BD1'
};

/* ---------- Render: lista de capítulos ---------- */
function renderChapterList() {
  chapterListEl.innerHTML = '';
  chapters.forEach((chapter, index) => {
    const li = document.createElement('li');
    li.className = chapter.id === currentChapterId ? 'active' : '';

    const dot = document.createElement('span');
    dot.className = 'color-dot';
    dot.style.background = CHAPTER_COLORS[chapter.color] || '#c9c2ec';

    const texts = document.createElement('span');
    texts.className = 'chapter-texts';
    const orderLabel = document.createElement('span');
    orderLabel.className = 'chapter-order';
    orderLabel.textContent = 'Estudio ' + (index + 1)
      + (chapter.bookChapter ? ' · Cap. original ' + chapter.bookChapter : '');
    const nameLabel = document.createElement('span');
    nameLabel.className = 'chapter-name';
    nameLabel.textContent = chapter.name;
    texts.appendChild(orderLabel);
    texts.appendChild(nameLabel);

    const delBtn = document.createElement('button');
    delBtn.className = 'delete-chapter';
    delBtn.textContent = '✕';
    delBtn.title = 'Eliminar capítulo';
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      removeChapter(chapter.id);
    });

    li.appendChild(dot);
    li.appendChild(texts);
    li.appendChild(delBtn);
    li.addEventListener('click', () => selectChapter(chapter.id));
    chapterListEl.appendChild(li);
  });
}

function selectChapter(chapterId) {
  currentChapterId = chapterId;
  const chapter = chapters.find(c => c.id === chapterId);
  currentChapterTitle.textContent = chapter ? chapter.name : 'Selecciona un capítulo';
  bookChapterBadge.textContent = chapter && chapter.bookChapter
    ? 'Capítulo original del libro: ' + chapter.bookChapter
    : '';
  studyIndex = 0;
  renderChapterList();
  renderCards();
  renderMaterials();
  resetTestUI();
  showChapterView();
  collapseChapterDropdownOnMobile();
}

async function removeChapter(chapterId) {
  if (!confirm('¿Eliminar este capítulo? Se borrarán sus tarjetas y material.')) return;
  chapters = chapters.filter(c => c.id !== chapterId);
  saveChapters();
  localStorage.removeItem(LS_CARDS_PREFIX + chapterId);
  await deleteMaterialsByChapter(chapterId);

  if (currentChapterId === chapterId) {
    currentChapterId = chapters.length ? chapters[0].id : null;
  }
  if (currentChapterId) {
    selectChapter(currentChapterId);
  } else {
    currentChapterTitle.textContent = 'Selecciona un capítulo';
    cardsGrid.innerHTML = '';
    materialList.innerHTML = '';
    renderChapterList();
  }
}

addChapterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = newChapterNameInput.value.trim();
  if (!name) return;
  const id = 'cap_' + Date.now();
  chapters.push({ id, name });
  saveChapters();
  newChapterNameInput.value = '';
  selectChapter(id);
});

/* ---------- Menú desplegable de capítulos ---------- */
chapterDropdownToggle.addEventListener('click', () => {
  const collapsed = chapterDropdown.classList.toggle('collapsed');
  chapterDropdownToggle.classList.toggle('collapsed', collapsed);
});

function isMobileViewport() {
  return window.matchMedia('(max-width: 768px)').matches;
}

function collapseChapterDropdownOnMobile() {
  if (!isMobileViewport()) return;
  chapterDropdown.classList.add('collapsed');
  chapterDropdownToggle.classList.add('collapsed');
}

/* ---------- Tabs ---------- */
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

/* ---------- Tarjetas (flashcards) ---------- */
function renderCards() {
  cardsGrid.innerHTML = '';
  if (!currentChapterId) {
    cardCountEl.textContent = '0 tarjetas';
    renderStudyCard();
    return;
  }

  const cards = loadCards(currentChapterId);
  cardCountEl.textContent = cards.length + (cards.length === 1 ? ' tarjeta' : ' tarjetas');

  if (cards.length === 0) {
    cardsGrid.innerHTML = '<p class="empty-state">Aún no hay tarjetas en este capítulo. ¡Añade la primera arriba!</p>';
    renderStudyCard();
    return;
  }

  cards.forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.className = 'flashcard';
    cardEl.innerHTML = `
      <button class="delete-card" title="Eliminar tarjeta">✕</button>
      <div class="flashcard-inner">
        <div class="flashcard-face flashcard-front">${escapeHtml(card.question)}</div>
        <div class="flashcard-face flashcard-back">${escapeHtml(card.answer)}</div>
      </div>
    `;
    cardEl.querySelector('.flashcard-inner').addEventListener('click', () => {
      cardEl.classList.toggle('flipped');
    });
    cardEl.querySelector('.delete-card').addEventListener('click', (e) => {
      e.stopPropagation();
      deleteCard(card.id);
    });
    cardsGrid.appendChild(cardEl);
  });

  renderStudyCard();
}

function deleteCard(cardId) {
  const cards = loadCards(currentChapterId).filter(c => c.id !== cardId);
  saveCards(currentChapterId, cards);
  if (studyIndex >= cards.length) studyIndex = Math.max(0, cards.length - 1);
  renderCards();
}

addCardForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!currentChapterId) {
    alert('Selecciona primero un capítulo.');
    return;
  }
  const question = newQuestionInput.value.trim();
  const answer = newAnswerInput.value.trim();
  if (!question || !answer) return;

  const cards = loadCards(currentChapterId);
  cards.push({ id: 'card_' + Date.now(), question, answer });
  saveCards(currentChapterId, cards);

  newQuestionInput.value = '';
  newAnswerInput.value = '';
  studyIndex = cards.length - 1;
  renderCards();
});

shuffleBtn.addEventListener('click', () => {
  if (!currentChapterId) return;
  const cards = loadCards(currentChapterId);
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  saveCards(currentChapterId, cards);
  studyIndex = 0;
  renderCards();
});

/* ---------- Modo estudio: una tarjeta grande a la vez ---------- */
function setViewMode(mode) {
  viewMode = mode;
  cardsGrid.classList.toggle('hidden', mode !== 'grid');
  studyModeEl.classList.toggle('hidden', mode !== 'study');
  viewGridBtn.classList.toggle('active', mode === 'grid');
  viewStudyBtn.classList.toggle('active', mode === 'study');
}

viewGridBtn.addEventListener('click', () => setViewMode('grid'));
viewStudyBtn.addEventListener('click', () => setViewMode('study'));

function renderStudyCard() {
  const cards = currentChapterId ? loadCards(currentChapterId) : [];

  if (cards.length === 0) {
    studyCardEl.classList.add('hidden');
    studyPositionEl.textContent = '';
    prevCardBtn.disabled = true;
    nextCardBtn.disabled = true;
    return;
  }

  studyCardEl.classList.remove('hidden');
  if (studyIndex >= cards.length) studyIndex = cards.length - 1;
  if (studyIndex < 0) studyIndex = 0;

  const card = cards[studyIndex];
  studyCardEl.classList.remove('flipped');
  studyCardFront.textContent = card.question;
  studyCardBack.textContent = card.answer;
  studyPositionEl.textContent = (studyIndex + 1) + ' / ' + cards.length;
  prevCardBtn.disabled = studyIndex === 0;
  nextCardBtn.disabled = studyIndex === cards.length - 1;
}

studyCardEl.addEventListener('click', () => {
  studyCardEl.classList.toggle('flipped');
});

prevCardBtn.addEventListener('click', () => {
  if (studyIndex > 0) {
    studyIndex--;
    renderStudyCard();
  }
});

nextCardBtn.addEventListener('click', () => {
  const cards = currentChapterId ? loadCards(currentChapterId) : [];
  if (studyIndex < cards.length - 1) {
    studyIndex++;
    renderStudyCard();
  }
});

document.addEventListener('keydown', (e) => {
  if (viewMode !== 'study') return;
  if (document.activeElement && ['TEXTAREA', 'INPUT'].includes(document.activeElement.tagName)) return;
  if (e.key === 'ArrowRight') nextCardBtn.click();
  if (e.key === 'ArrowLeft') prevCardBtn.click();
  if (e.key === ' ') { e.preventDefault(); studyCardEl.classList.toggle('flipped'); }
});

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- Crear tarjetas con la IA ---------- */
aiCountBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    aiCountBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    aiSelectedCount = parseInt(btn.dataset.count, 10);
  });
});

function normalizeQuestion(q) {
  return q.trim().toLowerCase().replace(/\s+/g, ' ');
}

function generateAICards(chapterId, count) {
  if (!chapterId) {
    alert('Selecciona primero un capítulo.');
    return;
  }
  if (typeof AI_FLASHCARD_POOL === 'undefined' || !AI_FLASHCARD_POOL[chapterId]) {
    alert('No hay banco de tarjetas IA disponible para este capítulo.');
    return;
  }

  const existing = loadCards(chapterId);
  const existingSet = new Set(existing.map(c => normalizeQuestion(c.question)));
  const available = AI_FLASHCARD_POOL[chapterId].filter(c => !existingSet.has(normalizeQuestion(c.question)));

  if (available.length === 0) {
    alert('Ya se generaron todas las tarjetas IA disponibles para este capítulo.');
    return;
  }

  for (let i = available.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [available[i], available[j]] = [available[j], available[i]];
  }

  const chosen = available.slice(0, count);
  const newCards = chosen.map((c, i) => ({
    id: 'card_ai_' + chapterId + '_' + Date.now() + '_' + i,
    question: c.question,
    answer: c.answer
  }));

  saveCards(chapterId, existing.concat(newCards));
  renderCards();

  if (chosen.length < count) {
    alert('Se generaron ' + chosen.length + ' tarjetas nuevas con la IA (no había más disponibles sin repetir).');
  } else {
    alert('Se generaron ' + chosen.length + ' tarjetas nuevas con la IA.');
  }
}

aiGenerateBtn.addEventListener('click', () => generateAICards(currentChapterId, aiSelectedCount));

/* ---------- Test (quiz de opción múltiple) ---------- */
function resetTestUI() {
  testIntroEl.classList.remove('hidden');
  testQuizEl.classList.add('hidden');
  testResultsEl.classList.add('hidden');
}

function buildTestQuestions(chapterId) {
  const cards = loadCards(chapterId);
  if (cards.length < 2) return [];

  const shuffled = cards.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const selected = shuffled.slice(0, Math.min(10, shuffled.length));

  return selected.map(card => {
    const distractorPool = cards.filter(c => c.id !== card.id).map(c => c.answer);
    for (let i = distractorPool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [distractorPool[i], distractorPool[j]] = [distractorPool[j], distractorPool[i]];
    }
    const options = [card.answer, ...distractorPool.slice(0, 3)];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return { question: card.question, correctAnswer: card.answer, options };
  });
}

function startTest() {
  if (!currentChapterId) return;
  testQuestions = buildTestQuestions(currentChapterId);
  if (testQuestions.length === 0) {
    alert('Necesitas al menos 2 tarjetas en este capítulo para hacer el test.');
    return;
  }
  testIndex = 0;
  testScore = 0;
  testIntroEl.classList.add('hidden');
  testResultsEl.classList.add('hidden');
  testQuizEl.classList.remove('hidden');
  renderTestQuestion();
}

function renderTestQuestion() {
  const q = testQuestions[testIndex];
  testProgressLabel.textContent = 'Pregunta ' + (testIndex + 1) + ' / ' + testQuestions.length;
  testScoreLabel.textContent = 'Puntaje: ' + testScore;
  testQuestionText.textContent = q.question;
  testOptionsEl.innerHTML = '';
  testNextBtn.classList.add('hidden');

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'test-option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => selectTestOption(btn, opt, q));
    testOptionsEl.appendChild(btn);
  });
}

function selectTestOption(btn, opt, q) {
  const allBtns = testOptionsEl.querySelectorAll('.test-option-btn');
  allBtns.forEach(b => { b.disabled = true; });

  if (opt === q.correctAnswer) {
    btn.classList.add('correct');
    testScore++;
  } else {
    btn.classList.add('incorrect');
    allBtns.forEach(b => {
      if (b.textContent === q.correctAnswer) b.classList.add('correct');
    });
  }
  testScoreLabel.textContent = 'Puntaje: ' + testScore;
  testNextBtn.classList.remove('hidden');
  testNextBtn.textContent = testIndex === testQuestions.length - 1 ? 'Ver resultados →' : 'Siguiente →';
}

testNextBtn.addEventListener('click', () => {
  testIndex++;
  if (testIndex >= testQuestions.length) {
    testQuizEl.classList.add('hidden');
    testResultsEl.classList.remove('hidden');
    testFinalScore.textContent = testScore + ' / ' + testQuestions.length;
  } else {
    renderTestQuestion();
  }
});

testStartBtn.addEventListener('click', startTest);
testRetryBtn.addEventListener('click', startTest);

/* ---------- TEST General (banco CENEVAL) ---------- */
function showChapterView() {
  globalTestViewEl.classList.add('hidden');
  chapterViewEl.classList.remove('hidden');
}

function showGlobalTestView() {
  chapterViewEl.classList.add('hidden');
  globalTestViewEl.classList.remove('hidden');
}

globalTestNavBtn.addEventListener('click', showGlobalTestView);

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildGlobalTestQuestions() {
  if (typeof TEST_BANK === 'undefined' || TEST_BANK.length === 0) return [];
  const pool = shuffleArray(TEST_BANK);
  const selected = pool.slice(0, Math.min(GTEST_NUM_QUESTIONS, pool.length));
  return selected.map(q => {
    const order = shuffleArray(q.options.map((_, i) => i));
    const options = order.map(i => q.options[i]);
    const correctIndex = order.indexOf(q.correct);
    return { question: q.question, options, correctIndex, selected: null };
  });
}

function startGlobalTest() {
  gtestQuestions = buildGlobalTestQuestions();
  if (gtestQuestions.length === 0) {
    alert('No hay banco de preguntas disponible para el TEST general.');
    return;
  }
  gtestIndex = 0;
  gtestScore = 0;
  gtestRemainingSeconds = GTEST_DURATION_SECONDS;
  gtestIntroEl.classList.add('hidden');
  gtestResultsEl.classList.add('hidden');
  gtestReviewEl.classList.add('hidden');
  gtestQuizEl.classList.remove('hidden');
  startGtestTimer();
  renderGtestQuestion();
}

function startGtestTimer() {
  stopGtestTimer();
  updateGtestTimerLabel();
  gtestTimerInterval = setInterval(() => {
    gtestRemainingSeconds--;
    updateGtestTimerLabel();
    if (gtestRemainingSeconds <= 0) {
      finishGlobalTest();
    }
  }, 1000);
}

function stopGtestTimer() {
  if (gtestTimerInterval) {
    clearInterval(gtestTimerInterval);
    gtestTimerInterval = null;
  }
}

function updateGtestTimerLabel() {
  const remaining = Math.max(0, gtestRemainingSeconds);
  const m = Math.floor(remaining / 60);
  const s = remaining % 60;
  gtestTimerLabel.textContent = '⏱ ' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  gtestTimerLabel.classList.toggle('gtest-timer-warning', remaining <= 300);
}

function renderGtestQuestion() {
  const q = gtestQuestions[gtestIndex];
  gtestProgressLabel.textContent = 'Pregunta ' + (gtestIndex + 1) + ' / ' + gtestQuestions.length;
  gtestScoreLabel.textContent = 'Puntaje: ' + gtestScore;
  gtestQuestionText.textContent = q.question;
  gtestOptionsEl.innerHTML = '';
  gtestNextBtn.classList.add('hidden');

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'test-option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => selectGtestOption(btn, i, q));
    gtestOptionsEl.appendChild(btn);
  });
}

function selectGtestOption(btn, i, q) {
  if (q.selected !== null) return;
  const allBtns = gtestOptionsEl.querySelectorAll('.test-option-btn');
  allBtns.forEach(b => { b.disabled = true; });

  q.selected = i;
  if (i === q.correctIndex) {
    btn.classList.add('correct');
    gtestScore++;
  } else {
    btn.classList.add('incorrect');
    allBtns[q.correctIndex].classList.add('correct');
  }
  gtestScoreLabel.textContent = 'Puntaje: ' + gtestScore;
  gtestNextBtn.classList.remove('hidden');
  gtestNextBtn.textContent = gtestIndex === gtestQuestions.length - 1 ? 'Ver resultados →' : 'Siguiente →';
}

gtestNextBtn.addEventListener('click', () => {
  gtestIndex++;
  if (gtestIndex >= gtestQuestions.length) {
    finishGlobalTest();
  } else {
    renderGtestQuestion();
  }
});

function finishGlobalTest() {
  stopGtestTimer();
  gtestQuizEl.classList.add('hidden');
  gtestReviewEl.classList.add('hidden');
  gtestResultsEl.classList.remove('hidden');
  gtestFinalScore.textContent = gtestScore + ' / ' + gtestQuestions.length;
}

gtestReviewBtn.addEventListener('click', () => {
  renderGtestReview();
  gtestResultsEl.classList.add('hidden');
  gtestReviewEl.classList.remove('hidden');
});

function renderGtestReview() {
  gtestReviewList.innerHTML = '';
  gtestQuestions.forEach((q, qi) => {
    const item = document.createElement('div');
    item.className = 'gtest-review-item';
    const status = q.selected === null ? '⭕ Sin responder' : (q.selected === q.correctIndex ? '✅ Correcta' : '❌ Incorrecta');
    const optsHtml = q.options.map((opt, i) => {
      let cls = 'gtest-review-option';
      if (i === q.correctIndex) cls += ' correct';
      else if (i === q.selected) cls += ' incorrect';
      return '<div class="' + cls + '">' + escapeHtml(opt) + '</div>';
    }).join('');
    item.innerHTML =
      '<p class="gtest-review-q">' + (qi + 1) + '. ' + status + ' — ' + escapeHtml(q.question) + '</p>' +
      '<div class="gtest-review-options">' + optsHtml + '</div>';
    gtestReviewList.appendChild(item);
  });
}

gtestStartBtn.addEventListener('click', startGlobalTest);
gtestRetryBtn.addEventListener('click', startGlobalTest);
gtestRetryBtn2.addEventListener('click', startGlobalTest);

/* ---------- Material del capítulo ---------- */
async function renderMaterials() {
  materialList.innerHTML = '';
  if (!currentChapterId) return;

  const items = await getMaterialsByChapter(currentChapterId);
  if (items.length === 0) {
    materialList.innerHTML = '<p class="empty-state">No hay material subido para este capítulo todavía.</p>';
    return;
  }

  items.forEach(item => {
    const li = document.createElement('li');

    const info = document.createElement('div');
    info.className = 'file-info';
    info.innerHTML = `<span>${escapeHtml(item.fileName)}</span><small>${formatSize(item.size)} · ${new Date(item.date).toLocaleString()}</small>`;

    const actions = document.createElement('div');
    actions.className = 'file-actions';

    const viewLink = document.createElement('a');
    viewLink.textContent = 'Ver';
    viewLink.href = '#';
    viewLink.addEventListener('click', (e) => {
      e.preventDefault();
      const url = URL.createObjectURL(item.blob);
      window.open(url, '_blank');
    });

    const delBtn = document.createElement('button');
    delBtn.className = 'delete-material';
    delBtn.textContent = 'Eliminar';
    delBtn.addEventListener('click', async () => {
      await deleteMaterial(item.id);
      renderMaterials();
    });

    actions.appendChild(viewLink);
    actions.appendChild(delBtn);
    li.appendChild(info);
    li.appendChild(actions);
    materialList.appendChild(li);
  });
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

uploadForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!currentChapterId) {
    alert('Selecciona primero un capítulo.');
    return;
  }
  const files = fileInput.files;
  if (!files.length) return;

  for (const file of files) {
    await addMaterial(currentChapterId, file);
  }
  fileInput.value = '';
  renderMaterials();
});

// Añade el capítulo "Banco de Práctica (Javeriana)" a instalaciones existentes
// que ya tenían capítulos guardados antes de que este capítulo se agregara,
// sin tocar los capítulos ni tarjetas que el usuario ya tiene.
function ensureJaverianaChapter() {
  if (!chapters.some(c => c.id === 'cap_9')) {
    chapters.push({ id: 'cap_9', name: 'Banco de Práctica (Javeriana)', color: 'teal' });
    saveChapters();
  }
}

/* ---------- Inicialización ---------- */
async function init() {
  setViewMode('study');
  chapters = loadChapters();
  ensureJaverianaChapter();
  ensureDefaultFlashcards();
  renderChapterList();
  if (chapters.length) {
    selectChapter(chapters[0].id);
  }
  await ensureDefaultMaterials();
  if (currentChapterId) renderMaterials();
}

init();

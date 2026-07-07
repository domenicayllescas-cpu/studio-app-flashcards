// Tarjetas de estudio precargadas (25 por capitulo), generadas a partir del contenido real de cada capitulo del libro.
const DEFAULT_FLASHCARDS = {
  "cap_1": [
    {
      "question": "¿Qué estructuras componen el periodontio?",
      "answer": "La encía (G), el ligamento periodontal (PL), el cemento radicular (RC) y el hueso alveolar propiamente dicho (ABP)."
    },
    {
      "question": "¿Cuál es la función principal del periodontio?",
      "answer": "Fijar el diente al hueso de los maxilares y mantener la integridad de la superficie de la mucosa masticatoria de la cavidad oral."
    },
    {
      "question": "¿Qué tres tipos de mucosa oral existen?",
      "answer": "La mucosa masticatoria (encía y paladar duro), la mucosa especializada (dorso de la lengua) y la mucosa de revestimiento (lining mucosa)."
    },
    {
      "question": "¿Qué límite separa la encía de la mucosa alveolar?",
      "answer": "La unión mucogingival (línea mucogingival), un borde fácilmente reconocible entre la encía coral rosada y la mucosa alveolar más oscura y suelta."
    },
    {
      "question": "¿Cuáles son las tres partes en que se divide la encía?",
      "answer": "Encía libre, encía interdental (papila interdental) y encía adherida (insertada)."
    },
    {
      "question": "¿A qué distancia de la unión cemento-esmalte (CEJ) se localiza el margen gingival libre tras la erupción completa del diente?",
      "answer": "Aproximadamente 1.5-2 mm coronal a la CEJ."
    },
    {
      "question": "¿Qué es el 'col' interdental?",
      "answer": "Una concavidad en la papila interdental de zonas premolares/molares, ubicada entre la porción vestibular y lingual/palatina de la papila, cubierta por epitelio delgado no queratinizado similar al epitelio de unión."
    },
    {
      "question": "¿Qué es el 'stippling' de la encía adherida?",
      "answer": "Pequeñas depresiones en la superficie de la encía adherida que le dan una apariencia de 'piel de naranja', correspondientes a zonas de fusión entre crestas epiteliales."
    },
    {
      "question": "¿Qué tres tipos de epitelio conforman la encía libre?",
      "answer": "Epitelio oral (OE), epitelio sulcular oral (OSE) y epitelio de unión (JE)."
    },
    {
      "question": "¿Cuáles son las cuatro capas del epitelio oral gingival y cómo se diferencia entre orto y paraqueratinizado?",
      "answer": "Estrato basal, estrato espinoso, estrato granuloso y estrato córneo. Es ortoqueratinizado si carece de núcleos en la capa córnea, y paraqueratinizado si conserva remanentes nucleares."
    },
    {
      "question": "¿Qué tipos celulares 'claras' (no queratinocitos) se encuentran en el epitelio oral y cuáles son sus funciones?",
      "answer": "Melanocitos (producción de melanina), células de Langerhans (defensa inmunológica) y células de Merkel (función sensorial)."
    },
    {
      "question": "¿Qué caracteriza estructuralmente al epitelio de unión en comparación con el epitelio oral?",
      "answer": "Tiene células más grandes en relación al volumen tisular, mayor espacio intercelular, menos desmosomas, y carece de crestas epiteliales (rete pegs) en su interfase con el tejido conectivo."
    },
    {
      "question": "¿Cómo se une el epitelio de unión al esmalte del diente?",
      "answer": "Mediante hemidesmosomas y una lámina basal (lámina densa y lámina lúcida), de forma estructuralmente similar a la interfase epitelio-tejido conectivo."
    },
    {
      "question": "¿Cuáles son los principales componentes de la lámina propia gingival?",
      "answer": "Fibras de colágeno (~60% del volumen), fibroblastos (~5%) y vasos/nervios (~35%), embebidos en sustancia fundamental amorfa (matriz)."
    },
    {
      "question": "¿Cuáles son los cuatro tipos de fibras del tejido conectivo gingival?",
      "answer": "Fibras de colágeno, fibras reticulares, fibras de oxitalán y fibras elásticas."
    },
    {
      "question": "¿Cuáles son los cuatro grupos de fibras de colágeno orientadas en la encía?",
      "answer": "Fibras circulares, fibras dentogingivales, fibras dentoperiósticas y fibras transeptales."
    },
    {
      "question": "¿Qué son las fibras de Sharpey?",
      "answer": "Las porciones de las fibras principales del ligamento periodontal que se insertan (embeben) en el cemento radicular y en el hueso alveolar propiamente dicho."
    },
    {
      "question": "¿Cuáles son los cuatro grupos principales de fibras del ligamento periodontal según su orientación?",
      "answer": "Fibras de la cresta alveolar, fibras horizontales, fibras oblicuas y fibras apicales."
    },
    {
      "question": "¿Cuál es el ancho aproximado del espacio del ligamento periodontal?",
      "answer": "Aproximadamente 0.25 mm (rango 0.2-0.4 mm), con forma de reloj de arena, siendo más estrecho a nivel medio-radicular."
    },
    {
      "question": "¿Qué son los restos epiteliales de Malassez?",
      "answer": "Grupos de células epiteliales remanentes de la vaina radicular de Hertwig, localizados en el ligamento periodontal a 15-75 μm del cemento, formando una red continua alrededor de la raíz."
    },
    {
      "question": "¿Qué diferencia al cemento radicular del hueso en cuanto a vascularización e inervación?",
      "answer": "El cemento no contiene vasos sanguíneos ni linfáticos, no tiene inervación, no sufre resorción ni remodelado fisiológico, pero se deposita continuamente durante toda la vida."
    },
    {
      "question": "¿Cuáles son los cuatro tipos de cemento radicular descritos?",
      "answer": "Cemento acelular afibrilar (AAC), cemento acelular de fibras extrínsecas (AEFC), cemento celular mixto estratificado (CMSC) y cemento celular de fibras intrínsecas (CIFC)."
    },
    {
      "question": "¿Qué distingue anatómicamente al hueso alveolar propiamente dicho (lámina dura) del hueso alveolar de sostén?",
      "answer": "El hueso alveolar propiamente dicho reviste el alvéolo (aparece como lámina dura en radiografías) y recibe las fibras de Sharpey, mientras que el hueso de sostén incluye el hueso cortical y el hueso esponjoso (trabecular) que lo rodea."
    },
    {
      "question": "¿Qué son las lagunas de Howship?",
      "answer": "Depresiones o fositas de resorción en la superficie ósea producidas por la actividad de los osteoclastos durante la resorción del hueso."
    },
    {
      "question": "¿Cómo drenan linfáticamente la encía labial/lingual de incisivos mandibulares y los terceros molares?",
      "answer": "La encía de incisivos mandibulares drena a los ganglios submentonianos, mientras que los terceros molares drenan al ganglio yugulodigástrico; la mayoría de los demás dientes drenan a los ganglios submandibulares."
    }
  ],
  "cap_2": [
    {
      "question": "¿Qué tres tejidos especializados componen el hueso como órgano?",
      "answer": "El tejido óseo (osseous tissue), el periostio/endostio y la médula ósea, que actúan sinérgicamente."
    },
    {
      "question": "¿Cuáles son las tres funciones principales del hueso como órgano?",
      "answer": "Resistir la carga mecánica, proteger órganos sensibles de fuerzas externas, y actuar como reservorio de células y minerales para la homeostasis sistémica."
    },
    {
      "question": "¿Qué es la osteogénesis intramembranosa y en qué huesos ocurre?",
      "answer": "Es la diferenciación directa de células mesenquimales progenitoras en osteoblastos, sin plantilla cartilaginosa. Ocurre en mandíbula, maxilar, cráneo y clavícula."
    },
    {
      "question": "¿Qué es la osteogénesis endocondral y en qué estructuras ocurre?",
      "answer": "Es la formación ósea a partir de una plantilla de cartílago hialino que se mineraliza y es reabsorbida y reemplazada por hueso. Ocurre en el cóndilo mandibular, huesos largos y vértebras."
    },
    {
      "question": "¿Cuál es la diferencia fundamental entre osificación intramembranosa y endocondral?",
      "answer": "La osificación endocondral requiere una plantilla cartilaginosa intermedia que luego es reabsorbida y reemplazada por hueso, mientras que en la intramembranosa las células mesenquimales se diferencian directamente en osteoblastos sin pasar por cartílago."
    },
    {
      "question": "En la osificación endocondral, ¿qué separa a los centros de osificación primario y secundario?",
      "answer": "Una estructura cartilaginosa conocida como placa de crecimiento (growth plate)."
    },
    {
      "question": "¿Cuál es la composición aproximada de la matriz orgánica del hueso?",
      "answer": "Constituye 30-35% del peso óseo total y está formada por 90% de colágeno tipo I y 10% de proteínas no colágenas, proteoglicanos, glicoproteínas, carbohidratos y lípidos."
    },
    {
      "question": "¿Qué es el osteoide?",
      "answer": "Es la matriz orgánica ósea sintetizada por los osteoblastos que aún no está mineralizada."
    },
    {
      "question": "¿Cuál es el componente inorgánico principal de la matriz ósea y cuál es su fórmula?",
      "answer": "Los cristales de hidroxiapatita [3Ca3(PO4)2(OH)2], formados por calcio y fosfato hidratados; regulan la elasticidad, rigidez y resistencia a la tensión del hueso."
    },
    {
      "question": "¿Cuál es la función principal de los osteoblastos y de dónde derivan?",
      "answer": "Son las células responsables de la formación ósea: sintetizan la matriz extracelular orgánica y controlan su mineralización. Derivan de células progenitoras osteogénicas presentes en la médula ósea, el endostio y el periostio."
    },
    {
      "question": "¿Qué genes son clave en la diferenciación de progenitores mesenquimales hacia osteoblastos?",
      "answer": "El gen Indian hedgehog (Ihh), expresado inicialmente, y posteriormente RUNX2, factor de transcripción esencial para la diferenciación osteoblástica."
    },
    {
      "question": "¿En qué dos tipos celulares pueden diferenciarse los osteoblastos?",
      "answer": "En células de revestimiento óseo (bone lining cells), que carecen de actividad sintética, y en osteocitos, que quedan embebidos en la matriz mineralizada."
    },
    {
      "question": "¿Qué son los osteocitos y dónde residen?",
      "answer": "Son células estrelladas embebidas en la matriz ósea mineralizada, alojadas en espacios llamados lagunas, con prolongaciones citoplasmáticas (dendritas) que atraviesan canalículos."
    },
    {
      "question": "¿Cuáles son las dos funciones principales de los osteocitos?",
      "answer": "Participar en la regulación de la homeostasis del calcio sanguíneo, y detectar la carga mecánica (mecanotransducción) transmitiendo señales a osteoblastos y osteoclastos."
    },
    {
      "question": "¿De qué linaje celular derivan los osteoclastos y cuál es su función?",
      "answer": "Derivan del linaje hematopoyético monocito/macrófago. Son células multinucleadas que se adhieren a la matriz ósea y secretan ácido y enzimas líticas para degradar el hueso mineralizado y orgánico."
    },
    {
      "question": "¿Qué es la laguna de Howship?",
      "answer": "Es el compartimento extracelular especializado que se forma como resultado de la degradación de la matriz ósea por los osteoclastos."
    },
    {
      "question": "¿Qué factores impulsan la diferenciación de osteoclastos a partir de precursores hematopoyéticos?",
      "answer": "El factor de transcripción PU-1 inicia el proceso; el factor estimulante de colonias de macrófagos (M-CSF) promueve su proliferación y expresión de RANKL, comprometiéndolos hacia el linaje osteoclástico."
    },
    {
      "question": "¿Cómo funciona el sistema RANKL/RANK/OPG en el acoplamiento formación-resorción ósea?",
      "answer": "Las células osteoblásticas/estromales presentan RANKL a los precursores de osteoclastos vía el receptor RANK, promoviendo su diferenciación y fusión; la osteoprotegerina (OPG) actúa como inhibidor de esta interacción."
    },
    {
      "question": "¿Cuáles son las dos capas del periostio y qué son las fibras de Sharpey?",
      "answer": "La capa fibrosa externa (formada por fibroblastos) y la capa osteogénica interna (con células osteoprogenitoras). Las fibras de Sharpey son fibras colágenas de la capa osteogénica que anclan tendones y ligamentos al hueso."
    },
    {
      "question": "¿Cuál es la diferencia entre médula ósea roja y amarilla?",
      "answer": "La médula roja está compuesta principalmente por tejido hematopoyético (produce eritrocitos, leucocitos y plaquetas), mientras que la amarilla está formada principalmente por adipocitos; con la edad, la médula roja se convierte progresivamente en amarilla."
    },
    {
      "question": "¿Qué es la remodelación ósea y qué proceso comprende?",
      "answer": "Es el mecanismo de adaptación esquelética que combina la resorción ósea por osteoclastos seguida de la formación de nuevo hueso por osteoblastos, regulado por factores mecánicos y sistémicos."
    },
    {
      "question": "¿Qué fases componen el ciclo de remodelación ósea (unidad multicelular básica, BMU) y su duración aproximada?",
      "answer": "Activación, resorción (~3 semanas), reversión, formación (~3 meses) y mineralización."
    },
    {
      "question": "¿Qué hormonas regulan la homeostasis del calcio y cuál es su función principal?",
      "answer": "La hormona paratiroidea (PTH) estimula la liberación de calcio óseo y reduce su excreción renal; la vitamina D favorece la absorción intestinal de calcio; la calcitonina suprime la resorción ósea inhibiendo a los osteoclastos."
    },
    {
      "question": "¿Cuáles son las tres fases de la reparación de una fractura ósea?",
      "answer": "Fase de inflamación (formación del coágulo, ~2 semanas), fase reparativa (formación del callo blando y luego duro, 6-12 semanas) y fase de remodelación (conversión del hueso inmaduro en hueso laminar maduro, dura meses)."
    },
    {
      "question": "¿Cómo se diagnostica la osteoporosis y en qué se diferencia de la osteomalacia?",
      "answer": "La osteoporosis se diagnostica con un T-score de densidad mineral ósea ≤ -2.5 desviaciones estándar (según la OMS) y se caracteriza por debilitamiento de hueso ya formado. La osteomalacia, en cambio, altera el hueso durante su formación por mineralización deficiente (por falta de vitamina D), manteniendo una matriz colágena y osteoide normales pero blandos."
    }
  ],
  "cap_3": [
    {
      "question": "¿Qué proporción de las células del cuerpo humano son microorganismos y no células de mamífero, según el capítulo?",
      "answer": "El cuerpo humano tiene más de 10^14 células, de las cuales solo el 10% son células mamíferas; la mayoría son microorganismos que forman las microbiotas residentes."
    },
    {
      "question": "¿Cómo se define un biofilm según Costerton et al. (1995)?",
      "answer": "Poblaciones microbianas embebidas en una matriz, adherentes entre sí y/o a superficies o interfaces."
    },
    {
      "question": "¿Qué nombre reciben los biofilms que se forman sobre los dientes?",
      "answer": "Se denominan dental plaque (placa dental); actualmente se prefiere el término 'biofilm dental' porque enfatiza los principios generales de biofilms aplicables a la placa."
    },
    {
      "question": "¿Por qué la boca es un hábitat microbiano único en comparación con otras superficies del cuerpo?",
      "answer": "Porque, a diferencia de la piel y mucosas (que se descaman), la boca ofrece superficies no descamativas (dientes y prótesis) que permiten la acumulación de grandes cantidades de microorganismos, especialmente en zonas estancadas."
    },
    {
      "question": "¿Qué es el potencial redox (Eh) y qué sitio de la boca sana presenta el valor más bajo?",
      "answer": "El Eh mide el grado de oxidación-reducción de un sitio; el surco gingival sano tiene el Eh más bajo de la boca y alberga el mayor número de anaerobios obligados."
    },
    {
      "question": "¿Qué ocurre con el pH de la placa tras el consumo de azúcar y qué consecuencia clínica tiene?",
      "answer": "El pH puede caer rápidamente por debajo de 5,0 por fermentación ácida, favoreciendo especies acidúricas (estreptococos mutans, lactobacilos, bifidobacterias), lo que predispone a la caries dental."
    },
    {
      "question": "¿Cómo cambia el pH del surco gingival durante la inflamación?",
      "answer": "Pasa de aproximadamente 6,9 en salud a 7,2-7,4 (e incluso 7,8 en algunos casos) durante la inflamación, debido al aumento de la proteólisis bacteriana de proteínas del fluido crevicular gingival (GCF)."
    },
    {
      "question": "Enumere al menos tres beneficios del estilo de vida en comunidad (biofilm) para los microorganismos.",
      "answer": "Mayor rango de hábitat para el crecimiento, mayor diversidad/eficiencia metabólica, mayor tolerancia al estrés ambiental/antimicrobianos/defensas del huésped, y mayor capacidad de causar enfermedad (sinergismo patogénico)."
    },
    {
      "question": "¿Cuánto puede aumentar la concentración inhibitoria mínima (MIC) de una bacteria en biofilm respecto a su forma planctónica?",
      "answer": "De 2 a 1000 veces mayor que la misma célula creciendo de forma planctónica, siendo los biofilms más antiguos los más recalcitrantes."
    },
    {
      "question": "Mencione dos mecanismos por los cuales los biofilms tienen menor susceptibilidad a los antimicrobianos.",
      "answer": "La matriz restringe la penetración del agente (uniéndose a polímeros cargados) y puede retener enzimas neutralizantes (ej. β-lactamasa); además, las bacterias en biofilm crecen lentamente y expresan un fenotipo distinto, reduciendo la sensibilidad al fármaco."
    },
    {
      "question": "Enumere las 6 etapas de formación de los biofilms dentales.",
      "answer": "1) Adsorción de la película adquirida (pellicle), 2) Adhesión reversible, 3) Adhesión más permanente (adhesinas-receptores), 4) Coadhesión de colonizadores secundarios, 5) Multiplicación y maduración del biofilm (síntesis de matriz), 6) Desprendimiento de células para colonizar otros sitios."
    },
    {
      "question": "¿Qué es la película adquirida (acquired pellicle) y de dónde proviene principalmente?",
      "answer": "Es una película condicionante de proteínas, fosfoproteínas y glicoproteínas biológicamente activas que recubre el esmalte en segundos tras la erupción o limpieza dental, derivada principalmente de la saliva (también del GCF y de las bacterias)."
    },
    {
      "question": "¿Qué diferencia hay entre la adhesión reversible y la adhesión irreversible (permanente) de las bacterias al diente?",
      "answer": "La adhesión reversible es débil, de largo alcance, mediada por fuerzas físico-químicas (van der Waals); la adhesión permanente es específica y de corto alcance, mediada por adhesinas bacterianas que se unen a receptores complementarios en la película adquirida."
    },
    {
      "question": "¿Qué especies bacterianas son colonizadoras primarias típicas del biofilm dental?",
      "answer": "Principalmente estreptococos como Streptococcus mitis y Streptococcus oralis."
    },
    {
      "question": "¿Qué es la coadhesión (co-agregación) y qué organismo se destaca como 'puente' entre colonizadores tempranos y tardíos?",
      "answer": "Es el proceso por el cual adhesinas de colonizadores secundarios se unen a receptores de bacterias ya adheridas, aumentando la diversidad microbiana; Fusobacterium nucleatum es la especie clave que actúa como organismo puente."
    },
    {
      "question": "¿Qué función cumple la matriz extracelular (matriz de la placa) en el biofilm dental?",
      "answer": "Consolida la adhesión del biofilm, actúa como andamio, une y retiene moléculas (incluidas enzimas) y retarda la penetración de moléculas cargadas dentro del biofilm."
    },
    {
      "question": "¿Qué es el quorum sensing y qué molécula lo media en Streptococcus mutans?",
      "answer": "Es la comunicación célula-célula dependiente de la densidad celular mediante moléculas difusibles; en S. mutans está mediado por el péptido estimulador de competencia (CSP), que también regula la tolerancia ácida y la transferencia horizontal de genes."
    },
    {
      "question": "¿Qué son las formaciones 'corn-cob' y 'test-tube brush' observadas en la placa dental madura?",
      "answer": "'Corn-cob' son células cocoides adheridas a lo largo de organismos filamentosos; 'test-tube brush' son bacterias en forma de bastón que sobresalen perpendicularmente de filamentos bacterianos; ambas son asociaciones celulares características de la placa madura."
    },
    {
      "question": "Según estudios con microscopía confocal, ¿qué tipo de arquitectura tiene la placa dental y qué se ha observado dentro de ella?",
      "answer": "Tiene una arquitectura abierta similar a otros biofilms, con canales que permiten el movimiento de moléculas; las bacterias más viables se encuentran en la zona central y revistiendo los canales/vacíos (tinciones live/dead)."
    },
    {
      "question": "Describa las 4 capas de la arquitectura del biofilm subgingival identificadas mediante FISH (Zijnge et al. 2010).",
      "answer": "Capa basal: bacilos (Actinomyces spp.) perpendiculares al diente; capa intermedia: células fusiformes (F. nucleatum, Tannerella forsythia); capa superior: patógenos periodontales (P. gingivalis, P. intermedia, etc.); capa externa no adherida: principalmente espiroquetas, con Synergistetes formando una capa en empalizada en contacto con células inmunes."
    },
    {
      "question": "¿Aproximadamente cuántas especies bacterianas se han identificado en la boca mediante métodos moleculares (16S rRNA), y qué porcentaje se estima cultivable?",
      "answer": "Se han identificado alrededor de 900 especies; se estima que solo cerca del 50% de la microbiota oral residente puede cultivarse actualmente en el laboratorio."
    },
    {
      "question": "Compare la microbiota de las fisuras oclusales con la del surco gingival.",
      "answer": "Las fisuras tienen una microbiota escasa, sacarolítica, predominantemente estreptocócica y aerobia/facultativa, influida por saliva; el surco gingival tiene una microbiota más diversa, con muchas especies Gram-negativas anaerobias y proteolíticas, influida por el GCF y con menor Eh."
    },
    {
      "question": "¿Qué es la homeostasis microbiana y qué es la 'hipótesis ecológica de la placa'?",
      "answer": "La homeostasis microbiana es el estado dinámico y estable en el que las proporciones relativas de especies se mantienen en equilibrio por interacciones sinérgicas y antagónicas; la hipótesis ecológica de la placa describe cómo las perturbaciones ambientales rompen este equilibrio y aumentan el riesgo de enfermedad."
    },
    {
      "question": "¿Qué es la 'resistencia a la colonización' y mediante qué mecanismos la ejerce la microbiota residente?",
      "answer": "Es la capacidad de la microbiota residente de impedir la colonización por microorganismos exógenos (a menudo patógenos), mediante: mejor adhesión a receptores del huésped, competencia por nutrientes, creación de condiciones desfavorables y producción de sustancias antagonistas (peróxido de hidrógeno, bacteriocinas)."
    },
    {
      "question": "Describa la vía nitrato-nitrito-óxido nítrico y su beneficio para el huésped mediado por bacterias orales.",
      "answer": "Bacterias anaerobias facultativas orales reducen el nitrato salival a nitrito, el cual regula el flujo sanguíneo, la presión arterial, la integridad gástrica y se convierte en óxido nítrico en el estómago; el uso de enjuagues antimicrobianos o antibióticos de amplio espectro reduce esta conversión y sus beneficios."
    }
  ],
  "cap_4": [
    {
      "question": "¿Cómo define Lilienfeld (1978) la epidemiología?",
      "answer": "Como el estudio de la distribución de una enfermedad o condición fisiológica en poblaciones humanas y de los factores que influyen en esa distribución."
    },
    {
      "question": "¿Cuáles son las tres tareas que debe cumplir la investigación epidemiológica en periodoncia según el capítulo?",
      "answer": "Aportar datos de prevalencia y severidad de las enfermedades periodontales, dilucidar la etiología y los determinantes (factores causales y de riesgo), y documentar la efectividad de las medidas preventivas y terapéuticas a nivel poblacional."
    },
    {
      "question": "¿Cómo puntúa el Índice Gingival de Löe (1967) la inflamación gingival?",
      "answer": "De 0 (sin inflamación) a 3 (inflamación evidente con tendencia a sangrado espontáneo); el score 2 indica sangrado tras pasar suavemente la sonda por el margen gingival."
    },
    {
      "question": "¿Qué mide el Índice de Placa de Silness & Löe (1964) y cómo se puntúa?",
      "answer": "Mide los depósitos de placa en una escala de 0 a 3: 0 ausencia de placa, 1 placa detectada al pasar la sonda, 2 placa visible, y 3 placa abundante."
    },
    {
      "question": "¿Cómo se define la profundidad de sondaje (PPD)?",
      "answer": "Es la distancia desde el margen gingival hasta la ubicación apical de la punta de una sonda periodontal insertada en el surco/bolsa con fuerza moderada."
    },
    {
      "question": "¿Cómo se define el nivel de inserción clínica (PAL o CAL)?",
      "answer": "Es la distancia desde la unión cemento-esmalte (UCE) hasta la ubicación de la punta de la sonda."
    },
    {
      "question": "¿Qué es el Extent and Severity Index (ESI) propuesto por Carlos et al. (1986)?",
      "answer": "Es un índice bivariado que combina la Extensión (proporción de sitios con signos de periodontitis destructiva) y la Severidad (pérdida de inserción media en los sitios afectados), usando un umbral de >1 mm de pérdida de inserción."
    },
    {
      "question": "¿Qué es el CPITN (Community Periodontal Index for Treatment Needs) y quién lo desarrolló?",
      "answer": "Es un sistema de índice desarrollado por Ainamo et al. (1982) por iniciativa de la OMS para evaluar la necesidad de tratamiento periodontal en grandes poblaciones, dividiendo la dentición en seis sextantes con códigos de 0 a 4."
    },
    {
      "question": "¿Cuál fue una limitación importante del CPITN documentada por Baelum et al.?",
      "answer": "El CPITN subestimó gravemente la prevalencia y severidad de las condiciones periodontales más severas y no correlacionó consistentemente con la pérdida de inserción clínica, sobreestimando en jóvenes y subestimando en ancianos."
    },
    {
      "question": "Según la definición CDC/AAP (Page & Eke 2007), ¿cómo se define la periodontitis severa?",
      "answer": "Presencia de dos o más sitios interproximales con ≥6 mm de pérdida de inserción clínica (no en el mismo diente) y al menos un sitio interproximal con profundidad de sondaje ≥5 mm."
    },
    {
      "question": "¿Cómo definió el 5º Workshop Europeo de Periodontología (Tonetti & Claffey 2005) la periodontitis para estudios epidemiológicos?",
      "answer": "Con una definición sensible (pérdida de inserción proximal ≥3 mm en ≥2 dientes no adyacentes) y una definición específica (pérdida de inserción proximal ≥5 mm en ≥30% de los dientes presentes)."
    },
    {
      "question": "¿Qué diferencia principal existe entre periodontitis crónica y periodontitis agresiva según la clasificación de 1999?",
      "answer": "La crónica es más común, ocurre principalmente en adultos y progresa lentamente en relación con los factores locales; la agresiva es menos frecuente, afecta a jóvenes sistémicamente sanos, progresa rápidamente y muestra agregación familiar."
    },
    {
      "question": "¿Qué mostró el estudio longitudinal de Löe et al. (1986) en trabajadores de plantaciones de té en Sri Lanka?",
      "answer": "Se identificaron tres patrones de progresión de la periodontitis no tratada: progresión rápida (~8%), progresión moderada (~81%) y sin progresión más allá de gingivitis (~11%), demostrando gran variabilidad en la susceptibilidad individual."
    },
    {
      "question": "¿Qué proporción de la población en países industrializados presenta formas severas de periodontitis y a qué edad alcanza su pico?",
      "answer": "La periodontitis severa afecta habitualmente no más del 10-15% de la población, y su prevalencia alcanza su pico entre los 50 y 60 años de edad."
    },
    {
      "question": "Según NHANES 2009-2010 (Eke et al. 2012), ¿cómo varió la prevalencia de periodontitis severa según la edad?",
      "answer": "Fue del 1.9% en el grupo de 30-34 años, 6.7% en 35-49 años, 11.7% en 50-64 años, y 11.2% en mayores de 65 años."
    },
    {
      "question": "¿Qué patrón racial/étnico se observa consistentemente en estudios nacionales de EE.UU. respecto a la prevalencia de periodontitis?",
      "answer": "Los afroamericanos muestran la prevalencia más alta, seguidos por los méxico-americanos, y luego los caucásicos no hispanos, un patrón consistente independientemente de la definición de caso utilizada."
    },
    {
      "question": "¿Cómo varía la prevalencia de periodontitis agresiva localizada (LAP) según raza y sexo?",
      "answer": "En caucásicos la prevalencia es baja (~0.1%) y afecta más a mujeres; en otras razas, especialmente en personas de raza negra, la prevalencia es mayor (a menudo >1%) y afecta más a hombres."
    },
    {
      "question": "¿Qué porcentaje de las extracciones dentales se atribuye a la periodontitis frente a la caries?",
      "answer": "Se estima que la periodontitis es responsable de aproximadamente el 30-35% de todas las extracciones dentales, mientras que la caries y sus secuelas explican hasta el 50%."
    },
    {
      "question": "¿Qué es el sesgo de selección o 'efecto del sobreviviente sano' en epidemiología periodontal?",
      "answer": "Es el fenómeno por el cual los dientes o sujetos más gravemente afectados pueden haber sido extraídos o no participar en el examen, lo que lleva a subestimar la prevalencia y severidad reales de la enfermedad."
    },
    {
      "question": "¿Cuál es la diferencia entre un factor de riesgo y un factor causal?",
      "answer": "Un factor causal cumple criterios estrictos de causalidad (como los de Hill), mientras que un factor de riesgo es un atributo o exposición asociado con una mayor probabilidad de enfermedad sin necesariamente ser su causa; el factor de riesgo puede modificarse mediante intervención."
    },
    {
      "question": "Menciona al menos tres de los criterios de Hill (1971) para establecer una relación causal.",
      "answer": "Fuerza de la asociación, efecto dosis-respuesta, consistencia temporal (la exposición precede a la enfermedad), consistencia de los hallazgos entre estudios, y plausibilidad biológica."
    },
    {
      "question": "¿Cuál es la diferencia entre odds ratio (OR) y riesgo relativo (RR)?",
      "answer": "El OR es la razón de probabilidades de exposición entre enfermos y sanos, propio de estudios transversales/casos-controles; el RR expresa cuántas veces más probable es desarrollar la enfermedad en expuestos frente a no expuestos, y solo se calcula correctamente en estudios de cohorte prospectivos."
    },
    {
      "question": "¿Cuáles son los cuatro pasos del proceso de evaluación de riesgo descritos por Beck (1994)?",
      "answer": "1) Identificación de factores asociados a la enfermedad; 2) desarrollo de un modelo multivariado; 3) evaluación del modelo en nuevas poblaciones; y 4) el paso de focalización (targeting), donde se reduce la exposición al factor y se evalúa la eficacia de la intervención."
    },
    {
      "question": "¿Qué bacterias conforman el llamado 'complejo rojo' y qué relevancia tienen?",
      "answer": "Porphyromonas gingivalis, Tannerella forsythia y Treponema denticola; su colonización subgingival en niveles altos se asocia de forma estadísticamente significativa con mayor riesgo de periodontitis (OR entre 3.7 y 4.3 en varios estudios)."
    },
    {
      "question": "Según el metaanálisis de Papapanou (1996), ¿cuál fue el odds ratio global del tabaquismo como factor de riesgo de periodontitis severa?",
      "answer": "El OR global estimado fue de 2.82 (IC 95% 2.36–3.39), confirmando el tabaquismo como un factor de riesgo estadística y clínicamente significativo para la enfermedad periodontal severa."
    }
  ],
  "cap_5": [
    {
      "question": "¿De qué depende la formación y preservación del proceso alveolar?",
      "answer": "El proceso alveolar se forma en armonía con el desarrollo y la erupción de los dientes, y regresa gradualmente cuando estos se pierden; su formación y preservación dependen de la presencia continua de los dientes."
    },
    {
      "question": "¿Qué tres estructuras forman la unidad funcional que rodea al diente y transmite las fuerzas masticatorias al hueso alveolar?",
      "answer": "El cemento radicular, el ligamento periodontal y el hueso fasciculado (bundle bone), que en conjunto dispersan las fuerzas de la corona hacia el proceso alveolar."
    },
    {
      "question": "Según el estudio de Bergman & Carlsson (1985) en portadores de prótesis completas, ¿qué ocurrió con el reborde durante el seguimiento cefalométrico de 2 días a 21 años?",
      "answer": "La mayor parte del componente óseo duro del reborde se perdió con el tiempo, aunque con amplia variación individual en el grado de reabsorción y en la cantidad de hueso remanente entre pacientes."
    },
    {
      "question": "Según Pietrokovski y Massler (1967), ¿en qué proporción se reabsorbe el reborde en el aspecto vestibular comparado con el lingual/palatino tras la pérdida de un diente?",
      "answer": "La reabsorción vestibular fue aproximadamente el doble que la reabsorción lingual/palatina en todos los grupos dentarios estudiados."
    },
    {
      "question": "¿Qué consecuencia topográfica produce la mayor reabsorción vestibular respecto a la lingual/palatina tras la extracción dentaria?",
      "answer": "El centro del sitio edéntulo se desplaza hacia el lado lingual o palatino del reborde, con disminución de la longitud de arco."
    },
    {
      "question": "Según Schropp et al. (2003), ¿qué porcentaje de la anchura buccolingual/palatina se pierde a los 3 meses y a los 12 meses tras la extracción de un premolar o molar?",
      "answer": "Alrededor del 30% de la anchura se pierde en los primeros 3 meses, y al menos el 50% del ancho original se pierde a los 12 meses."
    },
    {
      "question": "Según Schropp et al. (2003), ¿cómo cambia la posición de la cresta vestibular respecto a la lingual/palatina después de 12 meses de cicatrización?",
      "answer": "La prominencia vestibular queda ubicada aproximadamente 1.2 mm apical respecto a su contraparte lingual/palatina."
    },
    {
      "question": "Según Sanz et al. (2010) y Tomasi et al. (2010), ¿qué factor determina el grado de reabsorción temprana (4 meses) de la tabla ósea vestibular tras la extracción?",
      "answer": "La dimensión original de la tabla ósea vestibular: las tablas óseas de menos de 1 mm de espesor pierden sustancialmente más dimensión (ancho y alto) que las de más de 1 mm."
    },
    {
      "question": "¿Qué prevalencia tiene la tabla ósea vestibular delgada (<1 mm) en la región anterior maxilar según estudios con CBCT?",
      "answer": "Más del 80% de los sitios en la región anterior presentan una tabla ósea vestibular menor a 1 mm de espesor, lo que predispone a alteraciones dimensionales marcadas y preocupaciones estéticas tras la pérdida dentaria."
    },
    {
      "question": "Según las biopsias de Lindhe et al. (2012), ¿cuál es la composición tisular del componente duro del reborde edéntulo?",
      "answer": "Aproximadamente 60% hueso mineralizado, 20% médula ósea y 15% tejido fibroso."
    },
    {
      "question": "Según la clasificación de Lekholm y Zarb (1985), ¿cómo se dividen los sitios edéntulos según el volumen de hueso remanente?",
      "answer": "En cinco grupos (A a E): en los grupos A y B queda una cantidad sustancial de reborde, mientras que en los grupos C, D y E solo quedan cantidades mínimas de tejido duro."
    },
    {
      "question": "Según Lekholm y Zarb (1985), ¿cómo se clasifica la calidad ósea del sitio edéntulo?",
      "answer": "En cuatro clases (1 a 4): las clases 1 y 2 presentan paredes corticales gruesas y poco hueso esponjoso, mientras que las clases 3 y 4 tienen corticales delgadas y abundante hueso canceloso (trabecular)."
    },
    {
      "question": "¿Cómo se denomina el proceso por el cual el capuchón óseo que cierra la entrada del alvéolo pasa de hueso reticular (woven bone) a hueso laminar continuo con la cortical periférica?",
      "answer": "Corticalización."
    },
    {
      "question": "¿En qué dos series de eventos interrelacionados se divide, con fines didácticos, la transformación del proceso alveolar tras la extracción de un diente?",
      "answer": "Procesos intra-alveolares (dentro del alvéolo) y procesos extra-alveolares (cambios en el contorno externo del reborde)."
    },
    {
      "question": "Según Amler (1969), ¿qué eventos caracterizan las primeras 24 horas y la primera semana tras la extracción dentaria?",
      "answer": "En las primeras 24 horas se forma un coágulo sanguíneo; en 2-3 días es reemplazado por tejido de granulación; a los 4-5 días el epitelio marginal comienza a proliferar; y a la semana el alvéolo contiene tejido de granulación y conectivo joven, con formación de osteoide en la porción apical."
    },
    {
      "question": "Según Trombelli et al. (2008), ¿cómo se comparan los procesos de modelado (tissue modeling) y remodelado (remodeling) del alvéolo tras la extracción en humanos?",
      "answer": "El modelado tisular es un proceso relativamente rápido, mientras que el remodelado (reemplazo de hueso reticular por hueso laminar y médula) es lento, con gran variación individual y puede tardar años en completarse."
    },
    {
      "question": "¿Cuáles son las características distintivas del hueso reticular (woven bone) formado en la cicatrización del alvéolo?",
      "answer": "Se deposita rápidamente en forma de proyecciones digitiformes a lo largo de los vasos, tiene una matriz colágena poco organizada, contiene gran número de osteoblastos atrapados y posee baja capacidad de carga."
    },
    {
      "question": "¿Qué sucede con el hueso fasciculado (bundle bone) de las paredes del alvéolo durante la fase temprana de cicatrización?",
      "answer": "Al ser un tejido dependiente del diente, la mayor parte del hueso fasciculado de las paredes del alvéolo es reabsorbido y reemplazado por hueso reticular."
    },
    {
      "question": "¿Qué componentes celulares integran la unidad multicelular ósea (BMU) responsable de reemplazar el hueso reticular por hueso laminar?",
      "answer": "Osteoclastos, estructuras vasculares y osteoblastos, que forman hueso laminar con osteonas secundarias alrededor del vaso en un patrón concéntrico."
    },
    {
      "question": "¿Qué es la 'línea de reversión' (reversal line) en el proceso de remodelado óseo?",
      "answer": "Es el nivel hasta donde se reabsorbe el hueso reticular preexistente, y a partir del cual comienza a formarse el nuevo hueso laminar con osteonas secundarias."
    },
    {
      "question": "En el modelo experimental en perros de Araújo & Lindhe (2005), ¿qué diferencia se observó entre la pared vestibular y la lingual tras 8 semanas de cicatrización del alvéolo?",
      "answer": "El margen de la pared lingual se mantuvo relativamente estable, mientras que el margen de la pared vestibular se desplazó varios milímetros en dirección apical (más de 2 mm)."
    },
    {
      "question": "¿Por qué se atribuye una mayor pérdida ósea vestibular que lingual durante la cicatrización del alvéolo, según el estudio de Araújo & Lindhe?",
      "answer": "Porque, previo a la extracción, la cresta de la delgada pared vestibular estaba ocupada en mayor proporción por hueso fasciculado (dependiente del diente) que la cresta de la pared lingual, más ancha, por lo que al perderse este tejido la reabsorción vestibular es más marcada."
    },
    {
      "question": "¿Qué papel cumple el coágulo sanguíneo (blood clot) en la fase inicial de la cicatrización del alvéolo?",
      "answer": "Actúa como matriz física que dirige el movimiento celular y contiene factores de crecimiento que influyen en células mesenquimales y potencian la actividad de células inflamatorias, iniciando y amplificando la cicatrización."
    },
    {
      "question": "¿Qué papel cumplen los neutrófilos y macrófagos en la fase de 'limpieza de la herida' tras la extracción dentaria?",
      "answer": "Migran al alvéolo, fagocitan bacterias y tejido dañado, limpiando el sitio antes de la formación de nuevo tejido; los macrófagos además liberan factores de crecimiento y citocinas que promueven la migración y diferenciación de células mesenquimales."
    },
    {
      "question": "¿Qué dos procesos combinados dan lugar al tejido conectivo provisional durante la cicatrización del alvéolo, y cuál es la relevancia clínica general de la reabsorción del reborde edéntulo para la implantología?",
      "answer": "La fibroplasia (síntesis de matriz por fibroblastos) y la angiogénesis (formación de nuevos vasos) forman el tejido conectivo provisional; clínicamente, la reabsorción predominantemente vestibular y la frecuente delgadez (<1 mm) de la tabla ósea vestibular anterior condicionan el volumen óseo disponible, la posición del implante y el resultado estético del tratamiento."
    }
  ],
  "cap_6": [
    {
      "question": "¿Qué es el \"ancho biológico\" de la encía?",
      "answer": "Es la dimensión del tejido blando que se une al diente, compuesta por el epitelio de unión (epitelial attachment) y el tejido conectivo supraalveolar; no incluye el surco gingival."
    },
    {
      "question": "Según Gargiulo et al. (1961), ¿cuáles fueron las medidas del ancho biológico en condiciones normales?",
      "answer": "El tejido conectivo de inserción midió entre 1.06 y 1.08 mm, y el epitelio de unión unos 1.4 mm, dando un ancho biológico total de aproximadamente 2.5 mm."
    },
    {
      "question": "¿Qué componente del ancho biológico es el más variable según Gargiulo et al.?",
      "answer": "El epitelio de unión (attachment epitelial) es el componente más variable, mientras que el tejido conectivo se mantiene dentro de límites estrechos (1.06-1.08 mm)."
    },
    {
      "question": "¿Cómo cambia el ancho biológico en casos de enfermedad periodontal avanzada?",
      "answer": "Se reduce a aproximadamente 1.8 mm (frente a 2.5 mm en condiciones normales), principalmente por la disminución de la longitud del epitelio de unión (hasta 0.7 mm)."
    },
    {
      "question": "¿Cuáles son los dos biotipos gingivales descritos por Oschenbein y Ross (1969) y Becker et al. (1997)?",
      "answer": "El biotipo \"festoneado pronunciado\" (pronounced scalloped) y el biotipo \"plano\" (flat)."
    },
    {
      "question": "Describa las características del biotipo gingival festoneado pronunciado.",
      "answer": "Dientes largos y delgados, encía delgada y de zona estrecha, papilas altas y delgadas, hueso vestibular fino, y mayor riesgo de recesión gingival en el maxilar anterior."
    },
    {
      "question": "Describa las características del biotipo gingival plano.",
      "answer": "Dientes cortos y cuadrados con convexidad cervical marcada, encía más ancha y voluminosa, papilas cortas, hueso vestibular grueso, y menor riesgo de recesión gingival."
    },
    {
      "question": "Según Kan et al. (2003), ¿cuál fue la altura de la encía bucoaproximal medida por sondeo óseo en los distintos biotipos?",
      "answer": "En biotipo plano fue en promedio 4.5 mm, y en biotipo festoneado pronunciado fue significativamente menor, 3.8 mm."
    },
    {
      "question": "¿Qué observaron Pontoriero y Carnevale (2001) tras un procedimiento de alargamiento coronario con denudación ósea?",
      "answer": "A 1 año, la regeneración del tejido blando fue mayor en pacientes con biotipo grueso/plano (3.1 mm) que en pacientes con biotipo delgado/festoneado (2.5 mm)."
    },
    {
      "question": "¿Cómo influye la posición bucolingual del diente en el grosor de la encía vestibular?",
      "answer": "Un desplazamiento del diente hacia vestibular reduce el grosor de la encía bucal, mientras que un movimiento hacia lingual lo aumenta."
    },
    {
      "question": "Según Tarnow et al. (1992), ¿qué relación existe entre la distancia punto de contacto-cresta ósea y la presencia de papila interdental?",
      "answer": "Si la distancia es ≤5 mm la papila está siempre presente; con 6 mm hay relleno papilar en ~50% de los casos; y con ≥7 mm la papila está incompleta en ~75% de los casos."
    },
    {
      "question": "¿Cuál es la altura máxima aproximada que puede alcanzar la papila interdental según los hallazgos de Tarnow et al.?",
      "answer": "Aproximadamente 4 mm, considerando que el tejido conectivo supracrestal de inserción mide alrededor de 1 mm."
    },
    {
      "question": "¿Qué es la mucosa periimplantaria?",
      "answer": "Es el tejido blando que rodea a los implantes dentales, formado durante la cicatrización tras la instalación del implante o la conexión del pilar, y que constituye un sello (attachment transmucoso) que protege el hueso de los productos de la cavidad oral."
    },
    {
      "question": "¿Cuáles son las dimensiones del ancho biológico periimplantario según Berglundh y Lindhe (1996)?",
      "answer": "El epitelio barrera mide aproximadamente 2 mm de largo y la zona de tejido conectivo supraalveolar entre 1.3 y 1.8 mm de altura."
    },
    {
      "question": "¿Cuál es la principal diferencia en la orientación de las fibras de colágeno entre el diente y el implante?",
      "answer": "En el diente, las fibras principales se insertan perpendicularmente en el cemento radicular; en el implante, las fibras corren paralelas a la superficie del implante sin insertarse en él (por ausencia de cemento)."
    },
    {
      "question": "¿Cómo se compara la calidad del tejido conectivo periimplantario con el de la encía?",
      "answer": "El tejido conectivo periimplantario contiene más fibras de colágeno pero menos fibroblastos y estructuras vasculares que el tejido conectivo gingival equivalente."
    },
    {
      "question": "¿Qué materiales de pilar (abutment) permiten un attachment mucoso similar al titanio?",
      "answer": "El óxido de aluminio sinterizado (Al2O3) y el óxido de circonio (ZrO2) permiten una inserción del tejido conectivo similar a la del titanio; en cambio, el oro y la porcelana dental producen una cicatrización mucosa inferior."
    },
    {
      "question": "¿Cuáles son las dos fuentes de irrigación vascular de la encía?",
      "answer": "Los vasos supraperiósticos (que forman los capilares bajo el epitelio oral y el plexo lateral al epitelio de unión) y el plexo vascular del ligamento periodontal."
    },
    {
      "question": "¿Cuál es la fuente de irrigación vascular de la mucosa periimplantaria y en qué se diferencia de la de la encía?",
      "answer": "Proviene únicamente de los vasos supraperiósticos, ya que al no existir ligamento periodontal en los implantes, falta el plexo vascular correspondiente; por ello el tejido conectivo periimplantario contiene menos vasos."
    },
    {
      "question": "Según Ericsson y Lindhe (1993), ¿cuál fue la profundidad de sondaje histológica en dientes versus implantes sanos?",
      "answer": "En dientes fue de aproximadamente 0.7 mm, mientras que en implantes fue notablemente mayor, alrededor de 2.0 mm."
    },
    {
      "question": "Según Abrahamsson y Soldini (2006), ¿cómo se compara la posición de la punta de la sonda respecto a la cresta ósea en dientes e implantes sanos con fuerza de sondaje normal (0.2 N)?",
      "answer": "La distancia entre la punta de la sonda y la cresta ósea fue similar en ambos, aproximadamente 1 mm."
    },
    {
      "question": "Según Chang et al. (1999), ¿cómo se comparan el grosor de la mucosa vestibular y la profundidad de sondaje entre implantes unitarios y dientes naturales contralaterales?",
      "answer": "La mucosa vestibular fue más gruesa en implantes (2.0 mm) que en dientes naturales (1.1 mm), y la profundidad de sondaje también fue mayor en implantes (2.9 mm) que en dientes (2.5 mm)."
    },
    {
      "question": "Según Kan et al. (2003), ¿qué altura de mucosa vestibular se observó en la mayoría de los implantes anteriores del maxilar?",
      "answer": "Entre 3 y 4 mm en la mayoría de los casos; menos de 3 mm se asoció a biotipo periodontal delgado, posición muy vestibularizada del implante o prótesis sobrecontorneada."
    },
    {
      "question": "Según Choquet et al. (2001), ¿cuál fue la altura consistente de la papila entre diente e implante?",
      "answer": "Aproximadamente 4 mm, y el relleno papilar (completo o incompleto) dependía de la ubicación del punto de contacto entre las coronas."
    },
    {
      "question": "Según Tarnow et al. (2003), ¿cuál es la altura media de la \"papila\" entre implantes adyacentes?",
      "answer": "La altura media fue de 3.4 mm, con el 90% de las mediciones entre 2 y 4 mm."
    }
  ],
  "cap_7": [
    {
      "question": "¿Quién propuso originalmente el término 'osteointegración' y en qué año?",
      "answer": "Brånemark et al. propusieron el término en 1969."
    },
    {
      "question": "¿Cómo definieron Albrektsson et al. (1981) la osteointegración?",
      "answer": "Como 'una conexión funcional y estructural directa entre el hueso vivo y la superficie de un implante que soporta carga'."
    },
    {
      "question": "¿Cómo definieron Zarb y Albrektsson (1991) la osteointegración?",
      "answer": "Como 'un proceso mediante el cual se logra y mantiene la fijación rígida y clínicamente asintomática de materiales aloplásticos en el hueso durante la carga funcional'."
    },
    {
      "question": "¿Qué término utilizó Schroeder para describir la fijación rígida del implante al hueso maxilar y qué condición requiere?",
      "answer": "Utilizó el término 'anquilosis funcional'; requiere que se sigan las reglas de colocación atraumática del implante y que este exhiba estabilidad primaria."
    },
    {
      "question": "¿Qué es la estabilidad primaria de un implante y de dónde resulta?",
      "answer": "Es la fijación inicial adecuada del implante tras su instalación; resulta del contacto y la fricción entre el hueso mineralizado (a menudo cortical) del lecho receptor y el dispositivo metálico."
    },
    {
      "question": "Según la regla básica de instalación de implantes, ¿qué relación existe entre el trauma quirúrgico y la formación de hueso nuevo?",
      "answer": "Cuanto menos traumático es el procedimiento quirúrgico y menor la lesión tisular, más rápido es el proceso de formación de hueso nuevo sobre la superficie del implante."
    },
    {
      "question": "¿Qué es el efecto de 'press fit' durante la instalación del implante?",
      "answer": "Ocurre cuando el implante insertado es ligeramente más ancho que el canal preparado, comprimiendo el hueso mineralizado circundante y provocando microfracturas y colapso de vasos sanguíneos."
    },
    {
      "question": "¿Qué consecuencias tiene el 'press fit' sobre el tejido óseo cortical circundante?",
      "answer": "El hueso se comprime y presenta microfracturas, los vasos sanguíneos corticales colapsan, se compromete la nutrición del hueso y el tejido afectado suele volverse no vital."
    },
    {
      "question": "¿Qué ocurre en el compartimento óseo cortical durante la cicatrización tras la instalación del implante?",
      "answer": "El tejido mineralizado no vital debe ser removido (reabsorbido) primero antes de que pueda formarse hueso nuevo."
    },
    {
      "question": "Describa la secuencia de cicatrización en el compartimento esponjoso (cancelloso) del lecho receptor.",
      "answer": "Se forma un coágulo por sangrado, que es reabsorbido y reemplazado por tejido de granulación, luego por matriz de tejido conectivo provisional y finalmente por osteoide, donde se depositan cristales de hidroxiapatita formando hueso reticular (woven bone)."
    },
    {
      "question": "¿Qué diferencia principal existe entre implantes 'no cortantes' y 'cortantes' (self-tapping)?",
      "answer": "Los implantes no cortantes requieren que el lecho receptor sea pretallado con un macho de rosca (thread-tap) antes de la inserción; los cortantes tienen bordes de corte en su porción apical que tallan su propia rosca durante la inserción."
    },
    {
      "question": "En un implante no cortante tipo Straumann, ¿cómo se logra la estabilidad primaria?",
      "answer": "Mediante la gran área de contacto lograda entre el tornillo metálico y las paredes óseas bucal y lingual en el compartimento cortical del lecho receptor."
    },
    {
      "question": "¿Qué se observó tras 16 semanas de cicatrización en un implante no cortante?",
      "answer": "Las porciones marginales del implante estaban rodeadas de hueso laminar denso en contacto directo con la superficie rugosa, y en la zona apical una fina capa de hueso maduro separaba el implante de la médula ósea."
    },
    {
      "question": "En el implante autorroscante (self-tapping) tipo AstraTech, ¿qué se observó a las 2 semanas de cicatrización?",
      "answer": "La porción externa de la rosca estaba en contacto con hueso 'viejo', mientras que la formación de hueso nuevo predominaba en las invaginaciones entre las roscas y en zonas laterales a la porción apical del implante."
    },
    {
      "question": "¿Qué es la 'cámara de la herida' (wound chamber) en el modelo experimental de Berglundh y Abrahamsson?",
      "answer": "Es el espacio geométricamente definido entre el paso de rosca (pitch) y el cuerpo del implante, creado por un surco circunferencial en forma de U de 0.4 mm de profundidad, donde ocurre el proceso de cicatrización."
    },
    {
      "question": "¿Qué contenía la cámara de la herida 2 horas después de la instalación del implante?",
      "answer": "Estaba ocupada por un coágulo sanguíneo con eritrocitos, neutrófilos y monocitos/macrófagos atrapados en una red de fibrina, encargados del proceso de limpieza de la herida."
    },
    {
      "question": "¿Qué caracteriza la fase de fibroplasia (4 días de cicatrización) en la cámara de la herida?",
      "answer": "El coágulo es reemplazado en parte por tejido de granulación con numerosas células mesenquimales, componentes de matriz y nuevas estructuras vasculares (angiogénesis), estableciéndose una matriz de tejido conectivo provisional."
    },
    {
      "question": "¿Qué se considera la primera fase de la osteointegración según el estudio en perros?",
      "answer": "El contacto entre la superficie del implante y el hueso reticular (woven bone) recién formado, observado a la primera semana de cicatrización."
    },
    {
      "question": "Defina osteogénesis a distancia (distance osteogenesis) y osteogénesis de contacto (contact osteogenesis) según Davies (1998).",
      "answer": "Osteogénesis a distancia: el hueso nuevo se forma proyectándose desde la pared ósea cortada (formación ósea aposicional); osteogénesis de contacto: el hueso nuevo se forma de novo directamente sobre la superficie del implante, a distancia del hueso original."
    },
    {
      "question": "¿Qué ocurre durante el remodelado óseo tras 6-12 semanas de cicatrización?",
      "answer": "La mayoría de las cámaras de la herida se llenan de hueso mineralizado, incluyendo osteonas primarias y secundarias, y las trabéculas de hueso reticular son reemplazadas por hueso laminar maduro y médula ósea."
    },
    {
      "question": "En los estudios en humanos (Bosshardt, Donos, Ivanovski, Lang 2011), ¿en qué zona del maxilar se colocaron los implantes y con qué método se recuperaron las biopsias?",
      "answer": "Se colocaron en la región retromolar de la mandíbula, con cicatrización sumergida, y las biopsias se obtuvieron con trefina a la 1, 2, 4 y 6 semanas."
    },
    {
      "question": "Según el histograma de composición de la interfase tejido-implante en humanos, ¿cuándo es más activo el proceso de osteointegración?",
      "answer": "En el intervalo entre las 2 y las 6 semanas de cicatrización, cuando el hueso nuevo aumenta marcadamente mientras disminuyen el hueso viejo, los restos óseos y el tejido blando."
    },
    {
      "question": "¿Qué composición tenía la interfase tejido-implante después de 1 semana de cicatrización en humanos?",
      "answer": "Aproximadamente el 40% era tejido blando (tejido de granulación/conectivo provisional) y un 45% adicional correspondía a restos óseos y hueso viejo, con poco hueso nuevo formado."
    },
    {
      "question": "¿Qué son las lagunas de Howship y cuándo se observaron en las biopsias de implantes en humanos?",
      "answer": "Son áreas de reabsorción de tejido duro; se observaron a las 2 semanas de cicatrización, adyacentes y a distancia del implante."
    },
    {
      "question": "¿Qué hallazgo histológico caracteriza el intervalo de 6 semanas en las biopsias humanas de implantes?",
      "answer": "Grandes cantidades de hueso reticular (woven bone) recién formado, así como hueso laminar y médula ósea, en estrecha proximidad al implante, indicando un contacto hueso-implante más estable (osteointegración)."
    }
  ],
  "cap_8": [
    {
      "question": "¿Qué es la osteopercepción u osseoperception?",
      "answer": "Es la percepción de estímulos externos transmitidos a través de un implante y del hueso, mediante la activación de receptores localizados en el entorno periimplantario, periostio, piel, músculos y/o articulaciones, con un papel clave del periostio."
    },
    {
      "question": "¿Qué nervio transporta las señales sensoriales de la región oral hacia el tronco encefálico?",
      "answer": "El nervio trigémino, a través de sus divisiones mandibular y maxilar, que llegan al ganglio trigeminal y luego al tronco encefálico."
    },
    {
      "question": "¿A qué núcleos se transmiten las señales aferentes trigeminales según el tipo de sensación?",
      "answer": "Al núcleo sensorial principal del trigémino (tacto ligero, presión) o al núcleo del tracto espinal descendente (dolor, temperatura, presión profunda, mucosa oral)."
    },
    {
      "question": "¿Qué estructura anatómica mandibular a menudo no se visualiza en radiografías intraorales y panorámicas convencionales?",
      "answer": "El canal incisivo mandibular (continuación anterior del nervio mandibular como nervio incisivo mandibular), que requiere imágenes transversales (CBCT) para su correcta localización."
    },
    {
      "question": "¿Qué prevalencia tienen los forámenes mentonianos accesorios?",
      "answer": "Aproximadamente el 9%, y suelen ser más pequeños y estar localizados más posteriormente que el foramen mentoniano principal."
    },
    {
      "question": "¿Qué contienen los forámenes espinales geniales superior e inferior de la mandíbula?",
      "answer": "El foramen espinal genial superior contiene una rama de la arteria, vena y nervio lingual; el inferior contiene una rama del nervio milohioideo junto con ramas o anastomosis de arterias y venas sublinguales y/o submentonianas."
    },
    {
      "question": "¿Qué complicación se ha descrito tras la colocación de implantes en la región interforaminal mandibular?",
      "answer": "Alteraciones sensoriales por trauma directo o indirecto (hematoma) sobre el paquete neurovascular del canal incisivo mandibular, que puede transmitir presión hasta la rama mentoniana principal."
    },
    {
      "question": "¿Qué estructura anatómica maxilar debe tenerse en cuenta al colocar implantes en la región de incisivos superiores?",
      "answer": "El canal nasopalatino, que aloja al nervio nasopalatino (rama del nervio maxilar) y presenta forma de Y con los forámenes de Stenson, y variabilidad morfológica importante."
    },
    {
      "question": "¿Qué canal palatino al canino puede alojar la rama alveolar superior anterior?",
      "answer": "El canalis sinuosus, que debe evitarse durante la colocación de implantes en la región del canino para prevenir trauma neurovascular."
    },
    {
      "question": "¿Cuáles son los tres tipos de terminaciones nerviosas presentes en el ligamento periodontal?",
      "answer": "Terminaciones nerviosas libres, terminaciones tipo Ruffini y corpúsculos lamelados."
    },
    {
      "question": "¿Qué tipo de terminación nerviosa es predominante en el ligamento periodontal y dónde se localiza principalmente?",
      "answer": "Las terminaciones tipo Ruffini, predominantemente en la porción apical del ligamento periodontal, en estrecho contacto con las fibras de colágeno."
    },
    {
      "question": "¿Cuál es el umbral de detección táctil activa (grosor) del ligamento periodontal en un diente natural?",
      "answer": "Igual o menor a 10-20 μm, lo que refleja la extrema sensibilidad de los mecanorreceptores periodontales."
    },
    {
      "question": "¿Por qué la extracción dental se compara con una amputación desde el punto de vista neurofisiológico?",
      "answer": "Porque destruye el órgano diana (diente) y las estructuras nerviosas periféricas asociadas, eliminando los receptores del ligamento periodontal."
    },
    {
      "question": "¿En qué porcentaje se reduce el contenido de fibras mielinizadas del nervio alveolar inferior tras la extracción dental?",
      "answer": "En un 20%, según Heasman (1984), lo que sugiere que persisten fibras originalmente destinadas al diente y ligamento periodontal."
    },
    {
      "question": "¿Qué evidencia histológica sustenta la reinervación periimplantaria?",
      "answer": "Se observa degeneración inicial de fibras neurales por el trauma quirúrgico, seguida de brote de nuevas fibras y aumento gradual de terminaciones nerviosas libres cerca de la interfase hueso-implante durante las primeras semanas de cicatrización."
    },
    {
      "question": "¿Qué receptores se postulan como responsables de la osteopercepción en ausencia de ligamento periodontal?",
      "answer": "Mecanorreceptores del hueso periimplantario y, especialmente, del periostio circundante, que se activarían por la deformación ósea al cargar el implante."
    },
    {
      "question": "¿Cuáles son los dos métodos principales para evaluar la función táctil oral?",
      "answer": "Métodos neurofisiológicos (potenciales evocados somatosensoriales trigeminales, TSEPs; fMRI) y métodos psicofísicos (basados en la respuesta subjetiva del paciente ante estímulos estandarizados)."
    },
    {
      "question": "Compare el umbral de detección activa de grosor entre dentición natural, dentadura removible e implantes.",
      "answer": "El umbral es de aproximadamente 20 μm en dientes naturales, 150 μm en dentaduras (7-8 veces mayor) y 50 μm en prótesis implantosoportadas (3-5 veces mayor)."
    },
    {
      "question": "Compare el umbral de detección pasiva de fuerza entre dientes, dentaduras e implantes.",
      "answer": "En dientes naturales es de aproximadamente 2 g; en dentaduras aumenta unas 55 veces (150 g) y en implantes unas 50 veces (100 g)."
    },
    {
      "question": "¿Por qué existe una gran discrepancia entre los umbrales activos y pasivos tras la pérdida de dientes?",
      "answer": "Porque la detección activa de grosor puede involucrar varios grupos de receptores (incluidos periosteales/musculares), mientras que la detección pasiva de fuerza depende selectivamente de los receptores del ligamento periodontal, que se eliminan con la extracción."
    },
    {
      "question": "Mencione tres factores clínicos que aumentan el umbral táctil (disminuyen la función táctil) según el Cuadro 6-1 del capítulo.",
      "answer": "Periodontitis, bruxismo y extracción dental (también anestesia, envejecimiento, polineuropatía, reimplantación y masticación prolongada)."
    },
    {
      "question": "¿Qué evidencia neurofisiológica apoya la existencia de plasticidad cortical relacionada con la osteopercepción?",
      "answer": "Los potenciales evocados somatosensoriales trigeminales (TSEPs) generados tras estimulación eléctrica de implantes osteointegrados, que persisten incluso con anestesia tópica de tejidos blandos periimplantarios, indicando origen en receptores óseos/periosteales."
    },
    {
      "question": "¿Qué mostró el estudio de fMRI de Habre-Hallage al estimular dientes e implantes con estímulos táctiles puntuales?",
      "answer": "Ambos activaron la corteza somatosensorial, pero el implante activó una red cortical bilateral más amplia fuera de las áreas somatosensoriales clásicas, evidenciando plasticidad cerebral."
    },
    {
      "question": "¿Qué es el fenómeno del 'diente fantasma' y con qué otro fenómeno se relaciona?",
      "answer": "Es la percepción consciente de un diente perdido tras la extracción, análogo al 'miembro fantasma' tras una amputación; podría reforzar la sensación de una prótesis anclada al hueso."
    },
    {
      "question": "¿Qué implicaciones clínicas se derivan del umbral táctil aumentado en implantes durante la rehabilitación protésica?",
      "answer": "El odontólogo no debe basarse en la percepción oclusal del paciente, debe considerar el aumento gradual de la función táctil durante la cicatrización, recomendar dieta blanda para evitar sobrecarga, y valorar el bruxismo como contraindicación relativa a la carga inmediata."
    }
  ]
};

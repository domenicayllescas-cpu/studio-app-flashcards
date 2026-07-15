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
  ],
  "cap_9": [
    {
      "question": "En un paciente de 34 años de edad se encuentra caries oclusal en el 24, con respuesta pulpar disminuida aunque algo sensible a la percusión; radiográficamente se observa una lesión apical radiolúcida, circular, bien definida. Los hallazgos histológicos revelaron un contenido de fibroblastos, vasos sanguíneos, al igual que células plasmáticas, linfocitos y fagocitos mononucleares. Estos hallazgos corresponden a un:",
      "answer": "Granuloma periapical."
    },
    {
      "question": "Paciente de 5 años que presenta ulceras intraorales de 4 días de evolución precedidas por vesículas en zona de encías y paladar duro y mucosa no queratinizada, con fiebre y malestar general. Cual es su impresión diagnóstica?",
      "answer": "Gingivoestomatis herpética."
    },
    {
      "question": "Paciente adulto con absceso orofacial que no responde a la terapia con penicilina cristalina. Como resultado del cultivo se reportan microorganismos productores de beta-lactamasa, se decide utilizar amoxicilina más ácido clavulánico. Con respecto a esta combinación cabe anotar que:",
      "answer": "Facilita la actividad antimicrobiana de la amoxicilina."
    },
    {
      "question": "Paciente de 19 años con insuficiencia valvular mitral, a quien se le hará exodoncia de restos radiculares de 36, para lo cual se realiza profilaxis antibiótica con amoxicilina. El procedimiento duró 15 minutos. En relación con la prescripción para la profilaxis puede afirmarse que:",
      "answer": "Se debe administrar dosis única de 2g 1 hora antes del procedimiento."
    },
    {
      "question": "Al realizar la exodoncia de un 38 incluido se produjo una hemorragia intensa debido al compromiso de las raíces con el conducto mandibular. El manejo más indicado en este tipo de complicación intraoperatoria sería:",
      "answer": "Si la exodoncia ha finalizado taponar el alvéolo con material hemostático y suturar."
    },
    {
      "question": "Paciente de 24 años quien consulta por trauma facial por accidente de tránsito. Clínicamente presenta asimetría facial en región malar izquierda con edema y equimosis periorbitaria. Para confirmar una fractura en el complejo cigomático-malar, la radiografía de elección es:",
      "answer": "De Watters."
    },
    {
      "question": "Un odontólogo realiza exodoncia de tres molares incluidos con odontectomía y prescribe ibuprofeno 400 mg cada 6 horas, asociándolo con diclofenac 50 mg cada 12 horas por siete dias. Frente a esta prescripción usted considera que:",
      "answer": "Los dos fármacos tienen el mismo mecanismo de acción y efecto farmacológico."
    },
    {
      "question": "Para la exodoncia de un segundo molar inferior es necesario anestesiar:",
      "answer": "Los nervios dentario inferior, lingual y largo bucal."
    },
    {
      "question": "Al realizar exodoncias en el maxilar superior, una de las complicaciones que más frecuentemente se presenta es la comunicación oroantral. El procedimiento indicado para el manejo de este caso es:",
      "answer": "Cierre inmediato del alvéolo mediante sutura."
    },
    {
      "question": "Un paciente de 25 años presenta fractura a nivel del ángulo mandibular derecho, la cual ya ha sido fijada e inmovilizada. Para que se inicie la formación del callo primario es necesario que:",
      "answer": "Se movilicen osteoblastos desde periostio y endostio."
    },
    {
      "question": "Cual es el manejo terapéutico INMEDIATO de una luxación condilar espontánea de la articulación temporomandibular?",
      "answer": "Manipulación de Nelaton (distracción), únicamente."
    },
    {
      "question": "El factor etiológico principal de la anquilosis fibrosa de la articulación temporomandibular es:",
      "answer": "Micro trauma."
    },
    {
      "question": "Paciente de 8 años de edad quien sufrió trauma dentoalveolar de 2 días de evolución. Al examen clínico y radiográfico se observa intrusión del 100% del central superior derecho permanente. Indique el tratamiento de elección:",
      "answer": "Esperar reerupción por lo menos seis meses."
    },
    {
      "question": "Paciente de 7 años de edad quien asiste por presentar dolor al dulce a nivel del 85, presenta al examen clínico caries activa cavitacional MOD, radiograficamente se observa zona radiolucida que involucra tejido pulpar. Indique el tratamiento a seguir:",
      "answer": "Pulpotomia y corona de acero."
    },
    {
      "question": "Paciente de 6 años de edad y 20 kg de peso, madre refiere a la anamnesis haber presentado fiebre de 38 grados, con historia de recubrimiento pulpar indirecto profundo, al examen clínico presenta borramiento del surco yugal, sintomatología dolorosa a la percusión y presión a nivel del 65, radiográfica mente se observa obturación en limite dentino pulpar. El diagnostico pulpar es:",
      "answer": "Periodontitis apical aguda no supurativa."
    },
    {
      "question": "Paciente de cuatro años de edad quien asiste por primera vez a consulta odontológica. Clínicamente se observa espacios cerrados y caries activa no cavitacional en segundos molares inferiores. Las radiografías indicadas para diagnosticar este paciente son:",
      "answer": "Coronales."
    },
    {
      "question": "Un paciente de 12 años con una mordida cruzada anterior. Al manipularlo logra una relación borde a borde. Usted lo diagnosticaría como:",
      "answer": "Pseudo clase III."
    },
    {
      "question": "La maloclusión clase II división 1 dentoalveolar puede presentar:",
      "answer": "Protrusion alveolar superior."
    },
    {
      "question": "En la triada etiológica de los hábitos, para que estos se consideren como deletéreos y causantes de una maloclusion incluye:",
      "answer": "Frecuencia, duración e intensidad."
    },
    {
      "question": "La edad ideal para interceptar y corregir una mordida cruzada posterior unilateral en un paciente es :",
      "answer": "Tan pronto como se detecte."
    },
    {
      "question": "En la terminología utilizada para la clasificación y descripción de las maloclusiones, la proquelia es:",
      "answer": "Posición adelantada de los labios."
    },
    {
      "question": "Los métodos de análisis en dentición mixta sirven para determinar:",
      "answer": "Determinar espacio disponible para premolares y canino."
    },
    {
      "question": "La periodontitis agresivas pueden clasificarse según su distribución en localizadas y generalizadas. El signo característico de las periodontitis agresivas localizadas es que:",
      "answer": "Afectan más frecuentemente primeros molares e incisivos."
    },
    {
      "question": "El diagnóstico radiológico es pilar fundamental en el estudio para la colocación de implantes dentales. La radiografía considerada de alta exactitud para valorar los maxilares y que permite valorar en las tres dimensiones del tejido es la:",
      "answer": "Tomografía axial computarizada."
    },
    {
      "question": "En la reevaluación de la fase higiénica de un paciente sistémicamente sano, se encuentra en 16 lesión de furca grado III que involucra la raíz meso vestibular y bolsa periodontal de 11 mm. En mesial; las otras raíces (Distal y palatina) están sanas, radiográficamente se observa separación de las raíces, tratamiento endodóntico y perforación de la raíz mesial en la zona media. El tratamiento de elección debe ser:",
      "answer": "Amputación de la raíz mesial."
    },
    {
      "question": "El diagnóstico periodontal de un paciente de 25 años, sistémicamente sano es: Periodontitis crónica incipiente en 26 con lesión de furca grado I vestibular y gingivitis en los demás sitios. En la reevaluación de la fase higiénica se encuentra ausencia de sangrado y de bolsas. El manejo a seguir es realizar:",
      "answer": "Fase de Mantenimiento."
    },
    {
      "question": "La gingivectomía es una de las técnicas utilizadas para alargamiento de corona clínica y corresponde al corte o remoción de los tejidos blandos de la pared de la pseudobolsa y se encuentra CONTRAINDICADA cuando:",
      "answer": "Se necesita realizar osteotomía para recuperar espesor biológico."
    },
    {
      "question": "El perfil de emergencia se considera el contorno del diente en el momento que este emerge del periodonto. Este perfil de emergencia al reproducirlo en una corona completa deberá ser.",
      "answer": "Convexo."
    },
    {
      "question": "Cuando hablamos de “la lesión de los tejidos periodontales cuando se ejerce una fuerza excesiva sobre un diente con estructuras de soporte normal”. Nos estamos refiriendo a:",
      "answer": "Trauma oclusal primario."
    },
    {
      "question": "Al realizar una cirugía periodontal levantando un colgajo que incluye el periostio en su totalidad para exponer hueso subyacente, se hace referencia a un:",
      "answer": "Colgajo de espesor total."
    },
    {
      "question": "La unidad dentogingival está constituida por:",
      "answer": "Encía, diente."
    },
    {
      "question": "El parámetro clínico más objetivo para determinar salud o enfermedad periodontal es:",
      "answer": "El nivel de inserción."
    },
    {
      "question": "De las siguientes patologías periodontales, cual deberá ser tratada en la fase de urgencia:",
      "answer": "Absceso periodontal."
    },
    {
      "question": "Las Curetas de Mc Call son clasificadas como:",
      "answer": "Curetas universales."
    },
    {
      "question": "En el momento de hacer un encerado diagnóstico de un paciente que va a necesitar una prótesis fija de cinco unidades en el maxilar superior, los contactos B se consideran:",
      "answer": "Equilibradores."
    },
    {
      "question": "A la consulta odontológica asiste un paciente de 25 años de edad que requiere un análisis de oclusión muy completo y para esto se decide hacer el adecuado montaje en el articulador semiajustable. Cuales son en orden los pasos clínicos para este procedimiento:",
      "answer": "Toma de Impresiones, Registro Bicóndilo, Registro de Céntrica, Registros de Lateralidad."
    },
    {
      "question": "En un paciente de 22 años con buen estado de salud, al examen clínico encuentra obturación en el 36 OM efectuada hace dos años en resina compuesta híbrida, con percolación marginal. Este problema se debe a la siguiente razón:",
      "answer": "Por deterioro de la adhesión marginal por altas discrepancias entre los coeficientes de expansión térmica entre la resina y el tejido dentario."
    },
    {
      "question": "En un paciente de 18 años de edad con una caries aguda a nivel de 16 que en el momento de retirarla se hizo una exposición pulpar por utilizar una fresa pequeña. Cual es el procedimiento clínico a seguir:",
      "answer": "Colocar hidróxido de calcio de alta pureza y encima un cemento de fosfato de Zn y amalgama."
    },
    {
      "question": "Paciente sano de 25 años de edad, sin contraindicaciones médicas para tratamiento odontológico, con diente # 11 que se ha fracturado por trauma hace 2 días, perdiendo el 75 % de su corona clínica y con solo la pared distal remanente, con exposición pulpar. El tratamiento a seguir es:",
      "answer": "Endodoncia, retenedor intraradicular y corona completa."
    },
    {
      "question": "A la consulta llega un paciente quien al examen clínico presenta exposición pulpar por caries en el # 27, con dolor intermitente y pruebas de sensibilidad positivas. Radiográficamente no se observan cambios periapicales. El diagnóstico es:",
      "answer": "Pulpitis irreversible crónica abierta."
    },
    {
      "question": "Para un paciente con luxación extrusiva, el tratamiento inmediato que se debe realizar es:",
      "answer": "Reposición y ferulización semirígida durante 7 a 14 días."
    },
    {
      "question": "Un paciente que presenta torus, ubicado en la sutura media del paladar en el maxilar superior asintomático, cual será el conector mayor de elección al realizar una prótesis parcial removible",
      "answer": "Herradura o en U."
    },
    {
      "question": "En un paciente de 32 años con estado se salud bueno, oclusión en límites normales, sin signos de bruxomanía, caries MOD extensa con severo socavado de la cúspide MP el tratamiento de elección es:",
      "answer": "Incrustación Onlay en metal noble ."
    },
    {
      "question": "En el procedimiento de montaje de dientes para un caso de prótesis total superior e inferior, como debe ser el patrón oclusal durante los movimientos de lateralidad.",
      "answer": "Oclusión bilateral balanceada."
    },
    {
      "question": "La Clasificación I de Kennedy se define como el:",
      "answer": "Área edéntula bilateral posterior."
    },
    {
      "question": "La relación diámetro y altura en las preparaciones de los pilares para prótesis fija permite:",
      "answer": "Resistencia de las prótesis ante las fuerzas oblicuas o de torque por palanca."
    },
    {
      "question": "En un diente con un diagnóstico de lesión endodóntica primaria y periodontal secundaria el tratamiento indicado a realizar es:",
      "answer": "Endodóntico."
    },
    {
      "question": "La caries dental se puede definir como una enfermedad infecciosa, transmisible y multifactorial que afecta los dientes. El diagnóstico clínico se debe realizar a partir de la aparición de la caries de mancha blanca. Según la historia natural de la enfermedad en que periodo y fase se encuentra:",
      "answer": "Periodo patogénico, fase precoz."
    },
    {
      "question": "De el diagnostico del siguiente caso clínico: Paciente mujer de 50 anos de edad que presenta fístula vestibular activa a nivel del primer premolar inferior derecho a nivel de la encía adherida, sin bolsa periodontal, restauración desadaptada y asintomático. Radiográficamente presenta restauración extensa y desadaptada y lesión apical a nivel del primer premolar inferior derecho:",
      "answer": "Periodontitis apical crónica supurativa a nivel del diente #44."
    },
    {
      "question": "Si comparamos la función mandibular con un sistema de palancas, idealmente cuál debería ser la palanca que se aplica al sistema masticatorio?",
      "answer": "Palanca clase II."
    },
    {
      "question": "La función principal del músculo temporal es:",
      "answer": "Eleva y retruye la mandíbula."
    },
    {
      "question": "La zona hibrida se refiere a:",
      "answer": "La penetración del acondicionador acido."
    },
    {
      "question": "Al realizar una incrustación en resina, esta se debe cementar idealmente con:",
      "answer": "Cemento a base de resina."
    },
    {
      "question": "La adhesión es la unión de materiales de:",
      "answer": "De diferente naturaleza química."
    },
    {
      "question": "La capacidad que tiene una restauración para resistir fuerzas verticales que tienden a desalojarla se llama:",
      "answer": "Retención."
    },
    {
      "question": "Los márgenes restaurativos intracreviculares no deben sobrepasar:",
      "answer": "El ancho biológico."
    },
    {
      "question": "El principal método para incrementar la resistencia y la estabilidad en un diente para corona completa de un molar inferior Con espacio inter oclusal reducido es:",
      "answer": "Crear surcos o rieleras."
    },
    {
      "question": "La mayor concentración de esfuerzos en una prótesis fija de tres unidades posterior con pilares mesial y distal está ubicada en:",
      "answer": "Los conectores."
    },
    {
      "question": "La función principal de los apoyos oclusales es:",
      "answer": "Orientar, dirigir las fuerzas oclusales sobre los dientes pilares y evitar la intrusión de la PPR."
    },
    {
      "question": "Paciente de sexo masculino de 38 años de edad quien consulta por presentar en el carrillo derecho una lesión exofítica de 1 cm. de diámetro, sesil, asintomática, de tiempo de evolución desconocido, cubierta por mucosa normal, que no reporta crecimiento en los últimos 6 meses y que no presenta adenopatías clínicamente evidentes. En el reporte histopatológico luego de biopsia excisional se encuentran numerosos fibroblastos y matriz densa de colágeno con ligero infiltrado inflamatorio. Esta lesión corresponde a un:",
      "answer": "Fibroma."
    },
    {
      "question": "Entre los 6 y los 9 años de edad, que dientes permanentes se pueden encontrar en un paciente con un desarrollo normal de la dentición:",
      "answer": "Primeros Molares, centrales superiores e inferiores, laterales superiores e inferiores."
    },
    {
      "question": "Los sellantes son una medida terapéutica que se utiliza cuando se desea prevenir la presencia de caries dental, teniendo en cuenta las indicaciones para su uso. Según los niveles de prevención de Leavell & Clark esta medida terapéutica se encuentra en el siguiente nivel:",
      "answer": "Prevención primaria, prevención específica"
    },
    {
      "question": "Paciente de 22 años que sufrió fractura complicada de la corona hace tres días que afecto la superficie mesoincisal, con exposición pulpar. La pulpa es sensible al contacto con un instrumento. Su tratamiento indicado es:",
      "answer": "Tratamiento en una sola sesión."
    },
    {
      "question": "Paciente de 30 años quien presenta en el 43 reabsorción externa radicular apical, cuál sería el manejo a seguir para éste paciente:",
      "answer": "Controles clínicos y radiográficos."
    },
    {
      "question": "En la microcirculación pulpar las estructuras encargadas del intercambio de nutrientes entre el fluido sanguíneo y los tejidos son:",
      "answer": "Los capilares"
    },
    {
      "question": "En la pulpa dental la zona libre de células se caracteriza por la presencia de:",
      "answer": "Capilares y fibras nerviosas amielínicas"
    },
    {
      "question": "Un paciente de 30 años con periodontitis crónica moderada al cual se le realizó fase higiénica pero no logró controlar su higiene oral:",
      "answer": "No se puede realizar fase quirúrgica hasta que controle higiene oral"
    },
    {
      "question": "Un paciente presenta lesión de furca en un 46 por vestibular de 7mm, en sentido horizontal y en sentido vertical de 5 mm desde el techo (fornix). Su clasificación sería:",
      "answer": "Grado III B"
    },
    {
      "question": "Si un paciente que presenta en el 31 una recesion gingival de 5 mm y profundidad de surco periodontal de 3 mm, el nivel de inserción es:",
      "answer": "8 mm"
    },
    {
      "question": "A la consulta de urgencia asiste un paciente fumador de 35 años, que refiere dolor agudo, constante y generalizado de cavidad oral, de 3 días de evolución. Clínicamente presenta halitosis severa, inflamación gingival generalizada con úlceras localizadas en papilas interdentales, sangrado al sondaje suave sin formación de bolsas y abundante placa bacteriana. Radiográficamente, no hay pérdida ósea. El diagnóstico es:",
      "answer": "Gingivitis ulceronecrotizante (GUN)"
    },
    {
      "question": "En las enfermedades gingivales modificadas por factores sistémicos el pronóstico depende de:",
      "answer": "cControlar la enfermedad sistémica"
    },
    {
      "question": "Paciente de 60 años, al que se le realizó implante de cuchilla hace 20 años, en zona de 46-47. Al examen clínico presenta movilidad grado I de las coronas sobre los implantes, asintomático. Al examen radiográfico se observa radiolucidez perimplantar de 0.5 mm en todo el implante. De este caso podemos afirmar que:",
      "answer": "Según los criterios de éxito para los implantes dentales actuales, es un implante fracasado."
    },
    {
      "question": "El ángulo de la eminencia afecta la morfología dental de las siguientes maneras EXCEPTO:",
      "answer": "mayor ángulo de la eminencia, mayor altura cuspídea y mayor profundidad de las fosas."
    },
    {
      "question": "Las características de resistencia de las resinas las confieren:",
      "answer": "Los rellenos inorgánicos"
    },
    {
      "question": "En un caso de prótesis total, cuando se detecta una discrepancia en la relación céntrica durante la prueba de los dientes, es indispensable realizar lo siguiente:",
      "answer": "Retirar los dientes posteriores de la prótesis inferior y tomar un nuevo registro"
    },
    {
      "question": "En el procedimiento de montaje de dientes para un caso de prótesis total superior e inferior, como debe ser el patrón oclusal durante los movimientos de lateralidad debe ser con:",
      "answer": "Oclusión bilateral balanceada"
    },
    {
      "question": "Un paciente de presenta una distancia de 6mm entre el borde libre de la encía y el piso de la boca en el maxilar inferior, con alta pérdida del reborde alveolar. El conector mayor que se utilizaría para la elaboración de una prótesis parcial removible es:",
      "answer": "El Plato lingual"
    },
    {
      "question": "Una incrustación cerámica MOD con recubrimiento cuspídeo en un premolar superior se debe cementar definitivamente con:",
      "answer": "Cemento polimérico dual"
    },
    {
      "question": "De los materiales para cementación definitiva se puede afirmar lo siguiente:",
      "answer": "El fosfato de Zinc por su tipo de reacción ácido base se disuelve en determinado tiempo."
    },
    {
      "question": "La regla básica para la construcción de las bases protésicas en una prótesis parcial removible a extensión distal es:",
      "answer": "Extender la base lo más posible sin interferir con la acción muscular y los órganos circundantes"
    },
    {
      "question": "La característica que debe tener un conector mayor tipo barra lingual es EXCEPTO:",
      "answer": "Permitir un grado apropiado de resiliencia para distribuir las cargas oclusales y generar un movimiento fisiológico en los dientes pilares."
    },
    {
      "question": "La Clasificación I de Kennedy se define como:",
      "answer": "Área edéntula bilateral posterior"
    },
    {
      "question": "A partir de qué estructura se forma la raíz:",
      "answer": "Asa Epitelial de Hertwing"
    },
    {
      "question": "La técnica de clark en la interpretación radiográfica nos dice:",
      "answer": "y c son correctas."
    },
    {
      "question": "El nervio maxilar inferior, la tercera rama del trigémino abandona la fosa craneal media por:",
      "answer": "Agujero oval"
    },
    {
      "question": "Los forceps universales utilizados para las extracciones inferiores y superiores son:",
      "answer": "Forceps 150 superiores y 151 inferiores."
    },
    {
      "question": "Para realizar la exodoncia de un molar inferior se deben anestesiar:",
      "answer": "N dental inferior – N lingual – N bucal"
    },
    {
      "question": "Los pasos realizados durante una extracción son:",
      "answer": "Sindesmotomía – prensión – tracción – luxación – avulsión"
    },
    {
      "question": "De los siguientes tumores malignos es más frecuente en boca el:",
      "answer": "Carcinoma escamocelular bien diferenciado"
    },
    {
      "question": "Cuánto tiempo se demora en cerrar el ápice radicular luego de la erupción del diente:",
      "answer": "2-3 años"
    },
    {
      "question": "La gigivoestomatitis herpetica se caracteriza clínicamente por la presencia de:",
      "answer": "Vesículas"
    },
    {
      "question": "A un paciente con prótesis valvular usted le realizaría el examen periodontal y la terapia correspondiente:",
      "answer": "Con premedicación de 2 gr de amoxicilina 1 hora antes de la cita"
    },
    {
      "question": "A un paciente durante el pos-operatorio usted le prescribiría como agente antiplaca:",
      "answer": "Clorhexidina"
    },
    {
      "question": "Cómo se llama el fenómeno de pérdida de liquido de un material dental:",
      "answer": "Sineresis"
    },
    {
      "question": "El raspaje y alisado radicular en un paciente con periodontitis cicatriza con:",
      "answer": "Epitelio de unión largo"
    },
    {
      "question": "El surco marginal es el límite de:",
      "answer": "La encía libre con la encía adherida"
    },
    {
      "question": "La función de estas fibras es proteger el paquete vasculonervioso:",
      "answer": "Apicales"
    },
    {
      "question": "El aporte sanguíneo del epitelio de unión esta dado por:",
      "answer": "El plexo dentogingival"
    },
    {
      "question": "Los restos epitelial es de malassez son:",
      "answer": "Restos de la vaina radicular"
    },
    {
      "question": "El mecanismo de adhesión del epitelio al diente erupcionado lo llamamos:",
      "answer": "Adherencia epitelial primaria"
    },
    {
      "question": "La pared medial o interna de la órbita esta formada por los siguientes huesos:",
      "answer": "esfenoides, etmoides, unguis y maxilar superior"
    },
    {
      "question": "Es la dentina producida después que el diente ha completado la formación radicular y se constituye en un depósito continuo por los odontoblatos durante toda la vida ante una pulpa vital:",
      "answer": "Dentina terciaria"
    },
    {
      "question": "Corresponde a una anomalía, en la cual un solo germen dental se invagina, provocando la formación incompleta de dos dientes que pueden aparecer en forma de corona bífida o como raíz única:",
      "answer": "Geminación"
    },
    {
      "question": "De acuerdo a la clasificación de la academia americana de periodoncia, dentro de las lesiones gingivales no inducidas por placa bacteriana dental se encuentran excepto:",
      "answer": "Gingivitis simple asociada a Diabetes Mellitus"
    },
    {
      "question": "Son características del ameloblastoma excepto:",
      "answer": "Es el tumor odontógeno más frecuente"
    },
    {
      "question": "El tratamiento para una avulsion de un diente permanente con ápice abierto es:",
      "answer": "Reimplante-ferulización-control radiográfico"
    },
    {
      "question": "Dentro de las indicaciones de la pulpectomia, indique la correcta:",
      "answer": "Hemorragia excesiva"
    },
    {
      "question": "Los huesecillos del oído medio en orden de lateral a medial son:",
      "answer": "martillo, yunque y estribo"
    },
    {
      "question": "Paciente de 6 años de edad que al examen clínico y radiográfico presenta en un 52 las siguientes características: corona bifida-una sola raíz-un conducto. La anomalía de desarrollo que presenta este diente es:",
      "answer": "anomalía de forma-geminación"
    },
    {
      "question": "Paciente de 7 años de edad, que llega a la clínica con dolor espontáneo de un 54 de 3 días de evolución, radiograficamente se observa lesión de furca,conductos parcialmente obturados y destrucción coronal. El tratamiento es:",
      "answer": "Exodoncia"
    },
    {
      "question": "Indique el efecto que produce desecar la dentina después del grabado ácido, en los procesos de adhesión:",
      "answer": "Colapsa la malla colágena"
    },
    {
      "question": "La hipersensibilidad dentinal se da por?:",
      "answer": "Estimulación de las fibras nerviosas tipo a delta en la periferia de la pulpa dental."
    },
    {
      "question": "Para realizar exodoncia del 55, se requiere bloqueo a nivel de los nervios:",
      "answer": "Alveolar medio y palatino anterior"
    },
    {
      "question": "La mucosa bucal histológica y funcionalmente se divide en:",
      "answer": "Epitelio queratinizado, paraqueratinizado y no queratinizado"
    },
    {
      "question": "De las tres ramas del trigémino se considera nervio mixto (sensitivo – motor):",
      "answer": "N. maxilar inferior"
    },
    {
      "question": "En la extracción de un primer molar superior se deben anestesiar:",
      "answer": "N alveolar superior medio – N alveolar superior posterior – N palatino medio"
    },
    {
      "question": "En una prótesis removible, como se colocan los conectores menores:",
      "answer": "Paralelos al eje de fulcro"
    },
    {
      "question": "En cuanto al glutaraldehido es correcto afirmar:",
      "answer": "Es bactericida"
    },
    {
      "question": "El alginato es:",
      "answer": "hidrocloide irreversible"
    },
    {
      "question": "El 54 presenta caries en fosa central, el resto de fisuras oclusales están sanas; la caries involucra esmalte y dentina, que tratamiento realizaría:",
      "answer": "Resina preventiva"
    },
    {
      "question": "Tixotropía es:",
      "answer": "Es la capacidad de un liquido para humectar un material"
    },
    {
      "question": "Cuál es la proporción agua- polvo ideal en la preparación del yeso tipo 4.:",
      "answer": "21 ml de agua por 100 gramos de polvo"
    },
    {
      "question": "Los carcinomas son de origen:",
      "answer": "Epitelial"
    },
    {
      "question": "Dónde se origina un mixoma odontogénico:",
      "answer": "En el tejido pulpar"
    },
    {
      "question": "Se espera que después de un mes de terminada la fase higiénica la movilidad:",
      "answer": "Se reduzca"
    },
    {
      "question": "Un tumor odontogénico epitelial que se forma específicamente de los restos epiteliales de Malasses:",
      "answer": "Ameloblastoma"
    },
    {
      "question": "Qué es la línea alba:",
      "answer": "Es una queratinizacion por fricción paralela a la linea de oclusión"
    },
    {
      "question": "Para un blanqueamiento interno en diente no vital cual es el material de preferencia:",
      "answer": "Peroxido de hidrógeno"
    },
    {
      "question": "Según Kennedy un paciente desdentado posterior unilateral cómo se clasifica:",
      "answer": "Clase segunda"
    },
    {
      "question": "Cuál es el nombre de la cavidad oral en etapa embrionaria:",
      "answer": "Estomodeo"
    },
    {
      "question": "El transporte de un líquido a travez de una membrana:",
      "answer": "Difusión pasiva"
    },
    {
      "question": "Los propioceptores son aquellos receptores:",
      "answer": "Que responden a estímulos internos"
    },
    {
      "question": "Una indicación para utilizar anestésico sin vasoconstrictor es:",
      "answer": "Que el procedimiento a realizar sea de corta duración"
    },
    {
      "question": "A la consulta se presenta una paciente de 32 años quien asiste por odontalgia en 26 el cual presenta caries OM profunda. Dentro de sus antecedentes refiere haber presentado hepatitis B hace 25 días. Después de la atención odontológica es necesario:",
      "answer": "Lavar y sumergir el instrumental en hipoclorito 0.5 % para luego esterilizar"
    },
    {
      "question": "En un paciente de 34 años de edad con caries oclusal en el 24 y respuesta pulpar disminuida aunque algo sensible a la percusión; radiográficamente se observa una lesión apical radiolúcida, circular, bien definida. Los hallazgos histológicos revelaron un contenido de fibroblastos, vasos sanguíneos, al igual que células plasmáticas, linfocitos y fagocitos mononucleares. Estos hallazgos corresponden a:",
      "answer": "Granuloma periapical"
    },
    {
      "question": "Paciente adulto que presenta absceso orofacial que no responde a la terapia con penicilina cristalina. El resultado del cultivo reporta microorganismos productores de beta-lactamasa. Se decide utilizar amoxicilina más ácido clavulánico. Con respecto a esta combinación cabe anotar:",
      "answer": "Confiere resistencia contra las beta-lactamasas"
    },
    {
      "question": "Paciente de 19 años con insuficiencia valvular mitral, a quien se le realizará exodoncia de restos radiculares de 36, para lo cual se realiza profilaxis antibiótica con amoxilina 2g 1 hora antes del procedimiento, 1g, 6 horas después y 500mg cada 8 horas durante 7 días. El procedimiento duró 15 minutos. En relación con esta prescripción usted cree:",
      "answer": "Se debe administrar dosis única de 2g 1 hora antes del procedimiento"
    },
    {
      "question": "Del tratamiento de la candidiasis atrófica o eritematosa en pacientes con prótesis removible desadaptada, se puede afirmar que:",
      "answer": "Ninguna de las anteriores"
    },
    {
      "question": "A un paciente de 60 años con diagnóstico de angina de pecho controlada, se le extirpó un quiste en región premolar, utilizando lidocaína 2% con adrenalina 1:80.000. Sobre esta selección puede comentarse:",
      "answer": "La lidocaína puede precipitar un ataque anginoso"
    },
    {
      "question": "Un exceso de anestésico con vasoconstrictor en el paladar puede traer como consecuencia:",
      "answer": "Necrosis del tejido"
    },
    {
      "question": "Para la exodoncia del diente 47 es necesario anestesiar:",
      "answer": "Los nervios dentario inferior, lingual y largo bucal"
    },
    {
      "question": "Si un paciente consulta por dolor hemifacial izquierda, sin antecedente de trauma, con tiempo de evolución 4 días, con historia de chasquido que ceso con el evento doloroso y presenta un cuadro clínico como el descrito a continuación, diga su impresión diagnóstica. - dolor a la palpación lateral - dolor a la manipulación posterior de la mandíbula - dolor que aumenta con función - apertura disminuida 26 mm - deflexión en apertura izquierda - existe laterprotrusión izquierdo - movimiento de lateralidad contra- lateral limitada",
      "answer": "Desplazamiento del disco sin reducción ATM izquierdo"
    },
    {
      "question": "El desprogramador anterior esta indicado como manejo de urgencia en:",
      "answer": "Dolor miofascial"
    },
    {
      "question": "- Un paciente de 7 años de edad, en el primer periodo transicional, que al exàmen clìnico en oclusion normal usted encuentra una mordida cruzada anterior, y al manipularlo a centrica logra una relacion borde a borde ud lo diagnosticaria como:",
      "answer": "A.- Pseudo clase III"
    },
    {
      "question": "- Un cráneo-maxilar de tracción cervical actúa:",
      "answer": "B.- Extruyendo y distalizando molares"
    },
    {
      "question": "- Los métodos de análisis en dentición mixta sirven para:",
      "answer": "D.- Determinar espacio disponible para la erupción de premolares y caninos permanentes"
    },
    {
      "question": "Paciente de 8 años de edad quien sufrió trauma dentoalveolar de 2 días de evolución. Al examen clínico y radiográfico se observa intrusión del 100% del central superior derecho permanente. Indique tratamiento de elección:",
      "answer": "Esperar reerupción por lo menos seis meses."
    },
    {
      "question": "Paciente de 6 años de edad y 20 kg. de peso, madre refiere a la anamnesis haber presentado fiebre de 38 grados , con historia de recubrimiento pulpar indirecto profundo, al examen clínico presenta borramiento del surco yugal, sintomatología dolorosa a la percusión y presión a nivel del 65, radiográfica mente se observa obturación en limite dentino pulpar. Indique el diagnostico pulpar:",
      "answer": "Periodontitis apical aguda no supurativa."
    },
    {
      "question": "La radiografía indicada para confirmar el diagnostico pulpar es:",
      "answer": "Periapical."
    },
    {
      "question": "La geminación de dientes se identifica radiograficamente como:",
      "answer": "Un diente con la corona dividida y una sola raíz."
    },
    {
      "question": "Dentro de los requerimientos para realizar una resina directa OD en posteriores esta:",
      "answer": "Aislamiento absoluto de diente único"
    },
    {
      "question": "Un niño de 10 años presenta al examen clínico una caries de mancha blanca en un 35, al hacer control de placa el porcentaje es del 20% y en su boca, no presenta mas caries ni obturaciones. El tratamiento a seguir para esta caries es:",
      "answer": "Colocación de Flúor aplicado en forma tópica."
    },
    {
      "question": "La eficacia de la técnica adhesiva, se basa en la formación adecuada de la capa híbrida, con este fin el mejor procedimiento después de realizar el grabado ácido y antes de colocar el adhesivo es:",
      "answer": "Secar la cavidad con papel absorbente dejando una superficie ligeramente húmeda, que impida el colapso de la malla colágena y permita la formación de los enlaces adhesivos."
    },
    {
      "question": "El retenedor directo “circunferencial en anillo” esta indicado en molares aislados por que:",
      "answer": "Feruliza el diente pilar por su acción de abrazadera"
    },
    {
      "question": "Un paciente presenta lesión de furca en un 46 por vestibular de 1mm, en sentido horizontal y en sentido vertical no llega a 3 mm. Su clasificación sería:",
      "answer": "Grado I A"
    },
    {
      "question": "Si un paciente que presenta en el 31 una retracción de 3 mm y profundidad de surco de 2 mm, su nivel de inserción es:",
      "answer": "5 mm"
    },
    {
      "question": "Un paciente de 45 años sin compromiso sistémico, llega al servicio de urgencias con absceso periodontal del 33. Presenta pérdida ósea angular y un sondaje de 7 mm en distal y vestibular, con sangrado y supuración. El tratamiento más indicado es:",
      "answer": "Detartraje y alisado radicular a campo cerrado"
    },
    {
      "question": "Paciente de 48 años de edad, que consulta por dolor sordo constante de tres días de evolución, que cede con analgésicos, aumenta a la percusión lateral, y esta localizado en el 35. clínicamente presenta bolsa con pérdida de inserción de 7 mm, activa, exudado purulento, tumefacción localizada lateral a la raíz. Control de placa de 65%. Radiográficamente, se observa pérdida ósea horizontal moderada. Las pruebas de sensibilidad pulpar son positivas. Cuál es el diagnóstico:",
      "answer": "Absceso periodontal"
    },
    {
      "question": "Con el examen clínico y radiográfico de un paciente de 30 años se llegó al diagnóstico de gingivitis simple generalizada(sin compromiso sistémico). El tratamiento de elección debe ser:",
      "answer": "Fase higiénica"
    },
    {
      "question": "El estudio de las rugas palantinas con fines de identificación se conoce con el nombre de:",
      "answer": "Rugoscopia"
    },
    {
      "question": "En la etiología de la clase II div 2 predominan:",
      "answer": "La herencia"
    },
    {
      "question": "El streptococo mutans se diferencia de otras especies por su capacidad de fermentar:",
      "answer": "Sorbitol y manitol"
    },
    {
      "question": "El uso de corticoides en endodoncia se relaciona con el siguiente",
      "answer": "Periodontitis apical aguda"
    },
    {
      "question": "Son signos necesarios , suficientes e indispensables para el diagnostico del GUN:",
      "answer": "Ulceración, hemorragia, dolor."
    },
    {
      "question": "Es un signo secundario del GUN:",
      "answer": "Fiebre"
    },
    {
      "question": "El stress es un factor importante en la aparición del Gun por que eleva los niveles de:",
      "answer": "Corticoides endogenos"
    },
    {
      "question": "Desde el punto de vista etiológico para un diente multiradicular es mejor:",
      "answer": "Tener un tronco de 7 o más mm"
    },
    {
      "question": "Un molar superior tiene:",
      "answer": "3 entradas de furcacion"
    },
    {
      "question": "Paciente de 21 años de edad, sin compromiso sistémico quien presenta a nivel del 15 hemorragia al sondaje y los siguientes registros de margen y surco: Margen 000 Bolsa 333. El diagnostico del 15 seria:",
      "answer": "Gingivitis simple"
    },
    {
      "question": "La respuesta del tejido periodontal a una invasión del espesor biológico dependerá del biotipo periodontal que presente el paciente. Si un odontólogo observa un biotipo periodontal grueso, la reacción del tejido gingival a una corona desadaptada subgingivalmente será:",
      "answer": "Hiperplasia gingival con pérdida ósea localizada"
    },
    {
      "question": "En un paciente al cual se le va a realizar un injerto de hueso autólogo, el injerto puede ser de:",
      "answer": "Zona retromolar del mismo paciente"
    },
    {
      "question": "En un paciente de 45 años, sistémicamente sano, con presencia de todos los dientes y diagnóstico de periodontitis crónica incipiente en molares superiores derechos, gngivitis simple en los demás sitios y lesión de furca grado 1 en 16 por mesial; de los siguientes tratamiento cuál sería el más adecuado para el tratamiento de la lesión de furca:",
      "answer": "Raspaje y alisado radicular"
    },
    {
      "question": "El aspecto normal de la encía es:",
      "answer": "Mate"
    },
    {
      "question": "Paciente de 7 años de edad, que llega a la clínica con dolor espontáneo de un 54 de 3 días de evolución, radiograficamente se observa lesión de furca, conductos parcialmente obturados y destrucción coronal. El tratamiento es:",
      "answer": "Exodoncia"
    },
    {
      "question": "De las tres ramas del trigémino se considera nervio mixto (sensitivo–motor):",
      "answer": "N. maxilar inferior"
    },
    {
      "question": "En una prótesis removible, ¿cómo se colocan los conectores menores?:",
      "answer": "Paralelos al eje de fulcro"
    },
    {
      "question": "En cuanto al glutaraldehído es correcto afirmar:",
      "answer": "Es bactericida"
    },
    {
      "question": "El 54 presenta caries en fosa central, el resto de fisuras oclusales están sanas; la caries involucra esmalte y dentina. ¿Qué tratamiento realizaría?:",
      "answer": "Resina preventiva"
    },
    {
      "question": "¿Cuál es la proporción agua-polvo ideal en la preparación del yeso tipo 4?:",
      "answer": "21 ml de agua por 100 gramos de polvo"
    },
    {
      "question": "Un tumor odontogénico epitelial que se forma específicamente de los restos epiteliales de Malassez:",
      "answer": "Ameloblastoma"
    },
    {
      "question": "Para un blanqueamiento interno en diente no vital, ¿cuál es el material de preferencia?:",
      "answer": "Peróxido de hidrógeno"
    },
    {
      "question": "El transporte de un líquido a través de una membrana se denomina:",
      "answer": "Difusión pasiva"
    },
    {
      "question": "Los propioceptores son aquellos receptores que:",
      "answer": "Responden a estímulos internos"
    },
    {
      "question": "¿Qué establece la técnica de Clark en la interpretación radiográfica?",
      "answer": "El objeto más cercano a la película conserva su posición y el más alejado se mueve en dirección contraria al tubo de rayos."
    },
    {
      "question": "Nervio maxilar inferior (V3): describa su origen y trayecto",
      "answer": "Nervio de tipo mixto. Nace del ganglio de Gasser en la fosa craneal media como un nervio sensitivo; se dirige verticalmente hacia abajo hacia el agujero oval, por el que ingresa hacia la fosa cigomática. Durante su paso por este agujero, la raíz motora del trigémino se funde a él, convirtiéndolo así en nervio mixto. Durante su recorrido, da 8 ramas: 1 colateral y 7 terminales."
    },
    {
      "question": "¿Cuáles son los fórceps universales utilizados para extracciones superiores e inferiores?",
      "answer": "Fórceps 150 superiores y 151 inferiores."
    },
    {
      "question": "¿Cómo se caracteriza clínicamente la gingivoestomatitis herpética?",
      "answer": "En su etapa inicial se distingue por la presencia de vesículas discretas y esféricas, en la encía, mucosas labial y vestibular, paladar blando, faringe, mucosa sublingual y lengua. Luego de unas 24 horas, las vesículas se rompen y forman pequeñas úlceras dolorosas, con un margen en halo rojo elevado y una porción central amarillenta o blanco grisáceo."
    },
    {
      "question": "¿Cómo se llama el fenómeno de pérdida de líquido de un material dental?",
      "answer": "Sinéresis: pérdida de líquido por parte de un material."
    },
    {
      "question": "¿Qué es el tronco radicular?",
      "answer": "Es la región radicular no dividida de la raíz; su altura está determinada por la distancia entre la LCE y el comienzo de la bi o trifurcación. Puede clasificarse en 3 categorías: corto (hasta 4 mm), mediano (entre 4 y 6 mm) y largo (más de 6 mm). Un tronco radicular corto predispone a una lesión de furcación más temprana (peor pronóstico); uno largo retrasa el compromiso de furca (mejor pronóstico)."
    },
    {
      "question": "Bloqueo del nervio alveolar superior anterior: ¿qué zona cubre?",
      "answer": "Incisivos y caninos; sus ramas junto con las del alveolar superior posterior generalmente forman el plexo dental superior."
    },
    {
      "question": "Bloqueo del nervio alveolar superior medio: ¿qué zona cubre?",
      "answer": "Molares deciduos superiores o premolares y la raíz mesial del primer molar en un cuadrante."
    },
    {
      "question": "Bloqueo del nervio alveolar superior posterior: ¿qué zona cubre?",
      "answer": "Uno o varios molares en un cuadrante superior; la raíz mesobucal del primer molar no está inervada por este nervio."
    },
    {
      "question": "Bloqueo del nervio palatino anterior (posterior/mayor): ¿qué zona cubre?",
      "answer": "Distal al canino en un cuadrante; raíz distal de 1er molar, 2do y 3er molares."
    },
    {
      "question": "Bloqueo del nervio palatino medio: ¿qué zona cubre?",
      "answer": "Premolares y raíz mesial del primer molar."
    },
    {
      "question": "Bloqueo del nervio nasopalatino: ¿qué zona cubre?",
      "answer": "Inerva la parte anterior del paladar hasta el canino; recomendado para trabajar de canino a canino."
    },
    {
      "question": "¿Cuáles son los 5 grupos de fibras periodontales?",
      "answer": "1) Grupo de cresta alveolar: desde la cresta alveolar al cemento. 2) Grupo horizontal: perpendiculares al eje mayor del diente. 3) Grupo oblicuo: dirección oblicua desde el cemento al hueso. 4) Grupo apical: dispuestas radialmente alrededor del ápice. 5) Grupo interradicular: solo en dientes con dos o más raíces."
    },
    {
      "question": "¿Cómo se define y diagnostica el desplazamiento agudo del disco de la ATM SIN reducción?",
      "answer": "El disco no se reduce o queda 'permanentemente' desplazado y no mejora su relación con el cóndilo. Generalmente hay dolor, especialmente al intentar abrir la boca; con el tiempo el dolor se reduce del estado agudo a uno más leve. Criterios diagnósticos (deben estar TODOS presentes): 1) Limitación marcada y persistente de la apertura bucal (≤35mm) con historia de limitación progresiva; 2) Desviación hacia el lado afectado al abrir la boca; 3) Marcada limitación de laterotrusión hacia el lado contralateral; 4) Imágenes confirman desplazamiento del disco sin reducción. Puede acompañarse de: dolor al forzar la apertura, historia de clic que cesó al trabarse, dolor a la palpación del lado afectado, hiperoclusión ipsilateral, y cambios osteoartríticos moderados."
    },
    {
      "question": "¿Dónde se ubican los espacios primates?",
      "answer": "Mesial de caninos superiores y distal de caninos inferiores."
    },
    {
      "question": "¿Qué es la proquelia?",
      "answer": "Posición adelantada de los labios."
    }
  ]
};

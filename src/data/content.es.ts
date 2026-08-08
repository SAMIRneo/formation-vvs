// Contenu ES — miroir de content.ts (traduit). Versions ES des modules/outils/plans.
// marketTickers reste universel (symbolets), défini dans content.ts.
export const modulesEs = [
  {
    n: '01', slug: 'lire-le-prix', title: 'Leer el precio', desc: 'Estructura de mercado, velas, niveles. Las bases sin el ruido.', tag: 'Principiante', accent: 'orange' as const,
    body: 'No operas un precio, lees una estructura. Este módulo te da el vocabulario: velas japonesas (cuerpo, mecha, color), soportes y resistencias, y por qué el nivel que aguantó ayer sigue pesando hoy. Al final, identificas un rango, una ruptura y una zona de valor — sin indicadores.',
    chapters: [
      {
        title: 'La vela japonesa',
        diagram: 'candles',
        body: 'Una vela resume una batalla en un tiempo dado: el cuerpo muestra apertura y cierre, la mecha alta y baja el máximo y mínimo alcanzados. Verde = ganaron los compradores (cierre > apertura), rojo = los vendedores.',
        points: ['El cuerpo = apertura/cierre', 'La mecha = excursión fuera del cuerpo', 'Una mecha larga = rechazo del precio en ese nivel'],
      },
      {
        title: 'Soporte y resistencia',
        diagram: 'levels',
        body: 'No son líneas mágicas, sino zonas donde el precio reaccionó. El soporte = muro de compras por debajo, la resistencia = techo de ventas por encima. Se opera la zona, no la línea al píxel.',
        points: ['Un soporte roto se vuelve resistencia', 'Cuanto más se prueba un nivel, más cuenta', 'La fuerza se mide en el volumen del rebote'],
      },
      {
        title: 'El rango y la ruptura',
        diagram: 'range',
        body: 'Entre soporte y resistencia, el precio oscila: es un rango. La ruptura (breakout) ocurre cuando el precio sale de la zona con convicción — suele ser el inicio de una tendencia.',
        points: ['Rango = indecisión, borde alto/bajo', 'La ruptura busca el sentido del próximo movimiento', 'Una falsa ruptura (pinchazo) atrapa a los precipitados'],
      },
      {
        title: 'Leer en el contexto',
        diagram: 'context',
        body: 'Una vela sola no dice nada. Colócala en la estructura: ¿está en la cima de un rango o en medio de una tendencia? El contexto decide si la señal es fuerte o ruido.',
        points: ['Misma vela, sentido opuesto según el contexto', 'Etiqueta: rango / tendencia / extensión', 'El timeframe superior dicta el sentido'],
      },
    ],
  },
  {
    n: '02', slug: 'analyse-technique', title: 'Análisis técnico', desc: 'Tendencias, figuras de giro, volumen. Tu grilla de lectura.', tag: 'Intermedio', accent: 'bleu' as const,
    body: 'La tendencia es tu amiga hasta que deja de serlo. Aprendes a trazarla, a reconocer figuras de giro (cabeza-hombros, doble suelo) y a leer el volumen como confirmación. El ruido de los 15 min se borra ante una lectura 4H limpia.',
    chapters: [
      {
        title: 'La tendencia, tu amiga',
        diagram: 'trend',
        body: 'Una tendencia alcista hace máximos y mínimos que suben (HH/HL). Una bajista hace lo opuesto (LH/LL). Trazar estos puntos da una lectura inmediata del sentido.',
        points: ['HH/HL = alcista, LH/LL = bajista', 'Opera a favor de la pendiente', 'La rotura del último HL anuncia el fin'],
      },
      {
        title: 'Figuras de giro',
        diagram: 'reversal',
        body: 'El doble suelo (« W ») y la cabeza-hombros marcan el fin de una tendencia. Se forman en el dolor: el precio prueba dos veces un suelo antes de volver a subir.',
        points: ['Doble suelo = « W », suelo probado 2x', 'Cabeza-hombros = cima central más alta', 'La línea de cuello (neckline) rota = señal'],
      },
      {
        title: 'El volumen confirma',
        diagram: 'volume',
        body: 'El volumen es la voz del movimiento. Una ruptura con mucho volumen es creíble; una ruptura con volumen débil huele a trampa. El volumen no miente sobre la convicción.',
        points: ['Romper con volumen alto = convicción', 'Volumen débil en ruptura = sospechoso', 'El fin del movimiento se lee en volumen que se agota'],
      },
      {
        title: 'Pullback y retest',
        diagram: 'pullback',
        body: 'Tras una ruptura, el precio suele volver a probar la antigua resistencia vuelta soporte. Este retest es tu entrada de calidad: entras a favor, con un stop ajustado bajo el nivel.',
        points: ['El retest valida la ruptura', 'Entrada en el rebote del nivel', 'Stop bajo el nivel probado = riesgo dominado'],
      },
    ],
  },
  {
    n: '03', slug: 'gestion-du-risque', title: 'Gestión del riesgo', desc: 'Tamaño de posición, stop, psicología. Sobrevive primero.', tag: 'Clave', accent: 'jaune' as const,
    body: 'Un trade sin stop no es un trade, es una oración. Calculas el tamaño de posición según tu capital y tolerancia (1% por trade), pones el stop ANTES de entrar, y tratas la pérdida como un coste operativo — no como un insulto.',
    chapters: [
      {
        title: 'Tu tamaño de posición',
        diagram: 'positionsize',
        body: 'La fórmula: Tamaño = (Capital × Riesgo%) ÷ (Entrada − Stop). Con 10 000 € y 1% de riesgo para 50 € de ecart, tomas 1 lote. La cifra se defiende, no « parecía bien ».',
        points: ['Riesgo por trade = % del capital', 'Divides por el ecart entrada−stop', 'Nunca « a ojo »: el cálculo manda'],
      },
      {
        title: 'El stop antes de la entrada',
        diagram: 'stop',
        body: 'El stop se coloca ANTES de hacer clic. Vive bajo el soporte (largo) o sobre la resistencia (corto). Sin stop, una vela adversa arruina semanas de trabajo.',
        points: ['Stop = decisión tomada en frío', 'Bajo el soporte / sobre la resistencia', 'Moverlo en rojo = suicidio'],
      },
      {
        title: 'Risk / Reward (R-múltiple)',
        diagram: 'rr',
        body: 'Si arriesgas 1R para buscar 3R, te basta acertar 1 de cada 3 para estar en equilibrio. El R-múltiple mide el potencial frente al riesgo — no tomas un trade si el ratio no paga.',
        points: ['1R = tu riesgo, 3R = tu objetivo', 'RR ≥ 2-3 para absorber fallos', 'Un buen ratio salva una baja efectividad'],
      },
      {
        title: 'Psicología y drawdown',
        diagram: 'drawdown',
        body: 'El drawdown es la caída de tu capital desde el máximo. -20% exige +25% para volver. La supervivencia mental pasa por la regla de tamaño y aceptar la pérdida como coste, no como fracaso personal.',
        points: ['Drawdown = caída desde el máximo', 'Cuanto más caes, más cuesta volver', 'La pérdida es un coste, no un insulto'],
      },
    ],
  },
  {
    n: '04', slug: 'setups-en-live', title: 'Setups en vivo', desc: 'Planes de trade documentados, relatos de mercado reales.', tag: 'Avanzado', accent: 'emeraude' as const,
    body: 'La teoría se encuentra con lo real. Documentas cada plan antes de entrar (por qué, dónde, stop, objetivo), luego revisas los relatos de mercado anotados: lo que funcionó, lo que falló y por qué. La repetición calibra tu ojo.',
    chapters: [
      {
        title: 'El plan de trade',
        diagram: 'plan',
        body: 'Antes del mercado, escribes: contexto, setup, entrada, stop, objetivo, razón. El plan negocia por ti cuando sube la emoción. Sin plan, reaccionas; con él, ejecutas.',
        points: ['Escrito ANTES de entrar, no después', 'Contexto → setup → entrada → stop → objetivo', 'El plan calma la emoción en vivo'],
      },
      {
        title: 'La zona de entrada',
        diagram: 'zone',
        body: 'No tomas el precio, tomas una zona. La zona de demanda (soporte) u oferta (resistencia) es un rectángulo donde el precio reaccionó fuerte. Entras en el rebote, no persiguiendo.',
        points: ['Una zona, no un precio único', 'Entrada en el rebote de la zona', 'Stop bajo la zona = riesgo ajustado'],
      },
      {
        title: 'Leer un setup anotado',
        diagram: 'annotated',
        body: 'En un gráfico anotado: flecha de entrada, línea de stop, objetivo en verde, y el porqué escrito encima. Leer setups anotados por otros calibra tu ojo sobre lo que cuenta.',
        points: ['Entrada / Stop / Objetivo bien marcados', 'El « porqué » escrito en el chart', 'La figura vale más que 10 páginas'],
      },
      {
        title: 'Revisar y anotar',
        diagram: 'review',
        body: 'Tras el trade, anotas lo que pasó y lo que sentiste. El diario es tu espejo: al releerlo, tus sesgos recurrentes saltan a la vista mejor que cualquier coach.',
        points: ['Nota post-trade: hecho vs plan', 'Lo sentido = señal de sesgo', 'La relectura vence el consejo externo'],
      },
    ],
  },
];

export const toolsEs = [
  { slug: 'screener', t: 'Selector de setups', d: 'Filtra los mercados por estructura (rango, ruptura, giro) de un vistazo.', icon: 'M3 12h4l3-8 4 16 3-8h4',
    body: 'Un selector no opera por ti: reduce el universo a lo que merece tu atención. Eliges el sesgo (rango / ruptura / giro) y te saca las pares que encajan en tu grilla — para mirar 5 gráficos, no 500.' },
  { slug: 'calculateur', t: 'Calculadora de riesgo', d: 'Tamaño de posición y stop según tu capital y tolerancia.', icon: 'M12 3v18M7 7h7a3 3 0 0 1 0 6H7m0 0h8a3 3 0 0 1 0 6H7',
    body: 'Metes capital, riesgo por trade (ej. 1%), entrada y stop. Calcula el tamaño de posición exacto. Nada de « tomé 0.5 porque parecía bien » — la cifra se defiende.' },
  { slug: 'journal', t: 'Diario de trades', d: 'Documenta cada plan antes de entrar. La disciplina se vuelve hábito.', icon: 'M4 5h16v14H4zM4 9h16M9 5v14',
    body: 'El diario es tu espejo. Antes de entrar: contexto, setup, stop, objetivo. Después: lo que pasó y lo que sentiste. Al releer, ves tus sesgos recurrentes mejor que cualquier coach.' },
  { slug: 'veille', t: 'Vigilancia de mercado', d: 'Niveles clave a vigilar, actualizados cada sesión.', icon: 'M12 2v4M12 18v4M2 12h4M18 12h4',
    body: 'Cada sesión, anotas los niveles que cuentan (resistencia diaria, zona de valor, eventos). La vigilancia transforma la actualidad en cartas que jugar, no en ruido.' },
];

export const plansEs = [
  { nom: 'Descubrimiento', prix: '0€', periode: 'gratis', feat: ['Módulo 01 — Leer el precio', 'Selector básico', 'Acceso comunidad'], cta: 'Empezar', hl: false },
  { nom: 'Trader', prix: '29€', periode: '/ mes', feat: ['Los 4 módulos', 'Calculadora de riesgo', 'Diario de trades', 'Vigilancia de mercado'], cta: 'Unirse', hl: true },
  { nom: 'Pro', prix: '79€', periode: '/ mes', feat: ['Todo Trader', 'Setups en vivo', 'Coaching mensual', 'Soporte prioritario'], cta: 'Pasar a Pro', hl: false },
];

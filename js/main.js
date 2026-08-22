const root = document.documentElement;
const savedTheme = localStorage.getItem("bw-theme");
if (savedTheme) root.dataset.theme = savedTheme;
const themeButton = document.querySelector(".theme");
if (themeButton) {
  themeButton.textContent = root.dataset.theme === "light" ? "☀" : "☾";
  themeButton.setAttribute("aria-label", root.dataset.theme === "light" ? "Switch to dark theme" : "Switch to light theme");
}

document.querySelector(".theme")?.addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  localStorage.setItem("bw-theme", next);
  document.querySelector(".theme").textContent = next === "light" ? "☀" : "☾";
  document.querySelector(".theme").setAttribute("aria-label", next === "light" ? "Switch to dark theme" : "Switch to light theme");
});

document.querySelector(".menu")?.addEventListener("click", (event) => {
  const nav = document.querySelector(".links");
  nav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", nav.classList.contains("open"));
  event.currentTarget.setAttribute("aria-label", nav.classList.contains("open") ? "Close navigation" : "Open navigation");
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const nav = document.querySelector(".links");
  const menu = document.querySelector(".menu");
  nav?.classList.remove("open");
  menu?.setAttribute("aria-expanded", "false");
  menu?.setAttribute("aria-label", "Open navigation");
});

document.querySelectorAll(".links a").forEach((link) => {
  const page = location.pathname.split("/").pop();
  if (link.getAttribute("href") === page || (!page && link.getAttribute("href") === "index.html")) {
    link.setAttribute("aria-current", "page");
  }
});
document.querySelector("[data-year]")?.append(new Date().getFullYear());

const zh = {
  "Big Walk Wiki": "Big Walk 百科",
  Home: "首页", Puzzles: "谜题", Map: "地图", Platforms: "平台", Multiplayer: "多人游戏",
  "Popular guides": "热门攻略", "Start here": "从这里开始", "About Big Walk": "关于 Big Walk",
  "Walk together. Get wonderfully lost.": "一起散步，愉快地迷路。",
  "Your field guide to Big Walk.": "你的 Big Walk 探索指南。",
  "Clear answers, spoiler-aware puzzle help, map notes and multiplayer guides for your next strange little expedition.": "为下一次奇妙远行准备的清晰答案、低剧透谜题提示、地图笔记与多人游戏指南。",
  "Explore puzzle guides": "查看谜题攻略", "Open the map guide": "打开地图指南",
  "Find the answer. Keep walking.": "找到答案，继续前进。",
  "Built around the questions players are searching for most, with quick answers first and deeper context when you need it.": "围绕玩家最常搜索的问题整理：先给快速答案，需要时再深入阅读。",
  "All puzzle routes": "全部谜题路线", "Learn the island": "熟悉岛屿", "Play across platforms": "跨平台游玩",
  "View Big Walk puzzles →": "查看 Big Walk 谜题 →", "Read the map guide →": "阅读地图指南 →", "Check crossplay support →": "查看跨平台支持 →",
  "Three things before you set off.": "出发前要知道的三件事。",
  "Bring at least one friend": "至少带上一位朋友", "Choose the right world": "选择合适的世界配置", "Use the game’s communication": "善用游戏内沟通",
  "A cooperative adventure about talking.": "一场关于交流的合作冒险。",
  "Where can you play?": "可以在哪些平台游玩？", "How many friends?": "可以和多少朋友一起玩？",
  "Read the player-count guide →": "阅读玩家人数指南 →", "Next stop": "下一站",
  "Stuck at the first big landmark?": "在第一个大型地标卡住了吗？", "Start the puzzle guide": "开始谜题攻略",
  "Independent, spoiler-aware Big Walk guide.": "独立制作、注重避免剧透的 Big Walk 指南。",
  "Independent Big Walk Wiki.": "独立 Big Walk 百科。", "On this page": "本页目录", "Related guides": "相关攻略",
  "Spoiler-aware guide": "低剧透攻略", "Big Walk Puzzles & Solutions": "Big Walk 谜题与解法",
  "Starting area & Drawbridge": "起始区域与吊桥", "Known opening challenges": "已知开场挑战", "Red Tower route": "红塔路线", "Green Tower route": "绿塔路线", "Blue, Yellow & Black Tower routes": "蓝塔、黄塔与黑塔路线", "Later towers": "后续塔楼",
  "Island field notes": "岛屿探索笔记", "Big Walk Map & Locations": "Big Walk 地图与地点", "How to reach the Map Room": "如何进入地图室", "Best landmarks": "最佳地标", "How to use the map": "如何使用地图", "Map size": "地图规模", "Puzzle locations": "谜题地点", "Using the map": "使用地图", "Puzzle areas": "谜题区域",
  "Multiplayer guide": "多人游戏指南", "Big Walk Crossplay": "Big Walk 跨平台联机", "Crossplay support by platform": "各平台跨平台支持", "How to play with friends": "如何与朋友联机", "Before your group joins": "队伍加入前的检查", "Crossplay FAQ": "跨平台联机常见问题", "Platform matrix": "平台支持表", "Joining friends": "加入朋友", "Setup checklist": "设置检查清单", FAQ: "常见问题",
  "2–12 players": "2–12 名玩家", "How Many Players Can Play Big Walk?": "Big Walk 可以几个人玩？", "Minimum and maximum players": "最少与最多玩家人数", "What the host chooses": "房主需要选择什么", "What is the ideal group size?": "理想的队伍人数是多少？", "Can you play solo?": "可以单人游玩吗？", "Related multiplayer help": "相关多人游戏帮助", "World settings": "世界设置", "Ideal group": "理想队伍", "Solo play": "单人游玩", "Related help": "相关帮助",
  "Platform guide": "平台指南", "Big Walk on Steam": "Steam 上的 Big Walk", "Big Walk Steam price": "Big Walk Steam 价格", "Steam Deck support": "Steam Deck 支持", "Player count & charts": "玩家人数与趋势", "Steam keys": "Steam 激活码", "Steam crossplay": "Steam 跨平台联机", "Mac support": "Mac 支持", Price: "价格", "Player charts": "玩家趋势", Crossplay: "跨平台联机",
  "Big Walk on PS5": "PS5 上的 Big Walk", "PS5 release status": "PS5 发售状态", "Online players": "在线玩家人数", "Does PS5 have crossplay?": "PS5 支持跨平台联机吗？", "Voice chat tip": "语音聊天提示", "Before you buy": "购买前须知", "Release status": "发售状态", Players: "玩家人数", "Voice chat": "语音聊天", "Before buying": "购买前须知",
  "Availability answer": "平台状态解答", "Is Big Walk on Xbox?": "Big Walk 登陆 Xbox 了吗？", "Xbox release status": "Xbox 发售状态", "Why is there no Xbox version?": "为什么没有 Xbox 版本？", "Could it come later?": "以后可能登陆吗？", "Where can Xbox players play?": "Xbox 玩家还能在哪里游玩？", "Xbox price": "Xbox 价格", "Why no Xbox": "为何没有 Xbox 版", "Future possibility": "未来可能性", Alternatives: "替代平台",
  "Quick answer:": "快速答案：", "Quick route:": "快速路线：", "Quick info:": "快速信息：", "Quick answer": "快速答案", "Related guides": "相关攻略"
};

const fr = {
  "Big Walk Wiki":"Wiki Big Walk",Home:"Accueil",Puzzles:"Énigmes",Map:"Carte",Platforms:"Plateformes",Multiplayer:"Multijoueur",
  "Popular guides":"Guides populaires","Start here":"Commencer ici","About Big Walk":"À propos de Big Walk","Walk together. Get wonderfully lost.":"Marchez ensemble. Perdez-vous avec plaisir.","Your field guide to Big Walk.":"Votre guide de terrain pour Big Walk.","Explore puzzle guides":"Explorer les énigmes","Open the map guide":"Ouvrir le guide de la carte","Find the answer. Keep walking.":"Trouvez la réponse. Continuez à marcher.","All puzzle routes":"Tous les parcours d’énigmes","Learn the island":"Découvrir l’île","Play across platforms":"Jouer entre plateformes","Three things before you set off.":"Trois choses à savoir avant de partir.","Bring at least one friend":"Venez avec au moins un ami","Choose the right world":"Choisissez le bon monde","Use the game’s communication":"Utilisez la communication du jeu","A cooperative adventure about talking.":"Une aventure coopérative fondée sur la communication.","Where can you play?":"Où peut-on jouer ?","How many friends?":"Combien d’amis ?","Next stop":"Prochaine étape","Stuck at the first big landmark?":"Bloqué au premier grand repère ?","Start the puzzle guide":"Commencer le guide des énigmes","Independent Big Walk Wiki.":"Wiki Big Walk indépendant.","On this page":"Sur cette page","Related guides":"Guides associés","Quick answer:":"Réponse rapide :","Quick route:":"Parcours rapide :","Quick info:":"Infos rapides :",
  "Spoiler-aware guide":"Guide sans spoilers inutiles","Big Walk Puzzles & Solutions":"Énigmes et solutions de Big Walk","Starting area & Drawbridge":"Zone de départ et pont-levis","Known opening challenges":"Défis de départ connus","Red Tower route":"Parcours de la tour rouge","Green Tower route":"Parcours de la tour verte","Blue, Yellow & Black Tower routes":"Parcours des tours bleue, jaune et noire","Island field notes":"Notes d’exploration","Big Walk Map & Locations":"Carte et lieux de Big Walk","How to reach the Map Room":"Comment atteindre la salle des cartes","Best landmarks":"Meilleurs repères","How to use the map":"Comment utiliser la carte","Map size":"Taille de la carte","Puzzle locations":"Emplacements des énigmes","Multiplayer guide":"Guide multijoueur","Big Walk Crossplay":"Crossplay de Big Walk","Crossplay support by platform":"Crossplay par plateforme","How to play with friends":"Comment jouer avec des amis","Before your group joins":"Avant de rejoindre","Crossplay FAQ":"FAQ crossplay","How Many Players Can Play Big Walk?":"Combien de joueurs peuvent jouer à Big Walk ?","Minimum and maximum players":"Nombre minimum et maximum de joueurs","What the host chooses":"Choix de l’hôte","What is the ideal group size?":"Quelle est la taille idéale du groupe ?","Can you play solo?":"Peut-on jouer en solo ?","Platform guide":"Guide des plateformes","Big Walk on Steam":"Big Walk sur Steam","Big Walk Steam price":"Prix de Big Walk sur Steam","Steam Deck support":"Compatibilité Steam Deck","Player count & charts":"Nombre de joueurs et statistiques","Steam keys":"Clés Steam","Steam crossplay":"Crossplay Steam","Mac support":"Compatibilité Mac","Big Walk on PS5":"Big Walk sur PS5","PS5 release status":"Disponibilité sur PS5","Online players":"Joueurs en ligne","Does PS5 have crossplay?":"La PS5 prend-elle en charge le crossplay ?","Voice chat tip":"Conseil pour le chat vocal","Before you buy":"Avant d’acheter","Availability answer":"Disponibilité","Is Big Walk on Xbox?":"Big Walk est-il sur Xbox ?","Xbox release status":"Disponibilité sur Xbox","Why is there no Xbox version?":"Pourquoi n’existe-t-il pas de version Xbox ?","Could it come later?":"Pourrait-il arriver plus tard ?","Where can Xbox players play?":"Où les joueurs Xbox peuvent-ils jouer ?","Xbox price":"Prix Xbox"
};

const es = {
  "Big Walk Wiki":"Wiki de Big Walk",Home:"Inicio",Puzzles:"Puzles",Map:"Mapa",Platforms:"Plataformas",Multiplayer:"Multijugador",
  "Popular guides":"Guías populares","Start here":"Empieza aquí","About Big Walk":"Acerca de Big Walk","Walk together. Get wonderfully lost.":"Caminad juntos. Perdeos con gusto.","Your field guide to Big Walk.":"Tu guía de campo para Big Walk.","Explore puzzle guides":"Explorar guías de puzles","Open the map guide":"Abrir la guía del mapa","Find the answer. Keep walking.":"Encuentra la respuesta. Sigue caminando.","All puzzle routes":"Todas las rutas de puzles","Learn the island":"Conoce la isla","Play across platforms":"Juega entre plataformas","Three things before you set off.":"Tres cosas antes de partir.","Bring at least one friend":"Trae al menos a un amigo","Choose the right world":"Elige el mundo adecuado","Use the game’s communication":"Usa la comunicación del juego","A cooperative adventure about talking.":"Una aventura cooperativa sobre comunicarse.","Where can you play?":"¿Dónde puedes jugar?","How many friends?":"¿Cuántos amigos?","Next stop":"Siguiente parada","Stuck at the first big landmark?":"¿Atascado en el primer gran punto de referencia?","Start the puzzle guide":"Empezar la guía de puzles","Independent Big Walk Wiki.":"Wiki independiente de Big Walk.","On this page":"En esta página","Related guides":"Guías relacionadas","Quick answer:":"Respuesta rápida:","Quick route:":"Ruta rápida:","Quick info:":"Información rápida:",
  "Spoiler-aware guide":"Guía con spoilers controlados","Big Walk Puzzles & Solutions":"Puzles y soluciones de Big Walk","Starting area & Drawbridge":"Zona inicial y puente levadizo","Known opening challenges":"Desafíos iniciales conocidos","Red Tower route":"Ruta de la Torre Roja","Green Tower route":"Ruta de la Torre Verde","Blue, Yellow & Black Tower routes":"Rutas de las torres Azul, Amarilla y Negra","Island field notes":"Notas de exploración","Big Walk Map & Locations":"Mapa y ubicaciones de Big Walk","How to reach the Map Room":"Cómo llegar a la Sala del Mapa","Best landmarks":"Mejores puntos de referencia","How to use the map":"Cómo usar el mapa","Map size":"Tamaño del mapa","Puzzle locations":"Ubicaciones de puzles","Multiplayer guide":"Guía multijugador","Big Walk Crossplay":"Juego cruzado de Big Walk","Crossplay support by platform":"Juego cruzado por plataforma","How to play with friends":"Cómo jugar con amigos","Before your group joins":"Antes de unirse","Crossplay FAQ":"Preguntas sobre juego cruzado","How Many Players Can Play Big Walk?":"¿Cuántos jugadores pueden jugar a Big Walk?","Minimum and maximum players":"Jugadores mínimos y máximos","What the host chooses":"Qué elige el anfitrión","What is the ideal group size?":"¿Cuál es el tamaño ideal del grupo?","Can you play solo?":"¿Se puede jugar en solitario?","Platform guide":"Guía de plataformas","Big Walk on Steam":"Big Walk en Steam","Big Walk Steam price":"Precio de Big Walk en Steam","Steam Deck support":"Compatibilidad con Steam Deck","Player count & charts":"Jugadores y estadísticas","Steam keys":"Claves de Steam","Steam crossplay":"Juego cruzado en Steam","Mac support":"Compatibilidad con Mac","Big Walk on PS5":"Big Walk en PS5","PS5 release status":"Estado de lanzamiento en PS5","Online players":"Jugadores en línea","Does PS5 have crossplay?":"¿PS5 tiene juego cruzado?","Voice chat tip":"Consejo de chat de voz","Before you buy":"Antes de comprar","Availability answer":"Disponibilidad","Is Big Walk on Xbox?":"¿Big Walk está en Xbox?","Xbox release status":"Estado en Xbox","Why is there no Xbox version?":"¿Por qué no hay versión para Xbox?","Could it come later?":"¿Podría llegar más adelante?","Where can Xbox players play?":"¿Dónde pueden jugar los usuarios de Xbox?","Xbox price":"Precio en Xbox"
};

const ar = {
  "Big Walk Wiki":"ويكي Big Walk",Home:"الرئيسية",Puzzles:"الألغاز",Map:"الخريطة",Platforms:"المنصات",Multiplayer:"اللعب الجماعي",
  "Popular guides":"أدلة شائعة","Start here":"ابدأ هنا","About Big Walk":"عن Big Walk","Walk together. Get wonderfully lost.":"امشوا معًا واستمتعوا بالضياع.","Your field guide to Big Walk.":"دليلك الميداني إلى Big Walk.","Explore puzzle guides":"استكشف أدلة الألغاز","Open the map guide":"افتح دليل الخريطة","Find the answer. Keep walking.":"اعثر على الإجابة وواصل السير.","All puzzle routes":"جميع مسارات الألغاز","Learn the island":"تعرّف على الجزيرة","Play across platforms":"العب عبر المنصات","Three things before you set off.":"ثلاثة أمور قبل الانطلاق.","Bring at least one friend":"أحضر صديقًا واحدًا على الأقل","Choose the right world":"اختر إعداد العالم المناسب","Use the game’s communication":"استخدم وسائل التواصل داخل اللعبة","A cooperative adventure about talking.":"مغامرة تعاونية تتمحور حول التواصل.","Where can you play?":"أين يمكنك اللعب؟","How many friends?":"كم عدد الأصدقاء؟","Next stop":"المحطة التالية","Stuck at the first big landmark?":"هل علقت عند أول معلم كبير؟","Start the puzzle guide":"ابدأ دليل الألغاز","Independent Big Walk Wiki.":"ويكي Big Walk مستقل.","On this page":"في هذه الصفحة","Related guides":"أدلة ذات صلة","Quick answer:":"إجابة سريعة:","Quick route:":"مسار سريع:","Quick info:":"معلومات سريعة:",
  "Spoiler-aware guide":"دليل يراعي تجنب الحرق","Big Walk Puzzles & Solutions":"ألغاز Big Walk وحلولها","Starting area & Drawbridge":"منطقة البداية والجسر المتحرك","Known opening challenges":"تحديات البداية المعروفة","Red Tower route":"مسار البرج الأحمر","Green Tower route":"مسار البرج الأخضر","Blue, Yellow & Black Tower routes":"مسارات الأبراج الأزرق والأصفر والأسود","Island field notes":"ملاحظات استكشاف الجزيرة","Big Walk Map & Locations":"خريطة Big Walk والمواقع","How to reach the Map Room":"كيفية الوصول إلى غرفة الخريطة","Best landmarks":"أفضل المعالم","How to use the map":"كيفية استخدام الخريطة","Map size":"حجم الخريطة","Puzzle locations":"مواقع الألغاز","Multiplayer guide":"دليل اللعب الجماعي","Big Walk Crossplay":"اللعب المشترك في Big Walk","Crossplay support by platform":"دعم اللعب المشترك حسب المنصة","How to play with friends":"كيفية اللعب مع الأصدقاء","Before your group joins":"قبل انضمام المجموعة","Crossplay FAQ":"أسئلة اللعب المشترك","How Many Players Can Play Big Walk?":"كم لاعبًا يمكنه لعب Big Walk؟","Minimum and maximum players":"الحد الأدنى والأقصى للاعبين","What the host chooses":"ما الذي يختاره المضيف","What is the ideal group size?":"ما حجم المجموعة المثالي؟","Can you play solo?":"هل يمكن اللعب منفردًا؟","Platform guide":"دليل المنصات","Big Walk on Steam":"Big Walk على Steam","Big Walk Steam price":"سعر Big Walk على Steam","Steam Deck support":"دعم Steam Deck","Player count & charts":"عدد اللاعبين والإحصاءات","Steam keys":"مفاتيح Steam","Steam crossplay":"اللعب المشترك على Steam","Mac support":"دعم Mac","Big Walk on PS5":"Big Walk على PS5","PS5 release status":"حالة إصدار PS5","Online players":"اللاعبون عبر الإنترنت","Does PS5 have crossplay?":"هل يدعم PS5 اللعب المشترك؟","Voice chat tip":"نصيحة للدردشة الصوتية","Before you buy":"قبل الشراء","Availability answer":"حالة التوفر","Is Big Walk on Xbox?":"هل Big Walk متاحة على Xbox؟","Xbox release status":"حالة إصدار Xbox","Why is there no Xbox version?":"لماذا لا توجد نسخة Xbox؟","Could it come later?":"هل قد تصدر لاحقًا؟","Where can Xbox players play?":"أين يمكن للاعبي Xbox اللعب؟","Xbox price":"سعر Xbox"
};
const ja = {
  "Big Walk Wiki":"Big Walk Wiki", Home:"ホーム", Puzzles:"パズル", Map:"マップ", Platforms:"プラットフォーム", Multiplayer:"マルチプレイ",
  "Popular guides":"人気ガイド", "Start here":"はじめに", "About Big Walk":"Big Walkについて", "Next stop":"次の目的地",
  "Walk together. Get wonderfully lost.":"一緒に歩いて、楽しく迷おう。", "Your field guide to Big Walk.":"Big Walkのフィールドガイド。",
  "Clear answers, spoiler-aware puzzle help, map notes and multiplayer guides for your next strange little expedition.":"次の不思議な冒険に役立つ、明確な答え、ネタバレを抑えたパズル攻略、マップ情報、マルチプレイガイド。",
  "Explore puzzle guides":"パズルガイドを見る", "Open the map guide":"マップガイドを開く", "Find the answer. Keep walking.":"答えを見つけて、歩き続けよう。",
  "Built around the questions players are searching for most, with quick answers first and deeper context when you need it.":"プレイヤーがよく検索する疑問を中心に、最初に要点を、必要に応じて詳しい説明を掲載します。",
  "All puzzle routes":"すべてのパズルルート", "Learn the island":"島を知る", "Play across platforms":"プラットフォームを越えて遊ぶ",
  "Start at the Drawbridge, follow the tower routes, and keep spoilers under control.":"跳ね橋から始め、塔のルートをたどりながらネタバレを最小限に抑えます。",
  "Use major landmarks, the Train Station and Map Room to keep your group oriented.":"主要ランドマーク、駅、マップルームを使って仲間と方向を確認しましょう。",
  "Crossplay, joining friends, group sizes and the practical details in one place.":"クロスプレイ、フレンド参加、グループ人数などの実用情報をまとめました。",
  "View Big Walk puzzles →":"Big Walkのパズルを見る →", "Read the map guide →":"マップガイドを読む →", "Check crossplay support →":"クロスプレイ対応を確認 →",
  "Three things before you set off.":"出発前に知っておきたい3つのこと。", "Bring at least one friend":"少なくとも友達を1人連れていく", "Choose the right world":"適切なワールドを選ぶ", "Use the game’s communication":"ゲーム内コミュニケーションを活用する",
  "A cooperative adventure about talking.":"会話が中心の協力型アドベンチャー。", "Where can you play?":"どこで遊べる？", "How many friends?":"何人で遊べる？", "Read the player-count guide →":"プレイヤー人数ガイドを読む →",
  "Stuck at the first big landmark?":"最初の大きなランドマークで詰まった？", "Start the puzzle guide":"パズルガイドを始める", "Independent, spoiler-aware Big Walk guide.":"独立運営のネタバレ配慮型Big Walkガイド。",
  "On this page":"このページの内容", "Related guides":"関連ガイド", "Spoiler-aware guide":"ネタバレ配慮ガイド", "Big Walk Puzzles & Solutions":"Big Walk パズル＆解答", "Island field notes":"島のフィールドノート", "Big Walk Map & Locations":"Big Walk マップ＆ロケーション", "Multiplayer guide":"マルチプレイガイド", "Big Walk Crossplay":"Big Walk クロスプレイ", "How Many Players Can Play Big Walk?":"Big Walkは何人で遊べる？", "Platform guide":"プラットフォームガイド", "Big Walk on Steam":"Steam版Big Walk", "Big Walk on PS5":"PS5版Big Walk", "Is Big Walk on Xbox?":"Big WalkはXboxで遊べる？"
};

const pt = {
  "Big Walk Wiki":"Wiki Big Walk", Home:"Início", Puzzles:"Quebra-cabeças", Map:"Mapa", Platforms:"Plataformas", Multiplayer:"Multijogador",
  "Popular guides":"Guias populares", "Start here":"Comece aqui", "About Big Walk":"Sobre Big Walk", "Next stop":"Próxima parada",
  "Walk together. Get wonderfully lost.":"Caminhem juntos. Perca-se de um jeito maravilhoso.", "Your field guide to Big Walk.":"Seu guia de campo para Big Walk.",
  "Clear answers, spoiler-aware puzzle help, map notes and multiplayer guides for your next strange little expedition.":"Respostas claras, ajuda com quebra-cabeças sem spoilers excessivos, notas do mapa e guias multijogador para sua próxima expedição.",
  "Explore puzzle guides":"Explorar guias de quebra-cabeças", "Open the map guide":"Abrir o guia do mapa", "Find the answer. Keep walking.":"Encontre a resposta. Continue caminhando.",
  "Built around the questions players are searching for most, with quick answers first and deeper context when you need it.":"Feito com base nas dúvidas mais buscadas, com respostas rápidas primeiro e detalhes quando necessário.",
  "All puzzle routes":"Todas as rotas de quebra-cabeças", "Learn the island":"Conheça a ilha", "Play across platforms":"Jogue entre plataformas",
  "Start at the Drawbridge, follow the tower routes, and keep spoilers under control.":"Comece na ponte levadiça, siga as rotas das torres e mantenha os spoilers sob controle.",
  "Use major landmarks, the Train Station and Map Room to keep your group oriented.":"Use os principais pontos de referência, a estação e a sala do mapa para orientar o grupo.",
  "Crossplay, joining friends, group sizes and the practical details in one place.":"Crossplay, entrada de amigos, tamanho do grupo e detalhes práticos em um só lugar.",
  "View Big Walk puzzles →":"Ver quebra-cabeças de Big Walk →", "Read the map guide →":"Ler o guia do mapa →", "Check crossplay support →":"Verificar suporte a crossplay →",
  "Three things before you set off.":"Três coisas antes de partir.", "Bring at least one friend":"Leve pelo menos um amigo", "Choose the right world":"Escolha o mundo certo", "Use the game’s communication":"Use a comunicação do jogo",
  "A cooperative adventure about talking.":"Uma aventura cooperativa sobre comunicação.", "Where can you play?":"Onde você pode jogar?", "How many friends?":"Quantos amigos?", "Read the player-count guide →":"Ler o guia de quantidade de jogadores →",
  "Stuck at the first big landmark?":"Travou no primeiro grande ponto de referência?", "Start the puzzle guide":"Começar o guia de quebra-cabeças", "Independent, spoiler-aware Big Walk guide.":"Guia independente de Big Walk com cuidado com spoilers.",
  "On this page":"Nesta página", "Related guides":"Guias relacionados", "Spoiler-aware guide":"Guia com spoilers controlados", "Big Walk Puzzles & Solutions":"Quebra-cabeças e soluções de Big Walk", "Island field notes":"Notas de campo da ilha", "Big Walk Map & Locations":"Mapa e locais de Big Walk", "Multiplayer guide":"Guia multijogador", "Big Walk Crossplay":"Crossplay de Big Walk", "How Many Players Can Play Big Walk?":"Quantos jogadores podem jogar Big Walk?", "Platform guide":"Guia de plataformas", "Big Walk on Steam":"Big Walk no Steam", "Big Walk on PS5":"Big Walk no PS5", "Is Big Walk on Xbox?":"Big Walk está no Xbox?"
};
const dictionaries = { fr, ar, es, zh };

const originalTitle = document.title;
const titleZh = {
  "Big Walk Wiki — Puzzles, Map & Multiplayer Guides": "Big Walk 百科 — 谜题、地图与多人攻略",
  "Big Walk Puzzles: Solutions, Routes & Locations": "Big Walk 谜题：解法、路线与地点",
  "Big Walk Map: Locations, Landmarks & Puzzle Areas": "Big Walk 地图：地点、地标与谜题区域",
  "Big Walk Crossplay: Is It Cross-Platform?": "Big Walk 跨平台联机指南",
  "Big Walk: How Many Players Can Play?": "Big Walk 可以几个人玩？",
  "Big Walk Steam: Price, Steam Deck & Player Info": "Big Walk Steam：价格、Steam Deck 与玩家信息",
  "Big Walk PS5: PlayStation 5 Version Guide": "Big Walk PS5 版本指南",
  "Big Walk Xbox: Is It Coming to Xbox?": "Big Walk 会登陆 Xbox 吗？"
};
const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  if (node.parentElement?.closest("script,style")) continue;
  const key = node.nodeValue.trim();
  if (key && Object.values(dictionaries).some((dictionary) => dictionary[key])) textNodes.push({ node, english: node.nodeValue, key });
}

function setLanguage(language) {
  const locales = { en:"en", fr:"fr", ar:"ar", es:"es", zh:"zh-CN" };
  const dictionary = dictionaries[language] || {};
  root.lang = locales[language] || "en";
  root.dir = language === "ar" ? "rtl" : "ltr";
  textNodes.forEach(({ node, english, key }) => {
    if (language !== "en" && dictionary[key]) {
      const left = english.match(/^\s*/)[0];
      const right = english.match(/\s*$/)[0];
      node.nodeValue = left + dictionary[key] + right;
    } else node.nodeValue = english;
  });
  document.title = language === "zh" ? (titleZh[originalTitle] || originalTitle) : originalTitle;
  const button = document.querySelector(".language");
  if (button) button.value = language;
  localStorage.setItem("bw-language", language);
}

document.querySelector(".language")?.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});
setLanguage(localStorage.getItem("bw-language") || "en");

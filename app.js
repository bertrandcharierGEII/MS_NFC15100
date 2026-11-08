const chapters = [
  {
    id: "inspection",
    number: "01",
    icon: "◉",
    title: "Inspection visuelle",
    short: "Observer avant de mesurer",
    intro: "Avant les essais, examiner le coffret Habilis, son environnement et les documents associés. Une anomalie visible doit être consignée et traitée avant de poursuivre.",
    standard: [
      "Réaliser l’inspection dans les conditions de consignation prévues et comparer le montage aux schémas, repères et consignes disponibles.",
      "Examiner l’état du coffret, les protections contre les contacts, les connexions accessibles et l’identification des circuits.",
      "Vérifier le repérage et les couleurs des conducteurs selon les règles applicables.",
      "L'inspection visuelle comprend 3 phases:",
      "1- La concordance de la couleur des fils avec leur fonction : BLEU CLAIR pour le Neutre, JAUNE/VERT pour le conducteur de Protection Équipotentielle (PE/Terre), NOIR pour la puissance, ROUGE pour la partie commande en alternatif et ORANGE pour les circuits secourus (cf EN 60204)",
      "2- La concordance des repères des conducteurs (équipotentielles) avec le schéma de câblage du coffret.",
      "3- La concordance des repères des appareils (disjoncteurs, contacteurs, interrupteurs différentiels) avec le schéma de câblage du coffret.",
      "Signaler les écarts et ne pas engager les essais suivants tant qu’un écart bloquant n’est pas levé.",
    ],
    meter: "Aucun des contrôleurs Fluke 1653 ou Chauvin Arnoux CA 6116 ne remplace l’observation visuelle. Un vérificateur d’absence de tension adapté peut être requis par la procédure de consignation; il ne s’agit pas d’une permission d’intervention.",
    principle: "Documents → coffret → anomalies",
    diagram: ["Documents", "Inspection", "Écarts tracés"],
    example: "Sur Habilis, comparer les repères des appareils et des conducteurs au schéma disponible. Vérifier en particulier le PE vert/jaune, le neutre bleu clair, et le repérage préconisé des circuits : noir pour la puissance AC, rouge pour la commande AC, bleu pour la commande DC.",
    report: ["Élément / repère", "État constaté", "Écart / action"],
    quiz: [
      { question: "À quoi comparer le câblage et les repères ?", options: ["Aux schémas et consignes du coffret", "À un coffret choisi au hasard", "À la couleur de la porte"], answer: 0, remedy: "Les documents propres à l’installation sont la référence pour vérifier la cohérence du montage." },
      { question: "Quelle couleur identifie le conducteur PE ?", options: ["Bleu clair", "Vert et jaune", "Rouge"], answer: 1, remedy: "Le conducteur de protection est repéré vert/jaune; le bleu clair identifie le neutre." },
      { question: "Que faire en cas d’anomalie visuelle ?", options: ["La consigner et la faire traiter avant la suite", "La masquer pour terminer", "Poursuivre sans la signaler"], answer: 0, remedy: "Une anomalie doit être tracée et évaluée avant de poursuivre le parcours de vérification." }
    ]
  },
  {
    id: "continuite",
    number: "02",
    icon: "⏚",
    title: "Continuité du PE",
    short: "Vérifier les liaisons de protection",
    intro: "La continuité du conducteur de protection (PE) permet de s’assurer que les masses concernées sont reliées au circuit de protection. Les points mesurés sont définis à partir du schéma.",
    standard: [
      "Mesurer la continuité avec un contrôleur d’installation qui injecte un courant d’essai d’au moins 200 mA.",
      "Contrôler, hors tension, les liaisons PE et équipotentielles prévues dans le périmètre de vérification.",
      "Comparer chaque résultat au critère retenu pour le régime de neutre et l’installation.",
      "Identifier les points mesurés, les valeurs, le critère et la conclusion."
    ],
    meter: "Les Fluke 1653 et Chauvin Arnoux CA 6116 disposent de fonctions de mesure de continuité basse résistance. Vérifier dans la notice du modèle la fonction exacte, les cordons, la compensation des cordons et les conditions d’essai. La méthode de référence des appareils est traitée par NF EN IEC 61557-4.",
    principle: "Contrôleur ≥ 200 mA → PE → masse",
    diagram: ["Contrôleur", "Liaison PE", "Point contrôlé"],
    example: "Pour chaque point de masse du coffret Habilis, relever le repère et la résistance mesurée. En régime TT, le seuil fourni est 2 Ω. En régime TN, le seuil dépend du disjoncteur de tête : pour Habilis (80 A), la valeur indiquée est 0,14 Ω. Le critère doit être confirmé dans le dossier et la méthode de vérification du coffret.",
    markers: [["≥ 200 mA", "Courant d’essai"], ["2 Ω", "Seuil TT"], ["0,14 Ω", "TN · Habilis 80 A"]],
    report: ["Point PE / repère", "Résistance mesurée", "Critère / résultat"],
    quiz: [
      { question: "Quel courant d’essai minimal est demandé pour le contrôle de continuité ?", options: ["10 mA", "200 mA", "2 A"], answer: 1, remedy: "La mesure doit être réalisée avec un contrôleur d’installation injectant au moins 200 mA." },
      { question: "Quel seuil est indiqué pour Habilis en régime TN avec un disjoncteur de tête de 80 A ?", options: ["2 Ω", "0,14 Ω", "100 Ω"], answer: 1, remedy: "Pour le cas Habilis indiqué, le seuil TN est 0,14 Ω. En TN, la valeur dépend du calibre de la protection de tête." },
      { question: "Quel seuil est donné pour le régime TT ?", options: ["2 Ω", "0,14 Ω", "0,5 MΩ"], answer: 0, remedy: "Le repère fourni pour le régime TT est 2 Ω. Il faut toujours tracer le régime et le critère retenu." }
    ]
  },
  {
    id: "isolement",
    number: "03",
    icon: "⟷",
    title: "Contrôle d’isolement",
    short: "Mesurer l’isolement vers la terre",
    intro: "Le contrôle recherche une dégradation de l’isolement entre les conducteurs actifs et la terre (PE). Il se prépare en identifiant les circuits et les équipements sensibles à la tension d’essai.",
    standard: [
      "Contrôler l’isolement entre chaque conducteur actif (phases et neutre) et le conducteur de protection PE.",
      "Réaliser l’essai hors tension avec une tension d’essai de 500 V continu.",
      "La résistance mesurée doit être supérieure à 0,5 MΩ.",
      "Préparer les récepteurs et protéger ou déconnecter les composants électroniques conformément à leurs notices."
    ],
    meter: "Le Fluke 1653 et le Chauvin Arnoux CA 6116 proposent une fonction de mesure d’isolement. Sélectionner la fonction et la tension d’essai prescrites, puis suivre les notices de l’appareil et des équipements connectés. La série NF EN IEC 61557-2 concerne les appareils de mesure d’isolement.",
    principle: "L / N → essai 500 V⎓ → PE",
    diagram: ["Conducteurs actifs", "500 V continu", "Terre (PE)"],
    example: "Pour Habilis, consigner la configuration du circuit, la préparation des composants électroniques et la mesure relevée entre les conducteurs actifs (phases et neutre) et le PE. Comparer à 0,5 MΩ : la valeur attendue est strictement supérieure à ce seuil.",
    markers: [["500 V⎓", "Tension d’essai"], ["> 0,5 MΩ", "Résistance attendue"], ["Actifs / PE", "Points contrôlés"]],
    report: ["Conducteurs / circuit", "Résistance mesurée", "Critère / résultat"],
    quiz: [
      { question: "Entre quelles parties réalise-t-on le contrôle décrit ?", options: ["Entre les conducteurs actifs et le PE", "Entre deux boutons de commande", "Entre le coffret et le sol"], answer: 0, remedy: "Le contrôle porte sur l’isolement entre chaque conducteur actif (phases et neutre) et la terre (PE)." },
      { question: "Quelle tension d’essai est indiquée ?", options: ["24 V alternatif", "230 V alternatif", "500 V continu"], answer: 2, remedy: "La tension d’essai précisée pour ce contrôle est 500 V continu." },
      { question: "Quel résultat satisfait le seuil fourni ?", options: ["0,4 MΩ", "0,5 MΩ exactement", "Une valeur supérieure à 0,5 MΩ"], answer: 2, remedy: "La résistance mesurée doit être supérieure à 0,5 MΩ; le seuil n’est donc pas atteint par 0,5 MΩ exactement." }
    ]
  },
  {
    id: "mise-sous-tension",
    number: "04",
    icon: "ϟ",
    title: "Mise sous tension progressive",
    short: "Alimenter sous contrôle",
    intro: "La mise sous tension vient après les vérifications hors tension et la levée des écarts bloquants. Elle suit une procédure locale, avec des étapes et des responsabilités définies.",
    standard: [
      "Confirmer que les contrôles préalables sont réalisés et que les écarts bloquants sont levés.",
      "Vérifier les protections, les organes de coupure, la zone de travail et les conditions d’autorisation.",
      "Procéder selon les étapes de la procédure du site et surveiller les grandeurs prévues.",
      "Arrêter et signaler toute valeur ou situation inattendue."
    ],
    meter: "Le Fluke 1653 et le CA 6116 sont des contrôleurs d’installation; le domaine d’emploi et les catégories de mesure de l’exemplaire utilisé doivent être vérifiés dans sa notice. Toute mesure en présence de tension est réalisée uniquement par une personne habilitée, selon la procédure et sous encadrement adapté.",
    principle: "Préparer → autoriser → alimenter par étapes",
    diagram: ["Contrôles validés", "Autorisation", "Étapes surveillées"],
    example: "Exemple de séquencement pédagogique : vérifier le dossier, faire valider les conditions, alimenter selon la procédure du site puis consigner chaque résultat. Ce déroulé n’est pas une procédure de consignation ou de mise sous tension et ne remplace pas celle de l’établissement.",
    report: ["Étape / grandeur", "Résultat observé", "Autorisation / réserve"],
    quiz: [
      { question: "Quel préalable doit être satisfait avant la mise sous tension ?", options: ["Les contrôles préalables sont validés et les écarts bloquants levés", "Le quiz est terminé", "Les protections sont retirées"], answer: 0, remedy: "La mise sous tension ne vient qu’après les vérifications préalables et la validation des conditions de sécurité." },
      { question: "Qui peut effectuer une mesure sur un circuit sous tension ?", options: ["Toute personne ayant lu le chapitre", "Une personne habilitée, selon la procédure du site", "Un observateur sans formation"], answer: 1, remedy: "Le site est un support pédagogique, pas une autorisation d’intervention. Les règles d’habilitation et d’encadrement s’appliquent." },
      { question: "Que faire si une grandeur ne correspond pas aux documents ?", options: ["Suspendre l’étape et faire analyser l’écart", "Poursuivre sans la noter", "Modifier un réglage sans validation"], answer: 0, remedy: "Un résultat inattendu doit être tracé, analysé et validé par les personnes responsables avant toute poursuite." }
    ]
  },
  {
    id: "protection",
    number: "05",
    icon: "⌁",
    title: "Coupure automatique",
    short: "Vérifier la protection contre les contacts indirects",
    intro: "Cette vérification s’assure que les conditions de protection par coupure automatique sont satisfaites. La méthode dépend du régime de neutre et inclut le contrôle des dispositifs différentiels concernés.",
    standard: [
      "En régime TN, mesurer la résistance d’impédance de boucle selon la méthode prévue.",
      "En régime TT, mesurer la résistance de la prise de terre RA; avec une sensibilité de 500 mA, la valeur maximale indiquée est 100 Ω.",
      "Tester les dispositifs différentiels avec un contrôleur d’installation et relever le courant et le temps de déclenchement.",
      "Pour un différentiel 30 mA, le déclenchement est attendu entre 15 et 30 mA; le temps maximal fourni est 400 ms en TN et 200 ms en TT (tableau 41.1, p. 140)."
    ],
    meter: "Le Fluke 1653 et le CA 6116 proposent des fonctions de test des protections différentielles et, selon le modèle, de mesure de boucle ou de terre. Choisir le mode adapté au régime et au circuit, respecter la notice et consigner le courant ainsi que le temps de déclenchement. La série NF EN IEC 61557-3 concerne les appareils de mesure d’impédance de boucle; NF EN IEC 61557-6 concerne les dispositifs différentiels.",
    principle: "TN : boucle · TT : RA · DDR : IΔ / temps",
    diagram: ["Régime TN / TT", "Testeur", "Valeur / temps"],
    example: "Exemple de fiche d’essai : indiquer le régime (TN ou TT), la protection testée et ses caractéristiques, puis la mesure de boucle ou de RA et le résultat du test différentiel. En TT, comparer RA à 100 Ω au plus pour la sensibilité de 500 mA. Pour un DDR 30 mA, vérifier le courant de déclenchement entre 15 et 30 mA et le temps maximal associé au régime.",
    markers: [["RA ≤ 100 Ω", "TT · 500 mA"], ["15–30 mA", "DDR 30 mA"], ["400 / 200 ms", "TN / TT"]],
    report: ["Régime / protection", "Mesure (Ω / mA)", "Temps / conclusion"],
    quiz: [
      { question: "Quelle mesure est attendue en régime TN ?", options: ["La résistance d’impédance de boucle", "La couleur du neutre", "La seule résistance RA"], answer: 0, remedy: "En régime TN, le contrôle indiqué porte sur l’impédance de boucle." },
      { question: "En régime TT, quelle valeur maximale de RA est donnée pour une sensibilité de 500 mA ?", options: ["2 Ω", "100 Ω", "0,5 MΩ"], answer: 1, remedy: "Le repère fourni pour RA en TT avec une sensibilité de 500 mA est 100 Ω maximum." },
      { question: "En TT, quel temps maximal est donné pour le test d’un DDR 30 mA ?", options: ["200 ms", "400 ms", "1 s"], answer: 0, remedy: "Le temps maximal fourni est 200 ms en TT et 400 ms en TN; il faut relever le régime avant d’interpréter." }
    ]
  },
  {
    id: "fonctionnels",
    number: "06",
    icon: "✓",
    title: "Tests fonctionnels",
    short: "Comparer la réponse à l’attendu",
    intro: "Les essais fonctionnels confrontent le comportement du coffret aux schémas, à la notice du malaxeur Habilis et aux modes de marche prévus. Chaque essai doit avoir un résultat attendu défini avant sa réalisation.",
    standard: [
      "Définir les fonctions et conditions d’essai à partir des documents disponibles.",
      "Contrôler commandes, voyants, sécurités et séquences de fonctionnement prévues.",
      "Vérifier les réponses attendues sans neutraliser les protections ni improviser de manœuvre.",
      "Consigner les résultats et arrêter l’essai si un comportement inattendu ou un risque apparaît."
    ],
    meter: "Les contrôleurs Fluke 1653 et CA 6116 sont réservés aux contrôles correspondant à leurs fonctions documentées. Les essais fonctionnels peuvent demander d’autres moyens; ne pas employer ces appareils hors de leur domaine, ni réaliser un essai en mouvement sans habilitation, supervision et protections adaptées.",
    principle: "Commande → réponse attendue → constat",
    diagram: ["Commande", "Fonction", "Résultat observé"],
    example: "Construire un tableau « commande / réponse attendue / réponse observée » à partir de la notice du malaxeur Habilis. Tester un mode à la fois, sous encadrement, et tracer tout écart au lieu de répéter l’essai jusqu’à obtenir le résultat voulu.",
    report: ["Mode / commande testés", "Réponse attendue / observée", "Écart / décision"],
    quiz: [
      { question: "Sur quoi s’appuie un essai fonctionnel ?", options: ["Sur des réponses attendues définies par les documents", "Sur une manipulation improvisée", "Sur le seul bruit de la machine"], answer: 0, remedy: "La notice et les schémas définissent les fonctions et les résultats attendus avant le test." },
      { question: "Que faire si la réponse observée diffère de l’attendu ?", options: ["Arrêter, consigner l’écart et le faire analyser", "Répéter jusqu’au résultat souhaité", "Ignorer l’écart si un voyant s’allume"], answer: 0, remedy: "Un comportement inattendu est une anomalie à signaler; ne pas multiplier les essais sans autorisation." },
      { question: "Quelles informations rendent le procès-verbal utile ?", options: ["Le mode testé, l’attendu et le constat", "La seule date du test", "Le nom du coffret seulement"], answer: 0, remedy: "La traçabilité relie chaque test à son contexte, son résultat attendu et son résultat observé." }
    ]
  }
];

const resources = [
  { title: "Fiche de mise en service NF C 15-100", detail: "Fiche de première mise en service : liste de vérifications, conditions d’essai, résultats attendus et cases à cocher (2 pages).", href: "ressources/Fiche%20mise%20en%20service%20NFC15-100.pdf", type: "Fiche PDF" },
  { title: "Notice technique du système Habilis", detail: "Dossier technique du malaxeur Habilis : schémas, documentation et informations sur le coffret étudié.", href: "ressources/habilis.pdf", type: "Dossier PDF" },
  { title: "NF C 15-100-1 — Domaine d’application et principes fondamentaux", detail: "Titre 1 de la norme d’installation basse tension : domaine d’application, objet et principes fondamentaux.", href: "ressources/NF%20C15-100-1.pdf", type: "Norme PDF" },
  { title: "NF C 15-100-10", detail: "Document de la série NF C 15-100 fourni avec le projet (117 pages).", href: "ressources/NF%20C15-100-10.pdf", type: "Norme PDF" },
  { title: "FD C 15-105 — Sections de conducteurs et protections", detail: "Guide pratique pour déterminer les sections de conducteurs et choisir les dispositifs de protection (édition 2026).", href: "ressources/FD%20C15-105.pdf", type: "Guide PDF" },
  { title: "EN 60204-1 — Vérifications", detail: "Extrait de l’EN 60204-1:2018 : informations de documentation, validation des fonctions de commande et essais périodiques.", href: "ressources/EN60204_Verifications.pdf", type: "Extrait de norme PDF" },
  { title: "EN 60204-1 — Pratiques de câblage", detail: "Extrait de l’EN 60204-1:2018 : circuit de protection, raccordements et cheminement des conducteurs.", href: "ressources/EN60204-1_pratique_cablage.pdf", type: "Extrait de norme PDF" },
  { title: "EN 61010-1 — Sécurité des appareils de mesure", detail: "Exigences générales de sécurité pour les appareils électriques de mesure, de commande et de laboratoire.", href: "ressources/EN%2061010-1.pdf", type: "Norme PDF" },
  { title: "NF EN IEC 61557-1 — Exigences générales", detail: "Exigences générales pour les appareils de contrôle des mesures de protection en basse tension.", href: "ressources/EN%2061557-1.pdf", type: "Norme PDF" },
  { title: "NF EN IEC 61557-2 — Résistance d’isolement", detail: "Exigences pour les appareils de mesure de la résistance d’isolement.", href: "ressources/EN%2061557-2.pdf", type: "Norme PDF" },
  { title: "NF EN IEC 61557-4 — Continuité des conducteurs", detail: "Exigences pour les appareils de mesure de la résistance des conducteurs de terre, de protection et d’équipotentialité.", href: "ressources/EN%2061557-4.pdf", type: "Norme PDF" },
  { title: "NF EN IEC 61557-7 — Ordre des phases", detail: "Exigences pour les appareils de contrôle de l’ordre des phases.", href: "ressources/EN%2061557-7.pdf", type: "Norme PDF" },
  { title: "Guide de la mesure d’isolement", detail: "Guide Chauvin Arnoux sur le principe, la mise en œuvre et l’interprétation de la mesure d’isolement (28 pages).", href: "ressources/guide-de-la-mesure-disolement(1).pdf", type: "Guide PDF" },
  { title: "Contrôleur d’installation Chauvin Arnoux C.A 6116", detail: "Documentation de la gamme C.A 6113 / 6116N / 6117 : vérification selon NF C 15-100, régimes TT, TN, IT et tests de DDR (8 pages).", href: "ressources/CA6116.pdf", type: "Documentation PDF" },
  { title: "Contrôleur d’installation Fluke 1653", detail: "Manuel d’utilisation du testeur d’installation Fluke 1653 (66 pages).", href: "ressources/fluke-1653bvde-tester-din-vde-0100-413-3277900-manuel-d-utilisation.pdf", type: "Manuel PDF" }
];

const symbols = [
  { id: "disjoncteur", name: "Disjoncteur", function: "PROTÉGER", summary: "Appareil de protection qui ouvre automatiquement le circuit en cas de défaut détecté par son déclencheur.", details: ["Déclencheur thermique : protection contre les surcharges; magnétique : protection contre les courts-circuits.", "Selon le modèle, un déclencheur électronique ou différentiel peut aussi être intégré ou associé.", "Le pouvoir de coupure doit être adapté au courant de court-circuit présumé au point d’installation."], image: "images/symb_disj_uni.png" },
  { id: "interrupteur-differentiel", name: "Interrupteur différentiel", function: "PROTÉGER", summary: "Appareil qui détecte un courant différentiel résiduel et coupe le circuit lorsque les conditions de déclenchement sont réunies.", details: ["Il protège les personnes contre les risques liés aux courants de fuite selon sa sensibilité assignée.", "Il ne protège pas contre les surcharges ni les courts-circuits : une protection contre les surintensités doit lui être associée.", "Vérifier le type, la sensibilité et le courant assigné adaptés au circuit."], image: "images/symb_inter_diff_uni.png" },
  { id: "sectionneur-porte-fusible", name: "Sectionneur porte-fusible", function: "SÉPARER · PROTÉGER", summary: "Appareil combinant une fonction de sectionnement et une protection contre les surintensités par fusible.", details: ["Le sectionnement permet d’isoler le circuit dans les conditions prévues par le constructeur.", "Le fusible protège contre les surintensités selon son calibre et sa catégorie d’emploi.", "Vérifier le type de fusible et le pouvoir de coupure adaptés à l’installation."], image: "images/symb_fus_uni.png" },
  { id: "contacteur", name: "Contacteur", function: "COMMANDER", summary: "Appareil de commande électromécanique permettant d’établir ou de couper un circuit de puissance à distance.", details: ["Le circuit de puissance commute la charge.", "La bobine et les contacts auxiliaires appartiennent au circuit de commande.", "La protection du circuit doit être assurée par les dispositifs adaptés."], image: "images/Symbole_Contacteur.png" }
];

const main = document.querySelector("#main");
const nav = document.querySelector("#primary-nav");
const menuToggle = document.querySelector(".menu-toggle");
const pages = ["accueil", "symboles", "ressources", "apropos", "bilan"];
const chapterIds = chapters.map(({ id }) => id);

function route() {
  const hash = window.location.hash.slice(1);
  return chapterIds.includes(hash) || pages.includes(hash) ? hash : "accueil";
}

function headerLinks(active) {
  const current = chapterIds.includes(active) ? "inspection" : active;
  nav.querySelectorAll("a[data-route]").forEach((link) => {
    if (link.dataset.route === current) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  menuToggle.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
}

function renderHome() {
  main.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">SAE 13 · BUT GEII · 2026</p>
        <h1>Un coffret.<br><em>Six vérifications.</em><br>Une méthode.</h1>
        <p>Découvre pas à pas la mise en service d’un coffret industriel Habilis : des premiers contrôles hors tension aux essais fonctionnels.</p>
        <div class="button-row">
          <a class="button" href="#inspection">Démarrer le parcours <span aria-hidden="true">↗</span></a>
          <a class="text-link" href="#bilan">Voir la méthode complète <span aria-hidden="true">→</span></a>
        </div>
        <p class="hero-meta"><span class="status-dot"></span> Parcours pédagogique · à suivre à ton rythme</p>
      </div>
      <div class="hero-art" role="img" aria-label="Illustration d’un coffret industriel vérifié étape par étape">
        <div class="art-label art-label-top"><span>01—06</span> VÉRIFICATIONS</div>
        <svg viewBox="0 0 420 390" aria-hidden="true">
          <path d="M92 55h220a14 14 0 0 1 14 14v268H78V69a14 14 0 0 1 14-14Z" fill="#fffefa" stroke="#3f2a1b" stroke-width="4"/>
          <path d="M98 81h188v222H98z" fill="#f3f1e7" stroke="#d4d0c3" stroke-width="2"/>
          <path d="M92 70h220v15H92z" fill="#9cbf43"/>
          <rect x="119" y="106" width="146" height="43" rx="4" fill="#fff" stroke="#d4d0c3" stroke-width="2"/>
          <path d="M138 116v22m38-22v22m38-22v22" stroke="#3f2a1b" stroke-width="6" stroke-linecap="round"/>
          <circle cx="238" cy="127" r="8" fill="#e0c241"/>
          <rect x="117" y="168" width="150" height="91" rx="5" fill="#fff" stroke="#d4d0c3" stroke-width="2"/>
          <path d="M136 186h25v48h-25zm39 0h25v48h-25zm39 0h25v48h-25z" fill="#ede9dc" stroke="#3f2a1b" stroke-width="2"/>
          <circle cx="148.5" cy="202" r="5" fill="#9cbf43"/><circle cx="187.5" cy="202" r="5" fill="#386fb3"/><circle cx="226.5" cy="202" r="5" fill="#e0c241"/>
          <path d="M123 276h138m-114 0v27m92-27v27" stroke="#3f2a1b" stroke-width="4" stroke-linecap="round"/>
          <path d="M35 236h44m277-56h31M52 119h26m264 190h38" stroke="#386fb3" stroke-width="5" stroke-linecap="round"/>
          <circle cx="35" cy="236" r="7" fill="#386fb3"/><circle cx="387" cy="180" r="7" fill="#386fb3"/>
          <circle cx="316" cy="93" r="25" fill="#f7f6f0" stroke="#e0c241" stroke-width="5"/>
          <path d="M316 79v15l10 8" fill="none" stroke="#3f2a1b" stroke-width="3" stroke-linecap="round"/>
          <path d="M66 324h288" stroke="#d7d2c4" stroke-width="2" stroke-dasharray="5 7"/>
        </svg>
        <div class="art-label art-label-bottom"><span class="art-number">✓</span><span><b>Vérifier avant d’alimenter</b><small>Habilis · coffret pédagogique</small></span></div>
      </div>
    </section>
    <section class="journey-intro">
      <p class="eyebrow">Le parcours</p>
      <div class="journey-title"><h2>Du premier regard<br>au bilan final.</h2><p>Chaque chapitre associe le cadre de référence, une illustration, un exemple de relevé et un quiz avec remédiation ciblée.</p></div>
    </section>
    <section class="steps-grid" aria-label="Étapes de vérification">
      ${chapters.map((chapter) => `<a class="step-card" href="#${chapter.id}">
        <span class="step-top"><span>${chapter.number}</span><span class="step-icon" aria-hidden="true">${chapter.icon}</span></span>
        <strong>${chapter.title}</strong><span class="step-description">${chapter.short}</span><span class="card-arrow" aria-hidden="true">↗</span>
      </a>`).join("")}
    </section>
    <section class="support-grid">
      <a class="support-card support-green" href="#symboles"><span class="card-kicker">Fiche mémo</span><h2>Les symboles électrotechniques</h2><p>Protection, séparation, commande : reconnaître les appareils et leurs rôles.</p><span class="support-arrow">Explorer les symboles <b>↗</b></span></a>
      <a class="support-card support-dark" href="#bilan"><span class="card-kicker">Transférer la méthode</span><h2>Un autre coffret ?</h2><p>Une trame pour adapter cette démarche à une installation différente.</p><span class="support-arrow">Ouvrir le bilan méthodologique <b>↗</b></span></a>
    </section>
    <section class="safety-band"><span class="safety-icon" aria-hidden="true">!</span><p><strong>La sécurité d’abord.</strong> Ce site est un support pédagogique, pas une procédure d’intervention ni une attestation de conformité. Toute opération réelle doit être préparée et réalisée par des personnes habilitées, selon les documents du site et les consignes applicables.</p></section>`;
}

function diagramSvg(chapter) {
  const [first, middle, last] = chapter.diagram;
  return `<svg viewBox="0 0 510 170" role="img" aria-label="Schéma de principe : ${first}, ${middle}, ${last}">
    <defs><marker id="arrow-${chapter.id}" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0 0v6l6-3z" fill="#386fb3"/></marker></defs>
    <path d="M147 83h47m128 0h47" stroke="#386fb3" stroke-width="3" marker-end="url(#arrow-${chapter.id})"/>
    <rect x="8" y="42" width="139" height="79" rx="9" fill="#fffefa" stroke="#ddd9cd" stroke-width="2"/>
    <rect x="194" y="42" width="134" height="79" rx="9" fill="#edf2df" stroke="#9cbf43" stroke-width="2"/>
    <rect x="369" y="42" width="133" height="79" rx="9" fill="#fffefa" stroke="#ddd9cd" stroke-width="2"/>
    <text x="77" y="87" text-anchor="middle" fill="#3f2a1b" font-size="13" font-weight="700">${first}</text>
    <text x="261" y="87" text-anchor="middle" fill="#3f2a1b" font-size="13" font-weight="700">${middle}</text>
    <text x="435" y="87" text-anchor="middle" fill="#3f2a1b" font-size="13" font-weight="700">${last}</text>
    <text x="255" y="151" text-anchor="middle" fill="#74675b" font-size="10">Principe illustré · respecter la procédure et la notice</text>
  </svg>`;
}

function renderChapter(chapter) {
  const chapterNav = chapters.map(({ id, number, title }) => `<a href="#${id}" ${id === chapter.id ? 'aria-current="page"' : ""}><span>${number}</span>${title}</a>`).join("");
  main.innerHTML = `
    <section class="page-hero">
      <p class="breadcrumbs"><a href="#accueil">Accueil</a><span>/</span>Parcours<span>/</span>${chapter.title}</p>
      <p class="eyebrow">Vérification ${chapter.number} / 06</p><h1>${chapter.title}</h1>
      <p>${chapter.intro}</p>
    </section>
    <nav class="chapter-tabs" aria-label="Chapitres de vérification">${chapterNav}<a href="#bilan"><span>07</span>Bilan méthodologique</a></nav>
    <article class="chapter-body">
      <div class="chapter-principle"><span class="principle-icon" aria-hidden="true">${chapter.icon}</span><div><span class="card-kicker">L’essentiel</span><h2>${chapter.principle}</h2></div></div>
      ${chapter.markers ? `<div class="marker-grid">${chapter.markers.map(([value, label]) => `<div class="marker"><strong>${value}</strong><span>${label}</span></div>`).join("")}</div>` : ""}
      <div class="content-grid">
        <section class="content-card standard-card"><span class="card-kicker">Référentiel</span><h3>Ce que prévoit la vérification</h3><ul>${chapter.standard.map((item) => `<li>${item}</li>`).join("")}</ul><p class="source-note">Le parcours s’appuie sur NF C 15-100-1 et EN 60204-1 selon leur champ d’application. Vérifier l’édition applicable et la procédure du site.</p></section>
        <section class="content-card diagram-card"><span class="card-kicker">Principe illustré</span><h3>${chapter.principle}</h3><div class="diagram">${diagramSvg(chapter)}</div><p class="diagram-caption">Schéma fonctionnel simplifié, pas un schéma de câblage.</p></section>
        <section class="content-card meter-card"><span class="card-kicker">Appareil & méthode</span><h3>Fluke 1653 ou Chauvin Arnoux CA 6116</h3><p>${chapter.meter}</p></section>
        <section class="content-card example-card"><span class="card-kicker">Mise en situation</span><h3>Exemple sur le coffret Habilis</h3><p>${chapter.example}</p>${chapter.id === "inspection" ? `<video class="inspection-video" controls muted playsinline preload="metadata" aria-label="Vidéo de l’inspection visuelle"><source src="images/insp_visu.mp4" type="video/mp4">Votre navigateur ne prend pas en charge la lecture vidéo.</video>` : ""}</section>
        <section class="content-card report-card"><div><span class="card-kicker">Tracer les résultats</span><h3>Exemple de procès-verbal</h3><p>Extrait fictif à compléter selon le dossier de vérification. Il ne vaut ni attestation de conformité ni procès-verbal officiel.</p></div><div class="report-sheet" aria-label="Exemple fictif d’extrait de rapport"><h4>FICHE DE VÉRIFICATION · EXTRAIT PÉDAGOGIQUE</h4><p><b>Coffret :</b> Habilis · <b>Date :</b> à compléter</p>${chapter.report.map((item) => `<p><b>${item} :</b> __________________________________</p>`).join("")}<p><b>Vérificateur / visa :</b> ______________________________</p></div></section>
        <section class="quiz-card" data-quiz aria-labelledby="quiz-title"><div class="quiz-header"><div><span class="card-kicker">À toi de jouer</span><h3 id="quiz-title">As-tu retenu l’essentiel ?</h3><p>Réponds aux questions, puis consulte les fiches de remédiation si nécessaire.</p></div><span class="quiz-count"></span></div><div class="quiz-content" aria-live="polite"></div></section>
      </div>
      <section class="safety-band"><span class="safety-icon" aria-hidden="true">!</span><p><strong>Rappel de sécurité.</strong> Ces explications ne remplacent ni les normes applicables, ni les notices des appareils, ni les consignes locales. N’effectue aucune mesure ou manœuvre réelle sans habilitation et encadrement adapté.</p></section>
      <a class="next-chapter" href="#${chapters[(chapters.indexOf(chapter) + 1) % chapters.length].id}">Continuer le parcours <span aria-hidden="true">→</span></a>
    </article>`;
  setupQuiz(chapter);
}

function setupQuiz(chapter) {
  const content = main.querySelector(".quiz-content");
  const count = main.querySelector(".quiz-count");
  const state = { index: 0, answers: Array(chapter.quiz.length).fill(null), done: false };

  function draw() {
    const answered = state.answers.filter((answer) => answer !== null).length;
    count.textContent = `${String(Math.min(state.index + 1, chapter.quiz.length)).padStart(2, "0")} / ${String(chapter.quiz.length).padStart(2, "0")}`;
    if (state.done) {
      const score = Math.round(state.answers.reduce((sum, answer, index) => sum + (answer === chapter.quiz[index].answer ? 1 : 0), 0) / chapter.quiz.length * 100);
      const misses = chapter.quiz.filter((question, index) => state.answers[index] !== question.answer);
      content.innerHTML = `<div class="progress-track" role="progressbar" aria-label="Progression du questionnaire" aria-valuemin="0" aria-valuemax="${chapter.quiz.length}" aria-valuenow="${chapter.quiz.length}"><span style="width:100%"></span></div><div class="quiz-result"><div class="score-ring"><strong>${score}<small>%</small></strong></div><div><h4>${score === 100 ? "Bravo, tout juste !" : "Voici les points à revoir."}</h4><p>${score === 100 ? "Les notions essentielles sont acquises." : "Revois ces repères avant de poursuivre."}</p></div></div>${misses.length ? `<div class="remediation-list">${misses.map((question) => `<article class="remediation-item"><strong>${question.question}</strong><span>${question.remedy}</span></article>`).join("")}</div>` : ""}<button type="button" class="button button-light" data-restart>Recommencer le quiz</button>`;
      content.querySelector("[data-restart]").addEventListener("click", () => { state.index = 0; state.answers.fill(null); state.done = false; draw(); });
      return;
    }

    const current = chapter.quiz[state.index];
    const selected = state.answers[state.index];
    content.innerHTML = `<div class="progress-track" role="progressbar" aria-label="Progression du questionnaire" aria-valuemin="0" aria-valuemax="${chapter.quiz.length}" aria-valuenow="${answered}"><span style="width:${answered / chapter.quiz.length * 100}%"></span></div><p class="quiz-question">${current.question}</p><div class="quiz-options" role="group" aria-label="Réponses possibles">${current.options.map((option, index) => `<button type="button" class="quiz-option" data-answer="${index}" aria-pressed="${selected === index}"><span class="option-letter">${String.fromCharCode(65 + index)}</span>${option}</button>`).join("")}</div><div class="quiz-actions"><p class="quiz-status">${answered} réponse${answered > 1 ? "s" : ""} enregistrée${answered > 1 ? "s" : ""} sur ${chapter.quiz.length}</p><button type="button" class="button button-yellow" data-next ${selected === null ? "disabled" : ""}>${state.index === chapter.quiz.length - 1 ? "Voir mon score" : "Question suivante"} <span aria-hidden="true">→</span></button></div>`;
    content.querySelectorAll("[data-answer]").forEach((button) => button.addEventListener("click", () => { state.answers[state.index] = Number(button.dataset.answer); draw(); }));
    content.querySelector("[data-next]").addEventListener("click", () => {
      if (state.answers[state.index] === null) return;
      if (state.index === chapter.quiz.length - 1) state.done = true;
      else state.index += 1;
      draw();
    });
  }
  draw();
}

function renderBilan() {
  const methodSteps = [
    ["01", "Définir le périmètre", "Identifier l’installation, son usage, son environnement, le régime de neutre et les personnes responsables."],
    ["02", "Rassembler les documents", "Schémas, notices constructeurs, consignes du site, normes applicables et critères de vérification."],
    ["03", "Préparer les contrôles", "Établir l’ordre des vérifications, les conditions de sécurité, les appareils et les critères avant toute mesure."],
    ["04", "Inspecter et mesurer", "Réaliser les contrôles dans les conditions prévues; relever les points, valeurs, unités et références."],
    ["05", "Analyser les écarts", "Tracer chaque anomalie, évaluer son caractère bloquant et faire valider les actions correctives."],
    ["06", "Conclure et archiver", "Rédiger un rapport compréhensible, daté et relié aux documents et résultats de l’installation."]
  ];
  main.innerHTML = `<section class="page-hero"><p class="breadcrumbs"><a href="#accueil">Accueil</a><span>/</span>Bilan méthodologique</p><p class="eyebrow">Transférer la méthode</p><h1>Un autre coffret,<br><em>la même rigueur.</em></h1><p>La méthode Habilis sert de fil conducteur. Les valeurs et gestes ne se recopient pas : ils se redéfinissent à partir de l’installation étudiée, de ses documents et des critères applicables.</p></section><section class="method-body"><div class="method-list">${methodSteps.map(([n, title, text]) => `<article class="method-step"><span>${n}</span><div><h2>${title}</h2><p>${text}</p></div></article>`).join("")}</div><aside class="notice"><strong>À retenir.</strong> Aucun seuil chiffré du cas Habilis ne doit être transposé automatiquement à un autre coffret. Faire confirmer le régime de neutre, les caractéristiques des protections et l’édition des normes par l’encadrant compétent.</aside><a class="button" href="#ressources">Consulter les ressources <span aria-hidden="true">↗</span></a></section>`;
}

function renderSymbols() {
  main.innerHTML = `<section class="page-hero"><p class="breadcrumbs"><a href="#accueil">Accueil</a><span>/</span>Fiche mémo<span>/</span>Symboles</p><p class="eyebrow">Lire un schéma</p><h1>Quatre appareils,<br><em>trois fonctions.</em></h1><p>Des repères pour distinguer protéger, séparer et commander dans les schémas électrotechniques.</p></section><section class="symbols-grid">${symbols.map((item, index) => `<article class="symbol-card"><div class="symbol-card-top"><span class="step-number">0${index + 1}</span><span class="function-tag">${item.function}</span></div><div class="symbol-illustration"><img class="symbol-image" src="${item.image}" alt="Symbole schématique : ${item.name}"></div><h2>${item.name}</h2><p>${item.summary}</p><ul>${item.details.map((detail) => `<li>${detail}</li>`).join("")}</ul></article>`).join("")}</section><p class="source-note symbol-note">Symboles graphiques simplifiés à des fins pédagogiques. Se référer aux symboles normalisés et aux caractéristiques de l’appareil réellement installé.</p>`;
}

function renderResources() {
  main.innerHTML = `<section class="page-hero"><p class="breadcrumbs"><a href="#accueil">Accueil</a><span>/</span>Ressources</p><p class="eyebrow">Références du parcours</p><h1>Les documents<br><em>à portée de main.</em></h1><p>Les documents fournis avec le projet permettent d’approfondir les contrôles et de vérifier les caractéristiques des appareils.</p></section><section class="resources-body"><div class="resource-list">${resources.map((resource, index) => `<a class="resource-link" href="${resource.href}" target="_blank" rel="noopener noreferrer"><span class="resource-index">${String(index + 1).padStart(2, "0")}</span><span class="resource-copy"><strong>${resource.title}</strong><small>${resource.type} · ${resource.detail}</small></span><span class="resource-arrow" aria-hidden="true">↗</span></a>`).join("")}</div><div class="notice"><strong>À propos des références normatives.</strong> Les documents de cours et repères chiffrés sont fournis à des fins pédagogiques. Ils ne remplacent pas l’édition en vigueur de la norme, les prescriptions du fabricant, ni l’analyse d’une personne compétente. Vérifier l’édition et le critère applicables à l’installation étudiée.</div></section>`;
}

function renderAbout() {
  main.innerHTML = `<section class="page-hero"><p class="breadcrumbs"><a href="#accueil">Accueil</a><span>/</span>À propos</p><p class="eyebrow">Le projet</p><h1>Apprendre à vérifier<br><em>avec méthode.</em></h1><p>Un support pédagogique pour accompagner les étudiants dans la découverte de la mise en service d’un coffret électrique industriel.</p></section><section class="about-body"><div class="equipment-grid"><figure class="equipment-card"><img src="images/habilis.png" alt="Coffret Habilis"><figcaption><strong>3</strong> coffrets à disposition des étudiants</figcaption></figure><figure class="equipment-card"><img src="images/fluke1653.png" alt="Contrôleur d’installation Fluke 1653"><figcaption><strong>6</strong> contrôleurs d’installation disponibles</figcaption></figure></div><div class="about-card"><span class="about-year">2026</span><div><span class="card-kicker">Conception pédagogique</span><h2>Bertrand Charier</h2><p>Professeur agrégé de Génie Électrique<br>IUT GEII Poitiers</p></div></div><p class="source-note">Ce parcours s’appuie sur les documents de contexte du projet SAE 13 et les références indiquées dans la rubrique Ressources.</p><a class="button" href="#ressources">Voir les ressources <span aria-hidden="true">↗</span></a></section>`;
}

function render() {
  const current = route();
  headerLinks(current);
  if (current === "accueil") renderHome();
  else if (current === "bilan") renderBilan();
  else if (current === "symboles") renderSymbols();
  else if (current === "ressources") renderResources();
  else if (current === "apropos") renderAbout();
  else renderChapter(chapters.find(({ id }) => id === current));
  if (window.location.hash && window.location.hash !== "#accueil") requestAnimationFrame(() => main.scrollIntoView({ block: "start" }));
  else window.scrollTo(0, 0);
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("is-open", !isOpen);
});
nav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    menuToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }
});
window.addEventListener("hashchange", render);

if (!window.location.hash) history.replaceState(null, "", "#accueil");
render();

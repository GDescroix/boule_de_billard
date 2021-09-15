let boule = document.querySelector(".cercle_1");
let txt = document.querySelector(".nb");
let phrases = ["Essaye plus tard", "Essaye encore", "Pas d'avis", "C'est pas faux", "C'est ton destin",
    "Le sort en est jeté", "On avait dit pas les BR", "Une chance sur deux", "Repose ta question",
    "WordPress > All", "Bootstrap is love", "Bootstrap is life", "A demain matin 8h30",
    "Le point virgule bordel", "Tu t'embêtes à faire compliqué"
];
let nb = 0;

boule.addEventListener("click", function () {
    let color1, color2, color3;
    let border = 0;

    // 3 couleurs défini pour le gradient + 1 pour la bordure
    color1 = '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    color2 = "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    color3 = "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    border = '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

    // Choix aléatoire de la phrase à afficher
    nb = Math.floor(Math.random() * phrases.length);

    // Couleur aléatoire pour le texte
    txt.style.color = "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

    // Je défini le radiant avec mes 3 couleurs et je donne une bordure avec une couleur aléatoire
    boule.style.background = "radial-gradient(farthest-corner at top right, " + color1 + "," + color2 + "," + color3 + ")";
    boule.style.border = "4px solid" + border;

    // Je donne le contenu de la case [nb] à ma span
    txt.textContent = phrases[nb];

    // Je modifie légèrement la taille en fonction de ma longueur de phrase
    txt.style.fontSize = 2 / Math.ceil(phrases[nb].length / 16) + "rem";
})
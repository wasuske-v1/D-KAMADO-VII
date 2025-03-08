const { cmd } = require('../command');

cmd({
    pattern: /^(profile|basics)/i, // Réagit aux commandes dans les catégories 'profile' et 'basics'
    desc: "Commandes de profil et de base",
    category: "basics", // Catégorie personnalisée pour cette commande
    filename: __filename,
}, async (conn, mek, m, { from, reply, category, isReact }) => {

    // Vérifier si la catégorie de la commande est 'profile'
    if (category === 'profile') {
        // Réaction spécifique pour la catégorie 'profile'
        if (isReact) {
            m.react("😈");
        }
    } else {
        // Réaction spécifique pour toutes les autres catégories
        if (isReact) {
            m.react("🦅");
        }
    }

    // Ajoutez ici votre logique pour les autres catégories ou commandes
});

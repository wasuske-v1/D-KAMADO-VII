const { cmd } = require('../command');

cmd({
    pattern: "channel",
    desc: "Envoyer un lien d'invitation de groupe avec aperçu et un message personnalisé",
    category: "basics",
    filename: __filename,
}, async (conn, mek, m, { from, reply }) => {

    const groupLink = "https://whatsapp.com/channel/0029Vajj9lcGU3BEq2onzc2e"; // Lien d'invitation WhatsApp
    const messageText = `
🔶 *LAUREAT'S CHANNEL📺*
_________

👤 *Welcoming :* Bien le bonjour, bonsoir, bonne nuit. Nous vous souhaitons la bienvenue dans la chaîne de LAUREAT, 🔶LAUREAT-TV📰. Installez-vous et suivez nos belles actualités sur le royaume de 🔶LAUREAT🎮 ainsi que les guerriers de la 🔶W.I.N🎮 (WARRIOR INFINITA NATION).
Bien évidemment, nous sommes ouverts au monde extérieur également. Que ce soit RP ou pas, tout va figurer ici.
Je ne vous en dirai pas plus, alors accrochez-vous pour en découvrir plus ❗

Suivre la chaîne 🔶️LAUREAT TV📰 sur WhatsApp: ${groupLink}

_________
@starkproduction🔸
_________
🔶 *LAUREAT-TV📰*
`;

    try {
        // Envoi du message avec le texte personnalisé incluant le lien avec aperçu
        await conn.sendMessage(from, { text: messageText }, { quoted: mek });
    } catch (err) {
        console.error("Erreur lors de l'envoi du lien d'invitation de groupe et du message personnalisé :", err);
        reply("🙇‍♂️ Erreur lors de l'envoi du message. Réessaie plus tard.");
    }
});

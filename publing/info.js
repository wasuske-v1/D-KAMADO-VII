const { cmd } = require('../command');
const config = require('../config'); // Assure-toi que le chemin est correct

cmd({
    pattern: "info",
    desc: "Affiche des informations spécifiques sur LAUREAT",
    category: "basics",
    filename: __filename,
},
async (conn, mek, m, { from, reply, isOwner }) => {

    const infoText = `
SORRY BRO...😓(ECHEC)
`;

    const imageUrl = 'https://files.catbox.moe/e0pq16.jpg'; // Remplace par ton image ou config.ALIVE_IMG

    try {
        // Envoi de l'image avec la légende
        return await conn.sendMessage(from, {
            image: { url: imageUrl },  // Utilisation de l'URL de l'image 
            caption: infoText 
        }, { quoted: mek });
    } catch (err) {
        console.error("Erreur lors de l'envoi du message d'information:", err);
        reply("🙇‍♂️ Erreur lors de l'envoi des informations. Réessaie plus tard.");
    }
});

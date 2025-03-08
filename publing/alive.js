const config = require('../config')
const {cmd , commandes} = require('../command')

cmd({
    modèle : "vivant",
    desc : "Vérifiez le bot en ligne ou non.",
    catégorie : "principal",
    nom de fichier : __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, réponse}) => {
essayer{
retour attendre conn.sendMessage(de,{image: {url: config.ALIVE_IMG},légende: config.ALIVE_MSG},{quoted: mek})
}attraper(e){
console.log(e)
répondre(`${e}`)
}
})



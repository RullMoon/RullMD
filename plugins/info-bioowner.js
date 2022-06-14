let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Moon
*✉️ Nama RL* : Rull
*♂️ Gender* : Laki - laki
*🕋 Agama* : ;
*⏰ Tanggal lahir* : ?
*🎨 Umur* : ?
*🧮 Kelas* : ??
*🧩 Hobby* : ?
*💬 Sifat* : ?
*🗺️ Tinggal* : ?
*❤️ Suka* : Dandelion
*💔 Benci* : ?

*───────[ SOSIAL MEDIA ]───────*
𝑮 𝑨 𝑲   𝑨 𝑫 𝑨

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["𝙼𝙴𝙽𝚄", '.menu'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler

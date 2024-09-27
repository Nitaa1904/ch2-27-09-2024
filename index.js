const fs = require("fs").promises;
const fsSync = require("fs")

// 1. membaca file surat cinta fsw 2
let loveLetter = fsSync.readFileSync("./index.txt", "utf-8")

// 2. proses print isi dari surat cinta
console.log(`ini baris 7: ${loveLetter}`) 

// 3. membuat file baru untuk balas surat cinta
const loveFeedback = "Aku juga sayang FSW 2!"
fsSync.writeFileSync("./balasan.txt", loveFeedback)

// fs.mkdir("COBA_BIKIN_FOLDER_2", () => {})

// menimpa isi konten dari index.txt
fsSync.writeFileSync("./index.txt", "KETIMPA GAK CINTA KITA PART FINAL SEBELUM BREAK PART 2?")

async function bacaSuratCinta() {
    try {
        const bacaSuratCinta = await fs.readFile('./index.txt', "utf-8") 
        console.log(`ini surat cinta ${bacaSuratCinta}`)
    } catch (error) {
        console.log(error)
    }
}

bacaSuratCinta()

// promises
fs.readFile("./index.txt", "utf-8")
    .then((isiSuratCinta) => {
        loveLetter = isiSuratCinta
        console.log(loveLetter)
    })
    .catch((error) => {
        console.error("Error occured: ", error)
    })

console.log(`ini baris 21 ${loveLetter}`)
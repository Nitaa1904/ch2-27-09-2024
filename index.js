const fs = require("fs").promises;
const fsSync = require("fs")
// SYNC
// 1. membaca file surat cinta fsw 2 dari index.txt
let loveLetter = fsSync.readFileSync("./index.txt", "utf-8")
// 2. proses print dari surat 
console.log(`ini baris 7: ${loveLetter}`) 

// 3. membuat file baru untuk balas surat cinta
// defind variabel untuk balasan
const loveFeedback = "Aku juga sayang FSW 2!!!"
fsSync.writeFileSync("./balasan.txt", loveFeedback)
// console.log(writeResult)
// membuat folder
// fs.mkdir("COBA_BUAT_FOLDER", () => {})


// ASYNC
// asynchronous file/write
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

console.log(`ini baris 43 ${loveLetter}`)
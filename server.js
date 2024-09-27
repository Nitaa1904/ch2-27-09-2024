const http = require("http")
const url = require("url")
const fs = require("fs")
const fsAsync = require("fs").promises

const contentFileUtama = fs.readFileSync("./index.txt", "utf-8")

// express = framework third party utk memudahkan HTTP
const server = http.createServer((req, res) => {
    console.log(req.url)
    const pathUrl = req.url

    // default selalu ada :
    // localhost:3000/ = health check, cek aplikasi jalannya, nyala gak
    // 404 = handle jika url tidak ada, salah atau ngarang /uoaewhguhweughauighauighiu = tidak ada, http status code = 404

    if(pathUrl === "/yogi") {
        res.end("INI TUGAS YANG YOGI")
    } else if (pathUrl === "/") {
        res.end("hellow ke tim 7")        
    
    } else if (pathUrl === "/imam") {
        console.log("original data dari index.txt = " + contentFileUtama)
        async function rewriteFromImam(filepath, content) {
            try {
                await fsAsync.writeFile(filepath, content) 
                console.log("sukses nulis ulang file")
                const resultRewrite = await fsAsync.readFile(filepath, "utf-8")
                console.log(resultRewrite)
                res.end(resultRewrite)
            } catch (error) {
                console.log(error)
            }
        }

        rewriteFromImam("./index.txt", "HAI TUGAS IMAM !!!")
    } else {
        res.end("INI GAK ADA ! Status code : 404")
    }
})

server.listen(3000, '127.0.0.1', () => {
    console.log('Aplikasi jalan ini di port 3000')
})
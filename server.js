const http = require("http");
const url = require("url");
// 1. modul untuk baca file
const fs = require("fs");
const fsAsync = require("fs").promises;

// 2. simpan file utama diluar server
const contentFileUtama = fs.readFileSync("./index.txt", "utf-8");

const hostname = "127.0.0.1";
const port = 3000;
// express = framework third party utk memudahkan HTTP
const server = http.createServer((req, res) => {
  // request ke server akan terlihat di terminal (url)
  console.log(req.url);
  const pathUrl = req.url;

  // default selalu ada :
  // localhost:3000/ = health check, cek aplikasi jalannya, nyala gak
  // 404 = handle jika url tidak ada, salah atau ngarang /uoaewhguhweughauighauighiu = tidak ada, http status code = 404

  // request url
  if (pathUrl === "/nita") {
    // url /nita maka akan muncul dibawah ini
    res.end("INI TUGAS YANG Nita");
  } else if (pathUrl === "/") {
    // default value
    res.end("hellow ke tim 7");
    // request url aku ikutin langkah 1  dst
  } else if (pathUrl === "/node") {
    // 6. console original data
    console.log("original data dari index.txt = " + contentFileUtama);
    // 3. function baca file
    async function rewriteFromNita(filepath, content) {
      try {
        // 4. panggil file secara async
        await fsAsync.writeFile(filepath, content);
        console.log("sukses nulis ulang file");
        const resultRewrite = await fsAsync.readFile(filepath, "utf-8");
        // 7. console akhirnya/hasil rewrite
        console.log(resultRewrite);
        res.end(resultRewrite);
      } catch (error) {
        console.log(error);
      }
    }

    // 5. panggil function
    rewriteFromNita("./index.txt", "HAI TUGAS Nita !!!"); // di index otomatis akan berisi "HAI TUGAS Nita !!!
  } else {
    res.end("INI GAK ADA ! Status code : 404");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// OUTPUT
// URL default/
// /favicon.ico

// URL /nita
// /favicon.ico

// URL /node
// original data dari index.txt = HAI TUGAS NITA !!!
// sukses nulis ulang file
// HAI TUGAS Nita !!!
// /favicon.ico

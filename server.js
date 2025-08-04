const express = require('express')
const cors = require('cors')
const server = express();
server.use(cors())

server.get('./', (req, res) => {
    res.send("ola mundo");
})


const port = 3000;
server.listen(port, () => {
console.log(`Servidor rodando na porta ${port}
http://localhost:${port}`)
})

// Import puppeteer
const puppeteer = require('puppeteer');
//const URL = "https://makevendas.com.br/";


// export let h1;
// export let title;
// export let description;


server.get("/pup", async (req,res)=>{

  const URL = req.query.url;

// Launch the browser
const browser = await puppeteer.launch({ headless: "new" });

// Create a page
const page = await browser.newPage();

// Go to your site
await page.goto(URL);


// print site
// await page.screenshot({path: './cris.jpg', fullPages: true})

// pega as tags de SEO
let h1 = "";
let title = "";
let description = "";

try {
  h1 = await page.evaluate(() => document.querySelector('h1') ? document.querySelector('h1').textContent : "Tag h1 não encontrada");
} catch (error) {
  h1 = "Tag h1 não encontrada";
}

try {
  title = await page.evaluate(() => document.querySelector('title') ? document.querySelector('title').textContent : "Tag title não encontrada");
} catch (error) {
  title = "Tag title não encontrada";
}

try {
  description = await page.evaluate(() => document.querySelector('meta[name="description"]') ? document.querySelector('meta[name="description"]').content : "Meta description não encontrada");
} catch (error) {
  description = "Meta description não encontrada";
}

let obj = {h1, title, description}

await browser.close();

res.json( obj )  // JSON.stringfy({nome:"jao"})
console.log(h1, title, description)

})



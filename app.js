//192.168.0.104 - ip mog servera
const port = 8080;
const express = require('express');
const { getRandomName } = require("./helper.js");
const fs = require('fs');
const cors = require('cors');
const { check, validationResult } = require('express-validator/check');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Random Name API');
})

app.get('/sva-imena', (req, res) => {
  const sadrzaj = fs.readFileSync('imena.txt', 'utf8');
  res.send(sadrzaj);
})

app.get('/random', (req, res) => {
  const sadrzaj = fs.readFileSync('imena.txt', 'utf8');
  const imena = sadrzaj.split(', ');
  res.send(getRandomName(imena) + '\n');
})

app.post('/dodaj-ime', (req, res) => {
  const sadrzaj = fs.readFileSync('imena.txt', 'utf8');
  let ime = req.body.ime;
  console.log(ime)
  // greska: "undefined" prolazi kao string
  if (check(ime).isString()) {
    // .includes treba primeniti na nizu, a ne na tekstu
      // npr: "Milorad".includes("Milo") vraca true
      // dok je ["Milorad"].includes("Milo") false
    if (sadrzaj.includes(ime)) {
      res.send("Ime vec postoji")
    } else {
      let addName = sadrzaj + ", " + ime;
      fs.writeFile('imena.txt', addName, (err, data) => {
        res.send(`Hvala na dodatom imenu! Trenutno imena su ${addName}`);
      })
    }
  }
})

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
})

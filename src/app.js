import express from 'express';
import { addTweet, addUser, getTweetsUsingPage, verifyIfStringIsValid, verifyUserExistence } from './utils.js';

const app = express();
app.use(express.json());
app.listen(5000);
console.log("Servidor iniciado na porta 5000!");

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;
    if(!verifyIfStringIsValid(username) || !verifyIfStringIsValid(avatar)) return res.status(400).send("Todos os campos são obrigatórios!");

    addUser(username, avatar);
    res.status(201).send("OK");
});

app.post("/tweets", (req, res) => {
    const {tweet} = req.body;
    const username = req.headers.user;
    if(!verifyIfStringIsValid(username) || !verifyIfStringIsValid(tweet)) return res.status(400).send("Todos os campos são obrigatórios!");

    const isUser = verifyUserExistence(username);
    if (!isUser) return res.sendStatus(401);

    addTweet(username, tweet);
    res.status(201).send("OK");
});

app.get("/tweets", (req, res) => {
    const page = req.query.page;
    if(page < 1) res.status(400).send("Informe uma página válida!");
    
    const retTweets = getTweetsUsingPage(page);

    res.send(retTweets);
});
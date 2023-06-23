import express from 'express';
import { addTweet, addUser, getTweetsUsingPage, verifyUserExistence } from './utils.js';

const app = express();
app.use(express.json());
app.listen(5000);
console.log("Servidor iniciado na porta 5000!");

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;
    if(!username || !avatar) return res.sendStatus(400);

    addUser(username, avatar);
    res.status(200).send("OK");
});

app.post("/tweets", (req, res) => {
    const {username, tweet} = req.body;
    const isUser = verifyUserExistence(username);
    if(!isUser) return res.sendStatus(401);

    addTweet(username, tweet);
    res.status(200).send("OK");
});

app.get("/tweets", (req, res) => {
    const { page } = req.body;
    const retTweets = getTweetsUsingPage(page);

    res.send(retTweets);
});
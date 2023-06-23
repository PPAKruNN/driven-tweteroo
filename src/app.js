import express from 'express';
import { addUser } from './utils.js';

const app = express();
app.use(express.json());
app.listen(5000);
console.log("Servidor iniciado na porta 5000!");

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;
    if(!username || !avatar) {
        res.sendStatus(400);
        return;
    }

    addUser(username, avatar);
    res.status(200).send("OK");
});
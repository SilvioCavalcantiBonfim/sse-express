import express, { Response } from "express";

const app = express();

app.get("/events", (req, res: Response) => {
    res.setHeader("content-type", "text/event-stream");
    res.setHeader("cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders();

    const sendEvent = () => {
        const data = {
            message: "Evento SSE",
            timestamp: Date.now()
        };

        res.write(`id: ${Math.random()}\n`);
        res.write(`event: message\n`);
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    }

    const inter = setInterval(sendEvent,1000);
    setTimeout(() => {
        clearInterval(inter);
        res.write("event: end");
        res.write("data: fim da conexao");
        res.end();
    }, 30000);
});

app.get("/", (req, res: Response) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => console.log("on"));
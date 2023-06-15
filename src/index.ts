import express, { Response } from "express";
import { Subject, interval } from "rxjs";

const app = express();

var hot: Subject<number> = new Subject<number>();

interval(1000).subscribe(hot);

app.get("/events", (req, res: Response) => {
    res.setHeader("content-type", "text/event-stream");
    res.setHeader("cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders();


    hot.subscribe(d => {
        const data = {
            message: d,
            timestamp: Date.now()
        };
        res.write(`id: ${Math.random()}\n`);
        res.write(`event: message\n`);
        res.write(`data: ${JSON.stringify(data)}\n\n`);

    });
});

app.get("/", (req, res: Response) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => console.log("on"));
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

var db = [];
var id = 0;

app.get("/api/note", (req, res) => {
  res.send({
    data: db,
  });
});

app.post("/api/note", (req: Request, res: Response) => {
  const { text } = req.body;

  db.push({
    id: id,
    text: text,
  });
  id++;
  res.send("success");
});

app.delete("/api/note/:id", (req, res) => {
  const { id } = req.params;
  db = db.filter((elem, index) => elem.id !== Number(id));
  res.send("success");
});

app.listen(3001);

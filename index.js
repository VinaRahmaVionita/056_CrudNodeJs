import express from 'express';
import bodyParser from 'body-parser';
/*import mobilRouter from "./router/Mobil.js";*/
import flowerRouter from "./router/Flower.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use("/bunga", flowerRouter);

app.get("/", (req, res) => {
    console.log(['GET ROUTE']);
    res.send("Selamat pagiii");
});

app.listen(PORT, () => console.log(`Server berjalan di Port : http://localhost:${PORT}`));

import express, { Router } from "express";

const router = express.Router();

const mobil = [
    {
        merk: "Toyota",
        model: "Avansa",
        warna: "Hitam",
        tahun: 2021,
    },

    {
        merk: "Porsche",
        model: "Sport",
        warna: "Kuning",
        tahun: 2024,
    }
];

router.get("/", (req, res) => {
    res.send(mobil);
});

export default router;
import express from "express";

const router = express.Router();

const flower = [
    {
        Jenis: "Tanaman hias",
        Nama: "Anggrek Bulan",  // Corrected spelling
        Warna: "Putih",
        Harga: 100000,  // Removed dot, JavaScript doesn't accept commas in numbers
    },
    {
        Jenis: "Tanaman hias",
        Nama: "Mawar",
        Warna: "Merah",
        Harga: 200000,
    },
    {
        Jenis: "Perdu semikayu",
        Nama: "Lavender",
        Warna: "Ungu",
        Harga: 300000,
    },
];

router.get("/", (req, res) => {
    res.send(flower);  // Corrected to `flower`
});

export default router;

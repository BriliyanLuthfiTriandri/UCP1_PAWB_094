import express, {Router} from "express";
const router = express.Router();
const pupuk = [
    {
        namapupuk : "Toyota",
        kode : "Avanza",
        jenis : "Hitam",
        kadaluarsa : 2021,
    },
    {
        namapupuk : "Porche",
        kode : "Sport",
        jenis : "Kuning",
        kadaluarsa : 2024,
    },
];
router.get("/", (req, res) => {
    res.send(pupuk);
});
export default router;
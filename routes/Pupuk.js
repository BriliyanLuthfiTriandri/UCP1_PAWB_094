import express, { Router } from "express";
const router = express.Router();

const pupuk = [
    {
        id: 1,
        namapupuk: "pupuk enak",
        jenis: "organik",
        kadaluarsa: 2021,
    },
    {
        id: 2,
        namapupuk: "sehat bergizi",
        jenis: "sintetis",
        kadaluarsa: 2024,
    },
];
router.get("/", (req, res) => {
    res.send(pupuk);
});


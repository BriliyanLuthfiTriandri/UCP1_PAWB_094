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

router.post('/', (req, res) => {
    const newPupuk = {
        id: pupuk.length + 1,
        namapupuk: req.body.namapupuk,
        jenis: req.body.jenis,
        kadaluarsa: req.body.kadaluarsa
    };
    pupuk.push(newPupuk);
    res.status(201).json(newPupuk);
});


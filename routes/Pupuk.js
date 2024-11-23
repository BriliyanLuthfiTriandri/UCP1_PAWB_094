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

// PUT method (update data)

router.put('/:id', (req, res) => {
    const pupukIndex = pupuk.findIndex(t => t.id === parseInt(req.params.id));
    if (!pupukIndex === -1)
        return res.status(404).json({ message: 'Tugas tidak ditemukan' });

    pupuk[pupukIndex] = {
        ...pupuk[pupukIndex],
        namapupuk: req.body.namapupuk || pupuk[pupukIndex].namapupuk,
        jenis: req.body.jenis || pupuk[pupukIndex].jenis,
        kadaluarsa: req.body.kadaluarsa || pupuk[pupukIndex].kadaluarsa,
    };

    res.status(200).json({
        message: `Tugas dengan ID '${req.params.id}' telah diperbarui`,
        updatePupuk: pupuk[pupukIndex],
    });
});

// Delete method (menghapus data)

router.delete('/:id', (req, res) => {
    const pupukIndex = pupuk.findIndex(t => t.id === parseInt(req.params.id));
    if (pupukIndex === -1) return res.status(404).json({ message: 'Tugas tidak ditemukan' });

    const deletePupuk = pupuk.splice(pupukIndex, 1)[0]; // Menghapus dan menyimpan pupuk yang dihapus
    res.status(200).json({ message: `Tugas '${deletePupuk.namapupuk}' telah dihapus` });

});
export default router
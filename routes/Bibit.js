import express, {Router} from "express";
const router = express.Router();
const bibit = [
    {
        namabibit: "Budi Mujaer",
        kode : "2022014495",
        jenis : "Depan Indomaret",
        kadaluarsa : 2012,
    },
    {
        namabibit : "Roni Tambal Ban",
        kode : "2012434132",
        jenis : "Sebelah Rumah Pak Jodi",
        kadaluarsa : 2022,
    },
];
router.get("/", (req, res) => {
    res.send(bibit);
});
export default router;
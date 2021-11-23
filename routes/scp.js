const express = require("express")
const {
    getScp,
    getAllScp,
    createScp,
    updateScp,
    deleteScp,
}  = require("../controllers/scp")
const router = express.Router();

router.route("/").get(getAllScp).post(createScp);
router.route("/:id").get(getScp).delete(deleteScp).put(updateScp);

module.exports = router;

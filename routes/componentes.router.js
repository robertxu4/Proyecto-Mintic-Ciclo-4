const express = require("express");
const router = express.Router();
const componentesController = require("../controllers/componentes.controller");

router.post("/", componentesController.create)
router.get("/", componentesController.find)
router.get("/:id", componentesController.findOne)
router.put("/:id", componentesController.update)
router.delete("/:id", componentesController.remove)


module.exports = router
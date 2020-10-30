const {Router} = require("express")
const {ControllerCalculadora} = require("./../controllers")

const router = Router()

router.post("/soma", ControllerCalculadora.soma())
router.post("/sub", ControllerCalculadora.sub())
router.post("/multi", ControllerCalculadora.multi())
router.post("/div", ControllerCalculadora.div())

module.exports = router

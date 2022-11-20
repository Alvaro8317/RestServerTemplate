import Router from "express";
import {
    userDelete,
    userGet,
    userPatch,
    userPost,
    userPut,
} from "../controllers/userController.js";
const router = Router();
router.get(
    "/",
    userGet
); /* Aquí con userGet no se ejecuta la función, solo es la referencia a la misma */
router.post("/", userPost);
router.put("/:userId", userPut);
router.patch("/", userPatch);
router.delete("/", userDelete);
export default router;

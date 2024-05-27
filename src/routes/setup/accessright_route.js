    /**
     * AUTHOR       : Mark Dinglasa
     * COMMENT/S    : N/A
     * CHANGES      : N/A
     * LOG-DATE     : 2024-05-27 11:48PM
    */

    import express from 'express';
    import { get_all_accessright, get_accessright, create_accessright, update_accessright, remove_accessright, remove_multiple_accessright, trash_accessright, trash_multiple_accessright} from '../../controllers/index.js'
    import { verifyToken } from '../../middleware/index.js'

    const router = express.Router();

    router.get("/", verifyToken, get_all_accessright);
    router.get("/details/:Id", verifyToken, get_accessright);
    router.post("/create", verifyToken, create_accessright);
    router.patch("/update/:Id", verifyToken, update_accessright);
    router.delete("/remove/:Id", verifyToken, remove_accessright);
    router.delete("/remove-multiple/", verifyToken, remove_multiple_accessright);
    router.patch("/trash/:Id", verifyToken, trash_accessright);

    router.patch("/trash-multiple/", verifyToken, trash_multiple_accessright);

    export default router;

import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middleware.js"

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: 'avatar',
            maxCount: 1
            // destination: 'public/uploads/avatars'
        },
        {
            name: 'coverImage',
            maxCount: 1
            // destination: 'public/uploads/coverImages'
        }
    ]),
    registerUser
)

export default router
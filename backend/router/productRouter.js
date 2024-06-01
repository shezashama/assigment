import { Router } from "express";
import multer from 'multer'
const router = Router();
import path from "path";
import { addProduct, getAllproduct } from "../controller/ProductController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Make sure this directory exists or is created
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Modify the route to include multer middleware
router.route("/addproduct").post(upload.single('image'), addProduct);
router.route("/getAll").get(getAllproduct);







export default router;
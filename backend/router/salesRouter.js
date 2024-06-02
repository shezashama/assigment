import { Router } from "express";
import { addPayment, getAllpayemt } from "../controller/salesController.js";


const router = Router()

router.route('/addpayment').post(addPayment);
router.route('/getallpayment').get(getAllpayemt);


export default router;
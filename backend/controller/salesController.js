import asyncErrorHandler from "../utils/asyncErrorHandler.js";
import { CustomError } from "../utils/customerError.js";
import Payment from "../model/salesModel.js";

const addPayment = asyncErrorHandler(async (req, res, next) => {
    try {
      const {
        name,
        address,
        apartment,
        town,
        phoneNo,
        email,
        cardNumber,
        expiryMonth,
        expiryYear,
        cvv,
        total
      } = req.body;
  
      const newPayment = new Payment({
        name,
        address,
        apartment,
        town,
        phoneNo,
        email,
        cardNumber,
        expiryMonth,
        expiryYear,
        cvv,
        total
      });
  
      await newPayment.save();
  
      return res.status(201).json({ message: "Payment added successfully", newPayment });
    } catch (err) {
      const error = new CustomError(err, 404);
      return next(error);
    }
  });


  const getAllpayemt = asyncErrorHandler(async (req, res, next) => {
    const allproduct= await Payment.find();
  
    res.status(200).json(allproduct);
  });
  

  export {addPayment,getAllpayemt};
import asyncErrorHandler from "../utils/asyncErrorHandler.js";
import { CustomError } from "../utils/customerError.js";
import prodcut from "../model/productModel.js";
const addProduct = asyncErrorHandler(async (req, res, next) => {
  try {
    const { productName, price, color, quantity } = req.body;
    let imagePath = "";
    if (req.file) {
      imagePath = req.file.path;
    }

    const newprodcut = new prodcut({
      productName,
      price,
      color,
      quantity,
      image: imagePath, // Assuming your model has an 'image' field
    });

    await newprodcut.save();

    return res.status(201).json({ message: "Add product Successfull", newprodcut });
  } catch (err) {
    const error = new CustomError(err, 404);
    return next(error);
  }
});

// all product
const getAllproduct = asyncErrorHandler(async (req, res, next) => {
  const allproduct= await prodcut.find({isActive:true});

  res.status(200).json(allproduct);
});

// // one vehicle

// const oneVehicle = asyncErrorHandler(async (req, res, next) => {
//   const id = req.params.id;
//   const onevehicle = await vehicle.findById(id);
//   if (!onevehicle) {
//     const error = new CustomError("vehicle not available", 400);
//     return next(error);
//   }

//   return res.status(200).send(onevehicle);
// });

// // update details vehicle
// const vehilcleUpdate = asyncErrorHandler(async (req, res, next) => {
//   const { id } = req.params;
//   const {
//     vehicleName,
//     vehicleNo,
//     initialKM,
//     condition,
//     vehicletype,
//     seatCapacity,
//     image,
//   } = req.body;
//   const updatedVehicle = await vehicle.findByIdAndUpdate(
//     id,
//     {
//       vehicleName,
//       vehicleNo,
//       initialKM,
//       condition,
//       vehicletype,
//       seatCapacity,
//       image,
//     },
//     { new: true }
//   );
//   res.status(200).json({message:"update success"});
// });

// const vehicleDelete=asyncErrorHandler(async(req,res,next)=>{
//   const vehicleStatus = await vehicle.findByIdAndUpdate(
//     req.params.id,
//     {
//       isActive: false,
//     },
//     { new: true }
//   );
//   res.json({ message: "ok", vehicleStatus });
// });

export { addProduct,getAllproduct};

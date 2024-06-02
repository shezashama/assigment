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

    return res
      .status(201)
      .json({ message: "Add product Successfull", newprodcut });
  } catch (err) {
    const error = new CustomError(err, 404);
    return next(error);
  }
});

// all product
const getAllproduct = asyncErrorHandler(async (req, res, next) => {
  const allproduct = await prodcut.find({ isActive: true });

  res.status(200).json(allproduct);
});

// // one vehicle

const oneProduct = asyncErrorHandler(async (req, res, next) => {
  const id = req.params.id;
  const oneProduct = await prodcut.findById(id);
  if (!oneProduct) {
    const error = new CustomError("product not available", 400);
    return next(error);
  }

  return res.status(200).send(oneProduct);
});

// // update details vehicle
const productUpdate = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const { productName, price, color, quantity } = req.body;
  let updateFields = {
    productName,
    price,
    color,
    quantity
  };

  // Check if there is a new file uploaded
  if (req.file) {
    // If yes, update the image path
    updateFields.image = req.file.path;
  }

  try {
    const updatedProduct = await prodcut.findByIdAndUpdate(
      id,
      updateFields,
      { new: true }
    );
    
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Update success" });
  } catch (error) {
    const customError = new CustomError('Failed to update product', 500);
    return next(customError);
  }
});
const deleteProduct = asyncErrorHandler(async (req, res, next) => {
  const productStatus = await prodcut.findByIdAndUpdate(
    req.params.id,
    {
      isActive: false,
    },
    { new: true }
  );
  res.json({ message: "ok", productStatus });
});

export { addProduct, getAllproduct, deleteProduct, oneProduct,productUpdate};

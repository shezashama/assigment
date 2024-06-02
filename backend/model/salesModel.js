import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    apartment: { type: String, required: false },
    town: { type: String, required: true },
    phoneNo: { type: String, required: true },
    email: { type: String, required: true },
    cardNumber: { type: String, required: true },
    expiryMonth: { type: String, required: true },
    expiryYear: { type: String, required: true },
    cvv: { type: String, required: true },
    total: { type: String, required: true },

  },
  { timestamps: true }
);
const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;
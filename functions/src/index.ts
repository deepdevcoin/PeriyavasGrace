// functions/src/index.ts (or index.js)

import * as functions from "firebase-functions";
import Razorpay from "razorpay";
import * as cors from "cors";

const corsHandler = cors({ origin: true });

const razorpay = new Razorpay({
  key_id: functions.config().razorpay.key_id,
  key_secret: functions.config().razorpay.key_secret,
});

export const createRazorpayOrder = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    try {
      const { amount } = req.body; // amount in paise, e.g. 3000 for ₹30

      const options = {
        amount,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
        payment_capture: 1,
      };

      const order = await razorpay.orders.create(options);
      res.status(200).json(order);
    } catch (error) {
      console.error("Razorpay order creation error:", error);
      res.status(500).json({ error: "Unable to create order" });
    }
  });
});

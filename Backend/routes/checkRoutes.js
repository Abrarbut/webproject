const express = require('express');
const CheckOut = require('../models/CheckOut');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const Order = require('../models/Order');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// @route POST /api/checkout
// @desc  Create a new checkout
// @access Private
router.post('/', protect, async (req, res) => {
    const { checkoutItems, shippingAddress, paymentMethod, totalPrice } = req.body;

    if (!checkoutItems || checkoutItems.length === 0) {
        return res.status(400).json({ message: 'No items in checkout' });
    }

    try {
        const newCheckout = new CheckOut({
            user: req.user._id,
            checkoutItems,
            shippingAddress,
            paymentMethod,
            totalPrice,
            paymentStatus: "Pending",
            isPaid: false,
        });

        await newCheckout.save();
        console.log(`Checkout created for user: ${req.user._id}`);
        res.status(201).json(newCheckout);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// @route PUT /api/checkout/:id/pay
// @desc  Update checkout to paid
// @access Private
router.put('/:id/pay', protect, async (req, res) => {
    const { paymentStatus, paymentDetails } = req.body;

    try {
        const checkout = await CheckOut.findById(req.params.id);

        if (!checkout) {
            return res.status(404).json({ message: 'Checkout not found' });
        }

        if (paymentStatus === "paid") {
            checkout.isPaid = true;
            checkout.paymentStatus = paymentStatus;
            checkout.paidAt = Date.now();

            // Store payment details - ensure property name matches the model
            checkout.paymentdetails = paymentDetails;

            console.log("Updating checkout with payment details:", {
                id: checkout._id,
                isPaid: checkout.isPaid,
                paymentStatus: checkout.paymentStatus,
                hasPaymentDetails: !!paymentDetails
            });

            await checkout.save();
            res.status(200).json(checkout);
        } else {
            return res.status(400).json({ message: 'Payment not successful' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// @route POST /api/checkout/:id/finalize
// @desc  Finalize checkout and create order
// @access Private
router.post('/:id/finalize', protect, async (req, res) => {
    try {
        const checkout = await CheckOut.findById(req.params.id);

        if (!checkout) {
            return res.status(404).json({ message: 'Checkout not found' });
        }

        if (checkout.isPaid && !checkout.isFinalized) {
            // 🔁 Transform checkoutItems to match orderItems schema
            const orderItems = checkout.checkoutItems.map(item => ({
                productId: item.productId || item.product,  // adjust if your field is named 'product'
                name: item.name,
                image: item.image,
                price: item.price,
                quantity: item.quantity || 1,               // default to 1 if missing
                size: item.size,
                color: item.color,
            }));

            const finalOrder = await Order.create({
                user: checkout.user,
                orderItems,
                shippingAddress: checkout.shippingAddress,
                paymentMethod: checkout.paymentMethod,
                totalPrice: checkout.totalPrice,
                isPaid: true,
                paidAt: checkout.paidAt,
                paymentStatus: "Paid",
                paymentdetails: checkout.paymentdetails,
            });

            checkout.isFinalized = true;
            checkout.finalizedAt = Date.now(); // typo fixed from "finializedAt"
            await checkout.save();

            await Cart.findOneAndDelete({ user: checkout.user });

            res.status(201).json(finalOrder);
        } else if (checkout.isFinalized) {
            return res.status(400).json({ message: 'Checkout already finalized' });
        } else {
            return res.status(400).json({ message: 'Checkout not paid' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


module.exports = router;

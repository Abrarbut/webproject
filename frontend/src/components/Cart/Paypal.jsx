import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = ({ amount, onSuccess, onError }) => {
    return (
        <PayPalScriptProvider options={{ "client-id":import.meta.env.VITE_PAYPAL_CLIENT_ID, currency: "USD" }}>
            <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: amount.toString(), // Ensure it's a string
                                    currency_code: "USD" // 👈 Explicitly set currency here
                                }
                            }
                        ]
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        onSuccess(details);
                    });
                }}
                onError={(err) => {
                    console.error("PayPal error", err);
                    onError(err);
                }}
            />
        </PayPalScriptProvider>
    );
};

export default Paypal;

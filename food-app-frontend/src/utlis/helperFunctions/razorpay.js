export const razorPay = async ({userDetails, itemTotal, order}) => {
    var options = {
        "key": "rzp_test_S4ieIzpCYcKoTm", // Enter the Key ID generated from the Dashboard
        "amount": Number(itemTotal * 100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Foodie Payment",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": order?.res_razor.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "http://localhost:4000/order/payment_verification",
        "prefill": {
            "name": userDetails.userName,
            "email": userDetails.email,
            "contact": "00000xxxx"
        },
        "notes": {
            "address": "Foodie Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = await new window.Razorpay(options);
    await rzp1.open();
}


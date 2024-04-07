import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { user } from "../../redux/features/auth/selector/selector";
import { initializeCart } from "../../redux/features/cart/slice";
import { setloadingFalse, setloadingTrue } from "../../redux/features/Loader/slice";
import { servicePost } from "../../utlis/connection/api";

const Checkout = ({ payload }) => {

  const userDetails = useSelector(user);
  const dispatch = useDispatch();
  const id = userDetails._id;
  const navigate = useNavigate();

  const PlaceOrder = async () => {
    dispatch(setloadingTrue());
    let arr = payload?.orderDetails;
    try {
      if (payload?.orderDetails?.length == 0) {
        toast.error("No item added in your cart.");
        return;
      }
      arr = await payload?.orderDetails?.map((data) => {
        // return data.food = data.food._id;
        return { ...data, food: data.food._id };
      });
      const order = await servicePost(`order/new/${id}`, payload);
      payload = await { ...payload, orderDetails: arr };
      var options = {
        "key": "rzp_test_S4ieIzpCYcKoTm", // Enter the Key ID generated from the Dashboard
        "amount": Number(payload.itemTotal * 100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Foodie Payment",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": order?.res_razor.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "http://localhost:4000/API/order/payment_verification",
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
      toast.success("Order has been placed successfully");
      dispatch(initializeCart());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    finally {
      dispatch(setloadingFalse());
    }
  };

  return (
    <div id="summary" className="w-full md:w-1/4 px-8 py-10">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">
          Items - {payload?.orderDetails?.length}
        </span>
        <span className="font-semibold text-sm">{payload?.itemTotal}</span>
      </div>
      <div>
        <label className="font-medium inline-block mb-3 text-sm uppercase">
          Shipping
        </label>
        <select className="block p-2 text-gray-600 w-full text-sm">
          <option>Standard shipping - 0.00</option>
        </select>
      </div>

      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>{payload?.itemTotal}</span>
        </div>
        <button
          onClick={PlaceOrder}
          className="bg-zomato-400 rounded font-semibold hover:bg-zomato-500 py-3 text-sm text-white uppercase w-full"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;

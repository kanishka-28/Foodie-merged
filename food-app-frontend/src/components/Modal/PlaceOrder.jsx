import React from 'react'
import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { user } from '../../redux/features/auth/selector/selector';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { servicePost } from '../../utlis/connection/api';
import { setloadingFalse, setloadingTrue } from '../../redux/features/Loader/slice';
import { useDispatch } from 'react-redux';
import { razorPay } from '../../utlis/helperFunctions/razorpay';

export default function OrderModal({ restaurant, foodDetails, open, setopen, status }) {

    console.log("status", status);
    const cancelButtonRef = useRef(null);
    const userDetails = useSelector(user);
    console.log(restaurant,foodDetails);
    const [totalprice, settotalprice] = useState();
    const dispatch = useDispatch();
    const [orderDetails, setorderDetails] = useState({
        food: foodDetails?._id,
        quantity: 1,
        price: foodDetails?.price,
    })

    useEffect(() => {
        settotalprice(foodDetails?.price)
        setorderDetails({ ...orderDetails, food: foodDetails?._id, price: foodDetails.price });
    }, [foodDetails])

    const placeOrder = async () => {
        dispatch(setloadingTrue());
        try {
            setopen(false)
            const itemTotal = (orderDetails.quantity * orderDetails.price);
            const order = await servicePost(`order/new/${userDetails._id}`, {user: userDetails._id, restaurant: restaurant._id, orderDetails, itemTotal: (orderDetails.quantity * orderDetails.price), type: status });
            // toast.success('Order has been placed successfully')
            razorPay({userDetails, itemTotal, order});
        } catch (error) {
            console.log({error});
        }
        finally {
            dispatch(setloadingFalse());
        }
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setopen}>
                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start items-center">

                                    <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left mb-8">
                                        <div className="flex justify-between mb-8">
                                            <Dialog.Title as="h3" className="text-2xl leading-6 font-medium text-gray-700">
                                                {restaurant?.name}
                                            </Dialog.Title>
                                            <button type="button" className="text-red-500"
                                                onClick={() => setopen(false)}
                                                ref={cancelButtonRef}><AiOutlineClose className="w-6" /></button>
                                        </div>
                                        <div className="mt-2 text-center">
                                            <form className={`my-6`}>
                                                <div className="flex items-center justify-between my-2">
                                                    <p>Food Name:</p>
                                                    <div className="py-4 mx-2 text-center w-3/4 h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded" >{foodDetails?.name}</div>
                                                </div>

                                                <div className="flex items-center justify-between my-2">
                                                    <p>Quantity:</p>
                                                    <div className='flex items-center justify-between'>
                                                        <div onClick={() => {
                                                            if (orderDetails.quantity == 1) return;
                                                            setorderDetails({ ...orderDetails, quantity: orderDetails.quantity - 1 });
                                                            settotalprice(orderDetails.price * (orderDetails.quantity - 1));
                                                            console.log(orderDetails.price, orderDetails.quantity);
                                                        }} className='cursor-pointer bg-black text-white font-bold text-1xl w-10 ml-5 sm:ml-0 border border-gray-300 p-2 rounded'>➖</div>
                                                        <div className="py-4 mx-2 text-center w-36 sm:w-60 h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded">{orderDetails.quantity}</div>
                                                        <div onClick={() => {
                                                            setorderDetails({ ...orderDetails, quantity: orderDetails.quantity + 1 });
                                                            settotalprice(orderDetails.price * (orderDetails.quantity + 1));
                                                            console.log(orderDetails.price, orderDetails.quantity);
                                                        }} className='cursor-pointer bg-black text-white font-bold text-2xl w-10 mr-2 border border-gray-300 p-2 rounded'>+</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between my-2">
                                                    <p>Price Total:</p>
                                                    <div className="py-4   mx-2 text-center w-3/4 h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded" >{totalprice}</div>
                                                </div>

                                            </form>
                                            <button onClick={placeOrder} className={`border border-gray-300 font-semibold w-full h-12 bg-megenta-400 text-white`}>Place Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
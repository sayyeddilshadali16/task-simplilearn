import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const Payment = () => {
    const [total, setTotal] = useState(0);

    const makePayment = async () => {
        const stripe = await loadStripe("pk_test_51Ll9wSSHydEOdqAhyw9uzfkFTxO4NNJtCTVCr685hQesYKyrOiOJaaR3gJl5XmH1r7suAIwE6FWjljnN7IQqFGqd00ixnEFTcI");

        const body = {
            // Modify this part based on your data structure
        };

        try {
            const response = await fetch("http://localhost:7000/api/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            const session = await response.json();
            // Redirect to Stripe Checkout Page
            await stripe.redirectToCheckout({ sessionId: session.id });
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const itemList = (item) => {
        setTotal(prevTotal => prevTotal + item.price);
        return (
            <li key={item.id} className="border-b border-gray-200 py-4 flex justify-between items-center">
                <div>
                    <h6 className="text-lg font-semibold">{item.title}</h6>
                </div>
                <span className="text-gray-600">${item.price}</span>
            </li>
        );
    };

    return (
        <div className="container mx-auto my-5 px-20 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h4 className="text-2xl font-semibold text-primary mb-4">Your cart</h4>
                    <ul className="space-y-4">
                        {/* Render your list items here */}
                        {/* {products.map(itemList)} */}
                    </ul>
                    <div className="border-t border-gray-200 pt-4">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold">Total (USD)</span>
                            <strong className="text-xl">${total}</strong>
                        </div>
                    </div>
                    <form className="mt-8">
                        <div className="flex items-center space-x-4">
                            <input type="text" className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-primary" placeholder="Promo code" />
                            <button type="submit" className="bg-primary text-white py-2 px-6 rounded-md">Redeem</button>
                        </div>
                    </form>
                </div>
                <div>
                    <h4 className="text-2xl font-semibold mb-4">Billing address</h4>
                    <form className="space-y-4">
                        {/* Your billing address form */}
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
                                <input type="text" id="firstName" name="firstName" className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
                                <input type="text" id="lastName" name="lastName" className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>
                            {/* Other fields */}
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-8">
                <h4 className="text-2xl font-semibold mb-4">Payment</h4>
                <form className="space-y-4">
                    {/* Your payment form */}
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label htmlFor="ccName" className="block text-sm font-medium text-gray-700">Name on card</label>
                            <input type="text" id="ccName" name="ccName" className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="ccNumber" className="block text-sm font-medium text-gray-700">Credit card number</label>
                            <input type="text" id="ccNumber" name="ccNumber" className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        {/* Other fields */}
                    </div>
                </form>
                <button className='bg-green-500 text-white py-3 px-8 rounded-md mt-4' onClick={makePayment} type='button'>Checkout</button>
            </div>
        </div>
    );
};

export default Payment;

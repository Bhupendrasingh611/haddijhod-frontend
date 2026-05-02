import React, { useState } from "react";
import { createOrder } from "../../api/orderApi";

const OrderForm = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        address: "",
        quantity: 1
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await createOrder(form);
            alert(res.data.message);
            console.log("Success:", res.data);

            // clear form after submit
            setForm({
                name: "",
                phone: "",
                address: "",
                quantity: 1
            });

        } catch (err) {
            console.log("Error:", err);
            alert("Failed to submit order");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Place Order</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                />
                <br /><br />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                />
                <br /><br />

                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={form.address}
                    onChange={handleChange}
                />
                <br /><br />

                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={form.quantity}
                    onChange={handleChange}
                />
                <br /><br />

                <button type="submit">Submit Order</button>
            </form>
        </div>
    );
};

export default OrderForm;
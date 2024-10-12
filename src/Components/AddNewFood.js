import React from "react";
import { Divider, Input, Form } from 'antd';
import { useState } from "react";


function AddNewFood({ onAddFood }) {
    const [fName, setFName] = useState("");
    const [fImage, setFImage] = useState("");
    const [fCalories, setFCalories] = useState("");
    const [fServings, setFServings] = useState("");

    const handleSubmit = (e) => {
        console.log("handle submit clicked");
        e.preventDefault();

        if (fName && fImage && fCalories && fServings) {
            const newFood = {
                name: fName,
                image: fImage,
                calories: Number(fCalories),
                servings: Number(fServings)
            };
            onAddFood(newFood);

            setFName('');
            setFImage('');
            setFCalories('');
            setFServings('');
        }
        else {
            alert("Please Fill all the fields");
        }
    }
    return (
        <Form style={{ margin: "10px", textAlign: "left" }} onSubmit={handleSubmit}>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input value={fName} type="text" onChange={(e) => { setFName(e.target.value) }} />

            <label>Image</label>
            <Input value={fImage} type="text" onChange={(e) => { setFImage(e.target.value) }} />


            <label>Calories</label>
            <Input value={fCalories} type="text" onChange={(e) => { setFCalories(e.target.value) }} />


            <label>Servings</label>
            <Input value={fServings} type="text" onChange={(e) => { setFServings(e.target.value) }} />

            <button type="submit" onClick={handleSubmit}>Create</button>
        </Form >
    )
}
export default AddNewFood;
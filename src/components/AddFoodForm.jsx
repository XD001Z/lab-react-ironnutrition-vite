import React, { useState } from "react";
import { Divider, Input, Button } from "antd";

const AddFoodForm = ({ addFood }) => {
  const [food, setFood] = useState({
    name: "",
    image: "",
    calories: "",
    servings: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFood((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(food);
    addFood(food);
    setFood({
      name: "",
      image: "",
      calories: "",
      servings: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>
      <label>
        Name:
        <Input
          type="text"
          name="name"
          value={food.name}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Image:
        <Input
          type="text"
          name="image"
          value={food.image}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Calories:
        <Input
          type="number"
          name="calories"
          value={food.calories}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Servings:
        <Input
          type="number"
          name="servings"
          value={food.servings}
          onChange={handleChange}
        />
      </label>
      <br />

      <Button onClick={handleSubmit} type="submit">Create</Button>
    </form>
  );
};

export default AddFoodForm;

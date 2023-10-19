import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";
import { Row, Divider } from "antd";

const FoodList = () => {
  const [foods, setFoods] = useState(foodsJson);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (foods, id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  const addFood = (food) => {
    let newFoods = [food, ...foods];
    setFoods(newFoods);
  };

  const setSearch = (str) => {
    setSearchTerm(str);
  };

  let filtered = searchTerm
    ? foods.filter((food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : foods;

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm addFood={addFood} />

      <Search setSearch={setSearch} />

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        {filtered.map((food, index) => {
          return (
            <FoodBox
              key={index}
              food={food}
              handleDelete={() => {
                handleDelete(foods, food.id);
              }}
            />
          );
        })}
      </Row>
    </div>
  );
};

export default FoodList;

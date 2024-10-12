import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './Components/FoodBox';
import { Row, Button, Empty } from 'antd';
import AddNewFood from './Components/AddNewFood';
import Search from './Components/Search';


function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFood, setFilteredFood] = useState(foods);
  const [formVisible, setFormVisible] = useState(false);

  const handleAddFood = (newFood) => {
    console.log("form submit clickd")
    const updatedFoodList = [newFood, ...foodList];
    setFoodList(updatedFoodList);
    setFilteredFood(updatedFoodList);
  };

  const filterFood = (searchTerm) => {
    console.log("in filter food");
    console.log(searchTerm);
    const filtered = foodList.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filtered);
    setFilteredFood(filtered);
  }

  const handleDelete = (foodName) => {
    const updatedFoodList = foodList.filter((food) =>
      food.name !== foodName
    );
    setFoodList(updatedFoodList);
    setFilteredFood(updatedFoodList);
  };

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  }
  return (
    <div className="App">
      <h1>Food List</h1>
      <Button onClick={toggleFormVisibility} type="primary" className='form-btn ant-btn-primary ant-btn-color-primary'>
        {formVisible ? "Hide Form" : "Add New Food"}
      </Button>
      {formVisible && <AddNewFood onAddFood={handleAddFood} />}
      <Search filterFood={filterFood} />
      {filteredFood.length === 0 ? (
        <Empty description="Oops!! There is no more content to show!" />
      ) : (
        <Row style={{ width: '100%', justifyContent: 'center' }}>
          {filteredFood.map(food => {
            return (
              <FoodBox food={food} key={food.name} handleDelete={handleDelete} />
            )
          })}
        </Row>
      )}

    </div>
  );
}

export default App;

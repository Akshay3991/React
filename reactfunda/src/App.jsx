import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';
function App() {
  let [foodItems ,setFoodItems] = useState([]);
  //  let textStateArr = useState("FoodItems entered by the user");//gives array of two components
  // let textoShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  
  const handleKeyDown = (event) => {
    if(event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = '';
      let newItems = [...foodItems , newFoodItem];
      setFoodItems(newItems);
    }
   };
  return (
    <Container>
      <h1>Healthy Food</h1>
      <FoodInput handleKeyDown={handleKeyDown}></FoodInput>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  );
}

export default App

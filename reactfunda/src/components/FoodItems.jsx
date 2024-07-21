import { useState } from "react";
import Items from "./Items";
import { useContext } from "react";
import { AppState } from "../App";


const FoodItems = () => {
    const Appdata = useContext(AppState)
    let [activeItems, setActiveItems] = useState([]);
    let onBuyButton = (item, event) =>{
        let newItems = [...activeItems ,item];
        setActiveItems(newItems);
        
    }
      return (
        <ul className='list-group'>
            {Appdata.map((item) => (
                <Items key={item} bought={activeItems.includes(item)} FoodItem={item} handleBuyButton={(event) => onBuyButton(item, event)}></Items>
            ))}
        </ul>
    );
}
export default FoodItems;
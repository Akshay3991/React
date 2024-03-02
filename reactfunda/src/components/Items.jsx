import styles from "./Items.module.css";

function Items(props) {
   
    // destructuring
    let { FoodItem,bought,handleBuyButton } = props;
    return (
        <>
            {/* <li  className='list-group-item'>{props.FoodItem}</li> */}
            {/* After Destructuring */}
            <li className={`${styles['akki-items']} list-group-item ${bought && 'active'}`}><span>{FoodItem}</span><button className="btn btn-success" onClick={handleBuyButton}>BUY Items</button></li>
        </>
    );
} 
export default Items;
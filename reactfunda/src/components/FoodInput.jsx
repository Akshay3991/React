import styles from "./FoodInput.module.css"
function FoodInput(props){
   
    return (
        <input type="text" placeholder="Enter food Item here=>"className={styles.FoodInput} onKeyDown={props.handleKeyDown} />
    );
}
export default FoodInput;
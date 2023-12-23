import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/display";
function App() {
  let [calval, setcalval] = useState("");
  const onButtonClick= (buttonText) =>{
    console.log("button clicked"+buttonText);
    if (buttonText ==='c'){
      setcalval("");

    }
    else if(buttonText === '='){
      const result = eval(calval);
      setcalval(result);
    }
    else{
      const newdisplayValue = calval + buttonText;
      setcalval(newdisplayValue);
    }
  } 

  return (
    <div className={styles.calculator}>
      <Display displayvalue={calval}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>

    </div >


  );
}

export default App;

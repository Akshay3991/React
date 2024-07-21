import { useContext } from "react";
import { AppState } from "../App";
function ErrorMessage(){
    const Appdata = useContext(AppState)

    return (
        <>
            {Appdata.length === 0 && <h3>I Am Still Hungry</h3>}
        </>
    );
}
export default ErrorMessage;
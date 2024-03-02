import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
    const dispatch = useDispatch();
    const inputElement = useRef();
    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' })
    }
    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' })
    }
    const handlePrivacyToggle = () => {
        dispatch({ type: 'PRIVACY_TOGGLE' })
    }
    const handleAdd = () => {
        dispatch({
            type: 'ADD',
            payload: {
                num: inputElement.current.value
            }
        })
        inputElement.current.value = "";
    }
    const handleSubtract = () => {
        dispatch({
            type: 'SUBTRACT',
            payload: {
                num: inputElement.current.value
            }
        })
        inputElement.current.value = "";
    }
    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" onClick={handleIncrement} className="btn btn-primary btn-lg px-4 gap-3">+1</button>
                <button type="button" onClick={handleDecrement} className="btn btn-success btn-lg px-4">-1</button>
                <button type="button" onClick={handlePrivacyToggle} className="btn btn-info btn-lg px-4">Privacy Toggle</button>

            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
                <input type="text" ref={inputElement} placeholder="Enter number" className="number-input" />
                <button type="button" onClick={handleAdd} className="btn btn-warning btn-lg px-4">Add</button>
                <button type="button" onClick={handleSubtract} className="btn btn-danger btn-lg px-4">Subtract</button>
            </div>
        </>
    )

}
export default Controls;
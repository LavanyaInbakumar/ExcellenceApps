import React, { useEffect } from 'react'
import './ConfirmBox.scss'
const ConfirmBox = (props) => {
    const[visiblity,setVisiblity]=React.useState(false)
    React.useEffect(()=>{
        setVisiblity(props.visiblity)
        if(visiblity){
            document.querySelector(".confirm-bg").style.display = "flex"
            document.querySelector(".container").style.display = "flex"
        }
    },[props.visiblity])
    const handleConfirmationBox =()=>{
        if(visiblity){
            document.querySelector(".confirm-bg").style.display = "flex"
            document.querySelector(".container").style.display = "flex"
            setVisiblity(true) 
        }
        // else{
        //     document.querySelector(".confirm-bg").style.display = "none"
        //     document.querySelector(".container").style.display = "none"
        //     setVisiblity(false)
        // }
    }
    return (
        <>
            <div className="container">
                <div className="confirmation-text">
                    Do you really want to delete this task?
                </div>
                <div className="button-container">
                    <button
                        className="cancel-button"
                        onClick={() => handleConfirmationBox()}>
                        Cancel
                    </button>
                    <button
                        className="confirmation-button"
                        onClick="">
                        Delete
                    </button>
                </div>
            </div>
            <div
                className="confirm-bg"
                onClick={() => handleConfirmationBox()}>
            </div>
        </>
    )
}
export default ConfirmBox;
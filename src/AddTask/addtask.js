import React, { useEffect, useState } from 'react';
import '../todo.scss';
import Delete from '../images/delete.svg';
import Todolist from '../Todolist/Todolist';
const AddTask = (props) => {
    const [txtvalue, setTxtValue] = React.useState('')
    const [txtupdate, setUpdate] = React.useState('')
    const temp = JSON.parse(localStorage.getItem("TodoListItems"));
    const handleChange = (e) => {
        setTxtValue(e.target.value)
    }
    const handleKeyPress = (event) => {
        let i = 0;
        let index = i++;
        if (txtvalue.length > 0) {
            if (event.key === 'Enter') {
                props.AddItems({
                    value: txtvalue,
                    isComplete: false,
                    onEdit: false
                })
                setTxtValue('')
            }
        }
    }
    const handleClick = () => {
        let i = 0;
        let index = i++;
        if (txtvalue.length > 0) {
            props.AddItems({
                value: txtvalue,
                isComplete: false,
                onEdit: false
            })
            setTxtValue('')
        }
    }
    const todolist = props.AddToDo.map((data) => {
        return (
            <div>{data.value}</div>
        )
    })
    const handleEdit = (updateval, i) => {
        setUpdate(updateval)
        props.Edit(i)
        if (txtupdate != updateval) {
            props.Update(txtupdate, i)
        }
        // props.Update(updateval,i)
    }
    const handleUpdatePress = (e, updateval, i) => {
        if (e.key === "Enter") {
            handleEdit(updateval, i)
        }
    }
    const handleUpdate = e => {
        setUpdate(e.target.value)
    }
    console.log(temp, "Listtttt")

    return (
        <div>
            <div className="addtask">
                <input type="text" onChange={handleChange} value={txtvalue} onKeyDown={handleKeyPress}></input>
                <input type="submit" value="+" onClick={handleClick}></input>

                {
                    temp && temp.map((data, index) => {
                        return (
                            <div key={index} className="items_div">
                                <img src={Delete} onClick={() => {props.Remove(index)}} style={{cursor:'pointer',width:"20px",color:"red"}}/>
                                {data.onEdit ?
                                    <input className="edit_txtbox" type="text"
                                        onChange={handleUpdate} value={txtupdate} onKeyDown={(e) => handleUpdatePress(e, data.value, index)}></input>
                                    :
                                    <div className={data.isComplete ? "green" : "li_data"} onClick={
                                        () => props.Toggle(index)
                                    }>{data.value}</div>
                                }
                                <button className="editbtn" name="Edit" disabled={data.isComplete ? true : false} onClick={() => handleEdit(data.value, index)}>{data.onEdit ? "Update" : "Edit"}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
export default AddTask;
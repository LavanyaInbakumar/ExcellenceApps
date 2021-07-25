import React, { useEffect } from 'react'
import AddTask from '../AddTask/addtask'
const Todolist = (props) => {
    const [list, setList] = React.useState([])
    const [dummy, setDummy] = React.useState()
    var val_str = []
    var box;
    const addItems = val => {
        if (!val.value) { return }
        else {
            const todolist = [...list, val]
            setList(todolist)
            console.log(todolist, "todolist")
            var exist = JSON.parse(localStorage.getItem("TodoListItems"));
            exist.push(val)
            localStorage.setItem("TodoListItems", JSON.stringify(exist));
            // alert(val.value)
        }
    }
    const toggle = (currentval) => {
        // let temp = [...list]
        // temp[currentval].isComplete = !temp[currentval].isComplete
        // console.log(temp[currentval].isComplete, "currentval.isComplete")
        // setList(temp)

        let str_items = JSON.parse(localStorage.getItem("TodoListItems"));
        str_items[currentval].isComplete = !str_items[currentval].isComplete
        localStorage.setItem("TodoListItems", JSON.stringify(str_items));
        setDummy((prevState) => ({
            ...prevState
        }))
    }
    const remove = (index) => {
        // let temp = [...list]
        // temp.splice(index, 1)
        // setList(temp)
        let str_items = JSON.parse(localStorage.getItem("TodoListItems"));
        str_items.splice(index, 1)
        localStorage.setItem("TodoListItems", JSON.stringify(str_items));
        setDummy((prevState) => ({
            ...prevState
        }))
    }
    const edit = (index) => {
        // let temp = [...list]
        // temp[index].onEdit = !temp[index].onEdit
        // setList(temp)
        let str_items = JSON.parse(localStorage.getItem("TodoListItems"));
        str_items[index].onEdit = !str_items[index].onEdit
        localStorage.setItem("TodoListItems", JSON.stringify(str_items));
        setDummy((prevState) => ({
            ...prevState
        }))
    }
    const update = (data, index) => {
        // let temp = [...list]
        // temp[index].value = data
        // setList(temp)
        // console.log(list, "currentval.splice")
        let str_items = JSON.parse(localStorage.getItem("TodoListItems"));
        str_items[index].value = data
        localStorage.setItem("TodoListItems", JSON.stringify(str_items));
        setDummy((prevState) => ({
            ...prevState
        }))
    }
    return (
        <div>
            <center>
                <div style={{ fontSize: "30px", color: "white", fontWeight: 600, padding: "5px" }}>To-do-List</div>
                <div style={{ width: "50%" }}>
                    <AddTask AddItems={addItems} AddToDo={list} Toggle={toggle}
                        Remove={remove} Edit={edit} Update={update} />
                </div>
            </center>
        </div>
    );
}
export default Todolist;
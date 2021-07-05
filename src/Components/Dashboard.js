import {useState} from "react";
import ListClass from "./ListClass";

const Dashboard = () => {
    const [items,setItems] =useState([]);
    const [todo, setTodo] =  useState("");
    const [key, setKey] = useState("");

   const handleSubmit = (e) => {
        e.preventDefault();
        
        const newItem = {todo,key};
        if(newItem.text !== ""){
            const newItems = [...items,newItem];
            setItems(newItems);
        }
        setTodo("");

   }
   const handleChange = (e) => {
       setTodo(e.target.value);
       setKey(Date.now());
   }
   const deleteItem = (key) => {
       const filterItems = items.filter( item  => item.key !== key);
       setItems(filterItems);
   }

    return (
        <div className="container col-md-8 col-sm-12 mx-auto">
                <form className="input-group mx-auto  needs-validation" onSubmit={handleSubmit}>
                        <input type="text" className="form-control form-control-lg" placeholder="ADD TO DO"
                          value={todo}  onChange = {handleChange} required/>
                         <button className="btn btn-danger mx-2 btn-lg" type="submit">ADD</button>
                </form>
           <ListClass items={items} deleteItem={deleteItem}></ListClass>
      </div>
    )
}

export default Dashboard;
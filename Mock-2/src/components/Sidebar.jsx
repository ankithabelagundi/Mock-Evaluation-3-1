import { useState } from "react";

function Sidebar(){
const[reg,setReg]=useState("");
const [category,setCategory]=useState("Car");
const[driver,setDriver]=useState("");
const[available,setAvailabel]=useState(true);
const handleSubmit = ()=>{
    if(!reg||!driver)return
    alert("Fields reuired");
    addFleet({
        id:Date.now(),
        reg,category,driver,available,
    });
    setReg("");
    setDriver("");
};
return(
    <div>
        <input placeholder="Vehicle Reg" value={reg} onChange={(e)=>setReg(e.target.value)} />
        <input  placeholder="Driver" value={driver} onChange={(e)=>setDriver(e.target.value)} />
        <select onChange={(e)=>setCategory(e.target.value)} >
            <option>Auto</option>
            <option>Car</option>
            <option>Truck</option>
            <option>Bus</option>
        </select>
        <button onClick={handleSubmit}>Add Fleet</button>
    </div>
);
}
export default Sidebar;
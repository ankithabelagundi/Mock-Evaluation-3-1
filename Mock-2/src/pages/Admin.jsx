import { useCallback, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FleetCard from "../components/FleetCrad";
function Admin(){
    const [fleets,setFleets]=useState([]);
    const addFleet = (fleet) => {
        setFleets((prev)=>[...prev,fleet]);
    };
    const updateDriver = useCallback((id,name)=>{
        setFleets((prev)=>prev.map((f)=>(f.id===id ?{...f,driver:name}:f)));
    },[]);
    const toggleAvailablity=useCallback((id)=>{
        setFleets((prev)=>prev.map((f)=>f.id===id ?{...f,available:!f.available}:f));
    },[]);
    const deleteFleet=useCallback((id)=>{
        if(confirm("Are You Sure?")){
            setFleets((prev)=>prev.filter((f)=>f.id!==id));
        }
    },[]);
    return(
        <>
        <Navbar/>
        <div style ={{
            display:"flex"
        }}>
            <Sidebar addFleet={addFleet}/>
            <div style={{
                display:"grid",gridTemplateColumns:"repeat(3,1fr)"
            }}>
                {fleets.map((fleet) =>
                (<FleetCard
                    key={fleet.id}
                    fleet={fleet}
                    updateDriver={updateDriver}
                    toggleAvailablity={toggleAvailablity}
                    deleteFleet={deleteFleet}/>
               ) )}
            </div>
        </div>
        </>
    );
}
export default Admin;
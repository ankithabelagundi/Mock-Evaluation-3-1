function FleetCard({fleet,updateDriver,toggleAvailablity,deleteFleet}){
    return(
        <div>
            <p>{fleet.reg}</p>
            <p>{fleet.category}</p>
             <p>{fleet.driver}</p>
              <p>{fleet.available?"Available":"Unavailable"}</p>
              <button onClick={()=>{const name=prompt ("New driver name");
                if(name&&name.trim())
                    updateDriver(fleet.id,name);
              }}>Update Driver</button>
              <button onClick={()=>deleteFleet(fleet.id)
              }> Delete</button>
        </div>
    );

}
export default FleetCard;

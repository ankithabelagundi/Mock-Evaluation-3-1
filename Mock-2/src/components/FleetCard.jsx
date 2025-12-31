import { memo } from "react";

function FleetCard({ fleet, updateDriver, toggleAvailability, deleteFleet }) {
  return (
    <div>
      <p>{fleet.reg}</p>
      <p>{fleet.category}</p>
      <p>{fleet.driver}</p>
      <p>{fleet.available ? "Available" : "Unavailable"}</p>

      <button
        onClick={() => {
          const name = prompt("New driver name");
          if (name && name.trim()) updateDriver(fleet.id, name);
        }}
      >
        Update Driver
      </button>

      <button onClick={() => toggleAvailability(fleet.id)}>
        Toggle Availability
      </button>

      <button onClick={() => deleteFleet(fleet.id)}>Delete</button>
    </div>
  );
}

export default memo(FleetCard);

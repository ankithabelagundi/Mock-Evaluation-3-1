
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    alert("Logged out");
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        backgroundColor: "#222",
        color: "white",
      }}
    >
      <h3>Fleet Management Dashboard</h3>

      <button
        onClick={handleLogout}
        style={{
          padding: "6px 12px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;

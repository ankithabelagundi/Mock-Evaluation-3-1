import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"
import PostLists from "./components/PostLists";
import ThemeToggle from "./components/ThemeToggle";


function App() {
 return(
  <div className="app light">
    <ThemeToggle/>
    <PostLists/>
    </div>
 );
}

export default App;

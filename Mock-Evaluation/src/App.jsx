import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"
import PostList from "./components/PostLists";
import ThemeToggle from "./components/ThemeToggle";


function App() {
 const {theme }= useContext(ThemeContext);
 return(
  <div>
    <ThemeToggle/>
    <PostList/>
    </div>
 );
}

export default App

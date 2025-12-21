import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"
import PostList from "./components/PostLists";
import ThemeToggle from "./components/ThemeToggle";


function App() {
 return(
  <div className="app light">
    <ThemeToggle/>
    <PostList/>
    </div>
 );
}

export default App;

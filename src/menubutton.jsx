import { Link } from "react-router-dom"
import '../styles/menubutton.css'

function Menubutton(){
    return(
        <Link to ="/menu">
        <button className="menubutton">Menu</button>
        </Link>
    );
}
export default Menubutton
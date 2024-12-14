import '../styles/bookPage.css'
import { Link } from "react-router-dom";

export default function Book(){
    return(
       <>
            
            <label><p>Choose a date: </p> <input type="date" id='Date' /></label>
            <label><p>Choose a time: </p> <input type="time" id='time' /></label>
            <p>Choose a table:</p>
            <Link to="/form">
            <div><button id="table">Table 1</button>
            <button id="table">Table 2</button>
            <button id="table">Table 3</button></div>
            <div> <button id="table">Table 4</button>
            <button id="table">Table 5</button>
            <button id="table">Table 6</button></div>
           </Link>
       </>
    )
}
import '../styles/formPage.css'
import { Link } from 'react-router-dom'

export default function FormPage(){
    return(
       <> <h1>Fill in the form:</h1>
       
    <div className='forma'>
        <form>
            <label>Name:<input type="text" name="name" /></label>
            <label>Surname:<input type="text" name="surname" /></label>
            <label>Phone number:<input type="text" name="number" /></label>
            <label>Email:<input type="email" name="email" /></label>
            <label>Number of people:<input type="number" name="number" min={1} max={15} /></label>
            <label>Preorder meals:<input type="comment" name="comment" /></label>
            <input type="submit" name="submit" />
            
        </form>
    </div>
   
        </>

    )
}
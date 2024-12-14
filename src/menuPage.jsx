import '../styles/menuPage.css'
import { Link } from 'react-router-dom'
export default function MenuPage(){
    return(
        <>
        <h1>Menu:</h1>
        <div className='menu'>
            <h3>Predjela</h3>
            <ul>
            <li>Bruskete  10€</li>
            <li>Grcka salata  10€</li>
            <li>Bucina juha  10€</li>
            </ul>
            <h3>Glavna jela</h3>
            <ul>
            <li>Mjesano meso  10€</li>
            <li>Dnevna riba  10€</li>
            <li>Cevapi  10€</li>
            </ul>
            <h3>Deserti</h3>
            <ul>
            <li>Tiramisu  10€</li>
            <li>Madarica  10€</li>
            <li>Krempita  10€</li>
            </ul>
           

        </div>
        
        </>
    )
}
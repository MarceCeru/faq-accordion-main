import miImagen from './images/estrella.svg'
import './Header.css'

export const Header = () => {
    return (

        <div className="header">
            <img className='start' src={miImagen} alt="" />
            <h1>FAQs</h1>

        </div>
    )
}
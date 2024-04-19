import { useRef } from "react";
import { FaBars, FaTimes  } from "react-icons/fa";
import {  FaInstagram, FaAt} from "react-icons/fa6";

import { Link  } from 'react-router-dom';

import './Menu.css';

function Menu() {
	const navRef = useRef();


	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h4>LOGO</h4>
			< nav ref={navRef}>
		          	<Link className='efect' onClick={showNavbar} to="/">Home</Link>
                <Link className='efect' onClick={showNavbar} to="/quemsou" >Quem Sou</Link>
                <Link className='efect' onClick={showNavbar}  to="/servico">Serviço em Nutrição</Link>
				<Link className='efect' onClick={showNavbar}  to="/servicos" >Planos</Link>

				<Link    to=""> <button type="button" className="button">
				<span className="button-icon">
					<ion-icon name="logo-whatsapp"></ion-icon>
					</span>
					<span className="button-text">Agende sua Consulta</span>
					

					</button></Link>
				<ul className="Social-list">
				<Link><li><FaInstagram /> </li></Link>
				<Link><li><FaAt /></li></Link>
				
				</ul>
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
				</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
			
		</header>
	);
}

export default Menu;



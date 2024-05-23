import { useRef } from "react";
import { FaBars, FaTimes  } from "react-icons/fa";
import {  FaInstagram, FaAt} from "react-icons/fa6";

import { Link  } from 'react-router-dom';
import LOGO from  "./LOGO.png"
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
			<div className="logo">
			<img src={LOGO} alt=""/>
			<h3>Nutricionista</h3>
			</div>
			< nav ref={navRef}>
		          	<Link className='efect' onClick={showNavbar} to="/">Home</Link>
                <Link className='efect' onClick={showNavbar} to="/quemsou" >Quem Sou</Link>
                <Link className='efect' onClick={showNavbar}  to="/servico">Serviço em Nutrição</Link>
                <Link className='efect' onClick={showNavbar}  to="/servico">Consulta</Link>
				

				<a className='efect' href="https://api.whatsapp.com/message/DAGJBXKY5RQVP1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" ><span className="button">
				<span className="button-icon">
					<ion-icon name="logo-whatsapp"></ion-icon>
					</span>
					<span className="button-text">Agende sua Consulta</span>
					
					</span>
					</a>
				<ul className="Social-list">
				<a  href="https://www.instagram.com/nutri_rafadias?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"  ><li>
					<div className="box"><FaInstagram /></div> </li></a>
				<li><a href= 'mailto:nutrirafaelledias@gmail.com' target="_blank" rel="noopener noreferrer"><div className="box"><FaAt /></div></a></li>
				
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



import './header.css';
import Logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="header" id="header">
        <div className="top-header"></div>
        <nav>
            <img alt="logo" className="logo" src={Logo} />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#fruits">Fruits</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>  
    </header>
  );
}


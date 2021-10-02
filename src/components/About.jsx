import './about.css';
import AboutImg from '../assets/about_img.png';

export default function About() {
  return (
    <section className="about" id="about">
        <img alt="about-img" src={AboutImg}/> 
        <div className="about-content">
            <h2>About our shop</h2>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="about-btn">Read More</div>
        </div> 
    </section>
  );
}


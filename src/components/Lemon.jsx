import './lemon.css';
import LemonImg from '../assets/green_fr.png';

export default function Lemon() {
  return (
    <section className="lemon">
        <div className="lemon-text">
            <h2>Fresh Lemon</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing el sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure doloreprehenderin</p>
            <div className="lemon-btn">Read More</div>
        </div>
        <div className="img">
            <img alt="lemon-img" src={LemonImg} />
        </div>
    </section>
  );
}
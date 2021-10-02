import './slider.css';
import SliderImg from '../assets/slider_img.png';

export default function Slider() {
  return (
    <section className="slider">
        <div className="background"></div>
        <div className="content">
            <div className="text">
                <h1>
                    <strong>Best</strong>
                    <br />
                    Fresh Red Apple
                </h1>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>
                <div className="btn">Buy Now</div>
            </div>
            <img alt="slider-img" className="img" src={SliderImg}/>
        </div>
    </section>
  );
}


import './footer.css';
import FooterImg1 from "../assets/f_b1.png";
import FooterImg2 from "../assets/f_b2.png";
import FooterImg3 from "../assets/f_b3.png";

export default function Footer() {



  return (
    <footer className="footer">
        <div className="container">
            <div className="contact-footer">
                <h3>Contact Us</h3>
                <p>
                    Healing Center, 176 W Street name, New York, NY
                    <br/><br/>
                    (+1) 123 456 7890
                    <br/><br/>
                    demo@gmail.com
                </p>
            </div>
            <div className="pages-footer">
                <h3>Pages</h3>
                <p>
                    <a href="#header">Home</a><br/>
                    <a href="#about">About Us</a><br/>
                    <a href="#fruits">Fruits</a><br/>
                    <a href="#blog">Blog</a><br/>
                    <a href="#contact">Contact Us</a>
                </p>
            </div>
            <div className="posts-footer">
                <h3>Recent Post</h3>
                <FooterPost img={FooterImg1} text="consectetur adipisc elit,sed do eiusmod"/>
                <FooterPost img={FooterImg2} text="consectetur adipisc elit,sed do eiusmod"/>
                <FooterPost img={FooterImg3} text="consectetur adipisc elit,sed do eiusmod"/>
            </div>
            <div className="newsletter-footer">
                <h3>Newsletter</h3>
                <form>
                    <input type="email" placeholder="Enter Your Email" />
                    <button type="submit">Subscribe</button>
                </form>       
            </div>
        </div>
        <div className="copyright">
            <p>Copyright 2019 All Right Reserved By <strong>Professor Code</strong></p>
        </div>
    </footer>
  );
}


//footer post component
const FooterPost = (props)=>{
    return(
        <div className="footer-post">
            <img alt="footer-post-img" src={props.img} />
            <p>{props.text}</p>
        </div>
    )
}
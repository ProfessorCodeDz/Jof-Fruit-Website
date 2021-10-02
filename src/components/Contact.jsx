import './contact.css';
import ContactImg from '../assets/fruit_img.png';

export default function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <section id="contact" className="contact" style={{"backgroundImage":`url("${ContactImg}")`}}>
        <div className="contact-form">
            <h2>
                Request a 
                <strong> Call Back</strong>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name"/>
                <input type="email" placeholder="Email"/>
                <input type="text" placeholder="Phone"/>
                <textarea placeholder="Message"/>
                <button>Send</button>
            </form>
        </div>
    </section>
  );
}

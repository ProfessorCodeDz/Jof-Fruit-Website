import './fruits.css';
import F1 from '../assets/f1.png';
import F2 from '../assets/f2.png';
import F3 from '../assets/f3.png';

export default function Fruits() {
  return (
    <section className="fruits" id="fruits">
        <h2>Our Fruits</h2>
        <div className="cards">
            <Fruit img={F1} title="Black Grapes" category="Fresh Fruit"/>
            <Fruit img={F2} title="Pineapple" category="Fresh Fruit"/>
            <Fruit img={F3} title="Bananas" category="Fresh Fruit"/>
        </div>
    </section>
  );
}


// Fruit Card Component
const Fruit = (props) => {
    return(
        <div className="fruit">
            <img alt="fruit-img" src={props.img} />
            <h3>
                {props.title}
                <br/>
                <strong>{props.category}</strong>
            </h3>
            
        </div>
    );
}
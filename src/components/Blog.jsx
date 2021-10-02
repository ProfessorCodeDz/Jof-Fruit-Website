import './blog.css';
import Blog1 from '../assets/blog1.png';
import Blog2 from '../assets/blog2.png';
import Blog3 from '../assets/blog3.png';

export default function Blog() {
  return (
    <section className="blog" id="blog">
        <h2>Our Blog</h2>
        <div className="blogs">
            <BlogCard img={Blog1} info="Post by Professor Code 02/10/2021" text="sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniadolor.."/>
            <BlogCard img={Blog2} info="Post by Professor Code 02/10/2021" text="sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniadolor.."/>
            <BlogCard img={Blog3} info="Post by Professor Code 02/10/2021" text="sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniadolor.."/>
        </div>
    </section>
  );
}


// Fruit Card Component
const BlogCard = (props) => {
    return(
        <div className="blog-card">
            <img alt="blog-img" src={props.img} />
            <h3>
                {props.info}
            </h3>
            <p>{props.text}</p>
            
        </div>
    );
}
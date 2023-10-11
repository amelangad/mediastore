import Carousel from 'react-bootstrap/Carousel';
import mic from '../../public/assets/mic.jpg'
import one from '../../public/assets/one.jpg'
import two from '../../public/assets/two.jpg'
 
    
    function Slider() {
      return (
       <a href ="/store">
        <Carousel>
          <Carousel.Item>
          <img src ={mic} style ={{width: "100vw", height: "100vh", objectFit: "cover"}}/>
            <Carousel.Caption>
              <h3>Mic</h3>
              <p>Get inspired. Have fun with music. Go create.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src ={one} style ={{width: "100vw", height: "100vh", objectFit: "cover"}}/>
            <Carousel.Caption>
              <h3>Be prepared to create.</h3>
              <p>Move to the world full of inspirations</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
           <img src ={two} style ={{width: "100vw", height: "100vh", objectFit: "cover"}}/>
            <Carousel.Caption>
              <h3>Earphones</h3>
              <p>Sound better than ever. Immerse yourself in sound.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </a>
      );
    }
    
    export default Slider;


import { Carousel } from 'react-responsive-carousel';
import C2 from '../images/caro_try_with_canva.png';
// import c1 from '../images/caro-1.png';
import c2 from '../images/carochange-1.png';
// import c3 from '../images/caro-3.png';

function Home() {
  return (
    <div className='text-center'>
      {/* <h1 className="display-3 text-danger bg-info">Testym</h1> */}
      <Carousel infiniteLoop autoPlay className='w-75 mt-5 mx-auto'>
          <div className='image'>
            <img className='w-100' src = {c2} alt="" />
          </div>
          <div className='image'>
            <img className='w-100' src={C2} alt='' />
          </div>
          <div className='image'>
            <img className='w-100' src={'https://media.istockphoto.com/photos/and-a-concept-yellow-question-mark-glowing-amid-black-question-marks-picture-id1305169776?b=1&k=20&m=1305169776&s=170667a&w=0&h=mpYdh2MzGN_rqxoRNlO5KWGCCq3ZktzSfp-wA0nD9no='} alt='' />
          </div>
      </Carousel>
      <p className="lead text-secondary">
        Enhance your skills with the practice
      </p>
      {/* <img src={""} alt = "no img" /> */}
      <p className="lead text-dark">
        
      </p>
    </div>
  );
}

export default Home;



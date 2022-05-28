import { Carousel } from 'react-responsive-carousel';
import c3 from '../images/QuizCaro.svg';

function Home() {
  return (
    <div className='text-center'>
      {/* <h1 className="display-3 text-danger bg-info">Testym</h1> */}
      <Carousel infiniteLoop autoPlay className='w-75 mt-5 mx-auto'>
          <div className='image'>
            <img className='w-100' src = {'https://media.istockphoto.com/photos/and-a-concept-yellow-question-mark-glowing-amid-black-question-marks-picture-id1305169776?b=1&k=20&m=1305169776&s=170667a&w=0&h=mpYdh2MzGN_rqxoRNlO5KWGCCq3ZktzSfp-wA0nD9no='} alt="" />
          </div>
          <div className='image'>
            <img className='w-100' src={c3} alt='' />
          </div>
          <div className='image'>
            <img className='w-100' src={'https://images.unsplash.com/photo-1539628399213-d6aa89c93074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} alt='' />
          </div>
      </Carousel>
      <p className="lead text-secondary">
        Enhance your skills with practice
      </p>
      {/* <img src={""} alt = "no img" /> */}
      <p className="lead text-dark">
        
      </p>
    </div>
  );
}

export default Home;



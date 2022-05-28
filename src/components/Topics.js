import React from 'react';
import Tests from './Tests';

// import Contact from './Contact';

function Topics() {
    let topics = [

        {
            proname: "Python",
            proimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ni0KgLSxdD4xdShtA1o2NRI1U8yMo5bd7g&usqp=CAU",
            link: "Pymodule"
        },
        {
            proname: "Java",
            proimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4BVkW91-pl1DxdleSdMBzyprcr81plL5Mw&usqp=CAU",
            link: "Javamodule"
        },
        {
            proname: "C++",
            proimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnmrOS43ZZN7E46ps9OOUma5q5vi6mBqkPuQ&usqp=CAU",
            link: "Cplusmodule"
        }
        // {
        //     pro1name: "HTML",
        //     pro1img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtkTm0bxEI8Y4MoS3C7T99OsRg_j6Cc9UR9Q&usqp=CAU",
        //     pro2name: "JavaScript",
        //     pro2img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1hr2NmDLCw3di7NwymssiQD7rmo5StrIa2Q&usqp=CAU",
        //     pro3name: "CSS",
        //     pro3img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNoDMiQbttTQnedbaVcCTThSU6873XRaYLA&usqp=CAU"
        // },


    ]

    return ( 
        <div className='container-fluid bg-light pt-5'>
            <h2 className='display-6 text-center'>Languages</h2>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-5 w-100  justify-content-evenly pb-5'> 
                {
                    topics.map((topic, index) => <Tests key={index} topic ={topic} >
                    </Tests>)
                }
            </div>

            
        </div>

     );

}

export default Topics;
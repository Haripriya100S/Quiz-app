import {Link} from 'react-router-dom';


function Tests(props) {
    return ( 
        <div className='text-center'>
            <div className='col p-1'>
                    <div className='card card-body w-100 m-3 mx-auto shadow'>
                        <img className="mt-2 h-75" src={props.topic.proimg} alt='' />
                        <div className="text-center mt-3">
                            <button type="button" className="btn btn-success btn-outline-dark mt-4"><Link className="nav-link text-center text-warning"to="Python">{props.topic.proname}</Link></button>
                        </div>
                    </div>      
                </div>
            </div>
    );
}
    
export default Tests;









        // <div className='container-fluid bg-light pt-5'>
        //     <h2 className='display-4 text-center'>Languages</h2>
        //     <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-5 w-100  justify-content-evenly'>
        //         <div className='col p-1'>
        //             <div className='card card-body w-100 m-3 mx-auto shadow'>
        //                 <img className="mt-2 h-75" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ni0KgLSxdD4xdShtA1o2NRI1U8yMo5bd7g&usqp=CAU" alt='' />
        //                 <div className="text-center mt-3">
        //                     <button type="button" className="btn btn-success btn-outline-dark mt-4"><Link className="nav-link text-center text-warning"to="Python">Python</Link></button>
        //                 </div>
        //             </div>      
        //         </div>
                

        //         <div className='col p-1'>
        //             <div className='card card-body w-100 m-3 mx-auto shadow'>
        //                 <img className="mt-2 h-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4BVkW91-pl1DxdleSdMBzyprcr81plL5Mw&usqp=CAU" alt='' />
        //                 <div className="text-center mt-3">
        //                     <button type="button" className="btn btn-success btn-outline-dark"><Link className="nav-link text-center text-warning"to="java">Java</Link></button>
        //                 </div>
        //             </div>      
        //         </div>

        //         <div className='col p-1'>
        //             <div className='card card-body w-100 m-3 mx-auto shadow'>
        //                 <img className="mt-2 h-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnmrOS43ZZN7E46ps9OOUma5q5vi6mBqkPuQ&usqp=CAU" alt='' />
        //                 <div className="text-center mt-3">
        //                     <button type="button" className="btn btn-success btn-outline-dark"><Link className="nav-link text-center text-warning"to="cplus">C++</Link></button>
        //                 </div>
        //             </div>      
        //         </div>

                
        //     </div>

        //     <h2 className='display-4 text-center mt-3'>Technologies</h2>

        //     <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-5 w-100 d-flex justify-content-evenly'>
        //         <div className='col p-1'>
        //             <div className='card card-body w-100 m-3 mx-auto shadow'>
        //                 <img className="mt-2 h-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtkTm0bxEI8Y4MoS3C7T99OsRg_j6Cc9UR9Q&usqp=CAU" alt='' />
        //                 <div className="text-center mt-3">
        //                     <button type="button" className="btn btn-success "><Link className="nav-link text-center text-warning"to="html">HTML</Link></button>
        //                 </div>
        //             </div>                    
        //         </div>

        //         <div className='col p-1'>
        //             <div className='card card-body w-100 m-3 mx-auto shadow'>
        //                 <img className="mt-2 h-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1hr2NmDLCw3di7NwymssiQD7rmo5StrIa2Q&usqp=CAU" alt='' />
        //                 <div className="text-center mt-3">
        //                     <button type="button" className="btn btn-success btn-outline-dark"><Link className="nav-link text-center text-warning"to="js">JavaScript</Link></button>
        //                 </div>
        //             </div>      
        //         </div>

        //         <div className='col p-1'>
        //             <div className='card card-body w-100 m-3 mx-auto shadow'>
        //                 <img className="mt-2 h-50"   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNoDMiQbttTQnedbaVcCTThSU6873XRaYLA&usqp=CAU" alt='' />
        //                 <div className="text-center mt-3">
        //                     <button type="button" className="btn btn-success btn-outline-dark"><Link className="nav-link text-center text-warning"to="CSS">CSS</Link></button>
        //                 </div>
        //             </div>      
        //         </div>

                
        //     </div>

        // </div>
     
import { Link } from "react-router-dom";
import './workdetailspecific.css'

const Detailspecific = () => { 
    return ( 
        <div id="project-details" className='my-40 text-left'>
            <Link to="/work" className='link text-2xl font-bold'><i className="bi bi-arrow-left mr-2"></i>BACK</Link>
            <h1 className='text-7xl font-semibold my-12'>ComputerPhile</h1>
            <p className='text-4xl mb-12'> While ChargedUp was one of the hottest London startups of 2019, their mobile apps were in dire need of attention.</p>
            <p className='text-4xl mb-12'>Alarm bells rang when their support team started receiving requests from customers who had trouble performing basic tasks within the apps.</p>
            
            <div className="p-12">
                <img src="/full-preview.jpg" alt="" className="my-28 mx-4" />
            </div>

            <Link to=""><button type="button" className="btn btn-lg relative">Visit Website</button></Link>  
    </div>
     );
}
 
export default Detailspecific;
import error from "../../assests/error.png"
import { Link } from "react-router-dom"

const Error = ()=>{

    return(
        <>
        <div class="flex items-center justify-center h-[70vh]">
  <img src={error} alt="Your Image" class=" object-center "/> 

  
</div>
<div className="flex justify-center">
<Link to="/" className="mb-4 bg-blue-500 px-4 py-1 rounded-md text-white font-semibold" >Home</Link>
</div>

        </>
    )
}

export default Error
import { useEffect, useState } from "react"
import axios from "axios"

import toast, {Toaster} from 'react-hot-toast'

const Data = ()=>{

    const showAlert = (status)=>{
        if(status)
        {
            toast.success("Data fetched")
        }
        else
        {
            toast.error("Couldn't fetch data")
        }

    }
    const getSchema = ()=>{

        axios.get('https://transform.dabler.app/api/test/getdbobjects?datawarehouse=SNOWFLAKE-DEV').then((response)=>{

        setSchema(response.data)
      
        })

    }

    const [tabledata,setTabledata] = useState([])
    const [data,setData] = useState([
        {
            name:"john",
            email:"john@gmail.com",
            permission:"admin",
            create:"12-09-2021",
            action:"user 1"
        },
        {
            name:"jose",
            email:"jose@gmail.com",
            permission:"user",
            create:"12-04-2021",
            action:"user 1"
        },
        {
            name:"joseph",
            email:"joseph@gmail.com",
            permission:"admin",
            create:"12-03-2021",
            action:"user 1"
        },
        {
            name:"joe",
            email:"joe@gmail.com",
            permission:"admin",
            create:"12-08-2021",
            action:"user 1"
        }
    ])


   
    const [list1,setList1] = useState(false)
    const [list2,setList2] = useState(false)
    const [schema,setSchema] = useState([])
    const [count,setCount] = useState(0)


    useEffect(()=>{

    getSchema()
    
    
    },[])

    return(
        <>

        <Toaster/>
        
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>


<div class="p-4 sm:ml-64 bg-gray-200 min-h-screen">

   <div className="bg-white flex justify-between rounded-sm">
    <div className="p-2">
        <h1 className="font-bold tracking-wide">Project 1 Model 1 | <span className="text-gray-400">transformation object</span></h1>
    </div>
    <div className="p-2 mx-5 space-x-3">
        <button className="bg-blue-500 text-white px-4 rounded-sm text-sm font-semibold">SAVE</button>
        <button className="bg-orange-400 text-white px-4 rounded-sm text-sm font-semibold">DEPLOY</button>
    </div>

   </div>
   
<div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 my-5 ">
    <ul class="flex flex-wrap -mb-px">
        <li class="mr-2">
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-black hover:border-black dark:hover:text-black">
     

            <span className="font-bold">&#123; &#125;</span>    Details</a>
        </li>
        <li class="mr-2">
            <a href="#" class="inline-block p-4 text-black border-b-2 border-black rounded-t-lg active dark:text-black dark:border-black" aria-current="page">
           
             <span className="flex tracking-wide"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21" height="21">
  <path d="M6.17071 18C6.58254 16.8348 7.69378 16 9 16C10.3062 16 11.4175 16.8348 11.8293 18H22V20H11.8293C11.4175 21.1652 10.3062 22 9 22C7.69378 22 6.58254 21.1652 6.17071 20H2V18H6.17071ZM12.1707 11C12.5825 9.83481 13.6938 9 15 9C16.3062 9 17.4175 9.83481 17.8293 11H22V13H17.8293C17.4175 14.1652 16.3062 15 15 15C13.6938 15 12.5825 14.1652 12.1707 13H2V11H12.1707ZM6.17071 4C6.58254 2.83481 7.69378 2 9 2C10.3062 2 11.4175 2.83481 11.8293 4H22V6H11.8293C11.4175 7.16519 10.3062 8 9 8C7.69378 8 6.58254 7.16519 6.17071 6H2V4H6.17071ZM9 6C9.55228 6 10 5.55228 10 5C10 4.44772 9.55228 4 9 4C8.44772 4 8 4.44772 8 5C8 5.55228 8.44772 6 9 6ZM15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13ZM9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20Z"></path>
</svg> Dashboard</span>   </a>
        </li>
       
    </ul>

    <div className="flex justify-end">
    <button className="text-white bg-green-600 px-3 py-0 rounded-sm "
    onClick={()=>{

        setCount(count+1)
        if(count%2==0)
        {
            setTabledata(data)
            showAlert(true)
        }
        else
        {
            setTabledata([])
            showAlert(false)
            
        }
      
    }}
    >RUN TEST</button>
    </div>
</div>






<div className="flex h-[48vh] mb-3">



<div className="bg-white p-4 w-60">
    <span className="flex space-x-10" >
    <svg xmlns="http://www.w3.org/2000/svg" width="21px" viewBox="0 0 24 24"><path d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM4 7V19H20V7H4Z"></path></svg>
    {schema[1]?.schemas[0]?.schema}
    </span>

    <span className="flex my-2" onClick={()=>{
        setList1(!list1)
    }}>
        {list1 ? 
        <svg xmlns="http://www.w3.org/2000/svg" width="21px" viewBox="0 0 24 24"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path></svg> :
        <svg xmlns="http://www.w3.org/2000/svg" width="21px" viewBox="0 0 24 24"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path></svg>

        }
    <svg xmlns="http://www.w3.org/2000/svg" width="21px" viewBox="0 0 24 24"><path d="M22 8V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7H21C21.5523 7 22 7.44772 22 8ZM12.4142 5H2V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z"></path></svg>
    
    Tables
    </span>
 {list1 ? 
 <span >
    {
        schema[1].schemas[0].tables.map((items)=>
        <ul className="list-disc ml-10">
     <li>{items}</li>
    
       </ul>
        
        )
    }
 
</span> :
<span></span>
}



    <span className="flex my-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="21px" viewBox="0 0 24 24"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="21px" viewBox="0 0 24 24"><path d="M22 8V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7H21C21.5523 7 22 7.44772 22 8ZM12.4142 5H2V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z"></path></svg>
    
    Views
    </span>

{/* end of 1st schema */}
{/* start of 2nd schema */}
<span className="flex space-x-10" >
    <svg xmlns="http://www.w3.org/2000/svg" width="21px" viewBox="0 0 24 24"><path d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM4 7V19H20V7H4Z"></path></svg>
    {schema[2]?.schemas[0]?.schema}
    </span>

    <span className="flex my-2" onClick={()=>{
        setList2(!list2)
    }}>
        {list2 ? 
        <svg xmlns="http://www.w3.org/2000/svg" width="21px" viewBox="0 0 24 24"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path></svg> :
        <svg xmlns="http://www.w3.org/2000/svg" width="21px" viewBox="0 0 24 24"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path></svg>

        }
    <svg xmlns="http://www.w3.org/2000/svg" width="21px" viewBox="0 0 24 24"><path d="M22 8V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7H21C21.5523 7 22 7.44772 22 8ZM12.4142 5H2V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z"></path></svg>
    
    Tables
    </span>
 {list2 ? 
 <span >
    {
        schema[2]?.schemas[0]?.tables.map((items)=>
        <ul className="list-disc ml-10">
     <li>{items}</li>
    
       </ul>
        
        )
    }
 
</span> :
<span></span>
}



    <span className="flex my-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="21px" viewBox="0 0 24 24"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="21px" viewBox="0 0 24 24"><path d="M22 8V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7H21C21.5523 7 22 7.44772 22 8ZM12.4142 5H2V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z"></path></svg>
    
    Views
    </span>



{/* end of 2nd schema */}
    
    

   
  

</div>

<div className="flex-grow ml-2" >
  
  <textarea
  placeholder={`1 Type your Query Here \n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20`}
    id="message"
    rows="8"
    className="h-full resize-none overflow-y-hidden block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
  ></textarea>
</div>



</div>


{/* table starts here */}


<div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Email
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Permission
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Create Date
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                <div class="flex items-center justify-end">
                        Action
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
           {
            tabledata?.map((items)=>{

                return(
                    <>
                     <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {items.name}
                </th>
                <td class="px-6 py-4">
                    {items.email}
                </td>
                <td class="px-6 py-4">
                    {items.permission}
                </td>
                <td class="px-6 py-4">
                    {items.create}
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{items.action}</a>
                </td>
            </tr>
                    </>
                )
            })
           }
           
            
        </tbody>
    </table>
</div>





</div>

        </>
    )
}


export default Data
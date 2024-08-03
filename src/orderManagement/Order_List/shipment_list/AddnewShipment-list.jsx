import React from 'react'
// import { LuPrinter } from "react-icons/lu";
// import { GrDocumentText } from "react-icons/gr";
const Addnewshipmentlist = () => {
  return (
    <div className='w-75 h-screen bg-white pt-3 d-flex flex-col'>
        
      <div className='w-100 h-10 flex flex-row justify-between '> 
<h1 className='fw-bold ms-3'> Add New Shipment </h1>
<div className='sub-div w-80 h-10'>
<button className='w-28  text-white ms-3 h-10 bg-purple-700 ' style={{borderRadius:"5px"}}>Shipment List</button>
<button className='w-40 h-10 ms-8 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Add New Shipment</button>

</div>
      </div>
      <hr className='bg-slate-700  w-100 mt-3'/>
      <div className='form w-auto flex flex-row gap-4 mt-5 ms-56'>

<select className="select h-11 w-80 " style={{ border: "1px solid  grey", outline: "none", borderRadius: "5px" }}>
  <option selected>All Result
  </option>
  <option>Per Page-30</option>
  <option >Per Page-50 </option>
  <option >Per Page-100  </option>
</select>


<input type='text' className='w-80 h-11 font-bold' placeholder='Search...' style={{ border: "1px solid grey", borderRadius: "5px" }} />
<div className='icons'>
{/* <GrDocumentPdf />
<BsFiletypeScss /> */}

</div>
</div>

<div className=' w-96 mt-5 flex flex-row gap-3 ms-96  '>
    <button className=' btn btn-join w-48 h-11 bg-white' style={{borderRadius:"5px",border:"1px solid black"}}>Cancel</button>
    <button className='w-48 h-11 text-white bg-purple-500' style={{borderRadius:"5px"}}>Save</button>

</div>
    </div>
  )
}

export default Addnewshipmentlist
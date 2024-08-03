import React from 'react'
import { Link } from 'react-router-dom'
import { LuPrinter } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";
const Ordersummary = () => {
  return (
    <div className='bg-green-300 w-auto h-svh'>
      <div className='w-auto bg-red-200 d-flex h-16 '>
<h1 className='fw-bold h-16 '>Order Summary</h1>
<div className='button-div w-80 bg-red-500 h-16 ms-auto '>
    <Link className='w-40 bg-white h-16  mt-5' to='/ordersummary '>Order Summary</Link>
    <Link  className='w-44 ms-16 h-16 bg-purple-600 ' to='/addneworder'>New Order Summary</Link>

</div>
      </div>
      <div className='form w-auto  ps-4 bg-white mt-14 h-20 d-flex p-3 gap-7' style={{border:"1px solid  grey"}}>
      <select className="select h-11 w-56 "style={{border:"1px solid  grey", borderRadius:"0.6rem"}}>
    <option selected>    Select Per Page
    </option>
    <option>Per Page-10</option>
    <option >Per Page-30</option>
    <option>Per Page-50</option>
    <option>Per Page-100</option>
</select>
<input className='h-11 w-48 p-2 ps-4' style={{border:"1px solid  grey", borderRadius:"0.6rem"}} type='text' placeholder='Search...' />
<div className='h-11 w-48 ps-4' style={{border:"1px solid  grey", borderRadius:"0.6rem"}}>
    <p>From Date:    </p>
    <input  type='date' style={{border:"none",outline:"none"}} />

</div>
<div className='h-11 w-48 ps-4' style={{border:"1px solid  grey", borderRadius:"0.6rem"}}>
    <p>From Date:    </p>
    <input  type='date' style={{border:"none",outline:"none"}} />

</div>
<div className='h-11 w-48 p-2 ps-4 gap-8 ' style={{border:"1px solid  grey", borderRadius:"0.6rem"}}> 
    <label>To Date:   </label>  
    
<input type='date'style={{ outline:"none"}} />

</div>
<div className='w-64 bg-slate-600'>
<LuPrinter className='' />
<LuPrinter className='' />
<GrDocumentText />

</div>
      </div>

    </div>
  )
}

export default Ordersummary

import React from 'react'
const Supplierlist = () => {
  return (
    <div className='w-75 bg-white' style={{height:"100vh"}}>
            <div className='w-auto pt-4 mt-10 h-10 flex flex-row justify-between '> 
<h1 className='fw-bold' style={{fontSize:"20px"}}>Supplier List</h1>
<div className='sub-div w-80 h-10'>
<button className='w-28  text-white ms-3 h-10 bg-purple-700 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Shipment List</button>
<button className='w-40 h-10 ms-8 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Add New Supplier </button>

</div>
      </div>
      <hr className='bg-red-400 mt-5 w-100 '/>
      
      <div className=' w-auto doller-container flex flex-row gap-5 mt-5 ms-3'>
<div className='w-60 bg-black h-20  doller-buyer pl-14 pt-3' style={{borderRadius:"1rem"}} >
  <span className='text-orange-400' style={{fontSize:"22px",fontWeight:"bold"}}>$2,664.00
  </span><br/>
  <span className='text-orange-400 pl-1 ' style={{fontWeight:"bold"}} >
  Total Bill

  </span>
</div>

{/* second-box */}
<div className='w-60 bg-black h-20  doller-buyer pl-9 pt-3' style={{borderRadius:"1rem"}} >
  <span className='text-orange-400' style={{fontSize:"22px",fontWeight:"bold"}}>$0.00
  </span><br/>
  <span className='text-orange-400 ' style={{fontWeight:"bold"}} >
 Advance Amount

  </span>
</div>
{/* Third-box */}
<div className='w-60 bg-white h-20  doller-buyer pl-12 pt-3' style={{borderRadius:"1rem"}} >
  <span className='' style={{fontSize:"22px",fontWeight:"bold"}}>$0.00
  </span><br/>
  <span className='text-orange-400 pr-4' style={{fontWeight:"bold"}} >
Pay Amount
  </span>
</div>
<div className='w-60 bg-green-300 h-20  doller-buyer pl-9 pt-3' style={{borderRadius:"1rem"}} >
  <span className='pl-5' style={{fontSize:"22px",fontWeight:"bold"}}>$2,664.00
  </span><br/>
  <span className='text-orange-400  pl-5' style={{fontWeight:"bold"}} >
 Due Amount

  </span>
</div>

      </div>
      {/* form */}
      <div className='form w-100    flex fle-row gap-6 pl-3 mt-20'>
      <div className='w-80 h-10 bg-black   flex flex-row ' style={{borderRadius:"10px"}}>
<select className="select h-11 w-80 p-2 pl-3 "style={{border:"1px solid  grey",outline:"none",borderRadius:"10px" }}>
    <option selected>All Result
    </option>
    <option>Per Page-30</option>
    <option>Per Page-50</option>
    <option>Per Page-100</option>
    </select>
</div>
<input type='text' className='w-80 h-11 font-bold' placeholder='Search...' style={{ border: "1px solid grey", borderRadius: "10px" }} />

      </div>

       {/* table */}
       <table className="table mt-10 ms-3 p-2" style={{fontFamily:"monospace",fontSize:"15px"}}>
  <thead>
    <tr className='bg-slate-300' style={{border:"2px solid grey"}}>
      <th scope="col">SL.</th>
      <th scope="col">Party Name</th>
      <th scope="col"> Phone Number</th>
      <th scope="col">Country</th>
      <th scope="col">Advance Amount</th>
      <th scope="col">Pay Amount</th>
      <th scope="col">Due Amount</th>
      <th scope="col">Balance</th>
      <th scope="col">Remarks</th>
      <th scope="col">Action</th>
     




    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>0000003</td>
      <td>25 Jul, 2024</td>
      <td>NR</td>
      <td>Buyer</td>
      <td>100%COTTON TWILL AOP</td>
      <td>NR</td>
      <td>NR</td>

    </tr>
   
  
  </tbody>
</table>
    </div>
  )
}

export default Supplierlist
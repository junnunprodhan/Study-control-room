import React from 'react';
import './AddBreak.css'

const AddBreak = () => {
    
    return (
        <div className='break-time-container'>
           <button>
               <h3>10 <small>M</small></h3>
           </button>
           <button>
               <h3>15 <small>M</small></h3>
           </button>
           <button>
               <h3>20 <small>M</small></h3>
           </button>
           <button>
               <h3>30 <small>M</small></h3>
           </button>
           {/* <div>
               <h3>10 <small>M</small></h3>
           </div>
           <div>
               <h3>15 <small>M</small></h3>
           </div>
           <div>
                <h3>20 <small>M</small></h3>
           </div>
           <div>
               <h3>30 <small>M</small></h3>
           </div> */}

        </div>
    );
};

export default AddBreak;
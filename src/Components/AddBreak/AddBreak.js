import React from 'react';
import './AddBreak.css'
import { useEffect, useState } from "react";

const AddBreak = ({handlerTime}) => {
    const [breakTime, setBreakTime] = useState([]);

    useEffect(() => {

    }, [breakTime]);
  

    const addLocalStorage = Time => {
        localStorage.setItem("break", Time);
        setBreakTime(Time);
    };
    const getLocalStorageItem = localStorage.getItem("break");
    
    return (
        <div className='break-time-container'>
            <div className='container-time'>
				<div className='time-container' >
					<div>
						<button
							onClick={e => addLocalStorage(e.target.innerText)}>
							10
						</button>
					</div>
					<div>
						<button
							onClick={e => addLocalStorage(e.target.innerText)}>
							15
						</button>
					</div>
						<div >
							<button
								onClick={e => addLocalStorage(e.target.innerText)}>
								20
							</button>
						</div>
						<div>
							<button
									onClick={e => addLocalStorage(e.target.innerText)}>
									30
							</button>
						</div>
                    </div>
                    <h2>Study Details</h2>
                <div className='study-info'>
                     <h3>Break time : <span>{getLocalStorageItem} M</span> </h3>
				</div>
			</div>
        </div>
    );
};

export default AddBreak;
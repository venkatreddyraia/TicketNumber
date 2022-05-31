import React, { useState } from "react";
import './Design.css';

const Design = () =>{

    const [serviceList,setServiceList] = useState([{
        service:''
    }])



    return(
        <div>
            <form>
                <label>Service(s)</label>
                {
                    serviceList.map((setServiceList,index) =>(
                        <div key={index}>
                    <input type='text' name="service" id="service" required />
                    {serviceList.length - 1 === index && serviceList.length<4 &&
                    <button>
                    <span>Add a service</span>
                </button>}

                <br />
                    
                    <div>
                        <button>
                            Remove
                        </button>
                    </div>
                </div>

                    ))
                }
                
            </form>
        </div>
    )
}

export default Design;
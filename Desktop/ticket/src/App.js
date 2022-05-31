// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';



import Profile from './images/profile.png'

function App() {

  const [data,setData] = useState('000000')

    const Ticketnumber = () =>{
        setData(Math.random().toString(6).slice(2,8))
    }

    const ticket = Object.values(data);

    const ticketDelete = () =>{
        const list = [...setData];
        list.splice(1);
        setData(list)
        
    }

    


    const [input,setInput] = useState(" ");

    const [result ,setResult] = useState(0);

    const secondTicket = Object.values(result);

    const handler = e =>{
        setInput(e.target.value);
    }

  

  return (
    <div className="App">
         <section className="section">
                 <div className='row'>
                     <div className='col-lg-7'>
                     <div className='table-info'>
                    <div className='table-number'> 
                                       
                        {/* <p value={input} name='input' onChange={handler}>Enter 6 digits</p> */}


                        <input type="text"  value={input} name='input' onChange={handler} /> 
                    </div>
                    <div className='table-buttons'>
                        <button className='btn button' onClick={() =>setInput(input+'7')}>7</button>
                        <button className='btn button' onClick={() =>setInput(input+'8')}>8</button>
                        <button className='btn button' onClick={() =>setInput(input+'9')}>9</button> <br />

                        <button className='btn button' onClick={() =>setInput(input+'4')}>4</button>
                        <button className='btn button' onClick={() =>setInput(input+'5')}>5</button>
                        <button className='btn button' onClick={() =>setInput(input+'6')}>6</button> <br />

                        <button className='btn button' onClick={() =>setInput(input+'1')}>1</button>
                        <button className='btn button' onClick={() =>setInput(input+'2')}>2</button>
                        <button className='btn button' onClick={() =>setInput(input+'3')}>3</button> <br /> 

                        <button className='btn button'><i class="fa fa-trash"></i></button>
                        <button className='btn button'>0</button>
                        <button className='btn button'>X</button> <br /> 

                        <hr />

                    

                
                        <button className='btn add-ticket' onClick={() =>setResult(input)}>
                            Add Ticket
                        </button>                       
                    </div> 
                                      
                </div>
                     </div>
                     <div className='col-lg-5'>
                         <div className='random-ticket'>
                             <div className='random-ticket-p'>
                                 <p>Click the wheel to generate random ticket</p>
                             </div>
                         </div>
                        
                     <button className='ticket-img' onClick={Ticketnumber}>
                     <img src={Profile} alt="" className="" />
                   </button>

                   <div className='ticket-range'>
                     <p>Ticket number range 100000 - 999999 </p>
                   </div>

                   {/* <input type="text" value={input} name='input' onChange={handler} /> 
                   {input} <br /> */}

                   {/* <button onClick={() =>setResult(input)}>
                       Result
                       </button> */}

                    {/* <h4>result {result}</h4> */}
                     </div>

                 </div>

                 <div className='row'>
                     <div className='col-lg-12'>
                     
                         <p className='ticket-info'>Your Selected Ticket : </p>

                         <div className='book-ticket'>
                             <div className='ticket-delete'>
                             <button onClick={() => ticketDelete()}>
                                 <i class="fa fa-trash"></i>
                                 </button>
                                
                             </div>

                             <p>Ticket #1</p>
                             <button className='book-ticket-button'>{ticket.at(0)}</button>
                             <button className='book-ticket-button'>{ticket.at(1)}</button>
                             <button className='book-ticket-button'>{ticket.at(2)}</button>
                             <button className='book-ticket-button'>{ticket.at(3)}</button>
                             <button className='book-ticket-button'>{ticket.at(4)}</button>
                             <button className='book-ticket-button'>{ticket.at(5)}</button>
                         </div>
                          <br />
                         <div className='book-ticket'>
                             <div className='ticket-delete'>
                                 <button>
                                 <i class="fa fa-trash"></i>
                                 </button>
                                
                             </div>

                             <p>Ticket #2</p>
                             <button className='book-ticket-button'>{secondTicket.at(1)}</button>
                             <button className='book-ticket-button'>{secondTicket.at(2)}</button>
                             <button className='book-ticket-button'>{secondTicket.at(3)}</button>
                             <button className='book-ticket-button'>{secondTicket.at(4)}</button>
                             <button className='book-ticket-button'>{secondTicket.at(5)}</button>
                             <button className='book-ticket-button'>{secondTicket.at(6)}</button>
                         </div>
                     </div>
                 </div>
            </section>
    </div>
  );
}

export default App;

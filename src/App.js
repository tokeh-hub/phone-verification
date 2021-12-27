import React,{useState} from 'react'
import {FiSearch} from 'react-icons/fi'
import axios from 'axios'
import './App.css';

// const api_key = '437e1e6990msha3f6ebee6ce3bdep190dc4jsn0d4e99b367c8'
// const baseUrl = `https://veriphone.p.rapidapi.com/verify?key=${api_key}`
// var axios = require("axios").default;


function App() {
  const [mobile,setMobile] = useState(null)
  const [info,setInfo] = useState()
  
  var options = {
    method: 'GET',
    url: 'https://veriphone.p.rapidapi.com/verify',
    params: {phone: `${mobile}`},
    headers: {
      'x-rapidapi-host': 'veriphone.p.rapidapi.com',
      'x-rapidapi-key': '437e1e6990msha3f6ebee6ce3bdep190dc4jsn0d4e99b367c8'
    }
  };
  const verify = () => {
  axios.request(options).then(function (response) {
    setInfo(response.data);
    console.log(info)
  }).catch(function (error) {
    console.error(error);
  });
  }
  return (
    <div className="App">
       <div className='card'>
         <div className='head'>
          <div className='input-icon'>
         <input placeholder='search phone' onChange={e=>setMobile(e.target.value)}/>
         <span className='icon'><FiSearch/></span>
         </div>
         <button className='btn' onClick={verify}  >Verify Phone Number</button>
         </div>
         {info && mobile?
         <div className='info'>
             <ul>
               <li>Phone: <span>{info.phone}</span></li>
               <li>Phone Validity: <span> {info.phone_valid?'true':'false'}</span></li>
               <li>Country: <span>{info.country}</span></li>
               <li>Country-Prefix: <span>{info.country_prefix}</span></li>
               <li>Carrier: <span>{info.carrier}</span> </li>
               <li>Country Code: <span>{info.country_code}</span></li>
               <li>Phone Type: <span> {info.phone_type}</span></li>
             </ul>
         </div> : null}
       </div>
    </div>
  );
}

export default App;

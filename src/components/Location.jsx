// import axios from "axios"
// import {useState, useEffect} from 'react'


// const Location = ({url}) => {

//     const [data, setData] = useState({})
//     useEffect(() => {
//         axios
//         .get(url)
//         .then(resp => {
//             console.log(resp.data)
//             setData(resp.data)
//         })
//         .catch(error => console.error(error))

//     }, [])




 
   

//     return(
//         <div className="div">
//             <li>
//                 <h2>{data.name}</h2>
//                 <img src={data.image} alt="" />
//                 <div>
//                     <p>Locacion: {data.location?.name}</p>
//                     <p>Tipo: {data.type}</p>
//                     <p>Space:  {data.species}</p>
//                     <p>Dimensión: {data.dimension}</p>
//                     <p>Residentes: {data.residentes?.location}</p>
//                 </div>
//             </li>
//         </div>
//     )
// }
// export default Location


import axios from "axios";
import { useState, useEffect } from "react";

const Location = ({ url }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="card">
      <h2>{data.name}</h2>
      <img width={290} src={data.image} alt="" />
      <div>
        <p>Locacion: {data.location?.name}</p>
        <p>Tipo: {data.type}</p>
        <p>Space: {data.species}</p>
      </div>
    </div>
  );
};
export default Location;
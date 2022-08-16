import React, { useState, useEffect } from "react";

function Twoway() {
  const [data, setData] = useState("Hello world!");
  
  const textChange = (e) =>{
    setData(e.target.value);
  }
//   useEffect(() => {
//     return () => {
      
//     };
//   }, [data]);

  return (
    <div>
      <p> {data} </p>
      <input type="text" name="dataname" value={data} onChange={textChange}  />
    </div>
  );
};

export default Twoway;

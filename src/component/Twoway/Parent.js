import React, { useState, useEffect } from "react";
import Child from "./Child";
import Card from 'react-bootstrap/Card';

function Parent() {
const [parentData, setParentData] = useState();
const [childData, setChildData] = useState();

const textChange = (e) =>{
    setParentData(e.target.value);
}


return (
    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Parent Component</Card.Title>
            <h1></h1>
            <input type="text" name="dataname" value={parentData} onChange={textChange}  />
            <br></br>
            <span>{childData}</span>
            </Card.Body>
        </Card>
        <div className="child">
            <Child toChild={parentData} fromChild={setChildData} />
        </div>
    </div>
);
}

export default Parent;

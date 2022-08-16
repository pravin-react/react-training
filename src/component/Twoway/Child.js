import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';

function Child(props) {
return (
    <div><Card style={{ width: '18rem' }}>
    <Card.Body>
    <Card.Title>Child Component</Card.Title>
    <input type="text" name="dataname" onChange={(e) => props.fromChild(e.target.value)}  />
            <br></br>
            <span>{props.toChild}</span>
    </Card.Body>
</Card>
</div>
);
}

export default Child;
import React from "react";

const BasicOne = props => {
return(
<div>
    <h1> Hello {props.name}! </h1>
    {props.children}
</div>
)
}

export default BasicOne
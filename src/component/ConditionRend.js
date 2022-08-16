import React from "react";

function Childrens() {
	return <h1>Childrens!</h1>;
}

function Teenage() {
	return <h1>Teenage!</h1>;
}

function Seniors() {
	return <h1>Seniors!</h1>;
}




function ConditonRend(props) {
    let agePerson = props.agePerson;
      return (
        <>
          { agePerson < 10 ? <Childrens/> : agePerson < 25 ? <Teenage /> : <Seniors /> }
        </>
      );
        
}
export default ConditonRend
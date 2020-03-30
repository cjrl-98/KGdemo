import React from "react";
import UpperForm from "../UpperForm/UpperForm";

export default class Form extends React.Component{

  submitFunction(e){
    e.preventDefault();
    console.log("logging",
                document.getElementById("name").value,
                document.getElementById("ccNumber").value,
                document.getElementById("ccExpiry").value)
  }
  
  render(){
    return(
      <>
        <form onSubmit={e => {this.submitFunction(e)}}>
          <UpperForm />
          <input type="" id="ccExpiry" name="ccExpiry" pattern="^(((0[5-9])|(1[0-2]))\/((20))|((0[1-9])|(1[0-2]))\/(2[1-9]))$" placeholder="MM/YY" required></input>
          <input type="submit" value="Submit"></input>
        </form> 
      </>
    )
  }
}
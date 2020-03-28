import React from "react";

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
          <input type="text" id="name" name="name" placeholder="full name" required></input>
          {/* @TODO valid credit card number pattern to be revised */}
          <input type="" id="ccNumber" name="ccNumber" pattern="^5[1-5]\d{2}$" placeholder="credit card number" required></input>
          {/* valid expiry date from 05-20 to 12-29 */}
          <input type="" id="ccExpiry" name="ccExpiry" pattern="^(((0[5-9])|(1[0-2]))\/((20))|((0[1-9])|(1[0-2]))\/(2[1-9]))$" placeholder="MM/YY" required></input>
          <input type="submit" value="Submit"></input>
        </form> 
      </>
    )
  }
}
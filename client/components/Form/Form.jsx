import React from "react";
import UpperForm from "../UpperForm/UpperForm";

export default class Form extends React.Component{

  submitFunction(e){
    e.preventDefault();
  }
  
  render(){
    return(
      <>
        <div class="form">
          <h1 class="form__title">Payment Details</h1>
          <form className="form__entry" onSubmit={e => {this.submitFunction(e)}}>
            <UpperForm />
            <input type="" id="ccExpiry" name="ccExpiry" pattern="^(((0[5-9])|(1[0-2]))\/((20))|((0[1-9])|(1[0-2]))\/(2[1-9]))$" placeholder="MM/YY" required></input>
            <input type="submit" value="Submit"></input>
          </form> 
        </div>

        <style JSX>{`
          .form__entry {
            display: flex;
            flex-direction: column;
          }
        `}</style>
      </>
    )
  }
}
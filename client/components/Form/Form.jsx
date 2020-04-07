import React from "react";
import UpperForm from "../UpperForm/UpperForm";
import Title from "../Nav/Nav";

export default class Form extends React.Component{

  submitFunction(e){
    e.preventDefault();
    let cc = e.target.ccNumber.value.replace(/\s/g, "");
    let ccVal = /4[0-9]{12}(?:[0-9]{3})/g.test(cc);
    if (!ccVal) {
      console.log('do something');
      return
    }
    console.log('posting cc value', cc);
  }
  
  render(){
    return(
      <>
        <div class="form">
          <h1 class="form__title">Payment Details</h1>
          <form className="form__entry" onSubmit={e => {this.submitFunction(e)}}>
            <UpperForm />
            {/* <input type="" id="ccExpiry" name="ccExpiry" pattern="^(((0[5-9])|(1[0-2]))\/((20))|((0[1-9])|(1[0-2]))\/(2[1-9]))$" placeholder="MM/YY" required></input> */}
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
import React from "react";
import UpperForm from "../UpperForm/UpperForm";
import Title from "../Nav/Nav";

export default class Form extends React.Component{

  submitFunction(e){
    e.preventDefault();
  }
  
  render(){
    return(
      <>
        <div className="form">
          <h2 className="form__title">Payment Details</h2>
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

          .form__title {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 32px;
          }
        `}</style>
      </>
    )
  }
}
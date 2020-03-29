import React from 'react';

export default class Form extends React.Component{
    submitFunction(e){
        e.preventDefault();
        let ccNumber = document.getElementById("ccNumber").value;
        let name = document.getElementById("name").value;
        let expiry = document.getElementById("ccExpiry").value
        let checkNum4 = cc.substring(0,4).trim();
        let checkNum2 = cc.substring(0,2).trim();
        if (checkNum2 >= "34" && checkNum2 <= "37"){
          let array = ["Amex", ccNumber, name, exipry];
        }
        else if ((checkNum4 >= "2221" && checkNum4 <= "2270") || (checkNum2 >= "51" && checkNum2 >= "55")) {
          let array = ["MasterCard", ccNumber, name, exipry];
        }
        else {
          let array = ["Visa", ccNumber, name, exipry];
        };
        this.props.updateState(array);
      }
    
      // updating focus once the credit card length is reached
      ccLen(){
        let cc = document.getElementById("ccNumber").value
        let checkNum1 = cc.substring(0,1).trim();
        let lenReached = cc.length;
        if ((checkNum1 === "3" && lenReached === 15) || lenReached === 16){
          ccExpiry.focus();
        }
      }
    
      // updating focus once the expiry date length is reached
      // valid expiry between 05-20 to 12/29
      expiryLen(){
        let expiryDate = document.getElementById("ccExpiry").value;
        let expiryLength = expiryDate.length;
        let pattern=RegExp("^(((0[5-9])|(1[0-2]))\/((20))|((0[1-9])|(1[0-2]))\/(2[1-9]))$");
        if(expiryLength === 5 && pattern.test(expiryDate)){
          cvv.focus();
        }
        else if (expiryLength === 5 && !pattern.test(expiryDate)){
          console.log('invalid')
        }
      }
    
      // updating focus once the cvv length is reached
      cvvLen(){
        let cvvValue = document.getElementById("cvv").value;
        let cvvLength = document.getElementById("cvv").value.length;
        let checkNum1 = document.getElementById("ccNumber").value.substring(0,1).trim();
        let pattern=RegExp("^[1-9]([0-9]{2}$|[0-9]{3}$)");
        if (pattern.test(cvvValue)&& ((checkNum1 === "3" && cvvLength === 4) || (checkNum1 != "3" && cvvLength === 3))){
          submit.focus();
        }
      }

    render (){
        return(
          <>
            <form onSubmit={e => {this.submitFunction(e)}}>
              <input type="text" id="name" name="name" placeholder="full name" required autoFocus></input>
              <input type="text" id="ccNumber" name="ccNumber" onInput={e=>{this.ccLen()}} maxLength="16" placeholder="credit card number" required></input>
              <input type="text" id="ccExpiry" name="ccExpiry" onInput={e=>{this.expiryLen()}} maxLength="5" placeholder="MM/YY" required></input>
              <input type="number" id="cvv" name="cvv" onInput={e=>{this.cvvLen()}} maxLength="4" placeholder="CVV" required></input>
              <input type="submit" name="submit" id="submit" value="Submit"></input>
            </form> 

            <style jsx>{`
            `}</style>
          </>
        )
    }
}

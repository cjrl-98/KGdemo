import React from "react";
import UpperForm from "../UpperForm/UpperForm";

export default class Form extends React.Component {
  submitFunction(e) {
    e.preventDefault();
  }

  expiryLen() {
    // updating focus once the expiry date length is reached
    // valid expiry between 05-20 to 12/29

    let expiryDate = document.getElementById("ccExpiry").value;

    let expiryLength = expiryDate.length;
    let pattern = RegExp(
      "^(((0[5-9])|(1[0-2]))/((20))|((0[1-9])|(1[0-2]))/(2[1-9]))$"
    );
    if (expiryLength === 5 && pattern.test(expiryDate)) {
      document.getElementById("ccExpiry").style.color = "black";
      this.cvv.focus();
    } else if (expiryLength === 5 && !pattern.test(expiryDate)) {
      document.getElementById("ccExpiry").style.color = "red";
    }
  }

  cvvLen() {
    // updating focus once the cvv length is reached
    let cvvValue = document.getElementById("cvv").value;
    let cvvLength = document.getElementById("cvv").value.length;
    let checkNum1 = document
      .getElementById("ccNumber")
      .value.substring(0, 1)
      .trim();
    let pattern = RegExp("^[1-9]([0-9]{2}$|[0-9]{3}$)");
    if (
      pattern.test(cvvValue) &&
      ((checkNum1 === "3" && cvvLength === 4) ||
        (checkNum1 != "3" && cvvLength === 3))
    ) {
      this.submit.focus();
    }
  }

  render() {
    return (
      <>
        <div className="form">
          <h1 className="form__title">Payment Details</h1>
          <form
            className="form__entry"
            onSubmit={e => {
              this.submitFunction(e);
            }}
          >
            <UpperForm />
            <div className="Form__enteries">
              <div className="Entry__group Expiry__Group">
                <label className="uForm__label" HTMLfor="expiry">
                  Expiry (MM/YY)
                </label>
                <input
                  className="uForm__input expiry_input"
                  type="text"
                  ref={input => {
                    this.ccExpiry = input;
                  }}
                  // onKeyUp={e => {
                  //   this.enterKey(e, "ccExpiry");
                  // }}
                  id="ccExpiry"
                  name="ccExpiry"
                  onInput={e => {
                    this.expiryLen();
                  }}
                  maxLength="5"
                  placeholder="**/**"
                  required
                ></input>
              </div>
              <div className="Entry__group Cvv__group">
                <label className="uForm__label" HTMLfor="cvv">
                  CVV
                </label>
                <input
                  className="uForm__input cvv_input"
                  type="text"
                  ref={input => {
                    this.cvv = input;
                  }}
                  // onKeyUp={e => {
                  //   this.enterKey(e, "cvv");
                  //
                  id="cvv"
                  name="cvv"
                  onInput={e => {
                    this.cvvLen();
                  }}
                  maxLength="4"
                  placeholder="***"
                  required
                ></input>
              </div>
            </div>
            <input
              className="Form__submit"
              type="submit"
              ref={input => {
                this.submit = input;
              }}
              id="submit"
              name="submit"
              value="Submit"
            ></input>
          </form>
        </div>
        <style JSX>
          {`
        @font-face {
        font-family: "M-Bold";
        src: url("../public/fonts/Muli-Bold.ttf");
        }
        .form__entry {
          display: flex;
          flex-direction: column;
        }
        .uForm__label{
          font-size:10px;
          font-color:#494949;
          margin-bottom: 10px;
        }
        .uForm__input {
          box-sizing: border-box;
          width: 100%;
          height: 25px;
          background: no-repeat;
          background-position: 3% center;
          border: none;
          border-bottom: 2px solid #b8b8b8;
          padding: 5px 5px 5px 15%;
          margin-bottom: 20px;
        }
        .uForm__input:focus {
          outline:none;
        }
        .expiry_input {
          background-image: url(./icons/calendar-alt-regular.svg)
        }
        .cvv_input {
          background-image: url(./icons/lock.svg)
        }
        .Form__submit {
          font-size: 10px;
          color: #ffffff;
          padding-top: 10px;
          padding-bottom: 10px;
          background-color: lightgrey;
          border-radius: 20px;
          font-family: 'M-Bold';
          width: 100px;
        }
        .Form__submit:focus {
          outline:none;
          background-color: grey;
        }
        .Form__enteries {
          display: flex;
          justify-content: flex-end;
        }
        .Entry__group {
          display: flex;
          flex-direction: column;
          align-items: left;
        }
        .Expiry__Group {
          margin-right: 50px;
        }
      `}
        </style>
      </>
    );
  }
}

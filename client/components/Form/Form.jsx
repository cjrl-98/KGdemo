import React from "react";
import UpperForm from "../UpperForm/UpperForm";
import { StoreContext } from "../../store";

export default class Form extends React.Component {
  static contextType = StoreContext;
  submitFunction(e) {
    e.preventDefault();
    console.log('what is it doing?')
    this.context.setModalOpen(!this.context.modalOpen);
    // because this is class, this.context is necessary, unlike in UpperForm.jsx
  }
 
  expiryLen(e) {
    // updating focus once the expiry date length is reached
    // valid expiry between 05-20 to 12/99
    let expiryDate = e.target.value;
    let expiryLength = expiryDate.length;
    let pattern = RegExp(
      "^(((0[5-9])|(1[0-2]))/((20))|((0[1-9])|(1[0-2]))/([2][1-9]|[3-9][0-9]))$"
      // "^(((0[5-9])|(1[0-2]))/((20))|((0[1-9])|(1[0-2]))/(2[1-9]))$"
    );
    if (expiryLength === 5 && pattern.test(expiryDate)) {
      this.ccExpiry.style.color = "#707070";
      // Note: this color is based on the ID, overrides the css style
      this.context.setFormInput(prevState => ({
        ...prevState,
        expiryDate: expiryDate
      }));
      if (
        this.context.formInput.submitEnabled === false &&
        this.context.formInput.cardNumber !== null &&
        this.context.formInput.cardHolderName !== null &&
        this.context.formInput.cvv !== null
      ) {
        this.context.setFormInput(prevState => ({
          ...prevState,
          submitEnabled: true
        }));
      }
      this.cvv.focus();
    } else if (expiryLength !== 5 && !pattern.test(expiryDate)) {
      // blocks non numerical string with the exception of /
      e.target.value = e.target.value.replace(/^[^(0-9\/)]+$/, "");
      this.ccExpiry.style.color = "red";
      this.context.setFormInput(prevState => ({
        ...prevState,
        submitEnabled: false
      }));
    }
  }
  
  cvvLen(e) {
    // updating focus once the cvv length is reached
    let cvvValue = e.target.value;
    let cvvLength = cvvValue.length;
    let pattern = RegExp("^[1-9]([0-9]{2}$|[0-9]{3}$)");
    if (pattern.test(cvvValue) && cvvLength === 3) {
      this.context.setFormInput(prevState => ({ ...prevState, cvv: cvvValue }));
      if (
        this.context.formInput.submitEnabled === false &&
        this.context.formInput.cardNumber !== null &&
        this.context.formInput.expiryDate !== null &&
        this.context.formInput.cardHolderName !== null
      ) {
        this.context.setFormInput(prevState => ({
          ...prevState,
          submitEnabled: true
        }));
      }
    } else {
      // blocks non numerical string
      e.target.value = e.target.value.replace(/^[^(0-9)]+$/, "");
      this.context.setFormInput(prevState => ({
        ...prevState,
        submitEnabled: false
      }));
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
                <label className="uForm__label" htmlFor="expiry">
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
                  onFocus={() =>
                    this.context.setSelectedInput(
                      this.context.inputNames.EXPIRYDATE
                    )
                  }
                  onBlur={() =>
                    this.context.setSelectedInput(
                      this.context.inputNames.DEFAULT
                    )
                  }
                  id="ccExpiry"
                  name="expiry"
                  onInput={e => {
                    this.expiryLen(e);
                  }}
                  maxLength="5"
                  placeholder="**/**"
                  required
                ></input>
              </div>
              <div className="Entry__group Cvv__group">
                <label className="uForm__label" htmlFor="cvv">
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
                    this.cvvLen(e);
                  }}
                  maxLength="3"
                  placeholder="***"
                  required
                ></input>
              </div>
            </div>
            <input
              className="Form__submit"
              type="submit"
              style={{
                backgroundColor: this.context.formInput.submitEnabled
                  ? "#FB435C"
                  : "#d3d3d3"
              }}
              ref={input => {
                this.submit = input;
              }}
              id="submit"
              name="submit"
              value="Submit"
            ></input>
          </form>
        </div>
        <style jsx>
          {`
            .form {
              font-family: "Muli";
            }
            .form__entry {
              display: flex;
              flex-direction: column;
            }
            .uForm__label {
              font-size: 10px;
              font-color: #494949;
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
              padding: 5px 5px 5px 25%;
              margin-bottom: 20px;
              color: #707070;
              font-family: "Muli";
            }
            .uForm__input:focus {
              outline: none;
            }
            .expiry_input {
              background-image: url(./icons/calendar-alt-regular.svg);
            }
            .cvv_input {
              background-image: url(./icons/lock.svg);
              margin-right: 10%;
            }
            .Form__submit {
              width: 150px;
              font-size: 10px;
              color: #ffffff;
              padding: 15px 40px;
              border: none;
              border-radius: 25px;
              margin: 0 auto;
              margin-top: 30px;
              transition: all 0.3s ease-in;
            }
            .Form__submit:focus {
              outline: none;
              background-color: grey;
            }
            .Form__enteries {
              display: flex;
              justify-content: flex-end;
              box-sizing: border-box;
              width: 260px;
              height: 25px;
              margin-bottom: 20px;
            }
            .Entry__group {
              display: flex;
              flex-direction: column;
              align-items: left;
            }
            .Expiry__Group {
              margin-right: 20%;
            }
          `}
        </style>
      </>
    );
  }
}

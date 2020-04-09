import { useContext, useRef } from "react";
import { StoreContext } from "../../store";

// the design: https://xd.adobe.com/view/df6df630-4786-4eb5-44eb-4d5aaf9dc1f5-a95c/
const UpperForm = () => {
  const { formInput, setFormInput, setSelectedInput, inputNames } = useContext(StoreContext);
  const ccErr = useRef(null);
  const nameErr = useRef(null);

  const nameChange = e => {
    // either asign the value to a variable or use event.persist to allows us to access the event asynchronously
    // https://medium.com/trabe/react-syntheticevent-reuse-889cd52981b6
    const value = e.target.value;
    // use prevState to update only a key value pair
    setFormInput( prevState => ({ ...prevState, cardHolderName : value }) );
    if(
      formInput.submitEnabled === false &&
      formInput.cardNumber !== null && 
      formInput.expiryDate !== null &&
      formInput.cvv !== null
  ){
      setFormInput( prevState => ({ ...prevState, submitEnabled : true }) );
  }
  };

  const ccNumChange = e => {
    e.target.value = e.target.value.replace(/[^\d]+/g, "");
    // blocks non numerical string
    e.target.value = e.target.value.replace(/^(.{1,16}).*/g, '$1').replace(/(.{4})/g, '$1 ').trim();
    //gets the first 16 and the seperate them by 4s
    // the longer way to regex this https://www.peterbe.com/plog/cc-formatter

    // https://webdesign.tutsplus.com/tutorials/auto-formatting-input-value--cms-26745

    // either asign the value to a variable or use event.persist to allows us to access the event asynchronously
    const value = e.target.value;
    // use prevState to update only a key value pair
    setFormInput( prevState => ({ ...prevState, cardNumber : value }) );
    if(
      formInput.submitEnabled === false &&
      formInput.expiryDate !== null &&
      formInput.cardHolderName !== null &&
      formInput.cvv !== null
    ){
        setFormInput( prevState => ({ ...prevState, submitEnabled : true }) );
    }
  };

  const nameBlur = e => {
    setSelectedInput(inputNames.DEFAULT);
    // Cannot do this: nameErr.setAttribute("hidden", false)
    let nameVal = /^.{2,}$/g.test(e.target.value);
    
    if(!nameVal) {
      nameErr.current.hidden = false;
    }
    if(!nameErr.current.hidden && nameVal) {
      nameErr.current.hidden = true;
    }
  }

  const ccNumBlur = e => {
    setSelectedInput(inputNames.DEFAULT);
    // Cannot do this: ccErr.setAttribute("hidden", false)
    let cc = e.target.value.replace(/\s/g, "");
    let ccVal = /4[0-9]{12}(?:[0-9]{3})/g.test(cc);
    
    if(!ccVal) {
      ccErr.current.hidden = false;
    }
    if(!ccErr.current.hidden && ccVal ) {
      ccErr.current.hidden = true;
    }
  };

  return (
    <>
      <label className="uForm__label" htmlFor="name">Cardholder Name</label>
      <input
        className="uForm__input"
        type="text"
        id="name"
        name="name"
        placeholder="Name on Card"
        onChange={nameChange}
        onFocus={ () => setSelectedInput(inputNames.CARDHOLDERNAME) }
        onBlur={ nameBlur }
        required
      />
      <div className="uForm__err">
        <p className="uForm__msg" ref={nameErr} hidden>Please enter the cardholder name</p>
      </div>
      
      <label className="uForm__label" htmlFor="ccNumber">Card Number</label>
      <input
        className="uForm__input"
        type="text"
        id="ccNumber"
        name="ccNumber"
        placeholder="**** **** **** ****"
        onChange={ccNumChange}
        onFocus={ () => setSelectedInput(inputNames.CARDNUMBER) }
        onBlur={ ccNumBlur }
        required
      />
      <div className="uForm__err">
        <p className="uForm__msg" ref={ccErr} hidden>Please enter a valid VISA card number</p>
      </div>
    {/* since this is JSX styling, going to YOLO the css */}
    <style jsx>{`
      .uForm__label{
        font-size: 10px;
        color: #707070;
        margin-bottom: 10px;
      }

      .uForm__input{
        box-sizing: border-box;
        width: 260px;
        height: 25px;
        color: #707070;
        background: no-repeat;
        background-position: 3% center;
        border: none;
        border-bottom: 2px solid #b8b8b8;
        padding: 5px 5px 5px 15%;
      }
      .uForm__input:focus{
        outline:none;
      }
      input[type=text]:first-of-type {
        background-image: url(./icons/user-check-solid.svg);
      }
      input[type=text]:nth-of-type(2) {
        background-image: url(./icons/credit-card-regular.svg)
      }
      .uForm__err {
        display:flex;
        align-items: center;
        height: 25px;
      }
      .uForm__msg {
        font-size:12px;
        color: red;
        margin: 0;
      }
    `}</style>
    </>
  );
};

export default UpperForm;

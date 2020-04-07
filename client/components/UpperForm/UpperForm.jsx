import { useContext } from "react";
import { StoreContext } from "../../store";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

const UpperForm = () => {
  const { formInput, setFormInput, setSelectedInput } = useContext(StoreContext);

  const inputNames = {
    'CARDNUMBER' : 'CARDNUMBER',
    'EXPIRYDATE' : 'EXPIRYDATE',
    'CARDHOLDERNAME' : 'CARDHOLDERNAME'
  }

  const nameChange = e => {
    // either asign the value to a variable or use event.persist to allows us to access the event asynchronously
    const value = e.target.value;
    // use prevState to update only a key value pair
    setFormInput( prevState => ({ ...prevState, cardHolderName : value }) );
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
  };

  return (
    <>
      <label className="uForm__label" HTMLfor="name">Cardholder Name</label>
      <input
        className="uForm__input"
        type="text"
        id="name"
        name="name"
        placeholder="Name on Card"
        minlength="2"
        onChange={nameChange}
        onFocus={ () => setSelectedInput(inputNames.CARDHOLDERNAME) }
        required
      />
      {/* https://medium.com/free-code-camp/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27 */}

      <label className="uForm__label" HTMLfor="ccNumber">Card Number</label>
      <input
        className="uForm__input"
        type="text"
        id="ccNumber"
        name="ccNumber"
        placeholder="**** **** **** ****"
        onChange={ccNumChange}
        onFocus={ () => setSelectedInput(inputNames.CARDNUMBER) }
        required
      />
      <div className="uForm__err">
        {/* <p className="uForm__msg">{props}</p> */}
        <p className="uForm__msg">test</p>
        {/* how to implement the message? */}
      </div>
    {/* since this is JSX styling, going to YOLO the css */}
    <style jsx>{`
      .uForm__label{
        font-size:10px;
        font-color:#494949;
        margin-bottom: 10px;
      }

      .uForm__input{
        box-sizing: border-box;
        width: 100%;
        height: 25px;
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
        margin-bottom: 20px;
        background-image: url(./icons/user-check-solid.svg);
      }
      input[type=text]:nth-of-type(2) {
        background-image: url(./icons/credit-card-regular.svg)
      }
      .uForm__err {
        display:flex;
        align-items: center;
        height: 20px;
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

import { useContext } from "react";
import { StoreContext } from "../../store";

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
      {/* @TODO valid credit card number pattern to be revised */}
      <label className="uForm__label" HTMLfor="ccNumber">Card Number</label>
      <input
        className="uForm__input"
        type=""
        id="ccNumber"
        name="ccNumber"
        placeholder="Card Number"
        onChange={ccNumChange}
        onFocus={ () => setSelectedInput(inputNames.CARDNUMBER) }
        required
      />

    <style jsx>{`
      .uForm__label{
        font-size:14px;
        font-color:#494949;
      }

      .uForm__input{
        border: none;
        border-bottom: 2px solid #06070b;
      }
      .uForm__input:focus{
        outline:none;
      }
    `}</style>
    </>
  );
};

export default UpperForm;

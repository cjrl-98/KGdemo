import { useContext } from "react";
import { StoreContext } from "../../store";
// the design: https://xd.adobe.com/view/df6df630-4786-4eb5-44eb-4d5aaf9dc1f5-a95c/
const UpperForm = () => {
  const { formInput, setFormInput, setSelectedInput, inputNames } = useContext(StoreContext);

  const nameChange = e => {
    // either asign the value to a variable or use event.persist to allows us to access the event asynchronously
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

  return (
    <>
      <label className="uForm__label" htmlFor="name">Cardholder Name</label>
      <input
        className="uForm__input"
        type="text"
        id="name"
        name="name"
        placeholder="Name on Card"
        minLength="2"
        onChange={nameChange}
        onFocus={ () => setSelectedInput(inputNames.CARDHOLDERNAME) }
        onBlur={ () => setSelectedInput(inputNames.DEFAULT) }
        required
      />
      {/* https://medium.com/free-code-camp/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27 */}

      <label className="uForm__label" htmlFor="ccNumber">Card Number</label>
      <input
        className="uForm__input"
        type="text"
        id="ccNumber"
        name="ccNumber"
        placeholder="**** **** **** ****"
        onChange={ccNumChange}
        onFocus={ () => setSelectedInput(inputNames.CARDNUMBER) }
        onBlur={ () => setSelectedInput(inputNames.DEFAULT) }
        required
      />
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
        margin-bottom: 20px;
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

    `}</style>
    </>
  );
};

export default UpperForm;

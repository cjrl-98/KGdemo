import { useContext } from "react";
import { StoreContext } from "../../store";

const UpperForm = () => {
  const { formInput, setFormInput } = useContext(StoreContext);
  // console.log(setFormInput)

  const nameChange = e => {
    console.log("name changed to", e.target.value);
    setFormInput({
      cardHolderName: e.target.value
    });
  };

  const ccNumChange = e => {
    e.target.value = e.target.value.replace(/[^\d]+/g, "");
    // blocks non numerical string
    e.target.value = e.target.value.replace(/^(.{1,16}).*/g, '$1').replace(/(.{4})/g, '$1 ').trim();
    //gets the first 16 and the seperate them by 4s

    let v = e.target.value

    // https://webdesign.tutsplus.com/tutorials/auto-formatting-input-value--cms-26745
    var matches = v.match(/\d{4,16}/g);
    // https://www.peterbe.com/plog/cc-formatter
    // console.log(matches)
    // [\d]{1,3}

    setFormInput({
      cardNumber: e.target.value
    });
  };

  return (
    <>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name on Card"
        onChange={nameChange}
        required
      />
      {/* https://medium.com/free-code-camp/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27 */}
      {/* @TODO valid credit card number pattern to be revised */}
      <input
        type=""
        id="ccNumber"
        name="ccNumber"
        pattern="^5[1-5]\d{2}$"
        placeholder="Card Number"
        onChange={ccNumChange}
        required
      />
      {/* valid expiry date from 05-20 to 12-29 */}
    </>
  );
};

export default UpperForm;

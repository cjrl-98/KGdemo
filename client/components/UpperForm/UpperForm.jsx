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
    console.log("cc#", e.target.value);
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

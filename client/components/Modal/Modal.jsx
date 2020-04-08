import {useContext} from "react";
import {StoreContext} from "../../store";
import ReactModal from 'react-modal';


export default function Modal (props) {
  const { modalOpen, setModalOpen } = useContext(StoreContext);

  const modalHandler = e => {
    e.preventDefault();

    setModalOpen(!modalOpen);
  }
  return (
    <>
      <ReactModal
        isOpen={modalOpen}
        contentLabel="success message"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal__success">
          <p className="modal__p">💸 Thanks for your cash 💸</p>
          <figure className="modal__figure">
            <img className="modal__img" src="https://media.giphy.com/media/l41lFvtuqmey9QTAY/giphy.gif" alt="taking your cash gif"/>
          </figure>
          <button className="modal__btn" onClick={modalHandler}>Give me more cash 💰</button>
        </div>
      </ReactModal>

      <style JSX>{`
        .modal {
          max-width: 600px;
          min-width: 300px;
          min-height: 50%;
          margin: auto;
          
        }
        .overlay {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0,0,0,0.5);
          z-index: 100;
        }
        .modal__success {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 3px;
          padding: 20px;        
          box-sizing: border-box;
        }
        .modal__p {
          font-size: 30px;
          color: #828282;
          margin: 0;
        }
        .modal__btn {
          padding: 10px 20px;
          border: none;
          border-radius: 25px;
          margin: 10px 0 0 0;
        }
      `}</style>
    </>
  )
}
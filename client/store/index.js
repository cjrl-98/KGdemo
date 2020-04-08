import {useState, createContext} from 'react';

export const StoreContext = createContext();

export const StoreProvider = (props) => {
    const [selectedInput, setSelectedInput] = useState('');
    const [formInput, setFormInput] = useState(
        {   
            'submitEnabled' : false,
            "cardNumber" : null,
            "expiryDate" : null,
            "cardHolderName" : null,
            "cvv" : null
        }
    );

    const inputNames = {
        'DEFAULT' : 'DEFAULT',
        'CARDNUMBER' : 'CARDNUMBER',
        'EXPIRYDATE' : 'EXPIRYDATE',
        'CARDHOLDERNAME' : 'CARDHOLDERNAME',
        'CVV' : 'CVV'
    }

    const [modalOpen, setModalOpen] = useState(false)
    
    return(
        <StoreContext.Provider value={{inputNames, formInput, setFormInput, selectedInput, setSelectedInput, modalOpen, setModalOpen}}>
            {props.children}
        </StoreContext.Provider>
    );
}
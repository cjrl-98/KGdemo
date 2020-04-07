import {useState, createContext} from 'react';

export const StoreContext = createContext();

export const StoreProvider = (props) => {
    const [selectedInput, setSelectedInput] = useState('');
    const [formInput, setFormInput] = useState(
        {   
            "cardNumber" : '0000 0000 0000 0000',
            "expiryDate" : '09/20',
            "cardHolderName" : 'Christian Lagasca'
        }
    );

    const inputNames = {
        'DEFAULT' : 'DEFAULT',
        'CARDNUMBER' : 'CARDNUMBER',
        'EXPIRYDATE' : 'EXPIRYDATE',
        'CARDHOLDERNAME' : 'CARDHOLDERNAME'
    }

    console.log(selectedInput);
    return(
        <StoreContext.Provider value={{inputNames, formInput, setFormInput, selectedInput, setSelectedInput}}>
            {props.children}
        </StoreContext.Provider>
    );
}
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

    console.log(selectedInput);
    return(
        <StoreContext.Provider value={{formInput, setFormInput, selectedInput, setSelectedInput}}>
            {props.children}
        </StoreContext.Provider>
    );
}
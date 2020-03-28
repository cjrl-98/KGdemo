import {useState, createContext} from 'react';

export const StoreContext = createContext();

export const StoreProvider = (props) => {
    const [formInput, setFormInput] = useState(
        {   
            "cardNumber" : null,
            "expiryDate" : null,
            "cardHolderName" : null
        }
    );

    return(
        <StoreContext.Provider value={{formInput, setFormInput}}>
            {props.children}
        </StoreContext.Provider>
    );
}
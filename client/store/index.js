import {useState, createContext} from 'react';
import Form from "../components/Form";

export const StoreContext = createContext();

export const StoreProvider = (props) => {
    const [formInput, setFormInput] = useState(
        {   
            "cardNumber" : null,
            "expiryDate" : null,
            "cardHolderName" : null
        }
    );
    
    const [selectedInput, setSelectedInput] = useState(null);

    return(
        <StoreContext.Provider value={{formInput, setFormInput, selectedInput, setSelectedInput}}>
            {props.children}
            <Form/>
        </StoreContext.Provider>
    );
}
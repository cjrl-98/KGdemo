import {useState, createContext} from 'react';

export const StoreContext = createContext();
// const store = createContext(initialState);store actually contains Provider, so StoreContext.Provider
// console.log(StoreContext) // consumer and provider
// therefore you can actually destructure {Provider} = createContext();

export const StoreProvider = (props) => {
    // Can do ({children}) so props.children
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

    const [modalOpen, setModalOpen] = useState(false);

    const [valSwitch, setValSwitch] = useState({
        "nameVal" : true,
        "ccVal" : true,
        "expVal" : true,
        "cvvVal" : true
    });
    
    return(
        <StoreContext.Provider value={{inputNames, formInput, setFormInput, selectedInput, setSelectedInput, modalOpen, setModalOpen, valSwitch, setValSwitch}}>
            {props.children}
            {/* this has whatever you put inside the <StoreProvider>, ie the <Layout> and it looks like this if you have more than one [{…}, {…}]*/}
        </StoreContext.Provider>
    );
} 
// so basically StoreProvider is a component that has values declared inside, think react router render={}
// what I don't get is the props.children, which seems to be a placeholder for whatever is sandwiched between the <StoreProvider> <SomeComponent> </StoreProvider>
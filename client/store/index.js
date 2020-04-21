import {useState, createContext, useReducer} from 'react';

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

    const initialState = ({
        "nameVal" : true,
        "ccVal" : true,
        "expVal" : true,
        "cvvVal" : true
    });

    const reducer = (state, action) => {
        const {type, targetVal} = action;
        switch(type) {
            case 'name':
                setSelectedInput(inputNames.DEFAULT);
                let nameReg = /^.{2,}$/g.test(targetVal);
                // if input is blank, unhide the err message
                if(!nameReg) return {...state, nameVal : false};
                // if input is filled and message is displayed, hide the err message
                if(!state.nameVal && nameReg) return {...state, nameVal : true};

            case "ccNumber":
                setSelectedInput(inputNames.DEFAULT);
                let cc = targetVal.replace(/\s/g, "");
                let ccReg = /4[0-9]{12}(?:[0-9]{3})/g.test(cc);
                // if doesn't pass the test, turn hidden to false so it shows
                if(!ccReg) return {...state, ccVal : false}
                if(!state.ccVal && ccReg ) return {...state, ccVal : true};
                // if(!state.ccVal && ccReg ) ({...state, ccVal : true});
                // Note: dont do dumb shit like that ^, it's not returning a value

            default: 
                // not necessary here, because all cases are covered, if you forget ie. case !ccReg it has not state to return
                return {...state}
                // https://stackoverflow.com/questions/38015896/why-does-my-redux-reducer-think-my-state-is-undefined
                // https://www.freecodecamp.org/forum/t/simple-redux-store-returns-undefined/238919
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    
    return(
        <StoreContext.Provider value={{inputNames, formInput, setFormInput, selectedInput, setSelectedInput, modalOpen, setModalOpen, valSwitch, setValSwitch, state, dispatch}}>
            {props.children}
            {/* this has whatever you put inside the <StoreProvider>, ie the <Layout> and it looks like this if you have more than one [{…}, {…}]*/}
        </StoreContext.Provider>
    );
} 
// so basically StoreProvider is a component that has values declared inside, think react router render={}
// what I don't get is the props.children, which seems to be a placeholder for whatever is sandwiched between the <StoreProvider> <SomeComponent> </StoreProvider>
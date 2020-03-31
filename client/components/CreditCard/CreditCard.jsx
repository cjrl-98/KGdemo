import { useEffect, useContext } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { StoreContext } from '../../store';

export default function CreditCard () {
    const { selectedInput, formInput } = useContext(StoreContext);
    const bioBorderControl = useAnimation();
    const transition = { duration: 1, ease: [.26,.75,0,.99] };

    const inputNames = {
        'CARDNUMBER' : 'CARDNUMBER',
        'EXPIRYDATE' : 'EXPIRYDATE',
        'CARDHOLDERNAME' : 'CARDHOLDERNAME'
    }

    useEffect(()=>{
        if(selectedInput === inputNames.CARDNUMBER){bioBorderControl.start({ 
            top: "93px",
            left: "10px", 
            width: "215px",
            height: "28px", 
            transition: transition 
        })}
        if(selectedInput === inputNames.EXPIRYDATE){bioBorderControl.start({ 
            top: "117px",
            left: "12px", 
            width: "72px",
            height: "25px",
            transition: transition 
        })}
        if(selectedInput === inputNames.CARDHOLDERNAME){bioBorderControl.start({ 
            top: "138px",
            left: "12px",
            width: "230px",
            height: "25px",
            transition: transition 
        })}
    },[selectedInput])

    return(
        <>
            <article>
                <div className='credit'>
                    <img className='credit__visa' src='/icons/visa.svg' alt='visa logo'/>
                    <img className='credit__chip' src='/icons/credit-chip.svg' alt='credit card chip'/>
                    <p className='credit__number'>{formInput.cardNumber}</p>
                    <div className='credit__date'>
                        <p className='credit__valid-label'>VALID THRU</p>
                        <p className='credit__valid'>{formInput.expiryDate}</p>
                    </div>
                    <p className='credit__cardholder'>{formInput.cardHolderName}</p>
                    <motion.div animate={bioBorderControl} className="credit_selected-input"></motion.div>
                </div>
            </article>

            <style jsx>{`
                .credit{
                    position: relative;
                    width: 266px;
                    height: 178px;
                    border-radius: 15px;
                    background-image: url("/cardBackgrounds/hao-wang-pVq6YhmDPtk-unsplash.jpg");
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    color: #ffffff;
                    font-weight: 100;
                }

                .credit__visa{
                    position: absolute;
                    top: 25px;
                    right: 25px;
                }

                .credit__chip{
                    position: absolute;
                    top: 45px;
                    left: 20px;
                }

                .credit__number{
                    position: absolute;
                    top: 80px;
                    left: 25px;
                    font-size: 16px;
                    letter-spacing: 1px;
                    font-weight: 100;
                }

                .credit__valid-label{
                    position: absolute;
                    top: 118px;
                    left: 25px;
                    width: 16px;
                    font-size: 5px;
                    font-weight: 700;
                }

                .credit__valid{
                    position: absolute;
                    top: 113px;
                    left: 45px;
                    width: 16px;
                    font-size: 10px;
                    font-weight: 100;
                }

                .credit__cardholder{
                    position: absolute;
                    top: 130px;
                    left: 25px;
                    font-size: 12px;
                    font-weight: 100;
                }

                :global(.credit_selected-input){
                    position: absolute;
                    top: 0px; 
                    left: 0px; 
                    width: 266px;
                    height: 178px;
                    border-radius: 15px;
                    border: 2px solid #ffffff;
                }
            `}</style>
        </>
    )
}

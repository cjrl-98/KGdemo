import { useContext } from 'react';
import { StoreContext } from '../../store';

export default function CreditCard () {
    const { formInput, setFormInput} = useContext(StoreContext)
    
    return(
        <>
            <article>
                <div className='credit'>
                    <img className='credit_visa' src='/icons/visa.svg' alt='visa logo'/>
                    <img className='credit_chip' src='/icons/credit-chip.svg' alt='credit card chip'/>
                    <p className='credit_number'>0000 0000 0000 0000</p>
                    <div className='credit_date'>
                        <p className='credit_valid-label'>VALID THRU</p>
                    </div>
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

                .credit_visa{
                    position: absolute;
                    top: 25px;
                    right: 25px;
                }

                .credit_chip{
                    position: absolute;
                    top: 45px;
                    left: 20px;
                }

                .credit_number{
                    position: absolute;
                    top: 80px;
                    left: 25px;
                    font-size: 16px;
                    letter-spacing: 1px;
                }

                .credit_valid-label{
                    position: absolute;
                    top: 118px;
                    left: 25px;
                    width: 16px;
                    font-size: 5px;
                    font-weight: 700;
                }

            `}</style>
        </>
    )
}

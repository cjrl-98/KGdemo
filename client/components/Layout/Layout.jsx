import CreditCard from "../CreditCard";
import Form from "../Form";
import Title from "../Nav/Nav";
import Modal from '../Modal/Modal';

const Layout = () => (
    <>
        <main className="layout">
            <Modal/>
            <Title/>
            <div className="content">
                <section className="content__credit">
                    <CreditCard/>
                </section>
                <section className="content__form">
                    <Form/>
                </section>
            </div>
        </main>

        <style jsx>{`
            .layout{
                width: 100vw;
                height: 100%;
                max-width: 800px;
                padding: 40px 40px;
                border: 2px solid #707070;
                border-radius: 25px;
            }

            @media (min-width: 768px){
                .content{
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    margin-bottom: 60px;
                }

                .content__credit{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 60%;
                    padding-right: 30px;
                }

                .content__form{
                    display: flex;
                    width: 40%;
                }
            }
        `}</style>
    </>
)

export default Layout;

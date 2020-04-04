import CreditCard from "../CreditCard";
import Form from "../Form";
import Title from "../Nav/Nav";

const Layout = () => (
    <>
        <main className="layout">
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
                display:flex;
                flex-direction: column;
                align-items: center;
            }
            .content{
                display:flex;
            }
            .credit{
                width:
            }

            @media (min-width: 768px){
                .content{
                    display: flex;
                    justify-content: center;
                    width: 100%;
                }

                .content__credit{
                    display: flex;
                    justify-content: center;
                    width: 60%;
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

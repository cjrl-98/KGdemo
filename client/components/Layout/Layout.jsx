import CreditCard from "../CreditCard";
import Form from "../Form";

const Layout = () => (
    <>
        <main className="layout">
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
                display:flex;
                width: 100vw;
                height: 100%;
            }
            .content{
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

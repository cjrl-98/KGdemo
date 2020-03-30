import CreditCard from "../CreditCard";
import Form from "../Form";

const Layout = () => (
    <>
        <main className="layout">
            <CreditCard />
            <Form />
        </main>

        <style jsx>{`
            .layout{
                display:flex;
                width: 768px;
                height: 530px;
            }
        `}</style>
    </>
)

export default Layout;

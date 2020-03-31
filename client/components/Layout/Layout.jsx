import CreditCard from '../CreditCard';
const Layout = () => (
    <>
        <main className="layout">  
            <CreditCard/>
        </main>

        <style jsx>{`
            .layout{
                width: 768px;
                height: 530px;
            }
        `}</style>
    </>
)

export default Layout;

import Head from 'next/head'
import {StoreProvider} from '../store';
import Layout from '../components/Layout';


const Home = () => (
  <>
    <Head>
      <title>KGdemo</title>
      <link rel="icon" href="./icons/kg.svg" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;700&display=swap" rel="stylesheet"></link>
    </Head>
    
    <div className="container">
      <StoreProvider>
        <Layout/>
      </StoreProvider>
    </div>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: 'Montserrat';
        color: #848484;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </>
)

export default Home;

import Head from 'next/head'
import {StoreProvider} from '../store';
import Layout from '../components/Layout';


const Home = () => (
  <>
    <Head>
      <title>KGdemo</title>
      <link rel="icon" href="./icons/kg.svg" />
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
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;700&display=swap')

      @font-face {
        font-family: 'Muli'
        font-style: normal;
        font-weight: 100;
        src: url('../public/fonts/Muli-Light.ttf')
      }
      @font-face {
        font-family: 'Muli'
        font-style: normal;
        font-weight: 300;
        src: url('../public/fonts/Muli-Regular.ttf')
      }
      @font-face {
        font-family: 'Muli'
        font-style: normal;
        font-weight: 500;
        src: url('../public/fonts/Muli-Medium.ttf')
      }
      @font-face {
        font-family: 'Muli'
        font-style: normal;
        font-weight: 700;
        src: url('../public/fonts/Muli-Bold.ttf')
      }
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: 'Muli', 'Montserrat';
        color: #848484;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </>
)

export default Home;

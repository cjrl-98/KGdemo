export default function Title() {
  return (
    <>
      <div className="nav">
        <div className="nav__logo">
          <figure className="nav__figure">
            <img className="nav__img" src="./icons/kg.svg" alt="KGpay" />
          </figure>
          <span>KGpay</span>
        </div>
        <ul className="nav__list">
          <li className="nav__section">Customer Info</li>
          <li className="nav__section">Shipping Info</li>
          <li className="nav__section active">Payment Info</li>
        </ul>
      </div>
      <style jsx>{`
        .nav,
        .nav__figure,
        .nav__list,
        .nav__section {
          margin: 0;
          padding: 0;
        }
        .nav,
        .nav ul {
          display: flex;
          justify-content: space-between;
        }
        .nav {
          width: 100%;
        }
        .nav__logo {
          display: flex;
          align-items: center;
          width: 100px;
        }
        .nav ul {
          flex-grow:1;
        }
        .nav__section {
          list-style: none;
        }
        .nav__figure {
          margin-right: 5px; 
        }
        
        .nav__section {
          width: calc(100% / 3);
          text-align: center;
          border-bottom: 2px solid #b8b8b8;
        }
        .active {
          color: #f0425c;
          border-bottom: 2px solid #f0425c;
        }
      `}</style>
    </>
  );
}

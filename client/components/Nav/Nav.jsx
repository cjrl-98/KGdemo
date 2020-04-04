export default function Title() {
  return (
    <>
      <div className="nav">
        <figure className="nav__figure">
          <img  className="nav__img" src="./icons/kg.svg" alt="logo" />
        </figure>
        <ul className="list">
          <li className="nav__section">Customer Info</li>
          <li className="nav__section">Shipping Info</li>
          <li className="nav__section">Payment Info</li>
        </ul>
      </div>
      <style jsx>{`
        .nav,.nav ul {
          display:flex;
        }
      `}</style>
    </>
  );
}

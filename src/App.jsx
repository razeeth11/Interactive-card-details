import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="card-details">
        <div className="front-image">
          <div className="big"></div>
          <div className="small"></div>
          <img
            src="images/bg-card-front.png"
            alt="images/bg-card-front.png"
            width="350px"
          />
          <p className="front-card-number">0000 0000 0000 0000</p>
          <p className="front-card-name">Jane Appliance</p>
          <p className="front-card-expiry">00/00</p>
        </div>
        <div className="back-image">
          <img
            src="images/bg-card-back.png"
            alt="images/bg-card-back.png"
            width="350px"
          />
          <p className="back-card-cvv">000</p>
        </div>
      </div>

      <div className="data-values">
        <form action="#" className="form-data">
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input placeholder="e.g. Jane Appleseed" type="text" id="name" />
          <label htmlFor="number">CARD NUMBER</label>
          <input placeholder="e/g. 1234 56789 9123 0000" type="number" id="number" />
          <div className="div">
            <div className="div-one">
              <label htmlFor="mm">EXP DATE(MM/YY)</label> <br />
              <input placeholder="MM" className="month" type="number" id="mm" />
              <label htmlFor="yy"></label>
              <input placeholder="YY" className="year" type="number" id="yy" />
            </div>
            <div className="div-two">
              <label htmlFor="cvv">CVV</label> <br />
              <input placeholder="
              e.g. 123" className="cvv" type="text" id="cvv" />
            </div>
          </div>
          <button>Confirm</button>
        </form>
      </div>
    </div>
  );
}

export default App;

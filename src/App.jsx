import "./App.css";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [state,setState] = useState(true)

  const style = {
    backgroundColor: " hsl(278, 68%, 11%)",
    color: "white",
    padding: "10px",
    marginTop: "10px",
  };

  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      cardName: "",
      cardExpiryMonth: "",
      cardExpiryYear: "",
      cardCvv: "",
    },
    onSubmit: () =>
      console.log({
        cardName: name,
        cardNumber: number,
        cardExpiryMonth: month,
        cardExpiryYear: year,
        cardCvv: cvv,
      }),
  });

  return (
    <div className="App">
      <div className="card-details">
        <div className="front-image">
          <div className="big"></div>
          <div className="small"></div>
          <img src="images/bg-card-front.png" alt="images/bg-card-front.png" />
          <p className="front-card-number">
            {number ? number : "0000 0000 0000 0000"}
          </p>
          <p className="front-card-name">{name ? name : "-----------------"}</p>
          <p className="front-card-expiry">
            {month ? month : "00"}/{year ? year : "00"}
          </p>
        </div>
        <div className="back-image">
          <img src="images/bg-card-back.png" alt="images/bg-card-back.png" />
          <p className="back-card-cvv">{cvv ? cvv : "000"}</p>
        </div>
      </div>

      <div className="data-values">
        {state ? <form onSubmit={formik.handleSubmit} className="form-data">
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            type="text"
            onChange={(ev) => setName(ev.target.value)}
            name="cardName"
            placeholder="e.g. Jane Appleseed"
            id="name"
          />
          <label htmlFor="number">CARD NUMBER</label>
          <input
            type="tel" maxLength="19"
            onChange={(ev) => setNumber(ev.target.value)}
            name="cardNumber"
            placeholder="e/g. 1234 56789 9123 0000"
            id="number"
          />
          <div className="div">
            <div className="div-one">
              <label htmlFor="mm">EXP DATE(MM/YY)</label> <br />
              <input
                type="tel"
                maxLength="2"
                onChange={(ev) => setMonth(ev.target.value)}
                name="cardExpiryMonth"
                placeholder="MM"
                className="month"
                id="mm"
              />
              <label htmlFor="yy"></label>
              <input
                type="tel"
                maxLength="2"
                onChange={(ev) => setYear(ev.target.value)}
                name="cardExpiryYear"
                placeholder="YY"
                className="year"
                id="yy"
              />
            </div>
            <div className="div-two">
              <label htmlFor="cvv">CVV</label> <br />
              <input
                type="tel"
                maxLength="3"
                onChange={(ev) => setCvv(ev.target.value)}
                name="cardCvv"
                placeholder="e.g. 123"
                className="cvv"
                id="cvv"
              />
            </div>
          </div>
          <Button onClick={()=> setState(false)} className="button" sx={style} type="submit">
            Confirm
          </Button>
        </form> : <End setState={setState} style={style}/>}
      </div>
    </div>
  );
}


function End({setState , style}){
  return(
    <div className="End">
       <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
       <h1>THANK YOU !</h1>
       <p>We've added your card details</p>
       <Button onClick={()=> setState(true)} className="button" sx={style} type="submit">
            Continue
          </Button>
    </div>
  )
}

export default App;

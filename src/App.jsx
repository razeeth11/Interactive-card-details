import './App.css'

function App() {

  return (
    <div className="App">
       <div className="card-details">
       <div className="front-image">
         <div className="big"></div>
         <div className="small"></div>
          <img src="images/bg-card-front.png" alt="images/bg-card-front.png" width="350px"/>
          <p className='front-card-number'>0000 0000 0000 0000</p>
          <p className='front-card-name'>Jane Appliance</p>
          <p className='front-card-expiry'>00/00</p>
       </div>
       <div className="back-image">
          <img src="images/bg-card-back.png" alt="images/bg-card-back.png" width="350px"/>
          <p className='back-card-cvv'>000</p>
       </div>
       </div>

       <div className="data-values">
          
       </div>
    </div>
  )
}

export default App

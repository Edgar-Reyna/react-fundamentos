import React from 'react'
import ReactDOM from 'react-dom'

const TarjetaFruta=(props)=>(
  <div> 
    <h3>{props.name}</h3>
    <hr/>
    <p>$ {props.price}</p>
  </div>
)

var frutaExotica='Fruta del Dragon'

const App=()=>(
  <div>
    <TarjetaFruta name={'Sandia'} price={2.00}/>
    <TarjetaFruta name={'Naranja'} price={1.50}/>
    <TarjetaFruta name={`${frutaExotica}`} price={3.30}/>
  </div>
)

ReactDOM.render(<App/>,document.getElementById('root'))
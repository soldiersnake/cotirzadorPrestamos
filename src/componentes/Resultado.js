import React from 'react'

const Resultado = ({total, plazo, cantidad}) => {
  return (
    <div className='u-full-windth resultado'>
        <h2>Resumen</h2>
        <p>La cantidad solicitada es: ${cantidad} </p>
        <p>A pagar en: ${plazo} </p>
        <p>Su pago mensual es de: ${ (total / plazo).toFixed(2) } </p>
        <p>Total a pagar: ${(total).toFixed(2)} </p>
        
    </div>
  )
};

export default Resultado;

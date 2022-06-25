import {memo} from 'react'

export const Small = memo(({value}) => {
    // Nosotros podemos memorizar esos componentes lo cual es recomendado cuando los componentes son muy grandes o cuando solo hay proceso pesado.
    // el 'memo' es una función que le dice a React, Memoriza este componente.
    console.log('Me volvi a dibujar :/');
  return (
    <small>{value}</small>
  )
})

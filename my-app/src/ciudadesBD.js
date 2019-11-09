import React from 'react'
 
const CiudadesList = ({ciudades}) =>
  ciudades.map(ciudad => <li key={ciudad}>{ciudad}</li>)
 
 
export default CiudadesList
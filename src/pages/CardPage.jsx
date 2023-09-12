import React from 'react'
import ComponentsMenu from '../components/ComponentsMenu'
import CardComponent from "../components/CardComponent"

const CardPage = () => {
  return (
    <div className='p-10 flex justify-center'>
        <ComponentsMenu />
        <CardComponent />
    </div>
  )
}

export default CardPage
import React from 'react'
import BadgeComponent from '../components/BadgeComponent'
import ComponentsMenu from '../components/ComponentsMenu'

const BadgePage = () => {
  return (
    <div className='p-10 flex justify-center'>
    <ComponentsMenu />
    <BadgeComponent />
</div>
  )
}

export default BadgePage
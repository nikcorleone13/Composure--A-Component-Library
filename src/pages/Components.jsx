import React from 'react'
import { Link } from 'react-router-dom';

export const components = [
    {
      id: 1,
      component: 'Alert',
      address: '/components/alert'
    },
    {
      id: 2,
      component: 'Avatar',
      address: '/components/avatar'
    },
    {
      id: 3,
      component: 'Badge',
      address: '/components/badge'
    },
    {
      id: 4,
      component: 'Button',
      address: '/components/button'
    },
    {
      id: 5,
      component: 'Card',
      address: '/components/card'
    },
    {
      id: 6,
      component: 'Image',
      address: '/components/image'
    },
    {
      id: 7,
      component: 'Typography',
      address: '/components/typography'
    }
  ];
    
const Components = () => {
  return (
    <div className=' h-screen '>
    <div className=' m-auto pt-20 w-[60%] flex justify-evenly flex-wrap gap-16'>
        {
            components.map((item) =>{
                return(
                    <div
                    className='bg-bgPrimary text-3xl text-center w-[250px] py-6 rounded-lg border-4 border-textPrimary text-textPrimary font-semibold hover:scale-105 duration-200  '>
                        <Link to= {item.address}>
                            <h1>{item.component}</h1>

                        </Link>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Components;

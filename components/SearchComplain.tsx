import { nigeriaStates } from '@/constants'
import React from 'react'

const SearchComplain = () => {
  return (
      <select className='select select-bordered w-full max-w-md bg-white my-2 mx-auto'>
          {nigeriaStates.map((state, index) => (
              <option key={index}>{ state}</option>
       ))}   
    </select>
  )
}

export default SearchComplain
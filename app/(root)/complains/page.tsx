import ComplainShowCase from '@/components/ComplainShowCase'
import ComplainSidebar from '@/components/ComplainSidebar'
import React from 'react'

const ComplainsHomepage = () => {
  return (
    <div className='flex flex-row'>
      <ComplainSidebar />
      <ComplainShowCase />
    </div>
  )
}

export default ComplainsHomepage
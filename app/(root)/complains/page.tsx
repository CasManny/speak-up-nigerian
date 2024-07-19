import ComplainShowCase from '@/components/ComplainShowCase'
import ComplainSidebar from '@/components/ComplainSidebar'
import Header from '@/components/Header'
import React from 'react'

const ComplainsHomepage = async () => {

  return (
    <>
    <Header />
    <div className='flex flex-row'>
      <ComplainSidebar />
      <ComplainShowCase />
    </div>
    </>
  )
}

export default ComplainsHomepage
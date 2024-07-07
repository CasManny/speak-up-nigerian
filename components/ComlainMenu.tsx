import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const menu = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Dashboard",
      href: "/dasboard"
    }
  ]
const ComplainMenu = () => {
  return (
      <div className='flex gap-2'>
          {menu.map((link, index) => (
            <Link href={link.href} key={index}>
              <Button>{ link.label}</Button>
            </Link>
          ))}
    </div>
  )
}

export default ComplainMenu
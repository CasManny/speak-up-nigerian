'use client'
import { createUser, navigationLinks } from '@/constants'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { AlignJustify } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const path = usePathname()
  return (
    <div className=' w-full p-8 sticky top-0 left-0 bg-background z-50'>
        <nav className="flex justify-between items-center">
            <Link href={'/'} className='text-2xl'> <span className='text-green-3'>Speak</span> up 🇳🇬</Link>
            <ul className=' gap-4 justify-between hidden md:flex '>
                {navigationLinks.map((link, index) => {
                    return (
                        <li key={index} className={`text-xl ${path === link.href && 'text-green-500'}`}>
                            <Link href={link.href}>{link.label}</Link>
                            <span className={`bg-green-400 h-[2px] w-full ${path === link.href && 'block'}`} />
                        </li>
                    )
                })}
              </ul>
              {/* // MOBILE NAVIGATION */}
              <Sheet>
      <SheetTrigger asChild className='md:hidden'>
        <Button variant="outline"><AlignJustify className='text-green-1' /></Button>
      </SheetTrigger>
      <SheetContent>
      <ul className=' gap-4 flex flex-col'>
                {navigationLinks.map((link, index) => {
                    return (
                        <li key={index} className={`text-xl ${path === link.href && 'text-green-500'}`}>
                            <Link href={link.href}>{link.label}</Link>
                            <span className={`bg-green-400 h-[2px] w-full ${path === link.href && 'block'}`} />
                        </li>
                    )
                })}
                          <div className="flex flex-col gap-2 mt-10">
                              {createUser.map((item, index) => (
                                  <Link href={item.href} key={index}>
                                      <Button className='bg-green-2'>{ item.label}</Button>
                                  </Link>
                              ))}
                          </div>
              </ul>
        
      </SheetContent>
    </Sheet>
        </nav>
    </div>
  )
}

export default Header
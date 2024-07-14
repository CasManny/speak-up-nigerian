import { footerLinks } from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-between items-center p-10'>
      <h1>&copy; 2024 Speak up 🇳🇬.{" "} All Rights Reserved</h1>
      <div className="nav-links flex flex-col my-3">
        {footerLinks.map((link) => (
          <Link href={link.href} className=''>{ link.label}</Link>
        ))}
      </div>

    </div>
  )
}

export default Footer
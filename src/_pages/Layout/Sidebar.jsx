import React from 'react'
import SidebarProfileSec from '../../_components/SideBarSections/ProfileSec'
import NavLinks from '../../_components/SideBarSections/NavLinks'
import Contacts from '../../_components/SideBarSections/Contacts'

export default function Header() {
  return (
    <div className='flex flex-col py-5 gap-5 ml-5'>
      <section className='Logo-section text-center mb-5'>
        {/* <img src='https://thumbs.dreamstime.com/z/digital-tech-icon-vector-set-technologies-illustration-sign-collecion-information-symbol-data-center-logo-digital-tech-icon-vector-185758328.jpg'/> */}
        <h1 className='font-bold text-2xl'>Coders</h1>
      </section>
      <SidebarProfileSec />
      <div className='bg-[#343434] w-full h-px'></div>
      <NavLinks />
      <div className='bg-[#343434] w-full h-px'></div>
      <Contacts />
    </div>
  )
}

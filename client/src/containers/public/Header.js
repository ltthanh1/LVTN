import React from 'react'
import logo from '../../assets/logo.svg'
import { Button } from '../../components'



const Header = () => {
  return (
    <div className='w-1100 flex items-center justify-between bg-red-300'>
      <img
        src={logo}
        alt="logo"
        className='w-[240px] h-[70px] object-contain'
      />
      <div className='flex items-center gap-1'>
        <Button text={'Đăng ký'} textColor='text-white' bgColor='bg-[#3961fb]' />
        <Button text={'Đăng nhập'} textColor='text-white' bgColor='bg-[#3961fb]' />
        <Button text={'Đăng tin mới'} textColor='text-white' bgColor='bg-secondary2' />
      </div>
    </div>
  )
}

export default Header
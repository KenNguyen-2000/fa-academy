import React from 'react'
import { LayoutedList } from '../../components'
import { Female, Male } from '../../Icons'

const datas = new Array(10).fill({
  id: 1,
  fullName: 'Nguyen Thanh Kien',
  email: 'ngkien299@gmail.com',
  dob: '29/09/2000',
  gender: 'Male',
  level: 'Fresher',
  type: 'Admin',
  status: 'Off class',
})

const UserList = () => {
  return (
    <div className="h-full w-full flex flex-col gap-8">
      <div className="bg-main w-full py-4 px-8 border-t border-solid border-[#fff] flex items-center tracking-wide text-2xl text-[#fff] ">
        User List
      </div>
      <LayoutedList
        datas={datas.map(item => ({
          ...item,
          gender: item.gender === 'Male' ? <Male /> : <Female />,
        }))}
      />
    </div>
  )
}

export default UserList

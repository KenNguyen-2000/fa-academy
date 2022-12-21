import React from 'react';
import './LayoutedList.styles.scss';
const label = [
  { key: 'id', name: 'Id' },
  { key: 'fullName', name: 'Full Name' },
  { key: 'email', name: 'Email' },
  { key: 'dob', name: 'Date of birth' },
  { key: 'gender', name: 'Gender' },
  { key: 'level', name: 'Level' },
  { key: 'type', name: 'Type' },
  { key: 'status', name: 'Status' },
];

const datas = new Array(10).fill({
  id: 1,
  fullName: 'Nguyen Thanh Kien',
  email: 'ngkien299@gmail.com',
  dob: '29/09/2000',
  gender: 'Male',
  level: 'Fresher',
  type: 'Trainee',
  status: 'In class',
});
const LayoutedList = () => {
  return (
    <div className="w-full">
      <div
        className={`layouted-list__header w-full rounded-tl-[10px] rounded-tr-[10px] grid auto-rows-auto    bg-main py-[5px] pr-[10px] pl-5 font-bold text-[#fff]`}
      >
        {label.map((item) => (
          <div key={item.key}>{item.name}</div>
        ))}
      </div>
      {datas.map((data, index) => (
        <div
          key={index}
          className={`layouted-list__header w-full rounded-tr-[10px] grid  py-[5px] pr-[10px] pl-5 font-bold text-[#000]`}
        >
          {label.map((item, key) => (
            <div key={key}>{data[item.key]}</div>
          ))}
          <div>hello</div>
        </div>
      ))}
    </div>
  );
};

export default LayoutedList;

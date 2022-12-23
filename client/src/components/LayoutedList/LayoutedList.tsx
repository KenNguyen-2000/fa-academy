import React, { useState } from 'react';
import './LayoutedList.styles.scss';
import { MoreHorizontal, Sort } from '../../Icons';
const label = [
  { key: 'id', name: 'ID' },
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
  type: 'Admin',
  status: 'Off class',
});

const typeStyle = (type: string) =>
  `${
    ['trainee', 'trainer'].includes(type.toLowerCase())
      ? 'bg-main'
      : 'bg-green_main'
  } rounded-[50px] py-[5px] px-[15px] text-[#fff] min-w-[80px]`;

const statusStyle = (status: string) => {
  const statusColors = new Map([
    ['in class', 'bg-main'],
    ['on boarding', 'bg-orange_main'],
    ['off class', 'bg-un_modified'],
  ]);

  return `${statusColors.get(
    status.toLowerCase()
  )} rounded-[50px] py-[5px] px-[15px] text-[#fff] min-w-[80px]`;
};

const actions = {
  label: 'Managae',
  actionList: [
    {
      icon: '',
      text: '',
      subActionList: [
        {
          icon: '',
          text: '',
        },
      ],
    },
  ],
};

const LayoutedList = () => {
  const [chosen, setChose] = useState({ id: -1, isOpen: false });

  const renderAction = (index: number) => {
    return (
      <span className="relative">
        <MoreHorizontal
          className="cursor-pointer"
          onClick={() => {
            if (index !== chosen.id) {
              setChose({ id: index, isOpen: true });
            } else {
              setChose({ ...chosen, isOpen: false });
            }
          }}
        />
        <div
          className={`layouted-list-actions w-40 h-48 rounded-[10px] absolute top-full right-1/2 bg-sub_info z-20 ${
            index === chosen.id && chosen.isOpen ? 'scale-100' : 'scale-0'
          } flex flex-col`}
        ></div>
      </span>
    );
  };

  return (
    <div className="w-full rounded-tl-[10px] rounded-tr-[10px] flex flex-col  overflow-hidden">
      <div
        className={`w-full flex justify-between py-[5px] pl-5 pr-[10px] bg-main`}
      >
        {label.map((item) => (
          <div
            key={item.key}
            className="text-left py-[5px] px-[10px] text-sm font-bold text-[#fff]"
          >
            <span className="flex">
              {item.name}
              <Sort fill="#fff" className="w-5 h-5 cursor-pointer" />
            </span>
          </div>
        ))}
        <div className="text-left py-[5px] px-[10px] w-32"></div>
      </div>
      <div className="w-full flex flex-col">
        {datas.map((data, index) => (
          <div
            key={index}
            className={`w-full h-[50px] rounded-tr-[10px] p-[10px] pl-5 flex justify-between`}
          >
            {label.map((item, key) => (
              <div
                key={key}
                className={`py-[5px] px-[10px] text-sm text-[#000] ${
                  item.key === 'fullName' ? 'font-bold' : ''
                }`}
              >
                <span
                  className={`${
                    item.key === 'type' ? typeStyle(data[item.key]) : ''
                  } ${
                    item.key === 'status' ? statusStyle(data[item.key]) : ''
                  }`}
                >
                  {data[item.key]}
                </span>
              </div>
            ))}
            <div className="py-[5px] pr-8 text-sm text-[#000] w-32 flex justify-end">
              {renderAction(index)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayoutedList;

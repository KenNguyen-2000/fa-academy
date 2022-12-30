import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BookOpen,
  Home,
  MenuCollapse,
  MenuOpen,
  Biotech,
  School,
  CalendarToday,
  Group,
  Folder,
  Settings,
  NaviOpen,
} from '../../Icons'
import { IIcon } from '../../interface'
import './Sidebar.styles.scss'

const menu = [
  {
    label: 'Home',
    icon: ({ className, style, fill }: IIcon) => (
      <Home className={className} style={style} fill={fill} />
    ),
  },
  {
    label: 'Syllabus',
    icon: ({ className, style, fill }: IIcon) => (
      <BookOpen className={className} style={style} fill={fill} />
    ),
    subFolders: [
      {
        label: 'View Syllabus',
      },
      {
        label: 'Create Syllabus',
      },
    ],
  },
  {
    label: 'Training Program',
    icon: ({ className, style, fill }: IIcon) => (
      <Biotech className={className} style={style} fill={fill} />
    ),
    subFolders: [
      {
        label: 'View Program',
      },
      {
        label: 'Create Program',
      },
    ],
  },
  {
    label: 'Class',
    icon: ({ className, style, fill }: IIcon) => (
      <School className={className} style={style} fill={fill} />
    ),
    subFolders: [
      {
        label: 'View Class',
      },
      {
        label: 'Create Class',
      },
    ],
  },
  {
    label: 'Training Calendar',
    icon: ({ className, style, fill }: IIcon) => (
      <CalendarToday className={className} style={style} fill={fill} />
    ),
  },
  {
    label: 'User Management',
    icon: ({ className, style, fill }: IIcon) => (
      <Group className={className} style={style} fill={fill} />
    ),
    subFolders: [
      {
        label: 'User List',
      },
      {
        label: 'User Role',
      },
    ],
  },
  {
    label: 'Learning Materials',
    icon: ({ className, style, fill }: IIcon) => (
      <Folder className={className} style={style} fill={fill} />
    ),
  },
  {
    label: 'Setting',
    icon: ({ className, style, fill }: IIcon) => (
      <Settings className={className} style={style} fill={fill} />
    ),
  },
]

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const navigate = useNavigate()

  const handleOpenSubmenu = (e: any) => {
    console.log(e.currentTarget)
    if (isCollapsed) {
      setIsCollapsed(false)
    }
    const el = e.currentTarget.nextSibling
    el.classList.toggle('openSubMenu')
  }

  const handleCollapseMenu = () => setIsCollapsed(!isCollapsed)

  return (
    <div
      className={`w-72 py-8 px-3 bg-[#EDF2F7] flex flex-col gap-6 transition-all ${
        !isCollapsed ? '' : 'w-12'
      }`}
    >
      {isCollapsed ? (
        <MenuCollapse onClick={handleCollapseMenu} className="cursor-pointer" />
      ) : (
        <MenuOpen onClick={handleCollapseMenu} className="cursor-pointer" />
      )}
      {menu.map(item => {
        return (
          <div key={item.label} className="flex flex-col">
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={
                item.subFolders
                  ? handleOpenSubmenu
                  : () =>
                      navigate(`/${item.label.replace(' ', '-').toLowerCase()}`)
              }
            >
              <div className="h-full flex gap-[10px] items-center text-blue_main text-lg whitespace-nowrap">
                {item.icon({ className: 'w-6 h-6 flex-shrink-0' })}
                <span
                  className={`${
                    isCollapsed ? 'opacity-0 pointer-events-none' : ''
                  }`}
                >
                  {item.label}
                </span>
              </div>
              {item.subFolders && !isCollapsed ? <NaviOpen /> : null}
            </div>
            {item.subFolders ? (
              <div className="sidebar-submenu__wrapper flex flex-col gap-[5px]">
                {item.subFolders.map(sub => (
                  <div
                    key={sub.label}
                    className="w-full flex items-center justify-center bg-box text-blue_main text-lg hover:font-semibold cursor-pointer"
                    onClick={() =>
                      navigate(`/${sub.label.replace(' ', '-').toLowerCase()}`)
                    }
                  >
                    {sub.label}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar

'use client'
import { LuContact2, LuLayoutDashboard } from "react-icons/lu";
import { HiUserCircle } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Hamburger from 'hamburger-react'
import { AiOutlineMenuFold } from "react-icons/ai";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaLayerGroup } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { TbLayersIntersect } from "react-icons/tb";
import { RiMessage2Line } from "react-icons/ri";

export default function AdminSidebar({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const path = usePathname();
  const RootPath = '/xyz/admin'

  const tabList = [
    {
      title: 'Dashbord',
      icon: <LuLayoutDashboard className='text-lg' />,
      link: "/xyz/admin"
    },
    {
      title: 'Projects',
      icon: <FaLayerGroup className='text-lg' />,
      subItem: [
        {
          title: 'All Projects',
          icon: <FiCircle className='text-xs' />,
          link: RootPath + '/projects',
          subItem: []
        },
        {
          title: 'Add New Project',
          icon: <FiCircle className='text-xs' />,
          link: RootPath + '/projects/add-project',
          subItem: []
        },

      ]
    },
    {
      title: 'Sector',
      icon: <TbLayersIntersect className='text-lg' />,
      subItem: [
        {
          title: 'All Sectors',
          icon: <FiCircle className='text-xs' />,
          link: RootPath + '/sector',
          subItem: []
        },,
        {
          title: 'Add New Sector',
          icon: <FiCircle className='text-xs' />,
          link: RootPath + '/sector/add-sector',
          subItem: []
        },
      ]
    },
    {
      title: 'Clients',
      icon: <HiUserCircle className='text-lg' />,
      subItem: [
        {
          title: "Clients List",
          icon: <FiCircle className='text-xs' />,
          link: RootPath + '/clients',
          subItem: []
        },
        {
          title: "Add Client",
          icon: <FiCircle className='text-xs' />,
          link: RootPath + '/clients/add-client',
          subItem: []
        },

      ]
    },
    {
      title: 'Peoples',
      icon: <IoPeopleOutline className='text-lg' />,
      subItem: [
        {
          title: "All Peoples",
          icon: <FiCircle className='text-xs' />,
          link: RootPath + '/peoples',
          subItem: []
        },

        {
          title: "Edit Chairmen",
          icon: <FiCircle className='text-xs' />,
          link: RootPath + '/peoples/edit-chairmen',
          subItem: []
        },
        {
          title: "Edit Managing Director",
          icon: <FiCircle className='text-xs' />,
          link: RootPath + '/peoples/edit-md',
          subItem: []
        },
        {
          title: "Add Project Manager",
          icon: <FiCircle className='text-xs' />,
          link: RootPath + '/peoples/add-project-manager',
          subItem: []
        },

      ]
    },
    {
      title: 'Edit Contact',
      icon: <LuContact2 className='text-lg' />,
      link: RootPath + '/edit-contact'
    },
    {
      title: 'Message',
      icon: <RiMessage2Line className='text-lg' />,
      link: RootPath + '/message'
    },
    {
      title: 'Settings',
      icon: <IoMdSettings className='text-lg' />,
      subItem: [
        {
          title: "Change Password",
          icon: <FiCircle className='text-xs' />,
          link: RootPath + '/settings/change-password',
          subItem: []
        },

      ]
    },

  ];

  return (
    <div>
      <div>
        <div className='flex'>
          <Sidebar collapsed={collapsed} onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint='lg' className={`h-screen overflow-auto text-white font-poppins`} backgroundColor='#1C2434' width="300px">
            <Menu className='flex flex-col'
              menuItemStyles={{
                button: {
                  ':hover': {
                    backgroundColor: '#333A48',
                    transition: '0.2s',
                    color: 'white',
                  },
                  [`&.active`]: {
                    backgroundColor: '#333A48',
                    color: 'white',
                  },
                },
              }}
            >
              {/* //user section */}
              <div className=''>
                <Link className='flex justify-center items-center' href="/">
                  <div className='flex flex-row items-center justify-center my-10'>

                    <Image className="h-auto md:h-auto lg:h-auto w-8 md:w-14 lg:w-20 xl:w-24 xl:h-auto" src='/nanco-logo-white.png' height={200} width={200} alt="logo" />
                    {/* <h1 className="uppercase text-lg md:text-2xl lg:text-3xl font-bold text-[#1451D2] font-unbounded flex flex-col">
                                    DLJ
                                </h1> */}

                    {/* {
                                            !collapsed && <h2 className='font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-200 to-rose-500 uppercase'>Dlz</h2>
                                        } */}
                  </div>

                </Link>

              </div>

              {/* // start tab */}
              <div className={`${!collapsed && 'p-3'}`}>

                {
                  tabList?.map((tabs, indx) => {
                    return tabs?.subItem ?
                      <SubMenu key={indx + tabs.title}
                        icon={tabs?.icon}
                        label={tabs?.title}
                        className={`font-normal text-white my-3 text-base uppercase`}>

                        {
                          tabs?.subItem?.map((tabinnerList, indx) => {
                            return tabinnerList?.subItem.length > 0 ? <SubMenu key={indx + tabinnerList.title}
                              icon={tabinnerList?.icon} label={tabinnerList?.title}
                              className={`text-sm uppercase font-medium bg-[#333A48]`}>
                              {
                                tabinnerList?.subItem?.map((tab, indx) => {
                                  return <MenuItem key={tab?.title + indx}
                                    icon={tab?.icon}
                                    component={<Link className={`${tab?.link == path ? 'bg-[#333A48]' : 'bg-[#1C2434]'} font-medium uppercase`} href={tab?.link} />}>
                                    {tab?.title}
                                  </MenuItem>
                                })
                              }

                            </SubMenu>
                              :
                              <MenuItem
                                className="text-sm"
                                key={indx + tabinnerList.title}
                                icon={tabinnerList?.icon}
                                component={<Link className={`${tabinnerList?.link == path ? 'bg-[#333A48]' : 'bg-[#1C2434]'} font-medium uppercase`} href={tabinnerList?.link} />}>
                                {tabinnerList?.title}
                              </MenuItem>
                          })

                        }

                      </SubMenu>

                      :

                      <MenuItem
                        className="my-3"
                        key={indx + tabs.title}
                        icon={tabs?.icon}
                        component={<Link className={`${tabs?.link == path ? 'bg-[#333A48]' : 'bg-[#1C2434]'} font-medium uppercase`} href={tabs?.link} />}>
                        {tabs?.title}
                      </MenuItem>
                  })
                }

              </div>

            </Menu>
          </Sidebar>


          <main className={`w-full ${collapsed ? 'lg:w-[calc(100vw-80px)]' : 'lg:w-[calc(100vw-300px)]'}`}>

            <div className='flex flex-row items-center border-gray-300 border-b'>
              {/* // large screen collapse */}
              <button className='px-5 hidden  lg:block border-r border-gray-300'>
                <Hamburger toggled={collapsed} toggle={setCollapsed} size={23}></Hamburger>
              </button>

              {/* //small screen collapse */}
              <button onClick={() => setToggled(!toggled)} className='px-5 lg:hidden py-3 border-r border-gray-300'>
                <AiOutlineMenuFold className='text-2xl'></AiOutlineMenuFold>
              </button>

              <div className='mx-auto'>
                <h1 className='font-medium text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-950 font-poppins'>NANCCO</h1>
              </div>



              <Link href='/dashboard' className='flex flex-row gap-x-1 items-center px-4 py-3 bg-black text-white ml-3'>
                {/* <FaRegCircleQuestion className='text-lg'></FaRegCircleQuestion> */}
                <p>Help</p>
              </Link>
            </div>

            <div className={`h-[calc(100vh-52px)] bg-slate-50 overflow-y-scroll p-2`}>
              <div className="max-w-7xl mx-auto px-4">
                {children}
              </div>
            </div>
          </main>

        </div>
      </div>

    </div>
  )
}

import { Menu, Transition } from '@headlessui/react'
import { Fragment, ReactElement, useEffect, useRef, useState } from 'react'
import {ArrowRightIcon, ChevronDownIcon} from "@heroicons/react/24/solid"

type Props={
    list:Array<string> | Array<ReactElement>,
    buttontext:string
}

export default function Dropdown({list,buttontext}:Props) {
  return (
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="hover:bg-primary hover:text-white inline-flex w-full justify-center rounded-md border-primary border-2 text-black px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {buttontext}
            <ChevronDownIcon className=' w-5 h-5 align-middle'/>
          </Menu.Button>
        </div>
          <Menu.Items className="absolute shadow-[0px_10px_40px_5px_#0008] bg-white right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {list.map((item,i)=>{
                return (
                    <Menu.Item key={i}>
                        {({ active }) => (
                        <button
                            className={`${
                            active ? 'bg-primary text-white' : 'text-gray-900'
                            } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                            {item}
                            <ArrowRightIcon className='w-5 h-5 align-middle group-hover:ml-3 group-hover:text-white text-zinc-400 transition-[margin]'/>
                        </button>
                        )}
                    </Menu.Item>
                )
              })}
            </div>
          </Menu.Items>
      </Menu>
    </div>
  )
}
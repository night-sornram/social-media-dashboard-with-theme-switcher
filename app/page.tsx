"use client"
import Image from 'next/image'
import { useState , useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Overview } from '@/components/overview'
import { Dashboard } from '@/components/dashboard'

export default function Home() {
  const { theme,setTheme} = useTheme();
  const [mounted,setMounted] = useState(false);
  useEffect(()=>{
    setMounted(true)
    setTheme('dark')
  }, [])

  const switctTheme = () => {
    if (theme === 'dark'){
      setTheme('light')
    }
    else{
      setTheme('dark')
    }
  }

  if(!mounted ) return null
  return (
    <div className='  w-screen h-screen'>
      
      <div className=' bg-light-bg relative z-30 dark:bg-dark-bg flex flex-col px-5 md:px-6 lg:px-10 xl:px-40 py-10' >
        <div className=' bg-light-top-bg absolute z-0 dark:bg-dark-top-bg h-60 top-0 left-0 w-full '>
        </div>
        <div className='flex flex-col md:space-y-0 space-y-4 md:flex-row justify-between'>
          <div className=' flex flex-col z-30 pb-4 border-b-[1px] md:border-none border-gray-700'>
            <div className='text-xl md:text-3xl  font-bold text-light-text2 dark:text-dark-text2'>
              Social Media Dashboard
            </div>
            <div className=' text-light-text1 dark:text-dark-text1'>
              Total Follower: 23,004
            </div>
          </div>
          <div className=' flex flex-row  space-x-3 justify-between md:justify-center items-center'>  
            <div className=' z-30 font-bold text-light-text2 dark:text-dark-text2'>
              Dark Mode
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input onClick={switctTheme} type="checkbox" value="" className="sr-only peer" />
              <div className="w-12 h-7 bg-gray-200 rounded-full peer peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gradient-to-r dark:from-dark-toggle-start dark:to-dark-toggle-end peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:start-[4px] after:bg-white dark:after:bg-dark-card after:border-dark-card after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-light-toggle 
              peer-checked:hover:bg-gradient-to-r peer-checked:hover:from-dark-toggle-start peer-checked:hover:to-dark-toggle-end "></div>
              
            </label>
          </div>
        </div>
        <div className=' flex flex-col space-y-6 md:space-y-0 md:flex-row pt-16 md:space-x-4 lg:space-x-10'>
          <Dashboard name={"@nathanf"} picture={"facebook"} total={"1987"} detail={"FOLLOWERS"} status={"up"} dif={"12"} style={"bg-primary-facebook"}/>
          <Dashboard name={"@nathanf"} picture={"twitter"} total={"1044"} detail={"FOLLOWERS"} status={"up"} dif={"99"} style={"bg-primary-twitter"}/>
          <Dashboard name={"@realnathanf"} picture={"instagram"} total={"11k"} detail={"FOLLOWERS"} status={"up"} dif={"1099"} style={"bg-gradient-to-r from-primary-instagram-start to-primary-instagram-end"}/>
          <Dashboard name={"Nathan F."} picture={"youtube"} total={"8239"} detail={"SUBSCRIBERS"} status={"down"} dif={"144"} style={"bg-primary-youtube"}/>
      
        </div>
        <div className=' flex flex-col pt-16 space-y-3 '>
          <div className=' text-xl md:text-3xl  font-bold text-light-text2 dark:text-dark-text2'>
            Overview - Today
          </div>
          <div className='md:space-x-4 lg:space-x-10 space-y-3 flex flex-col md:flex-row'>
            <Overview topic={"Page Views"} picture={"facebook"} status={"up"} num={"87"} percent={"3%"}/>
            <Overview topic={"Likes"} picture={"facebook"} status={"down"} num={"52"} percent={"2%"}/>
            <Overview topic={"Likes"} picture={"instagram"} status={"up"} num={"5462"} percent={"2257%"}/>
            <Overview topic={"Profile Views"} picture={"instagram"} status={"up"} num={"52k"} percent={"1375%"}/>
          </div>
          <div className='md:space-x-4 lg:space-x-10  space-y-3 flex flex-col md:flex-row'>
            <Overview topic={"Retweets"} picture={"twitter"} status={"up"} num={"117"} percent={"303%"}/>
            <Overview topic={"Likes"} picture={"twitter"} status={"up"} num={"507"} percent={"553%"}/>
            <Overview topic={"Likes"} picture={"youtube"} status={"down"} num={"107"} percent={"19%"}/>
            <Overview topic={"Total Views"} picture={"youtube"} status={"down"} num={"1407"} percent={"12%"}/>
          </div>
        </div>
      </div>
    </div>

  )
    
}

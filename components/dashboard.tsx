import Image from "next/image"

type Prop = {
    picture : String,
    name : String
    total : String,
    detail : String,
    status : String,
    dif : String,
    style : String
}

export function Dashboard(props : Prop ){
    return (
        <div className=' w-full md:w-1/4 z-10 relative  space-y-6 py-6 rounded-md bg-light-card flex flex-col justify-center items-center dark:bg-dark-card cursor-pointer hover:bg-[rgba(225,227,240,255)] dark:hover:bg-[rgba(51,59,87,255)] '>
            <div className={` absolute z-20 top-0 left-0 ${props.style} w-full h-1 rounded-t-md`}>

            </div>
            <div className=' space-x-2 flex flex-row'>
              <div>
                <Image 
                src={`/images/icon-${props.picture}.svg`}
                width={20}
                height={20}
                alt={`${props.picture}`}/>
              </div>
              <div className=' text-light-text1  dark:text-dark-text1 font-bold'>
                {props.name}
              </div>
            </div>
            <div className=' flex  space-y-1 flex-col'>
              <div className=' text-center md:text-3xl lg:text-6xl text-6xl font-bold  text-light-text2 dark:text-dark-text2'>
                {props.total}
              </div>
              <div className=' text-center tracking-[0.35rem] lg:text-base md:text-xs text-light-text1 dark:text-dark-text1 '>
                {props.detail}
              </div>
            </div>
            <div className=' space-x-2 flex flex-row'>
              <div className=' flex justify-center items-center'>
                <Image 
                src={`/images/icon-${props.status}.svg`}
                width={8}
                height={4}
                alt={`${props.status}`}/>
              </div>
              <div className= {props.status === "up" ? ' flex justify-center items-center font-bold text-primary-green' : ' flex justify-center items-center font-bold text-primary-red'} >
                {props.dif} Today
              </div>
            </div>
          </div>
    )
}
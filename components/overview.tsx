import Image from 'next/image'

type Prop = {
    topic : String,
    picture : String,
    num : String,
    status : String,
    percent : String
}


export function Overview(props : Prop){
    return (
        <div className=' space-y-5 w-full md:w-1/4 p-7 lg:p-7 md:p-4  bg-light-card flex rounded-md flex-col dark:bg-dark-card cursor-pointer hover:bg-[rgba(225,227,240,255)] dark:hover:bg-[rgba(51,59,87,255)]'>
              <div className='flex flex-row justify-between'>
                <div className=' text-light-text1 lg:text-base md:text-xs dark:text-dark-text1 font-bold'>
                  {props.topic}
                </div>
                <div>
                  <Image 
                  src={`/images/icon-${props.picture}.svg`}
                  width={20}
                  height={20}
                  alt={`${props.picture}`}/>
                </div>
              </div>
              <div className=' flex flex-row justify-between'>
                <div className=' text-3xl lg:text-3xl md:text-xl font-bold'>
                  {props.num}
                </div>
                <div className=' space-x-1 flex flex-row'>
                  <div className=' flex justify-center items-center'>
                    <Image 
                    src={`/images/icon-${props.status}.svg`}
                    width={8}
                    height={4}
                    alt={`${props.status}`}/>
                  </div>
                  <div  className= {props.status === "up" ? ' flex justify-center lg:text-base md:text-xs items-center font-bold text-primary-green' : ' flex lg:text-base md:text-xs justify-center items-center font-bold text-primary-red'} >
                    {props.percent}
                  </div>
                </div>
              </div>
            </div>
    )
}
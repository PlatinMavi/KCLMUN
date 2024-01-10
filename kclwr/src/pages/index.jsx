import { useEffect } from "react"

export default function Index() {

    useEffect(()=>{
        let coundown;
    },[])

    return (
        <div className="wrapper bg-red-500 min-h-[calc(100vh-80px)] relative">
            <div className="border-8 rounded-3xl absolute h-[calc(100vh-160px)] top-[40px] left-[40px] w-[calc(100vw-80px)] "></div>
            <div className="bg-gradient-to-t from-[rgba(0,0,0,0.4)] absolute bottom-0 h-96 w-screen">
                <div className="absolute bottom-[50px] left-[calc(50%-32px)]">
                    <svg className="" xmlns="http://www.w3.org/2000/svg" height="64" width="56" viewBox="0 0 448 512"><path fill="#ffffff" d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/></svg>
                </div>
            </div>
            <div className="absolute tracking-wider left-[calc(50%-294px)] top-[80px]">
                <p className="text-4xl font-bold osf text-center  text-white">REMAINING TIME</p>
                <p className="font-bold osf text-white -translate-y-12" style={{fontSize: '12rem' }}>81 DAYS</p>
            </div>
            
        </div>
    )
}
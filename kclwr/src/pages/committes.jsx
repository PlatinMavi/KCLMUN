import { useEffect, useState } from "react"
import disec from "../assets/disec.jpg"
import nato from "../assets/nato.png"

export default function Committes(){

    const [currentbg, setCurrentBg] = useState(disec)

    // useEffect(()=>{
    //     const root = document.getElementById("root")
    //     root.classList.add("max-h-screen")
    //     root.classList.add("overflow-y-hidden")
    //     // root.classList.add("overflow-x-scroll")

    //     return(()=>{
    //         root.classList.remove("max-h-screen")
    //         root.classList.remove("overflow-y-hidden")  
    //         // root.classList.add("overflow-x-scroll")
    //     })
    // },[])

    function HandleCommitteClick(toSwitch){
        const h1 = document.getElementById("h1")
        const p1 = document.getElementById("p1")
        const p2 = document.getElementById("p2")

        // BAK ŞİMDİ BU CASELER VAR YA, BUNLAR BUTON TIKLAMASINDA ÇALIŞIYO ALTTA KOMİTELER İÇİN BUTON VAR ZATEN GÖRÜRSÜN
        // 67.SATIRDA MESELA ONCLİCK İÇİNDEKİ FONKSİYONDA İÇİNDE NE YAZIYOSA O CASE ÇALIŞIR, FOTOLARI BENİM YAPTIĞIM GİBİ İMPORT EDİP SRCLER İÇİNE KOYCAN
        // CASE SONUNA BREAK KOYMAYI UNUTMA KOD YARRA YİYO

        switch(toSwitch){
            case "disec":
                setCurrentBg(disec)
                h1.innerHTML = "DISEC"
                p1.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, tempore minus veritatis officiis soluta earum. Quos dolor tempora veritatis aut labore, voluptates, velit voluptatum dolorum aliquam iste, repudiandae autem libero."
                p2.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, tempore minus veritatis officiis soluta earum. Quos dolor tempora veritatis aut labore, voluptates, velit voluptatum dolorum aliquam iste, repudiandae autem libero."

                break
            case "nato":
                setCurrentBg(nato)
                h1.innerHTML = "NATO"
                p1.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, tempore minus veritatis officiis soluta earum. Quos dolor tempora veritatis aut labore, voluptates, velit voluptatum dolorum aliquam iste, repudiandae autem libero."
                p2.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, tempore minus veritatis officiis soluta earum. Quos dolor tempora veritatis aut labore, voluptates, velit voluptatum dolorum aliquam iste, repudiandae autem libero."

                break
            }

    }

    return(
        <div className="pt-20 overflow-x-hidden bg-black">
            <div className="h-screen mx-6 p-4">
                <div className="h-[60%] my-4 relative ">
                    <img className="h-full w-full object-cover rounded-lg opacity-40" src={currentbg} alt="" />
                    <div className="absolute top-12 left-12">
                        <h1 className=" text-white text-4xl font-bold" id="h1">DISEC</h1>
                        <p className="mt-4 text-gray-200 w-1/2 break-words text-lg" id="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, tempore minus veritatis officiis soluta earum. Quos dolor tempora veritatis aut labore, voluptates, velit voluptatum dolorum aliquam iste, repudiandae autem libero.</p>
                        <p className="mt-4 text-gray-200 w-1/2 break-words text-lg" id="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, tempore minus veritatis officiis soluta earum. Quos dolor tempora veritatis aut labore, voluptates, velit voluptatum dolorum aliquam iste, repudiandae autem libero.</p>
                    
                        <button className="bg-red-600 rounded-md px-4 py-2 text-white text-lg mt-4 text-center">Study Guide</button>
                        <button className="border-2 border-red-600 ml-4 rounded-md px-4 py-2 text-white text-lg mt-4 text-center">ROP</button>
                    </div> 
                </div>
                <h2 className="text-4xl text-white my-4 font-bold">
                    Other Committes:
                </h2>
                <div className="grid grid-cols-7 max-w-screen gap-4">
                    <button className="relative" onClick={()=>HandleCommitteClick("disec")}>
                        <img className="h-full max-w-full object-cover rounded-lg" src={disec} alt=""/>
                        <h1 className="text-2xl absolute top-0 left-4 text-white my-4 font-semibold">
                            DISEC
                        </h1>
                    </button>
                    <button className="relative" onClick={()=>HandleCommitteClick("nato")}>
                        <img className="h-full max-w-full object-cover rounded-lg" src={nato} alt=""/>
                        <h1 className="text-2xl absolute top-0 left-4 text-white my-4 font-semibold">
                            NATO
                        </h1>
                    </button>
                    <button className="relative" onClick={()=>HandleCommitteClick("disec")}>
                        <img className="h-full max-w-full object-cover rounded-lg" src={disec} alt=""/>
                        <h1 className="text-2xl absolute top-0 left-4 text-white my-4 font-semibold">
                            European <br /> Council
                        </h1>
                    </button>
                    <button className="relative" onClick={()=>HandleCommitteClick("disec")}>
                        <img className="h-full max-w-full object-cover rounded-lg" src={disec} alt=""/>
                        <h1 className="text-2xl absolute top-0 left-4 text-white my-4 font-semibold">
                            ICC
                        </h1>
                    </button>
                    <button className="relative" onClick={()=>HandleCommitteClick("disec")}>
                        <img className="h-full max-w-full object-cover rounded-lg" src={disec} alt=""/>
                        <h1 className="text-2xl absolute top-0 left-4 text-white my-4 font-semibold">
                            UNESCO
                        </h1>
                    </button>
                    <button className="relative" onClick={()=>HandleCommitteClick("disec")}>
                        <img className="h-full max-w-full object-cover rounded-lg" src={disec} alt=""/>
                        <h1 className="text-2xl absolute top-0 left-4 text-white my-4 font-semibold">
                            HCC
                        </h1>
                    </button>
                    <button className="relative" onClick={()=>HandleCommitteClick("disec")}>
                        <img className="h-full max-w-full object-cover rounded-lg" src={disec} alt=""/>
                        <h1 className="text-2xl absolute top-0 left-4 text-white my-4 font-semibold">
                            LEGAL
                        </h1>
                    </button>
                </div>
            </div>
        </div>


    )
}
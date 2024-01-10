import { useEffect } from "react"
import { Link } from "react-router-dom";

export default function Index() {

    function HandleArrowClick(){
        const scrollTarget = document.getElementById("section2");
        if (scrollTarget) {
        scrollTarget.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
        }
    }

    function GetCountdown(){
        var countDownDate = new Date("June 9, 2024 9:00:00").getTime();
        var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("Cdwn").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
        }, 1000)
    }

    function calculateDaysToJune9th() {
        const today = new Date();
        const june9th = new Date(today.getFullYear(), 5, 9);
        const oneDay = 24 * 60 * 60 * 1000; 

        const daysRemaining = Math.round((june9th - today) / oneDay);

        return daysRemaining;
    }

    function updateCountdown() {
        const daysRemaining = calculateDaysToJune9th();
        document.getElementById('countdown').innerHTML = daysRemaining;
    }

    useEffect(()=>{
        GetCountdown()
        updateCountdown();
        setInterval(updateCountdown, 1000);
    },[])

    return (
        <div className="main int">
            <div className="Jumbotron h-[calc(100vh-80px)] top-[5rem] relative">

                <div className="background absolute h-[calc(100vh-80px)] w-screen"></div> {/* Background */}
                <div className="kule absolute h-[calc(100vh-80px)] w-screen z-30"></div> {/* Kule 30 */}
                <div className="border-8 rounded-3xl absolute h-[calc(100vh-160px)] top-[40px] left-[40px] w-[calc(100vw-80px)] z-20"></div> {/* Border 20 */}

                <div className="bg-gradient-to-t from-[rgba(0,0,0,0.4)] absolute bottom-0 h-96 w-screen z-40"> {/* Gradiyent 40 */}
                    <button onClick={()=>{HandleArrowClick()}} id="section2">
                        <div className="absolute bottom-[70px] left-[calc(50%-32px)] z-50 floating"> {/* Down arrow 50 */}
                            <svg className="" xmlns="http://www.w3.org/2000/svg" height="64" width="56" viewBox="0 0 448 512"><path fill="#ffffff" d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/></svg>
                        </div>
                    </button>
                </div>

                <div className="absolute left-[calc(50%-445px)] top-[200px] z-10"> {/* Countdown Text 10 */}
                    <p className="text-4xl font-bold text-center  text-white">REMAINING TIME</p>
                    <p className="font-bold text-white -translate-y-12" style={{fontSize: '12rem' }}> <span id="countdown"></span> DAYS</p>
                </div>
            </div>

            <div className=" mt-20 text-white" >
                <div className="h-[500px] bg-[#1c1c1c] py-8 relative">
                    <div className="mun h-[438px] absolute w-screen ">
                        
                    </div>
                    <div className="absolute text-center w-screen top-16">
                        <div id="Cdwn" className="text-2xl fw  border-4 p-4 w-max mx-auto rounded-2xl"></div>
                        <p className="quote text-4xl font-bold mt-8">"No idea can find it's true value, until it's been subjected to a free and genuine debate."</p>
                        <Link href="#_" className="relative inline-block text-xl group mt-12">
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-black rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black group-hover:-rotate-180 ease"></span>
                            <span className="relative">Apply Now!</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-black rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </Link>
                    </div>
  
                </div>

                <div className="text-center my-12 int">
                    <h2 className="text-5xl font-bold">Welcome Letter</h2>
                    <hr className="w-48 text-white mx-auto my-4" />
                    <p className="mx-auto w-[500px] break-words">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam deserunt suscipit, quasi numquam perspiciatis minus perferendis dolor eveniet commodi? Ratione culpa enim doloribus. Ratione error nulla ad assumenda cupiditate quasi!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam deserunt suscipit, quasi numquam perspiciatis minus perferendis dolor eveniet commodi? Ratione culpa enim doloribus. Ratione error nulla ad assumenda cupiditate quasi!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam deserunt suscipit, quasi numquam perspiciatis minus perferendis dolor eveniet commodi? Ratione culpa enim doloribus. Ratione error nulla ad assumenda cupiditate quasi!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam deserunt suscipit, quasi numquam perspiciatis minus perferendis dolor eveniet commodi? Ratione culpa enim doloribus. Ratione error nulla ad assumenda cupiditate quasi!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam deserunt suscipit, quasi numquam perspiciatis minus perferendis dolor eveniet commodi? Ratione culpa enim doloribus. Ratione error nulla ad assumenda cupiditate quasi!
                    </p>
                </div>
            </div>
        </div>
    )
}
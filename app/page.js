import Image from "next/image";
import NavBar from "./components/NavBar";
import { GoSearch } from "react-icons/go";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import { IoIosAdd } from "react-icons/io";




export default function Home() {
  return (
    <div className="flex flex-col bg bg-gradient-to-br from-sky-300 to bg-cyan-400 h-screen py-16 px-36 font-sans">
      <div className="flex flex-col bg-gradient-to-r from-cyan-300 to-blue-400 h-full border-solid rounded-3xl border-2">
        <nav className="flex justify-between w-full p-10 items-center text-black font-bold text-sm">
          <ul className="flex  justify-center w-full gap-10 items-center">
            <li>HOME</li>
            <li>PRODUCTS</li>
            <li>GALLERY</li>
            <li>CONTACT</li>
            <li>
              <button className=" px-6 text-white font-semibold py-2 rounded-lg bg-teal-600 border-teal-400 border-2 border-solid">LOGIN</button>
            </li>
          </ul>
          <div className="z-10">
            <GoSearch size={30} color="white" />
          </div>
        </nav>
        <main className="flex text-black h-full">
          <div className="flex flex-col w-5/12 justify-center h-full items-center">
            <div className=" flex justify-center flex-col w-10/12">
              <h1 className="text-2xl uppercase tracking-[15px]">let's ride the</h1>
              <h1 className="text-8xl uppercase font-bold -ml-1">future</h1>
              <div className="flex flex-col text-left w-10/12 mt-10">
                <p>simple and sleek design</p>
                <p>with users mind</p>
              </div>
            </div>
            <div className="flex w-10/12 mt-10">
              <button className=" px-8 py-2 rounded-lg bg-teal-600 border-teal-400 border-2 border-solid text-sm text-white text-left">LOGIN</button>
            </div>
          </div>
          <div className="flex flex-col w-6/12 h-full justify-between items-center">
            <h1 className="text-9xl text-white text-end mt-10 ml-28">EV-B</h1>
            <div className="absolute mr-44 mt-16">
              <Image
                height={500}
                width={500}
                src='/bike.png'
                className=""
              />
            </div>
            <div className="flex justify-center bg-blue-200 px-10 rounded-xl bg-opacity-25 border-solid border-2 border-cyan-300 py-5 gap-8">
              <div className="flex flex-col text-start">
                <span className="text-md font-semibold">50 Km/hr</span>
                <span>speed</span>
              </div>
              <div className="flex flex-col text-start">
                <span className="text-md font-semibold">80 Km</span>
                <span>battery range</span>
              </div>
              <div className="flex flex-col text-start">
                <span className="text-md font-semibold">3.5 hr</span>
                <span>charging time</span>
              </div>
            </div>
          </div>
          <div className=" flex w-1/12 flex-col -z-0">
            <div className="bg-gradient-to-br from-teal-200 to-teal-500 h-full -mt-[119px] rounded-tr-[22px] w-full pt-36">
              <h1 className="text-white rotate-90 tracking-[10px] w-full uppercase whitespace-nowrap">the concept</h1>
            </div>
            <div className="bg-gradient-to-br from-cyan-200 to-cyan-500 h-full -mb-[80px] rounded-br-[22px] w-full pt-20">
              <h1 className="text-white rotate-90 tracking-[10px] w-full uppercase whitespace-nowrap">electric - b</h1>
            </div>
            <div className="p-2 text-white rounded-full bottom-20 right-56 absolute bg-teal-500">
              <IoIosAdd size={40} />
            </div>
          </div>

        </main>
        <footer className="h-20 flex justify-between px-16 py-5 pr-36">
          <div className="flex items-center font-semibold text-slate-700">
            <GrFormPrevious size={50} />
            <span>Prev</span>
          </div>
          <div className="flex items-center text-slate-300">
            <span><GoDotFill /></span>
            <span><GoDotFill /></span>
            <span><GoDotFill /></span>
            <span><GoDotFill /></span>
          </div>
          <div className="flex items-center font-semibold text-slate-700">
            <span> Next</span>
            <GrFormNext size={50} />
          </div>
        </footer>
      </div>
    </div>
  );
}

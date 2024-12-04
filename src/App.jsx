import './App';
import './index.css';
import logo from './img/Group 3.svg';
import prof from './img/profi.svg'
import ruba from './img/f.svg'
import arr1 from './img/ArrowLeft.svg'
import arr2 from './img/ArrowRight.svg'
import arr3 from './img/arr1.svg'

function App() {
  return (
    <>
      <div className="fon">
        <div className='Banner'>
          <div className="w-full h-9 px-4 py-3 bg-orange-500 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <div className="justify-start items-start gap-3 flex">
                <div className="w-2 h-2 opacity-50 bg-white rounded-full" />
                <div className="w-2 h-2 opacity-50 bg-white rounded-full" />
                <div className="w-2 h-2 opacity-50 bg-white rounded-full" />
              </div>
              <div className="grow shrink basis-0 text-center text-neutral-800 text-sm font-bold font-['Inter'] uppercase leading-tight tracking-wide">Summer sale up to 50% off</div>
              <div className="justify-start items-start gap-3 flex">
                <div className="w-2 h-2 opacity-50 bg-white rounded-full" />
                <div className="w-2 h-2 opacity-50 bg-white rounded-full" />
                <div className="w-2 h-2 opacity-50 bg-white rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <div className='Header'>
          <div className="w-full h-full pt-10 bg-neutral-200 flex-col justify-end items-center gap-11 inline-flex">
            <div className="w-full h-[170px] pt-[14px] pb-[16px] justify-center items-center inline-flex">
              <div className="w-full h-[140px] relative">
                <div className="w-full h-[170px] pt-[14px] pb-[16px] justify-center items-center inline-flex">
                  <div className="w-[1210px] h-[140px] relative items-center">
                    <img src={logo} alt='first light' />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[563px] relative flex justify-start items-start  head">
              <div className="w-full text-white py-[600px] px-[115px] text-[60px] font-bold ">Spring Season</div>
              <div className="justify-start items-start gap-2 inline-flex w-full">
                <div className=" text-white py-[625px] pl-[515px]  text-[30px] font-bold uppercase">view collection</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[8px] justify-center items-center flex PROF  bg-orange-500">
          <img src={prof} alt="" />
        </div>

        <div className='product1 flex justify-center items-center gap-[60px]'>
          <div className="product1-1 flex items-center">
            <img src={arr1} alt="" className='w-[32px] h-[376px]' />
            <img src={ruba} alt="" className='w-[400px] h-[376px]' />
            <img src={arr2} alt="" className='w-[32px] h-[376px]' />
          </div>
          <div className="product1-2">
          </div>
        </div>
        <div className="product2 flex ">
          <div className="product2-1a justify-center items-center flex">
            <div className="product2-1 rounded-lg bg-neutral-300">
              <div className="h-14 px-6 py-4 bg-[#111111] rounded-lg mt-[540px] ml-[40px] justify-center items-center gap-2 inline-flex">
                <div className="text-center text-white text-base font-bold font-['Inter'] leading-normal">Shop Sweaters</div>
              </div>
            </div>
          </div>
          <div className="product2-2a justify-center items-center flex">
            <div className="product2-2 w-[596px]">
              <div className="h-[636px] p-10 bg-orange-500 rounded-lg flex-col justify-between items-start inline-flex">
                <div className="self-stretch grow shrink basis-0 text-black text-[40px] font-bold font-['Inter'] leading-[48px]">“ First Light promises quality, timeless designs and with our mission it is truly a buy it for life purchase. “</div>
                <div className="self-stretch grow shrink basis-0 text-black mt-[30px]text-xl font-bold font-['Inter'] leading-[30px]">— Guera Latissa, Creative Director</div>
              </div>
            </div>
          </div>
        </div>
        <div className="product3 flex justify-center items-center">
          <div className="product3-1a">
            <div className="product3-1 flex">
              <div className="text-black text-sm font-medium w-[58px] h-[20px] font-['Inter'] uppercase leading-tight tracking-wide">women</div>
              <img src={arr3} alt="" className='w-[20px] h-[20px]'/>
            </div>
          </div>
          <div className="product3-2a">
            <div className="product3-2 flex">
              <div className="text-black text-sm font-medium w-[58px] h-[20px] font-['Inter'] uppercase leading-tight tracking-wide">men</div>
              <img src={arr3} alt="" className='w-[20px] h-[20px]'/>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default App;

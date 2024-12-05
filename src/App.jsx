import './App';
import './index.css';
import logo from './img/Group 3.svg';
import prof from './img/profi.svg'
import ruba from './img/f.svg'
import arr1 from './img/ArrowLeft.svg'
import arr2 from './img/ArrowRight.svg'
import arr3 from './img/arr1.svg'
import arr1p from './img/ArrowUpRight.svg'
import bloom from './img/bloom.svg'
import arr0 from './img/Vector.svg'
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
              <div className="w-full text-white ml-[180px] mt-[600px] text-[60px] font-bold ">Spring Season</div>
              <div className="justify-start items-start gap-2 inline-flex w-full">
                <div className=" text-white mt-[630px] ml-[600px] text-[30px] font-bold uppercase">view collection
                </div>
                <img src='arr0' alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[8px] justify-center items-center flex PROF  bg-orange-500">
          <img src={prof} alt="" />
        </div>
        <div className='product1 flex justify-center items-center gap-[60px]'>
          <div className="product1-1 flex items-center ">
            <img src={arr1} alt="" className='w-[32px] h-[376px]' />
            <img src={ruba} alt="" className='w-[400px] h-[376px]' />
            <img src={arr2} alt="" className='w-[32px] h-[376px]' />
            <div className="w-72 h-20 flex-col justify-start items-center gap-5 inline-flex">
              <div className="self-stretch text-center text-[#111111] text-xl font-medium font-['Inter'] leading-loose">Basic Shirt</div>
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="text-center text-black text-lg font-semibold font-['Inter'] leading-relaxed">€49</div>
              </div>
            </div>
          </div>
          <div className="product1-2">
            <div className="h-14 px-6 py-4 bg-[#111111] rounded-lg justify-center items-center gap-2 inline-flex mt-[630px] ml-[40px]">
              <div className="text-center text-white rounded-lg text-base font-bold font-['Inter'] leading-normal">Shop Shirts</div>
            </div>
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
            <div className="product3-1 flex pt-[600px]">
              <div className="text-black text-sm font-medium ml-[20px] w-[58px] h-[20px] font-['Inter'] uppercase leading-tight tracking-wide">women</div>
              <img src={arr3} alt="" className='w-[13px] h-[13px]' />
            </div>
          </div>
          <div className="product3-2a">
            <div className="product3-2 flex pt-[600px]">
              <div className="text-black text-sm font-medium ml-[20px] w-[58px] h-[20px] font-['Inter'] uppercase leading-tight tracking-wide">men</div>
              <img src={arr3} alt="" className='w-[13px] h-[13px]' />
            </div>
          </div>
        </div>
        <div className='Social-proof w-full h-[502px] pt-[64px] pb-[64px] flex-col inline-flex'>
          <div className='Frame7 w-[1216px] h-[374px] gap-[40px]'>
            <div className="w-96 text-center text-[#111111] text-4xl font-extrabold font-['Inter'] leading-10" >Hot off the press</div>
            <div className="Frame3545 w-[1216px] h-[286px] ">
              <div className="Frame3578">
                <div className='frame8 justify-center items-center inline-flex'> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

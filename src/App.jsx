import './App';
import './index.css';
import logo from './img/Group 3.svg';
import prof from './img/profi.svg'
import ruba from './img/f.svg'
import arr1 from './img/ArrowLeft.svg'
import arr2 from './img/ArrowRight.svg'
import arr3 from './img/arr1.svg'
import logo7 from './img/logo7.svg'
import logo8 from './img/logo8.svg'
import logo9 from './img/logo9.svg'
import arr5 from './img/arr5.svg'
import arr6 from './img/arr6.svg'
import arr7 from './img/arr7.svg'
import women2 from './img/women2.svg'
import women3 from './img/women3.svg'
import women4 from './img/women4.svg'
import log1 from './img/log1.svg'
import log2 from './img/log2.svg'
import log3 from './img/log3.svg'
import log4 from './img/log4.svg'
import stick1 from './img/stick1.svg'
import floor1 from './img/floor1.svg'



function App() {
  return (
    <>
      <div className="fon">
        <div className='Banner'>
          <div className="w-1920px h-9 px-4 py-3 bg-orange-500 flex-col justify-start items-center gap-2 inline-flex">
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
          <img src={arr1} alt="" className='w-[32px] h-[376px]' />
          <div className="product1-1 flex flex-col items-center  ">
            <img src={ruba} alt="" className='w-[400px] h-[376px] mt-[120px]' />
            <div className="w-72 h-20 flex-col justify-start items-center gap-5 inline-flex">
              <div className="self-stretch text-center text-[#111111] text-xl font-medium font-['Inter'] leading-loose">Basic Shirt</div>
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="text-center text-black text-lg font-semibold font-['Inter'] leading-relaxed">€49</div>
              </div>
            </div>
          </div>
          <img src={arr2} alt="" className='w-[32px] h-[376px]' />
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
        <div className="Social-proof flex ">
          <div className="proof1 items-center">
            <div className="text2 mt-[64px] items-center">
              <div className="w-[1217px] h-[49px] text-center text-[#111111] text-4xl font-extrabold font-['Inter'] leading-10">Hot off the press</div>
            </div>
            <div className="text3 flex gap-[64px] mt-[40px] justify-center items-center">
              <div className="t1">
                <img src={logo7} alt="" />
                <div className="h-32 flex-col justify-start items-start gap-6 inline-flex">
                  <div className="w-32 h-6 px-px justify-center items-center inline-flex" />
                  <div className="self-stretch text-black text-lg font-medium font-['Inter'] leading-relaxed">“First Light: Where great design <br /> and the finest materials unite in <br /> ultimate comfort”</div>
                </div>
                <div className="text-center text-[#a857f9] text-sm font-bold font-['Inter'] flex mt-[40px] uppercase leading-tight tracking-wide">Read article<img src={arr5} alt="" /></div>
              </div>
              <div className="stick1">
                <img src={stick1} alt="" />
              </div>
              <div className="t2">
                <img src={logo8} alt="" />
                <div className="h-32 flex-col justify-start items-start gap-6 inline-flex">
                  <div className="w-16 h-6 pt-0.5 pb-1 justify-center items-center inline-flex" />
                  <div className="self-stretch text-black text-lg font-medium font-['Inter'] leading-relaxed">“First light proves it is possible to <br /> combine great design with the <br /> finest materials available.”</div>
                </div>
                <div className="text-center text-[#a857f9] text-sm font-bold font-['Inter'] flex mt-[40px] uppercase leading-tight tracking-wide">Read article<img src={arr5} alt="" /></div>
              </div>
              <div className="stick2">
                <img src={stick1} alt="" />
              </div>
              <div className="t3">
                <img src={logo9} alt="" />
                <div className="h-32 flex-col justify-start items-start gap-6 inline-flex">
                  <div className="w-32 h-6 pr-px py-1 justify-center items-center inline-flex" />
                  <div className="self-stretch text-black text-lg font-medium font-['Inter'] leading-relaxed">“Redefining excellence with <br /> premium materials and visionary <br /> robust design.”</div>
                </div>
                <div className="text-center text-[#a857f9] text-sm font-bold font-['Inter'] flex mt-[40px] uppercase leading-tight tracking-wide">Read article<img src={arr5} alt="" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="product4all flex-col justify-center items-center">
          <div className="text-center text-black text-4xl font-bold font-['Inter'] leading-10">Women — Must Haves</div>
          <div className="product4-1 flex gap-[32px]">
            <img src={arr6} alt="" className="w-[56px] h-[470px] mt-[48px]" />
            <div className="product4-1-1 flex-col flex gap-[24px] mt-[48px] justify-center items-center">
              <img src={women2} alt="" className="bg-gray-200" />
              <div className="w-72 h-6 justify-between items-start inline-flex">
                <div className="grow shrink basis-0 text-[#111111] text-base font-medium font-['Inter'] leading-relaxed">Basic Shirt</div>
                <div className="justify-start items-start gap-2 flex">
                  <div className="text-center text-black text-base font-medium font-['Inter'] leading-relaxed">€49</div>
                </div>
              </div>
            </div>
            <div className="product4-1-2 flex-col flex gap-[24px] mt-[48px] justify-center items-center">
              <img src={women3} alt="" className="bg-gray-200" />
              <div className="w-72 h-6 justify-between items-start inline-flex">
                <div className="grow shrink basis-0 text-[#111111] text-base font-medium font-['Inter'] leading-relaxed">Beige Jumper</div>
                <div className="justify-start items-start gap-2 flex">
                  <div className="text-center text-black text-base font-medium font-['Inter'] leading-relaxed">€99</div>
                </div>
              </div>
            </div>
            <div className="product4-1-3 flex-col flex gap-[24px] mt-[48px] justify-center items-center">
              <img src={women4} alt="" className="bg-gray-200" />
              <div className="w-72 h-6 justify-between items-start inline-flex">
                <div className="grow shrink basis-0 text-[#111111] text-base font-medium font-['Inter'] leading-relaxed">Signature Jacket</div>
                <div className="justify-start items-start gap-2 flex">
                  <div className="text-center text-black text-base font-medium font-['Inter'] leading-relaxed">€249</div>
                </div>
              </div>
            </div>
            <div className="product4-1-4  flex gap-[24px] mt-[49px] justify-end items-center">
              <img src={arr7} alt="" className="w-[56px] mt-[40px] justify-end relative left-[200px] " />
              <div className="w-72 h-6 mt-[488px]  justify-between items-start inline-flex">
                <div className="grow shrink relative right-[65px] basis-0 text-[#111111] text-base font-medium font-['Inter'] leading-relaxed">Navy Jumper</div>
                <div className="justify-start items-start gap-2 flex">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="features1all flex-col justify-center items-center flex">
          <div className="text-center text-[#111111] text-4xl font-extrabold font-['Inter'] leading-10">We always have your back</div>
          <div className="allfeatures flex  mt-[32px] gap-[24px]">
            <div className="features1-1a flex items-end justify-center">
              <div className="h-16 px-6 py-4 mb-[24px] bg-black rounded-lg flex-col justify-center items-center inline-flex">
                <div className="flex-col justify-start items-start flex">
                  <div className="self-stretch text-center text-white text-sm font-bold font-['Inter'] leading-tight">100% Premium Cotton</div>
                  <div className="self-stretch text-center text-white text-sm font-normal font-['Inter'] leading-tight">We use ethically sourced cotton only.</div>
                </div>
              </div>
            </div>
            <div className="features1-2-3 flex-col flex gap-[24px]">
              <div className="features1-2b flex items-end justify-center">
                <div className="h-16 px-8 py-4 mb-[24px] bg-black rounded-lg flex-col justify-end items-start inline-flex">
                  <div className="flex-col justify-start items-start flex">
                    <div className="self-stretch text-center text-white text-sm font-bold font-['Inter'] leading-tight">Made in Portugal</div>
                    <div className="self-stretch text-center text-white text-sm font-normal font-['Inter'] leading-tight">With hand finished details</div>
                  </div>
                </div>
              </div>
              <div className="features1-3c flex items-end justify-center">
                <div className="h-16 px-6 py-4 mb-[24px] bg-black rounded-lg flex-col justify-start items-center inline-flex">
                  <div className="flex-col justify-start items-start flex">
                    <div className="self-stretch text-center text-white text-sm font-bold font-['Inter'] leading-tight">Breathable material</div>
                    <div className="self-stretch text-center text-white text-sm font-normal font-['Inter'] leading-tight">Keeping you cool throughout the day</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="features2 items-center justify-center ">
          <div className="dad1 w-[1216px] h-px flex justify-center items-center ml-[112px] mt-[24px] opacity-10 border border-black"></div>
          <div className="features2a mt-[32px] gap-[122.67px] flex justify-center items-center">
            <div className="features2-1 flex  justify-center items-center gap-[16px]">
              <div className="w-14 h-14 p-4 bg-white rounded-lg  shadow-inner border border-[#2f2b43]/10 justify-center items-center inline-flex">
                <div className="grow shrink basis-0 self-stretch p-px justify-center items-center inline-flex">
                  <div className="grow shrink basis-0 self-stretch relative">
                  </div>
                  <img src={log1} alt="" />
                </div>
              </div>
              <div className="w-36 text-[#111111] text-base font-medium font-['Inter'] leading-tight">Premium stain resistant fabrics</div>
            </div>
            <div className="features2-2 flex gap-[16px]">
              <div className="w-14 h-14 px-4 py-4 bg-white rounded-lg shadow-inner border border-[#2f2b43]/10 justify-center items-center inline-flex">
                <div className="grow shrink basis-0 self-stretch pl-px pt-px justify-center items-center inline-flex">
                  <div className="w-6 h-6 relative">
                  </div>
                  <img src={log2} alt="" />
                </div>
              </div>
              <div className="w-36 text-[#111111] text-base font-medium font-['Inter'] leading-tight">Free Express Shipping</div>
            </div>
            <div className="features2-3 flex gap-[16px]">
              <div className="w-14 h-14 p-4 bg-white rounded-lg shadow-inner border border-[#2f2b43]/10 justify-center items-center inline-flex">
                <div className="grow shrink basis-0 self-stretch p-px justify-center items-center inline-flex">
                  <div className="w-6 h-6 relative">
                  </div>
                  <img src={log3} alt="" />
                </div>
              </div>
              <div className="w-36 text-[#111111] text-base font-medium font-['Inter'] leading-tight">Free returns within 30 days</div>
            </div>
            <div className="features2-4 flex gap-[16px]">
              <div className="w-14 h-14 p-4 bg-white rounded-lg shadow-inner border border-[#2f2b43]/10 justify-center items-center inline-flex">
                <div className="grow shrink basis-0 self-stretch p-px justify-center items-center inline-flex">
                  <div className="w-6 h-6 relative">
                  </div>
                  <img src={log4} alt="" />
                </div>
              </div>
              <div className="w-36 text-[#111111] text-base font-medium font-['Inter'] leading-tight">Customers rate  us 4.8 / 5.0</div>
            </div>
          </div>
          <div className="dad1 w-[1216px] h-px flex justify-center items-center ml-[112px] mt-[32px] opacity-10 border border-black"></div>
        </div>
        <div className="miscellaneousall flex items-center justify-center">
          <div className="miscellaneous1">
            <img src={floor1} alt="" className="rounded-l-lg" />
          </div>
          <div className="table-1 pt-[64px] pl-[64px] flex flex-col gap-[32px]">
            <div className="w-80 text-black text-3xl font-bold font-['Inter'] leading-10">Visit our popup shop</div>
            <div className="w-44 text-black text-base font-medium font-['Inter'] leading-relaxed">Willemsparkweg 63 1071 GS Amsterdam The Netherlands</div>

            <table className="text-black text-base flex flex-col gap-[20px] font-medium font-['Inter'] leading-relaxed">
              <tr>
                <td>Monday</td>
                <td className="pl-[133px]">12.00 - 19.00</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td className="pl-[130px]">10.00 - 19.00</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td className="pl-[105px]">10.00 - 19.00</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td className="pl-[122px]">10.00 - 21.00</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td className="pl-[147px]">10.00 - 19.00</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td className="pl-[126px]">10.00 - 18.00</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td className="pl-[137px]">12.00 - 19.00</td>
              </tr>
            </table>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
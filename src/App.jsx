import './App';
import './index.css';
import logo from './img/Group 3.svg';
import gg from './img/gg.svg';

function App() {
  return (
    <>
      <div className="fon">
        <div className='Banner'>
          <div className="w-full h-9 px-4 py-3 bg-orange-500 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <div className="justify-start items-start gap-3 flex">
                <div className="w-2 h-2 opacity-50 bg-white rounded-full" />
              </div>
              <div className="grow shrink basis-0 text-center text-neutral-800 text-sm font-bold font-['Inter'] uppercase leading-tight tracking-wide">Summer sale up to 50% off</div>
              <div className="justify-start items-start gap-3 flex">
                <div className="w-2 h-2 opacity-50 bg-white rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <div className='Header'>
          <div className="w-full h-full pt-10 bg-neutral-200 flex-col justify-end items-center gap-11 inline-flex">
            <div className="w-full h-[169px] pt-[14px] pb-[16px] justify-center items-center inline-flex">
              <div className="w-full h-[138px] relative">
                <div className="w-full h-[169px] pt-[14px] pb-[16px] justify-center items-center inline-flex">
                  <div className="w-[1212px] h-[138px] relative items-center">
                    <img src={logo} alt='first light' />
                  </div>
                </div>
              </div>
            </div>           
              <div className="w-full h-[563px] relative flex-col justify-start items-start flex heade">                             
                <div className="w-full text-white py-[600px] px-[112px] text-[60px] font-bold ">Spring Season</div>
                <div className="justify-start items-start gap-2 inline-flex">
                  <div className="text-center text-white py-[700px] px-[112px] text-sm font-bold  uppercase">view collection</div>
                  </div>
                </div>
              </div>
          </div>
          <div className="w-full h-11 px-4 py-3 bg-orange-500 flex-col justify-start items-start gap-2 inline-flex">

          </div>
        </div>    
    </>
  );
}

export default App;

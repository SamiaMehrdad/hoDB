// hoduno main page of the website
// component: Home
// called by: App (only)
// 2023 Mehrdad Samia -  All Rights Reserved
// --------------------------------------------------//
// background gradient is defined in hCSS.css file

import {React, useState } from 'react';
import modelOfHomepage from '../share/modelOfHomepage';
import {HomeItem, HomeLeftFix, HomeMenu, HomeRow, 
              HomeContent, HomeShowcase, HomeStoreButton, 
              HomeSponsor, Modal} from '../share/hComponents';
import Login from './Login';        
import STATE from '../share/state';

/*------------------------------------------------------*/
function Home() {
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [ST, setST] = useState(STATE );
  return (
    <>
    {/* Making top-right round menu container */}
    <HomeMenu show={showMenu} items={modelOfHomepage.menu}/>
    {/* <Modal show={showModal} className="w-[42%]  h-[500px] p-0 rounded-2xl text-[40px] bg-dark" onCloseClick={()=>setShowModal(false)}> */}
    {/* <Modal show={ST.modalShow} className="md:w-[42%] w-full md:h-[500px]  h-full p-0 rounded-2xl text-[40px] bg-dark" >
<Login/>
      </Modal> */}
    <div className="fixed z-20 top-0 right-0 w-[180px] h-[180px]  bg-brandB rounded-bl-full opacity-90"> 
      <div className=" text-[32px] ml-[5px] icon w-[175px] h-[175px] bg-brandG drop-shadow-2xl rounded-bl-full  ">
          <p onClick={()=> setShowMenu((prev)=> !prev)}  className='absolute text-[52px] right-[20px]  top-[-5px] hov '>≡</p>
          {/* <p onClick={()=> setShowModal(true)} className='absolute right-[130px]  top-[10px] hov '></p> */}
          <p onClick={()=> setST({modalShow: true})} className='absolute right-[130px]  top-[10px] hov '></p>
          <p className='absolute right-[84px]  top-[84px] hov'></p>
          <p className='absolute right-[20px]  top-[120px] hov'></p>
        </div>
    </div>
    {/* End of top-right menu container */}

    <HomeLeftFix>
        <div className="  text-brandG m-8 mb-4 " >
        VISIT OUR AGE BASED TITLES</div>
        <hr className="w-full mb-4 border-brandG"/>
        <HomeStoreButton title="KIDS"/>
        <HomeStoreButton title="TEENS"/>
        <HomeStoreButton title="ADULTS"/>
        <HomeStoreButton title="ALL"/>
    </HomeLeftFix>

    {/* Making top logo and slogan */}
    <div className="text-brandG md:pl-[35%] pl-[5%]">
        <h1  className=" icon  text-[100px]">hoduno</h1> 
        <h2  className=" text-[24px] leading-4 opacity-50 mt-[-80px] ml-40">
          <span>all of this knowledge</span>
          <span className='text-[120px]'>?</span>
        </h2 >
    </div>
    {/* End of top logo and slogan */}

<HomeItem  right  data={modelOfHomepage.content[0]} />  
<HomeItem  className="bg-brandG mt-[100px"  data={modelOfHomepage.content[1]} />  
<HomeRow>  {/* Show Platform flow */}
    <p className=" flex text-brandG icon text-2xl m-16 lg:w-[160px] w-full "> {modelOfHomepage.text[0]}</p>
    <img className=" flex opacity-50" src="flow.png" alt="hoduno platform"></img>
</HomeRow>
<HomeItem  className="bg-[#080505]"   data={modelOfHomepage.content[2]} />  
<HomeItem  className="bg-brandB" right  data={modelOfHomepage.content[3]} />  
<HomeItem  className="bg-darkGray" data={modelOfHomepage.content[4]} />  
{/* explain supervising mechanism */}
<div className="text-2xl text-light p-16 pr-0 md:pl-32 m-auto  md:w-1/2 w-3/4 ">{modelOfHomepage.text[1]}</div>
<HomeItem  className="bg-brandB" right  data={modelOfHomepage.content[5]} />  
<HomeItem  className=""  data={modelOfHomepage.content[6]} />  
{/* Griprize explanation */}
<HomeItem  className="bg-hi2 m-[-50px]"   data={modelOfHomepage.content[7]} />  
<HomeItem  className="bg-[#080505]" right  data={modelOfHomepage.content[8]} />  
<HomeItem  className="bg-brandG"  data={modelOfHomepage.content[9]} />  

    {/* Stories */}
<HomeRow className=" mt-32 ">
      <p className="  text-black text-[70px] mt-16  w-full leading-[50px] text-center"> EXCITING STORIES</p>
</HomeRow>
<p className=' w-full a-c  text-2xl text-hi2 p-4 md:pl-[14%] mt-[-3rem] tracking-widest'> THERE ARE SO MANY MORE, WHAT IS YOURS?</p>
  <HomeRow className="bg-gradient-to-b from-black to-transparent mt-[-48px] pt-32 ">

    <HomeShowcase data={modelOfHomepage.showcase[0]}/>
    <HomeShowcase data={modelOfHomepage.showcase[1]}/>
    </HomeRow>
    <HomeRow className=" mt-[-50px] ">
    <HomeShowcase className="" data={modelOfHomepage.showcase[2]}/>
    <HomeShowcase data={modelOfHomepage.showcase[3]}/>
  </HomeRow>
  {/* Win Win */}
  <div className="text-2xl  p-16 pr-0 pb-96 md:pl-[14%] m-auto  w-3/4 text-center  h-96 ">{modelOfHomepage.text[2]}</div>
  {/* Sponsers */}
  <HomeRow>
  <div className="bg-gradient-to-b from-transparent to-black text-brandG text-xl p-16  md:pl-32   w-screen h-96 text-center ">{modelOfHomepage.text[3]}</div>
  </HomeRow>
  <div className="flex flex-wrap a-c bg-black p-16  md:pl-[20%]   w-screen mt-[-32px] ">
    {/* Sponsor logo and names */}
    {Object.keys(modelOfHomepage.sponsor).map((key) => (
    <HomeSponsor key={key} data={modelOfHomepage.sponsor[key]} />
  ))}
  </div>
  <div className=" bg-black p-16  md:pl-[20%]   w-screen mt-[-32px] ">
    {/* Footer links  */}
    <div className="grid grid-cols-4 lg:w-1/2 w-full text-hi1">
    {Object.keys(modelOfHomepage.footer).map((key) => (
    <p  key={key} className="px-2 m-0 hov">{modelOfHomepage.footer[key].title} </p>
  ))}
  </div>
  </div>
  {/* copyright watermark */}
 <p className=' fixed text-xs  bottom-2 right-2 text-hi2'>{`Copyright ( 2020 - ${new Date().getFullYear()} ) hoduno.com`}</p>
   </> 
  );
}

export default Home;
import React from 'react';
import HomeRow from './hHomeRow';
import HomeContent from './hHomeContent';
import GlassButton from './hGlassButton';

function HomeItem( {right, data, className} ){
    const title = data.title;
    const body = data.body;
    const img = data.img;
    const btn = data.button;
  
  return (
     <HomeRow className={className}>
      { img &&
        <HomeContent  right={right}>
         <img src={data.img} alt={data.title} className="rounded-full drop-shadow-lg m-4  w-[360px]"/>  
         </HomeContent> 
        }
         <HomeContent >
         <div className={`lg:max-w-sm max-w-xl p-8 rounded-full  ${className} `}>
                        <p className='text-2xl  text-light t-b my-4'>{title}</p>
                         {body}
                         <GlassButton title={btn}/>
                         </div>               
         </HomeContent> 
     </HomeRow>
  
  );
  }

export default HomeItem;
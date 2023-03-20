import React, { useState } from 'react';
import {TDiv, ICard, TopBar, InputRadio, Radio, InfoBar, Btn, DivLine, Input, } from '../share/hComponents';
import modelOfMakers from '../share/modelOfMakers';
import { DynaMenu } from '../components/dynaMenu';

// TODO: make all components from txt file and arrange them.
function PMakers( props ) {
  // create all menus from modelOfMakers
  const menusData =  modelOfMakers.menu ;
  //console.log('In Makers -> makersMenus= ', allMenus);
  
    const [hintText, setHintText] = useState('This is a test hint text');

    function menuClick(index){
        console.log('Clicked= '+index);
      }
    const testMenu={ // test to delete
        title:   'Action',
        items:{
                  flip:    ['Flip','Exchange images of pair.',''],
                  details: ['Details','',''],
                  allies:  ['Allies','',''],
                  adverse: ['Adverse','',''],
                  delete:  ['Delete','',''],
        }
      };

    return ( 
        <div  className='md:fixed' > 

    <div id='allMenus' className=' '> {/*all Menus are hidden by default*/}
    {Object.keys(menusData).map((key) => (
    <DynaMenu key={key} index={key} menuData={menusData[key]} />
  ))}
    </div>
  
            <TopBar title='MAKERS PANEL' ></TopBar>
            <div className="grid grid-cols:1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 mt-8 p-4" >

                <TDiv title="hoduno STUDIO" className="flex-1 h-[50vh] min-w-[300px]" >
                <Btn className='bg-brandR ' >Test</Btn> <br/>
                <Input />
                <Radio title="This is a test title for the radio button and even more longer and longer and ..." 
                  level = {4}  disabled default={2}  className='t--'
                />
                <Radio title="This is second xxxx x xx x xxx xxxx xxxx xxxx xxxxx test title " 
                  level = {3} default={1} 
                />
                <InputRadio title="INPUT RADIO"></InputRadio>
                 <br/>
{/* <DivLine title='test with a long string'/> */}
                    <ICard  name = "This is the long name." 
                                comment = "And this is the long comment that can be very long up to 180 characters!"
                                url = "sample1.png"
                                />
                    <ICard  name = "This is the long name." 
                                comment = "And this is the long comment that can be very long up to 180 characters!"
                                url = "sample1.png"
                                />
                    <ICard  name = "This is the long name." 
                                comment = "And this is the long comment that can be very long up to 180 characters!"
                                url = "sample1.png"
                                />
                    <ICard  name = "This is the long name." 
                                comment = "And this is the long comment that can be very long up to 180 characters!"
                                url = "sample1.png"
                                />   
                    <ICard  name = "This is the long name." 
                                comment = "And this is the long comment that can be very long up to 180 characters!"
                                url = "sample1.png"
                                />  
                                            <ICard  name = "This is the long name." 
                                comment = "And this is the long comment that can be very long up to 180 characters!"
                                url = "sample1.png"
                                />  
                    <ICard  name = "This is the long name." 
                                comment = "And this is the long comment that can be very long up to 180 characters!"
                                url = "sample1.png"
                                />  
                    <ICard  name = "This is the long name." 
                                comment = "And this is the long comment that can be very long up to 180 characters!"
                                url = "sample1.png"
                                />  
                    <ICard  name = "This is the long name." 
                                comment = "And this is the long comment that can be very long up to 180 characters!"
                                url = "sample1.png"
                                />    
                                                    <ICard  name = "This is the long name." 
                                comment = "And this is the long comment that can be very long up to 180 characters!"
                                url = "sample1.png"
                                />   
                                                    <ICard  name = "This is the long name." 
                                comment = "And this is the long comment that can be very long up to 180 characters!"
                                url = "sample1.png"
                                />    
                                                                                                                                              
                </TDiv>
                <TDiv  className="flex-2 md:flex3 h-[50vh] min-w-[300px]">
                    <p> THIS IS JUST A TEST INSIDE OF DIV</p>
                </TDiv>
                <TDiv title="hoduno PUBLISHER" className="flex-3 md:flex-2  h-[40vh]" >

                </TDiv>
                <TDiv title="hoduno CONNECT" className="flex-4  h-[30vh]" >
                <InfoBar />
                </TDiv> 
            </div>

        </div>
            );
  }
   
  export default PMakers;
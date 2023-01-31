
import {Tmenu, TDiv, ICard, TopBar, Btn, DivLine, Radio, Input} from '../share/index';

function PMakers( props ) {

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
        <div className='md:fixed' >

<Tmenu context={testMenu}kkkkcckhtbtgbjurnitfbujdkgvkluunegnlfufrvvfr

              top = {100}
              right = {100}
              onClick={menuClick}
    /> 
            <TopBar title='MAKERS PANEL' ></TopBar>
            <div className="grid grid-cols:1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 mt-8 p-4" >

                <TDiv title="hoduno STUDIO" className="flex-1 h-[50vh] min-w-[300px]" >
                <Btn className='bg-brandR ' >Test</Btn> <br/>
                <Input />
                <Radio title="This is a test title for the radio button and even more longer and longer and ..." 
                  level = {3}  default={2} disabled className='t--'
                />
                                <Radio title="This is second xxxx x xx x xxx xxxx xxxx xxxx xxxxx test title " 
                  level = {3} default={1} 
                />
                
                 <br/>
<DivLine title='test with a long string'/>
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

                </TDiv>

            </div>
        </div>
            );
  }
   
  export default PMakers;
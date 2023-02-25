/*
* IDEA:
* dispact obj defines relation between icons, buttons etc and related menu to show
 const dispatch = {
       clickElemID: MenuToOpenID;
 }
*  

*/
import {ST, Tmenu, TDiv, ICard, TButton, TInput, TSelect, TTextArea} from './share/componentStore.js';

import PMakers from './pages/makers.jsx';


function App() {

  document.addEventListener('DOMContentLoaded', (event) => {
    const hintElement = document.getElementById('hint');
    console.log('Load completed. hintElement = ', hintElement);
    document.addEventListener('mouseenter', (e) => { 
      if( hintElement )
        hintElement.innerText = `Hint: ${e.target.innerText}`;
    });
  });

//   document.addEventListener('mouseup', (e) => { 
       
//     //   if( ST.activeElem === true )
//              // {
//                      ST.menuHide = true; 
//                      ST.activeElem = null;
//                      console.log('CLICKED and HIDE!');
//             //  }
// });

 ST.menuHide = false;




  return (
    <>
<PMakers id='test' />
    </>
  );
}

export default App;

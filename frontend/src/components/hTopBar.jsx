 //* Props: 
 //*  Title:     text-url
 //*  name:    text
 //*  comment: text
 import ActIcon from "./hActIcon";

 function TopBar( props ) {
    return ( 
        <div className="fixed  flex items-center w-full top-0 h-[40px] bg-brandG text-light" >
            <p className="middle flex-1 text-center t-xl"> hoduno {props.title}</p>
            <div  className='' >
                 <ActIcon icon='' className='t-xl' />
                 <ActIcon icon='' className='' />
            </div>
            {props.children}
        </div>
        );
  }
   
  export default TopBar;
 //* Props: 
 //*  title:  text
 //*  w:      text-css
 //*  h:      text-css

function TDiv( props ) {
    return ( 
        <div id='TDiv' className={props.className+" p-1 mt-4"}>
            <p className="text-left">{props.title}</p>
            <div className={"overflow-y-auto pt-8 pl-6 h-[90%] "+ (props.title? " bg-sh2  border-lightGray border-t":" ")} >

                {props.children}
            </div>
        </div>
            );
  }
   
  export default TDiv;
 //* Props: 
 //*  url:     text-url
 //*  name:    text
 //*  comment: text

 function ICard( props ) {
    return ( 
        <div className="mr-1  inline-flex w-[300px] text-left hov hover:bg-sh2 hover:border-brandG hover:border-l-2">
            <img className="m-1 w-[64px] h-[80px]" src={props.url}/> 
            <div className="m-x-1 p-[2px]">
                <p className="t-m ">{props.name}</p>
                <p className="t-s ti text-hi2">{props.comment}</p>
            </div>
        </div>
            );
  }
   
  export default ICard;
 //* Props: 
 //*  Title:     text-url
 //*  name:    text
 //*  comment: text

 function ActIcon( props ) {
    return ( 
            <span className={"pr-6 icon hov "+props.className}>{props.icon}</span>
        );
  }
   
  export default ActIcon;
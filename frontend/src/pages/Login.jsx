function Login() {

  const loginbyUP = () => {
    console.log("login by username and password");
  };

  const loginbyOTP = () => {
    console.log("login by OTP");
  };

  const loginbyFB = () => {
    console.log("login by FB");
  };

  const loginbyGoogle = () => {
    console.log("login by Google");
  };

  const loginbyTweeter = () => {
    console.log("login by Tweeter");
  };

 const loginbyLinkedin = () => {
    console.log("login by Linkedin");
  };

  return (
  <div className="relative h-full w-full bg-sh1 rounded-2xl min-w-[380px] overflow-hidden ">
    <div className="absolute top-0 left-0 h-1/4 w-full  border-b-2 border-darkGray text-left pt-[50px]">
      <span className="text-[50px] icon text-brandG ml-8 ">Login</span>
      <span className="text-[15px] text-brandG mt-[-10px]"> in a convenient way.</span>
      <span className="absolute  md:top-[134px] left-[36px] text-[16px] text-brandB hov ">Why login?</span>
    </div>
    <div className="absolute top-1/4 md:left-[25%] left-4 h-3/4 w-full md:w-[80%]  flex-shrink-0 md:flex-shrink text-left text-xl text-brandG "> 
      <div className=" border-b-2 border-darkGray w-full h-1/5 pt-2 ">
        <p className="text-[16px] text-brandB hov ml-[52px] -mb-1 hov">Sign up.</p>
        <span className="icon "> </span><span onClick={loginbyUP} className="text-2xl hov ml-[5%]">Username / Password</span>
      </div>
      <div className="border-b-2 border-darkGray w-full h-1/5 pt-[18px]">
      <span className="icon "> </span><span onClick={loginbyOTP} className="text-2xl hov ml-[5%]">One Time Pass</span>
      </div>
      <div className=" w-full h-1/5 pt-[18px]">
          <span className="icon "> </span><span className="text-2xl ml-[5%]">Continue with ...</span>
          <div className="text-[42px] pt-12 pl-16 flex w-full">
            <span onClick={loginbyGoogle} className="icon hov mr-4 "></span>
            <span onClick={loginbyFB} className="icon hov mx-4"></span>
            <span onClick={loginbyTweeter} className="icon hov mx-4 "></span>
            <span onClick={loginbyLinkedin} className="icon hov mx-4 "></span>
          </div>
      </div>
    </div>
  </div>
    );
}

export default Login;

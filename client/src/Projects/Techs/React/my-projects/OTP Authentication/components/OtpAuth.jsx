import PhoneOtpForm from './PhoneOtpForm'

function OtpAuth(){
  return(
    <div className="flex flex-col justify-center items-center pt-10 bg-black text-white h-screen w-screen">
      <h1 className="h-fit pb-2 text-xl font-bold border-b border-red-700">Login with Phone</h1>
      <PhoneOtpForm />
    </div>
  )
}

export default OtpAuth;

// https://www.youtube.com/watch?v=nQ-hy4PUta8
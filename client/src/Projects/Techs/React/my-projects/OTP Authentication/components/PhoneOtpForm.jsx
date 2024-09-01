import { useState } from 'react'

import OtpInput from './OtpInput'

function PhoneOtpForm(){
  const [notValid, setNotValid] = useState(false)
  const [phnNumber, setPhnNumber] = useState("")
  const [showOtpInput, setShowOtpInput] = useState(false)

  const handlePhnNumber = (e) => {
    setNotValid(false)
    setPhnNumber(e.target.value)
  }

  const OTPSent = (e) => {
    e.preventDefault()

    //Phone validations 
    const regex = /[^0-9]/g;
    if(phnNumber.length < 10 || regex.test(phnNumber)){
      setNotValid(true)
      return
    }

    //call backend API
    // show otp field
    setShowOtpInput(true)
  }

  const onOtpSubmit = (otp) => {
    alert('Login Successful')
  }

  return(
    <div className='my-5'>
        {!showOtpInput ?<form onSubmit={OTPSent} className="flex flex-col">
          <input
            type="text"
            value={phnNumber}
            onChange={handlePhnNumber}
            placeholder='Enter Your Phone Number'
            className="px-5 py-1 rounded-md text-black" />

          {notValid ? <div className="text-red-700 mt-1 text-center text-sm">Enter valid Phone Number</div> : ""}
          <button className="bg-red-700 py-2 my-4 rounded-md hover:opacity-80 active:opacity-60">Send OTP</button>
        </form> : <div className='flex flex-col items-center'>
          <p>OTP Sent to {phnNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>}
    </div>
  )
}

export default PhoneOtpForm;
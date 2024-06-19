// Importing local Files
import Bio from './Bio'
import Skills from './Skills'
import Certificates from './Certificates'
import Projects from './Projects'
import Connect from './Connect'

// Importing react Packages
import { forwardRef } from 'react'

function InnerMain(props, ref) {

  return (
    <div className="flex-1">
      <div ref={ref.bio}><Bio /></div>
      <div ref={ref.skills}><Skills /></div>
      <div ref={ref.certificates}><Certificates /></div>
      <div ref={ref.projects}><Projects /></div>
      <div ref={ref.connect}><Connect /></div>
    </div>
  )
}

export default forwardRef(InnerMain)
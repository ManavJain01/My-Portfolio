// Importing react spring/Parallax
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Bio() {
  return (
    <div className="min-h-lvh pt-28 flex flex-col items-center justify-between">
      <h1 className="text-4xl font-bold">Bio</h1>
      <h1 className="text-4xl font-bold">End</h1>
    </div>

    // <Parallax pages={3}>
    //   {/* Setting Content */}
    //   <ParallaxLayer offset={0} speed={0.5}>
    //   </ParallaxLayer>

    //   <ParallaxLayer offset={1} speed={0.5}>
    //   </ParallaxLayer>

      
    //   <ParallaxLayer offset={2} speed={0.5}>
        
    //   </ParallaxLayer>
    // </Parallax>
  )
}
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function Body(){
  return(
    <>
    <div className="bg-[beige] font-[cursive] overflow-hidden overflow-x-scroll">
      <Header />
      <Main />
      <Footer />
    </div>
    </>
  )
}

export default Body;
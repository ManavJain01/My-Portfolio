import Button from './Button'

function PlayareaNavBar(props) {
  const arr=[1,2,3,4,5,6]
  return (
    <>
      <div className="flex justify-between">
        <section className="mt-2 sm:mt-16 ml-2 sm:ml-12 flex flex-col items-center">
          <p className="text-4xl sm:text-6xl font-semibold">{props.num}</p>
          <span className="text-sm sm:text-lg font-semibold">Total Score</span>
        </section>

        <section className="mt-2 sm:mt-16 mr-2 sm:mr-12 flex flex-col items-end">
          {props.show1 && <span className="text-xs sm:text-lg text-red-500 sm:absolute sm:top-8">You have not selected any number</span> }

          <section className="sm:fixed flex">
            {
              arr.map((data)=>
                <Button key={data} text={data} square={'square'} functionS={()=>{props.setNumSelec(data)}} />
              )
            }
            
            </section>
          <span className="sm:relative sm:top-14 font-bold text-md sm:text-lg">Select Number</span>

        </section>
      </div>

    </>
  )
}
//ml-3

export default PlayareaNavBar;
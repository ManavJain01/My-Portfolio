function ShowRules() {

  return (
    <>
        <div className=" bg-orange-100 mt-9 p-3 w-fit h-fit">
          <h1 className="font-extrabold text-lg">How to play dice game</h1>
          <section className="mt-4 flex flex-col">
            <span>Select any number</span>
            <span>Click on dice image</span>
            <span>after click on dice if selected number is equal to dice number you will get some point as dice</span>
            <span>if you get wrong guess then 2 point will be deducted</span>
          </section>
        </div>
    </>
  )
}

export default ShowRules;
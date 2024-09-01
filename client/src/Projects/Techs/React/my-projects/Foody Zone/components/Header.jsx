import {object} from './Objects'

function Header({data, setData, setFilteredData, setSelectedBtn}){
  // const arr = ["All", "Breakfast", "Lunch", "Dinner"]

  const filterBtns = [
    {
      name: "All",
      type: "all"
    },
    {
      name: "Breakfast",
      type: "breakfast"
    },
    {
      name: "Lunch",
      type: "lunch"
    },
    {
      name: "Dinner",
      type: "dinner"
    }
  ]

  const filterFood = (type) => {
    if(type === "all"){
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = object?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()));
    setFilteredData(filter);
    setSelectedBtn(type);
  }


  const searchFood = (e) => {
    const searchValue = e.target.value;
    if(searchValue === ""){
      setData(data);
      setFilteredData(data);
    }

    const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredData(filter);
  }

  
  return(
    <>
      <div className="bg-gray-800 text-white h-48 flex flex-col justify-center space-y-12 px-[8%]">
        <section className="flex flex-wrap space-y-4 justify-between items-center">
          <h1 className="text-2xl font-bold whitespace-nowrap">F<span className="text-red-600">oo</span>dy Z<span className="text-red-600">o</span>ne</h1>
          <input onChange={searchFood} type="text" placeholder="Search Food...." className="py-1 px-5 w-[20rem] border-2 border-red-600 rounded-md bg-transparent"></input>
        </section>

        <section className="text-center flex justify-center space-x-2">
          {
            filterBtns.map((value) => (
              <button key={value.name} onClick={()=>filterFood(value.type)} className="bg-red-600 px-2 py-1 rounded-md hover:bg-red-800 focus:bg-red-900">{value.name}</button>
            ))
          }
        </section>

      </div>
    </>
  )
}

export default Header;
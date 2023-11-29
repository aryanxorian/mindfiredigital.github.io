import FilterData from "../assets/filterData.json"
import FilterCard from "./FilterCard ";
const FilterSidebar = () => {

  return (
    <div id="dropdownSearch" className="z-10 bg-white w-full dark:bg-gray-700">
        <h2 className="tracking-[2px] px-4 text-3xl font-medium capitalize text-mindfire-text-black">
        all Projects
        </h2>
        <div className="p-4">
            <h2 className='pb-4 tracking-wide'> Search By Project Name : </h2>
            <label htmlFor="input-group-search" className="sr-only">Search </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                </div>
                <input type="text" id="input-group-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Project" />
            </div>
        </div>
        <h3 className="p-4 text-2xl">Filter By:</h3>
        {
            FilterData.map((filterItem,index)=>(
                <FilterCard data={filterItem} key={index}/>
            ))
        }
    </div>

  )
}

export default FilterSidebar
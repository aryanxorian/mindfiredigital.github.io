import { ChangeEvent } from "react";

interface FiletObject {
    name: string;
    items: string[]
  }

const FilterCard  = ({data}:{data: FiletObject}) => {

  return (
    <>
        <p className="px-4 py-2 tracking-[2px] text-xs uppercase">Search by {data?.name}</p>
    <ul className="h-40 px-4 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
      {
        data.items.map((item,index) => (
            <li key={`filter-checkbox-${item}-${index}`}>
                <div className="flex i tems-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input id={`filter-item-${data?.name}-${index}`} name={item} type="checkbox" value={item} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label htmlFor={`filter-item-${data?.name}-${index}`} className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">{item}</label>
                </div>
            </li>
        ))
      }
    </ul>
    </>
  )
}

export default FilterCard 
import {useState} from "react"
import ReactSlider from 'react-slider'

const Sorter = ({ onSortSubmit }) => {
    const[sortBy, setSortBy] = useState("date")
    const[order, setOrder] = useState("ascending")
    const[startYear,setStartYear] = useState(2010)
    const[endYear,setEndYear] = useState(2025)
    const[minRevenue,setMinRevenue] = useState(274515000000)
    const[maxRevenue,setMaxRevenue] = useState(394328000000)
    const[minNetIncome,setMinNetIncome] = useState(57411000000)
    const[maxNetIncome,setMaxNetIncome] = useState(99803000000)
    const onSubmit = async (e) =>{
        e.preventDefault()
        onSortSubmit(sortBy, order, startYear,endYear, minRevenue,maxRevenue, minNetIncome, maxNetIncome)

    }
    return <form onSubmit = {onSubmit} className="p-6 bg-white shadow-md rounded-lg space-y-6">
        <div >
            <label htmlFor = "sortBy" className="block text-base md:text-lg lg:text-xl font-semibold text-gray-700 mb-1"> Sort By:</label>
            <select id = "sortBy" onChange={(e) => setSortBy(e.target.value)} className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="date">Date</option>
                <option value="revenue">Revenue</option>
                <option value="netIncome">Net Income</option>
            </select>
        </div>

        <div>
            <label htmlFor = "order" className="block text-base md:text-lg lg:text-xl text-sm font-semibold text-gray-700 mb-1"> Order:</label>
            <select id = "order" onChange={(e) => setOrder(e.target.value)} className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="ascending" >Ascending</option>
                <option value="descending">Descending</option>
            </select>
        </div>

        <div>
        <label className="block text-base md:text-lg lg:text-xl  font-semibold text-gray-700 mb-1"> Year Range: {startYear} - {endYear}</label>
            <div className="justify-center items-center ml-32">
                <ReactSlider
                className="horizontal-slider" 
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[2010,2025]}
                max = {2025}
                min = {2010}
                onChange={(value, index) => {
                    console.log(`onChange: ${JSON.stringify({ value, index })}`)
                    if (index === 0)
                        setStartYear(value[index])
                    else
                        setEndYear(value[index])
                }}
                />
            </div>
        </div>

        <div>
        <label className="block text-base md:text-lg lg:text-xl font-semibold text-gray-700 mb-1"> Revenue Range: {(minRevenue/ 1e9).toFixed(2)+"B"} - {(maxRevenue/ 1e9).toFixed(2)+"B"}</label>
            <div className="justify-center items-center ml-32">
                <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[274515000000, 394328000000]}
                max = {394328000000}
                min = {274515000000}
                onChange={(value, index) => {
                    console.log(`onChange: ${JSON.stringify({ value, index })}`)
                    if (index === 0)
                        setMinRevenue(value[index])
                    else
                        setMaxRevenue(value[index])
                }}
                />
            </div>
        </div>

        <div>
        <label className="block text-base md:text-lg lg:text-xl font-semibold text-gray-700 mb-1"> Net Income Range: {(minNetIncome/ 1e9).toFixed(2)+"B"} - {(maxNetIncome/ 1e9).toFixed(2)+"B"}</label>
            <div className="justify-center items-center ml-32">
                <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[57411000000, 99803000000	]}
                max = {99803000000}
                min = {57411000000}
                onChange={(value, index) => {
                    console.log(`onChange: ${JSON.stringify({ value, index })}`)
                    if (index === 0)
                        setMinNetIncome(value[index])
                    else
                        setMaxNetIncome(value[index])
                }}
                />
            </div>
        </div>
        <button type = "submit" className="w-full bg-blue-600 text-white font-semibold p-2 rounded-md hover:bg-blue-700">Search</button>
    </form>
}

export default Sorter
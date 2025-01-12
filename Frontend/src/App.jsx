import { useState, useEffect } from 'react'
import Sorter from "./Sorter"
import Report from './Report'
import './App.css'

function App() {
    const [reportItems, setItems] = useState([])

    useEffect(() => {
        fetchItems()
    },[])
    const fetchItems = async(url = "http://127.0.0.1:5000/") => {
        const response = await fetch(url)
        const data = await response.json()
        setItems(data)
        console.log(data)
    }

    const handleSortSubmit = (sortBy, order, startYear, endYear, minRevenue, maxRevenue, minNetIncome, maxNetIncome) => {
      const url = `http://127.0.0.1:5000/incomeStatements?sortBy=${sortBy}&order=${order}&startYear=${startYear}&endYear=${endYear}&minRevenue=${minRevenue}&maxRevenue=${maxRevenue}&minNetIncome=${minNetIncome}&maxNetIncome=${maxNetIncome}`
      console.log(url)
      fetchItems(url);
    }
  return <>
    <div>
      <Report items = {reportItems}/>
      <Sorter onSortSubmit={handleSortSubmit}></Sorter>
    </div>
  </>
}

export default App

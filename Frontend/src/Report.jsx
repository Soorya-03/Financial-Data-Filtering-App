import React from "react"

const Report = ({items}) => {
    return <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold text-blue-700 mb-4"> AAPL Income Report</h2>
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-blue-100 text-left">
                        <th className="px-4 py-2 border border-gray-200">Date</th>
                        <th className="px-4 py-2 border border-gray-200">eps</th>
                        <th className="px-4 py-2 border border-gray-200">Gross Profit</th>
                        <th className="px-4 py-2 border border-gray-200">Net Income</th>
                        <th className="px-4 py-2 border border-gray-200">Operating Income</th>
                        <th className="px-4 py-2 border border-gray-200">Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item => (
                        <tr key = {item.date}>
                            <td className="px-4 py-2 border border-gray-200"> {item.date}</td>
                            <td className="px-4 py-2 border border-gray-200"> {item.eps}</td>
                            <td className="px-4 py-2 border border-gray-200"> {item.grossProfit}</td>
                            <td className="px-4 py-2 border border-gray-200"> {item.netIncome}</td>
                            <td className="px-4 py-2 border border-gray-200"> {item.operatingIncome}</td>
                            <td className="px-4 py-2 border border-gray-200"> {item.revenue}</td>
                        </tr>
                    )))}
                </tbody>
            </table>
        </div>
        </div>
}

export default Report
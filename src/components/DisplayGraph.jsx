import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

export const GraphData = ({ arr }) => {

    console.log(arr);
    return (
        <div>
            <BarChart width={1300} height={300} data={arr}>
                <YAxis />
                <XAxis dataKey="CountryName" stroke="#8884d8" />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                {/* <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} /> */}
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="Population" fill="#8884d8" barSize={30} />
            </BarChart>
        </div>
    )
}
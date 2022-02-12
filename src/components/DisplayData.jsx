import { useEffect, useState } from 'react';
import data from "./Data/test.json";
import { GraphData } from './DisplayGraph';

export const DisplayData = () => {
    const [currYear, setCurrYear] = useState(1960);
    const [allData, setAllData] = useState(data.Data);
    const [datas, setDatas] = useState([]);

    const filterTopTen = () => {

        if (currYear == 2020) {
            return;
        }

        let opArr = [];

        for (let i = 0; i < 10; i++) {
            // console.log(allData[i].CountryName, allData[i].CountryName, allData[i].Population[currYear.toString()], currYear);
            let obj = {};
            obj["CountryName"] = allData[i].CountryName;
            obj["Population"] = allData[i].Population[currYear.toString()];
            obj["currYear"] = currYear;
            opArr.push(obj);
        }

        setDatas(opArr);

        if (currYear < 2020) {
            setCurrYear(currYear + 1);
        }

    }

    useEffect(() => {
        const timer = setInterval(() => { filterTopTen(); }, 100);               // clearing interval
        return () => clearInterval(timer);
    });
    return (
        <div>
            <h1>Current year is {currYear}</h1>

            <GraphData arr={datas}/>

        </div>
    )
}
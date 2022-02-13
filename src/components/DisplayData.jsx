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

        let tempArr = [];
        for(let i=0; i<allData.length; i++){
            tempArr.push(allData[i].Population[currYear.toString()]);
        }
        tempArr.sort((a, b) => {return(b-a)});

        let count = 0;

        let opArr = [];

        for(let i=0; i<10; i++){
            for(let j=0; j<allData.length; j++){
                if(tempArr[i] == allData[j].Population[currYear.toString()]){
                    let obj = {};
                    obj["CountryName"] = allData[j].CountryName;
                    obj["Population"] = allData[j].Population[currYear.toString()];
                    obj["currYear"] = currYear;
                    opArr.push(obj);     
                }
            }
        }

        // for (let i = 0; i < 10; i++) {
        //     // console.log(allData[i].CountryName, allData[i].CountryName, allData[i].Population[currYear.toString()], currYear);
        //     let obj = {};
        //     obj["CountryName"] = allData[i].CountryName;
        //     obj["Population"] = allData[i].Population[currYear.toString()];
        //     obj["currYear"] = currYear;
        //     opArr.push(obj);
        // }

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
        <div style={{
            width:"1000px",
            margin:"auto",
            marginTop:"25px"
        }}>
            <h1> year - {currYear}</h1>

            <GraphData arr={datas}/>

        </div>
    )
}
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Spreadsheet from 'react-spreadsheet';
import SpreadSheetData from "./SpreadSheet.json";
import DynamicTable from './DynamicTable';


function App() {

  const titles = SpreadSheetData.map((obj) => {
    return obj.row.map((title)=>{ return title.Heading})
  })
  
  console.log(titles)

  const tableData= [
    [{ value: "Heading1" }, { value: "Heading2" },],
    [{ value: "Vanilla" }, { value: "Chocolate" }],
    [{ value: "Strawberry" }, { value: "Cookies" }],
  ]

  const [data, setData] = useState(tableData);


  const onChange = (data:any) => {
    return setData(data)
  }

  return (
  <>
  {/* Type1 */}
  <div>
    <button style={{background: "blue", color: "white", fontSize: "20px", fontWeight: "bold", borderRadius: "10px", cursor: "pointer", margin: "10px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px"}}>Add Cell</button>
  </div>
    <Spreadsheet data={data} onChange={onChange} />

    {/* Type2 */}
    <DynamicTable />
  </>
  )
}

export default App;

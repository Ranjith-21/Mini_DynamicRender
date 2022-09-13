import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import DynamicComponent from './Dynamic_Component';
import TableData from "./TableData";
// import './../src/App.css'
function App() {
  const [formData, setformData] = useState([])

  let recieveData=(data)=>
  {
    // console.log('DataFromChild-->',data);
    let formDataCopy
    formDataCopy =[...formData]
    formDataCopy.push(data)
    // console.log('formDataCopy-->', formDataCopy);
    setformData(formDataCopy)
  }
// console.log('formData-->',formData);

  return (
    <div className="App">
      <DynamicComponent recieveData={recieveData}/>
      <TableData data={formData}/>
    </div>
  );
}

export default App;

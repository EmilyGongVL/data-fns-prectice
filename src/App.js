import './App.css';
import {useState} from "react";
import {locationAccessTimes} from "./dummydata";
import AccessTimeTable from './components/AccessTimeTable';

function App() {
  const [tab, setTab] = useState("staff")
  const getTableData = (type) => {
    const typeData = locationAccessTimes.filter((i) => i.type === type)
    const mondayAccessTimes = typeData.filter(i => i.day === "MONDAY")
    const tuesdayAccessTimes = typeData.filter(i => i.day === "TUESDAY")
    const wednesdayAccessTimes = typeData.filter(i => i.day === "WEDNESDAY")
    const thursdayAccessTimes = typeData.filter(i => i.day === "THURSDAY")
    const fridayAccessTimes = typeData.filter(i => i.day === "FRIDAY")
    const saturdayAccessTimes = typeData.filter(i => i.day === "SATURDAY")
    const sundayAccessTimes = typeData.filter(i => i.day === "SUNDAY")
    const tableData = [
      {id: "monday", day: "MONDAY", timePeriod: mondayAccessTimes},
      {id: "tuesday", day: "TUESDAY", timePeriod: tuesdayAccessTimes},
      {id: "wednesday", day: "WEDNESDAY", timePeriod: wednesdayAccessTimes},
      {id: "thursday", day: "THURSDAY", timePeriod: thursdayAccessTimes},
      {id: "friday", day: "FRIDAY", timePeriod: fridayAccessTimes},
      {id: "saturday", day: "SATURDAY", timePeriod: saturdayAccessTimes},
      {id: "sunday", day: "SUNDAY", timePeriod: sundayAccessTimes},
    ]
    return tableData
  }
  return (
    <div className="App">
      <button onClick={() => setTab("staff")}>staffed hours</button>
      <button onClick={() => setTab("openClose")}>open hours</button>
      <button onClick={() => setTab("creche")}>creche hours</button>
       {tab ==="staff" && <AccessTimeTable title="STAFFED HOURS" data={getTableData("STAFF")}/>}
       {tab ==="openClose" && <AccessTimeTable title="OPENING HOURS" data={getTableData("OPENCLOSE")}/>}
       {tab ==="creche" && <AccessTimeTable title="CRECHE HOURS" data={getTableData("CREACHE")}/>}
    </div>
  );
}

export default App;

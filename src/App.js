import './App.css';
import {useState} from "react";
import {locationAccessTimes} from "./dummydata";
import AddTimePeriodRow from './components/AddTimePeriodRow';

function App() {
  const [addTime, setAddTime] = useState("")
  // console.log(locationAccessTimes)
  const getAccessTimes = (type) =>  locationAccessTimes.filter((i) => i.type === type)
  const staffedHours = getAccessTimes("STAFF")
  // console.log(staffedHours)
  const mondayAccessTimes = staffedHours.filter(i => i.day === "MONDAY")
  const tuesdayAccessTimes = staffedHours.filter(i => i.day === "TUESDAY")
  const wednesdayAccessTimes = staffedHours.filter(i => i.day === "WEDNESDAY")
  const thursdayAccessTimes = staffedHours.filter(i => i.day === "THURSDAY")
  const fridayAccessTimes = staffedHours.filter(i => i.day === "FRIDAY")
  const saturdayAccessTimes = staffedHours.filter(i => i.day === "SATURDAY")
  const sundayAccessTimes = staffedHours.filter(i => i.day === "SUNDAY")
  const staffedHoursTableData = [
    {id: "monday", day: "MONDAY", staffedH: mondayAccessTimes},
    {id: "tuesday", day: "TUESDAY", staffedH: tuesdayAccessTimes},
    {id: "wednesday", day: "WEDNESDAY", staffedH: wednesdayAccessTimes},
    {id: "thursday", day: "THURSDAY", staffedH: thursdayAccessTimes},
    {id: "friday", day: "FRIDAY", staffedH: fridayAccessTimes},
    {id: "saturday", day: "SATURDAY", staffedH: saturdayAccessTimes},
    {id: "sunday", day: "SUNDAY", staffedH: sundayAccessTimes},
  ]
  // console.log(mondayAccessTimes)
  const formatTime = (time) => {
    const hour = Number(time.slice(0,2))
    if (hour >=0 && hour < 12) return `${time.slice(0, 5)} AM`
    if (hour === 12) return `${time.slice(0, 5)} PM` 
    if (hour > 12 && hour < 22) return `0${hour - 12}:${time.slice(3,5)} PM`
    if (hour > 22) return `${hour - 12}:${time.slice(3,5)} PM`
  }
  return (
    <div className="App">
      <header className="App-header">
       <h2>Staffed Hours</h2>
       <table>
        {staffedHoursTableData.map((day) => (
          <tr key={day.id} >
            <th>{day.day}</th>
            <td>{day.staffedH.length === 0? "Unstaffed" : "Staffed"}</td>
            <td>
              <table>
                {day.staffedH.map(timePeriod => (
                  <tr key={timePeriod.id}>
                    <td>{formatTime(timePeriod.openTime)}</td>
                    <td>{formatTime(timePeriod.closeTime)}</td>
                    <td>
                      <button>DELETE</button>
                    </td>
                  </tr>
                ))}
              </table>
              {addTime === day.id && <AddTimePeriodRow setAddTime={setAddTime}/>}
            </td>
            <td>
              <button onClick={() => setAddTime(day.id)}>add time period</button>
            </td>
          </tr>
        ))}
        {/* <tr>
          <th>MONDAY</th>
          <td>{mondayAccessTimes.length === 0? "Unstaffed" : "Staffed"}</td>
          <td>
            <table>
              {mondayAccessTimes.map(timePeriod => (
                <tr key={timePeriod.id}>
                  <td>{formatTime(timePeriod.openTime)}</td>
                  <td>{formatTime(timePeriod.closeTime)}</td>
                  <td>
                    <button>DELETE</button>
                  </td>
                </tr>
              ))}
            </table>
          </td>
          <td>
            <button>add time period</button>
          </td>
        </tr>
        <hr />
        <tr>
          <th>TUESDAY</th>
             <td>{tuesdayAccessTimes.length === 0? "Unstaffed" : "Staffed"}</td>
          <td>
            <table>
              {tuesdayAccessTimes.map(timePeriod => (
                <tr key={timePeriod.id}>
                  <td>{formatTime(timePeriod.openTime)}</td>
                  <td>{formatTime(timePeriod.closeTime)}</td>
                  <td>
                    <button>DELETE</button>
                  </td>
                </tr>
              ))}
            </table>
            {addTime === "tuesday" && <AddTimePeriodRow setAddTime={setAddTime}/>}
          </td>
          <td>
            <button onClick={() => setAddTime("tuesday")}>add time period</button>
          </td>
        </tr>
        <hr />

        <tr>
          <th>WEDNESDAY</th>
             <td>{wednesdayAccessTimes.length === 0? "Unstaffed" : "Staffed"}</td>
          <td>
            <table>
              {wednesdayAccessTimes.map(timePeriod => (
                <tr key={timePeriod.id}>
                  <td>{formatTime(timePeriod.openTime)}</td>
                  <td>{formatTime(timePeriod.closeTime)}</td>
                  <td>
                    <button>DELETE</button>
                  </td>
                </tr>
              ))}
            </table>
          </td>
          <td>
            <button>add time period</button>
          </td>  
        </tr>
        <tr>
          <th>THURSDAY</th>  
        </tr>
        <tr>
          <th>FRIDAY</th>  
        </tr>
        <tr>
          <th>SATURDAY</th>  
        </tr>
        <tr>
          <th>SUNDAY</th>  
        </tr> */}
       </table>
      </header>
    </div>
  );
}

export default App;

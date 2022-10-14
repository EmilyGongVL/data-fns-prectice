import './App.css';
import {locationAccessTimes} from "./dummydata";

function App() {
  console.log(locationAccessTimes)
  const getAccessTimes = (type) =>  locationAccessTimes.filter((i) => i.type === type)
  const staffedHours = getAccessTimes("STAFF")
  console.log(staffedHours)
  const mondayAccessTimes = staffedHours.filter(i => i.day === "MONDAY")
  const tuesdayAccessTimes = staffedHours.filter(i => i.day === "TUESDAY")
  const wednesdayAccessTimes = staffedHours.filter(i => i.day === "WEDNESDAY")
  const thursdayAccessTimes = staffedHours.filter(i => i.day === "THURSDAY")
  const fridayAccessTimes = staffedHours.filter(i => i.day === "FRIDAY")
  const saturdayAccessTimes = staffedHours.filter(i => i.day === "SATURDAY")
  const sundayAccessTimes = staffedHours.filter(i => i.day === "SUNDAY")
  console.log(mondayAccessTimes)
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
        <tr>
          <th>MONDAY</th>
          <td>{mondayAccessTimes.length === 0? "Unstaffed" : "Staffed"}</td>
          <td>
            <table>
              {mondayAccessTimes.map(timePeriod => (
                <tr key={timePeriod.id}>
                  <td>{formatTime(timePeriod.openTime)}</td>
                  <td>{formatTime(timePeriod.closeTime)}</td>
                  <td>
                    <button>SAVE</button>
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
          <th>TUESDAY</th>
        </tr>
        <tr>
          <th>WEDNESDAY</th>  
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
        </tr>
       </table>
      </header>
    </div>
  );
}

export default App;

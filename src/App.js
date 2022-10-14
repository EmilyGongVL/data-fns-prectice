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
                  <td>{timePeriod.openTime}</td>
                  <td>{timePeriod.closeTime}</td>
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

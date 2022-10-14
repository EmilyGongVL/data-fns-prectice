import './App.css';
import {locationAccessTimes} from "./dummydata";

function App() {
  console.log(locationAccessTimes)
  const getAccessTimes = (type) =>  locationAccessTimes.filter((i) => i.type === type)
  const staffedHours = getAccessTimes("STAFF")
  console.log(staffedHours)

  return (
    <div className="App">
      <header className="App-header">
       hello
      </header>
    </div>
  );
}

export default App;

import {useState} from 'react';
import formatTime from "../utils/formatTime";
import AddTimePeriodRow from '../components/AddTimePeriodRow';


export default function AccessTimeTable({title, data}) {
  const [addTime, setAddTime] = useState("")

  return (
    <>
      <h2>{title}</h2>
       <table>
        <tbody>
        {data.map((day) => (
          <tr key={day.id} >
            <th>{day.day}</th>
            <td>{day.timePeriod.length === 0? "Unstaffed" : "Staffed"}</td>
            <td>
              <table>
                <tbody>
                  {day.timePeriod.map(timePeriod => (
                    <tr key={timePeriod.id}>
                      <td>{formatTime(timePeriod.openTime)}</td>
                      <td>{formatTime(timePeriod.closeTime)}</td>
                      <td>
                        <button>DELETE</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {addTime === day.id && <AddTimePeriodRow setAddTime={setAddTime}/>}
            </td>
            <td>
              <button onClick={() => setAddTime(day.id)}>add time period</button>
            </td>
          </tr>
        ))}
        </tbody>
       </table>
    </>
  )
}

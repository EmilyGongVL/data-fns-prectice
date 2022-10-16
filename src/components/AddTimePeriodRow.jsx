import {useState} from 'react'

export default function AddTimePeriodRow({setAddTime}) {
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");

  const saveTimePeriod = () => {
    //call add time period mutation
    console.log(openTime, closeTime)
    setAddTime("")
  }
  return (
    <>
      <input type="time" value={openTime} onChange={(e) => setOpenTime(e.target.value)}/>
      <span>to</span>
      <input type="time" value={closeTime} onChange={(e) => setCloseTime(e.target.value)}/>
      <button type='submit' onClick={saveTimePeriod}>Save</button>
      <button type='submit'onClick={() => setAddTime("")}>Delete</button>
    </>
  )
}

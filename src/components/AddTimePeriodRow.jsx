import {useState} from 'react'

export default function AddTimePeriodRow({setAddTime}) {
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");

  const saveTimePeriod = () => {
    //TODO: call add time period mutation
    console.log(openTime, closeTime)
    setAddTime("")
  }
  return (
    <>
      <input type="time" value={openTime} onChange={(e) => setOpenTime(e.target.value)} required/>
      <input type="time" value={closeTime} onChange={(e) => setCloseTime(e.target.value)} required/>
      <button type='submit' onClick={saveTimePeriod}>Save</button>
      <button type='submit'onClick={() => setAddTime("")}>Delete</button>
    </>
  )
}

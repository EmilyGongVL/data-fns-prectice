const formatTime = (time) => {
  const hour = Number(time.slice(0,2))
  if (hour >=0 && hour < 12) return `${time.slice(0, 5)} AM`
  if (hour === 12) return `${time.slice(0, 5)} PM` 
  if (hour > 12 && hour < 22) return `0${hour - 12}:${time.slice(3,5)} PM`
  if (hour > 22) return `${hour - 12}:${time.slice(3,5)} PM`
}

export default formatTime
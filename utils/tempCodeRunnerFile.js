const date = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDay()
  const hours = date.getHours()
  const minuts = date.getMinutes()
  const seconds = date.getSeconds()
  console.log(`${year}${month}${day}${hours}${minuts}${seconds}`)
  return `${year}${month}${day}${hours}${minuts}${seconds}`
}

date()
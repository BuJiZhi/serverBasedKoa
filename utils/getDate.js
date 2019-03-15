module.exports = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minuts = date.getMinutes()
  const seconds = date.getSeconds()
  return `${year}${month}${day}${hours}${minuts}${seconds}`
}
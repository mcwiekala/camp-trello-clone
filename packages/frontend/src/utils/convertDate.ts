const convertDate = (date: Date) => {
  const newDate = date.toLocaleDateString('en-GB', {
    timeZone: 'CET',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
  const sp = newDate.split(' ')
  const parsedDate = `${sp[0]} ${sp[1]}, ${sp[2]}`
  return parsedDate
}

export default convertDate

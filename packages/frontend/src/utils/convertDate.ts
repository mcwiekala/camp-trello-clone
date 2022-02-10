const convertDate = (date: Date) => {
  const newDate = date.toLocaleDateString('en-GB', {
    timeZone: 'CET',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
  const dateSplitArray = newDate.split(' ')
  const parsedDate = `${dateSplitArray[0]} ${dateSplitArray[1]}, ${dateSplitArray[2]}`

  return parsedDate
}

export default convertDate

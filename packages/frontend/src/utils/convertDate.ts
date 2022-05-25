const convertDate = (date: Date): string => {
  console.log(`Data: ${date}`)
  // const newDate: string = date.toLocaleDateString('en-GB')
  // const dateSplitArray = newDate.split(' ')
  // return `${dateSplitArray[0]} ${dateSplitArray[1]}, ${dateSplitArray[2]}`
  return date.toString()
}

export default convertDate

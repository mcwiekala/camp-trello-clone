export const getUserNameInitials = (name: string) => {
  const firstLetters = name.match(/\b(\w)/g) // ['j','D']
  return firstLetters?.join('')
}

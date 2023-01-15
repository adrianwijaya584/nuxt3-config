export default (length= 10): string=> {
  let result= ""
  const str= "abcdefghijklmnpqrstuvwxyz";

  for (let i = 0; i < length; i++) {
    result+= str[Math.floor(Math.random() * str.length)]
  }

  return result
}
export default (length= 5): number=> {
  let result= ""
  const num= "1234567890"

  Array(length).fill("").forEach(_=> {
    result+= num[Math.floor(Math.random() * num.length)]    
  })
  
  return +result
}
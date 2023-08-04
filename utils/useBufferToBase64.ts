function toBase64(arr: number[]) {
  const url= btoa(
    arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
 );

 return `data:image/png;base64,${url}`;
};

export default toBase64;
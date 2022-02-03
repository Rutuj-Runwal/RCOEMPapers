var len = 0;
const handlefileDload = event => {
  const files = event.target.files
  const formData = new FormData()
  formData.append('myFile', files[0])
  len = formData.length;
  fetch('/saveFile', {
    method: 'GET',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })
}
if(len){
  setInterval(handlefileDload(" ftp://117.254.209.21"), 50000);
}

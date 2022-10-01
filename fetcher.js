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
fetch('/url/to/server')
.then(res => {
    return res.text();
})
.then(data => {
    $('#container').html(data);
});
var quizUrl = 'http://www.rknec.edu/';
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/html');
fetch(quizUrl,{
    mode: 'no-cors',
    method: 'get',
    headers: myHeaders
}).then(function(response) {
    response.text().then(function(text) {
        console.log(text);
    })
}).catch(function(err) {
  console.log(err)
});

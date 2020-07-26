const fs = require('fs')
const http = require('http');

const dir = fs.opendirSync('.')
let dirent
while ((dirent = dir.readSync()) !== null) {
  const file = fs.createWriteStream("Bell.jpg");
  const request = http.get("https://cxfakes.com/wp-content/uploads/2020/02/Belle-Delphine-Porn-XXX-Pics.jpg", function(response) {
  response.pipe(file);
});
}
dir.closeSync()
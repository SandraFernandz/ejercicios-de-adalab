const fs = require('fs');

const myObject = {
  user: 'Mari Carmen',
  email: 'mari@gmail.com',
  age: 28,
};
console.log(myObject);

const fileContent = JSON.stringify(myObject);

const readFile = (fileName, callback) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.log('Error:', err);
    } else {
      callback();
    }
  });
};

const writeFile = (fileName, fileContent, callback) => {
  fs.writeFile(fielName, fileContent, (err) => {
    if (err) {
    } else {
      callback();
    }
  });
};

readFile('./input.txt', (fileContent) => {
  const currentDate = new Date().toString();
  const newFileContent = `${currentDate} : ${fileContent}`;
  writeFile('./output.txt', newFileContent, () => {
    console.log('The file has been copied');
  });
});

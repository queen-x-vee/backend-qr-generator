import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';


inquirer
  .prompt([
    {
        message: "Enter a URL to generate a QR code",
        name: "URL",
    }
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));

    fs.writeFile('url.txt', url, (err) => {
    
    if (err) throw err;
    console.log('The QR code has been saved!');

  })})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
/* 
1. use the inquirer npm package to get user input
2. use the qr-image npm package to generate a QR code image with the entered url
3. create a txt file to save the user input using the native fs module
*/
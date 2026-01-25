/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image'
import { writeFile } from 'fs';
import { createWriteStream } from 'fs';
inquirer
  .prompt([
    {
        type: 'input',
        name: 'url',
        message: 'Please share the link:'
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const link=answers.url
    const qrImage=qr.image(link)
    const output = createWriteStream('qr.png');
    qrImage.pipe(output);
    writeFile('inputs.txt',link,(err)=>{
        if (err) throw err;
        console.log("input saved successfully");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(`Prompt couldn't be rendered in the current environment: ${error}`)
    } else {
      // Something else went wrong
      console.log(`Sorry, something went wrong: ${error}`)
    }
  });
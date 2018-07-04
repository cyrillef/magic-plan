[![Node.js](https://img.shields.io/badge/Node.js-9.5.0-blue.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-5.8.0-blue.svg)](https://www.npmjs.com/)
![Platforms](https://img.shields.io/badge/platform-windows%20%7C%20osx%20%7C%20linux-lightgray.svg)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)


# magic-plan

Magic-Plan XML extraction sample

## Dependencies

This sample is dependent on the server part on Node.js and couple of Node.js extensions
which would update/install automatically via 'npm':


## Setup/Usage Instructions

### Deploy on Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


<a name="setupSample"></a>
### Setup
1. Download and install [Node.js](http://nodejs.org/) (that will install npm as well)
2. Download this repo anywhere you want.
3. Execute 'npm install', this command will download and install the required node modules automatically for you. <br />
   ```
   npm install
   ```
4. Define a PORT system variable, or leave it to use default port 80
   ```
   set PORT=3000
   ```
5. Edit server/magic-plan.js line #33
   ```
   var fromEmail ='myaddress@gmail.com' ;
   var fromEmailSt ='My Sending email <' + fromEmail + '>' ;
   var toEmails =[
    	'email1@gmail.com',
    	'email2@gmail.com'
   ] ;
   ```
6. Edit server/sendMail.js line #22
   ```
   var MJ_APIKEY_PUBLIC = 'your mailjet public key' ;
   var MJ_APIKEY_PRIVATE = 'your mailjet private key' ;
   ```
5. Launch server


          * Windows<br />
            ```
            [set PORT=<port>]
            
            node start.js
            ```
          * OSX/Linux<br />
            ```
            [sudo] [PORT=<port>] node start.js
            ```
   <br />
   <b>Note:</b> the port argument can be omitted and default to port 80. If port 80 is already in use by another
   application (like Skype, or IIS, or Apache, ...), you can use any other free port such as 8000, 3000, etc...
6. Ask magic-plan to update the webhook URL to point to your server.
   --------

## License

This sample is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT).
Please see the [LICENSE](LICENSE) file for full details.


## Written by

Cyrille Fauvel <br />
Forge Partner Development <br />
http://developer.autodesk.com/ <br />
http://around-the-corner.typepad.com <br />

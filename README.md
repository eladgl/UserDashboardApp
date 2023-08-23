# UserDashboardApp
React based app for handling users, updating users watching information in a table regarding the users.


First thing, since I have used a library called "mocking_g", the user avatar photo leads to 
a faulty image. So after you do npm install, please go in node_modules/mocking_g/types/collection/imageTypes.js

You will see a const object named imageTypes and iside the key avatar.

![image](https://github.com/eladgl/UserDashboardApp/assets/59554824/544df881-c955-4a93-8d7c-576921f54283)


Instead of returnning faker.imaage.avatar() we will replace that with the following: 
this link: https://picsum.photos/200/300?random={?} where instead of the question mark and the curly brackets we will put a random positive integer and generate random avatars for this project


![image](https://github.com/eladgl/UserDashboardApp/assets/59554824/ce85311e-838c-48c5-8121-b6883c289cce)


Then open terminal and run node myServer/mySchemaData.json
run another terminal to run the server with node myServer/server.js

run in the last one npm start


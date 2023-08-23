const gen = require('mocking_g');
const fs = require('fs');

gen.schemas.setPath("myServer");

path = "myServer/mySchemaData.json";
generated_data = {};
//generate data for schema
//console.log(gen.schemas.getSchema("users", "overTime"));
ovTime = gen.schemas.getSchema("users", "overTime");
userData = gen.schemas.getSchema("users", "user");
generated_data["users"] = {};
//generated_data["users"]["overTime"] = gen.generate(ovTime);
generated_data["users"]["user"] = gen.generate(userData,1000);


//write init data to server
const jsonData = JSON.stringify(generated_data, null, 2);
console.log("schema was written on: ", path)
fs.writeFileSync( path, jsonData, 'utf8');
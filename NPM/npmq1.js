function xmlParse(xmlFileName){
var fs = require('fs');
var parse = require('xml-parser');
var xml = fs.readFileSync(xmlFileName, 'utf8');
var inspect = require('util').inspect;

var obj = parse(xml);
return inspect(obj, { colors: true, depth: Infinity });
}
try{
let xmlToJson = function(){
const xmlFileName= "xmldata.xml"
console.log(xmlParse(xmlFileName));
}
xmlToJson();
}
catch(e){
  console.log("Enter File location correctly");
}

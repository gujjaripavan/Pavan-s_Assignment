let source = `<products>
   <product>
       <baseId>{{{baseId}}}</baseId>
       <isActive>{{isActive}}</isActive>
       <contentType>
           <contentTypeValue>{{contentType.one.value}}</contentTypeValue>
       </contentType>
       <features>
           <feature>{{{feature.one}}}</feature>
       </features>
       <searchTerms>
           <searchTermValue>{{searchTermValue}}</searchTermValue>
       </searchTerms>
       <childProducts>
           <childProduct>
               <baseId></baseId>
               <isActive></isActive>
               <features>
                   <feature></feature>
               </features>
               <searchTerms>
                   <searchTermValue></searchTermValue>
               </searchTerms>
           </childProduct>
           <childProduct>
               <baseId></baseId>
               <isActive></isActive>
               <features>
                   <feature></feature>
               </features>
               <searchTerms>
                   <searchTermValue></searchTermValue>
               </searchTerms>
           </childProduct>
           <childProduct>
               <baseId></baseId>
               <isActive></isActive>
               <features>
                   <feature></feature>
               </features>
               <searchTerms>
                   <searchTermValue></searchTermValue>
               </searchTerms>
           </childProduct>
       </childProducts>
   </product>
</products>`;
const Handlebars = require("handlebars");
const template = Handlebars.compile(source);

const data = {
    "baseId": "one",
    "feature": {
      "one": "parent",
      "two": "first entry"
    },
    "contentType": {
      "one": {
        "value": "pure"
      },
      "two": {
        "value": "mix"
      }
    },
    "isActive": true,
    "childProducts": [
      {
        "baseId": "one-one",
        "isActive": true
      },
      {
        "baseId": "one-two",
        "isActive": false
      },
      {
        "baseId": "one-3",
        "isActive": true
      },
      {
        "baseId": "one-4",
        "isActive": true,
        "feature": {
          "one": "parent",
          "two": "first entry"
        },
        "searchTerms": {
          "0": "glue",
          "one": "adhesive",
          "two": "stick"
        }
      }
    ]
  };
const result = template(data);
console.log(result);

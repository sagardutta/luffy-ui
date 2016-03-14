"use strict";


function convert(detail){
  let details = detail.split(" ");

  let fieldName = details[0].toLowerCase();
  if(details[1]){
    fieldName = fieldName + details[1];
  }
  return fieldName;
}



var admissionDetails = ["Min Age","Max Age","Application Process","Selection Process","Source","Last Date","Notification Date","Link ToSource","Contact Details"];

admissionDetails.map(function(detail){
  console.log('<th>'+detail+'</th>');
});


admissionDetails.map(function(detail){
  let details = detail.split(" ");
  let fieldName = details[0].toLowerCase()+details[1];
  console.log('<td>{result.'+fieldName+'}</td>');
});

var fields = '';
admissionDetails.map(function(detail){
  let details = detail.split(" ");
  let fieldName = details[0].toLowerCase()+details[1];
  fields.concat('\''+fieldName+'\',')
});

let j =0;
let fieldNameWithApos = "";
let fieldDef = "";
let divDefinition = '<div className="form-group"><label>FIRST_NAME</label><div className="col-xs-3"><input className="form-control" type="text" placeholder="'+"FIRST_NAME"+'" {...'+"firstName"+'}/></div></div>';
console.log(divDefinition);
for (var detail of admissionDetails){
  //fields.concat(detail);
  let fieldName = convert(detail);
  fieldNameWithApos = fieldNameWithApos +  ('\''+fieldName+'\',');
   fieldDef = fieldDef +  (fieldName+',');
   console.log(divDefinition.replace("FIRST_NAME",detail).replace("FIRST_NAME",detail).replace("firstName",fieldName));
  //  console.log(divDefinition.);

  if( j == 8 ){
      console.log(fieldNameWithApos);
      console.log(fieldDef);
  }
 j++;

}


//

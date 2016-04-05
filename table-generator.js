"use strict";


function convert(detail){
  let details = detail.split(" ");
  let fieldName = "";
  let i =0;
  for (i=0;i< details.length;i++){
    if( i == 0){
      fieldName = details[i].toLowerCase();
    }else{
      fieldName = fieldName + details[i];
    }
  }
  return fieldName;
}



var admissionDetails = ["Notification Name","Qualification","Age","Application Procedure","Selection Process","Source","Last Date","Notification Date","Link ToSource","Duration","Contact Details","Tags","Entrance ExamDate","Required Certificates","Question Paper Language"];

admissionDetails.map(function(detail){
  console.log('<th>'+detail+'</th>');
});


admissionDetails.map(function(detail){
  let details = detail.split(" ");

  let fieldName = details[0].toLowerCase();
  if(details[1]){
    fieldName += details[1];
  }
  if(details[2]){
    fieldName += details[2];
  }
  console.log('<td>{result.'+fieldName+'}</td>');
});

var fields = '';
admissionDetails.map(function(detail){
  let details = detail.split(" ");
  let fieldName = details[0].toLowerCase();
  if(details[1]){
    fieldName += details[1];
  }
  if(details[2]){
    fieldName += details[2];
  }
  fields.concat('\''+fieldName+'\',')
});

let j =0;
let fieldNameWithApos = "";
let fieldDef = "";
let divDefinition = '<div className="form-group"><label>FIRST_NAME</label><div><input className="form-control" type="text" placeholder="'+"FIRST_NAME"+'" {...'+"firstName"+'}/></div></div>';
console.log(divDefinition);
console.log("-----------------------------------------------------------------------------------");
for (var detail of admissionDetails){
  //fields.concat(detail);
  let fieldName = convert(detail);
  fieldNameWithApos = fieldNameWithApos +  ('\''+fieldName+'\',');
   fieldDef = fieldDef +  (fieldName+',');
   console.log(divDefinition.replace("FIRST_NAME",detail).replace("FIRST_NAME",detail).replace("firstName",fieldName));
  //  console.log(divDefinition.);

  if( j == 8 ){

  }
 j++;

}
console.log(fieldNameWithApos);
console.log(fieldDef);

//

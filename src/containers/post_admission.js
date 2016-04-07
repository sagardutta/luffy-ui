import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createAdmission} from '../actions/index';
import {Link} from 'react-router';

export const fields = ['notificationName','qualification','age','applicationProcedure','selectionProcess','source','lastDate','notificationDate','linkToSource','duration','contactDetails','tags','entranceExamDate','requiredCertificates','questionPaperLanguages'];

 class PostAdmission extends Component{

constructor(props){
  super(props);
  this.state = {posting:''};
}

static contextTypes = {
    router: PropTypes.object
};
   onSubmit(props){
      this.setState({posting:'posting....'});
       props.createdDate = new Date();
       if( props.tags.constructor === String ){
          props.tags = props.tags.split(',');
       }
       if( props.questionPaperLanguages.constructor === String ){
          props.questionPaperLanguages = props.questionPaperLanguages.split(',');
       }
       if( props.requiredCertificates.constructor === String ){
          props.requiredCertificates = props.requiredCertificates.split(',');
       }
       this.props.createAdmission(props)
           .then(() => {

              this.context.router.push('/');
           })
           .catch((e) => {
              this.setState({posting:'posting failed...please retry later'});
           });
   }

  render(){

    const{
      fields :{notificationName,qualification,age,applicationProcedure,selectionProcess,source,lastDate,notificationDate,linkToSource,duration,contactDetails,tags,entranceExamDate,requiredCertificates,questionPaperLanguages},
      handleSubmit,
      resetForm,
      submitting
    } = this.props;

    return(
      <div className="m-t-3">
        <h2> Create an admission entry </h2>
      <form role="form" className="p-t-3" onSubmit={handleSubmit(this.onSubmit.bind(this))} >

      <div className="form-group"><label>Notification Name</label><div><input className="form-control" type="text" placeholder="Notification Name" {...notificationName}/></div></div>
    <div className="form-group"><label>Qualification</label><div><input className="form-control" type="text" placeholder="Qualification" {...qualification}/></div></div>
    <div className="form-group"><label>Age</label><div><input className="form-control" type="text" placeholder="Age" {...age}/></div></div>
    <div className="form-group"><label>Application Procedure</label><div><input className="form-control" type="text" placeholder="Application Procedure" {...applicationProcedure}/></div></div>
    <div className="form-group"><label>Selection Process</label><div><input className="form-control" type="text" placeholder="Selection Process" {...selectionProcess}/></div></div>
    <div className="form-group"><label>Source</label><div><input className="form-control" type="text" placeholder="Source" {...source}/></div></div>
    <div className="form-group"><label>Last Date</label><div><input className="form-control" type="date" placeholder="Last Date" {...lastDate}/></div></div>
    <div className="form-group"><label>Notification Date</label><div><input className="form-control" type="date" placeholder="Notification Date" {...notificationDate}/></div></div>
    <div className="form-group"><label>Link ToSource</label><div><input className="form-control" type="text" placeholder="Link ToSource" {...linkToSource}/></div></div>
    <div className="form-group"><label>Duration in years</label><div><input className="form-control" type="text" placeholder="Duration" {...duration}/></div></div>
    <div className="form-group"><label>Contact Details</label><div><input className="form-control" type="text" placeholder="Contact Details" {...contactDetails}/></div></div>
    <div className="form-group">
    <label>Tags</label><div> <input className={`form-control ${tags.touched && tags.error ? ' has-danger' : ''}`} type="text"  placeholder="tags" {...tags}/></div>
    <div className="text-help">
      {tags.error}
    </div>
    </div>
    <div className="form-group"><label>Entrance ExamDate</label><div><input className="form-control" type="date" placeholder="Entrance ExamDate" {...entranceExamDate}/></div></div>
    <div className="form-group"><label>Required Certificates</label><div><input className="form-control" type="text" placeholder="Required Certificates" {...requiredCertificates}/></div></div>
    <div className="form-group"><label>Question Paper Languages</label><div><input className="form-control" type="text" placeholder="Question Paper Languages" {...questionPaperLanguages}/></div></div>



<div>
<button className={`btn btn-large btn-success has-spinner ${ {submitting} ? 'activee' : ''}`} type="submit" disabled={submitting} >
<span className ="spinner"><i className="icon-spin icon-refresh"></i></span>  Submit
</button>

<Link to="/" className="btn btn-danger"  type="button" >
    Back
 </Link>
<span className="m-t-3"> <i class="fa fa-spinner">{this.state.posting}</i></span>
</div>
      </form>
      </div>
    );
  }
}

function validate(values){
const  errors = {};

  if(!values.tags){
    errors.tags = 'please enter the tag values';
  }
  return errors;
}

function mapStateToProps(state){
  const init = {
  "_id": "570020bfef95673d0a52c25b",
  "__t": "Admission",
  "notificationName": "polycet AP",
  "age": 25,
  "applicationProcedure": "test",
  "selectionProcess": "test",
  "source": "test",
  "lastDate": "2016-03-03T00:00:00.000Z",
  "notificationDate": "2016-03-25T00:00:00.000Z",
  "linkToSource": "test",
  "contactDetails": "test",
  "createdDate": "2016-03-29T03:43:45.477Z",
  "category": "admission",
  "duration":"3",
  "qualification":"10th class",
  "__v": 0,
  "questionPaperLanguages": [
    "english",
    "telugu"
  ],
  "requiredCertificates": [
    "cert1",
    "cert2"
  ],
  "tags": [
    "adm28",
    "test32"
  ]
};
  return {initialValues: init};
}

export default reduxForm({
  form:'admissionForm',
  fields,
  validate
},mapStateToProps,{createAdmission})(PostAdmission);

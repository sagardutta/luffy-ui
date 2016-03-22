import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createAdmission} from '../actions/index';
import {Link} from 'react-router';

export const fields = ['minAge','maxAge','applicationProcess','selectionProcess','source','lastDate','notificationDate','linkToSource','contactDetails','tags'];

 class UpdateAdmission extends Component{



  render(){

    const{
      fields :{minAge,maxAge,applicationProcess,selectionProcess,source,lastDate,notificationDate,linkToSource,contactDetails, tags},
      handleSubmit,
      resetForm,
      submitting,
      initialValues
    } = this.props;

    console.log(initialValues);

    return(
      <div className="m-t-3">
        <h2> Update an admission entry </h2>
      <form role="form" className="p-t-3" >


  <div className="form-group"><label>Min Age</label> <div><input className="form-control" type="text" placeholder="Min Age" {...minAge}/></div></div>
  <div className="form-group"><label>Max Age</label><div> <input className="form-control" type="text" placeholder="Max Age" {...maxAge}/></div></div>
  <div className="form-group"><label>Application Process</label><div> <input className="form-control" type="text" placeholder="Application Process" {...applicationProcess}/></div></div>
  <div className="form-group"><label>Selection Process</label><div> <input className="form-control" type="text" placeholder="Selection Process" {...selectionProcess}/></div></div>
  <div className="form-group"><label>Source</label><div> <input className="form-control" type="text" placeholder="Source" {...source}/></div></div>
  <div className="form-group"><label>Last Date</label><div> <input className="form-control" type="date" placeholder="Last Date" {...lastDate}/></div></div>
  <div className="form-group"><label>Notification Date</label><div> <input className="form-control" type="date" placeholder="Notification Date" {...notificationDate}/></div></div>
  <div className="form-group"><label>Link ToSource</label><div> <input className="form-control" type="text" placeholder="Link ToSource" {...linkToSource}/></div></div>
  <div className="form-group"><label>Contact Details</label><div> <input className="form-control" type="text" placeholder="Contact Details" {...contactDetails}/></div></div>
  <div className="form-group">
  <label>Tags</label><div> <input className={`form-control ${tags.touched && tags.error ? ' has-danger' : ''}`} type="text"  placeholder="tags" {...tags}/></div>
  <div className="text-help">
    {tags.error}
  </div>
  </div>

<div>
<button className={`btn btn-large btn-success has-spinner ${ {submitting} ? 'active' : ''}`} type="submit" disabled={submitting} >
<span className ="spinner"><i className="icon-spin icon-refresh"></i></span>  Submit
</button>

<button className="btn btn-danger"  type="button" disabled={submitting} onClick={resetForm} >
 Clear values
 </button>

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
  console.log(state.selectedAdmission);
  return {initialValues:state.selectedAdmission};
}

export default reduxForm({
  form:'admissionUpdateForm',
  fields,
  validate
},mapStateToProps,{createAdmission})(UpdateAdmission);

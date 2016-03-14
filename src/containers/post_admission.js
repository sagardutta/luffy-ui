import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createAdmission} from '../actions/index';
export const fields = ['minAge','maxAge','applicationProcess','selectionProcess','source','lastDate','notificationDate','linkToSource','contactDetails','tags'];

 class PostAdmission extends Component{



  render(){
    
    const{
      fields :{minAge,maxAge,applicationProcess,selectionProcess,source,lastDate,notificationDate,linkToSource,contactDetails, tags},
      handleSubmit,
      resetForm,
      submitting
    } = this.props;
    return(
      <div className="m-t-3">
        <h2> Create an admission entry </h2>
      <form role="form" className="p-t-3" onSubmit={handleSubmit(this.props.createAdmission)} >


  <div className="form-group"><label>Min Age</label> <div><input className="form-control" type="text" placeholder="Min Age" {...minAge}/></div></div>
  <div className="form-group"><label>Max Age</label><div> <input className="form-control" type="text" placeholder="Max Age" {...maxAge}/></div></div>
  <div className="form-group"><label>Application Process</label><div> <input className="form-control" type="text" placeholder="Application Process" {...applicationProcess}/></div></div>
  <div className="form-group"><label>Selection Process</label><div> <input className="form-control" type="text" placeholder="Selection Process" {...selectionProcess}/></div></div>
  <div className="form-group"><label>Source</label><div> <input className="form-control" type="text" placeholder="Source" {...source}/></div></div>
  <div className="form-group"><label>Last Date</label><div> <input className="form-control" type="date" placeholder="Last Date" {...lastDate}/></div></div>
  <div className="form-group"><label>Notification Date</label><div> <input className="form-control" type="date" placeholder="Notification Date" {...notificationDate}/></div></div>
  <div className="form-group"><label>Link ToSource</label><div> <input className="form-control" type="text" placeholder="Link ToSource" {...linkToSource}/></div></div>
  <div className="form-group"><label>Contact Details</label><div> <input className="form-control" type="text" placeholder="Contact Details" {...contactDetails}/></div></div>
  <div className="form-group"><label>Tags</label><div> <input className="form-control" type="text" onblur={this.onTagsBlur} placeholder="tags" {...tags}/></div></div>

<input type="submit" />

      </form>
      </div>
    );
  }
}

export default reduxForm({
  form:'admissionForm',
  fields
},null,{createAdmission})(PostAdmission);

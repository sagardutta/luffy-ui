import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createAdmission} from '../actions/index';
import {Link} from 'react-router';

export const fields = ['minAge','maxAge','applicationProcess','selectionProcess','source','lastDate','notificationDate','linkToSource','contactDetails','tags'];

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
      fields :{minAge,maxAge,applicationProcess,selectionProcess,source,lastDate,notificationDate,linkToSource,contactDetails, tags},
      handleSubmit,
      resetForm,
      submitting
    } = this.props;

    return(
      <div className="m-t-3">
        <h2> Create an admission entry </h2>
      <form role="form" className="p-t-3" onSubmit={handleSubmit(this.onSubmit.bind(this))} >


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
<button className={`btn btn-large btn-success has-spinner ${ {submitting} ? 'activee' : ''}`} type="submit" disabled={submitting} >
<span className ="spinner"><i className="icon-spin icon-refresh"></i></span>  Submit
</button>

<button className="btn btn-danger"  type="button" disabled={submitting} onClick={resetForm} >
 Clear values
 </button>
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
  "_id": "56f1c5ecbf54ae5178066ab3",
  "__t": "Admission",
  "minAge": 21,
  "maxAge": 25,
  "applicationProcess": "test",
  "selectionProcess": "test",
  "source": "test",
  "lastDate": "2016-03-03",
  "notificationDate": "2016-03-25",
  "linkToSource": "test",
  "contactDetails": "test",
  "category": "admission",
  "__v": 0,
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

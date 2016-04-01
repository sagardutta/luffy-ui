import React, {
  Component,
  PropTypes
} from 'react';
import {
  reduxForm
} from 'redux-form';
import {
  updateAdmission,
  deleteAdmission
} from '../actions/index';
import {
  Link
} from 'react-router';

export const fields = ['minAge', 'maxAge', 'applicationProcess', 'selectionProcess', 'source', 'lastDate', 'notificationDate', 'linkToSource', 'contactDetails', 'tags'];

class UpdateAdmission extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  onSubmit(props) {

    if (props.tags.constructor === String) {
      props.tags = props.tags.split(',');
    }

    this.props.updateAdmission(this.props._id, props).then(() => {
      this.context.router.push('/');
    });
  }

  onDelete() {
    console.log("onDelete");
    this.props.deleteAdmission(this.props._id).then(() => {
      this.context.router.push('/');
    });
  }



  render() {

    const {
      fields: {
        minAge,
        maxAge,
        applicationProcess,
        selectionProcess,
        source,
        lastDate,
        notificationDate,
        linkToSource,
        contactDetails,
        tags
      },
      handleSubmit,
      resetForm,
      submitting,
      initialValues
    } = this.props;

    console.log(initialValues);

    return ( < div className = "m-t-3"
      onSubmit = {
        handleSubmit(this.onSubmit.bind(this))
      } >
      < h2 > Update an admission entry < /h2> < form role = "form"
      className = "p-t-3" >


      < div className = "form-group" > < label > Min Age < /label> <div><input className="form-control" type="text" placeholder="Min Age" {...minAge}/ > < /div></div >
      < div className = "form-group" > < label > Max Age < /label><div> <input className="form-control" type="text" placeholder="Max Age" {...maxAge}/ > < /div></div >
      < div className = "form-group" > < label > Application Process < /label><div> <input className="form-control" type="text" placeholder="Application Process" {...applicationProcess}/ > < /div></div >
      < div className = "form-group" > < label > Selection Process < /label><div> <input className="form-control" type="text" placeholder="Selection Process" {...selectionProcess}/ > < /div></div >
      < div className = "form-group" > < label > Source < /label><div> <input className="form-control" type="text" placeholder="Source" {...source}/ > < /div></div >
      < div className = "form-group" > < label > Last Date < /label><div> <input className="form-control" type="date" placeholder="Last Date" {...lastDate}/ > < /div></div >
      < div className = "form-group" > < label > Notification Date < /label><div> <input className="form-control" type="date" placeholder="Notification Date" {...notificationDate}/ > < /div></div >
      < div className = "form-group" > < label > Link ToSource < /label><div> <input className="form-control" type="text" placeholder="Link ToSource" {...linkToSource}/ > < /div></div >
      < div className = "form-group" > < label > Contact Details < /label><div> <input className="form-control" type="text" placeholder="Contact Details" {...contactDetails}/ > < /div></div >
      < div className = "form-group" >
      < label > Tags < /label><div> <input className={`form-control ${tags.touched && tags.error ? ' has-danger' : ''}`} type="text"  placeholder="tags" {...tags}/ > < /div> < div className = "text-help" > {
        tags.error
      } < /div> < /div>

      < div >
      < button className = {
        `btn btn-large btn-success has-spinner ${ {submitting} ? 'activee' : ''}`
      }
      type = "submit"
      disabled = {
        submitting
      } >
      < span className = "spinner" > < i className = "icon-spin icon-refresh" > < /i></span > Submit < /button>

      < Link to = "/"
      className = "btn btn-danger"
      type = "button" >
      Back < /Link>

      < button className = "btn btn-danger"
      type = "button"
      disabled = {
        submitting
      }
      onClick = {
        () => this.onDelete()
      } >
      Delete < /button>


      < /div> < /form> < /div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.tags) {
    errors.tags = 'please enter the tag values';
  }
  return errors;
}


function mapStateToProps(state) {
  console.log(state.selectedAdmission);
  let selectedAdmission = state.selectedAdmission;
  if (selectedAdmission.lastDate) {
    selectedAdmission.lastDate = selectedAdmission.lastDate.split('T')[0];
  }

  if (selectedAdmission.notificationDate) {
    selectedAdmission.notificationDate = selectedAdmission.notificationDate.split('T')[0];
  }


  return {
    initialValues: state.selectedAdmission,
    _id: state.selectedAdmission._id
  };
}

export default reduxForm({
  form: 'admissionUpdateForm',
  fields,
  validate
}, mapStateToProps, {
  updateAdmission,
  deleteAdmission
})(UpdateAdmission);

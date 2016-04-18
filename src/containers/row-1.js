import React, {
  Component,
  PropTypes
} from 'react';
import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';
import Time from 'react-time';
import {
  selectRow,
  updateRow
} from '../actions/index';
import ReactTable from 'reactable';



class Row extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.displayRow = this.displayRow.bind(this);
    this.editEntry = this.editEntry.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  displayRow(result) {
    this.props.selectRow(result);
  }

  editEntry(result) {
    this.props.updateRow(result);
    this.context.router.push('posts/update');
  }
  renderList(list) {
    if (list) {
      var renderedList = list.map(function(object) {
          return ( < div key = {
              object
            } > {
              object
            } < /div>);
          });

        return renderedList;

      }
      else {
        return '';
      }


    }


    render() {

      var tags = this.renderList(this.props.result.tags);

      var Table =  Reactable.Table;



      return (


        // <div  className="col-md-4" key={this.props.result._id}>
        // < div className="row"  key = {
        //   this.props.result._id
        // } >
        //
        //  <div className="col-md-3">{
        //   this.props.result.notificationName
        // } </div>
        //
        // <div className="col-md-3"> {
        //   tags
        // } </div>
        //
        // < div className="col-md-3" onClick = {
        //   () => this.editEntry(this.props.result)
        // } > < i className = "fa fa-pencil" > < /i> </div >
        //
        // < div className="col-md-3" onClick = {
        //   () => this.displayRow(this.props.result)
        // } > < i className = "fa fa-eye" > < /i></div >
        //
        //
        // </div>

        <Table className={table} />

      );
    }

  }

  function mapStateToProps() {
    return {};
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      selectRow,
      updateRow
    }, dispatch);
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Row);

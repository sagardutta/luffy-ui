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
import {
  editRow, selectRow, updateAdmission
} from '../actions/index';
import Time from 'react-time';
import Modal from 'react-modal';
import Row from './row-1';
import AdmissionModal from './admission_modal';
import {AgGridReact} from 'ag-grid-react';
import {reactCellRendererFactory} from 'ag-grid-react';







class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.editEntry = this.editEntry.bind(this);
    this.displayRow = this.displayRow.bind(this);
    this.convertRowsForTable = this.convertRowsForTable.bind(this);
    this.cellValueChanged = this.cellValueChanged.bind(this);
    this.listCellValueChanged = this.listCellValueChanged.bind(this);
    this.editRowCellRenderer = this.editRowCellRenderer.bind(this);
    this.viewRowCellRenderer = this.viewRowCellRenderer.bind(this);
    this.onCellClicked = this.onCellClicked.bind(this);
    this.dateRenderer = this.dateRenderer.bind(this);
    this.state = {
      modalIsOpen: false,
      result: {}
    }

  }

  static contextTypes = {
    router: PropTypes.object
  };



  editEntry(event) {
    this.props.editRow(event.node.data);

      this.context.router.push('posts/update');

  }

  displayRow(event) {
    this.props.selectRow(event.node.data);
  }



  onCellClicked (event){
      const action = event.colDef.headerName;

      switch(action){
        case 'Edit' :
          this.editEntry(event);
          break;
        case 'View':
          this.displayRow(event);
          break;
      }
  }

  cellValueChanged(params){

    params.data[params.colDef.field] = params.newValue;
    this.props.updateAdmission(params.data, params.data._id);
  }

  listCellValueChanged(params){

    params.newValue = params.newValue.split(",");

    params.data[params.colDef.field] = params.newValue;
    this.props.updateAdmission(params.data, params.data._id);

  }

  editRowCellRenderer(params){
    return (<i className = 'fa fa-pencil'> < /i>);
  }

viewRowCellRenderer(params){
  return(
    < i className = "fa fa-eye" > < /i>
  );
}

dateRenderer(params){
  params = params.params;
  let dateValue = params.data[params.colDef.field].split('T')[0];
  return (<span>{dateValue}</span>);
}


    convertRowsForTable(docs){

    const rowsForTable = docs.map((doc) => {
          let  {notificationName:notificationName, qualification:qualification, tags:tags} = doc;
          return {notificationName:notificationName, qualification:qualification, tags:tags};
    })
    return rowsForTable;
  }


  render() {

    if (this.props.searchResults.docs === undefined || this.props.searchResults.docs.length == 0) {
      return ( < div > No Search results to display < /div>);
      }
      else {

        let columnDefs = [
          {headerName:"Notification", field:"notificationName",width: 150, pinned: true,editable: false},
          {headerName:"Qualification", field:"qualification" ,width: 150 , pinned: true, editable: false},
          {headerName:"Notification Date", field:"notificationDate" ,width: 150 , pinned: true, cellRenderer: reactCellRendererFactory(this.dateRenderer)},
          {headerName:"Tags", field:"tags" ,width: 150 , pinned: true,editable: false, newValueHandler: this.listCellValueChanged},
          {headerName:"Edit", field:"_id" ,width: 60 , pinned: true, cellRenderer: reactCellRendererFactory(this.editRowCellRenderer) },
          {headerName:"View", field:"__v" ,width: 60 , pinned: true,  cellRenderer: reactCellRendererFactory(this.viewRowCellRenderer)}
        ];

        return (
          <div >
            <div style={{width:'100%', height:'500px'}} className="ag-blue">

          <AgGridReact
                     // gridOptions is optional - it's possible to provide
                     // all values as React props
                    //  gridOptions={this.gridOptions}
                     //
                    //  // listening for events
                    //  onGridReady={this.onGridReady.bind(this)}
                    // onRowSelected={this.displayRow.bind(this)}
                      onCellClicked={this.onCellClicked.bind(this)}

                    //onCellDoubleClicked = {this.onCellDoubleClicked.bind(this)}



                     //
                    //  // binding to simple properties
                    //  showToolPanel={this.state.showToolPanel}
                    //  quickFilterText={this.state.quickFilterText}
                     //
                    //  // binding to an object property
                    //  icons={this.state.icons}

                     // binding to array properties
                      columnDefs={columnDefs}
                     rowData={this.props.searchResults.docs}

                     // no binding, just providing harde coded strings for the properties
                     rowSelection="multiple"
                     enableColResize="true"
                     enableSorting="true"
                     enableFilter="true"
                     groupHeaders="true"
                     debug="true"
                 />

          < AdmissionModal / >

          </div>
          < /div>

      )
    }
  }
}

function mapStateToProps({
  searchResults
}) {
  return {
    searchResults,
    editRow
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    editRow, selectRow, updateAdmission
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);

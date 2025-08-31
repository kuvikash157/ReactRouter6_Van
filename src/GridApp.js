
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState, useMemo } from 'react';

const MyCellComponent = p => {
  return (<>
    <button onClick={() => window.alert("Action !")}>  {`   ${p.value} `} </button>
    {`+`}
  </>)
}

const CustomCellRenderer = ({ value }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {value}
      {/* <span>&#9660;</span> */}
      <i  style={{ marginLeft: 'auto' }}> <span>&or;</span></i>
      {/* <i className="fa fa-caret-down" style={{ marginLeft: 'auto' }}></i> */}
    </div>
  );
};

function App() {

  const [rowData, setrowData] = useState([
    { make: "Tesla", model: "Model Y", price: 89393, electric: true },
    { make: "Ford", model: "Mustang", price: 36343, electric: false },
    { make: "Toyota", model: "Corolla", price: 23987, electric: false },
    { make: "Tata", model: "Hex", price: 77393, electric: false },
    { make: "Tesla", model: "Model x", price: 89393, electric: true },
    { make: "Ford", model: "Eqa", price: 36343, electric: false },
    { make: "Toyota", model: "Corolla", price: 23987, electric: false },
    { make: "Tata", model: "Altroz", price: 77393, electric: false },
    { make: "Tesla", model: "Model s", price: 89393, electric: true },
    { make: "Ford", model: "EcoSports", price: 36343, electric: false },
    { make: "Toyota", model: "Fortuner", price: 23987, electric: false },
    { make: "Tata", model: "Harrier", price: 77393, electric: false },
    { make: "Tesla", model: "Model z", price: 89393, electric: true },
    { make: "Ford", model: "Endeavour", price: 36343, electric: false },
    { make: "Toyota", model: "HyeRider", price: 23987, electric: false },
    { make: "Tata", model: "Nexon", price: 77393, electric: false },
  ])

  const [colDefs, setColDefs] = useState([
    {
      field: "make",
      checkboxSelection: true,
      headerName: "Company Name",
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values:['Select Item','Tesla','Ford','Toyota','Tata'],
        defaultValue: 'Select '
      },
      cellRenderer: CustomCellRenderer,  
      //flex: 2,
      //cellRenderer : MyCellComponent,
      //valueGetter : p=> p.data.make +' '+ p.data.price,
    },
    {
      field: "model",  
      // cellRenderer: CustomCellRenderer,  
    },
    {
      field: "price",   
      valueFormatter: p => "$" + p.value.toLocaleString()
    },
    {
      field: "electric",
      cellEditor: 'agSelectCellEditor',
      editable: true,
     
      cellEditorParams: {
        values: ['true', 'false']
      }     
    },
  ])

  const defaultColDef = useMemo(()=>{
    return {
      flex: 1,
      //filter: true,
      //floatingFilter: true,
     // editable: true,      
    }
  },[]);

  const gridOptions = {
    singleClickEdit: true, // Enable editing on single mouse click
  };

  return (<>
    <div>Hello world</div>
    <div className='ag-theme-quartz' style={{ height: "500px" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        rowSelection={'multiple'}
        pagination={true}
        paginationPageSize={5}
        paginationPageSizeSelector={[5,10,15]}
        gridOptions={gridOptions}
        popupParent={document.body}
      />
    </div>
  </>
  );
}

export default App;

import './App.css';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

// Custom cell renderer component
const CustomCellRenderer = ({ value }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {value}
      <span>&#9660;</span>
    </div>
  );
};

function App() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    // Fetch initial data from API
    async function fetchData() {
      try {
        const response = await axios.get('getModelApi');
        setRowData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handleCellValueChanged = async (event) => {
    const { data } = event.node;
    const { make } = data;
    
    // Only make the API call when 'make' value changes
    if (event.colDef.field === 'make') {
      try {
        await axios.post('/save', { make }); // Assuming you need to send 'make' value to the API
      } catch (error) {
        console.error('Error saving data:', error);
      }
    }
  };

  const colDefs = [
    {
      field: "make",  
      headerName: "Company Name",  
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values:['Select', 'Tesla','Ford','Toyota','Tata'],
        defaultValue: 'Select'
      }
    },
    { field: "model" },
    { 
      field: "price", 
      valueFormatter: p => "$" + p.value.toLocaleString() 
    },
    { 
      field: "electric", 
      cellRendererFramework: CustomCellRenderer
    },
  ];

  const gridOptions = {
    singleClickEdit: true,
  };

  return (
    <>
      <div>Hello world</div>
      <div className='ag-theme-quartz' style={{ height: "500px" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          gridOptions={gridOptions}
          onCellValueChanged={handleCellValueChanged} // Add cell value changed event handler
          popupParent={document.body}
        />
      </div>
    </>
  );
}

export default App;

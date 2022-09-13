import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import '../DataTable/datatable.scss'
import { userColumns,userRows } from '../../DataTablesource';

const DataTable = () => {
  return (
    <div className='datatable'>
        <DataGrid
        rows={userRows}
        columns={userColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable
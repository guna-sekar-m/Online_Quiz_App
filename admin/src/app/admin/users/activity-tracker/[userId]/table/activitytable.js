'use client'
import dynamic from 'next/dynamic';
const ActionTemplate= dynamic(() => import('./actionTemplate'));
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
const Activitytable=(props)=>{
    const {tablebodydata,loading,first,rows,totalRecords,onPage,globalFilter,viewdetailsresult,downloadcertificate}=props;
    const tableheadclass="text-xs !text-gray-700  !bg-gray-50 !p-4";
    const serialNumberTemplate = (rowData, column) => {
      return  column.rowIndex + 1;
    };
    const getSeverity = (items) => {
        switch (items) {
            case 'Completed':
                return <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-100 text-green-800">{items}</span>;
            default:
                return <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800">{items}</span>;
        }
    };
    return(
        <>
            <DataTable dataKey="_id" paginator value={tablebodydata} lazy stripedRows  loading={loading}  first={first} rows={rows} size={'small'} 
             scrollable 
    
             emptyMessage="No records found"
             paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
             totalRecords={totalRecords}
             currentPageReportTemplate="Showing {first} to {last} of {totalRecords} records"
             cellClassName={'text-xs !text-gray-700 !px-4 !py-3  text-gray-900 whitespace-nowrap'}
             onPage={onPage}
             globalFilter={globalFilter}
             scrollHeight="600px"
             paginatorLeft
     
            >   
               <Column field="Index"  header="ID"  headerClassName={tableheadclass} body={serialNumberTemplate}></Column>
               <Column field="Category" header="Category" headerClassName={tableheadclass}></Column>
               <Column field="Sub Category" header="Sub Category" headerClassName={tableheadclass}></Column>
               <Column field="Level" header="Level" headerClassName={tableheadclass}></Column>
               <Column field="Level_Status" header="Level Status" headerClassName={tableheadclass} body={(rowData)=>getSeverity(rowData.Level_Status)}></Column>
               <Column field="Remaining_Time" header="Remaining Time" headerClassName={tableheadclass}></Column>
               <Column field="CorrectAnswerCount" header="Correct Answer Count" headerClassName={tableheadclass}></Column>
               <Column header="Action" headerClassName={tableheadclass} body={(rowData)=><ActionTemplate viewdetailsresult={viewdetailsresult} rowData={rowData} downloadcertificate={downloadcertificate}/>}></Column>
           </DataTable>
        </>
    )
}
export default Activitytable;
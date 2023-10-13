'use client'
import React from "react";
import dynamic from "next/dynamic";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Image from "next/image";
const ActionTemplate= dynamic(() => import('./actionTemplate'));
const Questiontable=(props)=>{
    const {tablebodydata,loading,first,rows,totalRecords,onPage,globalFilter,selectedProducts, setSelectedProducts,edittable,deleteconfirm}=props;
    const tableheadclass="text-xs !text-gray-700  !bg-gray-50 !p-4";
    const imageBodyTemplate = (img) => {
        return img['Image for Question']?<Image src={`${process.env.IMAGE_PATH}/${img['Image for Question']}`}  className="flex-shrink-0  w-[5rem] rounded-md" width={100} height={100} alt=""/>:null;
    };
    const serialNumberTemplate = (rowData, column) => {
      return  column.rowIndex + 1;
    };

        
    return(
        <>
             <DataTable dataKey="_id" paginator value={tablebodydata} lazy stripedRows  loading={loading}  first={first} rows={rows} size={'small'} 
                  scrollable 
                  selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                  emptyMessage="No records found"
                  paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                  totalRecords={totalRecords}
                  currentPageReportTemplate="Showing {first} to {last} of {totalRecords} records"
                  cellClassName={'text-xs !text-gray-700 !px-4 !py-3  text-gray-900 whitespace-nowrap'}
                  onPage={onPage}
                  globalFilter={globalFilter}
                  scrollHeight="600px"
          
                 >
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} headerClassName={tableheadclass} footerClassName="bg-red-500"></Column>
                    <Column field="Index"  header="ID"  headerClassName={tableheadclass} body={serialNumberTemplate}></Column>
                    <Column field="Question" header="Question" headerClassName={tableheadclass}></Column>
                    <Column field="Image for Question" header="Image for Question" body={imageBodyTemplate} headerClassName={tableheadclass}></Column>
                    <Column field="Option A" header="Option A" headerClassName={tableheadclass}></Column>
                    <Column field="Option B" header="Option B" headerClassName={tableheadclass}></Column>
                    <Column field="Option C" header="Option C" headerClassName={tableheadclass}></Column>
                    <Column field="Option D" header="Option D" headerClassName={tableheadclass}></Column>
                    <Column field="Correct Answer" header="Correct Answer" headerClassName={tableheadclass}></Column>
                    <Column field="Level" header="Level" headerClassName={tableheadclass}></Column>
                    <Column header="Action" headerClassName={tableheadclass} body={(rowData)=><ActionTemplate edittable={edittable} rowData={rowData} deleteconfirm={deleteconfirm}/>}></Column>
                </DataTable>
        </>
    )

}
export default Questiontable;
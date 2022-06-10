import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMEnu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItems, ordersGrid } from '../assets/dummy'
import { Header } from '../components'
import { ColumnDirective } from '@syncfusion/ej2-react-charts'


const Employees = () => {
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header title="Orders" category="page"/>
            <GridComponent
                id="gridcomp"
                dataSource={ordersData}
                allowPaging
                allowSorting
            >
                <ColumnsDirective>
                    {ordersGrid.map((item, i) => (
                        <ColumnDirective 
                            key={i} 
                            {...item}
                        />
                    ))}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, Filter, Page, ExcelExport, Edit, PdfExport]}/>
            </GridComponent>
        </div>
    )
}

export default Employees
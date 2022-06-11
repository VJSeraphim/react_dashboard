import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective,  Page, Inject, Toolbar } from '@syncfusion/ej2-react-grids'
import { employeesData, contextMenuItems, employeesGrid } from '../assets/dummy'
import { Header } from '../components'
import { ColumnDirective } from '@syncfusion/ej2-react-charts'


const Employees = () => {
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header title="Employees" category="Page"/>
            <GridComponent
                id="gridcomp"
                dataSource={employeesData}
                allowPaging
                allowSorting
                toolbar={['Search']}
                width="auto"
            >
                <ColumnsDirective>
                    {employeesGrid.map((item, i) => (
                        <ColumnDirective 
                            key={i} 
                            {...item}
                        />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Search, Toolbar]}/>
            </GridComponent>
        </div>
    )
}

export default Employees
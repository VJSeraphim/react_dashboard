import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../assets/dummy'

const Stacked = ({ width, height }) => {
    return (
        <div>
            <ChartComponent
                width={width}
                height={height}
                id="charts"
                primaryXAxis={stackedPrimaryXAxis}
                primaryYAxis={stackedPrimaryYAxis}
                chartArea={{ border: { width: 0 }}}
                tooltip={{ enable: TrustedTypePolicy}}
                legendSettings={{ background: 'white' }}
            >
                <Inject
                    services={[
                        Legend,
                        Category,
                        StackingColumnSeries,
                        Tooltip
                    ]}
                />
                <SeriesCollectionDirective>
                    {stackedCustomSeries.map((item, i) => 
                        <SeriesDirective 
                            key={i}
                            {...item}
                        />
                    )}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}

export default Stacked
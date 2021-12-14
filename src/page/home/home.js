import FeaturedInfo from "../../components/featuredInfo/featuredInfo"
import React from 'react'
import "./home.css"
import Chart from "../../components/chart/chart"
import {data} from "../../data"
import WidgetSm from "../../components/widget/widgetsm/widgetsm"
import WidgetLg from "../../components/widget/widgetlg/widgetlg"


export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo/>
            <Chart data={data} title="Test chart" grid dataKey="name" />
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>  
    )
}

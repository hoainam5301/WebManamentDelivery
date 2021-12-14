import React from 'react'
import "./widgetlg.css"

export default function WidgetLg() {
    const Button=({type,})=>{
        return <button className={"widgetLgButton " + type}>
            {type} 
        </button>;
    };
    // const Button = ({ type }) => {
    //     return <button className={"widgetLgButton " + type}>{type}</button>;
    //   };
    return (
        <div className='widgetLg'>
            <h3 className='widgetLgTitle'>laste transaction</h3>
            <table className='widgetLgTable'>
                <tr className='widgetLgTr'>
                    <th className='widgetLgTh'>Customer</th>
                    <th className='widgetLgTh'>Date</th>
                    <th className='widgetLgTh'>Amount</th>
                    <th className='widgetLgTh'>Status</th>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='widgetLgImg' />
                        <span className='widgetLgName'>User 1 </span>
                    </td>
                    <td className='widgetLgDate'>
                        2 Jun 2021
                    </td>
                    <td className='widgetLgAmount'>
                        $2000
                    </td>
                    <td className='widgetLgStatus'>
                        <Button type="Approve"/>
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='widgetLgImg' />
                        <span className='widgetLgName'>User 1 </span>
                    </td>
                    <td className='widgetLgDate'>
                        2 Jun 2021
                    </td>
                    <td className='widgetLgAmount'>
                        $2000
                    </td>
                    <td className='widgetLgStatus'>
                        <Button type="Pending"/>
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' 
                        alt='' 
                        className='widgetLgImg' />
                        <span className='widgetLgName'>User 1 </span>
                    </td>
                    <td className='widgetLgDate'>
                        2 Jun 2021
                    </td>
                    <td className='widgetLgAmount'>
                        $2000
                    </td>
                    <td className='widgetLgStatus'>
                        <Button type="Declined"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}

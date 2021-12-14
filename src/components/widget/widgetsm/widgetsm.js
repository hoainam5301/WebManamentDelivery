import React from 'react'
import "./widgetsm.css"
import {Visibility} from "@material-ui/icons"

export default function WidgetSm() {
    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>New Join Member</span>
            <ul className='widgetSmList'>
                <li className='widgetSmListItem'>
                    <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='widgetSmImg' />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>User 1</span>
                        <span className='widgetSmUserJob'>Four</span>
                    </div>
                    <button className='widgetSmButton'> 
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='widgetSmImg' />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>User 1</span>
                        <span className='widgetSmUserJob'>Four</span>
                    </div>
                    <button className='widgetSmButton'> 
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='widgetSmImg' />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>User 1</span>
                        <span className='widgetSmUserJob'>Four</span>
                    </div>
                    <button className='widgetSmButton'> 
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='widgetSmImg' />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>User 1</span>
                        <span className='widgetSmUserJob'>Four</span>
                    </div>
                    <button className='widgetSmButton'> 
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='widgetSmImg' />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>User 1</span>
                        <span className='widgetSmUserJob'>Four</span>
                    </div>
                    <button className='widgetSmButton'> 
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

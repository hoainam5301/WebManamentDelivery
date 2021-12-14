import React from 'react'
import "./featuredInfo.css"
import {ArrowDownward} from "@material-ui/icons"

export default function FeaturedInfo() {
    return (
        <div className='featuredInfo'>
            <div className='featuredItem'>
                <span className='featuredTitle' > Newtitle</span>
                <div className='featuredMoneyContainer' >
                    <span className='featuredMoney'>$2222</span>
                    <span className='featuredMoneyRate'>$2222 <ArrowDownward className='featuredIcon ' /> </span>
                </div>
                <span className='featuredSub'>Compared to last months </span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle' > 123123</span>
                <div className='featuredMoneyContainer' >
                    <span className='featuredMoney'>$2222</span>
                    <span className='featuredMoneyRate'>$2222 <ArrowDownward className='featuredIcon '/> </span>
                </div>
                <span className='featuredSub'>Feature </span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle' >456456</span>
                <div className='featuredMoneyContainer' >
                    <span className='featuredMoney'>$2222</span>
                    <span className='featuredMoneyRate'>$2222 <ArrowDownward className='featuredIcon negative' /> </span>
                </div>
                <span className='featuredSub'>Feature </span>
            </div>
        </div>
    )
}

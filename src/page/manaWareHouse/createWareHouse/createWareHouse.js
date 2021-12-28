import React from 'react'
import "./createWareHouse.css"

export default function CreateWareHouse() {
    return (
        <div className='createWareHouse'>
            <h1 className='createWareHouseTitle'>New WareHouse</h1>
            <form className='createWareHouseForm'>
                <div className='createWareHouseFormItem'>
                    <label>Tên kho</label>
                    <input type='text' placeholder='nguyễn văn a' />
                </div>
                <div className='createWareHouseFormItem'>
                    <label>Note Address</label>
                    <input type='text' placeholder='hỏi cc' />
                </div>
                <div className='createWareHouseFormItem'>
                    <label>Quận</label>
                    <select className='createWareHouseSelect' name='active' id='active'> 
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <div className='createWareHouseFormItem'>
                    <label>Huyện</label>
                    <select className='createWareHouseSelect' name='active' id='active'> 
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>                
                <button className='createWareHouseButton'>Create</button>
            </form>
        </div>
    )
}

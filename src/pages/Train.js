import react,{useState} from 'react';
import Dropdown from '../extra_comp/Dropdown';
import {Switch} from 'antd';


const Train = () => {
    const options = ['Split the dataset', 'x', 'y'];
    const[toogle,settoggle]=useState(false);

    const toggler=()=>{
        settoggle(!toogle);
        
    }
    return (
        <>
            <div className="main_wrap">
                <h1>Train/Test set for final evalution</h1>

                <div className='warp_content'>

                    <h3>Policy </h3>
                    <Dropdown options={options} /><br />

                </div>
                <div className="enable_btn">
                    <h1>Time Ordering</h1>
                    <h3>Enabled</h3><Switch id="toogle" onChange={toggler} />
                </div>

            </div>
        </>
    );
}

export default Train;
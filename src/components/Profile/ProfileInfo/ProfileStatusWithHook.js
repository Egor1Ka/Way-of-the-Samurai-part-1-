import React, { useEffect, useState } from 'react'
import s from './ProfileInfo.module.css';

const ProfileStatusWithHook = (props) =>{
   
   let[editMode,setEditMode] = useState(false);
   let[status,setStatus] = useState(props.status);

   useEffect(()=>{
       debugger
       setStatus(props.status);
   },[props.status])
   
    const activateMode = ()=>{
        setEditMode(true); 
    }

    const deActivateMode = ()=>{
        setEditMode(false); 
        props.updateStatus(status);
        
    }

    const onStatusChenge = (e)=>{
        setStatus(e.currentTarget.value);
    }
    return(
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick = {activateMode} >{props.status}</span>
                </div>
            }

            {editMode && 
                <div>
                    <input 
                    type="text"
                    onChange = {onStatusChenge}
                    onBlur = {deActivateMode} 
                    value = {status}/>
                </div>
            }
        </div>
        )
    
}


export default ProfileStatusWithHook;
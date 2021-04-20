import React from 'react'
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component{
    state = {
        aditMode:false,
        status: this.props.status 
    }
    activateEditMode=()=>{
        debugger
        this.setState({
            aditMode: true
        })
    }
    deactivateEditMode=()=>{
        this.setState({
            aditMode:false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChenge = (e)=>{
        this.setState({status : e.currentTarget.value})
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            });
        }
    }
    
    render(){
        return(
        <div>
            {!this.state.aditMode && 
                <div>
                    <span onDoubleClick = {this.activateEditMode}>{this.props.status}</span>
                </div>
            }

            {this.state.aditMode && 
                <div>
                    <input onChange = {this.onStatusChenge} autoFocus={true} onBlur = {this.deactivateEditMode} 
                    type="text" value = {this.state.status}/>
                </div>
            }
        </div>
        )
    }
}


export default ProfileStatus;
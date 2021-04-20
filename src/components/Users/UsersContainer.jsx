import { connect } from "react-redux";
import { follow,unfollow,setUsers , setCurrentPage,setTotalUsersCount, 
setIsFetching,toggleIsfollowing,getUsers} from "../../redux/users-reduser";
import React from 'react';
import axios  from 'axios';
import Users from "./Users";
import prelouder from "./../../assets/images/144.gif";
import Pereloader from "../../common/preloader/Preloader";
import { getUsersAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/AuthRedirect";
import { compose } from "redux";
import { getPageSize, getUser,gettotalUsersCount,getCurrentPage,getIsFetching,getFollowingInProgress} from "../../redux/users-selectoes";

class UsersContainer extends React.Component{
   
    componentDidMount(){
            this.props.getUsers(this.props.currentPage,this.props.pageSize);
            /*this.props.setIsFetching(true);
            getUsersAPI(this.props.currentPage,this.props.pageSize)
            .then(data =>{
            this.props.setIsFetching(false);    
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        })*/
    }
    
    onPageChenged = (pageNumber)=>{
        
        this.props.getUsers(pageNumber,this.props.pageSize);
        
    }

    render (){
        return <>
            {this.props.isFetching? <Pereloader/> : null}
            <Users totalUsersCount ={this.props.totalUsersCount}
            pageSize = {this.props.pageSize} 
            currentPage = {this.props.currentPage}
            onPageChenged = {this.onPageChenged}
            users = {this.props.users}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}
            toggleIsfollowing = {this.props.toggleIsfollowing}
            followingInProgress = {this.props.followingInProgress}
            />
        </>
            
    }
}

/*const mapStateToProps=(state)=>{
    return{
        users : state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalUsersCount : state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/

const mapStateToProps = (state)=>{
    return{
        users : getUser(state),
        pageSize : getPageSize(state),
        totalUsersCount : gettotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(
    mapStateToProps,{
    follow,
    unfollow,
    setCurrentPage,
    setIsFetching,
    toggleIsfollowing,
    getUsers
    })
    ,withAuthRedirect)
(UsersContainer)




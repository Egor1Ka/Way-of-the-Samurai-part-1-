import axios from 'axios';

const instanse = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY':'7d02c38c-491a-4769-90d5-3e7ff2cbd0b8'
    }
})

export const usersAPI = {
    getUsersAPI (currentPage = 1,pageSize =5){
    return instanse.get(`users?page=${currentPage}
            &count=${pageSize}`)
            .then(response =>{
                return response.data;
            })
    },
    follow(userId){
        return instanse.post(`follow/${userId}`)
    
    },
    unfollow(userId){
        return instanse.delete(`follow/${userId}`)
        
    },
    getProfile(userId){
        console.warn('uset please ProfileApi');
        return profileAPI.getProfile(userId);
    }
}   

export const authAPI = {
    me(){
        return instanse.get('auth/me')
    },
    login(email,password,rememberMe = false){
        return instanse.post('auth/login',{email,password,rememberMe});
    },
    logout(){
        return instanse.delete('auth/login');
    }
}

export const profileAPI = {
    getProfile(userId){
        return instanse.get(`profile/${userId}`);
    },
    getStatus(userId){
        return instanse.get(`profile/status/${userId}`);
    },
    updateStatus(status){
        return instanse.put(`profile/status`,{
            status:status
        })
    }
}   


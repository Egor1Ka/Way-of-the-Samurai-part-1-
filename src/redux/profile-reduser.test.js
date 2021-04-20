import proileReduser, { addPostActionCreator, deletePost } from "./profile-reduser";


it('profileReduser new post',()=>{
    let action = addPostActionCreator('new POst');
    let initialState = {
        posts : [
        {id:1,message:'Hi , how are you' , like :12},
        {id:2,message:'Its my first post', like:11}
        ]   
    }
    let newState = proileReduser(initialState,action);

    expect(newState.posts.length).toBe(3)
})

it('delete test',()=>{
    let action = deletePost(1);
    let initialState = {
        posts : [
        {id:1,message:'Hi , how are you' , like :12},
        {id:2,message:'Its my first post', like:11}
        ]   
    }
    let newState = proileReduser(initialState,action);

    expect(newState.posts.length).toBe(1);
})

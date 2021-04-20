
export const updateObjectInArray = (items,itemId,objPropName,newOgjProps)=>{
    return items.map(u=> {
        if(u[objPropName] === itemId){
           return {...u, ...newOgjProps}
        }
        return u; 
    })      
}

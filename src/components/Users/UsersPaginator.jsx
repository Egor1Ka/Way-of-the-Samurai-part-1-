import React, { useState } from 'react';
import style from './users.module.css';


let UsersPaginator=(props)=>{
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    let portionCount = Math.ceil(pagesCount/props.portionSize);
    let [portionNumber,setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1 ) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    for (let i= 1; i <= pagesCount ; i++) {
        pages.push(i);
    }
    
     return(
         <div>
            <div>
                {
                    leftPortionPageNumber > 1 &&
                    <button onClick ={()=>{setPortionNumber(portionNumber - 1)}}>next</button> 
                }
                {pages
                .filter( p => p >=leftPortionPageNumber && p<=rightPortionPageNumber)
                .map(p=>{
                    return <span className = 
                    {p === props.currentPage?
                    style.selectedPage 
                    :style.item}
                    onClick = {(e)=>{props.onPageChenged(p)}}
                   >{p} </span>
                })}
                 {
                    portionCount > portionNumber  &&
                    <button onClick ={()=>{setPortionNumber(portionNumber + 1)}}>next</button> 
                }
            </div>
            
        </div>
       )
}


export default UsersPaginator;
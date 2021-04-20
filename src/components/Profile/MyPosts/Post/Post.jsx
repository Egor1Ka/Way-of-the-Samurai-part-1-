import React from 'react';
import classes from './Post.module.css';

const Posts = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://www.serietotaal.nl/images/nieuws/t/6fbi52rzy3ly-full.jpg" alt="" />
                {props.message}
                <div>
                    <span>like {props.like}</span>
                </div>
               
            </div>
         
    );
}



export default Posts;
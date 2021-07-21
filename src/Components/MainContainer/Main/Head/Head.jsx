import { Button } from '@material-ui/core';
import React from 'react'
import styles from'./Head.module.scss';
import icons from '../../../../Constants/Constants.json'
import VisibilityIcon from '@material-ui/icons/Visibility';
function Head() {
    return (
        <>
         <div className={styles['head-container']}>
        <div className={styles['back-img']} ></div>     
        <div>
            <div><img src={icons.Icons.figma} /></div>
            <p>Figma</p>
            <p>A design Platform for teams who build product together</p>
            <p>Design • San Francisco,CA • 101,282 followers</p>
            <p>See all 358 employes on LinkedIn</p>
            <div className={styles['btns']} ><button><VisibilityIcon fontSize="small"/><p>+</p>Follow</button><button>Visit Website</button><button>...</button></div>

        </div>
        </div>  
        </>
    )
}

export default Head;

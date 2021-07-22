import React from 'react'
import styles from './Head.module.scss';
import icons from '../../../../Constants/Constants.json'
import VisibilityIcon from '@material-ui/icons/Visibility';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
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
                    <a href='https://www.linkedin.com/search/results/people/?currentCompany=%5B%223650502%22%5D&origin=COMPANY_PAGE_CANNED_SEARCH' target="_blank" >See all 358 employes on LinkedIn <ArrowForwardIcon/></a>
                    <div className={styles['btns']} ><button><VisibilityIcon fontSize="small" /><p>+</p>Follow</button><button><ExitToAppOutlinedIcon/>Visit Website</button><button><p>...</p></button></div>

                </div>
            </div>
        </>
    )
}

export default Head;

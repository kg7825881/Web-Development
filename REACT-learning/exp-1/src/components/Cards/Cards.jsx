import React from 'react'
import {Bookmark} from 'lucide-react'
import styles from './Cards.module.css'

const Cards = (props) => {
    
  return (
    <div className={styles['cards']}>
        <div>
        <div className={styles['top']}>
          <img src={props.logo} alt="" />
          <button>Save <Bookmark size={15}/></button>
        </div>
        <div className={styles['center']}>
          <h3>{props.company} <span>{props.date}</span></h3>
          <h2>{props.post}</h2>
          <div className={styles['tag']}>
            <h4>{props.t1}</h4>
            <h4>{props.t2}</h4>
          </div>
        </div>
        </div>
        <div className={styles['bottom']}>
          <div className={styles['left-block']}>
            <h3>{props.payhr}</h3>
            <p>{props.loc}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Cards
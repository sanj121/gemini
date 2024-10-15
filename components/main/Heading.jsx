import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Heading"
import { assets } from '../../assets/assets'

const Heading = () => {
  return (
    
      <NavLink to={"https://www.linkedin.com/in/sanjeetkumar121/" }>
        <h className={styles.heading}>FelixGemini</h>
      </NavLink>
    
  )
}

export default Heading
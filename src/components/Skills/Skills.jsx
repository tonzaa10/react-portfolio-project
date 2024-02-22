import React from 'react'
import style from './Skills.module.css'
import { FaSquareJs, FaReact, FaSass, FaGitAlt, FaNode } from 'react-icons/fa6'

function Skills() {
  return (
    <div  className={style.skills_con}>
        <h3 className={style.skills_title}>My Skill Set</h3>
        <ul className={style.skills_list}>
            <li><FaSquareJs/></li>
            <li><FaReact/></li>
            <li><FaSass/></li>
            <li><FaGitAlt/></li>
            <li><FaNode/></li>
        </ul>
    </div>
  )
}


export default Skills

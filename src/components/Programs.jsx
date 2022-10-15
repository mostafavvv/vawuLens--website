import React from 'react'
import {FaCrown} from "react-icons/fa"
import {AiFillCaretRight} from "react-icons/ai"
import SectionHeader from './SectionHeader'
import { programs } from '../data'
import { Link } from 'react-router-dom'
import Card from '../Ui/Card'
const Programs = () => {
  return (
    <section className='programs'>
        <div className='container programs__container'>
           <SectionHeader icon={<FaCrown/>} title="programs" />
            <div className="programs__wrapper">
                {
                    programs.map(({id, icon,title,info,path}) =>{
                        return (
                            <Card className="programs__program" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                                <Link to={path} className="btn sm" >Learn More <AiFillCaretRight/></Link>

                            </Card>
                        )
                    })
                }

            </div>
        </div>
    </section>
  )
}

export default Programs
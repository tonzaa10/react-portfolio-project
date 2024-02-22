import React from 'react'
import style from './Contact.module.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

function Contact() {
  return (
    <div className={style.contact_wrapper}>
        <div className={style.contact_con}>
        <div className={style.contact_info}>
            <h3>Get in touch</h3>
            <p className={style.contact_desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p className={style.contact_address}>
                123 Main Street <br/>
                Bangkok, Thailand
            </p>
            <p><FaPhone/> (+66)98 55 1234</p>
            <p><FaEnvelope/> (+66)98 55 1234</p>
        </div>
        <div className={style.contact_form}>
            <form>
                <div className={style.input_group}>
                    <div>
                        <label htmlFor="first name">First Name</label>
                        <input type="text" placeholder="eg. John"/>
                    </div>
                    <div>
                        <label htmlFor="last name">Last Name</label>
                        <input type="text" placeholder="eg. Doe"/>
                    </div>
                </div>
                <label htmlFor="email address">Email Address</label>
                <input type="email" placeholder="eg. jhondoe@gmail.com"/>

                <label htmlFor="message">Your Message</label>
                <textarea name="" id="" cols="30" rows="10" placeholder='Type here'></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Contact

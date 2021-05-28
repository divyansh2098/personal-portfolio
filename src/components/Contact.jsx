import { motion } from 'framer-motion'

import LinkedIn from '../assets/Linkedin.svg'
import Gmail from '../assets/Gmail.svg'
import Phone from '../assets/Phone.svg'

import { contact } from '../styles/variants'

import '../styles/contact.css'
const contactLinks = [
    {
        "icon": Phone,
        "link": "tel:8375053066",
        "id": "phone"
    },
    {
        "icon": LinkedIn,
        "link": "https://www.linkedin.com/in/divyansh-singh-4a2186143/",
        "id": "linkedin"
    },
    {
        "icon": Gmail,
        "link": "mailto:divyanshsingh2098@gmail.com",
        "id": "gmail"
    }
]

const Contact = () => {
    return(
        <motion.div className="contactContainer"
            variants = {contact}
            initial="from"
            animate="to"
            exit="exit"
        >
            {
                contactLinks.map(contact => {
                    return <ContactLink key={contact.id} contact={contact}/>
                })
            }
        </motion.div>
    )
}

const ContactLink = ({contact}) => {
    return(
        <a href={contact.link} target="_blank" rel="noreferrer">
            <img src={contact.icon} alt="" />
        </a>
    )
}

export default Contact
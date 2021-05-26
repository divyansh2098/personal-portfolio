import Profile from '../assets/Photo.jpg'
import '../styles/home.css'

import { Link } from 'react-router-dom'
import { imageVariant, aboutMeVariant } from '../styles/variants'
import { motion } from 'framer-motion'

const AboutMe = () => {
    return(
        <motion.div className="aboutMeContainer"
            variants={aboutMeVariant}
            initial="from"
            animate="to"
            exit="exit"
        >
            <motion.img className="profileImage"
            variants={imageVariant}
            src={Profile} alt="profile image" />
            <div className="aboutMe">
                <p>Software Engineer @ magicpin (Oct 2020 - Present)</p>
                <p>B.Tech Computer Engineering <br /> (Delhi Technological University, Batch of 2020)</p>
            </div>
            <Link to="/about">
                Go to About
            </Link>
        </motion.div>
    )
}

export default AboutMe
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Profile from '../assets/Photo.jpg'
import {ProfileDialog} from './Dialog'
import { imageVariant, aboutMeVariant, fadeIn } from '../styles/variants'

import '../styles/home.css'
const Home = () => {
    const aboutMe = {
        image: Profile,
        description: "Hi, I'm Divyansh Singh, Software Engineer @magicpin. I'm currently working as a front-end Developer and my day revolves around writing code in React. I'm also interested in Backend Development and hopefully check that out in the future. Apart from work i am a Cricket Player and i also like to read and watch stuff about defence analysis and geopolitics. Feel Free to checkout my profile on this little portfolio i made. Thank you"   
    }
    const [open, setOpen] = useState(false)
    const [content, setContent] = useState(null)
    
    const setDialogContent = () => {
        setContent(aboutMe)
        setOpen(true)
    }

    return (
        <>
            <AnimatePresence>
                { open &&
                    <ProfileDialog setDialogContent={setContent} toggleDialog={setOpen} asset={content} />
                }
            </AnimatePresence>
            <motion.div className="homeContainer"
                variants={aboutMeVariant}
                initial="from"
                animate="to"
                exit="exit"
            >
                <motion.img className="profileImage"
                onClick={setDialogContent}
                variants={imageVariant}
                src={Profile} alt="profile image" />
                <div className="aboutMe">
                    <p>Software Engineer @ magicpin (Oct 2020 - Present)</p>
                    <p>B.Tech Computer Engineering <br /> (Delhi Technological University, Batch of 2020)</p>
                </div>
                <motion.div className="actionContainer"
                    variants={fadeIn}
                >
                    <button className="aboutCta">
                        <Link to="/about">
                            Skills and experience
                        </Link>
                    </button>
                    <button className="contactCta">
                        <Link to="/contact">
                            Contact Me
                        </Link>
                    </button>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Home
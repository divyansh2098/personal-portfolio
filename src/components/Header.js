import GithubIcon from '../assets/github-logo.svg'
import MediumIcon from '../assets/medium.svg'

import { motion } from 'framer-motion'

import '../styles/header.css'
const Header = () => {
    return(
        <motion.div className="headerContainer"
            initial={{
                y: -100
            }}
            animate={{
                y: 0
            }}
            transition={{ type: 'spring', stiffness:200 }}
        >
            <span className="nameHolder">Divyansh Singh</span>
            <div className="icons">
                <a href="https://github.com/divyansh2098" target="_blank">
                    <img className="githubIcon" src={GithubIcon} alt="github logo" />
                </a>
                <a target="_blank" href="https://divyanshsingh2098.medium.com/">
                    <img className="mediumIcon" src={MediumIcon} alt="medium icon" />
                </a>
            </div>
        </motion.div>
    )
}

export default Header

import { motion } from 'framer-motion'

import '../styles/about.css'
import Cplus2 from '../assets/c++.svg'
import Django from '../assets/Django.svg'
import Go from '../assets/Go.svg'
import Python from '../assets/python.svg'
import Nodejs from '../assets/Nodejs.svg'
import JS from '../assets/JS.svg'
import ReactLogo from '../assets/React.svg'
import C from '../assets/C.svg'
import CSS from '../assets/CSS.svg'

import { languagesVariant, fallTop, flipCards, fadeIn } from '../styles/variants'

const About = () => {
    const languages = [Cplus2, Go, Python, JS, C, CSS]
    const frameworks = [Django, Nodejs, ReactLogo]
    return(
        <div className="aboutMeContainer">
            <motion.h1
                variants={fallTop}
                initial="from"
                animate="to"
            >Languages</motion.h1>
            <motion.div className="languageContainer"
                variants={languagesVariant}
                initial= "from"
                animate= "to"
            >
                <Languages languages={languages}/>
            </motion.div>
            <h1>Frameworks</h1>
            <motion.div className="frameworkContainer"
                variants={languagesVariant}
                initial="from"
                animate="to"
            >
                <Frameworks frameworks={frameworks}/>
            </motion.div>
        </div>
    )
}

const Languages = ({languages}) => {
    return (
        languages.map(lang => {
            return <Card asset={lang}/>
        })
    )
}

const Frameworks = ({frameworks}) => {
    return (
        frameworks.map(fw => {
            return <Card asset = {fw}/>
        })
    )
}

const Card = ({asset}) => {
    return(
        <motion.div className="cardContainer"
            variants={flipCards}
        >
            <motion.img variants={fadeIn} className="cardImage" src={asset} alt="" />
        </motion.div>
    )
}

export default About
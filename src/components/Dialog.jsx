import { motion } from 'framer-motion'

import { modal, dialogContent } from '../styles/variants'

import ExternalLink from '../assets/externalLink.svg'
import '../styles/dialog.css'
const Dialog = ({ asset, setDialogContent, toggleDialog }) => {
    return(
        <div className="dialogContainer">
                <motion.div 
                    className="modal" 
                    onClick={() => {setDialogContent(null); document.body.style.overflow='auto' ;toggleDialog(false)}}
                    variants={modal}
                    initial="from"
                    animate="to"
                    exit="exit"
                >
                    <motion.div 
                        className="dialogContent"
                        variants={dialogContent}
                    >
                        <img className="modalImage" src={asset.image} alt="" />
                        <h1>My Skill Rating : {asset.rating}/10</h1>
                        <h1>
                            Projects
                        </h1>
                        <div className="projects">
                            {
                                asset.projects.map(project => {
                                    return(
                                        <div className="project">
                                            <a href={project.source} className="projectLink" target="_blank" rel="noreferrer">
                                                {project.name} <img className="externalLink" src={ExternalLink} alt="" /> 
                                            </a>
                                            <span className="projectDescription">
                                                {project.description}
                                            </span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </motion.div>
                </motion.div>
        </div>
    )
}

export const ProfileDialog = ({asset, toggleDialog, setDialogContent}) => {
    return(
        <div className="dialogContainer">
                <motion.div 
                    className="modal" 
                    onClick={() => {setDialogContent(null); document.body.style.overflow='auto' ;toggleDialog(false)}}
                    variants={modal}
                    initial="from"
                    animate="to"
                    exit="exit"
                >
                    <motion.div 
                        className="dialogContent homePage"
                        variants={dialogContent}
                    >
                        <img className="modalImage homePage" src={asset.image} alt="" />
                        <div className="aboutMe">
                            {asset.description}
                        </div>
                    </motion.div>
                </motion.div>
        </div>
    )
}

export default Dialog
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Dialog from './Dialog'

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
import TF from '../assets/tensorflow.svg'

import { languagesVariant, fallTop, flipCards, fadeIn, exitAbout, textGlow } from '../styles/variants'


const About = () => {
    const languages = [JS, Python, Go, C, Cplus2, CSS]
    const frameworks = [{
        image: ReactLogo,
        rating: 8,
        projects: [{
            name: "Burger Builder",
            source: "https://github.com/divyansh2098/burger-builder",
            description: "React SPA to build a custom burger and order it. I won't give you the burger though...Sadly. Used React and Firebase"
        }, {
            name: "WUPHF",
            source: "https://github.com/divyansh2098/wuphf",
            description: "Built with React and Firebase, let's you create chat servers and channels within those servers which you can share and chat with your friends"
        }, {
            name: "Medicine Website",
            source: "https://singhla-medicos.com",
            description: "Integrated React with SSR in a django website. Check it out"
        }]
    }, 
    {
        image: Django,
        rating: 7,
        projects: [{
            name: "Medicine Website",
            source: "https://singhla-medicos.com",
            description: "Medicine website Build with Django Framework"
        }]  
    }, 
    {
        image: Nodejs,
        rating: 7,
        projects: [{
            name: "YelpCamp",
            source: "https://github.com/divyansh2098/yelp-camp",
            description: "Add Cool Camping Places, also review and like camping places of other people"
        }]
    }, 
    {
        "image": TF,
        "rating": 7,
        projects: [{
            name: "Filter Pruning of VGG model on CIFAR-10",
            source: "https://colab.research.google.com/drive/1z0fIppLWfiEAqXcZ9UBAfuxbQ2ZZ9J4u#scrollTo=YOCKO45NNaP9",
            description: "VGG Model trained on Cifar-10 was pruned ie. It's filters were removed so that the number of filters reduced with no effect on accuracy"
        }]
    }]
    const researchPapers = [
        {
            title: 'Review of trends and techniques in Recommender Systems',
            link: 'https://ieeexplore.ieee.org/document/8777645',
            id: "Paper1"
        },
        {
            title: 'Novel Pruning Techniques in Convolutional Neural Network',
            link: 'https://www.ijeat.org/wp-content/uploads/papers/v9i4/D8397049420.pdf',
            id: "Paper2"
        }
    ]
    const [openDialog, setOpenDialog] = useState(false)
    const [dialogContent, setDialogContent] = useState(null)
    return(
        <motion.div variants={exitAbout} initial="from" animate="to" exit="exit" className="aboutMeContainer">
            <AnimatePresence>
                { openDialog && dialogContent &&
                    <Dialog asset={dialogContent} toggleDialog={setOpenDialog} setDialogContent={setDialogContent} />
                }
            </AnimatePresence>
            <motion.h1
                variants={fallTop}
            >Languages</motion.h1>
            <motion.div className="languageContainer"
                variants={languagesVariant}
            >
                <Languages languages={languages}/>
            </motion.div>
            <motion.h1 variants={fallTop}>Frameworks</motion.h1>
            <motion.div className="frameworkContainer"
                variants={languagesVariant}
            >
                <Frameworks setOpenDialog={setOpenDialog} setDialogContent={setDialogContent} frameworks={frameworks}/>
            </motion.div>
            <motion.h1 variants={fallTop}>Research Papers</motion.h1>
            <motion.div className="researchContainer"
                variants={languagesVariant}
            >
                { researchPapers.map(paper => {
                    return <Research paper={paper} key={paper.id} />
                  })
                }
            </motion.div>
        </motion.div>
    )
}

const Research = ({ paper }) => {
    return(
        <motion.a href={paper.link} className="paperContainer" target="_blank" rel="noreferrer" variants={textGlow}>
            {paper.title}
        </motion.a>
    )
}

const Languages = ({languages}) => {
    return (
        languages.map((lang,index) => {
            return(
                <motion.div className="cardContainer"
                    variants={flipCards}
                    key={index}
                >
                    <motion.img variants={fadeIn} className="cardImage" src={lang} alt="" />
                </motion.div>
            )
        })
    )
}

const Frameworks = ({frameworks, setOpenDialog, setDialogContent}) => {
    return (
        frameworks.map((fw,index) => {
            return (
                <motion.div className="cardContainer"
                    variants={flipCards}
                    key={index}
                    onClick={() => {setOpenDialog(true); document.body.style.overflow='hidden'; setDialogContent(fw)}}
                >
                    <motion.img variants={fadeIn} className="cardImage" src={fw.image} alt="" />
                </motion.div>
            )
        })
    )
}

export default About
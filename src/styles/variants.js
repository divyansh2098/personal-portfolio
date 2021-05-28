export const aboutMeVariant = {
    from: {
        x: '100vw'
    },
    to: {
        x:0,
        transition: {
            type: 'spring',
            stiffness: 80,
            damping: 10,
            delay: 0.5,
            duration: 0.8,
            when: 'beforeChildren'
        }
    },
    exit: {
        x: '-100vw',
        transition: {
            type: 'spring',
            duration: 1
        }
    }
}

export const imageVariant = {
    to: {
        boxShadow: '0px 0px 36px rgb(255,255,255)'
    },
    transition: {
        duration: 2.5
    }
}

export const languagesVariant = {
    from: {
        x: '100vw'
    },
    to: {
        x: 0,
        transition: {
            duration: 2,
            type: 'spring',
            stiffness: 60,
            when: "beforeChildren"
        }
    }
}

export const fallTop = {
    from: {
        y: '-100vh'
    },
    to: {
        y: 0,
        transition: {
            duration: 1.5,
            type: 'spring',
            stiffness: 80,
            damping: 12
        }
    }
}

export const flipCards = {
    from:{
        rotateY: 180
    },
    to: {
        rotateY: 0,
    }
}

export const fadeIn = {
    from: {
        opacity: 0
    },
    to: {
        opacity:1
    }
}

export const modal = {
    from: {
        opacity: 0
    },
    to: {
        opacity: 1,
        transition: {
            duration: 1,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 1,
        }
    }
}

export const exitAbout = {
    exit: {
        y: '-100vh',
        transition: {
            duration: 0.5
        }
    }
}

export const dialogContent = {
    from: {
        scale: 0
    },
    to: {
        scale: 1,
        transition: {
            duration: 0.5
        }
    },
    exit: {
        scale: 0,
        transition: {
            duration: 0.5
        }
    }
}

export const contact = {
    from: {
        scale: 0
    },
    to: {
        scale: 1,
        transition: {
            duration: 0.3
        }
    },
    exit: {
        y: '100vh',
        transition: {
            duration: 0.3 
        }
    }
}

export const textGlow = {
    to: {
        textShadow: '1px 1px 12px',
        transition: {
            duration: 0.4
        }
    }
}
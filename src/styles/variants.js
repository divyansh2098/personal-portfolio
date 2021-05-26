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
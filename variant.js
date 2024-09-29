export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
            opacity: 0,
            x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
            transition: {
                type: 'tween',
                duration: 1.5,
                delay: delay,
                ease: [0.25, 0.6, 0.3, 0.8],
            },
        },
        show: {
            y: 0,
            x: 0,
            opacity : 1,
            transition: {
                type: 'tween',
                duration: 1.4,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.8],
            },
        },
    }
}

export const titleVariants = {
    'offscreen' : {
        opacity : 0,
        y : 30
    },
    'onscreen' : {
        opacity : 1,
        y: 0,
        transition : {
            type: 'spring',
            duration : 2.2
        }
    }
}

export const desVariants = {
    'offscreen' : {
        opacity : 0,
        y : 20
    },
    'onscreen' : {
        opacity : 1,
        y: 0,
        transition : {
            type: 'spring',
            duration : 2.6,
            delay : .2
        }
    }
}

export const tagVariants = {
    'offscreen' : {
        opacity : 0,
        y : 10
    },
    'onscreen' : {
        opacity : 1,
        y: 0,
        transition : {
            type: 'spring',
            duration : 2.8,
            delay : .4
        }
    }
}

export const leftVariants = {
    'offscreen' : {
        opacity : 0,
        x : 30
    },
    'onscreen' : {
        opacity : 1,
        x: 0,
        transition : {
            type: 'spring',
            duration : 2.2,
        }
    }
}

export const rightVariants = {
    'offscreen' : {
        opacity : 0,
        x : -30
    },
    'onscreen' : {
        opacity : 1,
        x: 0,
        transition : {
            type: 'spring',
            duration : 2.2,
        }
    }
}
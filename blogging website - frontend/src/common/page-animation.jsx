import {AnimatePresence, motion }  from "framer-motion";
const AnimationWrapper =({children, keyValue, initial = { opacity: 0 } ,animate = { opacity: 1 } }, transition = { duration : 3 }, className) =>{
    return(
        // animate presence keeps tract of the animation 
        <AnimatePresence>
        <motion.div
            key={keyValue}
            initial={initial}
            animate={animate}
            transition={transition}
            className={className}
        >
            { children }
        </motion.div>
        </AnimatePresence>
    )
}
export default AnimationWrapper;
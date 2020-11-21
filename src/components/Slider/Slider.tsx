import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface InternalProps {
  /**
   * Is this light themed or dark themed?
   */
  darkMode?: boolean;
  /**
   * Duration of the slide animation
   */
  duration?: number;
}

export interface SliderProps extends InternalProps {
  /**
   * The react component to slide
   */
  children: React.ReactNode;
}

const Background = styled(motion.div)`
  position: relative;
  display: inline-block;
`;

const Foreground = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: ${(props: InternalProps) =>
    props.darkMode ? "white" : "rgba(0,0,0,1)"};
  display: inline-block;
`;

const Reveal = styled(motion.div)``;

/**
 * UI Component which provides the Sliding Animation on Render.
 */
export const Slider: React.FC<SliderProps> = ({
  children,
  darkMode = false,
  duration = 0.75,
  ...props
}) => {
  return (
    <Background {...props}>
      {/* Actual Component */}
      <Reveal
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: duration }}
      >
        {children}
      </Reveal>
      {/* Slide Component */}
      <motion.div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      >
        <Background
          initial={{ height: "100%", width: "0%", left: 0 }}
          animate={{
            width: "100%",
          }}
          transition={{
            duration: duration,
            // ease: "easeOut",
          }}
        >
          <Foreground
            initial={{ width: "100%" }}
            animate={{ width: "0%", right: 0 }}
            transition={{
              delay: duration,
              // ease: "easeOut",
              duration: duration,
            }}
            darkMode={darkMode}
          />
        </Background>
      </motion.div>
    </Background>
  );
};

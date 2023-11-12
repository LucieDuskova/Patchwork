import * as React from "react";
// import "./styles.css";
import { motion } from "framer-motion";
import { Patchworks } from "../Patchworks";



export const Patchwork = () => (
  <>
    {Patchworks.map((patchwork) => (
      <motion.svg
        key={patchwork.id}
        xmlns="http://www.w3.org/2000/svg"
        drag
        dragMomentum={false}
        viewBox={patchwork.viewBox}
        width={`${((patchwork.viewBox.split(' ').map(Number))[2])*0.54321}%`}
      >
        <g>
          <path d={patchwork.svg} fill={patchwork.color} />
        </g>
      </motion.svg>
    ))}
  </>
);



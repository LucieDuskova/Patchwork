import * as React from "react";
import "./styles.css";
import range from "lodash-es/range";
import { motion } from "framer-motion";
import { Patchworks } from "../Patchworks";

export default function App() {
  const parts = [{}, {}, {}];

  return (
    <>
      {Patchworks.map((patschwork) => (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          drag
          dragMomentum={false}
          viewBox={viewBox}
          // width="20"
        >
          <g>
            <path d={svg} />
          </g>
        </motion.svg>
      ))}
    </>
  );
}

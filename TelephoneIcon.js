import React from 'react'
import {Svg, Path, Circle } from 'react-native-svg'

const Icon = ({
     fill = '#000',
     fill2='#000',
     stroke = '#000',
     width="50.834",
     height="50.834",
     name="V Happy",
     viewBox="0 0 50.834 50.834",
}) => (
     <Svg
          width={width}
          // style={style}
          height={width}
          viewBox={viewBox}
          xmlns="http://www.w3.org/2000/svg"
     >
     <Circle cx="25" cy="25" r="24"  stroke={stroke} fill={fill2} />

      {/* <Path
        stroke={stroke}
        d="M35.417 10a25.417 25.417 0 1025.417 25.417A25.446 25.446 0 0035.417 10zm0 49.563a24.146 24.146 0 1124.146-24.146 24.174 24.174 0 01-24.146 24.146z"
        data-name="Path 434"
        transform="translate(-10 -10)"
      ></Path> */}
      <Path
        fill={fill} strokeWidth="1"
        d="M56.552 55.534l-32.412.042a.635.635 0 00-.614.794 17.371 17.371 0 0033.642-.043.636.636 0 00-.615-.793zM40.341 68.113a16.089 16.089 0 01-15.359-11.267l30.731-.039a16.083 16.083 0 01-15.372 11.306z"
        data-name="Path 435"
        transform="translate(-14.924 -26.6)"
      ></Path>
      <Path
        fill={fill} strokeWidth="1"
        d="M27.433 36.47a.636.636 0 00.635-.635 3.942 3.942 0 017.884 0 .635.635 0 101.271 0 5.213 5.213 0 10-10.426 0 .636.636 0 00.636.635z"
        data-name="Path 436"
        transform="translate(-16.124 -17.518)"
      ></Path>
      <Path
        fill={fill} strokeWidth="1"
        d="M57.429 36.47a.636.636 0 00.635-.635 3.942 3.942 0 017.884 0 .635.635 0 101.271 0 5.213 5.213 0 00-10.426 0 .636.636 0 00.636.635z"
        data-name="Path 437"
        transform="translate(-27.06 -17.518)"
      ></Path>
     </Svg>
)
export default Icon
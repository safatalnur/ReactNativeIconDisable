import React from 'react'
import {Svg, Path, Circle } from 'react-native-svg'

const Angry = ({
     fill = '#000',
     fill2='#000',
     stroke = '#000',
     width="50.834",
     height="50.834",
     name="Angry",
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

     <Path
          fill={fill}
          d="M35.128 10a25.128 25.128 0 1025.129 25.128A25.157 25.157 0 0035.128 10zm0 49A23.872 23.872 0 1159 35.128 23.9 23.9 0 0135.128 59z"
        data-name="Path 411"
        transform="translate(-10 -10)"
      ></Path>
      <Path
          fill={fill}
          d="M35.849 35.776a.628.628 0 101.256 0 5.154 5.154 0 10-10.308 0 .628.628 0 101.256 0 3.9 3.9 0 017.795 0z"
        data-name="Path 412"
        transform="translate(-16.245 -17.667)"
      ></Path>
      <Path
          fill={fill}
          d="M61.948 30.622a5.16 5.16 0 00-5.154 5.154.628.628 0 101.256 0 3.9 3.9 0 117.795 0 .628.628 0 101.256 0 5.16 5.16 0 00-5.153-5.154z"
        data-name="Path 413"
        transform="translate(-27.398 -17.667)"
      ></Path>
      <Path
          fill={fill}
          d="M43.914 60.482a17.167 17.167 0 00-8.434 2.211 16.975 16.975 0 00-1.58 1.014.628.628 0 00.734 1.02 15.919 15.919 0 0118.571 0 .628.628 0 00.733-1.02 17.046 17.046 0 00-10.024-3.225z"
        data-name="Path 414"
        transform="translate(-18.787 -28.769)"
      ></Path>
      <Path
          fill={fill}
          d="M34.083 25.8a8.3 8.3 0 016.337 4.39.628.628 0 001.114-.58 9.473 9.473 0 00-7.37-5.06.64.64 0 00-.667.587.628.628 0 00.586.663z"
        data-name="Path 415"
        transform="translate(-18.736 -15.409)"
      ></Path>
      <Path
          fill={fill}
          d="M53.934 30.457a.628.628 0 00.847-.267 8.2 8.2 0 016.34-4.39.628.628 0 00-.082-1.254 9.473 9.473 0 00-7.37 5.06.627.627 0 00.265.851z"
        data-name="Path 416"
        transform="translate(-26.209 -15.41)"
      ></Path>     
     </Svg>
)
export default Angry
import React from 'react'
import {Svg, Path, Circle } from 'react-native-svg'

const Happy = ({
     fill = '#000',
     fill2='#000',
     stroke = '#000',
     width="50.834",
     height="50.834",
     name="Happy",
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
        d="M35.225 10a25.225 25.225 0 1025.224 25.225A25.253 25.253 0 0035.225 10zm0 49.188a23.963 23.963 0 1123.963-23.963 23.991 23.991 0 01-23.963 23.963z"
        data-name="Path 428"
        transform="translate(-10 -10)"
      ></Path>
      <Path
        fill={fill}
        d="M56.458 55.553a.628.628 0 00-.767.455 15.979 15.979 0 01-30.945.04.63.63 0 00-1.221.315 17.239 17.239 0 0033.387-.044.63.63 0 00-.454-.766z"
        data-name="Path 429"
        transform="translate(-14.989 -26.819)"
      ></Path>
      <Path
        fill={fill}
        d="M26.8 37.8a.631.631 0 001.261 0 3.912 3.912 0 117.825 0 .631.631 0 001.261 0 5.174 5.174 0 10-10.347 0z"
        data-name="Path 430"
        transform="translate(-16.205 -18.356)"
      ></Path>
      <Path
        fill={fill}
        d="M57.425 38.426a.63.63 0 00.631-.631 3.912 3.912 0 117.825 0 .631.631 0 001.261 0 5.174 5.174 0 10-10.347 0 .63.63 0 00.63.631z"
        data-name="Path 431"
        transform="translate(-27.285 -18.356)"
      ></Path>
      <Path
        fill={fill}
        d="M23.372 33.4a8.238 8.238 0 015.268-5.669.631.631 0 00-.417-1.191 9.512 9.512 0 00-6.084 6.6.63.63 0 001.233.262z"
        data-name="Path 432"
        transform="translate(-14.479 -16.095)"
      ></Path>
      <Path
        fill={fill}
        d="M67.541 26.535a.631.631 0 00-.417 1.191 8.243 8.243 0 015.268 5.669.631.631 0 00.616.5.671.671 0 00.131-.013.631.631 0 00.487-.748 9.516 9.516 0 00-6.085-6.599z"
        data-name="Path 433"
        transform="translate(-30.945 -16.095)"
      ></Path>
     </Svg>
)
export default Happy
import React from 'react'
import {Svg, Path, Circle } from 'react-native-svg'

const Sad = ({
     fill = '#000',
     fill2='#000',
     stroke = '#000',
     width="50.834",
     height="50.834",
     name="Sad",
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
          fill={fill}
          d="M35.465 10a25.465 25.465 0 1025.466 25.465A25.494 25.494 0 0035.465 10zm0 49.657a24.192 24.192 0 1124.192-24.192 24.22 24.22 0 01-24.192 24.192z"
          data-name="Path 417"
          transform="translate(-9 -10)"
        ></Path> */}
        <Path
          fill={fill}
          d="M27.435 36.482a.637.637 0 00.637-.637 3.95 3.95 0 117.9 0 .637.637 0 001.273 0 5.223 5.223 0 10-10.446 0 .637.637 0 00.636.637z"
          data-name="Path 418"
          transform="translate(-16.104 -17.493)"
        ></Path>
        <Path
          fill={fill}
          d="M62.017 30.622a5.229 5.229 0 00-5.223 5.223.637.637 0 001.273 0 3.95 3.95 0 017.9 0 .637.637 0 101.273 0 5.229 5.229 0 00-5.223-5.223z"
          data-name="Path 419"
          transform="translate(-27.003 -17.493)"
        ></Path>
        <Path
          fill={fill}
          d="M25.675 44.572c-.412.422-2.466 2.6-2.466 4.049a2.921 2.921 0 105.842 0c0-1.447-2.054-3.627-2.466-4.049a.654.654 0 00-.91 0zm.456 5.7a1.649 1.649 0 01-1.648-1.648 6.553 6.553 0 011.648-2.665 6.545 6.545 0 011.648 2.665 1.65 1.65 0 01-1.648 1.644z"
          data-name="Path 420"
          transform="translate(-14.8 -22.495)"
        ></Path>
        <Path
          fill={fill}
          d="M44.071 60.482a17.331 17.331 0 00-10.153 3.268.637.637 0 00.744 1.034 16.061 16.061 0 019.409-3.028 16.01 16.01 0 019.411 3.03.637.637 0 00.744-1.034 17.267 17.267 0 00-10.155-3.27z"
          data-name="Path 421"
          transform="translate(-18.595 -28.344)"
        ></Path>
     </Svg>
)
export default Sad
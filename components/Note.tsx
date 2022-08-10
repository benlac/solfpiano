import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={14.566} height={41.919998}>
      <Path
        d="M303.137 299.651c-3.396 1.82-5.205 5.115-4.092 7.593 1.187 2.644 5.267 3.39 9.107 1.665 3.84-1.724 5.992-5.269 4.804-7.913-1.187-2.643-5.267-3.39-9.106-1.665-.24.108-.486.199-.713.32z"
        transform="rotate(180 156.641 170.161)"
        opacity={0.9}
        fill="#000"
        fillOpacity={1}
        fillRule="evenodd"
        stroke="none"
        strokeWidth={0.2}
        strokeMiterlimit={4}
        strokeDashoffset={0}
        strokeOpacity={1}
      />
      <Path
        d="M299.505 305.984v33.588"
        transform="rotate(180 156.641 170.161)"
        fill="none"
        fillOpacity={0.75}
        fillRule="evenodd"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
    </Svg>
  );
}

export default SvgComponent;

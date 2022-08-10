import * as React from 'react';
import Svg, { Text, Path, TSpan } from 'react-native-svg';

function Test(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={'100%'}
      height={'100%'}
      {...props}
    >
      <Text
        x={75.071167}
        y={30.323961}
        xmlSpace="preserve"
        fontSize="72px"
        fontStyle="normal"
        fontWeight={400}
        fill="#000"
        fillOpacity={1}
        stroke="none"
        fontFamily="Bitstream Vera Sans"
      />
      <Path
        d="M257 421v-4H62V118h42l.006-5.25c.003-2.888.447-6.84.988-8.785 1.233-4.44 6.497-12.832 8.54-13.617 4.303-1.65 9.887 11.358 9.304 21.673l-.338 5.983 77.25-.002L277 118v-8.083c0-6.027.318-7.976 1.25-7.659.854.29 1.25 2.85 1.25 8.084v7.66l84.25-.001L448 118v-12.083c0-9.222.296-11.985 1.25-11.669.882.293 1.333 3.846 1.532 12.084l.281 11.668H1013v-8c0-4.667.417-8 1-8s1 3.333 1 8v8h165v-12c0-7.333.389-12 1-12s1 4.667 1 12v12h527v-8c0-4.667.417-8 1-8s1 3.333 1 8v8h144v-8c0-4.667.417-8 1-8s1 3.333 1 8v8h493.916l.292-7.75c.162-4.305.736-7.75 1.292-7.75.555 0 1.13 3.445 1.292 7.75l.292 7.75h139.832l.292-7.67c.191-5.027.723-7.812 1.542-8.083.931-.308 1.25 1.65 1.25 7.67V118h424v299h-444v4c0 2.889-.417 4-1.5 4s-1.5-1.111-1.5-4v-4h-637v4c0 2.2-.45 4-1 4s-1-1.8-1-4v-4H995v4c0 2.2-.45 4-1 4s-1-1.8-1-4v-4H626.012c-348.902 0-366.981.086-366.842 1.75.3 3.579-.2 6.25-1.17 6.25-.55 0-1-1.8-1-4zm-96.031-12.25c.03-2.721-.037-2.75-6.469-2.75-6.555 0-7.75-.717-5-3 .825-.685 1.5-1.64 1.5-2.122 0-.483-11.603-.878-25.785-.878-22.703 0-26.437.226-31.25 1.892-8.494 2.941-12.288 3.578-11.753 1.973.246-.74 2.212-1.878 4.368-2.529 3.494-1.054 2.48-1.19-9.33-1.26L64 400v13.98l46.25.26c50.76.285 50.652.297 50.719-5.49zM257 407v-7h-43.5c-42.833 0-43.5.03-43.5 2 0 1.467.667 2 2.5 2 1.375 0 2.5.45 2.5 1s-1.125 1-2.5 1c-3.043 0-3.456 3.363-.75 6.107 1.618 1.64 4.89 1.779 43.5 1.834L257 414v-7zm171 0v-7H259v14h169v-7zm172 0v-7H431v14h169v-7zm289.89 0l.145-7H603v14H889.747l.144-7zm8.11 0v-7h-6v14h6v-7zm95 0v-7h-86v14h86v-7zm167 0v-7H995v14h165v-7zm167 0v-7h-165v14h165v-7zm288 0v-7h-286v14h286v-7zm9 0v-7h-7v14h7v-7zm211 0v-7h-202v14h202v-7zm146 0v-7h-144v14h144v-7zm289 0v-7h-287v14h287v-7zm9 0v-7h-6v14h6v-7zm195 0v-7h-185v14h185v-7zm144 0v-7h-141v14h141v-7zm284 0v-7h-281v14h281v-7zm10 0v-7h-8v14h8v-7zm-2751-5c0-1.531-.667-2-2.845-2-1.575 0-3.653.893-4.655 2-1.785 1.973-1.747 2 2.845 2 3.988 0 4.655-.286 4.655-2zm462.242-5.95c-1.243-1.037-2.521-3.197-2.842-4.801-.484-2.418-.042-3.373 2.585-5.583l3.168-2.666H603v13.932l10.75.322c5.912.177 10.975.402 11.25.5.275.099-.516-.668-1.758-1.704zM890 389.992V383l-123.75.04c-108.138.035-123.416.221-121.106 1.476 3.284 1.784 4.955 6.12 3.56 9.234-.556 1.237-1.39 2.25-1.857 2.25-.466 0-.847.337-.847.75 0 .412 54.9.634 122 .492l122-.258v-6.992zm799.232 5.138c-.602-4.103 3.83-10.86 7.487-11.41 1.53-.232-12.182-.488-30.469-.57L1633 383V396.969l28.25.282c15.537.155 28.285.387 28.327.515.042.129-.113-1.058-.345-2.636zm314.222.415c-3.799-3.799-2.956-8.468 2.046-11.337 1.587-.91-.53-1.153-10.25-1.178L1983 383v13.932l10.75.322c5.912.177 11.067.417 11.454.534.388.116-.4-.893-1.75-2.243zM99.288 393.75c1.992-1.788 4.534-4.938 5.65-7l2.028-3.75H64v14h31.667l3.621-3.25zm55.853-.5c.886-2.063 1.928-5.213 2.315-7l.703-3.25h-21.512c-20.647 0-21.538.08-22.148 2.004-.35 1.102-2.826 4.252-5.503 7L104.13 397h49.399l1.612-3.75zm9.876-1c2.418-2.612 4.626-4.75 4.906-4.75.28 0 .379 2.138.218 4.75l-.292 4.75H257v-14l-43.75.035-43.75.035-5.747 6.965c-6.468 7.839-5.504 9.528 1.264 2.215zM428 390v-7H259v14h169v-7zm172 0v-7H431v14h169v-7zm39.334 1.704c-.198-5.721-1.593-7.704-5.421-7.704-3.643 0-5.036 2.52-3.981 7.197 1.192 5.287 1.884 5.943 5.91 5.608l3.658-.305-.166-4.796zM897.828 390l.288-7H892v7c0 6.982.007 7 2.77 7 2.737 0 2.775-.087 3.058-7zM993 390v-7h-86v14h86v-7zm167 0v-7H995v14h165v-7zm167 0v-7h-165v14h165v-7zm288 0v-7h-286v14h286v-7zm9 0v-7h-7v14h7v-7zm79.587 2.226c6.11-3.965 7.315-7.233 2.663-7.217-3.318.012-15.25 7.352-15.25 9.382 0 3.59 5.064 2.718 12.587-2.165zM1835 390v-7h-124v4.365c0 2.902-.695 5.249-2.073 7l-2.072 2.635H1835v-7zm146 0v-7h-144v14h144v-7zm38.897 6.085c1.809-1.146.855-7.596-1.51-10.209-1.927-2.13-5.405-2.458-7.187-.676-1.688 1.688-1.492 6.938.357 9.577 1.616 2.308 5.74 2.954 8.34 1.308zM2270 390v-7l-123.25.068c-83.52.046-122.58.392-121.174 1.075 1.141.554 2.777 2.554 3.634 4.445 1.458 3.217 1.432 3.598-.399 5.925l-1.956 2.487H2270v-7zm9 0v-7h-6v14h6v-7zm52.32 5.117c-.94-3.594 3.915-10.359 8.18-11.398 1.1-.268-9.813-.54-24.25-.603L2289 383v14h21.406c20.472 0 21.385-.082 20.914-1.883zm14.396-2.424c3.895-2.33 5.284-3.756 5.284-5.427 0-1.778-.564-2.266-2.62-2.266-3.602 0-14.38 6.675-14.38 8.906 0 4.1 3.426 3.746 11.716-1.213zM2474 390v-7h-120v4.26c0 3.177-.646 4.957-2.54 7l-2.54 2.74H2474v-7zm144 0v-7h-141v14h141v-7zm284 0v-7h-281v14h281v-7zm10 0v-7h-8v14h8v-7zM108.947 376.25c.573-2.063 1.044-5.213 1.047-7 .006-3.212-.05-3.25-4.744-3.244-4.227.006-4.938.337-6.453 3-1.449 2.546-2.306 2.994-5.72 2.994-3.304 0-4.411-.533-6.235-3-2.215-2.996-2.232-3-12.53-3H64v14h43.906l1.041-3.75zm50.303 2.358c.962-.73 1.75-2.516 1.75-3.968 0-2.583-.142-2.64-6.5-2.64-6.628 0-7.663-.695-5-3.357.825-.825 1.5-1.757 1.5-2.072 0-.314-6.917-.571-15.371-.571h-15.371l-.687 5.173c-.377 2.845-1.126 5.995-1.664 7-.932 1.742-.032 1.826 19.308 1.795 15.282-.024 20.717-.36 22.035-1.36zm-35.537-2.229c-1.272-1.271-.754-5.1.87-6.449 2.281-1.892 4.917.08 4.917 3.679 0 2.35-.474 2.946-2.537 3.187-1.396.163-2.859-.025-3.25-.417zM257 373v-7h-43.5c-42.833 0-43.5.03-43.5 2 0 1.467.667 2 2.5 2 1.375 0 2.5.45 2.5 1s-1.125 1-2.5 1c-3.043 0-3.456 3.363-.75 6.107 1.618 1.64 4.89 1.779 43.5 1.834L257 380v-7zm171 0v-7H279.584l-3.84 3.75c-3.61 3.525-4.216 3.75-10.101 3.75h-6.26l-.093 3.25-.092 3.25H428v-7zm172 0v-7H431v14h169v-7zm289.896 0l.176-7H603v14h286.72l.176-7zm7.932 0l.288-7H892v7c0 6.982.007 7 2.77 7 2.737 0 2.775-.087 3.058-7zM993 373v-7h-86v14h86v-7zm167 0v-7h-144.973l-3.437 3.75c-3.303 3.605-3.69 3.75-10.013 3.75H995v6.5h165v-7zm167 0v-7h-165v14h165v-7zm288 0v-7h-286v14h286v-7zm9 0v-7h-7v14h7v-7zm85 0v-7h-76v14h76v-7zm126 0v-7h-124v14h124v-7zm146 0v-7h-123.973l-3.437 3.75c-3.303 3.605-3.69 3.75-10.013 3.75H1837v6.5h144v-7zm289 0v-7h-287v14h287v-7zm9 0v-7h-6v14h6v-7zm72 0v-7h-62v14h62v-7zm123 0v-7h-120v14h120v-7zm144 0v-7h-120.973l-3.437 3.75c-3.303 3.605-3.69 3.75-10.013 3.75H2477v6.5h141v-7zm284 0v-7h-281v14h281v-7zm10 0v-7h-8v14h8v-7zm-2643.5-4.55l5-2.488-7 .269c-5.418.208-7.008.608-7.033 1.769-.036 1.597 1.384 2.98 3.033 2.953.55-.009 3.25-1.135 6-2.503zm735 .072l5-2.46-6.191-.03c-6.234-.032-7.955.841-6.929 3.516.773 2.015 2.341 1.817 8.12-1.026zm843.5-.605l3.5-1.829-6.281-.044c-4.865-.034-6.42.317-6.896 1.557-.338.88.014 1.995.781 2.477 1.6 1.004 3.917.44 8.896-2.16zm638.5.605l5-2.46-6.75-.03c-5.89-.028-6.75.201-6.75 1.801 0 3.883 1.723 4.023 8.5.69zM161 368c0-1.531-.667-2-2.845-2-1.575 0-3.653.893-4.655 2-1.785 1.973-1.747 2 2.845 2 3.988 0 4.655-.286 4.655-2zm-76-7.099c0-3.815 3.234-9.094 6.421-10.482 2.753-1.199 1.464-1.345-12.171-1.38L64 349v14h10.5c9.998 0 10.5-.1 10.5-2.099zm25 .567c0-2.858-2.778-8.2-5.117-9.837-4.267-2.99-10.774-1.563-14.633 3.206-2.004 2.477-1.51 3.03 3 3.356 3.281.237 4.475.82 5.237 2.557.844 1.923 1.751 2.25 6.25 2.25 4.06 0 5.263-.35 5.263-1.532zm44.198-.718c1.24-2.2 3.757-9.51 3.787-11 .008-.412-10.898-.748-24.235-.746l-24.25.004 3.172 1.934c1.945 1.186 4.07 3.891 5.494 6.996l2.322 5.062h16.221c15.779 0 16.255-.061 17.489-2.25zm-30.485-1.37c-1.38-1.38-.727-6.16.928-6.796 3.275-1.257 5.495.356 5.166 3.751-.247 2.544-.805 3.223-2.844 3.46-1.396.164-2.859-.024-3.25-.416zm41.51-1.522c2.627-2.827 4.819-4.74 4.87-4.25.05.49.017 2.804-.076 5.142l-.168 4.25h89.006l1.892-2.406c4.854-6.17 21.308-5.392 18.896.893-.515 1.342 7.826 1.513 73.888 1.513H428v-2.55c0-3.339 2.423-7.933 5.217-9.89 2.024-1.417-9.97-1.557-130.744-1.525l-132.973.035-5.747 6.965c-6.66 8.072-5.58 9.412 1.47 1.824zM277 361c0-2.682-4.45-2.682-8.5 0l-3 1.987 5.75.007c5.086.006 5.75-.225 5.75-1.994zm323-5v-7H450.402l.392 3.36c.312 2.674-.26 4.101-2.805 7l-3.196 3.64H600v-7zm289.896 0l-.177-7H603v14h287.072l-.176-7zm8.104 0v-7h-6v14h6v-7zm97.814 4.926c3.89-6.228 19.186-6.44 19.186-.265V363h145v-3.05c0-3.638 2.317-8.453 4.75-9.87 1.195-.696-39.37-1.029-128-1.05L907 349v14h43.76c43.195 0 43.776-.027 45.054-2.074zM1013 361c0-2.682-4.45-2.682-8.5 0l-3 1.987 5.75.007c5.085.006 5.75-.225 5.75-1.994zm314-5v-7h-145.553l.364 3.819c.287 3.009-.203 4.494-2.312 7l-2.677 3.181H1327v-7zm288 0v-7h-231.77l-1.693 2.584c-3.5 5.342-13.492 6.981-21.206 3.479-2.293-1.041-4.672-2.831-5.285-3.978-1.04-1.942-1.97-2.085-13.581-2.085H1329v14h286v-7zm9 0v-7h-7v14h7v-7zm85 0v-7h-76v14h76v-7zm129.95 4.048c3.485-3.406 8.79-4.713 13.95-3.438 2.915.72 3.66 1.414 3.916 3.64l.317 2.75H1981v-14h-270v14H1835.931l3.02-2.952zM1855 361c0-2.682-4.45-2.682-8.5 0l-3 1.987 5.75.007c5.085.006 5.75-.225 5.75-1.994zm415-5v-7h-287v14h287v-7zm9 0v-7h-6v14h6v-7zm72 0v-7h-62v14h62v-7zm126.973 4.529c5.685-6.052 19.027-5.636 19.027.593 0 1.816 1.982 1.878 60.5 1.878h60.5v-14h-264v14H2475.651l2.322-2.471zM2494 361c0-2.59-3.27-2.59-8 0l-3.5 1.916 5.75.042c5.097.037 5.75-.185 5.75-1.958zm149.068-.927c-3.29-3.523-3.49-5.823-.764-8.823l2.045-2.25H2621v14h24.802l-2.734-2.927zM2902 356v-7l-118.75.03c-75.128.02-118.155.378-117.131.977.89.52 2.193 2.332 2.895 4.027 1.139 2.75 1.042 3.4-.899 6.024L2665.94 363H2902v-7zm10 0v-7h-8v14h8v-7zm-2469.284 1.693c3.895-2.33 5.284-3.756 5.284-5.427 0-1.778-.564-2.266-2.62-2.266-3.602 0-14.38 6.675-14.38 8.906 0 4.1 3.426 3.746 11.716-1.213zm731.534-.382c6.476-3.892 7.883-7.318 3-7.301-3.318.011-15.25 7.351-15.25 9.381 0 3.526 4.072 2.835 12.25-2.08zm1485.585 2.939c.806-1.559.78-2.675-.166-6.9-.973-4.35-6.558-5.775-8.995-2.295-1.396 1.992-1.014 6.967.753 9.827 1.13 1.83 7.377 1.36 8.408-.632zm-1286.471-8.452c1.532-2.448.515-2.95-5.28-2.604l-5.136.306 1.622 2.306c1.922 2.732 7.081 2.728 8.794-.008zM600 268v-78H451v3.539c0 5.265-5.975 11.38-11.895 12.174-10.757 1.443-14.867-7.068-6.708-13.888 2.008-1.68-5.043-1.76-156.647-1.792-87.313-.018-158.74.305-158.73.717.011.412.452 3.675.979 7.25 1.238 8.398.45 12.398-3.157 16.004-5.046 5.046-14.054 5.213-19.813.367-2.615-2.2-3.029-3.22-3.029-7.46 0-5.84 2.412-8.911 7-8.911 6.934 0 9.689 8.952 4.04 13.13-3.63 2.682-3.085 3.871 1.769 3.866 4.642-.005 9.92-3.157 11.293-6.746.966-2.521.588-10.22-.785-16l-.534-2.25H64v156h536v-78zm290 0v-78H649.788l-2.062 2.621c-2.567 3.264-7.496 5.386-12.444 5.357-4.667-.027-11.732-3.125-13.468-5.905-1.15-1.841-2.275-2.073-10.055-2.073H603v156h287v-78zm8 0v-78h-6v156h6v-78zm429 0v-78h-145v4.015c0 3.15-.713 4.792-3.312 7.628-2.784 3.039-4.136 3.694-8.484 4.111-9.612.924-12.99-4.368-7.734-12.114l2.47-3.64H907v156h420v-78zm28.597 75.067c1.358-1.614 4.09-3.469 6.073-4.123 6.872-2.268 18.482.808 19.899 5.272.539 1.698 6.152 1.784 116.998 1.784H1615V190h-231l-3.89 3.89-3.89 3.89 2.374 1.27c1.305.699 2.636 2.098 2.957 3.11.356 1.122 1.533 1.84 3.016 1.84 1.496 0 2.433.578 2.433 1.5 0 .825-.848 1.5-1.885 1.5s-2.647 1.163-3.578 2.584c-3.5 5.342-13.492 6.981-21.206 3.48-2.293-1.042-4.672-2.832-5.285-3.979-.668-1.248-2.106-2.085-3.581-2.085-1.524 0-2.465-.572-2.465-1.5 0-.825.827-1.5 1.837-1.5s3.701-1.773 5.979-3.94c3.762-3.579 3.958-3.997 2.136-4.575-1.103-.35-2.72-1.728-3.594-3.06-1.54-2.35-1.97-2.425-13.973-2.425H1329v156H1353.129l2.468-2.933zm17.403 2.262c0-1.57-3.478-4.329-5.455-4.329-2.408 0-4.545 1.74-4.545 3.7 0 .893 1.564 1.3 5 1.3 2.75 0 5-.302 5-.671zM1624 268v-78h-7v156h7v-78zm85 70c0-4.667.417-8 1-8s1 3.333 1 8v8h270V190H1711.027l-3.326 3.629c-2.798 3.054-4.144 3.707-8.497 4.125-6.252.601-10.204-1.443-10.204-5.277V190h-56v156h76v-8zm561-70v-78h-239.77l-1.693 2.584c-2.125 3.243-7.217 5.416-12.69 5.416-5.037 0-12.921-3.568-13.598-6.154-.426-1.63-1.584-1.846-9.866-1.846H1983v156h287v-78zm9 0v-78h-6v156h6v-78zm72.208 70.25c.162-4.305.736-7.75 1.292-7.75.555 0 1.13 3.445 1.292 7.75l.292 7.75H2618V190h-264.416l-3.728 3.64c-4.866 4.752-11.806 5.78-16.106 2.386-1.512-1.194-2.75-3.039-2.75-4.099 0-1.842-.93-1.927-21-1.927h-21v156h61.916l.292-7.75zM2902 268v-78h-118.722c-104.983 0-118.479.17-116.615 1.477 2.616 1.832 3.73 5.92 2.328 8.54-1.572 2.937-8.323 5.986-13.201 5.961-7.504-.038-15.79-5.226-15.79-9.886 0-.805.978-2.505 2.174-3.778l2.175-2.314H2621v156h281v-78zm10 0v-78h-8v156h8v-78zm-1538.636-58.202c1.532-2.448.515-2.95-5.28-2.604l-5.136.306 1.622 2.306c1.922 2.732 7.081 2.728 8.794-.008zm-.364-6.47c0-1.568-3.478-4.328-5.455-4.328-2.408 0-4.545 1.74-4.545 3.7 0 .893 1.564 1.3 5 1.3 2.75 0 5-.302 5-.671zm-930.25-4.699c3.878-2.287 5.25-3.688 5.25-5.363 0-3.416-4.147-2.929-11.12 1.306-5.422 3.295-7.14 5.835-5.232 7.743 1.076 1.076 5.546-.409 11.102-3.686zm731.5-.318c6.476-3.892 7.883-7.318 3-7.301-3.318.011-15.25 7.351-15.25 9.381 0 3.526 4.072 2.835 12.25-2.08zm1485.4 3.439c2.46-3.44-.966-11.75-4.844-11.75-3.768 0-5.68 2.627-4.788 6.578.431 1.913 1.334 4.14 2.005 4.95 1.491 1.796 6.398 1.939 7.626.222zm-2019.83-9.5c.295-2.08-.065-2.25-4.75-2.25-5.462 0-5.613.118-4.005 3.122 1.588 2.966 8.304 2.297 8.755-.872zm733.544.548c1.532-2.448.515-2.95-5.28-2.604l-5.136.306 1.622 2.306c1.922 2.732 7.081 2.728 8.794-.008zm327.136-.89l3-1.874-5.781-.017c-4.39-.013-5.93.369-6.396 1.584-1.42 3.701 3.483 3.865 9.177.307zm319.864.89c1.532-2.448.515-2.95-5.28-2.604l-5.136.306 1.622 2.306c1.922 2.732 7.081 2.728 8.794-.008zm323.136-.854l3-1.91-6.25-.017c-5.4-.015-6.25.232-6.25 1.816 0 1.009.324 2.158.72 2.554 1.002 1.002 5.209-.168 8.78-2.443zM96.485 184.898c-5.167-2.726-9.04-6.408-10.534-10.015L84.757 172H64v15h36.47l-3.985-2.102zm61.877.602c-.365-.95.013-1.5 1.031-1.5 1.119 0 1.607-.911 1.607-3v-3h-6.5c-3.575 0-6.5-.35-6.5-.777 0-.428.7-1.778 1.557-3l1.556-2.223H129.16l-.678 3.085c-.372 1.696-2.58 5.071-4.908 7.5l-4.23 4.415h19.797c17.187 0 19.721-.198 19.222-1.5zm99.888.838c-2.983-1.204-.323-9.772 3.967-12.777 2.032-1.424-1.917-1.561-44.994-1.561-46.556 0-47.223.028-47.223 2 0 1.467.667 2 2.5 2 1.375 0 2.5.45 2.5 1s-1.125 1-2.5 1c-1.99 0-2.5.502-2.5 2.465 0 1.453.833 2.91 2.028 3.55 1.115.597 1.764 1.513 1.441 2.035-.368.595 15.608.92 42.722.871 23.82-.043 42.746-.306 42.059-.583zM448 180.826v-6.175l-2.402 2.257c-5.145 4.833-16.161 3.525-17.277-2.052L427.75 172H279.3l.392 3.918c.327 3.272-.126 4.507-2.754 7.5L273.793 187H448v-6.174zm152-1.326V172H451v15h149v-7.5zm23.132 4c2.13-1.925 4.66-3.52 5.62-3.544 1.035-.026.214-.854-2.011-2.029-2.068-1.091-4.314-2.872-4.991-3.956-1.073-1.718-2.357-1.971-9.99-1.971H603v15h8.129c7.885 0 8.245-.105 12.003-3.5zM639 185.7c0-3.787-7.131-5.191-8.965-1.766-1.572 2.939-1.408 3.066 3.965 3.066 3.436 0 5-.407 5-1.3zm250.902-6.2l.174-7.5H649.788l-2.06 2.618c-1.132 1.44-3.447 3.222-5.143 3.96-1.697.74-2.363 1.361-1.48 1.383.882.021 3.132 1.587 5 3.478l3.395 3.439 120.114.06 120.114.062.174-7.5zm7.995 0l-.145-7.5H892v15H898.043l-.146-7.5zm95.346 4.992c-.632-3.31 1.42-8.082 4.527-10.526 2.495-1.962 2.413-1.966-44.135-1.966H907v15h86.723l-.48-2.508zM1180 180.826v-6.175l-2.467 2.318c-5.41 5.082-17.533 3.358-17.533-2.492V172h-145v4.577c0 3.725-.544 5.12-2.923 7.5l-2.923 2.923H1180v-6.174zm147-1.326V172h-145v15h145v-7.5zm28.597 4.567c1.358-1.614 4.09-3.469 6.073-4.123 6.872-2.268 18.482.808 19.899 5.272.539 1.698 6.152 1.784 116.998 1.784H1615v-15h-286v15H1353.129l2.468-2.933zm17.403 2.262c0-1.569-3.478-4.329-5.455-4.329-2.408 0-4.545 1.74-4.545 3.7 0 .893 1.564 1.3 5 1.3 2.75 0 5-.302 5-.671zm251-6.829V172h-7v15h7v-7.5zm67.812 5.43c.71-1.139 2.732-2.696 4.49-3.461l3.198-1.39-3.027-.04c-4.085-.053-7.473-2.59-7.473-5.596V172h-56v15h28.76c28.001 0 28.793-.054 30.052-2.07zM1709 185c0-2.682-4.45-2.682-8.5 0l-3 1.987 5.75.007c5.085.006 5.75-.225 5.75-1.994zm126.243-.508c-.632-3.31 1.42-8.082 4.527-10.526 2.492-1.96 2.303-1.966-63.135-1.966H1711v15h124.723l-.48-2.508zM1981 179.5V172h-124v4.423c0 3.3-.658 5.205-2.589 7.5l-2.589 3.077H1981v-7.5zm22.3 4c1.925-1.925 4.283-3.5 5.24-3.5 1.106 0 .323-.955-2.15-2.622-2.14-1.442-4.25-3.242-4.69-4-.585-1.009-3.199-1.378-9.75-1.378H1983v15h8.4c8.267 0 8.456-.056 11.9-3.5zm16.514 1.77c-.79-4.097-8.828-4.025-9.637.087-.267 1.353.585 1.643 4.823 1.643 4.34 0 5.094-.271 4.814-1.73zM2270 179.5V172h-239.77l-1.69 2.58c-.93 1.419-2.99 3.126-4.577 3.793l-2.886 1.214 3.44 1.853c1.893 1.019 3.706 2.687 4.03 3.706.568 1.792 4.631 1.854 121.02 1.854H2270v-7.5zm9 0V172h-6v15h6v-7.5zm55.292 5.384c1.214-1.164 3.558-2.722 5.208-3.461l3-1.345-3.115-.039c-3.739-.047-8.385-3.433-8.385-6.112 0-1.842-.93-1.927-21-1.927h-21v15h21.542c20.574 0 21.64-.095 23.75-2.116zM2351 185c0-2.682-4.45-2.682-8.5 0l-3 1.987 5.75.007c5.085.006 5.75-.225 5.75-1.994zm123.84.115c-1.572-2.517.386-7.286 4.366-10.635l2.947-2.48H2354v15h61.008c59.52 0 60.98-.046 59.832-1.885zM2618 179.5V172h-121v3.965c0 3.01-.748 4.818-3.104 7.5l-3.103 3.535H2618v-7.5zm284 0V172l-116.25.003-116.25.003-2 3.01c-3.372 5.077-12.634 6.469-20.196 3.035-2.308-1.047-4.778-2.837-5.49-3.978-1.167-1.867-2.263-2.073-11.054-2.073H2621v15h281v-7.5zm10 0V172h-8v15h8v-7.5zm-2641 2.003c6.402-3.873 8.013-7.51 3.32-7.493-3.362.01-15.445 7.4-15.077 9.219.725 3.586 3.7 3.15 11.757-1.726zm736.25-.192c6.346-3.814 7.877-7.311 3.2-7.311-4.376 0-15.45 6.834-15.45 9.535 0 3.378 4.196 2.616 12.25-2.224zm842 0c6.476-3.892 7.883-7.318 3-7.301-3.318.011-15.25 7.351-15.25 9.381 0 3.526 4.072 2.835 12.25-2.08zm639.466.382c3.895-2.33 5.284-3.756 5.284-5.427 0-1.778-.564-2.266-2.62-2.266-3.602 0-14.38 6.675-14.38 8.906 0 4.1 3.426 3.746 11.716-1.213zm-2375.139-.443c-1.699-9.871-1.252-9.25-6.656-9.25-2.707 0-4.921.39-4.921.865 0 .476.951 2.075 2.114 3.553 3.477 4.42 1.195 4.233-3.072-.253-3.373-3.546-4.563-4.165-8.002-4.165-2.222 0-4.04.449-4.04.997 0 1.742 6.887 8.697 10.256 10.358 1.83.903 5.798 1.61 9.105 1.622l5.862.023-.646-3.75zm5.573 1.67c2.033-1.088 4.85-6.542 4.85-9.388 0-1.175-1.184-1.532-5.08-1.532-5.001 0-5.07.042-4.554 2.75 2.016 10.569 1.607 9.87 4.784 8.17zM1709 177.826v-3.175l-2.314 2.175c-1.273 1.196-2.96 2.227-3.75 2.292-1.18.098 2.508 1.321 5.314 1.764.412.065.75-1.31.75-3.056zm642 0v-3.175l-2.314 2.175c-1.273 1.196-2.96 2.227-3.75 2.292-1.18.098 2.508 1.321 5.314 1.764.412.065.75-1.31.75-3.056zm-1910.5-3.932l3-1.86-6.25-.017c-5.4-.015-6.25.232-6.25 1.816 0 1.009.292 2.126.648 2.482.943.942 5.388-.274 8.852-2.421zm199.32.356c.295-2.08-.065-2.25-4.75-2.25-5.462 0-5.613.118-4.005 3.122 1.588 2.966 8.304 2.297 8.755-.872zm531.68-.342l3-1.874-5.781-.017c-4.39-.013-5.93.369-6.396 1.584-1.42 3.701 3.483 3.865 9.177.307zm529 0l3-1.874-5.781-.017c-4.39-.013-5.93.369-6.396 1.584-1.42 3.701 3.483 3.865 9.177.307zm319.864.89c1.532-2.448.515-2.95-5.28-2.604l-5.136.306 1.622 2.306c1.922 2.732 7.081 2.728 8.794-.008zm323.136-.854l3-1.91-6.25-.017c-5.4-.015-6.25.232-6.25 1.816 0 1.009.324 2.158.72 2.554 1.002 1.002 5.209-.168 8.78-2.443zm316.546.97c1.503-2.808 1.014-3.076-4.961-2.72-5.111.304-5.129.317-3.554 2.556 2.085 2.965 6.966 3.06 8.515.164zM161 174c0-1.531-.667-2-2.845-2-1.575 0-3.653.893-4.655 2-1.785 1.973-1.747 2 2.845 2 3.988 0 4.655-.286 4.655-2zm-77.393-6.582c-.334-.87-.607-4.02-.607-7V155H64v14h10.107c8.805 0 10.029-.204 9.5-1.582zm13.687-2.572c.306-2.284 1.504-5.434 2.661-7L102.06 155h-5.01c-4.83 0-5.082.142-7.03 3.96-1.11 2.178-2.02 5.328-2.02 7 0 2.923.169 3.04 4.368 3.04 4.368 0 4.369-.001 4.926-4.154zm13.896.654c-.33-2.824-.837-3.5-2.625-3.5-1.22 0-3.128 1.012-4.242 2.25-3.956 4.394-3.813 4.75 1.917 4.75h5.358l-.408-3.5zm10.569.25c-1.815-2.362-3.437-3.332-5.933-3.549-3.39-.295-3.43-.252-3.021 3.25l.414 3.549H124.256l-2.497-3.25zm33.177-1c1.002-2.337 2.11-5.487 2.462-7l.64-2.75H124.06l2.47 3.64c1.415 2.084 2.47 5.075 2.47 7V169h24.112l1.824-4.25zm9.675-.765c2.58-2.759 4.938-4.77 5.24-4.468.3.301.424 2.558.273 5.016l-.275 4.467h43.982c43.54 0 43.976-.02 43.457-2.007-.72-2.756 1.47-7.658 4.482-10.027 2.495-1.962 2.405-1.966-44.885-1.931l-47.385.035-5.747 6.965c-6.637 8.044-6.062 9.348.858 1.95zm106.639.326c6.475-3.892 7.883-7.318 3-7.301-3.318.011-15.25 7.351-15.25 9.381 0 3.526 4.072 2.835 12.25-2.08zm5.75 3.63c0-.582-.45-.78-1-.441-.55.34-1 .816-1 1.059s.45.441 1 .441 1-.477 1-1.059zm154.588-1.441c1.274-1.375 2.761-2.5 3.305-2.5s1.241-.408 1.55-.907c.308-.498-.245-.696-1.23-.439-2.338.612-7.213-3.259-7.213-5.727 0-1.885-1.599-1.927-74.25-1.927H279.5V168.997h74.885l74.886.001 2.317-2.5zM448 167c0-1.467-.667-2-2.504-2-1.377 0-4.182.9-6.235 2l-3.731 2h6.235c5.568 0 6.235-.214 6.235-2zm152-5v-7H451v14h149v-7zm22.076 4.371c6.349-6.884 18.098-7.043 24.806-.335l2.964 2.964h240.189l-.144-7-.144-7H603v14h8.326c7.708 0 8.505-.195 10.75-2.629zM639 167.7c0-3.787-7.131-5.191-8.965-1.766-1.572 2.939-1.408 3.066 3.965 3.066 3.436 0 5-.407 5-1.3zm258.821-5.7c-.259-6.925-.292-7-3.041-7-2.775 0-2.78.012-2.78 7v7h6.083l-.262-7zM993 166.45c0-3.339 2.423-7.933 5.217-9.89 2.033-1.423-1.87-1.56-44.494-1.56H907v14h86v-2.55zm14.25-2.14c9.565-5.748 6.356-10.435-3.465-5.06-7.749 4.24-10.719 7.819-7.535 9.078 1.937.766 4.751-.262 11-4.017zM1013 168c0-.55-.423-1-.941-1-.517 0-1.22.45-1.559 1-.34.55.083 1 .941 1 .857 0 1.559-.45 1.559-1zm150.673-1.81l2.827-2.81-3-1.44c-2.074-.996-3.098-2.289-3.316-4.19l-.317-2.75H1015v14h145.846l2.827-2.81zM1180 167c0-1.467-.667-2-2.504-2-1.377 0-4.183.9-6.235 2l-3.731 2h6.235c5.568 0 6.235-.214 6.235-2zm147-5v-7h-145v14h145v-7zm288 0v-7h-286v14h286v-7zm9 0v-7h-7v14h7v-7zm68.122 4.572c2.443-3.105 8.034-4.949 12.995-4.283l3.883.52V155h-76v14h57.212l1.91-2.428zM1709 167c0-2.682-4.45-2.682-8.5 0l-3 1.987 5.75.007c5.085.006 5.75-.225 5.75-1.994zm126.288-.007c-.72-2.756 1.47-7.658 4.482-10.027 2.492-1.96 2.303-1.966-63.135-1.966H1711v14h62.406c61.986 0 62.403-.014 61.882-2.007zm13.962-2.682c6.476-3.892 7.883-7.318 3-7.302-3.318.012-15.25 7.352-15.25 9.382 0 3.526 4.072 2.835 12.25-2.08zm5.75 3.63c0-.583-.45-.781-1-.441s-1 .816-1 1.059.45.44 1 .44 1-.476 1-1.058zM1981 162v-7h-124v14h124v-7zm21.597 4.067c1.358-1.614 4.09-3.469 6.073-4.123 6.872-2.268 18.482.808 19.899 5.272.539 1.699 6.314 1.784 120.998 1.784H2270v-14h-287v14h8.565c8.245 0 8.656-.11 11.032-2.933zM2020 167.86c0-3.043-6.463-4.997-8.8-2.66-2.555 2.555-1.31 3.8 3.8 3.8 3.075 0 5-.439 5-1.14zm259-5.86v-7h-6v14h6v-7zm54.312 5.628c1.002-2.61 9.507-5.916 13.757-5.346l3.931.528V155h-62v14h21.893c17.628 0 21.996-.267 22.42-1.372zM2351 167c0-2.682-4.45-2.682-8.5 0l-3 1.987 5.75.007c5.085.006 5.75-.225 5.75-1.994zm123.32.117c-.645-2.47 1.961-7.406 5.295-10.029l2.655-2.088H2354v14h60.406c58.665 0 60.393-.054 59.914-1.883zm14.396-2.424c3.895-2.33 5.284-3.756 5.284-5.427 0-1.778-.564-2.266-2.62-2.266-3.602 0-14.38 6.675-14.38 8.906 0 4.1 3.426 3.746 11.716-1.213zm5.284 3.248c0-.582-.45-.78-1-.441-.55.34-1 .816-1 1.059s.45.441 1 .441 1-.477 1-1.059zM2618 162v-7h-121v14h121v-7zm25.816 3.06c3.705-3.524 3.935-4.004 2.189-4.559-1.074-.34-2.817-1.718-3.873-3.06-1.797-2.285-2.533-2.441-11.526-2.441H2621v14h18.674l4.142-3.94zm14.943 1.69c-1.992-3.016-7.241-3.586-8.657-.94-1.42 2.654-.55 3.19 5.187 3.19 4.912 0 4.942-.02 3.47-2.25zM2902 162v-7h-231.674l-4.017 3.82-4.016 3.821 2.806 1.243c1.543.683 3.083 2.113 3.42 3.179.605 1.901 2.753 1.937 117.048 1.937H2902v-7zm10 0v-7h-8v14h8v-7zm-2464-1.547c0-2.52-.025-2.528-2.4-.75-2.078 1.555-2.18 1.888-.75 2.477 2.758 1.136 3.15.92 3.15-1.727zm732 0c0-2.52-.025-2.528-2.4-.75-2.078 1.555-2.18 1.888-.75 2.477 2.758 1.136 3.15.92 3.15-1.727zm-739.5-3.56l3-1.86-6.25-.016c-5.4-.015-6.25.232-6.25 1.816 0 1.009.292 2.126.648 2.482.943.942 5.388-.274 8.852-2.421zm731 .015l3-1.874-5.781-.017c-4.39-.013-5.93.369-6.396 1.584-1.42 3.701 3.483 3.865 9.177.307zm1488.546 1.006c1.503-2.808 1.014-3.076-4.961-2.72-5.111.304-5.129.317-3.554 2.556 2.085 2.965 6.966 3.06 8.515.164zM85 150.666c0-.734 1.786-3.884 3.969-7L92.938 138H64v14h10.5c8.087 0 10.5-.307 10.5-1.334zm23.655-.416c-.264-.963-.765-3.438-1.113-5.5-.348-2.063-.99-3.75-1.425-3.75-.436 0-3.454 2.455-6.705 5.455L93.5 151.91l7.817.045c6.973.04 7.766-.144 7.338-1.705zM158 151c0-.55.675-1 1.5-1 1 0 1.5-1 1.5-3v-3h-6.5c-3.575 0-6.5-.35-6.5-.777 0-.428.7-1.778 1.557-3l1.556-2.223H109l.058 2.25c.031 1.238.375 4.05.764 6.25.635 3.594 1.061 4.063 4.193 4.618 6.068 1.077 43.985.975 43.985-.118zm99.288-1.007c-.72-2.756 1.47-7.658 4.482-10.027 2.495-1.962 2.41-1.966-44.635-1.966-46.468 0-47.135.028-47.135 2 0 1.467.667 2 2.5 2 1.375 0 2.5.45 2.5 1s-1.125 1-2.5 1c-3.043 0-3.456 3.363-.75 6.107 1.619 1.641 4.907 1.779 43.906 1.834 41.727.058 42.151.039 41.632-1.948zm13.962-2.682c6.475-3.892 7.883-7.318 3-7.301-3.318.011-15.25 7.351-15.25 9.381 0 3.526 4.072 2.835 12.25-2.08zm5.75 3.63c0-.582-.45-.78-1-.441-.55.34-1 .816-1 1.059s.45.441 1 .441 1-.477 1-1.059zm154.068-1.3c2.217-2.82 9.722-5.133 13.922-4.293 2.943.589 3.01.513 3.01-3.373V138h-84.25l-84.25.001v14h74.856l74.856-.001 1.856-2.36zM448 150c0-2.682-4.45-2.682-8.5 0l-3 1.987 5.75.007c5.086.006 5.75-.225 5.75-1.994zm152-5v-7H451v14h149v-7zm22.073 4.365c-2.784-3.539-2.616-5.21.885-8.817l2.957-3.048-11.457.31-11.458.311V152h21.145l-2.072-2.635zm17.37-2.53c-.07-5.56-1.675-7.835-5.53-7.835-3.857 0-5.138 2.59-3.765 7.607 1.488 5.436 1.602 5.539 5.695 5.198 3.653-.305 3.657-.31 3.6-4.97zM889.832 145l-.188-7-123.073.005-123.072.005 2.664 2.245c3.756 3.166 4.291 5.897 1.78 9.088l-2.09 2.657h244.167l-.188-7zm7.963.25c-.287-6.536-.383-6.76-3.046-7.066l-2.75-.317V152H898.091l-.295-6.75zm95.204 4.2c0-3.339 2.423-7.933 5.217-9.89 2.033-1.423-1.87-1.56-44.494-1.56H907v14h86v-2.55zm14.25-2.14c6.71-4.032 7.885-7.31 2.618-7.31-4.471 0-14.868 6.71-14.868 9.597 0 3.315 4.25 2.521 12.25-2.286zm5.75 3.721c0-.532-.675-.71-1.5-.393-.825.317-1.5.753-1.5.969 0 .216.675.393 1.5.393s1.5-.436 1.5-.969zm150.122-1.459c2.443-3.105 8.034-4.949 12.995-4.283l3.883.52V138h-165v14h146.212l1.91-2.428zM1180 150c0-1.467-.667-2-2.504-2-1.377 0-4.183.9-6.235 2l-3.731 2h6.235c5.568 0 6.235-.214 6.235-2zm147-5v-7h-145v14h145v-7zm28.557 4.777c-2.247-3.207-1.917-6.792.894-9.722l2.45-2.555-14.95.3-14.951.3V152h28.113l-1.556-2.223zm17.445.72c1.538-1.852.625-7.147-1.669-9.681-1.88-2.078-5.37-2.38-7.133-.616-1.688 1.688-1.492 6.938.357 9.577 1.819 2.598 6.552 3.001 8.445.72zM1615 145v-7l-118.75.032c-97.637.026-118.446.263-117.04 1.331 1.614 1.226 3.79 5.649 3.79 7.702 0 .514-.9 1.835-2 2.935-2 2-2 2 116 2h118v-7zm9 0v-7h-7v14h7v-7zm65.288 4.993c-.72-2.756 1.47-7.658 4.482-10.027 2.5-1.966 2.499-1.966-29.135-1.966H1633v14h28.406c27.947 0 28.398-.032 27.882-2.007zm13.962-2.682c6.476-3.892 7.883-7.318 3-7.301-3.318.011-15.25 7.351-15.25 9.381 0 3.526 4.072 2.835 12.25-2.08zm5.75 3.63c0-.582-.45-.78-1-.441-.55.34-1 .816-1 1.059s.45.441 1 .441 1-.477 1-1.059zm126.288-.948c-.72-2.756 1.47-7.658 4.482-10.027 2.492-1.96 2.303-1.966-63.135-1.966H1711v14h62.406c61.986 0 62.403-.013 61.882-2.007zm13.962-2.682c6.476-3.892 7.883-7.318 3-7.301-3.318.011-15.25 7.351-15.25 9.381 0 3.526 4.072 2.835 12.25-2.08zm5.75 3.63c0-.582-.45-.78-1-.441-.55.34-1 .816-1 1.059s.45.441 1 .441 1-.477 1-1.059zM1981 145v-7h-124v14h124v-7zm24 6.306c-4.947-1.768-5.34-7.987-.75-11.897 1.788-1.523 2.426-2.463 1.418-2.089-1.007.374-6.52.68-12.25.68H1983v14l11.75-.079c6.463-.043 11.075-.32 10.25-.615zm15.007-.814c1.423-1.715.764-7.858-1.081-10.081-1.43-1.724-6.086-1.851-7.726-.211-1.688 1.688-1.492 6.938.357 9.577 1.821 2.6 6.553 3 8.45.715zM2270 145v-7h-245.273l2.621 2.62c1.441 1.442 2.396 2.986 2.12 3.432-.275.445-.035 1.097.534 1.45.649.4.257 1.73-1.052 3.568l-2.086 2.93H2270v-7zm9 0v-7h-6v14h6v-7zm52.377 5.541c-1.183-3.083 1.694-8.468 5.946-11.128 2.298-1.437 3.353-2.343 2.345-2.013-1.007.33-12.82.6-26.25.6H2289v14h21.469c18.402 0 21.388-.208 20.909-1.459zm11.224-1.132c6.23-3.295 8.399-5.248 8.399-7.564 0-2.97-4.55-2.264-11.12 1.727-3.595 2.185-5.88 4.257-5.88 5.334 0 3.864 2.022 3.983 8.601.503zm8.399 1.532c0-.582-.45-.78-1-.441-.55.34-1 .816-1 1.059s.45.441 1 .441 1-.477 1-1.059zm123.32-.824c-.645-2.47 1.961-7.406 5.295-10.029l2.655-2.088H2354v14h60.406c58.665 0 60.393-.054 59.914-1.883zm14.43-2.474c3.874-2.295 5.25-3.704 5.25-5.377 0-1.778-.564-2.266-2.62-2.266-3.7 0-14.38 6.676-14.38 8.99 0 3.842 3.71 3.418 11.75-1.347zm5.25 3.298c0-.582-.45-.78-1-.441-.55.34-1 .816-1 1.059s.45.441 1 .441 1-.477 1-1.059zM2618 145v-7h-121v14h121v-7zm24.597 4.067c1.358-1.614 4.09-3.469 6.073-4.123 6.872-2.268 18.482.808 19.899 5.272.539 1.698 6.152 1.784 116.998 1.784H2902v-14h-281v14h9.565c9.35 0 9.62-.065 12.032-2.933zm17.403 2.262c0-.37-.745-1.494-1.655-2.5-2.212-2.445-6.977-2.385-8.31.105-1.582 2.957-1.424 3.066 4.465 3.066 3.025 0 5.5-.302 5.5-.671zM2912 145v-7h-8v14h8v-7zm-2751-5c0-1.531-.667-2-2.845-2-1.575 0-3.653.893-4.655 2-1.785 1.973-1.747 2 2.845 2 3.988 0 4.655-.286 4.655-2zm-60.203-8.753c3.882-3.386 4.232-4.06 3.625-6.997l-.672-3.25H64v14l16.25-.003 16.25-.003 4.297-3.747zm54.139-.497c1.002-2.337 2.11-5.487 2.462-7l.64-2.75h-36.821l-.608 2.423c-.335 1.333-2.18 4.483-4.102 7L113.013 135h40.1l1.823-4.25zm9.675-.765c2.58-2.759 4.938-4.77 5.24-4.468.3.301.424 2.558.273 5.016l-.275 4.467H277v-14l-53.75.035-53.75.035-5.747 6.965c-6.637 8.044-6.062 9.348.858 1.95zM448 128v-7H280v5.418c0 2.98-.273 6.13-.607 7-.55 1.435 7.26 1.582 84 1.582H448v-7zm152 0v-7H451v14h149v-7zm289.682 0l-.14-7H603v14h286.822l-.14-7zm7.878 0c0-6.988-.005-7-2.78-7s-2.78.012-2.78 7 .005 7 2.78 7 2.78-.012 2.78-7zm115.44 0v-7H907v14h106v-7zm167 0v-7h-165v14h165v-7zm147 0v-7h-145v14h145v-7zm288 0v-7h-286v14h286v-7zm9 0v-7h-7v14h7v-7zm85 0v-7h-76v14h76v-7zm146 0v-7h-144v14h144v-7zm126 0v-7h-124v14h124v-7zm289 0v-7h-287v14h287v-7zm9 0v-7h-6v14h6v-7zm72 0v-7h-62v14h62v-7zm143 0v-7h-140v14h140v-7zm124.168.002l-.332-7.002H2497v14l60.75.002 60.75.002-.332-7.003zM2902 128v-7h-281v14h281v-7zm10 0v-7h-8v14h8v-7zm-2799.79-5.679c1.622-1.793 1.535-1.85-2.262-1.487-2.93.279-3.948.822-3.948 2.104 0 3.579 2.65 3.315 6.21-.617zm5.77-8.281c1.11-2.178 2.02-5.545 2.02-7.481 0-2.92-.426-3.628-2.498-4.148-1.374-.345-3.19-.36-4.038-.036-1.854.712-6.44 10.216-6.454 13.375-.01 2 .488 2.25 4.47 2.25 4.212 0 4.6-.237 6.5-3.96zM40.372 410.304c-3.62-6.715-8.8-22.14-10.321-30.738-2.475-13.978-.058-34.594 7.455-63.589.8-3.087 1.753-9.497 2.118-14.246.98-12.754-1.59-20.637-9.437-28.935l-3.503-3.704 3.773-4.176c2.075-2.297 4.958-6.705 6.408-9.796 2.361-5.036 2.621-6.71 2.505-16.12-.087-6.94-.867-13.552-2.301-19.5-8.294-34.395-9.68-47.704-6.612-63.5 1.898-9.777 6.789-24.05 10.238-29.877 3.549-5.996 4.183-3.358.95 3.951-7.114 16.087-7.779 38.165-2.105 69.926 2.267 12.692 3.752 31.291 3.203 40.105-.715 11.48-2.862 17.699-8.13 23.559l-4.369 4.858 4.309 4.76c5.195 5.738 7.409 12.121 8.158 23.526.58 8.818-.927 28.424-3.203 41.692-3.194 18.62-3.946 25.595-3.882 36 .077 12.341 2.213 23.98 6.014 32.777 3.452 7.988 2.557 10.124-1.268 3.027z"
        fill="#000"
      />
      <Text
        x={240}
        y={480}
        xmlSpace="preserve"
        fontSize="40px"
        fontStyle="normal"
        fontWeight={400}
        fill="#000"
        fillOpacity={1}
        stroke="none"
        fontFamily="Bitstream Vera Sans"
      >
        <TSpan x={240} y={480}>
          {'IV'}
        </TSpan>
      </Text>
      <Text
        x={420}
        y={480}
        xmlSpace="preserve"
        fontSize="40px"
        fontStyle="normal"
        fontWeight={400}
        fill="#000"
        fillOpacity={1}
        stroke="none"
        fontFamily="Bitstream Vera Sans"
      >
        <TSpan x={420} y={480}>
          {'V'}
        </TSpan>
      </Text>
      <Text
        x={620}
        y={480}
        xmlSpace="preserve"
        fontSize="40px"
        fontStyle="normal"
        fontWeight={400}
        fill="#000"
        fillOpacity={1}
        stroke="none"
        fontFamily="Bitstream Vera Sans"
      >
        <TSpan x={620} y={480}>
          {'I'}
        </TSpan>
      </Text>
      <Text
        x={980}
        y={480}
        xmlSpace="preserve"
        fontSize="40px"
        fontStyle="normal"
        fontWeight={400}
        fill="#000"
        fillOpacity={1}
        stroke="none"
        fontFamily="Bitstream Vera Sans"
      >
        <TSpan x={980} y={480}>
          {'IV'}
        </TSpan>
      </Text>
      <Text
        x={1160}
        y={480}
        xmlSpace="preserve"
        fontSize="40px"
        fontStyle="normal"
        fontWeight={400}
        fill="#000"
        fillOpacity={1}
        stroke="none"
        fontFamily="Bitstream Vera Sans"
      >
        <TSpan x={1160} y={480}>
          {'V'}
        </TSpan>
      </Text>
      <Text
        x={1340}
        y={480}
        xmlSpace="preserve"
        fontSize="40px"
        fontStyle="normal"
        fontWeight={400}
        fill="#000"
        fillOpacity={1}
        stroke="none"
        fontFamily="Bitstream Vera Sans"
      >
        <TSpan x={1340} y={480}>
          {'VI'}
        </TSpan>
      </Text>
      <Text
        x={1700}
        y={480}
        xmlSpace="preserve"
        fontSize="40px"
        fontStyle="normal"
        fontWeight={400}
        fill="#000"
        fillOpacity={1}
        stroke="none"
        fontFamily="Bitstream Vera Sans"
      >
        <TSpan x={1700} y={480}>
          {'I'}
        </TSpan>
      </Text>
      <Text
        x={1820}
        y={480}
        xmlSpace="preserve"
        fontSize="40px"
        fontStyle="normal"
        fontWeight={400}
        fill="#000"
        fillOpacity={1}
        stroke="none"
        fontFamily="Bitstream Vera Sans"
      >
        <TSpan x={1820} y={480}>
          {'IV'}
        </TSpan>
      </Text>
      <Text
        x={2000}
        y={480}
        xmlSpace="preserve"
        fontSize="40px"
        fontStyle="normal"
        fontWeight={400}
        fill="#000"
        fillOpacity={1}
        stroke="none"
        fontFamily="Bitstream Vera Sans"
      >
        <TSpan x={2000} y={480}>
          {'I'}
        </TSpan>
      </Text>
      <Text
        x={2340}
        y={480}
        xmlSpace="preserve"
        fontSize="40px"
        fontStyle="normal"
        fontWeight={400}
        fill="#000"
        fillOpacity={1}
        stroke="none"
        fontFamily="Bitstream Vera Sans"
      >
        <TSpan x={2340} y={480}>
          {'I'}
        </TSpan>
      </Text>
      <Text
        x={2460}
        y={480}
        xmlSpace="preserve"
        fontSize="40px"
        fontStyle="normal"
        fontWeight={400}
        fill="#000"
        fillOpacity={1}
        stroke="none"
        fontFamily="Bitstream Vera Sans"
      >
        <TSpan x={2460} y={480}>
          {'IV'}
        </TSpan>
      </Text>
      <Text
        x={2640}
        y={480}
        xmlSpace="preserve"
        fontSize="40px"
        fontStyle="normal"
        fontWeight={400}
        fill="#000"
        fillOpacity={1}
        stroke="none"
        fontFamily="Bitstream Vera Sans"
      >
        <TSpan x={2640} y={480}>
          {'V'}
        </TSpan>
      </Text>
      <Text
        x={180}
        y={80}
        xmlSpace="preserve"
        fontSize="40px"
        fontStyle="normal"
        fontWeight={400}
        fill="#000"
        fillOpacity={1}
        stroke="none"
        fontFamily="Bitstream Vera Sans"
      >
        <TSpan x={180} y={80}>
          {'A'}
        </TSpan>
      </Text>
      <Text
        x={920}
        y={80}
        xmlSpace="preserve"
        fontSize="40px"
        fontStyle="normal"
        fontWeight={400}
        fill="#000"
        fillOpacity={1}
        stroke="none"
        fontFamily="Bitstream Vera Sans"
      >
        <TSpan x={920} y={80}>
          {'B'}
        </TSpan>
      </Text>
      <Text
        x={1640}
        y={80}
        xmlSpace="preserve"
        fontSize="40px"
        fontStyle="normal"
        fontWeight={400}
        fill="#000"
        fillOpacity={1}
        stroke="none"
        fontFamily="Bitstream Vera Sans"
      >
        <TSpan x={1640} y={80}>
          {'C'}
        </TSpan>
      </Text>
      <Text
        x={2300}
        y={80}
        xmlSpace="preserve"
        fontSize="40px"
        fontStyle="normal"
        fontWeight={400}
        fill="#000"
        fillOpacity={1}
        stroke="none"
        fontFamily="Bitstream Vera Sans"
      >
        <TSpan x={2300} y={80}>
          {'D'}
        </TSpan>
      </Text>
    </Svg>
  );
}

export default Test;

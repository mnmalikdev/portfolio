import { FC } from "react";
import { IconProps } from ".";

export const ReactNative: FC<IconProps> = ({ width = 100 }) => {
  return (
    <svg width={width} viewBox="0 0 438 330" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M299.318 0.0232217C293.756 -0.167229 287.933 0.820261 282.096 2.74739C270.421 6.60167 258.186 14.1127 245.631 24.5124C240.711 28.588 235.746 33.2469 230.764 38.19C225.892 33.3724 221.029 28.8386 216.217 24.8529C203.672 14.4616 191.47 6.94765 179.822 3.1021C168.173 -0.743443 156.583 -0.862602 147.064 4.73377C137.544 10.3301 131.852 20.6033 129.298 32.7984C126.744 44.9935 127.025 59.5164 129.591 75.7751C130.481 81.4225 131.752 87.3471 133.199 93.3829C127.76 95.0614 122.478 96.8264 117.58 98.7745C102.797 104.654 90.5654 111.687 81.6583 120.057C72.7512 128.427 67 138.585 67 149.739C67 160.893 72.7512 171.037 81.6583 179.407C90.5654 187.777 102.797 194.825 117.58 200.704C122.817 202.787 128.488 204.663 134.342 206.436C132.236 214.448 130.53 222.222 129.368 229.591C126.801 245.863 126.529 260.388 129.089 272.611C131.648 284.834 137.344 295.165 146.91 300.789C156.477 306.413 168.119 306.275 179.794 302.421C191.469 298.566 203.689 291.069 216.245 280.67C221.12 276.632 226.051 272.025 230.987 267.134C235.948 272.055 240.899 276.683 245.798 280.741C258.344 291.132 270.559 298.632 282.207 302.477C293.856 306.323 305.446 306.442 314.966 300.846C324.485 295.249 330.163 284.976 332.717 272.781C335.271 260.586 334.99 246.077 332.425 229.818C331.259 222.429 329.552 214.629 327.436 206.592C333.484 204.776 339.333 202.849 344.728 200.704C359.511 194.825 371.742 187.777 380.649 179.407C389.556 171.037 395.308 160.893 395.308 149.739C395.308 138.585 389.556 128.427 380.649 120.057C371.742 111.687 359.511 104.654 344.728 98.7745C339.76 96.7984 334.396 95.0105 328.871 93.3119C330.33 87.2392 331.626 81.2721 332.522 75.5906C335.089 59.3189 335.36 44.78 332.801 32.5572C330.241 20.3344 324.532 10.0173 314.966 4.39325C310.182 1.58123 304.88 0.213673 299.318 0.0232217ZM298.663 14.8075C302.153 14.9047 305.131 15.7505 307.678 17.2479C312.772 20.2428 316.538 26.0715 318.547 35.6645C320.555 45.2574 320.486 58.2185 318.115 73.2495C317.303 78.3959 316.124 83.8501 314.784 89.4385C300.192 85.8624 284.201 83.2087 267.159 81.6491C258.603 69.5801 249.812 58.585 240.949 48.8313C245.637 44.1714 250.295 39.8132 254.841 36.0476C266.439 26.4409 277.419 19.904 286.582 16.879C291.164 15.3665 295.173 14.7103 298.663 14.8075ZM163.282 14.8501C166.793 14.7503 170.81 15.4047 175.405 16.9216C184.594 19.9553 195.594 26.4893 207.202 36.1043C211.657 39.7944 216.21 44.0696 220.801 48.6185C211.872 58.452 203.009 69.5424 194.397 81.72C177.426 83.3081 161.501 85.9761 146.98 89.5662C145.65 84.0088 144.471 78.5826 143.664 73.4624C141.29 58.4183 141.231 45.4554 143.246 35.8347C145.26 26.2141 149.056 20.3414 154.198 17.3189C156.768 15.8076 159.772 14.9499 163.282 14.8501ZM230.987 59.2882C236.798 65.728 242.611 72.7752 248.376 80.3579C242.711 80.1174 236.977 79.9748 231.154 79.9748C225.214 79.9748 219.371 80.122 213.597 80.3721C219.364 72.7835 225.174 65.7329 230.987 59.2882ZM231.154 94.6456C240.855 94.6456 250.311 95.0516 259.509 95.7381C265.838 104.994 272.023 114.814 277.916 125.207C283.094 134.34 287.78 143.458 292.044 152.463C287.735 161.588 282.97 170.83 277.721 180.088C273.1 188.238 268.274 195.979 263.369 203.442C252.979 204.327 242.214 204.819 231.154 204.819C219.828 204.819 208.82 204.297 198.2 203.371C193.377 196.015 188.633 188.392 184.086 180.372C178.848 171.134 174.107 161.91 169.803 152.804C174.125 143.647 178.887 134.371 184.155 125.08C190.017 114.741 196.184 104.978 202.478 95.7665C211.775 95.0645 221.341 94.6456 231.154 94.6456ZM277.874 97.5543C289.634 99.0485 300.676 101.123 310.953 103.613C307.903 113.791 304.147 124.423 299.597 135.395C296.642 129.595 293.581 123.775 290.275 117.943C286.268 110.876 282.094 104.138 277.874 97.5543ZM183.668 97.6678C179.536 104.128 175.471 110.735 171.545 117.659C168.196 123.566 165.072 129.464 162.084 135.338C157.573 124.432 153.839 113.861 150.812 103.74C161.011 101.246 171.989 99.179 183.668 97.6678ZM325.068 107.472C330.125 109.03 335.009 110.656 339.489 112.438C353.116 117.858 363.895 124.275 370.882 130.84C377.868 137.405 380.9 143.666 380.9 149.739C380.9 155.813 377.868 162.073 370.882 168.638C363.895 175.203 353.116 181.621 339.489 187.04C334.51 189.021 329.041 190.816 323.354 192.517C319.297 179.741 314.119 166.411 307.957 152.804C315.042 137.181 320.766 121.949 325.068 107.472ZM137.003 107.543C141.256 121.876 146.906 136.956 153.891 152.421C147.688 166.107 142.485 179.513 138.411 192.361C132.924 190.705 127.64 188.958 122.819 187.04C109.192 181.621 98.4122 175.203 91.4259 168.638C84.4396 162.073 81.4075 155.813 81.4075 149.739C81.4075 143.666 84.4396 137.405 91.4259 130.84C98.4122 124.275 109.192 117.858 122.819 112.438C127.23 110.684 132.032 109.081 137.003 107.543ZM231.154 116.368C211.538 116.368 195.483 132.716 195.483 152.69C195.483 172.665 211.538 189.013 231.154 189.013C250.77 189.013 266.824 172.665 266.824 152.69C266.824 132.716 250.77 116.368 231.154 116.368ZM162.251 169.873C165.253 175.776 168.374 181.699 171.74 187.636C174.374 192.281 177.064 196.803 179.794 201.243C170.213 199.89 161.106 198.178 152.553 196.149C155.273 187.667 158.527 178.863 162.251 169.873ZM299.778 169.873C303.517 178.884 306.772 187.703 309.504 196.206C300.924 198.232 291.789 199.939 282.179 201.286C284.945 196.791 287.677 192.213 290.345 187.509C293.686 181.615 296.795 175.733 299.778 169.873ZM148.443 210.253C161.354 213.367 175.349 215.76 190.189 217.319C200.095 231.908 210.415 245.018 220.801 256.478C216.157 261.09 211.553 265.417 207.048 269.149C195.45 278.755 184.456 285.278 175.293 288.303C166.13 291.328 159.292 290.929 154.198 287.934C149.103 284.939 145.352 279.111 143.343 269.518C141.334 259.925 141.39 246.978 143.761 231.947C144.837 225.128 146.445 217.826 148.443 210.253ZM313.628 210.309C315.643 217.929 317.255 225.258 318.338 232.117C320.711 247.161 320.77 260.124 318.756 269.745C316.741 279.365 312.973 285.252 307.831 288.275C302.69 291.297 295.786 291.692 286.596 288.658C277.407 285.624 266.408 279.09 254.799 269.475C250.262 265.717 245.627 261.354 240.949 256.706C251.405 245.2 261.798 232.024 271.771 217.347C286.648 215.799 300.681 213.42 313.628 210.309ZM208.804 218.808C216.129 219.215 223.551 219.489 231.154 219.489C238.506 219.489 245.686 219.231 252.779 218.851C245.529 228.812 238.138 237.867 230.778 246.022C223.421 237.85 216.045 228.778 208.804 218.808Z"
        fill="#04D8F9"
      />
      <g clipPath="url(#clip0_1_12)">
        <path
          d="M97.6916 200C92.8871 200.293 87.3714 203.105 84.092 206.685C81.1292 209.942 78.7917 214.778 79.7459 219.457C84.9672 219.602 90.2079 216.717 93.3456 213.071C96.275 209.662 98.4958 204.902 97.6916 200ZM97.9765 219.449C90.4384 219.449 87.2867 224.313 82.0654 224.313C76.6942 224.313 71.7841 219.757 65.2836 219.757C56.4412 219.761 43 228.365 43 248.635C43 267.075 58.9081 287.541 67.8879 287.541C73.3425 287.598 74.6649 283.939 82.0654 283.899C89.4743 283.842 91.073 287.589 96.5359 287.541C102.686 287.493 107.49 280.393 110.998 274.769C113.515 270.742 114.55 268.686 116.5 264.134C102.028 260.282 99.1487 235.768 116.5 230.699C113.225 224.83 103.664 219.449 97.9765 219.449Z"
          fill="#04D8F9"
        />
      </g>
      <path
        d="M369.974 75.1673C369.974 77.4641 371.883 79.3433 374.217 79.3433H378.461V93.9592C378.461 97.4252 381.304 100.223 384.826 100.223C388.348 100.223 391.191 97.4252 391.191 93.9592V79.3433H399.678V93.9592C399.678 97.4252 402.521 100.223 406.043 100.223C409.565 100.223 412.408 97.4252 412.408 93.9592V79.3433H416.652C418.985 79.3433 420.895 77.4641 420.895 75.1673V33.4077H369.974V75.1673ZM359.365 33.4077C355.843 33.4077 353 36.2056 353 39.6717V68.9034C353 72.3695 355.843 75.1673 359.365 75.1673C362.887 75.1673 365.73 72.3695 365.73 68.9034V39.6717C365.73 36.2056 362.887 33.4077 359.365 33.4077ZM431.504 33.4077C427.981 33.4077 425.138 36.2056 425.138 39.6717V68.9034C425.138 72.3695 427.981 75.1673 431.504 75.1673C435.026 75.1673 437.869 72.3695 437.869 68.9034V39.6717C437.869 36.2056 435.026 33.4077 431.504 33.4077ZM410.414 9.02008L415.93 3.59133C416.779 2.75614 416.779 1.46159 415.93 0.626395C415.081 -0.208798 413.766 -0.208798 412.917 0.626395L406.637 6.80682C403.285 5.13644 399.466 4.17596 395.434 4.17596C391.361 4.17596 387.542 5.13644 384.147 6.80682L377.824 0.626395C376.975 -0.208798 375.66 -0.208798 374.811 0.626395C373.963 1.46159 373.963 2.75614 374.811 3.59133L380.37 9.06184C374.09 13.6136 369.974 20.9216 369.974 29.2317H420.895C420.895 20.9216 416.779 13.5719 410.414 9.02008V9.02008ZM386.947 20.8798H382.704V16.7039H386.947V20.8798ZM408.165 20.8798H403.921V16.7039H408.165V20.8798Z"
        fill="#04D8F9"
        fillOpacity="0.91"
      />
      <defs>
        <clipPath id="clip0_1_12">
          <rect
            width="196"
            height="191"
            fill="white"
            transform="translate(0 139)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
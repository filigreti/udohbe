import React from 'react'

const Logo = ({ className }: { className?: string }) => {
    return (
        <div>
            <svg className={className} width="100" height="28" viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_0_100)">
                    <path d="M0.591483 7.19062C0.598353 6.85051 0.571944 6.51054 0.512618 6.17541C0.476428 5.9768 0.421421 5.78196 0.348318 5.59344C0.308901 5.48515 0.240841 5.38917 0.151157 5.31539C0.109605 5.27549 0.0570349 5.2485 0 5.2378L0 5.01147H2.9837V5.2378C2.92503 5.24934 2.87057 5.27614 2.82597 5.31539C2.74254 5.39461 2.67558 5.48905 2.62881 5.59344C2.54636 5.77881 2.49104 5.97475 2.46451 6.17541C2.4139 6.51142 2.39192 6.851 2.39879 7.19062V16.0947C2.36266 17.201 2.51823 18.3053 2.85883 19.3602C3.00126 19.7794 3.18852 20.1826 3.41745 20.5629C3.88962 21.3875 4.64434 22.0201 5.54679 22.3476C6.08536 22.5423 6.6555 22.6387 7.22923 22.6321C7.91378 22.6256 8.59526 22.541 9.25999 22.38C9.97893 22.1993 10.6509 21.8709 11.2316 21.4165C11.923 20.8835 12.4694 20.1904 12.822 19.399C13.2633 18.3443 13.4695 17.2087 13.4267 16.0688V9.13697C13.4314 8.60062 13.3963 8.06464 13.3215 7.53333C13.2676 7.11905 13.1863 6.70866 13.0783 6.30473C13.0102 6.02982 12.9064 5.76468 12.7695 5.51585C12.6577 5.33479 12.5526 5.2378 12.4474 5.2378V5.01147H14.6359V5.2378C14.5308 5.2378 14.4256 5.33479 14.3139 5.51585C14.1769 5.76468 14.0731 6.02982 14.005 6.30473C13.897 6.70866 13.8158 7.11905 13.7618 7.53333C13.6871 8.06464 13.6519 8.60062 13.6567 9.13697V16.0947C13.6776 17.015 13.5557 17.9329 13.2952 18.817C13.0937 19.4882 12.7806 20.1218 12.3686 20.6922C12.0241 21.1662 11.5942 21.5738 11.1002 21.895C10.6598 22.166 10.1875 22.3831 9.69374 22.5416C9.26867 22.6888 8.82753 22.7865 8.37934 22.8326C8.05875 22.8715 7.73624 22.8931 7.41325 22.8973C7.07249 22.8901 6.73241 22.8642 6.39458 22.8197C5.90881 22.759 5.43082 22.6485 4.96845 22.4899C4.42563 22.3092 3.90358 22.073 3.41088 21.7851C2.87194 21.4659 2.39559 21.0541 2.00447 20.5694C1.57089 20.0217 1.23124 19.4079 0.998948 18.7524C0.707041 17.8965 0.569151 16.9972 0.591483 16.0947V7.19062Z" fill="currentColor" />
                    <path d="M16.2065 5.01137H18.5922V7.69488C18.8738 6.87101 19.4325 6.16621 20.176 5.6968C20.967 5.19756 21.8689 4.89365 22.8049 4.81091C23.8326 4.71437 24.8697 4.82212 25.8543 5.12776C26.9243 5.4474 27.914 5.98497 28.7591 6.70554C29.6892 7.50706 30.4314 8.49765 30.9345 9.60891C31.5333 10.9595 31.8227 12.4231 31.7823 13.8961C31.8241 15.3395 31.5507 16.775 30.9805 18.1056C30.4785 19.2221 29.7042 20.1994 28.7263 20.9508C27.718 21.7059 26.5642 22.2515 25.3351 22.5544C23.9486 22.906 22.5213 23.0777 21.0896 23.0653C20.3166 23.0632 19.5444 23.02 18.7762 22.9359C17.9876 22.8519 17.2055 22.8002 16.4366 22.7872H16.2065V22.5544C16.2623 22.544 16.3144 22.5195 16.3577 22.4833C16.4414 22.4057 16.5065 22.3107 16.5483 22.2053C16.6249 22.0129 16.6821 21.8137 16.7192 21.6104C16.7774 21.2794 16.8038 20.9439 16.798 20.6081V7.19051C16.8049 6.8504 16.7785 6.51043 16.7192 6.1753C16.6815 5.97632 16.6243 5.78142 16.5483 5.59333C16.5082 5.48703 16.4428 5.3917 16.3577 5.31528C16.3161 5.27538 16.2636 5.24839 16.2065 5.23769V5.01137ZM30.0078 13.8961C30.0541 12.3863 29.7694 10.8844 29.1732 9.49251C28.6992 8.40415 27.9748 7.43901 27.057 6.67321C26.2675 6.01598 25.3267 5.55868 24.3164 5.34115C23.4128 5.13935 22.4733 5.15265 21.5759 5.37995C20.753 5.58861 20.0145 6.03987 19.4597 6.67321C18.8808 7.35455 18.5809 8.22373 18.6185 9.111V22.6902L19.8869 22.7937C20.2943 22.826 20.7018 22.839 21.0961 22.839C22.3787 22.8585 23.6544 22.6504 24.8619 22.2247C25.9207 21.8447 26.8792 21.2354 27.6664 20.4419C28.4536 19.6483 29.0494 18.6908 29.4097 17.64C29.8202 16.4341 30.0158 15.1675 29.9881 13.8961H30.0078Z" fill="currentColor" />
                    <path d="M33.6423 16.198C33.3159 15.0365 33.242 13.8202 33.4255 12.6286C33.5928 11.4787 33.9809 10.3705 34.569 9.36315C35.1569 8.36552 35.9332 7.48761 36.8561 6.77663C37.8229 6.04421 38.9275 5.50718 40.1061 5.19645C41.2848 4.88571 42.5143 4.80742 43.7238 4.96607C44.8819 5.12837 45.9975 5.50814 47.0098 6.08474C48.0486 6.67447 48.959 7.46011 49.6886 8.39662C50.4183 9.33313 50.9529 10.4021 51.2619 11.5423C51.5827 12.7002 51.6609 13.9102 51.492 15.0988C51.168 17.4184 49.9343 19.5211 48.0548 20.9572C47.0865 21.7108 45.9664 22.2531 44.7688 22.5479C43.5929 22.8687 42.3625 22.948 41.1542 22.7807C39.9953 22.6141 38.8797 22.2299 37.8681 21.6491C36.8575 21.0608 35.9662 20.2934 35.2393 19.3859C34.4872 18.4443 33.9433 17.3585 33.6423 16.198ZM49.4612 12.0208C49.1878 11.0094 48.7578 10.0454 48.1862 9.1627C47.6178 8.26295 46.9054 7.45941 46.0766 6.7831C45.2737 6.13071 44.3398 5.65254 43.3361 5.37991C42.3019 5.09774 41.2091 5.09774 40.1749 5.37991C39.1234 5.62912 38.1645 6.16472 37.4081 6.92536C36.6796 7.66514 36.1156 8.54599 35.752 9.51188C35.368 10.5021 35.1591 11.5497 35.1342 12.6092C35.1031 13.6573 35.2226 14.7044 35.4891 15.7195C35.7842 16.7258 36.227 17.6843 36.8035 18.5647C37.3699 19.4622 38.0826 20.2618 38.9131 20.9314C39.7204 21.5801 40.6525 22.0618 41.6536 22.3475C42.6936 22.6085 43.7845 22.6009 44.8207 22.3257C45.8568 22.0504 46.8033 21.5167 47.5685 20.7762C48.2967 20.035 48.8627 19.1547 49.2312 18.1897C49.6184 17.2033 49.8404 16.1616 49.8884 15.1052C49.904 14.0618 49.76 13.022 49.4612 12.0208Z" fill="currentColor" />
                    <path d="M66.0752 5.2378C66.0182 5.2485 65.9656 5.27549 65.9241 5.31539C65.8339 5.39159 65.7621 5.48656 65.7138 5.59344C65.6313 5.77881 65.576 5.97475 65.5495 6.17541C65.4989 6.51142 65.4769 6.851 65.4838 7.19062V20.6017C65.4778 20.937 65.4997 21.2722 65.5495 21.604C65.5754 21.8089 65.6307 22.0092 65.7138 22.1989C65.764 22.3047 65.8355 22.3993 65.9241 22.4769C65.9674 22.5131 66.0195 22.5376 66.0752 22.5481V22.7809H63.039V22.5481C63.0964 22.5366 63.1504 22.5123 63.1967 22.4769C63.2804 22.3993 63.3455 22.3043 63.3873 22.1989C63.4642 22.0072 63.5193 21.8077 63.5516 21.604C63.6098 21.2731 63.6362 20.9375 63.6305 20.6017V12.3507H55.2051V20.6017C55.1812 20.9354 55.1812 21.2703 55.2051 21.604C55.2328 21.8093 55.2903 22.0097 55.376 22.1989C55.4241 22.3042 55.4934 22.3988 55.5797 22.4769C55.6254 22.5134 55.6796 22.5378 55.7374 22.5481V22.7809H52.78V22.5481C52.8358 22.5376 52.8879 22.5131 52.9312 22.4769C53.0169 22.401 53.0824 22.3056 53.1218 22.1989C53.2014 22.0076 53.2587 21.808 53.2926 21.604C53.3509 21.2731 53.3773 20.9375 53.3715 20.6017V7.19062C53.3784 6.85051 53.352 6.51054 53.2926 6.17541C53.2581 5.97572 53.2008 5.7805 53.1218 5.59344C53.0842 5.48588 53.0185 5.38997 52.9312 5.31539C52.8896 5.27549 52.8371 5.2485 52.78 5.2378V5.01147H55.7637V5.2378C55.7046 5.24803 55.6498 5.27499 55.606 5.31539C55.5182 5.39226 55.4487 5.48719 55.4023 5.59344C55.3172 5.77836 55.2597 5.97436 55.2314 6.17541C55.1978 6.51275 55.189 6.85203 55.2051 7.19062V12.1244H63.6305V7.19062C63.6373 6.85051 63.6109 6.51054 63.5516 6.17541C63.5187 5.97607 63.4636 5.7809 63.3873 5.59344C63.3472 5.48714 63.2818 5.3918 63.1967 5.31539C63.1521 5.27614 63.0976 5.24934 63.039 5.2378V5.01147H66.0752V5.2378Z" fill="currentColor" />
                    <path d="M67.6196 22.7808V22.548C67.6754 22.5376 67.7275 22.5131 67.7708 22.4769C67.8567 22.3998 67.9241 22.3048 67.9679 22.1989C68.0418 22.0062 68.0969 21.807 68.1322 21.604C68.1905 21.2731 68.2169 20.9375 68.2111 20.6017V7.19059C68.218 6.85048 68.1916 6.51051 68.1322 6.17538C68.0961 5.97677 68.041 5.78193 67.9679 5.59341C67.926 5.48644 67.8583 5.39105 67.7708 5.31536C67.7292 5.27545 67.6767 5.24847 67.6196 5.23776V5.01144H67.8496C68.6186 5.01144 69.4204 4.94678 70.255 4.86272C71.0365 4.78022 71.8218 4.73706 72.6078 4.73339C73.7119 4.71312 74.8147 4.81946 75.8938 5.05024C76.6615 5.21258 77.3937 5.50818 78.056 5.92319C78.5663 6.25293 78.9753 6.71352 79.239 7.25525C79.4791 7.78393 79.6002 8.35745 79.5939 8.93649C79.5988 9.43274 79.5119 9.92573 79.3376 10.3914C79.1587 10.851 78.8728 11.2629 78.5029 11.5941C78.0561 11.9847 77.539 12.2895 76.9782 12.493C76.2355 12.7637 75.46 12.9376 74.6714 13.0103C75.534 13.1025 76.3857 13.2757 77.2148 13.5276C77.9422 13.7447 78.6299 14.0743 79.2521 14.504C79.8035 14.8853 80.267 15.3766 80.6125 15.946C80.9573 16.535 81.1302 17.2063 81.112 17.8858C81.15 18.7518 80.9084 19.6074 80.4219 20.3301C79.943 20.9773 79.3024 21.4918 78.5621 21.8238C77.7031 22.208 76.7904 22.4631 75.8544 22.5804C74.7656 22.7294 73.6676 22.8028 72.5684 22.8002L67.6196 22.7808ZM72.5881 12.8809C73.1817 12.8786 73.7737 12.8201 74.356 12.7063C74.9513 12.5907 75.521 12.3718 76.0384 12.0597C76.5499 11.7517 76.9818 11.3311 77.3002 10.8311C77.6571 10.2467 77.833 9.57252 77.8063 8.89122C77.8307 8.21017 77.655 7.53663 77.3002 6.95133C76.9792 6.45511 76.5477 6.0372 76.0384 5.7292C75.5197 5.41978 74.9505 5.20101 74.356 5.08257C73.7753 4.95633 73.1827 4.8913 72.5881 4.88858C72.1938 4.88858 71.7797 4.88858 71.3394 4.94031L70.025 5.04377V12.8809H72.5881ZM79.3178 17.8664C79.3392 17.1944 79.1902 16.5277 78.8841 15.9266C78.6074 15.4292 78.2345 14.9899 77.7866 14.6333C77.3411 14.2876 76.8447 14.0107 76.3144 13.8121C75.8127 13.6209 75.2962 13.4696 74.77 13.3594C74.337 13.2648 73.8978 13.2 73.4556 13.1654C73.0744 13.1654 72.7984 13.1654 72.6801 13.1654H69.9987V22.548H72.5749C73.7121 22.5534 74.8431 22.3832 75.9267 22.0437C76.3531 21.9019 76.7647 21.72 77.1556 21.5005C77.5587 21.2838 77.9282 21.0116 78.2532 20.6922C78.5812 20.3452 78.8418 19.9419 79.0221 19.5024C79.2316 18.9822 79.3321 18.4258 79.3178 17.8664Z" fill="currentColor" />
                    <path d="M83.0245 16.1982C82.7003 15.0364 82.622 13.8215 82.7945 12.6288C82.9557 11.4773 83.3442 10.368 83.938 9.36328C84.5347 8.36797 85.3148 7.49082 86.2382 6.77676C87.1944 6.02825 88.2974 5.48228 89.4782 5.17312C90.3325 4.93499 91.2199 4.8324 92.107 4.86921C92.9661 4.89916 93.8171 5.0427 94.6373 5.29598C95.4465 5.54767 96.2163 5.90893 96.9243 6.36939C97.6325 6.83177 98.2699 7.39137 98.8171 8.03123L98.1993 10.2556H97.9693C97.5649 9.46772 97.0734 8.72608 96.5037 8.04416C95.9392 7.36456 95.2747 6.77174 94.5321 6.28533C93.817 5.81479 93.0192 5.4793 92.1793 5.29598C91.2988 5.10934 90.3854 5.13597 89.5177 5.37358C88.7324 5.58828 88.0008 5.96033 87.3686 6.46638C86.7616 6.94583 86.2416 7.52304 85.8307 8.17349C85.4117 8.83896 85.0909 9.5596 84.8778 10.3138C84.6572 11.0803 84.5358 11.8712 84.5163 12.6676H85.029C86.0586 12.6676 87.0838 12.6223 88.1047 12.5318C89.1233 12.4348 90.0434 12.3249 90.8715 12.1891C91.831 12.0533 92.7577 11.8916 93.6449 11.7041H93.8815V13.8574H93.6449C92.7577 13.6892 91.831 13.5276 90.8715 13.3789C90.0434 13.256 89.1233 13.1461 88.1047 13.0491C87.0828 12.9455 86.0562 12.8937 85.029 12.8939H84.4901C84.4896 13.3756 84.5159 13.857 84.5689 14.3359C84.6206 14.8088 84.7152 15.2762 84.8515 15.7326C85.17 17.0332 85.7859 18.2451 86.6523 19.2761C87.4118 20.1742 88.3544 20.9056 89.4191 21.4229C90.4128 21.9068 91.4987 22.18 92.6065 22.2248C93.6756 22.2711 94.7418 22.0834 95.7282 21.6751C96.7764 21.2497 97.6974 20.5688 98.4044 19.6967C99.1115 18.8245 99.5814 17.7897 99.77 16.6896L100 16.7413C99.7698 18.0115 99.1928 19.1962 98.3307 20.1685C97.5216 21.0659 96.5145 21.7693 95.3865 22.2248C94.2425 22.6767 93.0175 22.8966 91.785 22.8714C90.5223 22.8613 89.2748 22.5995 88.1178 22.1019C86.9288 21.589 85.8629 20.8355 84.9895 19.8904C84.0363 18.8371 83.3614 17.569 83.0245 16.1982ZM92.3108 0.510921C92.5473 0.25637 92.8566 0.078272 93.198 8.30543e-05C93.3105 -0.00626356 93.4228 0.0159792 93.5241 0.0646734C93.6254 0.113368 93.7123 0.186876 93.7763 0.278134C93.8555 0.364394 93.9075 0.471373 93.9262 0.586131C93.9449 0.70089 93.9293 0.81851 93.8815 0.924764C93.7124 1.23552 93.4511 1.48817 93.1323 1.64899L92.7051 1.90118L92.0939 2.25682L91.371 2.67066L90.6152 3.11684L88.7224 4.17731L88.6173 4.02859C89.1693 3.48542 89.6885 2.98105 90.188 2.50901C90.6875 2.03697 91.0095 1.70719 91.4235 1.33214C91.8376 0.957095 92.1202 0.679044 92.3108 0.510921Z" fill="currentColor" />
                </g>
                <defs>
                    <clipPath id="clip0_0_100">
                        <rect width="100" height="28" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}

export default Logo

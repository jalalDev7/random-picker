"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LuLoader2 } from "react-icons/lu";
import { MdError, MdOpenInNew } from "react-icons/md";

interface resultType {
  user: string;
  comment: string;
}

export default function Home() {
  const [data, setData] = useState<resultType[]>([]);
  const [step, setStep] = useState(1);
  const [platform, setPlatform] = useState<string>();
  const [link, setLink] = useState("");
  const [error, setError] = useState(0);
  const [videoId, setVideoId] = useState<string>();
  const [winnersCount, setWinnersCount] = useState(1);
  const [winners, setWinners] = useState<any[]>([]);

  const handleStepOne = (platform: string) => {
    setPlatform(platform);
    setStep(2);
  };
  const handleStepTwo = () => {
    if (!link) {
      setError(1);
      return null;
    }
    if (platform && platform === "youtube") {
      const getId = link.split("=")[1];
      if (getId) {
        setVideoId(getId);
        setStep(3);
      } else {
        setError(1);
      }
    }
  };
  const handleStepThree = () => {
    let start = 1;
    while (start <= winnersCount) {
      const getRandomComment = data[Math.floor(Math.random() * data.length)];
      setWinners((old) => [...old, getRandomComment]);
      start++;
    }
  };
  const handleBack = () => {
    setWinners([]);
    setWinnersCount(1);
    setData([]);
    setLink("");
    setVideoId("");
    setStep((old) => old - 1);
  };

  const handleLink = (url: string) => {
    const linkReg =
      /(?:https?:\/\/)?(?:(?:(?:www\.?)?youtube\.com(?:\/(?:(?:watch\?.*?(v=[^&\s]+).*)|(?:v(\/.*))|(channel\/.+)|(?:user\/(.+))|(?:results\?(search_query=.+))))?)|(?:youtu\.be(\/.*)?))/;
    if (!linkReg.test(url)) {
      setError(1);
    } else {
      setError(0);
      setLink(url);
    }
  };

  useEffect(() => {
    if (step === 3 && videoId) {
      const fetchData = fetch(`/api/comments/?id=${videoId}`)
        .then(async (res) => {
          const result = await res.json();
          try {
            setData(result);
          } catch {
            setError(1);
          }
        })
        .catch((err) => {
          setError(1);
        });
    }
  }, [step]);

  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-center bg-slate-800 gap-8 px-4">
      <h1 className="text-center text-3xl font-semibold">
        Free random picker by Jalal Hi-Tech
      </h1>
      <ul className="steps">
        <li className="step step-primary">Choose platform</li>
        <li className={`step ${step > 1 ? "step-primary" : null}`}>
          Get comments from link
        </li>
        <li className={`step ${step > 2 ? "step-primary" : null}`}>
          Pick winners
        </li>
      </ul>
      <div className="mockup-window border bg-base-300 lg:w-[50%] w-full relative">
        {step === 1 ? (
          <div className="flex flex-row flex-wrap justify-center px-4 py-16 bg-base-200 gap-4">
            <svg
              viewBox="0 0 48 48"
              className="size-28 cursor-pointer"
              fill="none"
              onClick={() => handleStepOne("youtube")}
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                {" "}
                <circle cx="24" cy="24" r="20" fill="#FF0000"></circle>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.3005 16.3781C35.6996 16.7772 35.9872 17.2739 36.1346 17.8187C36.9835 21.2357 36.7873 26.6324 36.1511 30.1813C36.0037 30.7261 35.7161 31.2228 35.317 31.6219C34.9179 32.021 34.4212 32.3086 33.8764 32.456C31.8819 33 23.8544 33 23.8544 33C23.8544 33 15.8269 33 13.8324 32.456C13.2876 32.3086 12.7909 32.021 12.3918 31.6219C11.9927 31.2228 11.7051 30.7261 11.5577 30.1813C10.7038 26.7791 10.9379 21.3791 11.5412 17.8352C11.6886 17.2903 11.9762 16.7936 12.3753 16.3945C12.7744 15.9954 13.2711 15.7079 13.8159 15.5604C15.8104 15.0165 23.8379 15 23.8379 15C23.8379 15 31.8654 15 33.8599 15.544C34.4047 15.6914 34.9014 15.979 35.3005 16.3781ZM27.9423 24L21.283 27.8571V20.1428L27.9423 24Z"
                  fill="white"
                ></path>{" "}
              </g>
            </svg>
            <svg
              viewBox="0 0 3364.7 3364.7"
              fill="#000000"
              className="size-28 cursor-pointer opacity-40"
              onClick={() => handleStepOne("instagram")}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <defs>
                  <radialGradient
                    id="0"
                    cx="217.76"
                    cy="3290.99"
                    r="4271.92"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".09" stopColor="#fa8f21"></stop>
                    <stop offset=".78" stopColor="#d82d7e"></stop>
                  </radialGradient>
                  <radialGradient
                    id="1"
                    cx="2330.61"
                    cy="3182.95"
                    r="3759.33"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset=".64"
                      stopColor="#8c3aaa"
                      stopOpacity="0"
                    ></stop>
                    <stop offset="1" stopColor="#8c3aaa"></stop>
                  </radialGradient>
                </defs>
                <path
                  d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9"
                  fill="url(#0)"
                ></path>
                <path
                  d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9"
                  fill="url(#1)"
                ></path>
                <path
                  d="M1269.25,1689.52c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7-416.6-186.59-416.6-416.7m-225.26,0c0,354.5,287.36,641.86,641.86,641.86s641.86-287.36,641.86-641.86-287.36-641.86-641.86-641.86S1044,1335,1044,1689.52m1159.13-667.31a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M1180.85,2707c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27S2059.13,666,2191,672c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M1170.5,447.09c-133.07,6.06-224,27.16-303.41,58.06-82.19,31.91-151.86,74.72-221.43,144.18S533.39,788.47,501.48,870.76c-30.9,79.46-52,170.34-58.06,303.41-6.16,133.28-7.57,175.89-7.57,515.35s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43s139.14,112.18,221.43,144.18c79.56,30.9,170.34,52,303.41,58.06,133.35,6.06,175.89,7.57,515.35,7.57s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2586.8,537.06,2504.71,505.15c-79.56-30.9-170.44-52.1-303.41-58.06C2068,441,2025.41,439.52,1686,439.52s-382.1,1.41-515.45,7.57"
                  fill="#ffffff"
                ></path>
              </g>
            </svg>
            <svg
              viewBox="0 0 32 32"
              className="size-28 cursor-pointer  opacity-40"
              fill="none"
              onClick={() => handleStepOne("facebook")}
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                {" "}
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  fill="url(#paint0_linear_87_7208)"
                ></circle>{" "}
                <path
                  d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"
                  fill="white"
                ></path>{" "}
                <defs>
                  {" "}
                  <linearGradient
                    id="paint0_linear_87_7208"
                    x1="16"
                    y1="2"
                    x2="16"
                    y2="29.917"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop stopColor="#18ACFE"></stop>{" "}
                    <stop offset="1" stopColor="#0163E0"></stop>{" "}
                  </linearGradient>{" "}
                </defs>{" "}
              </g>
            </svg>
            <svg
              viewBox="0 0 32 32"
              className="size-28 cursor-pointer  opacity-40"
              fill="none"
              onClick={() => handleStepOne("tiktok")}
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                {" "}
                <path
                  d="M8.45095 19.7926C8.60723 18.4987 9.1379 17.7743 10.1379 17.0317C11.5688 16.0259 13.3561 16.5948 13.3561 16.5948V13.2197C13.7907 13.2085 14.2254 13.2343 14.6551 13.2966V17.6401C14.6551 17.6401 12.8683 17.0712 11.4375 18.0775C10.438 18.8196 9.90623 19.5446 9.7505 20.8385C9.74562 21.5411 9.87747 22.4595 10.4847 23.2536C10.3345 23.1766 10.1815 23.0889 10.0256 22.9905C8.68807 22.0923 8.44444 20.7449 8.45095 19.7926ZM22.0352 6.97898C21.0509 5.90039 20.6786 4.81139 20.5441 4.04639H21.7823C21.7823 4.04639 21.5354 6.05224 23.3347 8.02482L23.3597 8.05134C22.8747 7.7463 22.43 7.38624 22.0352 6.97898ZM28 10.0369V14.293C28 14.293 26.42 14.2312 25.2507 13.9337C23.6179 13.5176 22.5685 12.8795 22.5685 12.8795C22.5685 12.8795 21.8436 12.4245 21.785 12.3928V21.1817C21.785 21.6711 21.651 22.8932 21.2424 23.9125C20.709 25.246 19.8859 26.1212 19.7345 26.3001C19.7345 26.3001 18.7334 27.4832 16.9672 28.28C15.3752 28.9987 13.9774 28.9805 13.5596 28.9987C13.5596 28.9987 11.1434 29.0944 8.96915 27.6814C8.49898 27.3699 8.06011 27.0172 7.6582 26.6277L7.66906 26.6355C9.84383 28.0485 12.2595 27.9528 12.2595 27.9528C12.6779 27.9346 14.0756 27.9528 15.6671 27.2341C17.4317 26.4374 18.4344 25.2543 18.4344 25.2543C18.5842 25.0754 19.4111 24.2001 19.9423 22.8662C20.3498 21.8474 20.4849 20.6247 20.4849 20.1354V11.3475C20.5435 11.3797 21.2679 11.8347 21.2679 11.8347C21.2679 11.8347 22.3179 12.4734 23.9506 12.8889C25.1204 13.1864 26.7 13.2483 26.7 13.2483V9.91314C27.2404 10.0343 27.7011 10.0671 28 10.0369Z"
                  fill="#EE1D52"
                ></path>{" "}
                <path
                  d="M26.7009 9.91314V13.2472C26.7009 13.2472 25.1213 13.1853 23.9515 12.8879C22.3188 12.4718 21.2688 11.8337 21.2688 11.8337C21.2688 11.8337 20.5444 11.3787 20.4858 11.3464V20.1364C20.4858 20.6258 20.3518 21.8484 19.9432 22.8672C19.4098 24.2012 18.5867 25.0764 18.4353 25.2553C18.4353 25.2553 17.4337 26.4384 15.668 27.2352C14.0765 27.9539 12.6788 27.9357 12.2604 27.9539C12.2604 27.9539 9.84473 28.0496 7.66995 26.6366L7.6591 26.6288C7.42949 26.4064 7.21336 26.1717 7.01177 25.9257C6.31777 25.0795 5.89237 24.0789 5.78547 23.7934C5.78529 23.7922 5.78529 23.791 5.78547 23.7898C5.61347 23.2937 5.25209 22.1022 5.30147 20.9482C5.38883 18.9122 6.10507 17.6625 6.29444 17.3494C6.79597 16.4957 7.44828 15.7318 8.22233 15.0919C8.90538 14.5396 9.6796 14.1002 10.5132 13.7917C11.4144 13.4295 12.3794 13.2353 13.3565 13.2197V16.5948C13.3565 16.5948 11.5691 16.028 10.1388 17.0317C9.13879 17.7743 8.60812 18.4987 8.45185 19.7926C8.44534 20.7449 8.68897 22.0923 10.0254 22.991C10.1813 23.0898 10.3343 23.1775 10.4845 23.2541C10.7179 23.5576 11.0021 23.8221 11.3255 24.0368C12.631 24.8632 13.7249 24.9209 15.1238 24.3842C16.0565 24.0254 16.7586 23.2167 17.0842 22.3206C17.2888 21.7611 17.2861 21.1978 17.2861 20.6154V4.04639H20.5417C20.6763 4.81139 21.0485 5.90039 22.0328 6.97898C22.4276 7.38624 22.8724 7.7463 23.3573 8.05134C23.5006 8.19955 24.2331 8.93231 25.1734 9.38216C25.6596 9.61469 26.1722 9.79285 26.7009 9.91314Z"
                  fill="#000000"
                ></path>{" "}
                <path
                  d="M4.48926 22.7568V22.7594L4.57004 22.9784C4.56076 22.9529 4.53074 22.8754 4.48926 22.7568Z"
                  fill="#69C9D0"
                ></path>{" "}
                <path
                  d="M10.5128 13.7916C9.67919 14.1002 8.90498 14.5396 8.22192 15.0918C7.44763 15.7332 6.79548 16.4987 6.29458 17.354C6.10521 17.6661 5.38897 18.9168 5.30161 20.9528C5.25223 22.1068 5.61361 23.2983 5.78561 23.7944C5.78543 23.7956 5.78543 23.7968 5.78561 23.798C5.89413 24.081 6.31791 25.0815 7.01191 25.9303C7.2135 26.1763 7.42963 26.4111 7.65924 26.6334C6.92357 26.1457 6.26746 25.5562 5.71236 24.8839C5.02433 24.0451 4.60001 23.0549 4.48932 22.7626C4.48919 22.7605 4.48919 22.7584 4.48932 22.7564V22.7527C4.31677 22.2571 3.95431 21.0651 4.00477 19.9096C4.09213 17.8736 4.80838 16.6239 4.99775 16.3108C5.4985 15.4553 6.15067 14.6898 6.92509 14.0486C7.608 13.4961 8.38225 13.0567 9.21598 12.7484C9.73602 12.5416 10.2778 12.3891 10.8319 12.2934C11.6669 12.1537 12.5198 12.1415 13.3588 12.2575V13.2196C12.3808 13.2349 11.4148 13.4291 10.5128 13.7916Z"
                  fill="#69C9D0"
                ></path>{" "}
                <path
                  d="M20.5438 4.04635H17.2881V20.6159C17.2881 21.1983 17.2881 21.76 17.0863 22.3211C16.7575 23.2167 16.058 24.0253 15.1258 24.3842C13.7265 24.923 12.6326 24.8632 11.3276 24.0368C11.0036 23.823 10.7187 23.5594 10.4844 23.2567C11.5962 23.8251 12.5913 23.8152 13.8241 23.341C14.7558 22.9821 15.4563 22.1734 15.784 21.2774C15.9891 20.7178 15.9864 20.1546 15.9864 19.5726V3H20.4819C20.4819 3 20.4315 3.41188 20.5438 4.04635ZM26.7002 8.99104V9.9131C26.1725 9.79263 25.6609 9.61447 25.1755 9.38213C24.2352 8.93228 23.5026 8.19952 23.3594 8.0513C23.5256 8.1559 23.6981 8.25106 23.8759 8.33629C25.0192 8.88339 26.1451 9.04669 26.7002 8.99104Z"
                  fill="#69C9D0"
                ></path>{" "}
              </g>
            </svg>
          </div>
        ) : step === 2 && platform ? (
          <div className="flex flex-col items-center justify-center p-16 bg-base-200 gap-4">
            {platform === "youtube" ? (
              <div className=" flex flex-col w-full gap-2 items-center justify-center">
                {error === 1 ? (
                  <div className="flex flex-row w-fit gap-1 items-center text-sm text-red-600 font-medium bg-red-200 px-2 py-1 border border-red-500 rounded-full">
                    <MdError className="inline-flex size-4" />
                    Please enter a valid youtube video link
                  </div>
                ) : null}

                <input
                  type="text"
                  className={`w-full border ${
                    error === 1 ? "border-red-600" : "border-white"
                  }  text-lg rounded-lg p-2 focus:outline-0 focus:ring-0`}
                  placeholder="Paste the link here"
                  onChange={(event) => handleLink(event.currentTarget.value)}
                />

                <button
                  className="bg-[#7480FF] text-white font-semibold px-4 py-2 w-fit rounded-lg"
                  onClick={() => handleStepTwo()}
                >
                  Fetch comments
                </button>
              </div>
            ) : (
              <div>Soon...</div>
            )}
          </div>
        ) : step === 3 ? (
          <div className="flex flex-col items-center justify-center p-16 bg-base-200 gap-4">
            {data && data.length > 0 ? (
              <div className="flex flex-col w-full gap-4">
                <h1 className="text-sm">
                  <span className=" text-lg font-semibold ">
                    Total comments:{" "}
                  </span>
                  {data.length} comments
                </h1>
                <input
                  type="number"
                  className="w-full border border-white text-lg rounded-lg p-2"
                  placeholder="Numbers of winners, default: 1"
                  onChange={(event) =>
                    setWinnersCount(event.currentTarget.valueAsNumber)
                  }
                />
                <div className="flex flex-row justify-between gap-2">
                  <button
                    className="border border-[#7480FF] text-white font-semibold px-4 py-2 w-fit rounded-lg"
                    onClick={() => setWinners([])}
                  >
                    Reset
                  </button>
                  <button
                    className="bg-[#7480FF] text-white font-semibold px-4 py-2 w-fit rounded-lg"
                    onClick={() => handleStepThree()}
                  >
                    Pick winners
                  </button>
                </div>
              </div>
            ) : error === 1 ? (
              <div className="flex flex-row w-fit gap-1 items-center text-sm text-red-600 font-medium bg-red-200 px-2 py-1 border border-red-500 rounded-full">
                <MdError className="inline-flex size-4" />
                Error: Please go back and enter a valid youtube video link
              </div>
            ) : (
              <div>
                <LuLoader2 className="size-16 animate-spin" />
              </div>
            )}

            {error === 0 && winners.length >= 1 ? (
              <div className="flex flex-col items-start justify-start w-full gap-2">
                {winners.map((comment, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-full  gap-1 bg-zinc-600 border border-white p-2 rounded-lg"
                  >
                    <div className="flex flex-row justify-between w-full gap-2">
                      <div className="flex flex-row gap-2 text-lg">
                        <h2 className="font-semibold">Username: </h2>
                        <Link
                          href={`https://www.youtube.com/${comment.user}`}
                          target="_blank"
                        >
                          <h2>{comment.user}</h2>
                        </Link>
                      </div>
                      <Link
                        href={`https://www.youtube.com/${comment.user}`}
                        target="_blank"
                      >
                        <MdOpenInNew className="size-8 cursor-pointer text-white" />
                      </Link>
                    </div>

                    <h2>
                      <span className="font-semibold">Comment: </span>
                      {comment.comment}
                    </h2>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}

        {step > 1 ? (
          <div
            className="absolute left-4 bottom-4 flex w-fit text-nowrap text-sm font-semibold text-blue-500 cursor-pointer"
            onClick={() => handleBack()}
          >
            Back
          </div>
        ) : null}
      </div>
    </main>
  );
}

"use client";
import "./openingAnimation.css";
import { useState } from "react";
import Image from "next/image";

const Sky: React.FC = () => {
  return (
    <div className="sky">
      <Cloud fill="white" height="100px" width="100px" className="cloud2" />
      <Cloud fill="white" height="150px" width="150px" className="cloud3" />
      <Cloud fill="white" height="150px" width="150px" className="cloud1" />
      <Sun fill="#FFCE00" />
    </div>
  );
};

const Cloud: React.FC<{
  fill: string;
  height: string;
  width: string;
  className: string;
}> = ({ fill, height, width }) => {
  return (
    <svg
      className="cloud"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      height={height}
      width={width}
      viewBox="0 0 512.001 512.001"
    >
      {
        <g>
          <g>
            <path d="M344.381,143.771C254.765,56.017,102.37,103.776,79.825,227.7c-31.849,4.598-59.138,25.445-72.018,55.076    c-0.016,0.035-0.032,0.07-0.047,0.107c-26.687,61.602,18.784,130.232,85.51,130.232h282.267    c75.246,0,136.463-61.216,136.463-136.462C512,189.241,430.314,123.682,344.381,143.771z M375.537,381.12H93.271    c-69.246,0-84.534-98.263-18.714-119.456c14.753-4.65,43.01-7.348,74.38,21.892c6.464,6.024,16.586,5.667,22.61-0.794    c6.024-6.464,5.668-16.586-0.794-22.61c-17.93-16.712-38.071-27.33-58.484-31.453c22.034-99.077,147.374-131.851,215.247-56.305    c4.189,4.661,10.714,6.451,16.693,4.57c67.272-21.117,135.795,29.374,135.795,99.69    C480.005,334.256,433.141,381.12,375.537,381.12z" />
          </g>
        </g>
      }
    </svg>
  );
};

const Sun: React.FC<{ fill: string }> = ({ fill }) => {
  return (
    <svg
      className="sunSVG"
      id="sun"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      height="140px"
      width="140px"
      viewBox="0 0 496 496"
    >
      {
        <g>
          <circle className="sunCircleFill" cx="248" cy="248" r="142.4" />
          <path
            className="sunCirclePathOne"
            d="M248,105.6c78.4,0,142.4,64,142.4,142.4s-64,142.4-142.4,142.4"
          />
          <path
            className="sunCirclePathOne"
            d="M390.4,248c0,78.4-64,131.2-142.4,131.2S105.6,326.4,105.6,248s64-131.2,142.4-131.2  S390.4,169.6,390.4,248z"
          />
          <path
            className="sunCirclePathTwo"
            d="M248,116.8c78.4,0,142.4,52.8,142.4,131.2s-64,131.2-142.4,131.2S105.6,326.4,105.6,248"
          />
          <path
            className="sunCircleFillPathThree"
            d="M248,116.8c78.4,0,142.4,52.8,142.4,131.2s-64,131.2-142.4,131.2"
          />
          <path
            className="sunCircleFill"
            d="M390.4,248c0,78.4-64,131.2-142.4,131.2"
          />
          <circle className="sunCirclePathOne" cx="248" cy="59.2" r="10.4" />
          <polygon
            className="sunCircleFill"
            points="260.8,24.8 248,28.8 235.2,24.8 248,0 "
          />
          <circle className="sunCirclePathOne" cx="248" cy="436.8" r="10.4" />
          <polygon
            className="sunCircleFill"
            points="235.2,471.2 248,467.2 260.8,471.2 248,496 "
          />
          <path
            className="sunCirclePathOne"
            d="M388.8,122.4c-4,4-11.2,4-15.2,0s-4-11.2,0-15.2s11.2-4,15.2,0S392.8,118.4,388.8,122.4z"
          />
          <polygon
            className="sunCircleFill"
            points="415.2,99.2 403.2,92.8 396.8,80.8 423.2,72.8 "
          />
          <circle className="sunCirclePathOne" cx="114.4" cy="381.6" r="10.4" />
          <polygon
            className="sunCircleFill"
            points="80.8,396.8 92.8,403.2 99.2,415.2 72.8,423.2 "
          />
          <path
            className="sunCirclePathOne"
            d="M436.8,258.4c-5.6,0-10.4-4.8-10.4-10.4s4.8-10.4,10.4-10.4s10.4,4.8,10.4,10.4  C447.2,253.6,442.4,258.4,436.8,258.4z"
          />
          <polygon
            className="sunCircleFill"
            points="471.2,260.8 467.2,248 471.2,235.2 496,248 "
          />
          <circle className="sunCirclePathOne" cx="59.2" cy="248" r="10.4" />
          <polygon
            className="sunCircleFill"
            points="24.8,235.2 28.8,248 24.8,260.8 0,248 "
          />
          <path
            className="sunCirclePathOne"
            d="M373.6,388.8c-4-4-4-11.2,0-15.2s11.2-4,15.2,0s4,11.2,0,15.2C384.8,392.8,377.6,392.8,373.6,388.8z"
          />
          <polygon
            className="sunCircleFill"
            points="396.8,415.2 403.2,403.2 415.2,396.8 423.2,423.2 "
          />
          <path
            className="sunCirclePathOne"
            d="M122.4,107.2c4,4,4,11.2,0,15.2s-11.2,4-15.2,0s-4-11.2,0-15.2S118.4,103.2,122.4,107.2z"
          />
          <g>
            <polygon
              className="sunCircleFill"
              points="99.2,80.8 92.8,92.8 80.8,99.2 72.8,72.8  "
            />
            <path
              className="sunCircleFill"
              d="M331.2,78.4c-2.4,5.6-8.8,8-13.6,5.6c-5.6-2.4-8-8.8-5.6-13.6c2.4-5.6,8.8-8,13.6-5.6   C331.2,67.2,333.6,73.6,331.2,78.4z"
            />
          </g>
          <polygon
            className="sunCirclePathOne"
            points="347.2,47.2 333.6,46.4 324,37.6 344.8,20 "
          />
          <circle className="sunCircleFill" cx="174.4" cy="421.6" r="10.4" />
          <polygon
            className="sunCirclePathOne"
            points="148.8,448.8 162.4,449.6 172,458.4 151.2,476 "
          />
          <path
            className="sunCircleFill"
            d="M426.4,187.2c-5.6,2.4-12-0.8-13.6-5.6c-2.4-5.6,0.8-12,5.6-13.6c5.6-2.4,12,0.8,13.6,5.6  C435.2,179.2,432,184.8,426.4,187.2z"
          />
          <polygon
            className="sunCirclePathOne"
            points="460,176 451.2,165.6 450.4,152.8 477.6,155.2 "
          />
          <path
            className="sunCircleFill"
            d="M69.6,308.8c5.6-2.4,12,0.8,13.6,5.6c2.4,5.6-0.8,12-5.6,13.6c-5.6,2.4-12,0-14.4-5.6  C60.8,316.8,64,311.2,69.6,308.8z"
          />
          <polygon
            className="sunCirclePathOne"
            points="36,320 44.8,330.4 45.6,343.2 18.4,340.8 "
          />
          <path
            className="sunCircleFill"
            d="M417.6,331.2c-5.6-2.4-8-8.8-5.6-13.6c2.4-5.6,8.8-8,13.6-5.6c5.6,2.4,8,8.8,5.6,13.6  C428.8,331.2,422.4,333.6,417.6,331.2z"
          />
          <polygon
            className="sunCirclePathOne"
            points="448.8,347.2 449.6,333.6 458.4,324 476,344.8 "
          />
          <path
            className="sunCircleFill"
            d="M78.4,164.8c5.6,2.4,8,8.8,5.6,13.6c-2.4,5.6-8.8,8-13.6,5.6c-5.6-2.4-8-8.8-5.6-13.6  C67.2,164.8,73.6,162.4,78.4,164.8z"
          />
          <polygon
            className="sunCirclePathOne"
            points="47.2,148.8 46.4,162.4 37.6,172 20,151.2 "
          />
          <circle className="sunCircleFill" cx="318.4" cy="422.4" r="10.4" />
          <polygon
            className="sunCirclePathOne"
            points="320,460 330.4,451.2 343.2,450.4 340.8,477.6 "
          />
          <path
            className="sunCircleFill"
            d="M187.2,69.6c2.4,5.6-0.8,12-5.6,13.6c-5.6,2.4-12-0.8-13.6-5.6c-2.4-5.6,0-12,5.6-14.4  C179.2,60.8,184.8,64,187.2,69.6z"
          />
          <polygon
            className="sunCirclePathOne"
            points="176,36 165.6,44.8 152.8,45.6 155.2,17.6 "
          />
        </g>
      }
    </svg>
  );
};

const Ocean: React.FC = () => {
  return (
    <div className="ocean">
      <Wave />
      <Wave />
      <Wave />
    </div>
  );
};

const Wave: React.FC = () => {
  return <div className="wave"></div>;
};

const Surfer: React.FC<{ surferFalls: boolean }> = ({ surferFalls }) => {
  return (
    <div id="surfer" className={surferFalls ? "surferFalling" : ""}>
      <SurferSVG />
    </div>
  );
};

const SurferSVG: React.FC = () => {
  return (
    <Image
      src="/surfer.png"
      width={400}
      height={600}
      alt="cartoon woman surfing"
      className="surfer"
    />
  );
};

type OpeningAnimationProps = {
  setOpeningAnimation: (open: boolean) => void;
};

//shark SVG - aim to show this on click of button
const Shark: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200px"
      height="200px"
      viewBox="0 0 64 64"
      aria-hidden="true"
      role="img"
      className="sharkSVG"
      preserveAspectRatio="xMidYMid meet"
    >
      {
        <g>
          <path
            d="M54.861 37.949c7.727-7.318 7.423-14.215 6.916-16.887c-.627-3.305-2.471-5.883-4.969-6.984c-.98-3.998-5.776-5.279-5.986-5.336l-1.699-.436l.9 1.512c.026.047 2.719 4.648 1.616 9.127l-.372 1.51l1.391-.684c1.132-.559 2.089-1.396 2.404-1.691c.291-.063.852.252 1.248.838c.236.35.918 1.568-.246 2.598c-.896.795-3.502-.066-6.26-.979c-2.507-.828-5.318-1.758-8.159-2c1.118-5.662 2.968-11.193 2.987-11.252L45.064 6l-1.304.354C33.012 9.262 27.688 16.678 25.413 21.025C12.463 25.326 2 34.068 2 37.555c0 3.717 8.61 10.752 13.161 10.752c.45 0 .864-.066 1.231-.197c1.249-.443 2.482-1.01 3.691-1.646c-1.313 3.695-1.869 6.92-1.886 7.025l-.062.02l1.287.822c1.505.961 3.426 1.449 5.71 1.449h.001c6.426-.002 15.037-3.881 21.553-9.678c7.561 2.127 13.187 9.67 13.243 9.746L61.512 58l-.283-2.66c-.057-.535-1.4-12.68-6.368-17.391M20.298 48.764l3.109 2.801l-.095-.973c-.133-1.236-.281-2.859-.281-2.859l3.033 2.607c-1.589.826-3.359 1.588-5.311 2.283c-.073-.586-.313-2.531-.455-3.859m1.058-1.43l-.979-1.031c.306-.164.612-.324.914-.5c-.021.049-.045.102-.065.152l.13 1.379m1.461-2.459c.377-.24.747-.49 1.115-.74l.36 1.959l-1.475-1.219m9.966-8.186c.52-.521.988-1.006 1.415-1.455l.536 3.502l-1.951-2.047m2.922 3.672a11.4 11.4 0 0 1-.406 1.119c-.209.492-.459.971-.733 1.441l-1.304-3.662l2.443 1.102m-1.514 3.17a15.68 15.68 0 0 1-1.933 2.391l-1.172-3.889l3.105 1.498m-3.561-4.777c.44-.404.866-.805 1.267-1.193l.469 2.572l-1.736-1.379m1.104 7.684a21.289 21.289 0 0 1-2.329 1.887l-.708-3.791l3.037 1.904m-3.632-5.465c.43-.357.848-.717 1.254-1.072l.52 2.711l-1.774-1.639m.881 7.646a28.423 28.423 0 0 1-2.437 1.471l-.57-3.773l3.007 2.302m-3.576-5.531a50.28 50.28 0 0 0 1.215-.924l.346 2.385l-1.561-1.461m-.274 11.24c-1.287 0-2.432-.17-3.422-.506c7.805-2.863 12.822-6.828 14.928-11.801c2.319-5.475.173-10.078.08-10.271l-.488-1.02l-.719.871c-.096.115-9.653 11.602-19.603 15.141a2.227 2.227 0 0 1-.749.113c-3.782 0-11.224-6.256-11.693-9.039c.879-.436 4.326-1.135 8.833-1.135c2.574 0 6.354.24 9.743 1.383a6.777 6.777 0 0 0 2.176.377c3.997 0 6.407-3.994 8.344-7.205c1.201-1.99 2.443-4.049 3.515-4.049c.088 0 .174.012.266.037c1.398.398 1.846 2.928 2.363 5.857c.781 4.412 1.74 9.834 6.502 12.395c-6.126 5.247-14.242 8.85-20.076 8.852m21.639-9.717c-4.911-2.002-5.832-7.197-6.643-11.783c-.603-3.41-1.124-6.354-3.393-6.998a2.37 2.37 0 0 0-.659-.094c-1.887 0-3.214 2.201-4.75 4.748c-1.841 3.051-3.926 6.506-7.108 6.506a5.413 5.413 0 0 1-1.715-.301c-3.576-1.205-7.522-1.457-10.204-1.457c-.074 0-5.302.051-8.281.891c2.265-3.482 11.058-10.203 22.122-13.811l.284-.092l.136-.268c1.998-3.918 6.72-10.766 16.283-13.818c-.637 2.047-1.854 6.199-2.662 10.383c-7.675.246-11.974 2.99-11.972 2.992c0 0 5.634-1.479 12.466-1.576l.08.004c2.918.102 5.936 1.1 8.598 1.979c3.436 1.135 6.147 2.031 7.666.689c1.527-1.352 1.345-3.236.485-4.504c-.85-1.254-2.183-1.797-3.167-1.289l-.174.127c-.006.004-.345.334-.854.719c.234-2.719-.541-5.252-1.205-6.854c1.322.674 3.016 1.908 3.363 3.924l.07.412l.391.145c2.178.811 3.875 3.129 4.428 6.049c.466 2.453.706 8.84-6.686 15.729c-1.436-.143-3.658.314-3.658.314c1.146 0 2.168.375 3.089.99l.231.178c3.648 2.797 5.4 10.438 6.089 14.438c-2.332-2.577-6.922-6.874-12.65-8.372"
            fill="white"
          />
          <path
            d="M21.444 26.131c-2.916 2.234-2.727 4.498-5.293 5.191c0 0 3.303.678 5.326-1.777a3.177 3.177 0 0 0 3.103 2.52a3.184 3.184 0 0 0 1.093-6.173c1.316-.396 2.821-.477 4.54-.566c-.001-.002-5.851-1.431-8.769.805"
            fill="white"
          />
          <path
            d="M44.67 21.852c1.244 1.195.372 3.248.105 4.273c-.262 1.012-1.58 1.863-1.58 1.863c1.037-.207 1.908-.215 2.553-2.703c.645-2.482-1.078-3.433-1.078-3.433"
            fill="white"
          />
          <path
            d="M46.83 22.783c1.139 1.309.101 3.271-.25 4.26c-.348.986-1.734 1.709-1.734 1.709c1.051-.107 1.918-.031 2.769-2.447c.856-2.412-.785-3.522-.785-3.522"
            fill="white"
          />
          <path
            d="M48.746 23.492c1.174 1.277.18 3.271-.143 4.27c-.32.996-1.682 1.758-1.682 1.758c1.043-.137 1.915-.088 2.701-2.527c.79-2.438-.876-3.501-.876-3.501"
            fill="white"
          />
          <path
            d="M15.142 38.447c.924.309.542 1.242 1.626 1.242c1.086 0 1.806-.83 1.215-1.256c-1.338-.958-2.841.014-2.841.014"
            fill="white"
          />
        </g>
      }
    </svg>
  );
};

export default function OpeningAnimation({
  setOpeningAnimation,
}: OpeningAnimationProps) {
  const [showShark, setShowShark] = useState(false);
  const [surferFalls, setSurferFalls] = useState(false);
  const [divFalling, setDivFalling] = useState(false);
  const [toggleButton, setToggleButton] = useState(true);
  return (
    <>
      <main>
        <div
          className={
            divFalling
              ? "openingAnimationDiv divFalling"
              : "openingAnimationDiv"
          }
        >
          <Sky />
          <Ocean />
          <Surfer surferFalls={surferFalls} />
          <button
            className={toggleButton ? "toggleOpeninganimation" : ""}
            onClick={(event) => {
              setToggleButton(false);
              setShowShark(true);
              setTimeout(() => {
                setOpeningAnimation(false);
              }, 4000);
              setTimeout(() => {
                setSurferFalls(true);
              }, 2000);
              setTimeout(() => {
                setDivFalling(true);
              }, 3000);
            }}
          >
            DO NOT CLICK ME!
          </button>
          {showShark ? <Shark /> : null}
        </div>
      </main>
    </>
  );
}

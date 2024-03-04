import { useState } from "react";
import {
  Click,
  ClickTimeDifference,
  EndCountdown,
  Reset,
} from "../../wailsjs/go/main/Timer";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function TimerDisplay() {
  const [startedCountdown, setStartedCountdown] = useState(false);
  const [endedCountdown, setEndedCountdown] = useState(false);
  const [clickTimeDifference, setClickTimeDifference] = useState(0);
  const [resettable, setResettable] = useState(false);

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function onTimerStart() {
    setStartedCountdown(true);
  }

  async function onTimerEnd() {
    await EndCountdown();
    setEndedCountdown(true);
  }

  async function onClick() {
    await Click();
    const timeDifference = await ClickTimeDifference();

    setClickTimeDifference(timeDifference);
    await sleep(1500);
    setResettable(true);
  }

  async function onReset() {
    await Reset();
    setStartedCountdown(false);
    setEndedCountdown(false);
    setClickTimeDifference(0);
    setResettable(false);
  }

  if (!startedCountdown) {
    return (
      <button
        className="rounded-full bg-[#6b7179] text-slate-200 w-72 h-72 font-sans text-4xl font-bold outline outline-[#575c63]"
        onClick={onTimerStart}
      >
        Start
      </button>
    );
  } else if (startedCountdown && !endedCountdown) {
    return (
        <CountdownCircleTimer
          size={288}
          isPlaying
          duration={5}
          colors={["#6b7179", "#7EAA92"]}
          colorsTime={[5, 0]}
          onComplete={() => {
            onTimerEnd();
          }}
        >
          {({ remainingTime }) => (
            <div className="text-slate-800 font-sans text-4xl font-bold">
              {remainingTime}
            </div>
          )}
        </CountdownCircleTimer>
    );
  } else if (startedCountdown && endedCountdown) {
    return (
      <>
        {clickTimeDifference === 0 ? (
          <button
            className="rounded-full bg-[#7EAA92] text-slate-800 w-72 h-72 font-sans text-4xl font-bold outline outline-[#678b78]"
            onClick={onClick}
          >
            Go!
          </button>
        ) : (
          <button
            className="rounded-full bg-[#fdc47e] w-72 h-72 outline outline-[#d3a46a]"
            disabled={!resettable}
            onClick={onReset}
          >
            <div className="grid grid-rows-3">
              <div className="font-sans text-4xl font-bold text-slate-800 row-start-2">
                {`${clickTimeDifference.toFixed(6)}s`}
              </div>
              <div className="font-sans text-2xl font-bold text-slate-600 row-start-3">
                {resettable ? "Reset?" : null}
              </div>
            </div>
          </button>
        )}
      </>
    );
  }

  return (
    <div className="rounded-full bg-[#52575D] text-red-600 w-72 h-72 font-mono">
      ERROR
    </div>
  );
}

export default function Main() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#F8C3AF]">
      <TimerDisplay />
    </div>
  );
}

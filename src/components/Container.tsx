import { testState } from '@/state/TestState';
import Countdown from "react-countdown";
import { useRecoilState } from 'recoil';
import Problems from '../data/test.json';
import { BottomNav } from './BottomNav';
import { HeaderComp } from './HeaderComp';
import { Problem } from './Problem';
import { TestCompleted } from './TestCompleted';
import { useRef } from 'react';

export const Container = () => {
  const [test, setTest] = useRecoilState(testState)

  const renderer = ({ hours, minutes, seconds, completed }: {
    hours: number, minutes: number, seconds: number, completed: boolean,
  }) => {
    if (completed) {
    } else {
      return <span>{minutes}:{seconds}</span>;
    }
  };

  const startDate = useRef(Date.now());

  return (
    <div className="p-20">
      <main className="flex self-center	justify-center items-center">
        <div className="justify-between items-center flex flex-col">
          <>
            <HeaderComp sectionNumber={1} />
            <Countdown
              date={startDate.current + 1000000}
              renderer={renderer}
              onComplete={() => {
                setTest((oldTest) => {
                  return { ...oldTest, completed: true }
                })
              }}
            />
            <Problem
              problem={Problems[test.currentQuestion - 1]}
            />
          </>
          {test.completed &&
            <>
              <TestCompleted />
            </>
          }
          <BottomNav />
        </div>
      </main >
    </div>
  )
}
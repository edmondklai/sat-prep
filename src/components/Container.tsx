import { testState } from '@/state/TestState';
import Countdown from "react-countdown";
import { useRecoilState } from 'recoil';
import Problems from '../data/test.json';
import { BottomNav } from './BottomNav';
import { HeaderComp } from './HeaderComp';
import { Problem } from './Problem';
import { TestCompleted } from './TestCompleted';
import { useRef } from 'react';
import { Layout } from '../components/Layout/Layout';

export const Container = () => {
  const [test, setTest] = useRecoilState(testState)

  const renderer = ({ hours, minutes, seconds, completed }: {
    hours: number, minutes: number, seconds: number, completed: boolean,
  }) => {
    if (completed) {
    } else {
      return <span>{minutes}:{seconds.toString().padStart(2, '0')}</span>;
    }
  };

  const startDate = useRef(Date.now());

  return (
    <Layout>
      <div className="justify-between items-center flex flex-col">
        <>
          <HeaderComp sectionNumber={1} />
          <Countdown
            date={startDate.current + 20000}
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
    </Layout>
  )
}
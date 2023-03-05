import { testState } from '../state/TestState';
import { useRecoilState } from 'recoil'
import Test from '../data/test.json';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { RefObject } from 'react';
import Countdown from 'react-countdown';

export const BottomNav = ({ clockRef }: { clockRef: RefObject<Countdown> }) => {
  const [test, setTest] = useRecoilState(testState);

  const onBack = () => {
    setTest((oldTest) => {
      return { ...oldTest, currentQuestion: oldTest.currentQuestion - 1 }
    })
  }

  const calculateCorrectAnswers = () => {
    let correctAnswers = 0;
    Object.entries(test.answers).map(([key, value]) => {
      const problem = Test.find(ele => ele.number === Number(key))
      if (problem?.answer === value) {
        correctAnswers += 1
      }
    })

    setTest((oldTest) => {
      return {
        ...oldTest,
        completed: true,
        correctAnswers
      }
    })
  }

  const onNext = () => {
    setTest((oldTest) => {
      return { ...oldTest, currentQuestion: oldTest.currentQuestion + 1 }
    })
  }

  const onFinish = () => {
    clockRef.current?.getApi().stop()
    calculateCorrectAnswers()
    setTest((oldTest) => {
      return {
        ...oldTest,
        completed: true,
      }
    })
  }

  const handleChange = (event: SelectChangeEvent) => {
    setTest((oldTest) => {
      return {
        ...oldTest,
        currentQuestion: Number(event.target.value) as number,
      }
    })
  }

  return (
    <div className="flex">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Question</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          className="w-36"
          id="demo-simple-select"
          value={test.currentQuestion as unknown as string}
          label="Question"
          onChange={handleChange}
        >
          {Test.map((problem) => {
            return <MenuItem key={problem.number}
              value={problem.number}>{problem.number}</MenuItem>
          })}
        </Select>
      </FormControl>
      {
        !test.completed && <>
          <Button onClick={onBack} disabled={test.currentQuestion === 1}>Back</Button>
          {test.currentQuestion < Test.length &&
            <Button
              onClick={onNext}
            >
              Next
            </Button>
          }
          {test.currentQuestion === Test.length &&
            <Button onClick={onFinish}>Finish</Button>}
        </>
      }
    </div>
  )
}
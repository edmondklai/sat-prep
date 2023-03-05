import { testState } from '../state/TestState';
import { useRecoilState } from 'recoil'
import Test from '../data/test.json';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

export const BottomNav = () => {
  const [test, setTest] = useRecoilState(testState);

  const onBack = () => {
    setTest((oldTest) => {
      return { ...oldTest, currentQuestion: oldTest.currentQuestion - 1 }
    })
  }

  const onNext = () => {
    setTest((oldTest) => {
      return { ...oldTest, currentQuestion: oldTest.currentQuestion + 1 }
    })
  }

  const onFinish = () => {
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
          {test.currentQuestion !== 2 && <Button onClick={onNext} disabled={test.currentQuestion === 2}>Next</Button>}
          {test.currentQuestion === 2 && <Button onClick={onFinish}>Finish</Button>}
        </>
      }
    </div>
  )
}
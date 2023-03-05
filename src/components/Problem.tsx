import { testState } from "@/state/TestState"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import { useRecoilState } from "recoil"

type Choice = {
  text: string
  choice: string
}

type Paragraph = {
  text: string
}

export type Problem = {
  question: Paragraph[]
  choices: Choice[]
  number: number
  answer: string
}

export const Problem = ({ problem }: { problem: Problem }) => {
  const { number, question, choices } = problem;
  const [test, setTestState] = useRecoilState(testState)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestState((test) => {
      return {
        ...test,
        answers: {
          ...test.answers, [number]: e.target.value
        }
      }
    })
  }

  return (
    <div className="flex flex-row justify-between">
      <div className="w-1/2 p-5">
        {question.map((paragraph, index) => {
          return <div className="mb-3" key={index}>{paragraph.text}</div>
        })}
      </div>
      <div className="w-1/2 p-5">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={test.answers[number] || ""}
            onChange={onChange}
          >
            {choices.map((choice, index) => {
              return <div className="flex mb-5" key={index}>
                <FormControlLabel
                  value={choice.choice} control={<Radio />}
                  label={<div>{`${choice.choice}: ${choice.text}`}</div>}
                />
              </div>
            })}
          </RadioGroup>
        </FormControl>

      </div>
    </div >
  )
}
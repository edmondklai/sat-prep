import { testState } from "@/state/TestState"
import { useRecoilState } from "recoil"
import Test from '../data/test.json';


export const TestCompleted = () => {
  const [test] = useRecoilState(testState);

  return <section className="flex flex-col justify-center items-center">
    <span>Test Completed</span>
    <div className="flex">
      <div className="p-10">
        <h2>Your answers</h2>
        <div>
          {Object.entries(test.answers).map(([key, value]) => {
            return <div key={key}>
              <span>{key}: </span>
              <span>{value}</span>
            </div>
          })}
        </div>
      </div>
      <div className="p-10">
        <h2>Correct answers</h2>
        {Test.map((problem) => {
          return <div key={problem.number}>
            <span>{problem.number}: </span>
            <span>{problem.answer}</span>
          </div>
        })}
      </div>
    </div>
  </section>
}
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout/Layout'

const Start = () => {
  const { push } = useRouter();
  const onClick = () => {
    push('/')
  }

  return (
    <Layout>
      <div className="flex flex-col">
        <h2 className="text-2xl">SAT Practice Test</h2>
        <Button onClick={onClick}>Click to start</Button>
      </div>
    </Layout>

  )
}

export default Start;
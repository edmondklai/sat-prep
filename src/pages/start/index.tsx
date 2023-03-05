import { AuthenticatedRoute } from '@/components/Auth/AutheticatedRoute';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout/Layout'

const StartPage = () => {
  const { push } = useRouter();
  const onClick = () => {
    push('/sat-test')
  }

  return (
    <Layout>
      <AuthenticatedRoute>
        <div className="flex flex-col">
          <h2 className="text-2xl">SAT Practice Test</h2>
          <Button onClick={onClick}>Click to start</Button>
        </div>
      </AuthenticatedRoute>
    </Layout>
  )
}

export default StartPage;
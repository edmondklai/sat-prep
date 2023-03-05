import { useRecoilState } from "recoil"
import { loggedInState } from "@/state/LoggedInState"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { Layout } from '../../components/Layout/Layout';
import React, { ChangeEvent, useState } from "react";
import { PASSWORD } from '../../password'

type Props = {
  children: JSX.Element
}

export const AuthenticatedRoute: React.FC<Props> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);
  const [password, setPassword] = useState<String>('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const onSubmit = () => {
    if (password === PASSWORD) {
      setLoggedIn(() => {
        return { loggedIn: true }
      })
    }
  }

  if (loggedIn.loggedIn) {
    return <>
      {children}
    </>
  }

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <div className="mb-12">Not logged in</div>
        <div className="flex">
          <TextField size="small" type="password" onChange={onChange} />
          <Button onClick={onSubmit}>Submit</Button>
        </div>
      </div>
    </Layout>

  )
}
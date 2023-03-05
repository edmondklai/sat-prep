type Props = {
  children: JSX.Element
}

export const Layout: React.FC<Props> = ({ children }) => {
  return <main className="p-20 flex self-center justify-center items-center">
    {children}
  </main>
}
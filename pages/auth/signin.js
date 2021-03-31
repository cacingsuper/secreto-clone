import { providers, signIn } from 'next-auth/client'

export default function SignIn({ propiders }) {
  return (
    <>
      {Object.values(propiders).map(provider => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id) }>Sign in with {provider.name}</button>
        </div>
      ))}
    </>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context){
  const propiders = await providers()
  return {
    props: { propiders }
  }
}

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async () => {
  return {
    providers: await providers()
  }
}
*/
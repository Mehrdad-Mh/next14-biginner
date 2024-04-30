import { sayHello } from '@/lib/action'


const ServerActionTestPage = () => {

const actionInComponent = async()=>{
  "use server"
  console.log("it works")
}

  return (
    <div>
      <form action={actionInComponent}>
        <button>
            test me
        </button>
      </form>
    </div>
  )
}

export default ServerActionTestPage

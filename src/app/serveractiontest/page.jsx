import { addPost, deletePost } from "@/lib/action"



const ServerActionTestPage = () => {

// const actionInComponent = async () => {
//   "use server"
//   console.log("it works")
// }

  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug"/>
        <input type="text" placeholder="image" name="image"/>
        <input type="text" placeholder="userId" name="userId" />
        <button>
           Create Post
        </button>
      </form>

      <br/>

      <form action={deletePost} >
        <input type="text" placeholder="postId" name="id" />
        <button>
          delete post
        </button>

      </form>
    </div>
  )
}

export default ServerActionTestPage

import { SanityDocument } from "@sanity/client"
import { postPathsQuery, postQuery } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/fetch"
import { client } from "@/sanity/lib/client"
import Post from "@/components/Post"


export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery)
  return posts;
}


const PostPage = async ({params}: {params: any }) => {
  
  
  const post = await sanityFetch<SanityDocument>({query: postQuery, params})

  return (
    <div>
      <Post post={post}/>
    </div>
  )
}

export default PostPage
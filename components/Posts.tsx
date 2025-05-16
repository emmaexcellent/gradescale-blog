import type { SanityDocument } from "@sanity/client"
import Link from "next/link"

const Posts = ({ posts = [] }: {posts: SanityDocument[]}) => {

    const numberOfPosts = posts.length === 1 ? `1 Post` : `${posts.length} Posts`

    return (
        <div>
            <p>{numberOfPosts}</p>
            
            {posts.map((post) =>
            {
                console.log(post)
                return (
                    <Link href={post.slug ? post.slug.current : "#"} key={post._id}>
                    <h2>{post.title}</h2>
                </Link>
                )
            }
            )}
        </div>
    )
}

export default Posts
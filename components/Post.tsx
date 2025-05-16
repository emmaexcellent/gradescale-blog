"use client"
import type { SanityDocument } from "@sanity/client"
import { PortableText } from "@portabletext/react"
import { client } from "@/sanity/lib/client"
import ImageUrlBuilder from "@sanity/image-url"
import Image from "next/image"

const builder = ImageUrlBuilder(client)


const Post = ({post}: {post: SanityDocument}) => {
  return (
    <main className="container mx-auto prose prose-xl px-4 py-16">
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      {post?.mainImage ? (
        <Image src={builder.image(post.mainImage).width(300).height(300).url()} alt={post?.mainImage?.alt || post.title} width={300} height={300} />
      ): null}
      {post?.body ? <PortableText value={post.body}/> : null}
    </main>
  )
}

export default Post

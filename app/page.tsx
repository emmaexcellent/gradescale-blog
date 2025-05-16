import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/fetch"
import { postsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Posts from "@/components/Posts"

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({query: postsQuery})

  return (
    <div className="w-full flex items-center justify-center min-h-screen">
      Gradescale Blog   
      <Posts posts={posts} />     
    </div>
  );
}

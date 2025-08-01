import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type PostWithSlug, getAllPosts } from '@/lib/posts'
import { formatDate } from '@/lib/formatDate'

function Post({ post }: { post: PostWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${post.slug}`}>
          {post.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={post.date}
          className="md:hidden"
          decorate
        >
          {formatDate(post.date)}
        </Card.Eyebrow>
        <Card.Description>{post.description}</Card.Description>
        <Card.Cta>Read post</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={post.date}
        className="mt-1 max-md:hidden"
      >
        {formatDate(post.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function BlogIndex() {
  let posts = await getAllPosts()

  return (
    <SimpleLayout
      title="My experiences in software engineering, company building, and other random topics."
      intro="All of my long-form thoughts on programming, product, business, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {posts.map((post) => (
            <Post key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}

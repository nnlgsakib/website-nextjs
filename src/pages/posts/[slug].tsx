import React, { AnchorHTMLAttributes } from 'react'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import { useHydrateAtoms } from 'jotai/utils'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import dayjs from 'dayjs'

import { cn } from '@/lib/utils'
import attempt from '@/lib/attempt-promise'
import {
  queryDatabase,
  getParsedPagesByProperties,
  ParsedPage,
  ParsedListPage,
} from '@/lib/notion-client'
import { render_block } from '@/components/notion-render/Block'
import { blocksAtom } from '@/components/notion-render/atoms'
import TagLink from '@/pages/components/TagLink'
import SectionSubscription from '@/pages/components/SectionSubscription'
import '@/components/notion-render/styles.css'

interface Props {
  page: ParsedPage | null
  recentPages?: ParsedListPage[]
  similarPages?: ParsedListPage[]
  beforePages?: ParsedListPage[]
  nextPages?: ParsedListPage[]
}

function AboutLink({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className="text-center text-xs text-green-700 font-bold leading-none border-r-[1px] border-green-700 w-[136px]"
      {...props}
    >
      {children}
    </a>
  )
}

const PostPage = ({
  page,
  recentPages = [],
  similarPages = [],
  beforePages = [],
  nextPages = [],
}: Props) => {
  if (!page) {
    return (
      <div className="max-w-3xl m-auto p-8">
        <p>Woops! didn't find that post.</p>
      </div>
    )
  }
  useHydrateAtoms([[blocksAtom, page.blocks]])
  return (
    <>
      {page.title ? (
        <Head>
          <title>{page.title}</title>
        </Head>
      ) : null}
      <div
        className={cn(
          'min-h-screen',
          'bg-gradient-to-b from-green-600 to-green-500'
        )}
      >
        <div
          className={cn(
            'safe-viewport',
            'grid grid-cols-1 lg:grid-cols-20 3xl:grid-cols-24 gap-4',
            'py-32'
          )}
        >
          <div
            className={cn(
              'col-start-1 lg:col-span-11 lg:col-start-2 3xl:col-start-4 3xl:col-span-11'
            )}
          >
            <nav
              className={cn(
                'bg-white rounded-3xl',
                'py-2 px-6',
                'text-sm font-medium flex gap-2'
              )}
            >
              <a href="/blog">Blog</a>
              <span>/</span>
              <span>{dayjs(page.createdTime).format('YYYY')}</span>
              <span>/</span>
              <span>{dayjs(page.createdTime).format('MM')}</span>
            </nav>
            <article
              className={cn(
                'notion_page_body',
                'bg-white rounded-3xl p-2 mt-4'
              )}
            >
              {page.coverUrl ? (
                <div
                  className={cn('aspect-[856/442] rounded-3xl overflow-hidden')}
                >
                  <img
                    className="w-full object-contain"
                    src={page.coverUrl}
                    alt=""
                  />
                </div>
              ) : null}
              <div className="p-8 pt-0">
                <h1 className={cn('notion_page_title', 'text-3xl font-black')}>
                  {page.title}
                </h1>
                <div className="flex items-center gap-x-4">
                  {page.tags.map((tag, i) => (
                    <TagLink key={`${i}`} href={`/tags/${tag}`}>
                      {tag}
                    </TagLink>
                  ))}
                </div>
                <div className="my-6">
                  <p className="text-sm font-medium">
                    {dayjs(page.createdTime).format('YYYY-MM-DD')}
                  </p>
                </div>
                <div className="text-base">{page.blocks.map(render_block)}</div>
                <div className="grid grid-cols-20 text-sm text-green-800">
                  {beforePages.length > 0 ? (
                    <a
                      className="col-start-1 col-span-10 flex items-center gap-1"
                      href={`/posts${beforePages[0].slug}`}
                    >
                      <FiArrowLeft className="shrink-0" />
                      <span className="line-clamp-1">
                        {beforePages[0].title}
                      </span>
                    </a>
                  ) : null}
                  {nextPages.length > 0 ? (
                    <a
                      className="col-start-11 col-span-10 flex items-center gap-1"
                      href={`/posts${nextPages[0].slug}`}
                    >
                      <span className="line-clamp-1 text-right pr-2">
                        {nextPages[0].title}
                      </span>
                      <FiArrowRight className="shrink-0" />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
            <section className="bg-white rounded-3xl mt-4 py-8">
              <div className="px-10">
                <h1 className="text-2xl font-bold">About Phala</h1>
                <div className="text-sm mt-4 flex flex-col gap-4">
                  <p>
                    Phala Network is a decentralized cloud that offers secure
                    and scalable computing for Web3.
                  </p>
                  <p>
                    With Phat Contracts, an innovative programming model
                    enabling trustless off-chain computation, developers can
                    create new Web3 use cases.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap mt-8 gap-y-4">
                <AboutLink href="#section-subscription">Subscribe</AboutLink>
                <AboutLink href="https://twitter.com/PhalaNetwork">
                  Twitter
                </AboutLink>
                <AboutLink href="https://www.youtube.com/@PhalaNetwork">
                  Youtube
                </AboutLink>
                <AboutLink href="https://github.com/phala-Network">
                  Github
                </AboutLink>
              </div>
              <div className="flex flex-wrap mt-4 gap-y-4">
                <AboutLink href="https://discord.com/invite/phala">
                  Discord
                </AboutLink>
                <AboutLink href="https://forum.phala.network/">Forum</AboutLink>
                <AboutLink href="https://t.me/phalanetwork">Telegram</AboutLink>
              </div>
            </section>
          </div>
          <div className={cn('lg:col-span-7')}>
            {recentPages.length > 0 ? (
              <section className="bg-[#F5FEDC] rounded-3xl p-8">
                <h1 className="text-2xl font-bold">Recent Posts</h1>
                <div className="flex flex-col gap-5 mt-5">
                  {recentPages.map((recentPage) => (
                    <a href={`/posts${recentPage.slug}`} key={recentPage.id}>
                      <p className="text-base text-green-800 font-medium">
                        {recentPage.title}
                      </p>
                      <p className="text-xs text-green-700">
                        {dayjs(recentPage.createdTime).format('YYYY-MM-DD')}
                      </p>
                    </a>
                  ))}
                </div>
              </section>
            ) : null}
            {similarPages.length > 0 ? (
              <section className="bg-[#F5FEDC] rounded-3xl p-8 mt-4">
                <h1 className="text-2xl font-bold">Similar Posts</h1>
                <div className="flex flex-col gap-5 mt-5">
                  {similarPages.map((similarPage) => (
                    <a href={`/posts${similarPage.slug}`} key={similarPage.id}>
                      <p className="text-base text-green-800 font-medium">
                        {similarPage.title}
                      </p>
                      <p className="text-xs text-green-700">
                        {dayjs(similarPage.createdTime).format('YYYY-MM-DD')}
                      </p>
                    </a>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </div>
        <SectionSubscription />
      </div>
    </>
  )
}

interface Params extends ParsedUrlQuery {
  slug: string
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params!.slug as string
  const [error, pages] = await attempt(
    getParsedPagesByProperties({
      database_id: process.env.NOTION_POSTS_DATABASE_ID!,
      properties: {
        'Custom URL': slug,
      },
    })
  )
  if (error) {
    console.error(error)
  }
  if (pages.length === 0) {
    return {
      props: {
        page: null,
        recentPages: [],
        similarPages: [],
      },
    }
  }
  const page = pages[0]
  const baseFilters = [
    {
      property: 'Status',
      status: {
        equals: 'Published',
      },
    },
    {
      property: 'Post Type',
      select: {
        equals: 'Post',
      },
    },
    {
      property: 'Custom URL',
      rich_text: {
        does_not_equal: page.slug,
      },
    },
  ]
  const { pages: recentPages } = await queryDatabase({
    database_id: process.env.NOTION_POSTS_DATABASE_ID!,
    filter: {
      and: [...baseFilters],
    },
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'descending',
      },
    ],
    page_size: 3,
  })
  let similarPages: ParsedListPage[] = []
  if (page.tags.length > 0) {
    const result = await queryDatabase({
      database_id: process.env.NOTION_POSTS_DATABASE_ID!,
      filter: {
        and: [
          ...baseFilters,
          {
            property: 'Tags',
            multi_select: {
              contains: page.tags[0],
            },
          },
        ],
      },
      sorts: [
        {
          timestamp: 'created_time',
          direction: 'descending',
        },
      ],
      page_size: 3,
    })
    similarPages = result.pages
  }
  const { pages: nextPages } = await queryDatabase({
    database_id: process.env.NOTION_POSTS_DATABASE_ID!,
    filter: {
      and: [
        ...baseFilters,
        {
          timestamp: 'created_time',
          created_time: {
            on_or_after: dayjs(page.createdTime).add(1, 'second').format(),
          },
        },
      ],
    },
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'descending',
      },
    ],
    page_size: 1,
  })
  const { pages: beforePages } = await queryDatabase({
    database_id: process.env.NOTION_POSTS_DATABASE_ID!,
    filter: {
      and: [
        ...baseFilters,
        {
          timestamp: 'created_time',
          created_time: {
            on_or_before: dayjs(page.createdTime)
              .subtract(1, 'second')
              .format(),
          },
        },
      ],
    },
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'descending',
      },
    ],
    page_size: 1,
  })
  return {
    props: {
      page,
      recentPages,
      similarPages,
      beforePages,
      nextPages,
    },
  }
}

export default PostPage
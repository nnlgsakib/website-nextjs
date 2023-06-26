import { type ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'


function LinkListHeading({ children }: { children: ReactNode }) {
  return (
    <h4 className={cn("uppercase font-black text-base xl:text-2xl mb-2.5 xl:mb-5")}>
      {children}
    </h4>
  )
}

function LinkList({ children }: { children: ReactNode }) {
  return (
    <ul className={cn("mb-10 flex flex-col gap-1.5 xl:gap-2.5")}>{children}</ul>
  )
}

function LinkListItem({ children, className, href, ...props }: React.HTMLProps<HTMLAnchorElement>) {
  const linkCls = cn(className, 'btn-link', 'text-xs xl:text-base leading-4 xl:leading-6')
  if (href?.startsWith('/')) {
    return (
      <li>
        <Link href={href} className={linkCls}>
          {children}
        </Link>
      </li>
    )
  }
  return (
    <li>
      <a target="_blank" rel="noopener" {...props} href={href} className={linkCls}>
        {children}
      </a>
    </li>
  )
}

export default function SiteFooter() {
  return (
    <footer className={cn("page-footer", "bg-[#1c1c1c] text-white pt-12 pb-6 xl:pt-16 xl:pb-0")}>
      <div className={cn("safe-viewport", "grid gap-4 grid-cols-2 auto-rows-min xl:auto-rows-fr xl:grid-cols-20 3xl:grid-cols-24")}>

        {/* Block #1: Developers */}
        <div className={cn("col-span-1 col-start-1 row-start-1 row-span-2 xl:row-start-1 xl:row-span-2 xl:col-start-2 xl:col-span-5 3xl:col-start-4")}>
          <LinkListHeading>Developers</LinkListHeading>
          <LinkList>
            <LinkListItem href="https://docs.phala.network/">Docs</LinkListItem>
            <LinkListItem href="https://github.com/Phala-Network/">GitHub</LinkListItem>
            <LinkListItem href="https://docs.phala.network/developers/phat-contract/builders-program">Builders Program</LinkListItem>
            <LinkListItem href="https://phat.phala.network/">Native Phat Contract App</LinkListItem>
            <LinkListItem href="https://bricks.phala.network/?source=foot-bricks-app">Bricks App</LinkListItem>
            <LinkListItem href="https://docs.phala.network/developers/phat-contract/use-cases">Use Cases</LinkListItem>
          </LinkList>
        </div>

        {/* Row #2: Blueprints */}
        <div className={cn("col-span-1 col-start-2 row-span-1 xl:col-start-2 xl:col-span-5 3xl:col-start-4")}>
          <LinkListHeading>Blueprints</LinkListHeading>
          <LinkList>
            <LinkListItem href="https://bricks.phala.network/?source=footer-LensAPI-Oracle">LensAPI Oracle</LinkListItem>
          </LinkList>
        </div>

        {/* Row #3: Other Products */}
        <div className={cn("col-span-1 col-start-2 row-span-1 xl:col-start-2 xl:col-span-5 3xl:col-start-4")}>
          <LinkListHeading>Other Products</LinkListHeading>
          <LinkList>
            <LinkListItem href="https://subbridge.io">SubBridge</LinkListItem>
            <LinkListItem href="https://phala.world">PhalaWorld</LinkListItem>
          </LinkList>
        </div>

        {/* Block #4: Resources */}
        <div className={cn("col-span-1 row-start-3 row-span-3 xl:row-start-1 xl:row-span-4 xl:col-start-7 xl:col-span-5 3xl:col-start-10")}>
          <LinkListHeading>Resources</LinkListHeading>
          <LinkList>
            <LinkListItem href="https://app.phala.network">Phala App</LinkListItem>
            <LinkListItem href="https://docs.phala.network/">What is Phala Network?</LinkListItem>
            <LinkListItem href="https://docs.phala.network/developers/phat-contract">What is Phat Contract?</LinkListItem>
            <LinkListItem href="https://docs.phala.network/developers/phat-contract/bricks-and-blueprints">What are Blueprints?</LinkListItem>
            <LinkListItem href="https://docs.phala.network/pha-token/delegation/delegate-to-stakepool">What is PHA staking?</LinkListItem>
            <LinkListItem href="https://docs.phala.network/developers/phat-contract/pay-for-cloud-service">Tokenomics - Utility</LinkListItem>
            <LinkListItem href="https://docs.phala.network/compute-providers/basic-info/worker-rewards">Tokenomics - Earn</LinkListItem>
            <LinkListItem href="https://github.com/Phala-Network/Whitepaper/tree/master/pdf/phala-paper.pdf">Whitepaper</LinkListItem>
            <LinkListItem href="/roadmap">Roadmap</LinkListItem>
            <LinkListItem href="https://docs.phala.network/compute-providers/basic-info">Become a Compute Provider</LinkListItem>
            <LinkListItem href="https://github.com/Phala-Network/growth-program">Ambassador Program</LinkListItem>
            <LinkListItem href="https://drive.google.com/drive/folders/1u60uDV8CnZBBhySZMJfiMQ0XgdJXkVhq">Media Kit</LinkListItem>
            <LinkListItem href="https://wellfound.com/company/phala-network">Career</LinkListItem>
          </LinkList>
        </div>

        {/* Block #5: Phala */}
        <div className={cn("col-span-1 col-start-2 xl:row-start-1 xl:col-start-12 xl:col-span-5 3xl:col-start-16")}>
          <LinkListHeading>Phala</LinkListHeading>
          <LinkList>
            <LinkListItem href="https://phala.subscan.io/">Phala Explorer</LinkListItem>
            <LinkListItem href="https://phala.subsquare.io/">Phala Governance</LinkListItem>
          </LinkList>
        </div>

        {/* Block #6: Khala */}
        <div className={cn("col-span-1 col-start-2 xl:row-start-2 xl:col-start-12 xl:col-span-5 3xl:col-start-16")}>
          <LinkListHeading>Khala</LinkListHeading>
          <LinkList>
            <LinkListItem href="https://khala.subscan.io/">Khala Explorer</LinkListItem>
            <LinkListItem href="https://khala.subsquare.io/">Khala Governance</LinkListItem>
          </LinkList>
        </div>

        {/* Block #7: Social */}
        <div className={cn("col-span-1 col-start-2 xl:row-start-1 xl:row-span-2 xl:col-start-17 xl:col-span-5 3xl:col-start-21")}>
          <div>
            <LinkListHeading>Social</LinkListHeading>
            <LinkList>
              <LinkListItem href="https://twitter.com/PhalaNetwork">Twitter</LinkListItem>
              <LinkListItem href="https://discord.com/invite/phala">Discord</LinkListItem>
              <LinkListItem href="https://t.me/phalanetwork">Telegram</LinkListItem>
              <LinkListItem href="https://www.youtube.com/@PhalaNetwork">YouTube</LinkListItem>
              <LinkListItem href="https://lenster.xyz/u/yourfather">Lenster</LinkListItem>
              <LinkListItem href="https://lenstube.xyz/channel/yourfather.lens">Lenstube</LinkListItem>
              <LinkListItem href="https://forum.phala.network/">Forum</LinkListItem>
            </LinkList>
          </div>
        </div>

        {/* Block #8: Logo & policy, disclosure, etc. */}
        <div
          className={cn(
            "col-span-2 row-start-6 xl:row-start-5 xl:col-start-2 xl:col-span-18 3xl:col-start-4",
            "flex flex-col gap-5 xl:flex-row xl:items-center justify-between"
          )}>
          <Image
            src="/logo.svg"
            alt="Phala Logo"
            className="svg-white"
            width={156}
            height={44}
            priority
          />
          <div className={cn("uppercase flex flex-row gap-36 text-base font-semibold")}>
            <a className="btn-link" href="https://github.com/Phala-Network/phala-blockchain/blob/master/docs/responsible-disclosure.md">
              Responsible Disclosure
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


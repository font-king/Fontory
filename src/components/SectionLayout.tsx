import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

const Container = ({ children }: PropsWithChildren) => (
  <section className="relative h-fit rounded-4xl bg-white p-8">{children}</section>
)

const TitleContainer = ({ children }: PropsWithChildren) => (
  <div className="mb-[3.2rem] flex flex-col gap-5">{children}</div>
)

const Title = ({ children }: PropsWithChildren) => <h4 className="text-400">{children}</h4>
const SubTitle = ({ children }: PropsWithChildren) => (
  <h5 className="text-800 text-grey-500">{children}</h5>
)

const MoreViewButton = ({ to, children }: PropsWithChildren<{ to: string }>) => (
  <Link to={to} className="text-p7 text-grey-600 pb-1.5">
    {children}
  </Link>
)

const MoreViewContainer = ({ children }: PropsWithChildren) => (
  <div className="flex items-center justify-between pb-12">{children}</div>
)

export const SectionLayout = Object.assign(Container, {
  Title,
  SubTitle,
  TitleContainer,
  MoreViewButton,
  MoreViewContainer,
})

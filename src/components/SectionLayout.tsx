import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  title?: string
  subTitle?: string
  moreViewTo?: string
  children: ReactNode
}

const Title = ({ title, subTitle, moreViewTo }: Omit<Props, 'children'>) => (
  <div className="flex-column mb-[3.2rem] gap-5">
    <div className="flex-between-center">
      <h4 className="h3 text-primary">{title}</h4>

      {moreViewTo && (
        <Link
          to={moreViewTo}
          className="p5 text-grey border-b-lightgrey ml-2 shrink-0 border-b pb-0.5"
        >
          더보기
        </Link>
      )}
    </div>

    {subTitle && <h5 className="p4 text-grey">{subTitle}</h5>}
  </div>
)

export const SectionLayout = ({ title, subTitle, moreViewTo, children }: Props) => (
  <section className="rounded-box relative h-fit bg-white p-8">
    {title && <Title title={title} subTitle={subTitle} moreViewTo={moreViewTo} />}
    {children}
  </section>
)

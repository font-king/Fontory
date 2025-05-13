declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>
  export default content
}

declare module '*.svg?react' {
  import type * as React from 'react'
  import type { SVGProps } from 'react'

  const ReactComponent: React.FC<SVGProps<SVGSVGElement>>
  export default ReactComponent
}

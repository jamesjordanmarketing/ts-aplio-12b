declare module '*.png' {
  const content: import('next/image').StaticImageData
  export default content
}

declare module '*.jpg' {
  const content: import('next/image').StaticImageData
  export default content
}

declare module '*.jpeg' {
  const content: import('next/image').StaticImageData
  export default content
}

declare module '*.gif' {
  const content: import('next/image').StaticImageData
  export default content
}

declare module '*.svg' {
  import { type FC, type SVGProps } from 'react'
  const content: FC<SVGProps<SVGSVGElement>>
  export default content
}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Map<K, V> {}
  // eslint-disable-next-line no-unused-vars
  interface HTMLFigureElement {}
}

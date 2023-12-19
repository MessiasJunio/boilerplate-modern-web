import Link from 'next/link'
import * as S from './styles'

const Main = ({
  title = 'Modern Web',
  description = 'TypeScript, ReactJS, NextJS, Storybook, Styled Components and Jest'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A Robot behind a laptop"
    />
    <S.IconBox>
      <Link href={'https://www.typescriptlang.org/'}>
        <S.Icon
          src="/icons/typescript.svg"
          alt="A typescript programming language"
        />
      </Link>
      <Link href={'https://react.dev/'}>
        <S.Icon src="/icons/react.svg" alt="React framework" />
      </Link>
      <Link href={'https://nextjs.org/'}>
        <S.Icon src="/icons/nextjs.svg" alt="Next.js framework" />
      </Link>
      <Link href={'https://storybook.js.org/'}>
        <S.Icon
          src="/icons/storybook.svg"
          alt="Storybook a frontend workshop"
        />
      </Link>
      <Link href={'https://styled-components.com/'}>
        <S.Icon
          src="/icons/styled-components.svg"
          alt="Styled components CSS-in-JS"
        />
      </Link>
      <Link href={'https://jestjs.io/'}>
        <S.Icon src="/icons/jest.svg" alt="Jest a testing framework" />
      </Link>
    </S.IconBox>
  </S.Wrapper>
)

export default Main

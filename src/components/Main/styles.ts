'use client'

import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #fcedeeff;
  color: #0e394fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 3rem;
`

export const Illustration = styled.img`
  width: min(30rem, 100%);
`

export const IconBox = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
`

export const Icon = styled.img`
  height: 5rem;
  width: 5rem;
`

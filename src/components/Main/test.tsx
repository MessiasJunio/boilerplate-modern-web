import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render heading', () => {
    const { container } = render(<Main />)

    expect(screen.getByRole('heading', { name: /Modern Web/i }))

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the background color correctly', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({
      'background-color': '#fcedeeff'
    })
  })
})

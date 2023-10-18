import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'

import App from '../src/App'

describe('App', () => {
  it('has proper styling', async () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })

  it('displays welcome text', () => {
    render(<App />)
    screen.getAllByText(/^Creative/i)
    expect(screen.getAllByText(/^Constraints/i).length).toBeGreaterThan(0)
  })
})

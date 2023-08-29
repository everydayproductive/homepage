import { render, screen } from '@testing-library/react'

import App from '../src/App'

describe('App', () => {
  it('has proper styling', async () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })

  it('displays welcome text', () => {
    render(<App />)
    expect(screen.getByText(/^Creative/i)).toBeInTheDocument()
    expect(screen.getByText(/^Constraints/i)).toBeInTheDocument()
  })
})

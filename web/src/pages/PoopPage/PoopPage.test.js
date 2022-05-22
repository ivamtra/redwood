import { render } from '@redwoodjs/testing/web'

import PoopPage from './PoopPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PoopPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PoopPage />)
    }).not.toThrow()
  })
})

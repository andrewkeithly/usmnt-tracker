import { render, screen } from "@testing-library/react";

import FullLayout from './FullLayout'

describe('<FullLayout />', () => {

  test('should render without crashing', () => {
    const defaultProps = {}
    render(<FullLayout {...defaultProps} />)
    expect(screen.getByText('Full Layout')).toBeInTheDocument();
  })
})
import React from "react";
import { render } from "@testing-library/react";
import App from './App';


describe('App', function() {

  it('does nothing', function() {
    expect(true).toBe(true);
  });


  it('does nothing', function() {
    const { getByText } = render(<App />);

    const linkElement = getByText(/learn react/i);

    expect(linkElement).toBeInTheDocument();
  });

});

import "@testing-library/jest-dom"
import { render, fireEvent, screen } from "@testing-library/react";
import HiddenMessage from "./HiddenMessage";

test("shows the children when the checkbox is checked", () => {
  /*
      *************
      query* functions will return the element or null if it cannot be found
      get* functions will return the element or throw an error if it cannot be found
        //the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
        // .toBeInTheDocument() is an assertion that comes from jest-dom
        // otherwise you could use .toBeDefined()

      *************
      */

  const testMessage = "Test Message";

  render(<HiddenMessage>{testMessage}</HiddenMessage>);

  // expect(screen.queryByText(testMessage)).toBeNull();

  fireEvent.click(screen.getByLabelText(/show/i));

  expect(screen.getByText(testMessage)).toBeInTheDocument();
});

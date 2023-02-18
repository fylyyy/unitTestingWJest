import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
        json: async () => [
            {id: 'p1', title: 'first Post'},
            {id: 'p2', title: 'second Post'}
        ]
    })
    render(<Async></Async>);

    const listItemElements = await screen.findAllByRole('listitem')
    expect(listItemElements).not.toHaveLength(0);
  });
});

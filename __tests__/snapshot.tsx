import renderer from "react-test-renderer";

import IndexPage from "../pages/index";

it("renders index unchanged", () => {
  const tree = renderer.create(<IndexPage />).toJSON();
  expect(tree).toMatchSnapshot();
});


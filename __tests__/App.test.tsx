/**
 * @format
 */

import React from 'react';
import * as renderer from 'react-test-renderer';
import App from '../App';   // adjust path if needed

const { act } = renderer;

test('App renders without crashing', async () => {
  let tree;
  await act(async () => {
    tree = renderer.create(<App />);
  });

  expect(tree).toBeTruthy();
  expect(tree.toJSON()).toMatchSnapshot();
});

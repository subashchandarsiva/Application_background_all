import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

it('renders the application heading and particle canvas', async () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  try {
    await act(async () => {
      ReactDOM.render(<App />, div);
      await new Promise(requestAnimationFrame);
    });
    expect(div.querySelector('h1').textContent).toBe('Hello Brain Freeze Application');
    expect(div.querySelector('canvas')).not.toBeNull();
  } finally {
    act(() => {
      ReactDOM.unmountComponentAtNode(div);
    });
    div.remove();
  }
});

import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Stream from './stream';

function setup() {
  const props = {
    tracks: [{ title: 'x' }, { title: 'y' }]
  };
  return shallow(<Stream {...props} />);
}

describe('SoundCloud', () => {
  describe('Stream', () => {
    it('shows two elements', () => {
      const wrapper = setup();
      expect(wrapper.find('.track').length).toBe(2);
    });
  });
});
import React from 'react';
import { expect } from 'chai';
import Component from '../search';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = mount(<Component />);

describe('Search component', () => {

    it('It exists!', () => {
    	expect(Component).to.exist
    });

    it('It displays the correct content', () => {
        expect(wrapper.find('input')).to.have.length(1)
        expect(wrapper.find('button')).to.have.length(1)
    });
    
    it('It changes value state when you type', () => {
        wrapper.find('input').simulate('change', {target: {value: 'New text'}})
        expect(wrapper.state().value).to.equal('New text')
    });
});
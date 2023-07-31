/* eslint-disable react/react-in-jsx-scope */
import { defineFeature, loadFeature } from 'jest-cucumber';
// import {shallow } from "enzyme";
const feature = loadFeature("__tests__/features/chartFeature.feature");//will come from features file
// import Chart from '../../src/components/Chart';
import App from '../../src/App';
import { shallow } from 'enzyme';



defineFeature(feature, (test) => {
  test('chart Feature', ({ given,when, then }) => {
    given('To check if given step is called and print chart', () => {
      // Implement the step logic here
      // For example, you could navigate to the homepage URL
      // eslint-disable-next-line react/react-in-jsx-scope
    const div=shallow(<App/>);
     return console.log("test case")
    });
    when('To check if When step is called and print chart', () => {
        // Implement the step logic here
        // For example, you could navigate to the homepage URL
       return console.log("test case")
      });

    then('To check if Then step is called and print chart', (message) => {
      // Implement the step logic here
      // For example, you could assert that the message is displayed on the page
      // expect(div).
    // const div=shallow(<App/>);
      
    // expect(div).toBe(true),

     console.log("after")
    });
  });
});



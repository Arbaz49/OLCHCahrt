import { defineFeature, loadFeature } from 'jest-cucumber';
// import { shallow, ShallowWrapper } from "enzyme";
const feature = loadFeature("__tests__/features/sample.feature")

defineFeature(feature, (test) => {
  test('Demo Feature', ({ given,when, then }) => {
    given('To check if given step is called and print something', () => {
      // Implement the step logic here
      // For example, you could navigate to the homepage URL
     return console.log("test case")
    });
    when('To check if When step is called and print something', () => {
        // Implement the step logic here
        // For example, you could navigate to the homepage URL
       return console.log("test case")
      });

    then('To check if Then step is called and print something', (message) => {
      // Implement the step logic here
      // For example, you could assert that the message is displayed on the page
     return console.log("after")
    });
  });
});



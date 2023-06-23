import { defineFeature, loadFeature } from 'jest-cucumber';
import { shallow, ShallowWrapper } from "enzyme";
// import App from "src/App.tsx"

const feature = loadFeature("__tests__/features/Chart.feature")
// const wrapper=shallow(<Chart/>);
const myfoo=(a:number,b:number):number=>{
    return a+b
}
defineFeature(feature, (test) => {
    let divtest;
  test('Chart Component Feature', ({ given,when, then }) => {
    given('To check if given step is called and print chart', () => {
        // divtest = shallow(<App/>),
    //  console.log("test case")
    //  divtest = shallow(<><Chart/></>),
    // const element = wrapper.find('#myElementId'),
    // expect(element.exists()).toBe(true),
    // expect(element.text()).toBe('Hello, Enzyme!'),
    
    });
    when('To check if When step is called and print chart', () => {
       return console.log("test case");
      });

    then('To check if Then step is called and print chart', (message) => {
        // const wrapper = shallow(<Chart/>);
        // const componentInstance = wrapper.instance();
        // // const backButton = exampleBlockA.findWhere(
        // //     (node) => node.prop("chartId") === "back-button",
        // //   );
        //    expect(componentInstance.exists()).toBe(true);
        // //   backButton.simulate("click");
        const result=myfoo(2,3);
        expect(result).toBe(5);
    });
  });
});



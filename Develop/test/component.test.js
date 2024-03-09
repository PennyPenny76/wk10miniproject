const Component = require('../lib/component.js');



describe('empty', () => {
  it('should render throw an err when called directly', () => {
    const component = new Component();
    const err = new Error('content must implement render() method.');
    expect(component.render).toThrow(err);
  });
});

   

    

    



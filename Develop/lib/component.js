

class Component {
    constructor(contents = []) {
      this.contents = contents;

    }
    render() {
        throw new Error(`content must implement render() method.`);
    }
    
    renderInnerHtml() {
        return this.contents
            .map( (content) => {
                if (typeof content === 'string') {
                    return content;
                }
              return content.render();
            })
            .join('');  
    }
}

module.exports = Component;
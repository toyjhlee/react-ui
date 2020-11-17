import React from 'react';

function ExampleComponent(props) {
    var text = props.text;
    return React.createElement("div", { style: { color: 'red' } },
        "Hello ",
        text);
}

export { ExampleComponent };
//# sourceMappingURL=index.tsx.map

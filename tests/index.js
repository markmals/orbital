import { h, Fragment, render } from 'preact';
import { useState } from 'preact/hooks';
function App() {
    let [count, setCount] = useState(0);

    return h(
        Fragment,
        null,
        h('p', { class: 'big' }, 'Hello World! ', count),
        h('button', { onClick: () => setCount(count + 1) }, 'Increment ++')
    );
}
render(h(App, null), document.body);

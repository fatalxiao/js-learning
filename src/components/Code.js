import React, {Component} from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';

import 'highlight.js/styles/androidstudio.css';
import 'scss/components/Code.scss';

hljs.registerLanguage('javascript', javascript);

class Code extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {data} = this.props;

        return (
            <code className="javascript code"
                  dangerouslySetInnerHTML={{__html: hljs.highlightAuto(data).value}}>
            </code>
        );
    }
}

Code.propTypes = {
    data: PropTypes.any
};

export default Code;

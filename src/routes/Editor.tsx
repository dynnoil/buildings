import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Page from '../components/Page';

export interface State {
    data: string;
}

export default class Editor extends React.PureComponent<RouteComponentProps, State> {

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = { data: '' };
    }

    render() {
        return (
            <Page header="Editor">
                <CKEditor
                    editor={ClassicEditor}
                    data={this.state.data}
                    onInit={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        this.setState({ data });
                    }}
                    onBlur={editor => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={editor => {
                        console.log('Focus.', editor);
                    }}
                />
            </Page >
        );
    }
}
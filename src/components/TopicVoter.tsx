/** @jsx jsx */
import { jsx } from '@emotion/core';
import { mediaMaxWidth } from '../util';

export default (props: { name: string, color: string }) => {
    return (
        <div css={{ width: '120px', textAlign: 'center' }}>
            <div css={{
                [mediaMaxWidth(768)]: { fontSize: '0.8em' }
            }}>
                {props.name}
            </div>
            <div css={{ minHeight: '300px', margin: '10px 0', background: props.color || 'white' }}></div>
        </div>
    );
}
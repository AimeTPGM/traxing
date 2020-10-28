/** @jsx jsx */
import { jsx } from '@emotion/core';
import UnderDevelopment from '../components/UnderDevelopment';

export default () => {
    return (<div>
        <UnderDevelopment />
        <div css={{ display: 'flex', justifyContent: 'space-between', margin: '100px 100px' }}>
            <div>ภาพรวม</div>
            <div>ภูมิภาค</div>
            <div>จังหวัด</div>
            <div>อำเภอ</div>
        </div>
    </div>);
}
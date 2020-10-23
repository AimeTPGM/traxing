/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

export default () => {
    return (<div css={{ margin: '30vh 100px 100px'}}>
        <h1>อยากให้ภาษีไปไหน?</h1>
        <div css={{display: 'flex', justifyContent: 'space-between'}}>
            {topic.map(item => {
                return (<div>
                    {item.name}
                </div>);
            })}
        </div>
    </div>);
};

const topic = [
    {
        name: 'การศึกษา',
    },
    {
        name: 'เศรษฐกิจ',
    },
    {
        name: 'การเกษตร',
    },
    {
        name: 'สาธารณสุข',
    },
    {
        name: 'คมนาคม',
    },
    {
        name: 'เทคโนโลยี',
    },
    {
        name: 'สิ่งแวดล้อม',
    },
    {
        name: 'ความมั่นคง',
    },
    {
        name: 'ยุติธรรม',
    },
]
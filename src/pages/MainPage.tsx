/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import TopicVoter from '../components/TopicVoter';

export default () => {
    return (<div css={{ margin: '20vh 100px 100px'}}>
        <h1 css={{ margin: '50px'}}>
            <span css={{ fontSize: '2.5em' }}>
                อยากให้
            </span>
            <span css={{ margin: '0 30px', fontSize: '4.5em'}}>
                ภาษี
            </span>
            <span css={{ fontSize: '2.5em' }}>
                ไปไหน?
            </span>
        </h1>
        <div css={{display: 'flex', justifyContent: 'space-between'}}>
            {topic.map(item => {
                return (<TopicVoter name={item.name} color={item.color} />);
            })}
        </div>
    </div>);
};

const topic = [
    {
        name: 'การศึกษา',
        color: '#9a4dff'
    },
    {
        name: 'เศรษฐกิจ',
        color: '#4d5bff'
    },
    {
        name: 'การเกษตร',
        color: '#4dd6ff'
    },
    {
        name: 'สาธารณสุข',
        color: '#4dffc5'
    },
    {
        name: 'คมนาคม',
        color: '#ffe94e'
    },
    {
        name: 'เทคโนโลยี',
        color: '#ffa447'
    },
    {
        name: 'สิ่งแวดล้อม',
        color: '#ff6947'
    },
    {
        name: 'ความมั่นคง',
        color: '#ff4747'
    },
    {
        name: 'ยุติธรรม',
        color: '#999'
    },
]
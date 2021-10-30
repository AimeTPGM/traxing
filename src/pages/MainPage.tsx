/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import TopicVoter from '../components/TopicVoter';
import { Link } from "react-router-dom";

export default () => {
    return (<div css={{ margin: '15vh 100px 100px' }}>
        <h1 css={{ margin: '50px' }}>
            <span css={{ fontSize: '2.5em' }}>
                อยากให้
            </span>
            <span css={{ margin: '0 30px', fontSize: '4.5em' }}>
                ภาษี
            </span>
            <span css={{ fontSize: '2.5em' }}>
                ไปไหน?
            </span>
        </h1>
        <div css={{ display: 'flex', justifyContent: 'space-between' }}>
            {topic.map(item => {
                return (<TopicVoter key={item.id} name={item.name} color={item.color} />);
            })}
        </div>
        <div css={{ textAlign: 'center', margin: '50px 0' }}>
            <Link to="/summary">ดูผลโหวต</Link>
        </div>
    </div>);
};

const topic = [
    {   
        id: 'education',
        name: 'การศึกษา',
        color: '#9a4dff'
    },
    {
        id: 'economic',
        name: 'เศรษฐกิจ',
        color: '#4d5bff'
    },
    {
        id: 'farm',
        name: 'การเกษตร',
        color: '#4dd6ff'
    },
    {
        id: 'health',
        name: 'สาธารณสุข',
        color: '#4dffc5'
    },
    {
        id: 'transport',
        name: 'คมนาคม',
        color: '#ffe94e'
    },
    {
        id: 'tech',
        name: 'เทคโนโลยี',
        color: '#ffa447'
    },
    {
        id: 'environment',
        name: 'สิ่งแวดล้อม',
        color: '#ff6947'
    },
    {
        id: 'security',
        name: 'ความมั่นคง',
        color: '#ff4747'
    },
    {
        id: 'justice',
        name: 'ยุติธรรม',
        color: '#999'
    },
]
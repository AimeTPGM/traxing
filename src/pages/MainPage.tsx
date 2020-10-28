/** @jsx jsx */
import { jsx } from '@emotion/core';
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
                return (<TopicVoter name={item.name} color={item.color} />);
            })}
        </div>
        <div css={{ textAlign: 'center', margin: '50px 0' }}>
            <Link to="/summary">ดูผลโหวต</Link>
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
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { mediaMaxWidth } from '../util';

export default (props: { name: string, color: string }) => {
    let logo;

    switch (props.name) {
        case "การศึกษา": {
            logo = require("./img/education.png");
            break;
        }
        case "เศรษฐกิจ": {
            logo = require("./img/economic.png");
            break;
        }
        case "การเกษตร": {
            logo = require("./img/agriculture.png");
            break;
        }
        case "สาธารณสุข": {
            logo = require("./img/medical.png");
            break;
        }
        case "คมนาคม": {
            logo = require("./img/transportation.png");
            break;
        }
        case "เทคโนโลยี": {
            logo = require("./img/technology.png");
            break;
        }
        case "สิ่งแวดล้อม": {
            logo = require("./img/environment.png");
            break;
        }
        case "ความมั่นคง": {
            logo = require("./img/security.png");
            break;
        }
        case "ยุติธรรม": {
            logo = require("./img/justice.png");
            break;
        }
        default: {
            logo = require("./img/default.png");
            break;
        }
    }
    return (
        <div css={{ width: '120px', textAlign: 'center' }}>
            <div css={{
                [mediaMaxWidth(768)]: { fontSize: '0.8em' }
            }}>
                {props.name}
            </div>
            <div css={{ minHeight: '300px', margin: '10px 0', background: props.color || 'white' }}></div>
            <div><img src={logo} alt={props.name} css={{ width: '80px', height: '80px' }}></img></div>
        </div>
    );
}
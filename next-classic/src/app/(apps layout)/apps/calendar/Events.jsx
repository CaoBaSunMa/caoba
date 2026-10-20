'use client';
import moment from "moment";

var curYear = moment().format('YYYY'),
    curMonth = moment().format('MM');

export const CalendarEvents = [
    {
        backgroundColor: '#FFC400',
        borderColor: '#FFC400',
        title: '09:30 - 20:00 Awwwards 大会',
        start: curYear + '-' + curMonth + '-04',
        end: curYear + '-' + curMonth + '-06',
    },
    {
        backgroundColor: '#da82f8',
        borderColor: '#da82f8',
        title: 'caoba 团队会议',
        start: curYear + '-' + curMonth + '-13',
        end: curYear + '-' + curMonth + '-15'
    },
    {
        backgroundColor: '#da82f8',
        borderColor: '#da82f8',
        title: '与代表们的项目会议',
        start: curYear + '-' + curMonth + '-19'
    },
    {
        backgroundColor: '#298DFF',
        borderColor: '#298DFF',
        title: '会议',
        start: curYear + '-' + curMonth + '-11',
        end: curYear + '-' + curMonth + '-13'
    },
    {
        title: '回电给摩根·弗里曼',
        start: curYear + '-' + curMonth + '-27T10:30:00',
    },
    {
        title: '采购日',
        start: curYear + '-' + curMonth + '-27T12:00:00'
    },
    {
        title: '客户回访电话',
        start: curYear + '-' + curMonth + '-7T14:30:00'
    },
    {
        title: '客户回访电话',
        start: curYear + '-' + curMonth + '-07T07:00:00',
    },
    {
        title: '采购日',
        start: curYear + '-' + curMonth + '-02T07:00:00',
    },
    {
        backgroundColor: '#298DFF',
        borderColor: '#298DFF',
        title: '✈ 14:35 飞往印尼的航班',
        start: curYear + '-' + curMonth + '-13',
        // extendedProps: {
        //     toHtml: 'convert'
        // }
    },
    {
        backgroundColor: '#007D88',
        borderColor: '#007D88',
        title: "🎂 老板的生日",
        start: curYear + '-' + curMonth + '-29',
        // extendedProps: {
        //     toHtml: 'convert'
        // }
    }
];
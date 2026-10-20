// contact-list.js

// Import your avatar images
import avatar1 from '../../assets/img/avatar1.jpg';
import avatar2 from '../../assets/img/avatar2.jpg';
import avatar3 from '../../assets/img/avatar3.jpg';
import avatar7 from '../../assets/img/avatar7.jpg';
import avatar8 from '../../assets/img/avatar8.jpg';
import avatar9 from '../../assets/img/avatar9.jpg';
import avatar13 from '../../assets/img/avatar13.jpg';
import avatar15 from '../../assets/img/avatar15.jpg';

const contacts = [
  {
    id: 1,
    name: "摩根·弗里曼",
    avatar: { type: "img", src: avatar2 },
    time: "昨天",
    lastChat: "请发送一些演示文稿的概要",
    status: "Online",
    unread: 15,
  },
  {
    id: 2,
    name: "乌玛·瑟曼",
    avatar: { type: "img", src: avatar8 },
    time: "22:25",
    lastChat: "Typing",
    status: "Typing",
    unread: 0,
  },
  {
    id: 3,
    name: "查理·卓别林",
    avatar: { type: "img", src: avatar13 },
    time: "5分钟前",
    lastChat: "你好，谢谢你邀请我",
    status: "Active 6min ago",
    unread: 2,
  },
  {
    id: 4,
    name: "温斯顿·丘吉尔",
    initAvatar: { type: "init", title: "温", variant: "soft-danger" },
    time: "15:15",
    lastChat: "给我看看你还剩什么报告",
    status: "Active 8min ago",
    unread: 0,
  },
  {
    id: 5,
    name: "😐 办公看板",
    avatar: { type: "img", src: avatar1 },
    time: "昨天",
    lastChat: "乌玛：干得好 @jaquiline 你做得很棒",
    status: "Active 7min ago",
    unread: 0,
  },
  {
    id: 6,
    name: "宝贝老板",
    avatar: { type: "img", src: avatar15 },
    time: "5:23",
    lastChat: "早上开会",
    status: "Online",
    unread: 0,
  },
  {
    id: 7,
    name: "云翔",
    initAvatar: { type: "init", title: "云", variant: "primary" },
    time: "1月24日",
    lastChat: "把caoba的最新版本给我",
    status: "Active 1min ago",
    unread: 0,
  },
  {
    id: 8,
    name: "杰奎琳·乔克",
    avatar: { type: "img", src: avatar3 },
    time: "4:05",
    lastChat: "这是我的测试聊天最后一条消息",
    status: "Online",
    unread: 37,
  },
  {
    id: 9,
    name: "汤姆·克鲁斯",
    avatar: { type: "img", src: avatar7 },
    time: "19:40",
    lastChat: "未接来电",
    status: "Online",
    unread: 0,
  },
  {
    id: 10,
    name: "凯瑟琳·琼斯",
    avatar: { type: "img", src: avatar9 },
    time: "昨天",
    lastChat: "嗨！！！我想知道你是否空闲",
    status: "Active 2min ago",
    unread: 0,
  },
  {
    id: 11,
    name: "丹尼尔·克雷格",
    initAvatar: { type: "init", title: "丹", variant: "soft-info" },
    time: "15:15",
    lastChat: "老板在办公室找你",
    status: "Active 4min ago",
    unread: 0,
  },
];

export default contacts;

'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Button, Card, Col, Dropdown, Form, ListGroup, Nav, Row, Tab } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import * as Icons from 'react-feather';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { nanoid } from 'nanoid';
import classNames from 'classnames';
import HkInlineEdit from '@/components/@hk-editable-component/HkInlineEdit';
import HkAlert from '@/components/@hk-alert/@hk-alert';
import HkChips from '@/components/@hk-chips/@hk-chips';
import HkTooltip from '@/components/@hk-tooltip/HkTooltip';
import HkCollapse from '@/components/@hk-collapse/@hk-collapse';
import HkDropzone from '@/components/@hk-drop-zone/HkDropZone'


//Images
import avatar2 from '@/assets/img/avatar2.jpg';
import avatar3 from '@/assets/img/avatar3.jpg';
import avatar4 from '@/assets/img/avatar4.jpg';
import avatar5 from '@/assets/img/avatar5.jpg';
import avatar6 from '@/assets/img/avatar6.jpg';
import avatar7 from '@/assets/img/avatar7.jpg';
import avatar8 from '@/assets/img/avatar8.jpg';
import avatar13 from '@/assets/img/avatar13.jpg';
import thumb1 from '@/assets/img/img-thumb1.jpg';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


const TaskInfo = ({ close }) => {
    const [recipients, setRecipients] = useState(["Framework", "Html"]);
    const [checkList, setCheckList] = useState([
        { label: "Video conference with canada Team", checked: true, editable: false },
        { label: "Client objective meeting", checked: true, editable: false },
        { label: "Invite jaqueline on video conference", checked: false, editable: false },
    ]);
    const [teamCheckList, setTeamCheckList] = useState([
        { label: "Upgrade dependency on resources", checked: true, editable: false },
        { label: "Invite jaqueline on video conference", checked: false, editable: false },
    ]);

    const [newListLabel1, setnewListLabel1] = useState("");
    const [newListLabel2, setnewListLabel2] = useState("");
    const [showAddButton, setshowAddButton] = useState(true);
    const [newRecipient, setNewRecipient] = useState("");


    //Creating New Chips
    const handleRecipients = () => {
        setRecipients(recipients => recipients.concat(newRecipient));
    }
    const onEnter = ({ key }) => {
        if (key === "Enter") {
            handleRecipients();
            setNewRecipient("");
        }
    }

    //Handle CheckList Checkbox
    const handleCheck = (id, indx) => {
        if (id === "list1") {
            const newCheckList = [...checkList]
            newCheckList[indx].checked = !newCheckList[indx].checked
            setCheckList(newCheckList);
        }
        else if (id === "list2") {
            const newCheckList = [...teamCheckList]
            newCheckList[indx].checked = !newCheckList[indx].checked
            setTeamCheckList(newCheckList);
        }
    }
    //Update CheckList
    const updateCheckList = (id, index) => {
        if (id === "label1") {
            const newCheckLists = [...checkList]
            newCheckLists[index].label = newListLabel1;
            newCheckLists[index].editable = false;
            setCheckList(newCheckLists);
            setnewListLabel1("");
        }
        else if (id === "label2") {
            const newCheckLists = [...teamCheckList]
            newCheckLists[index].label = newListLabel2;
            newCheckLists[index].editable = false;
            setTeamCheckList(newCheckLists);
            setnewListLabel2("");
        };
        setshowAddButton(!showAddButton);
    }

    //add new CheckList
    const addItem = (id, event) => {
        event.preventDefault();
        if (id === "list-1") {
            const newItem = {
                id: nanoid(),
                label: "",
                checked: false,
                editable: true,
            }
            setCheckList([...checkList, newItem]);
        }
        else if (id === "list-2") {
            const newItem = {
                id: nanoid(),
                label: "",
                checked: false,
                editable: true,
            }
            setTeamCheckList([...teamCheckList, newItem])
        };

        setshowAddButton(!showAddButton);

    }

    //Delete CheckList
    const deleteItem = (id, itemId) => {
        if (id === "list1") {
            const newList = [...checkList];
            // const index = checkList.findIndex((item) => item.id === itemId);
            newList.splice(itemId, 1);
            setCheckList(newList);
        }
        else if (id === "list2") {
            const newList = [...teamCheckList];
            // const index = checkList.findIndex((item) => item.id === itemId);
            newList.splice(itemId, 1);
            setTeamCheckList(newList);
        };
    }

    //Apex chart options
    var options = {
        chart: {
            type: 'radialBar',
            width: 50,
            height: 50,
            sparkline: {
                enabled: true
            }
        },
        colors: ['#007D88'],
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: '80%'
                },
                track: {
                    margin: 0,
                    strokeWidth: '97%',
                },
            }
        },
        labels: ['8/12'],

    };
    const series = [85];

    return (
        <div className="task-info">
            <SimpleBar className="nicescroll-bar">
                <header className="task-header">
                    <div className="d-flex align-items-center">
                        <ReactApexChart options={options} series={series} type="radialBar" height={50} width={50} />
                        <Form.Check type="checkbox" className="mx-lg-3 ms-3" label="标记为已完成" id="customCheckcTask" defaultChecked />
                        <Button variant="flush-light" className="flush-outline-hover d-lg-inline-block d-none">
                            <span>
                                <span className="icon">
                                    <span className="feather-icon">
                                        <Icons.Link />
                                    </span>
                                </span>
                                <span>复制链接</span>
                            </span>
                        </Button>
                        <Button variant="light" className="btn-icon btn-rounded d-lg-none d-lg-inline-block ms-1">
                            <span>
                                <span className="icon">
                                    <span className="feather-icon">
                                        <Icons.Link />
                                    </span>
                                </span>
                            </span>
                        </Button>
                    </div>
                    <div className="task-options-wrap">
                        <span className="task-star marked">
                            <span className="feather-icon">
                                <Icons.Star />
                            </span>
                        </span>
                        <Dropdown>
                            <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret ms-1" >
                                <span className="icon">
                                    <span className="feather-icon">
                                        <Icons.MoreVertical />
                                    </span>
                                </span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end" >
                                <Dropdown.Header>操作</Dropdown.Header>
                                <Dropdown.Item>
                                    <span className="feather-icon dropdown-icon">
                                        <Icons.Edit />
                                    </span>
                                    <span>分配给</span>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <span className="feather-icon dropdown-icon">
                                        <Icons.User />
                                    </span>
                                    <span>附加文件</span>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <span className="feather-icon dropdown-icon">
                                        <Icons.Paperclip />
                                    </span>
                                    <span>应用标签</span>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <span className="feather-icon dropdown-icon">
                                        <Icons.Tag />
                                    </span>
                                    <span>设置截止日期</span>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <span className="feather-icon dropdown-icon">
                                        <Icons.Calendar />
                                    </span>
                                    <span>关注任务</span>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <span className="feather-icon dropdown-icon">
                                        <Icons.Bookmark />
                                    </span>
                                    <span>设置截止日期</span>
                                </Dropdown.Item>
                                <div className="dropdown-divider" />
                                <Dropdown.Item>
                                    <span className="feather-icon dropdown-icon">
                                        <Icons.ArrowUp />
                                    </span>
                                    <span>设为最高优先级</span>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <span className="feather-icon dropdown-icon">
                                        <Icons.Repeat />
                                    </span>
                                    <span>更改状态</span>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <span className="feather-icon dropdown-icon">
                                        <Icons.Pocket />
                                    </span>
                                    <span>保存为模板</span>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <span className="feather-icon dropdown-icon">
                                        <Icons.Archive />
                                    </span>
                                    <span>移到归档</span>
                                </Dropdown.Item>
                                <Dropdown.Item className="delete-task">
                                    <span className="feather-icon dropdown-icon">
                                        <Icons.Trash2 />
                                    </span>
                                    <span>删除</span></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover close-task-info" onClick={close} >
                            <span className="icon">
                                <span className="feather-icon">
                                    <Icons.X />
                                </span>
                            </span>
                        </Button>
                    </div>
                </header>
                <div className="task-detail-body">
                    <HkAlert variant="primary" className="alert-wth-icon">
                        <span className="alert-icon-wrap"><span className="feather-icon"><i className="zmdi zmdi-lock" /></span></span> 此任务仅对 caoba 团队可见
                    </HkAlert>

                    <HkInlineEdit as="h4" id="editable1" className="fw-bold mb-0" value="框架构建" />
                    <HkInlineEdit as="p" id="editable2" className="mb-0" value="开发期间即时重建资源" />

                    <div className="avatar-group avatar-group avatar-group-overlapped mt-3">
                        <div className="avatar avatar-rounded">
                            <HkTooltip title="凯瑟琳" placement="top" >
                                <Image src={avatar8} alt="user" className="avatar-img" />
                            </HkTooltip>
                        </div>
                        <div className="avatar avatar-rounded">
                            <HkTooltip title="迪恩" placement="top" >
                                <Image src={avatar13} alt="user" className="avatar-img" />
                            </HkTooltip>
                        </div>
                        <div className="avatar avatar-xs avatar-soft-danger avatar-rounded">
                            <HkTooltip title="汤姆" placement="top" >
                                <span className="initial-wrap">T</span>
                            </HkTooltip>
                        </div>
                        <div className="avatar avatar-rounded">
                            <HkTooltip title="摩根" placement="top" >
                                <Image src={avatar2} alt="user" className="avatar-img" />
                            </HkTooltip>
                        </div>
                        <div className="avatar avatar-icon avatar-primary avatar-rounded">
                            <HkTooltip title="新增" placement="top" >
                                <span className="initial-wrap">
                                    <span className="feather-icon">
                                        <Icons.Plus />
                                    </span>
                                </span>
                            </HkTooltip>
                        </div>
                    </div>
                    <Form as={Row} >
                        <Col md={6}>
                            <div className="title title-wth-divider my-4">
                                <span>截止日期</span>
                            </div>
                            <DateRangePicker
                                initialSettings={{
                                    singleDatePicker: true,
                                    timePicker: true,
                                    showDropdowns: true,
                                    startDate: new Date(),
                                    locale: {
                                        format: 'M/DD/YYYY hh:mm A',
                                    },
                                }}
                            >
                                <Form.Control type="text" name="single-date" />
                            </DateRangePicker>
                        </Col>
                        <Col md={6}>
                            <div className="title title-wth-divider my-4"><span>状态</span></div>
                            <Dropdown>
                                <Dropdown.Toggle variant="warning" className="btn-rounded dropdown-toggle">进行中</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>操作</Dropdown.Item>
                                    <Dropdown.Item>其他操作</Dropdown.Item>
                                    <Dropdown.Item>其他选项</Dropdown.Item>
                                    <Dropdown.Divider as="div" />
                                    <Dropdown.Item>分隔链接</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col md={12}>
                            <div className="title title-wth-divider my-4"><span>标签</span></div>
                            <div className="d-flex flex-wrap">
                                {recipients.map((data, i) => (
                                    <HkChips key={i} className="mb-2 me-2" variant="outline-secondary" dismissable >
                                        {data}
                                    </HkChips>
                                ))}
                                <Form.Control type="text" className="border-0 p-0 shadow-none flex-1 mb-2 me-2" placeholder="添加标签" value={newRecipient} onChange={e => setNewRecipient(e.target.value)} onKeyPress={onEnter} />
                            </div>
                        </Col>
                    </Form>
                    <Tab.Container defaultActiveKey="checklist" >
                        <Nav justify className="nav-light nav-tabs nav-segmented-tabs active-theme mt-4">
                            <Nav.Item>
                                <Nav.Link eventKey="checklist">
                                    <span className="nav-link-text">清单</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="comments">
                                    <span className="nav-link-text badge-on-text">评论</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="files">
                                    <span className="nav-link-text badge-on-text">文件</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="activity">
                                    <span className="nav-link-text badge-on-text">动态</span>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content className="mt-7">
                            <Tab.Pane eventKey="checklist">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div className="title title-lg mb-0"><span>清单</span></div>
                                    <a href="#some" className="btn btn-xs btn-icon btn-rounded btn-light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="添加分类"><span className="icon"><span className="feather-icon"><Icons.Plus /> </span></span></a>
                                </div>
                                <div className="hk-checklist">

                                    {checkList.map((data, index) => (
                                        <Form.Check key={index} id={`check_${index}`} >
                                            <Form.Check.Input type="checkbox" checked={data.checked} onChange={() => handleCheck("list1", index)} />
                                            {!data.editable ?
                                                <Form.Check.Label htmlFor={`check_${index}`}>
                                                    {data.label}
                                                    <span className="done-strikethrough" />
                                                </Form.Check.Label>
                                                :
                                                <Form.Check.Label className="mb-3" >
                                                    <Form.Control className="checklist-input" type="text" placeholder="添加新条目" value={newListLabel1} onChange={e => setnewListLabel1(e.target.value)} onKeyPress={e => { if (e.key === "Enter") updateCheckList("label1", index) }} autoFocus />
                                                </Form.Check.Label>
                                            }
                                            <Link href="#" className="btn btn-xs btn-icon btn-rounded btn-flush-light flush-soft-hover delete-checklist" onClick={() => deleteItem("list1", index)} >
                                                <span className="icon">
                                                    <span className="feather-icon">
                                                        <Icons.Trash2 />
                                                    </span>
                                                </span>
                                            </Link>
                                        </Form.Check>
                                    ))}
                                    {showAddButton && <Link href="#" className={classNames("d-flex align-items-center add-new-checklist")} onClick={e => addItem("list-1", e)}>
                                        <span className="feather-icon fe-x me-2"><Icons.PlusSquare /> </span>
                                        <span>新条目</span>
                                    </Link>}
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="title title-wth-divider flex-grow-1 my-4 me-2"><span>加拿大团队任务</span></div>
                                    <div>
                                        <a href="#some" className="btn btn-xs btn-icon btn-rounded btn-flush-light flush-soft-hover delete-checklist" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="编辑"><span className="icon"><span className="feather-icon">
                                            <Icons.Edit2 />
                                        </span></span></a>
                                        <a href="#some" className="btn btn-xs btn-icon btn-rounded btn-flush-light flush-soft-hover delete-checklist"><span className="icon"><span className="feather-icon"><Icons.Trash2 /></span></span></a>
                                    </div>
                                </div>
                                <div className="hk-checklist">
                                    {teamCheckList.map((data, index) => (
                                        <Form.Check key={index} id={`check_${index}_team`} >
                                            <Form.Check.Input type="checkbox" checked={data.checked} onChange={() => handleCheck("list2", index)} />
                                            {!data.editable ?
                                                <Form.Check.Label htmlFor={`check_${index}_team`}>
                                                    {data.label}
                                                    <span className="done-strikethrough" />
                                                </Form.Check.Label>
                                                :
                                                <Form.Check.Label className="mb-3" >
                                                    <Form.Control className="checklist-input" type="text" placeholder="添加新条目" value={newListLabel2} onChange={e => setnewListLabel2(e.target.value)} onKeyPress={e => { if (e.key === "Enter") updateCheckList("label2", index) }} autoFocus />
                                                </Form.Check.Label>
                                            }
                                            <Link href="#" className="btn btn-xs btn-icon btn-rounded btn-flush-light flush-soft-hover delete-checklist" onClick={() => deleteItem("list2", index)} >
                                                <span className="icon">
                                                    <span className="feather-icon">
                                                        <Icons.Trash2 />
                                                    </span>
                                                </span>
                                            </Link>
                                        </Form.Check>
                                    ))}
                                    {showAddButton && <Link href="#" className={classNames("d-flex align-items-center add-new-checklist")} onClick={e => addItem("list-2", e)}>
                                        <span className="feather-icon fe-x me-2"><Icons.PlusSquare /> </span>
                                        <span>新条目</span>
                                    </Link>}

                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-5 mb-2">
                                    <div className="title title-lg mb-0"><span>备注</span></div>
                                    <a href="#some" className="btn btn-xs btn-icon btn-rounded btn-light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="添加分类"><span className="icon"><span className="feather-icon"><Icons.Plus /> </span></span></a>
                                </div>
                                <div className="card card-border note-block bg-orange-light-5">
                                    <Card.Body>
                                        <div className="card-action-wrap">
                                            <Dropdown>
                                                <Dropdown.Toggle size="xs" variant="flus-soft" className="btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret"><span className="icon">
                                                    <span className="feather-icon">
                                                        <Icons.MoreVertical />
                                                    </span>
                                                </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end" >
                                                    <Dropdown.Item>Action</Dropdown.Item>
                                                    <Dropdown.Item>Another action</Dropdown.Item>
                                                    <Dropdown.Item>Something else here</Dropdown.Item>
                                                    <Dropdown.Divider as="div" />
                                                    <Dropdown.Item>Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="media align-items-center">
                                            <div className="media-head">
                                                <div className="avatar avatar-xs avatar-rounded">
                                                    <Image src={avatar2} alt="user" className="avatar-img" />
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <div>马丁·路德</div>
                                                <div>2020年4月9日 7:14</div>
                                            </div>
                                        </div>
                                        <p>@<a href="#some" className="fw-medium">查理·达尔文</a> 从这里开始，你可以运行 grunt compile、grunt migrate 和 grunt test 来编译合约、将这些合约部署到网络，并运行相关的单元测试。</p>
                                    </Card.Body>
                                </div>
                                <div className="card card-border note-block bg-orange-light-5">
                                    <Card.Body>
                                        <div className="card-action-wrap">
                                            <Dropdown>
                                                <Dropdown.Toggle size="xs" variant="flus-soft" className="btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret"><span className="icon">
                                                    <span className="feather-icon">
                                                        <Icons.MoreVertical />
                                                    </span>
                                                </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end" >
                                                    <Dropdown.Item>Action</Dropdown.Item>
                                                    <Dropdown.Item>Another action</Dropdown.Item>
                                                    <Dropdown.Item>Something else here</Dropdown.Item>
                                                    <Dropdown.Divider as="div" />
                                                    <Dropdown.Item>Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="media align-items-center">
                                            <div className="media-head">
                                                <div className="avatar avatar-xs avatar-rounded">
                                                    <Image src={avatar3} alt="user" className="avatar-img" />
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <div>凯瑟琳·琼斯</div>
                                                <div>2020年4月8日 17:30</div>
                                            </div>
                                        </div>
                                        <p>@<a href="#some" className="fw-medium">马丁·路德</a> &ldquo;Appear view&rdquo; 链接文本的对比度为 3.7:1，低于要求</p>
                                    </Card.Body>
                                </div>
                                <a href="#some" className="btn btn-outline-light btn-block">查看更多</a>
                            </Tab.Pane>
                            <Tab.Pane eventKey="comments">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div className="title title-lg mb-0"><span>3 条回复</span></div>
                                    <a href="#some" className="btn btn-xs btn-icon btn-rounded btn-light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="添加看板"><span className="icon"><span className="feather-icon"><Icons.Plus /> </span></span></a>
                                </div>
                                <div className="comment-block">
                                    <div className="media">
                                        <div className="media-head">
                                            <div className="avatar avatar-xs avatar-rounded">
                                                <Image src={avatar4} alt="user" className="avatar-img" />
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <div>
                                                <span className="cm-name">马丁·路德</span>
                                                <span className="badge badge-soft-violet">经理</span>
                                            </div>
                                            <p>@<a href="#some" className="fw-medium">查理·达尔文</a> 从这里开始，你可以运行 truffle compile、truffle migrate 和 truffle test 来编译合约、将这些合约部署到网络，并运行相关的单元测试。</p>
                                            <div className="comment-action-wrap mt-3">
                                                <span>3 小时前</span>
                                                <span className="comment-dot-sep">●</span>
                                                <a href="#some">回复</a>
                                                <span className="comment-dot-sep">●</span>
                                                <a href="#some">点赞</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="separator separator-light" />
                                    <div className="media">
                                        <div className="media-head">
                                            <div className="avatar avatar-xs avatar-rounded">
                                                <Image src={avatar2} alt="user" className="avatar-img" />
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <div>
                                                <span className="cm-name">凯瑟琳·琼斯</span>
                                            </div>
                                            <p>精美的动态作品由 @<a href="#some" className="fw-medium">艾什顿·库彻</a> 完成</p>
                                            <div className="comment-action-wrap mt-3">
                                                <span>3 小时前</span>
                                                <span className="comment-dot-sep">●</span>
                                                <a href="#some">回复</a>
                                                <span className="comment-dot-sep">●</span>
                                                <a href="#some">点赞</a>
                                            </div>
                                            <div className="media">
                                                <div className="media-head">
                                                    <div className="avatar avatar-xs avatar-rounded">
                                                        <Image src={avatar3} alt="user" className="avatar-img" />
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    <div>
                                                        <span className="cm-name">艾什顿·库彻</span>
                                                        <span className="badge badge-soft-danger">设计师</span>
                                                    </div>
                                                    <p>@<a href="#some" className="fw-medium">凯瑟琳·琼斯</a> 谢谢 :)</p>
                                                    <div className="comment-action-wrap mt-3">
                                                        <span>3 hours ago</span>
                                                        <span className="comment-dot-sep">●</span>
                                                        <a href="#some">Reply</a>
                                                        <span className="comment-dot-sep">●</span>
                                                        <a href="#some">Like</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="separator separator-light" />
                                    <form>
                                        <div className="form-group">
                                            <label className="form-label">添加评论</label>
                                            <textarea className="form-control" rows={5} />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <button className="btn btn-primary">发送</button>
                                            <small className="form-text text-muted mt-0">支持基础 HTML 语法</small>
                                        </div>
                                    </form>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="files">
                                <Row>
                                    <Col sm>
                                        <HkDropzone>
                                            将文件拖放到此处上传
                                        </HkDropzone>
                                    </Col>
                                </Row>
                                <div className="mt-5 mb-2">
                                    <div className="title title-lg mb-0"><span>共享文件</span></div>
                                </div>
                                <div className="file-block">
                                    <div className="collapse-simple">
                                        <HkCollapse
                                            bsPrefix="a"
                                            href="#"
                                            targetId="files_collapse_1"
                                            title="Yesterday"
                                            collapsed={false}
                                        >
                                            <ul className="sh-files">
                                                <li>
                                                    <div className="media">
                                                        <div className="media-head">
                                                            <div className="avatar avatar-icon avatar-sm avatar-soft-blue">
                                                                <span className="initial-wrap fs-3">
                                                                    <i className="ri-file-excel-2-fill" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <div>
                                                                <p className="file-name">website_content.exl</p>
                                                                <p className="file-size">2,635 KB</p>
                                                            </div>
                                                            <div>
                                                                <div className="avatar avatar-xs avatar-rounded me-2">
                                                                    <Image src={avatar2} alt="user" className="avatar-img" />
                                                                </div>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle size="sm" variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret">
                                                                        <span className="icon">
                                                                            <span className="feather-icon">
                                                                                <Icons.MoreVertical />
                                                                            </span>
                                                                        </span>
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu align="end" >
                                                                        <Dropdown.Item className="ms-0">下载</Dropdown.Item>
                                                                        <Dropdown.Item className="ms-0 link-danger">删除</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="media">
                                                        <div className="media-head">
                                                            <div className="avatar avatar-icon avatar-sm avatar-soft-light">
                                                                <span className="initial-wrap fs-3">
                                                                    <i className="ri-file-text-fill" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <div>
                                                                <p className="file-name">caoba.pdf</p>
                                                                <p className="file-size">1.3 GB</p>
                                                            </div>
                                                            <div>
                                                                <div className="avatar avatar-xs avatar-rounded me-2">
                                                                    <Image src={avatar3} alt="user" className="avatar-img" />
                                                                </div>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle size="sm" variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret">
                                                                        <span className="icon">
                                                                            <span className="feather-icon">
                                                                                <Icons.MoreVertical />
                                                                            </span>
                                                                        </span>
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu align="end" >
                                                                        <Dropdown.Item className="ms-0">下载</Dropdown.Item>
                                                                        <Dropdown.Item className="ms-0 link-danger">删除</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="media">
                                                        <div className="media-head">
                                                            <div className="avatar avatar-icon avatar-sm avatar-soft-warning">
                                                                <span className="initial-wrap fs-3">
                                                                    <i className="ri-file-zip-fill" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <div>
                                                                <p className="file-name">caoba.zip</p>
                                                                <p className="file-size">2.45 GB</p>
                                                            </div>
                                                            <div>
                                                                <div className="avatar avatar-xs avatar-soft-danger avatar-rounded me-2">
                                                                    <span className="initial-wrap">H</span>
                                                                </div>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle size="sm" variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret">
                                                                        <span className="icon">
                                                                            <span className="feather-icon">
                                                                                <Icons.MoreVertical />
                                                                            </span>
                                                                        </span>
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu align="end" >
                                                                        <Dropdown.Item className="ms-0">下载</Dropdown.Item>
                                                                        <Dropdown.Item className="ms-0 link-danger">删除</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="media">
                                                        <div className="media-head">
                                                            <div className="avatar avatar-logo avatar-sm">
                                                                <span className="initial-wrap">
                                                                    <Image src={avatar2} alt="user" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <div>
                                                                <p className="file-name">bruce-mars-fiEG-Pk6ZASFPk6ZASF</p>
                                                                <p className="file-size">4,178 KB</p>
                                                            </div>
                                                            <div>
                                                                <div className="avatar avatar-xs avatar-rounded me-2">
                                                                    <Image src={avatar5} alt="user" className="avatar-img" />
                                                                </div>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle size="sm" variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret">
                                                                        <span className="icon">
                                                                            <span className="feather-icon">
                                                                                <Icons.MoreVertical />
                                                                            </span>
                                                                        </span>
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu align="end" >
                                                                        <Dropdown.Item className="ms-0">下载</Dropdown.Item>
                                                                        <Dropdown.Item className="ms-0 link-danger">删除</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="media">
                                                        <div className="media-head">
                                                            <div className="avatar avatar-logo avatar-sm">
                                                                <span className="initial-wrap">
                                                                    <Image src={avatar2} alt="user" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <div>
                                                                <p className="file-name">jonas-kakaroto-KIPqvvTKIPqvvT</p>
                                                                <p className="file-size">951 KB</p>
                                                            </div>
                                                            <div>
                                                                <div className="avatar avatar-xs avatar-rounded me-2">
                                                                    <Image src={avatar6} alt="user" className="avatar-img" />
                                                                </div>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle size="sm" variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret">
                                                                        <span className="icon">
                                                                            <span className="feather-icon">
                                                                                <Icons.MoreVertical />
                                                                            </span>
                                                                        </span>
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu align="end" >
                                                                        <Dropdown.Item className="ms-0">下载</Dropdown.Item>
                                                                        <Dropdown.Item className="ms-0 link-danger">删除</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </HkCollapse>
                                        <HkCollapse
                                            bsPrefix="a"
                                            href="#"
                                            targetId="files_collapse_2"
                                            title="23 April"
                                            collapsed={false}
                                        >
                                            <ul className="sh-files">
                                                <li>
                                                    <div className="media">
                                                        <div className="media-head">
                                                            <div className="avatar avatar-icon avatar-sm avatar-soft-light">
                                                                <span className="initial-wrap fs-3">
                                                                    <i className="ri-keynote-fill" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <div>
                                                                <p className="file-name">presentation.keynote</p>
                                                                <p className="file-size">20 KB</p>
                                                            </div>
                                                            <div>
                                                                <div className="avatar avatar-xs avatar-rounded me-2">
                                                                    <Image src={avatar5} alt="user" className="avatar-img" />
                                                                </div>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle size="sm" variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret">
                                                                        <span className="icon">
                                                                            <span className="feather-icon">
                                                                                <Icons.MoreVertical />
                                                                            </span>
                                                                        </span>
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu align="end" >
                                                                        <Dropdown.Item className="ms-0">下载</Dropdown.Item>
                                                                        <Dropdown.Item className="ms-0 link-danger">删除</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="media">
                                                        <div className="media-head">
                                                            <div className="avatar avatar-icon avatar-sm avatar-soft-warning">
                                                                <span className="initial-wrap fs-3">
                                                                    <i className="ri-file-zip-fill" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <div>
                                                                <p className="file-name">PACK-TRIAL.zip</p>
                                                                <p className="file-size">2.45 GB</p>
                                                            </div>
                                                            <div>
                                                                <div className="avatar avatar-xs avatar-rounded me-2">
                                                                    <Image src={avatar2} alt="user" className="avatar-img" />
                                                                </div>
                                                                <a href="#some" className="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" data-bs-toggle="dropdown"><span className="icon">
                                                                    <span className="feather-icon">
                                                                        <Icons.MoreVertical /></span></span></a>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <a className="dropdown-item ms-0" href="#some">Download</a>
                                                                    <a className="dropdown-item ms-0" href="#some">Delete</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="media">
                                                        <div className="media-head">
                                                            <div className="avatar avatar-sm">
                                                                <Image src={thumb1} alt="user" className="avatar-img" />
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <div>
                                                                <p className="file-name">joel-mott-LaK153ghdigaghdi</p>
                                                                <p className="file-size">3,028 KB</p>
                                                            </div>
                                                            <div>
                                                                <div className="avatar avatar-xs avatar-rounded me-2">
                                                                    <Image src={avatar8} alt="user" className="avatar-img" />
                                                                </div>
                                                                <a href="#some" className="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" data-bs-toggle="dropdown"><span className="icon">
                                                                    <span className="feather-icon">
                                                                        <Icons.MoreVertical /></span></span></a>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <a className="dropdown-item ms-0" href="#some">Download</a>
                                                                    <a className="dropdown-item ms-0" href="#some">Delete</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </HkCollapse>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="activity">
                                <div className="mt-5 mb-2">
                                    <div className="title title-lg mb-0"><span>Latest activity</span></div>
                                </div>
                                <div className="collapse-simple">
                                    <HkCollapse
                                        bsPrefix="a"
                                        href="#"
                                        targetId="activity_1"
                                        title="Today"
                                        collapsed={false}
                                    >
                                        <ListGroup as="ul" variant="flush" className="activity-list">
                                            <ListGroup.Item as="li">
                                                <div className="media">
                                                    <div className="media-head">
                                                        <div className="avatar avatar-sm avatar-primary avatar-rounded">
                                                            <span className="initial-wrap">Cb</span>
                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <p><span className="text-dark">caoba</span> on Documentation link is working now - <a href="#some" className="link-url"><u>ttps://caoba.com/theme/jampa</u></a></p>
                                                        <div className="last-activity-time">Oct 15, 2021, 12:34 PM</div>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item as="li">
                                                <div className="media">
                                                    <div className="media-head">
                                                        <div className="avatar avatar-sm avatar-rounded">
                                                            <Image src={avatar2} alt="user" className="avatar-img" />
                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <p><span className="text-dark">Morgan Fregman</span> completed react conversion of <a href="#some" className="link-default"><u>components</u></a></p>
                                                        <div className="last-activity-time">Sep 16, 2021, 4:54 PM</div>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item as="li">
                                                <div className="media">
                                                    <div className="media-head">
                                                        <div className="avatar avatar-sm avatar-rounded">
                                                            <Image src={avatar13} alt="user" className="avatar-img" />
                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <p><span className="text-dark">Jimmy Carry</span>completed side bar menu on <a href="#some" className="link-default"><u>elements</u></a></p>
                                                        <div className="last-activity-time">Sep 10, 2021, 10:13 AM</div>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item as="li">
                                                <div className="media">
                                                    <div className="media-head">
                                                        <div className="avatar avatar-sm avatar-rounded">
                                                            <Image src={avatar7} alt="user" className="avatar-img" />
                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <p><span className="text-dark">Charlie Chaplin</span> deleted empty cards on <a href="#some" className="link-default"><u>completed</u></a></p>
                                                        <div className="last-activity-time">Sep 10, 2021, 10:13 AM</div>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </HkCollapse>
                                    <HkCollapse
                                        bsPrefix="a"
                                        href="#"
                                        targetId="activity_2"
                                        title="Yesterday"
                                        collapsed={false}
                                    >
                                        <ListGroup as="ul" variant="flush" className="activity-list">
                                            <ListGroup.Item as="li">
                                                <div className="media">
                                                    <div className="media-head">
                                                        <div className="avatar avatar-sm avatar-soft-danger avatar-rounded">
                                                            <span className="initial-wrap">W</span>
                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <p><span className="text-dark">Winston Churchills</span> created a note on UI components task list</p>
                                                        <div className="last-activity-time">Sep 2, 2021, 9:23 AM</div>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item as="li">
                                                <div className="media">
                                                    <div className="media-head">
                                                        <div className="avatar avatar-sm avatar-rounded">
                                                            <Image src={avatar2} alt="user" className="avatar-img" />
                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <p><span className="text-dark">Morgan Fregman</span> completed react conversion of <a href="#some" className="link-default"><u>components</u></a></p>
                                                        <div className="last-activity-time">Sep 16, 2021, 4:54 PM</div>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item as="li">
                                                <div className="media">
                                                    <div className="media-head">
                                                        <div className="avatar avatar-sm avatar-rounded">
                                                            <Image src={avatar13} alt="user" className="avatar-img" />
                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <p><span className="text-dark">Jimmy Carry</span>added shared components to <a href="#some" className="link-default"><u>basic structure</u></a></p>
                                                        <div className="last-activity-time">Sep 10, 2021, 10:13 AM</div>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item as="li">
                                                <div className="media">
                                                    <div className="media-head">
                                                        <div className="avatar avatar-sm avatar-primary avatar-rounded">
                                                            <span className="initial-wrap">Cb</span>
                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <p><span className="text-dark">caoba</span> commented on <a href="#some" className="link-default"><u>basic structure</u></a></p>
                                                        <div className="last-activity-time">Sep 10, 2021, 10:13 AM</div>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item as="li">
                                                <div className="media">
                                                    <div className="media-head">
                                                        <div className="avatar avatar-sm avatar-rounded">
                                                            <Image src={avatar7} alt="user" className="avatar-img" />
                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <p><span className="text-dark">Charlie Chaplin</span> moved components from all modules to in progress</p>
                                                        <div className="last-activity-time">Sep 10, 2021, 10:13 AM</div>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item as="li">
                                                <div className="media">
                                                    <div className="media-head">
                                                        <div className="avatar avatar-sm avatar-soft-danger avatar-rounded">
                                                            <span className="initial-wrap">W</span>
                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <p><span className="text-dark">Winston Churchills</span> created a note on UI components task list</p>
                                                        <div className="last-activity-time">Sep 10, 2021, 10:13 AM</div>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </HkCollapse>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </SimpleBar>
        </div>
    )
}

export default TaskInfo

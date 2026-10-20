import React, { useState } from 'react'
import classNames from 'classnames';
import { Draggable, Droppable } from '@hello-pangea/dnd';
import { Button, Card, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { MoreHorizontal, Plus, } from 'react-feather';
import Task from './Task';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import PerfectScrollbar from 'react-perfect-scrollbar';
import HkBadge from '../../../components/@hk-badge/@hk-badge';


const Cards = (props) => {

    const [renameBoard, setRenameBoard] = useState(false);
    const [newBoardName, setNewBoardName] = useState("");
    const [addNewCard, setAddNewCard] = useState(false);
    const [newCardName, setNewCardName] = useState("");

    const handleRename = () => {
        setNewBoardName(props.card?.title);
        setRenameBoard(!renameBoard);
    }

    const onRenameBoard = () => {
        props.renameBoard(props.card.id, newBoardName)
        setRenameBoard(false);
    }


    const onSaveTask = (content) => {
        props.onAddNewTask(props.card?.id, newCardName);
        setNewCardName("");
        setAddNewCard(!addNewCard);
    };

    return (
        <>
            <Draggable draggableId={props.card.id} index={props.index}>
                {(provided) => (
                    <Card
                        className={classNames("card-simple card-border tasklist")}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        id={props.card.id}
                    >
                        <Card.Header
                            className="card-header-action"
                            {...provided.dragHandleProps}
                        >
                            <div className="tasklist-handle">
                                <h6 className="text-uppercase fw-bold  d-flex align-items-center mb-0">
                                    <span className="tasklist-name">{props.card.title}</span>
                                    <HkBadge bg="violet" soft pill className="ms-2">{props.card.taskIds.length}</HkBadge>
                                </h6>
                                <div className="card-action-wrap">
                                    <Dropdown>
                                        <Dropdown.Toggle as="a" href="#" className="btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret" >
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <MoreHorizontal />
                                                </span>
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu align="end">
                                            <Dropdown.Item className="edit-tasklist" onClick={handleRename} >编辑</Dropdown.Item>
                                            <Dropdown.Item className="delete-tasklist" onClick={() => props.onRemoveBoard(props.card.id)} >删除</Dropdown.Item>
                                            <Dropdown.Item className="clear-tasklist" onClick={() => props.clearBoard(props.card.id)} >清除全部</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <Button variant="white" className="btn-block btn-add-newtask" onClick={() => setAddNewCard(!addNewCard)}  >
                                <span>
                                    <span className="icon" >
                                        <span className="feather-icon">
                                            <Plus />
                                        </span>
                                    </span>
                                </span>
                            </Button>
                        </Card.Header>

                        <Card.Body as={PerfectScrollbar} >    {/* className="tasklist-cards-wrap custom-scroll" */}
                            <Droppable droppableId={props.card.id} type="task">
                                {(provided, snapshot) => (
                                    <>
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        // isDraggingOver={snapshot.isDraggingOver}
                                        >
                                            {/* <div className="tasklist-cards-wrap"> */}
                                            {props.tasks.map((task, index) => (
                                                <Task
                                                    key={task.id}
                                                    task={task}
                                                    index={index}
                                                    cardId={props.card.id}
                                                    onRemoveTask={props.onRemoveTask}
                                                />

                                            ))}
                                            {/* </div> */}
                                        </div>

                                        {provided.placeholder}
                                    </>
                                )}
                            </Droppable>
                        </Card.Body>
                    </Card>
                )}
            </Draggable>

            {/* Board Rename */}
            <Modal Modal show={renameBoard} onHide={() => setRenameBoard(!renameBoard)} size="sm" centered >
                <Modal.Body>
                    <Button bsPrefix="btn-close" onClick={() => setRenameBoard(!renameBoard)} >
                        <span aria-hidden="true">×</span>
                    </Button>
                    <h5 className="mb-4">编辑任务列表</h5>
                    <Form>
                        <Row className="gx-3">
                            <Col sm={12}>
                                <Form.Group>
                                    <Form.Label>名称</Form.Label>
                                    <Form.Control type="text" value={newBoardName} onChange={e => setNewBoardName(e.target.value)} />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <div className="modal-footer align-items-center">
                    <Button variant="secondary" onClick={() => setRenameBoard(!renameBoard)} >取消</Button>
                    <Button variant="primary" className="btn-add-tasklist" onClick={onRenameBoard} >添加</Button>
                </div>
            </Modal >

            {/* Add New Task */}
            <Modal show={addNewCard} onHide={() => setAddNewCard(!addNewCard)} >
                <Modal.Body>
                    <Button bsPrefix="btn-close" onClick={() => setAddNewCard(!addNewCard)}>
                        <span aria-hidden="true">×</span>
                    </Button>
                    <h5 className="mb-4">新建卡片</h5>
                    <Form>
                        <Row className="gx-3">
                            <Col sm={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>名称</Form.Label>
                                    <Form.Control className="task-name" type="text" name="Task_Name" value={newCardName} onChange={e => setNewCardName(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col sm={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>开始日期</Form.Label>
                                    <DateRangePicker
                                        initialSettings={{
                                            singleDatePicker: true,
                                            showDropdowns: true,
                                            startDate: new Date(),
                                        }}
                                    >
                                        <Form.Control name=" single-date-pick" type="text" />
                                    </DateRangePicker>
                                </Form.Group>
                            </Col>
                            <Col sm={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>结束日期</Form.Label>
                                    <DateRangePicker
                                        initialSettings={{
                                            singleDatePicker: true,
                                            showDropdowns: true,
                                            startDate: new Date(),
                                        }}
                                    >
                                        <Form.Control name=" single-date-pick2" type="text" />
                                    </DateRangePicker>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>备注/描述</Form.Label>
                                    <Form.Control as='textarea' rows={3} />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group className="mt-3">
                                    <Form.Label className="me-3" >设置优先级：</Form.Label>
                                    <Form.Check
                                        inline
                                        label="高"
                                        name="group1"
                                        type="radio"
                                        id="check1"
                                    />
                                    <Form.Check
                                        inline
                                        label="中"
                                        name="group1"
                                        type="radio"
                                        id="check2"
                                    />
                                    <Form.Check
                                        inline
                                        label="低"
                                        name="group1"
                                        type="radio"
                                        id="check3"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="align-items-center">
                    <Button variant="secondary" onClick={() => setAddNewCard(!addNewCard)} >取消</Button>
                    <Button variant="primary" onClick={onSaveTask} >添加</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Cards

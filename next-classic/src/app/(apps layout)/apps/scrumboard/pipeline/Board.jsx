'use client';
import { useState } from 'react';
import { Button, Card, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { MoreHorizontal, Plus } from 'react-feather';
import { Draggable, Droppable } from '@hello-pangea/dnd';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import HkDropZone from '@/components/@hk-drop-zone/HkDropZone';
import Task from './Task';

const Board = (props) => {

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
                        className="card-simple card-flush spipeline-list"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        id={props.card.id}
                    >
                        <Card.Header
                            className="card-header-action"
                            {...provided.dragHandleProps}
                        >
                            <div className="spipeline-handle">
                                <h6 className="text-uppercase fw-bold mb-0">{props.card.title}</h6>
                                <div className="card-action-wrap">
                                    <Dropdown as="a">
                                        <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret">
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <MoreHorizontal />
                                                </span>
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu align="end">
                                            <Dropdown.Item className="edit-tasklist" onClick={handleRename}>编辑</Dropdown.Item>
                                            <Dropdown.Item className="delete-tasklist" onClick={() => props.onRemoveBoard(props.card.id)}>删除</Dropdown.Item>
                                            <Dropdown.Item className="clear-tasklist" onClick={() => props.clearBoard(props.card.id)}>清除全部</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div>
                                <span>
                                    <span className="overall-estimation">
                                        $123,453
                                    </span>
                                    <span className="spipeline-dot-sep">●</span>
                                    <span className="lead-count">
                                        {props.card.taskIds.length} 条线索
                                    </span>
                                </span>
                            </div>
                            <Button variant="light" className="btn-block text-primary btn-add-newtask" onClick={() => setAddNewCard(!addNewCard)} >
                                <span>
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <Plus />
                                        </span>
                                    </span>
                                    <span className="btn-text">新建卡片</span>
                                </span>
                            </Button>
                        </Card.Header>
                        <Card.Body>

                            <Droppable droppableId={props.card.id} type="task">
                                {(provided, snapshot) => (
                                    <>
                                        <div
                                            className="tasklist-cards-wrap"
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        // isDraggingOver={snapshot.isDraggingOver}
                                        >
                                            {props.tasks.map((task, index) => (
                                                <Task
                                                    key={task.id}
                                                    task={task}
                                                    index={index}
                                                    cardId={props.card.id}
                                                    onRemoveTask={props.onRemoveTask}
                                                />

                                            ))}
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
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={newBoardName} onChange={e => setNewBoardName(e.target.value)} />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <div className="modal-footer align-items-center">
                    <Button variant="secondary" onClick={() => setRenameBoard(!renameBoard)} >Cancel</Button>
                    <Button variant="primary" className="btn-add-tasklist" onClick={onRenameBoard} >Add</Button>
                </div>
            </Modal >

            {/* Add New Deal */}
            <Modal show={addNewCard} onHide={() => setAddNewCard(!addNewCard)} centered >
                <div className="modal-content">
                    <Modal.Body>
                        <Button bsPrefix="btn-close" onClick={() => setAddNewCard(!addNewCard)} >
                            <span aria-hidden="true">×</span>
                        </Button>
                        <h5 className="mb-4">新建交易</h5>
                        <Form>
                            <Row className="gx-3">
                                <Col sm={12}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control className="task-name" type="text" value={newCardName} onChange={e => setNewCardName(e.target.value)} />
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
                                            <Form.Control type="text" name="single-date-pick1" />
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
                                            <Form.Control type="text" name="single-date-pick2" />
                                        </DateRangePicker>
                                    </Form.Group>
                                </Col>
                                <Col sm={12}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>交易归类</Form.Label>
                                        <Form.Select>
                                            <option value={0}>选择分类</option>
                                            <option value={1}>潜在客户</option>
                                            <option value={2}>商机</option>
                                            <option value={3}>已提案</option>
                                            <option value={4}>跟进中</option>
                                            <option value={5}>已转化</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={12}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>备注/描述</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Col>
                                <Col sm={12}>
                                    <Form.Group className="mb-3">
                                        <HkDropZone className="dropify-square w-30">
                                            上传照片
                                        </HkDropZone>
                                    </Form.Group>
                                </Col>
                                <Col sm={12}>
                                    <div className="form-inline">
                                        <Form.Group className="mt-3">
                                            <Form.Label className="me-3">设置优先级：</Form.Label>
                                            <Form.Check
                                                inline
                                                label="高"
                                                name="group1"
                                                type="radio"
                                                id={"inline-1"}
                                                defaultChecked
                                            />
                                            <Form.Check
                                                inline
                                                label="中"
                                                name="group1"
                                                type="radio"
                                                id={"inline-2"}
                                            />
                                            <Form.Check
                                                inline
                                                label="低"
                                                name="group1"
                                                type="radio"
                                                id={"inline-2"}
                                            />
                                        </Form.Group>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className="align-items-center">
                        <Button variant="secondary" onClick={() => setAddNewCard(!addNewCard)}>取消</Button>
                        <Button variant="primary" className="btn-add-task" onClick={onSaveTask} >添加</Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    )
}

export default Board

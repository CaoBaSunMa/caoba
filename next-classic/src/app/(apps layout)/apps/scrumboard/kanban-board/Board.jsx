'use client';
import { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { DATASET } from './KanbanDatas';
import DragDropCards from './DragDropCards';
import { nanoid } from 'nanoid';

const Board = () => {
    // eslint-disable-next-line no-unused-vars
    const [dataset, setDataset] = useState(DATASET);

    const [tasks, setTasks] = useState(dataset.tasks);
    const [cards, setCards] = useState(dataset.cards);
    const [cardOrder, setCardOrder] = useState(dataset.cardOrder);

    const [addNewBoard, setAddNewBoard] = useState(false);
    const [newBoardName, setNewBoardName] = useState("");


    const onAddNewCard = () => {
        const newCard = {
            id: "card-" + nanoid(),
            title: newBoardName,
            taskIds: []
        };
        const newCardOrder = Array.from(cardOrder);
        newCardOrder.push(newCard.id);
        setCards({
            ...cards,
            [newCard.id]: newCard
        });
        setCardOrder(newCardOrder);
        setNewBoardName("")
        setAddNewBoard(false);
    };


    return (
        <>
            <div className="taskboard-body">
                <div>
                    <div className="taskbar-toolbar">
                        <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                            <Button variant="soft-primary" className="flex-shrink-0 btn-add-newlist me-4" onClick={() => setAddNewBoard(!addNewBoard)} >新建</Button>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="显示描述"
                                className="ms-auto"
                                defaultChecked
                            />
                        </div>
                        <Form role="search" className="d-lg-flex d-none">
                            <Form.Control type="text" placeholder="在会话中搜索" />
                        </Form>
                    </div>
                    <PerfectScrollbar className="tasklist-scroll position-relative">
                        <div id="tasklist_wrap">
                            <DragDropCards
                                cards={cards}
                                tasks={tasks}
                                cardOrder={cardOrder}
                                setCards={setCards}
                                setTasks={setTasks}
                                setCardOrder={setCardOrder}
                            />
                        </div>
                        <div className="card card-simple card-border tasklist add-new-task">
                            <Button variant="soft-primary" className="btn-add-newlist flex-shrink-0" onClick={() => setAddNewBoard(!addNewBoard)} >新建列表</Button>
                        </div>
                    </PerfectScrollbar>
                </div>
            </div>

            {/* Add New Board */}
            <Modal show={addNewBoard} onHide={() => setAddNewBoard(!addNewBoard)} size="sm" centered className="add-tasklist-modal">
                <Modal.Body>
                    <Button bsPrefix="btn-close" onClick={() => setAddNewBoard(!addNewBoard)} >
                        <span aria-hidden="true">×</span>
                    </Button>
                    <h5 className="mb-4">新建任务列表</h5>
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
                <Modal.Footer className="align-items-center">
                    <Button variant="secondary" onClick={() => setAddNewBoard(!addNewBoard)} >取消</Button>
                    <Button variant="primary" className="btn-add-Board" onClick={onAddNewCard}>添加</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Board

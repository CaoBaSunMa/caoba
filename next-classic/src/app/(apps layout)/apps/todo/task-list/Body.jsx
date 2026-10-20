'use client';
import { useEffect, useState } from 'react';
import SimpleBar from 'simplebar-react';
import { Col, Container, Form, Pagination, Row } from 'react-bootstrap';
import { useTasks } from '@/context';
import DragCard from './DragCard';

const Body = ({ showInfo }) => {

    const { tasks: apiTasks, loading, fetchTasks } = useTasks();

    const [tasks, setTasks] = useState({});
    const [cards, setCards] = useState({});
    const [cardOrder, setCardOrder] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    useEffect(() => {
        if (apiTasks && apiTasks.length > 0) {
            // Transform flat tasks array into the DATASET format
            const tasksObj = {};
            const cardsObj = {
                "card-1": { id: "card-1", title: "最近分配", taskIds: [] },
                "card-2": { id: "card-2", title: "昨天", taskIds: [] },
                "card-3": { id: "card-3", title: "2020年7月15日", taskIds: [] },
            };

            apiTasks.forEach((task, index) => {
                // rreact-dnd requires string ids; the API returns numeric Longs.
                const taskId = String(task.id ?? `task-${index + 1}`);
                tasksObj[taskId] = {
                    id: taskId,
                    checked: task.checked || false,
                    stared: task.stared || task.starred || false,
                    task_name: task.title || task.task_name || task.name || '',
                    priority: task.priority || '',
                    indicator: task.indicator || 'warning',
                    task_time: task.dueDate ? [{ time: task.dueDate, text: task.overdue ? 'danger' : '' }] : [{ time: '', text: '' }],
                    img: task.assigneeAvatar || task.img || null,
                    init_avt: task.assigneeInit ? [{ text: task.assigneeInit, bg: 'primary' }] : undefined,
                    badge: task.tags ? (Array.isArray(task.tags) ? task.tags.map(t => ({ text: t.title || t, bg: t.bg || 'primary' })) : [{ text: task.tags, bg: 'primary' }]) : undefined,
                };

                // Distribute tasks across cards based on date grouping
                if (index < 7) {
                    cardsObj["card-1"].taskIds.push(taskId);
                } else if (index < 11) {
                    cardsObj["card-2"].taskIds.push(taskId);
                } else {
                    cardsObj["card-3"].taskIds.push(taskId);
                }
            });

            setTasks(tasksObj);
            setCards(cardsObj);
            setCardOrder(["card-1", "card-2", "card-3"]);
        }
    }, [apiTasks]);

    return (
        <div className="todo-body">
            <SimpleBar className="nicescroll-bar">
                <Container>
                    <div className="todo-toolbar">
                        <div>
                            <Form.Select size="sm" >
                                <option value={0}>批量操作</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </Form.Select>
                            <button className="btn btn-sm btn-light ms-2">应用</button>
                            <Form.Select size="sm" className="d-xxl-inline-block d-none mx-2">
                                <option value={0}>按日期排序</option>
                                <option value={1}>按时间排序</option>
                                <option value={2}>按分类排序</option>
                                <option value={3}>按优先级排序</option>
                                <option value={4}>按标题排序</option>
                                <option value={5}>按负责人排序</option>
                            </Form.Select>
                        </div>
                        <div>
                            <div className="paging-info d-xxl-inline-block d-none">1 - 10 of 30</div>
                            <Pagination className="custom-pagination pagination-simple m-0 ms-3">
                                <Pagination.Prev disabled >
                                    <i className="ri-arrow-left-s-line" />
                                </Pagination.Prev>
                                <Pagination.Item className="paginate_button">1</Pagination.Item>
                                <Pagination.Item className="paginate_button">2</Pagination.Item>
                                <Pagination.Next className="paginate_button">
                                    <i className="ri-arrow-right-s-line" />
                                </Pagination.Next>
                            </Pagination>
                        </div>
                    </div>

                    <DragCard
                        cards={cards}
                        tasks={tasks}
                        cardOrder={cardOrder}
                        setCards={setCards}
                        setTasks={setTasks}
                        setCardOrder={setCardOrder}
                        taskInfo={showInfo}
                    />

                    <Row className="mt-3">
                        <Col sm={12}>
                            <div className="float-end text-end">
                                <Pagination className="custom-pagination pagination-simple active-theme">
                                    <Pagination.Prev disabled>
                                        <i className="ri-arrow-left-s-line" />
                                    </Pagination.Prev>
                                    <Pagination.Item active>
                                        1
                                    </Pagination.Item>
                                    <Pagination.Item>
                                        2
                                    </Pagination.Item>
                                    <Pagination.Item>
                                        3
                                    </Pagination.Item>
                                    <Pagination.Next>
                                        <i className="ri-arrow-right-s-line" />
                                    </Pagination.Next>
                                </Pagination>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </SimpleBar>
        </div >
    )
}

export default Body

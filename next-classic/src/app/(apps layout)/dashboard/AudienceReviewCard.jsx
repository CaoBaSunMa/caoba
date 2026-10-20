'use client';
import { useEffect } from 'react';
import { Button, ButtonGroup, Card, Col, Form, Row } from 'react-bootstrap';
import HkBadge from '@/components/@hk-badge/@hk-badge';
import AudienceReviewChart from './ChartData/AudienceReviewChart';

const AudienceReviewCard = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.dispatchEvent(new Event('resize'))
        }
    }, [])

    return (
        <Card className="card-border mb-0 h-100">
            <Card.Header className="card-header-action">
                <h6>受众概览</h6>
                <div className="card-action-wrap">
                    <ButtonGroup className="d-lg-flex d-none" aria-label="基本轮廓按钮示例">
                        <Button variant="outline-light" className="active">全部</Button>
                        <Button variant="outline-light">会话</Button>
                        <Button variant="outline-light">来源</Button>
                        <Button variant="outline-light">推荐</Button>
                    </ButtonGroup>
                    <Form.Select className="d-lg-none d-flex">
                        <option value={1}>全部</option>
                        <option value={2}>会话</option>
                        <option value={3}>来源</option>
                        <option value={4}>推荐</option>
                    </Form.Select>
                </div>
            </Card.Header>
            <Card.Body>
                <AudienceReviewChart />
                <div className="separator-full mt-5" />
                <div className="flex-grow-1 ms-lg-3">
                    <Row>
                        <Col xxl={3} sm={6} className="mb-3">
                            <span className="d-block fw-medium fs-7">用户数</span>
                            <div className="d-flex align-items-center">
                                <span className="d-block fs-4 fw-medium text-dark mb-0">8.8k</span>
                                <HkBadge bg="success" size="sm" soft className="ms-1" >
                                    <i className="bi bi-arrow-up" /> 7.5%
                                </HkBadge>
                            </div>
                        </Col>
                        <Col xxl={3} sm={6} className="mb-3">
                            <span className="d-block fw-medium fs-7">会话数</span>
                            <div className="d-flex align-items-center">
                                <span className="d-block fs-4 fw-medium text-dark mb-0">18.2k</span>
                                <HkBadge bg="success" size="sm" soft className="ms-1" >
                                    <i className="bi bi-arrow-up" /> 7.2%
                                </HkBadge>
                            </div>
                        </Col>
                        <Col xxl={3} sm={6} className="mb-3">
                            <span className="d-block fw-medium fs-7">跳出率</span>
                            <div className="d-flex align-items-center">
                                <span className="d-block fs-4 fw-medium text-dark mb-0">46.2%</span>
                                <HkBadge bg="danger" size="sm" soft className="ms-1" >
                                    <i className="bi bi-arrow-down" /> 0.2%
                                </HkBadge>
                            </div>
                        </Col>
                        <Col xxl={3} sm={6}>
                            <span className="d-block fw-medium fs-7">会话时长</span>
                            <div className="d-flex align-items-center">
                                <span className="d-block fs-4 fw-medium text-dark mb-0">4分24秒</span>
                                <HkBadge bg="success" size="sm" soft className="ms-1" >
                                    <i className="bi bi-arrow-up" /> 10.8%
                                </HkBadge>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Card.Body>
        </Card>
    )
}

export default AudienceReviewCard

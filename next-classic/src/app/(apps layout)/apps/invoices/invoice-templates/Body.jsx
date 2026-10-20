'use client';
import Image from 'next/image';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

//Images
import template1 from '@/assets/img/templates/template1.png';
import template2 from '@/assets/img/templates/template2.png';
import template3 from '@/assets/img/templates/template3.png';
import template4 from '@/assets/img/templates/template4.png';
import template5 from '@/assets/img/templates/template5.png';
import template6 from '@/assets/img/templates/template6.png';
import template7 from '@/assets/img/templates/template7.png';
import template8 from '@/assets/img/templates/template8.png';

const Body = () => {
    return (
        <div className="invoice-body">
            <SimpleBar className="nicescroll-bar">
                <Container>
                    <div className="my-md-7 my-3">
                        <h3 className="mb-4">选择你的起始模板</h3>
                        <Form>
                            <Row>
                                <Col md={4} className="mb-md-0 mb-3">
                                    <Form.Control type="text" placeholder="搜索模板" />
                                </Col>
                                <Col md={4} className="mb-md-0 mb-3">
                                    <Form.Select>
                                        <option value={1}>热门</option>
                                        <option value={2} >经典</option>
                                        <option value={3} >流行</option>
                                        <option value={4} >简约</option>
                                    </Form.Select>
                                </Col>
                                <div className="col-md-4">
                                    <Form.Select>
                                        <option value={1}>全部分类</option>
                                        <option value={2}>商务</option>
                                        <option value={3}>工作室</option>
                                        <option value={3}>个人</option>
                                    </Form.Select>
                                </div>
                            </Row>
                        </Form>
                        <h5 className="mt-7 mb-3">高级模板</h5>
                        <Row className="text-center">
                            <a href="#" className="d-block col-xl-2 col-sm-4 col-xs-12 mb-5">
                                <Card className="card-border">
                                    <Card.Img src={template1.src} alt="卡片图片" />
                                </Card>
                                <h6 className="mb-0">标准</h6>
                            </a>
                            <a href="#" className="d-block col-xl-2 col-sm-4 col-xs-12 mb-5">
                                <Card className="card-border">
                                    <Card.Img src={template2.src} alt="卡片图片" />
                                </Card>
                                <h6 className="mb-0">简约</h6>
                            </a>
                            <a href="#" className="d-block col-xl-2 col-sm-4 col-xs-12 mb-5">
                                <Card className="card-border">
                                    <Card.Img src={template3.src} alt="卡片图片" />
                                </Card>
                                <h6 className="mb-0">基础</h6>
                            </a>
                            <a href="#" className="d-block col-xl-2 col-sm-4 col-xs-12 mb-5">
                                <Card className="card-border">
                                    <Card.Img src={template4.src} alt="卡片图片" />
                                </Card>
                                <h6 className="mb-0">经典</h6>
                            </a>
                        </Row>
                        <h5 className="mt-7 mb-3">商务</h5>
                        <div className="row text-center">
                            <a href="#" className="d-block col-xl-2 col-sm-4 col-xs-12 mb-5">
                                <Card className="card-border">
                                    <Card.Img src={template5.src} alt="卡片图片" />
                                </Card>
                                <h6 className="mb-0">形式发票</h6>
                            </a>
                            <a href="#" className="d-block col-xl-2 col-sm-4 col-xs-12 mb-5">
                                <Card className="card-border">
                                    <Card.Img src={template6.src} alt="卡片图片" />
                                </Card>
                                <h6 className="mb-0">贸易</h6>
                            </a>
                            <a href="#" className="d-block col-xl-2 col-sm-4 col-xs-12 mb-5">
                                <Card className="card-border">
                                    <Card.Img src={template7.src} alt="卡片图片" />
                                </Card>
                                <h6 className="mb-0">临时</h6>
                            </a>
                            <a href="#" className="d-block col-xl-2 col-sm-4 col-xs-12 mb-5">
                                <Card className="card-border">
                                    <Card.Img src={template8.src} alt="卡片图片" />
                                </Card>
                                <h6 className="mb-0">主要</h6>
                            </a>
                            <a href="#" className="d-block col-xl-2 col-sm-4 col-xs-12 mb-5">
                                <Card className="card-border">
                                    <Card.Img src={template1.src} alt="卡片图片" />
                                </Card>
                                <h6 className="mb-0">马特·奥佩尔</h6>
                            </a>
                            <a href="#" className="d-block col-xl-2 col-sm-4 col-xs-12 mb-5">
                                <Card className="card-border">
                                    <Card.Img src={template2.src} alt="卡片图片" />
                                </Card>
                                <h6 className="mb-0">自由职业者</h6>
                            </a>
                            <a href="#" className="d-block col-xl-2 col-sm-4 col-xs-12 mb-5">
                                <Card className="card-border">
                                    <Card.Img src={template3.src} alt="卡片图片" />
                                </Card>
                                <h6 className="mb-0">设计师</h6>
                            </a>
                            <a href="#" className="d-block col-xl-2 col-sm-4 col-xs-12 mb-5">
                                <Card className="card-border">
                                    <Card.Img src={template4.src} alt="卡片图片" />
                                </Card>
                                <h6 className="mb-0">服务</h6>
                            </a>
                            <a href="#" className="d-block col-xl-2 col-sm-4 col-xs-12 mb-5">
                                <Card className="card-border">
                                    <Card.Img src={template5.src} alt="卡片图片" />
                                </Card>
                                <h6 className="mb-0">服务</h6>
                            </a>
                            <a href="#" className="d-block col-xl-2 col-sm-4 col-xs-12 mb-5">
                                <Card className="card-border">
                                    <Card.Img src={template6.src} alt="卡片图片" />
                                </Card>
                                <h6 className="mb-0">服务</h6>
                            </a>
                            <a href="#" className="d-block col-xl-2 col-sm-4 col-xs-12 mb-5">
                                <Card className="card-border">
                                    <Card.Img src={template7.src} alt="卡片图片" />
                                </Card>
                                <h6 className="mb-0">服务</h6>
                            </a>
                            <a href="#" className="d-block col-xl-2 col-sm-4 col-xs-12 mb-5">
                                <Card className="card-border">
                                    <Card.Img src={template8.src} alt="卡片图片" />
                                </Card>
                                <h6 className="mb-0">服务</h6>
                            </a>
                        </div>
                    </div>
                </Container>
            </SimpleBar>
        </div>
    )
}

export default Body

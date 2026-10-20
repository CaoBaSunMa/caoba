import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

//Images
import symbolAvatar2 from '../../../assets/img/symbol-avatar-2.png';
import symbolAvatar5 from '../../../assets/img/symbol-avatar-5.png';
import symbolAvatar6 from '../../../assets/img/symbol-avatar-6.png';
import symbolAvatar7 from '../../../assets/img/symbol-avatar-7.png';
import symbolAvatar8 from '../../../assets/img/symbol-avatar-8.png';
import symbolAvatar9 from '../../../assets/img/symbol-avatar-9.png';
import symbolAvatar10 from '../../../assets/img/symbol-avatar-10.png';
import symbolAvatar11 from '../../../assets/img/symbol-avatar-11.png';
import symbolAvatar12 from '../../../assets/img/symbol-avatar-12.png';
import symbolAvatar14 from '../../../assets/img/symbol-avatar-14.png';
import symbolAvatar13 from '../../../assets/img/symbol-avatar-13.png';

const Body = () => {
    return (
        <div className="integrations-body">
            <SimpleBar className="nicescroll-bar">
                <Container className="mt-md-7 mt-3">
                    <Row>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="avatar avatar-sm avatar-logo">
                                            <span className="initial-wrap">
                                                <img src={symbolAvatar14} alt="logo" />
                                            </span>
                                        </div>
                                        <Button variant="outline-secondary" className="btn-block flex-grow-0 flex-shrink-0 flex-basis-0">连接</Button>
                                    </div>
                                    <div className="app-name">Intercom</div>
                                    <p className="p-sm multine-ellipsis">高效沟通，无缝集成到你的产品中，帮助团队实时服务客户。</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="avatar avatar-sm avatar-logo">
                                            <span className="initial-wrap">
                                                <img src={symbolAvatar2} alt="logo" />
                                            </span>
                                        </div>
                                        <Button variant="primary" className="btn-block flex-grow-0 flex-shrink-0 flex-basis-0">已连接</Button>
                                    </div>
                                    <div className="app-name">Swiggy</div>
                                    <p className="p-sm multine-ellipsis">快速订购美食，配送随叫随到，让外卖体验更简单。</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="avatar avatar-sm avatar-logo">
                                            <span className="initial-wrap">
                                                <img src={symbolAvatar10} alt="logo" />
                                            </span>
                                        </div>
                                        <Button variant="outline-secondary" className="btn-block flex-grow-0 flex-shrink-0 flex-basis-0">连接</Button>
                                    </div>
                                    <div className="app-name">Medium</div>
                                    <p className="p-sm multine-ellipsis">开放的内容发布平台，随时随地分享你的见解。</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="avatar avatar-sm avatar-logo">
                                            <span className="initial-wrap">
                                                <img src={symbolAvatar12} alt="logo" />
                                            </span>
                                        </div>
                                        <Button variant="primary" className="btn-block flex-grow-0 flex-shrink-0 flex-basis-0">已连接</Button>
                                    </div>
                                    <div className="app-name">Figma</div>
                                    <p className="p-sm multine-ellipsis">协作式界面设计工具，让团队实时共创产品体验。</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="avatar avatar-sm avatar-logo">
                                            <span className="initial-wrap">
                                                <img src={symbolAvatar9} alt="logo" />
                                            </span>
                                        </div>
                                        <Button variant="primary" className="btn-block flex-grow-0 flex-shrink-0 flex-basis-0">已连接</Button>
                                    </div>
                                    <div className="app-name">Propswala</div>
                                    <p className="p-sm multine-ellipsis">一站式道具与露营装备商店，为你提供高品质的户外装备。</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="avatar avatar-sm avatar-logo">
                                            <span className="initial-wrap">
                                                <img src={symbolAvatar7} alt="logo" />
                                            </span>
                                        </div>
                                        <Button variant="primary" className="btn-block flex-grow-0 flex-shrink-0 flex-basis-0">已连接</Button>
                                    </div>
                                    <div className="app-name">Icons8</div>
                                    <p className="p-sm multine-ellipsis">海量专业图标与插画资源，为你的设计快速补充素材。 </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="avatar avatar-sm avatar-logo">
                                            <span className="initial-wrap">
                                                <img src={symbolAvatar6} alt="logo" />
                                            </span>
                                        </div>
                                        <Button variant="outline-secondary" className="btn-block flex-grow-0 flex-shrink-0 flex-basis-0">连接</Button>
                                    </div>
                                    <div className="app-name">Behance</div>
                                    <p className="p-sm multine-ellipsis">设计师展示与发现作品的创意社交平台。</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="avatar avatar-sm avatar-logo">
                                            <span className="initial-wrap">
                                                <img src={symbolAvatar10} alt="logo" />
                                            </span>
                                        </div>
                                        <Button variant="outline-secondary" className="btn-block flex-grow-0 flex-shrink-0 flex-basis-0">连接</Button>
                                    </div>
                                    <div className="app-name">Medium</div>
                                    <p className="p-sm multine-ellipsis">开放的内容发布平台，随时随地分享见解。</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="avatar avatar-sm avatar-logo">
                                            <span className="initial-wrap">
                                                <img src={symbolAvatar11} alt="logo" />
                                            </span>
                                        </div>
                                        <Button variant="outline-secondary" className="btn-block flex-grow-0 flex-shrink-0 flex-basis-0">连接</Button>
                                    </div>
                                    <div className="app-name">Node Js</div>
                                    <p className="p-sm multine-ellipsis">基于 JavaScript 的高性能运行时，用于构建可扩展的网络应用。 </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="avatar avatar-sm avatar-logo">
                                            <span className="initial-wrap">
                                                <img src={symbolAvatar8} alt="logo" />
                                            </span>
                                        </div>
                                        <Button variant="outline-secondary" className="btn-block flex-grow-0 flex-shrink-0 flex-basis-0">连接</Button>
                                    </div>
                                    <div className="app-name">Indian Type Factory</div>
                                    <p className="p-sm multine-ellipsis">来自印度的字体设计工作室，提供丰富的原创字体。 </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="avatar avatar-sm avatar-logo">
                                            <span className="initial-wrap">
                                                <img src={symbolAvatar5} alt="logo" />
                                            </span>
                                        </div>
                                        <Button variant="primary" className="btn-block flex-grow-0 flex-shrink-0 flex-basis-0">已连接</Button>
                                    </div>
                                    <div className="app-name">City Deals</div>
                                    <p className="p-sm multine-ellipsis">精选本城超值优惠，天天都有折扣好物。 </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="avatar avatar-sm avatar-logo">
                                            <span className="initial-wrap">
                                                <img src={symbolAvatar13} alt="logo" />
                                            </span>
                                        </div>
                                        <Button variant="outline-secondary" className="btn-block flex-grow-0 flex-shrink-0 flex-basis-0">连接</Button>
                                    </div>
                                    <div className="app-name">Sketch</div>
                                    <p className="p-sm multine-ellipsis">面向设计师的矢量界面设计工具，简洁而强大。</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </SimpleBar>
        </div>

    )
}

export default Body

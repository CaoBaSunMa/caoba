import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

//Images
import symbolAvatar1 from '../../../assets/img/symbol-avatar-1.png';
import symbolAvatar4 from '../../../assets/img/symbol-avatar-4.png';
import symbolAvatar5 from '../../../assets/img/symbol-avatar-5.png';
import symbolAvatar6 from '../../../assets/img/symbol-avatar-6.png';
import symbolAvatar7 from '../../../assets/img/symbol-avatar-7.png';
import symbolAvatar9 from '../../../assets/img/symbol-avatar-9.png';
import symbolAvatar10 from '../../../assets/img/symbol-avatar-10.png';
import symbolAvatar11 from '../../../assets/img/symbol-avatar-11.png';
import symbolAvatar12 from '../../../assets/img/symbol-avatar-12.png';
import symbolAvatar13 from '../../../assets/img/symbol-avatar-13.png';
import symbolAvatar14 from '../../../assets/img/symbol-avatar-14.png';
import symbolAvatar15 from '../../../assets/img/symbol-avatar-15.png';
import symbolAvatar16 from '../../../assets/img/symbol-avatar-1.png';
import logoAvatar1 from '../../../assets/img/logo-avatar-1.png';
import logoAvatar2 from '../../../assets/img/logo-avatar-2.png';
import logoAvatar3 from '../../../assets/img/logo-avatar-3.png';
import logoAvatar5 from '../../../assets/img/logo-avatar-5.png';
import logoAvatar8 from '../../../assets/img/logo-avatar-8.png';
import logoAvatar10 from '../../../assets/img/logo-avatar-10.png';


const Body = () => {
    return (
        <div className="integrations-body">
            <SimpleBar className="nicescroll-bar">
                <Container className="mt-md-7 mt-3">
                    <div className="d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between mb-5">
                        <div>
                            <h5>为你推荐</h5>
                            <p>因为你安装了 caoba 模板，以下是为你的推荐。</p>
                        </div>
                        <Link to="#" className="fs-7 flex-shrink-0"><u>查看全部</u></Link>
                    </div>
                    <Row>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm avatar-logo mb-3">
                                        <span className="initial-wrap">
                                            <img src={symbolAvatar14} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Intercom</div>
                                    <div className="app-cat">聊天应用</div>
                                    <p className="p-sm multine-ellipsis">高效沟通，无缝集成到你的产品中，帮助团队实时服务客户。</p>
                                </Card.Body>
                                <div className="card-footer justify-content-between border-0">
                                    <span className="d-flex align-items-center fs-8">
                                        <i className="ri-download-cloud-2-line fs-7 me-2" />1,245 次下载
                                    </span>
                                    <Button variant="outline-secondary" size="sm">连接</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm mb-3">
                                        <img src={logoAvatar2} alt="user" className="avatar-img" />
                                    </div>
                                    <div className="app-name">Swiggy</div>
                                    <div className="app-cat">外卖配送</div>
                                    <p className="p-sm multine-ellipsis">快速订购美食，配送随叫随到，让外卖体验更简单。</p>
                                </Card.Body>
                                <div className="card-footer justify-content-between border-0">
                                    <span className="d-flex align-items-center fs-8">
                                        <i className="ri-download-cloud-2-line fs-7 me-2" />1,245 次下载</span>
                                    <Button variant="outline-secondary" size="sm">连接</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm mb-3">
                                        <img src={logoAvatar10} alt="user" className="avatar-img" />
                                    </div>
                                    <div className="app-name">Medium</div>
                                    <div className="app-cat">博客</div>
                                    <p className="p-sm multine-ellipsis">开放的内容发布平台，随时随地分享你的见解。</p>
                                </Card.Body>
                                <div className="card-footer justify-content-between border-0">
                                    <span className="d-flex align-items-center fs-8">
                                        <i className="ri-download-cloud-2-line fs-7 me-2" />1,245 次下载</span>
                                    <Button variant="outline-secondary" size="sm">连接</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm avatar-logo mb-3">
                                        <span className="initial-wrap bg-dark">
                                            <img src={symbolAvatar12} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Figma</div>
                                    <div className="app-cat">设计工具</div>
                                    <p className="p-sm multine-ellipsis">协作式界面设计工具，让团队实时共创产品体验。</p>
                                </Card.Body>
                                <div className="card-footer justify-content-between border-0">
                                    <span className="d-flex align-items-center fs-8">
                                        <i className="ri-download-cloud-2-line fs-7 me-2" />1,245 次下载</span>
                                    <Button variant="outline-secondary" size="sm">连接</Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <div className="d-flex align-items-center justify-content-between mt-6 mb-5">
                        <div>
                            <h5>热门应用</h5>
                            <p>全球数百万人使用并喜爱它们。</p>
                        </div>
                        <Link to="#" className="fs-7 flex-shrink-0"><u>查看全部</u></Link>
                    </div>
                    <Row>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm avatar-violet mb-3">
                                        <span className="initial-wrap">Cb</span>
                                    </div>
                                    <div className="app-name">caoba</div>
                                    <div className="app-cat">设计机构</div>
                                    <p className="p-sm multine-ellipsis">专业设计机构，为品牌打造令人惊艳的视觉体验。</p>
                                </Card.Body>
                                <div className="card-footer justify-content-between border-0">
                                    <span className="d-flex align-items-center fs-8">
                                        <i className="ri-download-cloud-2-line fs-7 me-2" />70.2K 次下载</span>
                                    <Button variant="outline-secondary" size="sm">连接</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm avatar-logo mb-3">
                                        <span className="initial-wrap">
                                            <img src={symbolAvatar4} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">caoba</div>
                                    <div className="app-cat">仪表盘模板</div>
                                    <p className="p-sm multine-ellipsis">基于 Bootstrap 5 的后台管理模板，界面现代、组件齐全。</p>
                                </Card.Body>
                                <div className="card-footer justify-content-between border-0">
                                    <span className="d-flex align-items-center fs-8">
                                        <i className="ri-download-cloud-2-line fs-7 me-2" />4,537 次下载</span>
                                    <Button variant="outline-secondary" size="sm">连接</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm avatar-logo mb-3">
                                        <span className="initial-wrap">
                                            <img src={symbolAvatar1} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Tinder</div>
                                    <div className="app-cat">交友应用</div>
                                    <p className="p-sm multine-ellipsis">轻松认识新朋友，开启你的约会之旅。 </p>
                                </Card.Body>
                                <div className="card-footer justify-content-between border-0">
                                    <span className="d-flex align-items-center fs-8">
                                        <i className="ri-download-cloud-2-line fs-7 me-2" />1,245 次下载</span>
                                    <Button variant="outline-secondary" size="sm">连接</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm avatar-logo mb-3">
                                        <span className="initial-wrap">
                                            <img src={symbolAvatar16} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Github</div>
                                    <div className="app-cat">极客开发</div>
                                    <p className="p-sm multine-ellipsis">全球领先的代码托管平台，助力开发者协作与开源。</p>
                                </Card.Body>
                                <div className="card-footer justify-content-between border-0">
                                    <span className="d-flex align-items-center fs-8">
                                        <i className="ri-download-cloud-2-line fs-7 me-2" />24.8M 次下载</span>
                                    <Button variant="outline-secondary" size="sm">连接</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm avatar-logo mb-3">
                                        <span className="initial-wrap">
                                            <img src={symbolAvatar5} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Dribbble</div>
                                    <div className="app-cat">灵感</div>
                                    <p className="p-sm multine-ellipsis">设计师展示作品、寻找灵感与招聘人才的创意社区。</p>
                                </Card.Body>
                                <div className="card-footer justify-content-between border-0">
                                    <span className="d-flex align-items-center fs-8">
                                        <i className="ri-download-cloud-2-line fs-7 me-2" />1,245 次下载</span>
                                    <Button variant="outline-secondary" size="sm">连接</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm mb-3">
                                        <img src={logoAvatar1} className="avatar-img" alt="logo" />
                                    </div>
                                    <div className="app-name">Phone Pay</div>
                                    <div className="app-cat">支付</div>
                                    <p className="p-sm multine-ellipsis">安全便捷的移动支付，让交易触手可及。 </p>
                                </Card.Body>
                                <div className="card-footer justify-content-between border-0">
                                    <span className="d-flex align-items-center fs-8">
                                        <i className="ri-download-cloud-2-line fs-7 me-2" />234 次下载</span>
                                    <Button variant="outline-secondary" size="sm">连接</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm mb-3">
                                        <img src={logoAvatar3} className="avatar-img" alt="logo" />
                                    </div>
                                    <div className="app-name">Coursera</div>
                                    <div className="app-cat">在线课程</div>
                                    <p className="p-sm multine-ellipsis">全球顶尖在线课程平台，随时随地学习成长。 </p>
                                </Card.Body>
                                <div className="card-footer justify-content-between border-0">
                                    <span className="d-flex align-items-center fs-8">
                                        <i className="ri-download-cloud-2-line fs-7 me-2" />8,769 次下载</span>
                                    <Button variant="outline-secondary" size="sm">连接</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm avatar-logo mb-3">
                                        <span className="initial-wrap">
                                            <img src={symbolAvatar15} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Kickstarter</div>
                                    <div className="app-cat">众筹</div>
                                    <p className="p-sm multine-ellipsis">全球众筹平台，帮助创意项目筹集启动资金。 </p>
                                </Card.Body>
                                <div className="card-footer justify-content-between border-0">
                                    <span className="d-flex align-items-center fs-8">
                                        <i className="ri-download-cloud-2-line fs-7 me-2" />9K 次下载</span>
                                    <Button variant="outline-secondary" size="sm">连接</Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <div className="d-flex align-items-center justify-content-between mt-6 mb-5">
                        <div>
                            <h5>开发者工具</h5>
                            <p>给热爱技术的开发者，不为他人所动。</p>
                        </div>
                        <Link to="#" className="fs-7 flex-shrink-0"><u>查看全部</u></Link>
                    </div>
                    <Row>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm avatar-logo mb-3">
                                        <span className="initial-wrap">
                                            <img src={symbolAvatar9} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Propswala</div>
                                    <div className="app-cat">玩具与帐篷</div>
                                    <p className="p-sm multine-ellipsis">一站式道具与露营装备商店，为你提供高品质的户外装备。</p>
                                </Card.Body>
                                <div className="card-footer justify-content-between border-0">
                                    <span className="d-flex align-items-center fs-8">
                                        <i className="ri-download-cloud-2-line fs-7 me-2" />754 次下载</span>
                                    <Button variant="outline-secondary" size="sm">连接</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm avatar-logo mb-3">
                                        <span className="initial-wrap">
                                            <img src={symbolAvatar7} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Icons8</div>
                                    <div className="app-cat">图标</div>
                                    <p className="p-sm multine-ellipsis">海量专业图标与插画资源，为你的设计快速补充素材。 </p>
                                </Card.Body>
                                <div className="card-footer justify-content-between border-0">
                                    <span className="d-flex align-items-center fs-8">
                                        <i className="ri-download-cloud-2-line fs-7 me-2" />842 次下载</span>
                                    <Button variant="outline-secondary" size="sm">连接</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm avatar-logo mb-3">
                                        <span className="initial-wrap">
                                            <img src={symbolAvatar6} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Behance</div>
                                    <div className="app-cat">协作</div>
                                    <p className="p-sm multine-ellipsis">设计师展示与发现作品的创意社交平台。</p>
                                </Card.Body>
                                <div className="card-footer justify-content-between border-0">
                                    <span className="d-flex align-items-center fs-8">
                                        <i className="ri-download-cloud-2-line fs-7 me-2" />10.6K 次下载</span>
                                    <Button variant="outline-secondary" size="sm">连接</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm avatar-logo mb-3">
                                        <span className="initial-wrap bg-green-light-5">
                                            <img src={symbolAvatar10} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Medium</div>
                                    <div className="app-cat">出版</div>
                                    <p className="p-sm multine-ellipsis">开放的内容发布平台，随时随地分享见解。</p>
                                </Card.Body>
                                <div className="card-footer justify-content-between border-0">
                                    <span className="d-flex align-items-center fs-8">
                                        <i className="ri-download-cloud-2-line fs-7 me-2" />1,245 次下载</span>
                                    <Button variant="outline-secondary" size="sm">连接</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm avatar-logo mb-3">
                                        <span className="initial-wrap">
                                            <img src={symbolAvatar11} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Node Js</div>
                                    <div className="app-cat">JavaScript</div>
                                    <p className="p-sm multine-ellipsis">基于 JavaScript 的高性能运行时，用于构建可扩展的网络应用。 </p>
                                </Card.Body>
                                <div className="card-footer justify-content-between border-0">
                                    <span className="d-flex align-items-center fs-8">
                                        <i className="ri-download-cloud-2-line fs-7 me-2" />9K 次下载</span>
                                    <Button variant="outline-secondary" size="sm">连接</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm mb-3">
                                        <img src={logoAvatar8} className="avatar-img" alt="logo" />
                                    </div>
                                    <div className="app-name">Indian Type Factory</div>
                                    <div className="app-cat">字体</div>
                                    <p className="p-sm multine-ellipsis">来自印度的字体设计工作室，提供丰富的原创字体。 </p>
                                </Card.Body>
                                <div className="card-footer justify-content-between border-0">
                                    <span className="d-flex align-items-center fs-8">
                                        <i className="ri-download-cloud-2-line fs-7 me-2" />8,768 次下载</span>
                                    <Button variant="outline-secondary" size="sm">连接</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm mb-3">
                                        <img src={logoAvatar5} className="avatar-img" alt="logo" />
                                    </div>
                                    <div className="app-name">City Deals</div>
                                    <div className="app-cat">优惠</div>
                                    <p className="p-sm multine-ellipsis">精选本城超值优惠，天天都有折扣好物。 </p>
                                </Card.Body>
                                <div className="card-footer justify-content-between border-0">
                                    <span className="d-flex align-items-center fs-8">
                                        <i className="ri-download-cloud-2-line fs-7 me-2" />1,478 次下载</span>
                                    <Button variant="outline-secondary" size="sm">连接</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm avatar-logo mb-3">
                                        <span className="initial-wrap">
                                            <img src={symbolAvatar13} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Sketch</div>
                                    <div className="app-cat">设计工具</div>
                                    <p className="p-sm multine-ellipsis">面向设计师的矢量界面设计工具，简洁而强大。</p>
                                </Card.Body>
                                <div className="card-footer justify-content-between border-0">
                                    <span className="d-flex align-items-center fs-8">
                                        <i className="ri-download-cloud-2-line fs-7 me-2" />5.4M 次下载</span>
                                    <Button variant="outline-secondary" size="sm">连接</Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </SimpleBar>
        </div>
    )
}

export default Body

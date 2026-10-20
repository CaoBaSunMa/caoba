import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col, Dropdown, Form, ListGroup, Row } from 'react-bootstrap';
import { Check, Link2, MoreHorizontal, Plus, Settings } from 'react-feather';
import { Link } from 'react-router-dom';
import HkBadge from '../../../components/@hk-badge/@hk-badge';

//Swiper Carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';

//Images
import avatar1 from '../../../assets/img/avatar1.jpg';
import avatar2 from '../../../assets/img/avatar2.jpg';
import avatar3 from '../../../assets/img/avatar3.jpg';
import avatar4 from '../../../assets/img/avatar4.jpg';
import avatar5 from '../../../assets/img/avatar5.jpg';
import avatar6 from '../../../assets/img/avatar6.jpg';
import avatar7 from '../../../assets/img/avatar7.jpg';
import avatar8 from '../../../assets/img/avatar8.jpg';
import avatar9 from '../../../assets/img/avatar9.jpg';
import avatar10 from '../../../assets/img/avatar10.jpg';
import avatar14 from '../../../assets/img/avatar14.jpg';
import mock7 from '../../../assets/img/gallery/mock7.jpg'
import mock11 from '../../../assets/img/gallery/mock11.jpg'
import mock12 from '../../../assets/img/gallery/mock12.jpg'
import mock13 from '../../../assets/img/gallery/mock13.jpg'
import mock14 from '../../../assets/img/gallery/mock14.jpg'

const Body = () => {
    return (
        <Row className="mt-7">
            <Col lg={4} className="mb-lg-0 mb-3">
                <Card className="card-border mb-lg-4 mb-3">
                    <Card.Header className="card-header-action">
                        <div className="media align-items-center">
                            <div className="media-head me-2">
                                <div className="avatar avatar-sm avatar-rounded">
                                    <img src={avatar3} alt="user" className="avatar-img" />
                                </div>
                            </div>
                            <div className="media-body">
                                <div className="fw-medium text-dark">凯特·琼斯</div>
                                <div className="fs-7">业务经理</div>
                            </div>
                        </div>
                        <div className="card-action-wrap">
                            <Dropdown>
                                <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret">
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <Settings />
                                        </span>
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end">
                                    <Dropdown.Item>操作</Dropdown.Item>
                                    <Dropdown.Item>另一项操作</Dropdown.Item>
                                    <Dropdown.Item>其他选项</Dropdown.Item>
                                    <Dropdown.Divider as="div" />
                                    <Dropdown.Item>分隔链接</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div className="d-flex text-center">
                            <div className="flex-1 border-end">
                                <div>
                                    <span className="d-block fs-4 text-dark mb-1">154</span>
                                    <span className="d-block text-capitalize fs-7">照片</span>
                                </div>
                            </div>
                            <div className="flex-1 border-end">
                                <div>
                                    <span className="d-block fs-4 text-dark mb-1">65</span>
                                    <span className="d-block text-capitalize fs-7">关注者</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div>
                                    <span className="d-block fs-4 text-dark mb-1">433</span>
                                    <span className="d-block text-capitalize fs-7">浏览</span>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="border-0">
                            <span>
                                <i className="bi bi-calendar-check-fill text-disabled me-2" />
                                <span className="text-muted">去过：</span>
                            </span>
                            <span className="ms-2">噢，加拿大</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            <span>
                                <i className="bi bi-briefcase-fill text-disabled me-2" />
                                <span className="text-muted">就职于：</span>
                            </span>
                            <span className="ms-2">某公司</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            <span>
                                <i className="bi bi-house-door-fill text-disabled me-2" />
                                <span className="text-muted">现居：</span>
                            </span>
                            <span className="ms-2">旧金山，加利福尼亚州</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            <span>
                                <i className="bi bi-geo-alt-fill text-disabled me-2" />
                                <span className="text-muted">来自：</span>
                            </span>
                            <span className="ms-2">西雅图，华盛顿州</span>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card className="card-border mb-lg-4 mb-3">
                    <Card.Header className="card-header-action">
                        <h6>你认识这些人吗？</h6>
                        <div className="card-action-wrap">
                            <Dropdown>
                                <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret">
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <MoreHorizontal />
                                        </span>
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end">
                                    <Dropdown.Item>操作</Dropdown.Item>
                                    <Dropdown.Item>另一项操作</Dropdown.Item>
                                    <Dropdown.Item>其他选项</Dropdown.Item>
                                    <Dropdown.Divider as="div" />
                                    <Dropdown.Item>分隔链接</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="border-0">
                            <div className="media align-items-center">
                                <div className="media-head me-3">
                                    <div className="avatar avatar-sm avatar-rounded">
                                        <img src={avatar8} alt="user" className="avatar-img" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <span className="d-block text-capitalize">伊薇·小野</span>
                                    <span className="d-block text-muted fs-7">Apple Inc</span>
                                </div>
                                <Button variant="light" size="sm" className="btn-icon btn-rounded ">
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <Plus />
                                        </span>
                                    </span>
                                </Button>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            <div className="media align-items-center">
                                <div className="media-head me-3">
                                    <div className="avatar avatar-sm avatar-rounded">
                                        <img src={avatar7} alt="user" className="avatar-img" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <span className="d-block text-capitalize">克莱·马塞</span>
                                    <span className="d-block text-muted fs-7">caoba.com</span>
                                </div>
                                <Button variant="light" size="sm" className="btn-icon btn-rounded ">
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <Plus />
                                        </span>
                                    </span>
                                </Button>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            <div className="media align-items-center">
                                <div className="media-head me-3">
                                    <div className="avatar avatar-sm avatar-rounded">
                                        <img src={avatar5} alt="user" className="avatar-img" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <span className="d-block text-capitalize">玛德琳·拉斯孔</span>
                                    <span className="d-block text-muted fs-7">Godaddy.co.in</span>
                                </div>
                                <Button variant="primary" size="sm" className="btn-icon btn-rounded ">
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <Check />
                                        </span>
                                    </span>
                                </Button>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            <div className="media align-items-center">
                                <div className="media-head me-3">
                                    <div className="avatar avatar-sm avatar-rounded">
                                        <img src={avatar4} alt="user" className="avatar-img" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <span className="d-block text-capitalize">米素库·海德</span>
                                    <span className="d-block text-muted fs-7">Flipkart</span>
                                </div>
                                <Button variant="primary" size="sm" className="btn-icon btn-rounded ">
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <Check />
                                        </span>
                                    </span>
                                </Button>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            <div className="media align-items-center">
                                <div className="media-head me-3">
                                    <div className="avatar avatar-sm avatar-rounded">
                                        <img src={avatar3} alt="user" className="avatar-img" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <span className="d-block text-capitalize">伊齐基尔·梅雷迪斯</span>
                                    <span className="d-block text-muted fs-7">Paypal</span>
                                </div>
                                <Button variant="light" size="sm" className="btn-icon btn-rounded ">
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <Plus />
                                        </span>
                                    </span>
                                </Button>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            <div className="media align-items-center">
                                <div className="media-head me-3">
                                    <div className="avatar avatar-sm avatar-rounded">
                                        <img src={avatar2} alt="user" className="avatar-img" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <span className="d-block text-capitalize">约翰尼·梅托耶</span>
                                    <span className="d-block text-muted fs-7">Robocon</span>
                                </div>
                                <Button variant="primary" size="sm" className="btn-icon btn-rounded ">
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <Check />
                                        </span>
                                    </span>
                                </Button>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card className="card-border mb-lg-4 mb-3">
                    <Card.Header className="card-header-action">
                        <h6>好友
                            <HkBadge bg="light" text="dark" size="sm" className="ms-1">212</HkBadge>
                        </h6>
                        <div className="card-action-wrap">
                            <Link to="#">查看全部</Link>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Row className="gx-3 text-center">
                            <Col xs={3} className="mb-3">
                                <div className="mb-2">
                                    <img src={avatar1} alt="user" className="img-fluid rounded" />
                                </div>
                                <span className="d-block fs-7 text-truncate">伊薇·小野</span>
                            </Col>
                            <Col xs={3} className="mb-3">
                                <div className="mb-2">
                                    <img src={avatar2} alt="user" className="img-fluid rounded" />
                                </div>
                                <span className="d-block fs-7 text-truncate">克莱·马塞</span>
                            </Col>
                            <Col xs={3} className="mb-3">
                                <div className="mb-2">
                                    <img src={avatar3} alt="user" className="img-fluid rounded" />
                                </div>
                                <span className="d-block fs-7 text-truncate">玛德琳·拉斯孔</span>
                            </Col>
                            <Col xs={3} className="mb-3">
                                <div className="mb-2">
                                    <img src={avatar4} alt="user" className="img-fluid rounded" />
                                </div>
                                <span className="d-block fs-7 text-truncate">米素库·海德</span>
                            </Col>
                            <Col xs={3} className="mb-3">
                                <div className="mb-2">
                                    <img src={avatar5} alt="user" className="img-fluid rounded" />
                                </div>
                                <span className="d-block fs-7 text-truncate">伊齐基尔·梅雷迪斯</span>
                            </Col>
                            <Col xs={3} className="mb-3">
                                <div className="mb-2">
                                    <img src={avatar6} alt="user" className="img-fluid rounded" />
                                </div>
                                <span className="d-block fs-7 text-truncate">约翰尼·梅托耶</span>
                            </Col>
                            <Col xs={3} className="mb-3">
                                <div className="mb-2">
                                    <img src={avatar7} alt="user" className="img-fluid rounded" />
                                </div>
                                <span className="d-block fs-7 text-truncate">安杰利克·劳弗</span>
                            </Col>
                            <Col xs={3} className="mb-3">
                                <div className="mb-2">
                                    <img src={avatar8} alt="user" className="img-fluid rounded" />
                                </div>
                                <span className="d-block fs-7 text-truncate">塞西莉亚·里奥斯</span>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className="card-border mb-lg-4 mb-3">
                    <Card.Header className="card-header-action">
                        <h6>群组
                            <HkBadge bg="light" text="dark" size="sm" className="ms-1">12</HkBadge>
                        </h6>
                        <div className="card-action-wrap">
                            <Link to="#">查看全部</Link>
                        </div>
                    </Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="border-0">
                            <div className="media align-items-center">
                                <div className="media-head me-3">
                                    <div className="avatar avatar-sm avatar-rounded">
                                        <img src={avatar1} alt="user" className="avatar-img" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <span className="d-block text-capitalize">景观小组</span>
                                    <span className="d-block text-muted fs-7">1.25K 名成员</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            <div className="media align-items-center">
                                <div className="media-head me-3">
                                    <div className="avatar avatar-sm avatar-rounded">
                                        <img src={avatar2} alt="user" className="avatar-img" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <span className="d-block text-capitalize">乔什·格罗本粉丝团</span>
                                    <span className="d-block text-muted fs-7">2M 名成员</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            <div className="media align-items-center">
                                <div className="media-head me-3">
                                    <div className="avatar avatar-sm avatar-rounded">
                                        <img src={avatar3} alt="user" className="avatar-img" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <span className="d-block text-capitalize">UI/UX 小组</span>
                                    <span className="d-block text-muted fs-7">8K 名成员</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            <div className="media align-items-center">
                                <div className="media-head me-3">
                                    <div className="avatar avatar-sm avatar-rounded">
                                        <img src={avatar4} alt="user" className="avatar-img" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <span className="d-block text-capitalize">设计之旅</span>
                                    <span className="d-block text-muted fs-7">14K 名成员</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card className="card-border mb-lg-4 mb-3">
                    <Card.Header className="card-header-action">
                        <h6>链接
                            <span className="badge badge-sm badge-light me-1">5</span>
                        </h6>
                        <div className="card-action-wrap">
                            <Link to="#">查看全部</Link>
                        </div>
                    </Card.Header>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="border-0">
                            <div className="media align-items-center">
                                <div className="media-head me-3">
                                    <div className="avatar avatar-sm avatar-primary avatar-rounded">
                                        <span className="initial-wrap">G</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <span className="d-block text-capitalize text-truncate mw-150p">
                                        Google</span>
                                    <span className="d-block text-muted fs-7 text-truncate mw-150p">google.com</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            <div className="media align-items-center">
                                <div className="media-head me-3">
                                    <div className="avatar avatar-sm avatar-pink avatar-rounded">
                                        <span className="initial-wrap">AR</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <span className="d-block text-capitalize text-truncate mw-150p">提升你的业务</span>
                                    <span className="d-block text-muted fs-7 text-truncate mw-150p">yahoo.com</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            <div className="media align-items-center">
                                <div className="media-head me-3">
                                    <div className="avatar avatar-sm avatar-warning avatar-rounded">
                                        <span className="initial-wrap">PR</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <span className="d-block text-capitalize text-truncate mw-150p">铸造厨具</span>
                                    <span className="d-block text-muted fs-7 text-truncate mw-150p">yahoo.com</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            <div className="media align-items-center">
                                <div className="media-head me-3">
                                    <div className="avatar avatar-sm avatar-success avatar-rounded">
                                        <span className="initial-wrap">PR</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <span className="d-block text-capitalize text-truncate mw-150p">宇宙的思考</span>
                                    <span className="d-block text-muted fs-7 text-truncate mw-150p">facebook.com</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card bg="primary" className="text-center">
                    <Card.Body className="twitter-slider-wrap">
                        <div className="twitter-icon text-center mb-3">
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        {/* <div id="tweets_fetch" className="owl-carousel light-owl-dots owl-theme" /> */}
                        <Swiper
                            autoHeight={true}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Autoplay]}

                            className="swiper-carousel tweeter-carousel"
                        >
                            <SwiperSlide>
                                <p className="tweet">发挥创意，保持好奇心，用心做好每一件作品。保持专注，终将有所收获。
                                    <a href="#demo" data-expanded-url="#demo" target=" _blank" title="#title" data-scribe="element:url"><span>https://</span>demo.de<span>&nbsp;</span></a>
                                    <p className="timePosted"><a href="#demo">发布于 2024年5月9日</a></p>
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p className="tweet">设计的意义在于解决问题，而问题往往藏在细节里。不断打磨、不断迭代，才能做出真正打动人心的作品。<br /><br />
                                    灵感来自生活，也来自每一次尝试。坚持创作，你会遇见更好的自己。无论是形式、功能还是体验，都值得全力以赴。
                                    <p className="timePosted"><a href="#demo">发布于 2024年5月11日</a></p>
                                </p>

                            </SwiperSlide>
                        </Swiper>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={8}>
                <Card className="card-border card-profile-feed mb-lg-4 mb-3">
                    <Card.Header className="card-header-action">
                        <div className="media align-items-center">
                            <div className="media-head me-2">
                                <div className="avatar avatar-sm avatar-rounded">
                                    <img src={avatar8} alt="user" className="avatar-img" />
                                </div>
                            </div>
                            <div className="media-body">
                                <div className="fw-medium text-dark">乌玛·瑟曼</div>
                                <div className="fs-7">25 分钟</div>
                            </div>
                        </div>
                        <div className="card-action-wrap">
                            <Dropdown>
                                <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret">
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <MoreHorizontal />
                                        </span>
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end">
                                    <Dropdown.Item>操作</Dropdown.Item>
                                    <Dropdown.Item>另一项操作</Dropdown.Item>
                                    <Dropdown.Item>其他选项</Dropdown.Item>
                                    <Dropdown.Divider as="div" />
                                    <Dropdown.Item>分隔链接</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text className="mb-5">当年，Sequence 的设计师们决定用手写 Sharpie 笔，把他们为 Chipotle 设计的纸袋包装印上一段 Lorem ipsum 文字。</Card.Text>
                        <Card className="card-border">
                            <div className="position-relative">
                                <Card.Img variant="top" className="d-block" src={mock12} alt="Card img cap" />
                                <Button variant="dark" className="btn-rounded btn-pg-link">
                                    <span>
                                        <span className="icon">
                                            <span className="feather-icon">
                                                <Link2 />
                                            </span>
                                        </span>
                                        <span>网站</span>
                                    </span>
                                </Button>
                            </div>
                            <Card.Body>
                                <h5>培根鸡肉、烟熏火鸡与手撕排骨。</h5>
                                <Card.Text>当然，我们也不能漏掉那一大批经典的 Lorem ipsum 仿制品：Bacon Ipsum、Hipster Ipsum、Corporate Ipsum、Legal Ipsum。</Card.Text>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                    <Card.Footer className="justify-content-between">
                        <div>
                            <Link to="#"><i className="bi bi-heart-fill text-primary" />30K</Link>
                        </div>
                        <div>
                            <Link to="#">1K 条评论</Link>
                            <Link to="#">12 次分享</Link>
                        </div>
                    </Card.Footer>
                </Card>
                <div className="mb-lg-4 mb-lg-4 mb-3">
                    <Card className="card-border card-profile-feed mb-0 rounded-bottom-0">
                        <Card.Header className="card-header-action">
                            <div className="media align-items-center">
                                <div className="media-head me-2">
                                    <div className="avatar avatar-sm avatar-rounded">
                                        <img src={avatar10} alt="user" className="avatar-img" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div className="fw-medium text-dark">约翰尼·梅托耶</div>
                                    <div className="fs-7">3 小时前</div>
                                </div>
                            </div>
                            <div className="card-action-wrap">
                                <Dropdown>
                                    <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret">
                                        <span className="icon">
                                            <span className="feather-icon">
                                                <MoreHorizontal />
                                            </span>
                                        </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item>操作</Dropdown.Item>
                                        <Dropdown.Item>另一项操作</Dropdown.Item>
                                        <Dropdown.Item>其他选项</Dropdown.Item>
                                        <Dropdown.Divider as="div" />
                                        <Dropdown.Item>分隔链接</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text className="mb-5">更别提 Cupcake Ipsum、Bob Ross Ipsum（"快乐的小云朵"）和毛茸茸的 Cat Ipsum 了。</Card.Text>
                            <div className="feed-img-layout">
                                <Row className="h-200p">
                                    <Col sm={6} className="h-100">
                                        <div className="feed-img h-100" style={{ backgroundImage: `url(${mock11})` }} />
                                    </Col>
                                    <Col sm={6} className="h-100">
                                        <Row className="h-100">
                                            <Col sm={12} className="h-50 pb-2">
                                                <div className="feed-img h-100" style={{ backgroundImage: `url(${mock12})` }} />
                                            </Col>
                                            <Col sm={12} className="h-50 pb-2">
                                                <Row className="h-100">
                                                    <Col sm={6} className="h-100">
                                                        <div className="feed-img h-100" style={{ backgroundImage: `url(${mock13})` }} />
                                                    </Col>
                                                    <Col sm={6} className="h-100">
                                                        <div className="feed-img h-100" style={{ backgroundImage: `url(${mock14})` }} />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                        <Card.Footer className="justify-content-between">
                            <div>
                                <Link to="#"><i className="bi bi-heart-fill text-primary" />30K</Link>
                            </div>
                            <div>
                                <Link to="#">1K 条评论</Link>
                                <Link to="#">12 次分享</Link>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Card className="card-border card-profile-feed border-top-0 rounded-top-0 mb-0">
                        <Card.Body>
                            <Button variant="light" size="sm" className="btn-block mb-4">隐藏评论</Button>
                            <div className="comment-block">
                                <div className="media">
                                    <div className="media-head">
                                        <div className="avatar avatar-xs avatar-rounded">
                                            <img src={avatar14} alt="user" className="avatar-img" />
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <div>
                                            <span className="fw-medium text-dark">马丁·路德</span>
                                        </div>
                                        <Card.Text>从这里开始，你可以运行 truffle compile、truffle migrate 和 truffle test 来编译合约、将合约部署到网络，并运行它们关联的单元测试。</Card.Text>
                                        <div className="comment-action-wrap mt-3">
                                            <span>3 小时前</span>
                                            <span className="comment-dot-sep">●</span>
                                            <Link to="#">回复</Link>
                                            <span className="comment-dot-sep">●</span>
                                            <Link to="#">点赞</Link>
                                        </div>
                                    </Card.Body>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="comment-block">
                            <Form className="w-100">
                                <Form.Group className="mb-0">
                                    <div className="media">
                                        <div className="media-head">
                                            <div className="avatar avatar-xs avatar-rounded">
                                                <img src={avatar3} alt="user" className="avatar-img" />
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <Form.Control as="textarea" rows={1} className="border-0 bg-transparent shadow-none" placeholder="发表评论..." />
                                        </div>
                                    </div>
                                </Form.Group>
                            </Form>
                        </Card.Footer>
                    </Card>
                </div>
                <Card className="card-border card-profile-feed">
                    <Card.Header className="card-header-action">
                        <div className="media align-items-center">
                            <div className="media-head me-2">
                                <div className="avatar avatar-sm avatar-rounded">
                                    <img src={avatar9} alt="user" className="avatar-img" />
                                </div>
                            </div>
                            <div className="media-body">
                                <div className="fw-medium text-dark">米素库·海德</div>
                                <div className="fs-7">11 小时前</div>
                            </div>
                        </div>
                        <div className="card-action-wrap">
                            <Dropdown>
                                <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret">
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <MoreHorizontal />
                                        </span>
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end">
                                    <Dropdown.Item>操作</Dropdown.Item>
                                    <Dropdown.Item>另一项操作</Dropdown.Item>
                                    <Dropdown.Item>其他选项</Dropdown.Item>
                                    <Dropdown.Divider as="div" />
                                    <Dropdown.Item>分隔链接</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text className="mb-5">当年，Sequence 的设计师们决定用手写 Sharpie 笔，把他们为 Chipotle 设计的纸袋包装印上一段 Lorem ipsum 文字。</Card.Text>
                        <Card className="card-border">
                            <div className="position-relative">
                                <img className="card-img" src={mock7} alt="Card img cap" />
                                <Link to="#" className="btn-video-link" />
                            </div>
                        </Card>
                    </Card.Body>
                    <Card.Footer className="justify-content-between">
                        <div>
                            <Link to="#"><i className="bi bi-heart-fill text-primary" />30K</Link>
                        </div>
                        <div>
                            <Link to="#">1K 条评论</Link>
                            <Link to="#">12 次分享</Link>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}

export default Body

'use client';
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Image from 'next/image';
import SimpleBar from 'simplebar-react';
import { Rating } from 'react-simple-star-rating';
import { Button, Card, Col, Container, Form, ListGroup, Nav, Row, Tab } from 'react-bootstrap';
import { Bookmark, ExternalLink, Share } from 'react-feather';
import ReviewModal from './ReviewModal';
import { Carousel } from 'react-responsive-carousel';
import HkBadge from '@/components/@hk-badge/@hk-badge';

//Images
import symbolAvatar1 from '@/assets/img/symbol-avatar-1.png';
import symbolAvatar4 from '@/assets/img/symbol-avatar-4.png';
import symbolAvatar12 from '@/assets/img/symbol-avatar-12.png';
import symbolAvatar14 from '@/assets/img/symbol-avatar-14.png';
import symbolAvatar15 from '@/assets/img/symbol-avatar-15.png';
import symbolAvatar16 from '@/assets/img/symbol-avatar-16.png';
import logoAvatar2 from '@/assets/img/logo-avatar-2.png';
import logoAvatar10 from '@/assets/img/logo-avatar-10.png';
import avatar2 from '@/assets/img/avatar2.jpg';
import avatar3 from '@/assets/img/avatar3.jpg';
import avatar4 from '@/assets/img/avatar4.jpg';
import avatar7 from '@/assets/img/avatar7.jpg';
import avatar8 from '@/assets/img/avatar8.jpg';
import avatar13 from '@/assets/img/avatar13.jpg';
import slide1 from '@/assets/img/slide1.jpg';
import slide2 from '@/assets/img/slide2.jpg';
import slide3 from '@/assets/img/slide3.jpg';
import slide4 from '@/assets/img/slide4.jpg';



const Body = () => {

    const [showReviewModal, setShowReviewModal] = useState(false);

    return (
        <>
            <div className="integrations-body">
                <SimpleBar className="nicescroll-bar">
                    <Container className="container mt-md-7 mt-3">
                        <Row>
                            <Col xxl={8} lg={7}>
                                <div className="media">
                                    <div className="media-head me-3">
                                        <div className="avatar avatar-logo">
                                            <span className="initial-wrap bg-success-light-5">
                                                <Image src={symbolAvatar15} alt="logo" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="hd-bold mb-0">Kickstarter</h3>
                                        <span>由 caoba 提供</span>
                                        <div className="d-flex align-items-center mt-1">
                                            <div className="d-flex align-items-center">
                                                {/* <div className="d-flex align-items-center rating rating-yellow my-rating-4 me-2" data-rating={3} /> */}
                                                <Rating initialValue={3} readonly size="20" className="d-flex align-items-center me-2" />
                                                <span>
                                                    3,123
                                                </span>
                                            </div>
                                            <div className="d-sm-flex align-items-center d-none">
                                                <span className="opacity-15 mx-2">●</span>
                                                <span className="d-flex align-items-center fs-8"><i className="ri-download-cloud-2-line fs-7 me-1 text-primary" />15M 次下载</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl={4} lg={5} className="mt-lg-0 mt-3">
                                <Button variant="primary" className="btn-block">安装</Button>
                                <div className="d-flex mt-3">
                                    <Button variant="light" size="sm" className="btn-block">
                                        <span><span className="icon">
                                            <span className="feather-icon">
                                                <Share />
                                            </span>
                                        </span>
                                            <span>分享</span>
                                        </span>
                                    </Button>
                                    <Button variant="light" size="sm" className="btn-block ms-2 mt-0">
                                        <span><span className="icon">
                                            <span className="feather-icon">
                                                <Bookmark />
                                            </span>
                                        </span>
                                            <span>收藏</span>
                                        </span>
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                        <div className="row">
                            <div className="col-xxl-8 col-lg-7">
                                <div className="product-detail-slider">

                                    {/* <div id="owl_demo_1" className="owl-carousel owl-primary mt-6">
                                    <div className="item" data-hash="zero"><img src={slide1} alt="Owl Img" /></div>
                                    <div className="item" data-hash="one"><img src={slide2} alt="Owl Img" /></div>
                                    <div className="item" data-hash="two"><img src={slide3} alt="Owl Img" /></div>
                                    <div className="item" data-hash="three"><img src={slide4} alt="Owl Img" /></div>
                                </div>
                                <div className="thumb-wrap">
                                    <a className="active-thumb" href="#zero" />
                                    <a href="#one" />
                                    <a href="#two" />
                                    <a href="#three" />
                                </div> */}

                                    <Carousel showArrows={false} showIndicators={false} showStatus={false} emulateTouch={true} showThumbs={true} className="mt-6" >
                                        <div>
                                            <img alt="slide1" src={slide1.src} />
                                        </div>
                                        <div>
                                            <img alt="slide2" src={slide2.src} />
                                        </div>
                                        <div>
                                            <img alt="slide3" src={slide3.src} />
                                        </div>
                                        <div>
                                            <img alt="slide4" src={slide4.src} />
                                        </div>
                                    </Carousel>

                                </div>
                                <div className="separator" />
                                <Tab.Container defaultActiveKey="tabit1" >
                                    <Nav variant="pills" className="nav nav-light nav-pills-rounded justify-content-center">
                                        <Nav.Item>
                                            <Nav.Link eventKey="tabit1">
                                                <span className="nav-link-text">概览</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tabit2">
                                                <span className="nav-link-text">评论</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tabit3">
                                                <span className="nav-link-text">评价</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content className="py-7">
                                        <Tab.Pane eventKey="tabit1">
                                            <h5>概览与功能</h5>
                                            <p>觉得经典 Lorem ipsum 已经过时了？用这些有趣又独特的文本生成器，为你的下一个项目增添一点个性。经典拉丁文段落永远不会过时，用它简单易用的填充文本生成器，尽情享受你想要的 Lorem ipsum。它将前所未有地遭遇烈火与怒火。大家都知道那个叫 Lorem Ipsum 的猪吗？一位&ldquo;极其可靠的信源&rdquo;打电话到我的办公室，告诉我奥巴马（Barack Obama）的占位文本是个骗局。</p>
                                            <Row className="my-7">
                                                <Col xxl={6}>
                                                    <h6>Kaster Shots</h6>
                                                    <p>如果你不刷 Twitter、不看新闻，或者只是听不够《学徒》主持人的传奇演讲，那就试试这款 Trump Lorem ipsum 生成器吧。</p>
                                                </Col>
                                                <Col xxl={6} className="mt-xxl-0 mt-3">
                                                    <h6>Kaster Brilliant</h6>
                                                    <p>如果你还没看过《权力的游戏》，现在就去看。如果看过了，你就会完全理解为什么这款以 Hodor 为主题的 Lorem ipsum 生成器如此出色。</p>
                                                </Col>
                                            </Row>
                                            <h6>更多特色功能</h6>
                                            <ul className="list-ul ps-3">
                                                <li className="mb-1"><span>Kickstarter 是一家总部位于布鲁克林的美国公益公司。</span></li>
                                                <li className="mb-1"><span>纽约，运营着全球众筹平台。</span></li>
                                                <li className="mb-1"><span>该平台专注于创意。公司宣称的使命。</span></li>
                                                <li className="mb-1"><span>帮助将创意项目变为现实。</span></li>
                                                <li><span>Kaster，试试这款 Trump Lorem ipsum 生成器。</span></li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tabit2">
                                            <div className="title title-lg"><span>3 条回复</span></div>
                                            <div className="comment-block">
                                                <Form className="mb-4">
                                                    <Form.Group>
                                                        <div className="media">
                                                            <div className="media-head">
                                                                <div className="avatar avatar-xs avatar-rounded">
                                                                    <Image src={avatar4} alt="user" className="avatar-img" />
                                                                </div>
                                                            </div>
                                                            <div className="media-body">
                                                                <div className="form-inline">
                                                                    <Form.Control className="me-3" />
                                                                    <Button variant="primary">发布</Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Form.Group>
                                                </Form>
                                                <div className="media">
                                                    <div className="media-head">
                                                        <div className="avatar avatar-xs avatar-rounded">
                                                            <Image src={avatar4} alt="user" className="avatar-img" />
                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <div>
                                                            <span className="cm-name">马丁·路德</span>
                                                        </div>
                                                        <p>从这里开始，你可以运行 truffle compile、truffle migrate 和 truffle test 来编译合约、将合约部署到网络，并运行它们关联的单元测试。</p>
                                                        <div className="comment-action-wrap mt-3">
                                                            <span>3 小时前</span>
                                                            <span className="comment-dot-sep">●</span>
                                                            <a href="#">回复</a>
                                                            <span className="comment-dot-sep">●</span>
                                                            <a href="#">点赞</a>
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
                                                        <p>阿什顿·库彻（Ashton Kutcher）完成了非常出色的动态作品</p>
                                                        <div className="comment-action-wrap mt-3">
                                                            <span>3 小时前</span>
                                                            <span className="comment-dot-sep">●</span>
                                                            <a href="#">回复</a>
                                                            <span className="comment-dot-sep">●</span>
                                                            <a href="#">点赞</a>
                                                        </div>
                                                        <div className="media">
                                                            <div className="media-head">
                                                                <div className="avatar avatar-xs avatar-rounded">
                                                                    <Image src={avatar3} alt="user" className="avatar-img" />
                                                                </div>
                                                            </div>
                                                            <div className="media-body">
                                                                <div>
                                                                    <span className="cm-name">阿什顿·库彻</span>
                                                                </div>
                                                                <p>谢谢 :)</p>
                                                                <div className="comment-action-wrap mt-3">
                                                                    <span>3 小时前</span>
                                                                    <span className="comment-dot-sep">●</span>
                                                                    <a href="#">回复</a>
                                                                    <span className="comment-dot-sep">●</span>
                                                                    <a href="#">点赞</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="separator separator-light" />
                                                <div className="media">
                                                    <div className="media-head">
                                                        <div className="avatar avatar-xs avatar-rounded">
                                                            <Image src={avatar4} alt="user" className="avatar-img" />
                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <div>
                                                            <span className="cm-name">菲比·弗莱</span>
                                                        </div>
                                                        <p>如果你的 Lorem ipsum 喜欢&ldquo;超脆&rdquo;的口感，那么 Bacon Ipsum 就是你的占位文本生成器。煎蛋和土豆饼随你选择，不过推荐加一份。</p>
                                                        <div className="comment-action-wrap mt-3">
                                                            <span>2020年2月8日</span>
                                                            <span className="comment-dot-sep">●</span>
                                                            <a href="#">回复</a>
                                                            <span className="comment-dot-sep">●</span>
                                                            <a href="#">点赞</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tabit3">
                                            <div className="review-block">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="title title-lg mb-0 me-3">
                                                            <span>用户评价</span>
                                                        </div>
                                                        <Button variant="soft-primary" onClick={() => setShowReviewModal(!showReviewModal)} >写评价</Button>
                                                    </div>
                                                    <div>
                                                        <Form.Select className="d-md-flex d-none">
                                                            <option value={0}>有帮助的评价</option>
                                                            <option value={1}>评分最高</option>
                                                            <option value={2}>评分较低</option>
                                                            <option value={3}>热门评价</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                                <div className="separator mt-4" />
                                                <div className="review">
                                                    <div className="media align-items-center">
                                                        <div className="media-head">
                                                            <div className="avatar avatar-xs avatar-rounded">
                                                                <Image src={avatar7} alt="user" className="avatar-img" />
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <span className="cr-name">马丁·路德</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-sm-nowrap flex-wrap mt-2 mb-1">
                                                        <Rating initialValue={4} readonly size="20" className="d-flex align-items-center me-2 mb-sm-0 mb-2" />
                                                        <div>针对 <span className="text-dark mx-1">设计质量</span> <span className="fs-8">2020年1月12日</span></div>
                                                    </div>
                                                    <p>一款手工制作、小批量、文艺范的手冲版经典 Lorem ipsum 生成器——Hipster Ipsum 会让你的原型图多一分蓝领气息。</p>
                                                    <div className="review-action-wrap mt-3">
                                                        <span className="me-1">这条评价对你有帮助吗？</span>
                                                        <Button variant="outline-light me-1" size="xs">是</Button>
                                                        <Button variant="outline-light me-1" size="xs">否</Button>
                                                        <span className="review-dot-sep">●</span>
                                                        <a href="#">回复</a>
                                                        <span className="review-dot-sep">●</span>
                                                        <a href="#">举报</a>
                                                    </div>
                                                </div>
                                                <div className="separator separator-light" />
                                                <div className="review">
                                                    <div className="media align-items-center">
                                                        <div className="media-head">
                                                            <div className="avatar avatar-xs">
                                                                <Image src={avatar8} alt="user" className="avatar-img rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <span className="cr-name">凯瑟琳·琼斯</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-sm-nowrap flex-wrap mt-2 mb-1">
                                                        <Rating initialValue={3} readonly size="20" className="d-flex align-items-center me-2 mb-sm-0 mb-2" />
                                                        <div>针对 <span className="text-dark mx-1">客服支持</span> <span className="fs-8">2020年1月10日</span></div>
                                                    </div>
                                                    <p>如果你的 Lorem ipsum 喜欢&ldquo;超脆&rdquo;的口感，那么 Bacon Ipsum 就是你的占位文本生成器。煎蛋和土豆饼随你选择，不过推荐加一份。想要甜甜的 Lorem ipsum？Cupcake Ipsum 满足你，它是唯一包含棉花糖、胡萝卜蛋糕，甚至可能还有樱桃点缀的文本生成器。</p>
                                                    <div className="review-action-wrap mt-3">
                                                        <span className="me-1">这条评价对你有帮助吗？</span>
                                                        <Button variant="outline-light me-1" size="xs">是</Button>
                                                        <Button variant="outline-light me-1" size="xs">否</Button>
                                                        <span className="review-dot-sep">●</span>
                                                        <a href="#">回复</a>
                                                        <span className="review-dot-sep">●</span>
                                                        <a href="#">举报</a>
                                                    </div>
                                                </div>
                                                <div className="separator separator-light" />
                                                <div className="review">
                                                    <div className="media align-items-center">
                                                        <div className="media-head">
                                                            <div className="avatar avatar-xs">
                                                                <Image src={avatar3} alt="user" className="avatar-img rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <span className="cr-name">菲比·弗莱</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-sm-nowrap flex-wrap mt-2 mb-1">
                                                        <Rating initialValue={2} readonly size="20" className="d-flex align-items-center me-2 mb-sm-0 mb-2" />
                                                        <div>for <span className="text-dark mx-1">设计质量</span> <span className="fs-8">2020年12月31日</span></div>
                                                    </div>
                                                    <p>作为一款网页生成器和 jQuery 插件，Delorean Ipsum 使用《回到未来》的台词，为每个项目（无论是过去还是现在）生成值得引用的 Lorem ipsum 文本。</p>
                                                    <div className="review-action-wrap mt-3">
                                                        <span className="me-1">这条评价对你有帮助吗？</span>
                                                        <Button variant="outline-light me-1" size="xs">是</Button>
                                                        <Button variant="outline-light me-1" size="xs">否</Button>
                                                        <span className="review-dot-sep">●</span>
                                                        <a href="#">回复</a>
                                                        <span className="review-dot-sep">●</span>
                                                        <a href="#">举报</a>
                                                    </div>
                                                    <div className="review">
                                                        <div className="media align-items-center">
                                                            <div className="media-head">
                                                                <div className="avatar avatar-xs">
                                                                    <Image src={avatar13} alt="user" className="avatar-img rounded-circle" />
                                                                </div>
                                                            </div>
                                                            <div className="media-body">
                                                                <span className="cr-name">阿什顿·库彻</span>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-sm-nowrap flex-wrap mt-2 mb-1">
                                                            <div><span className="fs-8">2020年1月1日</span></div>
                                                        </div>
                                                        <p>太空——最后的边疆。这是星舰&ldquo;进取号&rdquo;的航行历程。</p>
                                                        <div className="review-action-wrap mt-3">
                                                            <span className="me-1">这条评价对你有帮助吗？</span>
                                                            <Button variant="outline-light me-1" size="xs">Yes</Button>
                                                            <Button variant="outline-light me-1" size="xs">No</Button>
                                                            <span className="review-dot-sep">●</span>
                                                            <a href="#">回复</a>
                                                            <span className="review-dot-sep">●</span>
                                                            <a href="#">举报</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                            <Col xxl={4} lg={5}>
                                <div className="content-aside">
                                    <Card className="card-border mt-6">
                                        <Card.Body>
                                            <h6 className="mb-4">分类</h6>
                                            <div className="tag-cloud">
                                                <HkBadge as="a" href="#" bg="primary" soft className="me-1">caoba</HkBadge>
                                                <HkBadge as="a" href="#" bg="primary" soft className="me-1">Bootstrap 5</HkBadge>
                                                <HkBadge as="a" href="#" bg="primary" soft className="me-1">后台管理模板</HkBadge>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card className="card-border">
                                        <Card.Body>
                                            <div className="media align-items-center">
                                                <div className="media-head me-3">
                                                    <div className="avatar avatar-sm avatar-icon avatar-soft-success avatar-rounded">
                                                        <span className="initial-wrap">
                                                            <span className="feather-icon">
                                                                <ExternalLink />
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="mb-0">网站</h6>
                                                    <a href="#" className="link-muted">kickstarter.com</a>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card className="card-border">
                                        <Card.Body>
                                            <h6 className="mb-4">其他信息</h6>
                                            <ul className="list-unstyled">
                                                <li className="mb-3">
                                                    <div className="fs-7">版本</div>
                                                    <div className="text-dark fw-medium">A3.45-4.0</div>
                                                </li>
                                                <li className="mb-3">
                                                    <div className="fs-7">更新时间</div>
                                                    <div className="text-dark fw-medium">2020年5月20日</div>
                                                </li>
                                                <li className="mb-3">
                                                    <div className="fs-7">大小</div>
                                                    <div className="text-dark fw-medium">4.35 MB</div>
                                                </li>
                                                <li className="mb-3">
                                                    <div className="fs-7">语言</div>
                                                    <div className="text-dark fw-medium">英语、西班牙语、法语</div>
                                                </li>
                                                <li className="mb-3">
                                                    <div className="fs-7">开发者</div>
                                                    <div className="text-dark fw-medium d-flex align-items-center">caoba<i className="ri-information-fill fs-7 ms-1 lh-1" /></div>
                                                </li>
                                                <li className="mb-3">
                                                    <div className="fs-7">资源</div>
                                                    <div className="text-dark fw-medium d-flex align-items-center">产品文档<a href="#some" className="d-flex"><i className="ri-external-link-line fs-7 ms-1 lh-1" /></a></div>
                                                </li>
                                                <li>
                                                    <a href="#some" className="d-flex align-items-center link-danger"><span className="d-flex"><i className="ri-information-line fs-7 me-1 lh-1" /></span>举报</a>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                    <Card className="card-border">
                                        <Card.Body>
                                            <h6 className="mb-4">相关</h6>
                                            <ListGroup as="ul" variant="flush">
                                                <ListGroup.Item as="li" className="border-0 px-0">
                                                    <a href="#">
                                                        <div className="media align-items-center">
                                                            <div className="media-head me-3">
                                                                <div className="avatar avatar-sm avatar-logo">
                                                                    <span className="initial-wrap bg-success-light-5">
                                                                        <Image src={symbolAvatar14} alt="logo" />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="media-body d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <h6 className="mb-0">Intercom</h6>
                                                                    <div className="fs-7 text-muted">聊天应用</div>
                                                                    <div className="d-flex align-items-center fs-8 text-muted"><i className="ri-download-cloud-2-line fs-7 me-1 text-primary" />15M 次下载</div>
                                                                </div>
                                                                <HkBadge size="sm" bg="primary" >
                                                                    <span><span className="icon"><i className="ri-star-s-fill" /></span>4.5</span>
                                                                </HkBadge>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li" className="border-0 px-0">
                                                    <a href="#">
                                                        <div className="media align-items-center">
                                                            <div className="media-head me-3">
                                                                <div className="avatar avatar-sm">
                                                                    <Image className="avatar-img" src={logoAvatar2} alt="logo" />
                                                                </div>
                                                            </div>
                                                            <div className="media-body d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <h6 className="mb-0">Swiggy</h6>
                                                                    <div className="fs-7 text-muted">外卖配送</div>
                                                                    <div className="d-flex align-items-center fs-8 text-muted"><i className="ri-download-cloud-2-line fs-7 me-1 text-primary" />15M 次下载</div>
                                                                </div>
                                                                <HkBadge size="sm" bg="warning" >
                                                                    <span><span className="icon"><i className="ri-star-s-fill" /></span>3.5</span>
                                                                </HkBadge>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li" className="border-0 px-0">
                                                    <a href="#">
                                                        <div className="media align-items-center">
                                                            <div className="media-head me-3">
                                                                <div className="avatar avatar-sm">
                                                                    <Image className="avatar-img" src={logoAvatar10} alt="logo" />
                                                                </div>
                                                            </div>
                                                            <div className="media-body d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <h6 className="mb-0">Medium</h6>
                                                                    <div className="fs-7 text-muted">博客</div>
                                                                    <div className="d-flex align-items-center fs-8 text-muted"><i className="ri-download-cloud-2-line fs-7 me-1 text-primary" />15M 次下载</div>
                                                                </div>
                                                                <HkBadge size="sm" bg="danger" >
                                                                    <span><span className="icon"><i className="ri-star-s-fill" /></span>2.0</span>
                                                                </HkBadge>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li" className="border-0 px-0">
                                                    <a href="#">
                                                        <div className="media align-items-center">
                                                            <div className="media-head me-3">
                                                                <div className="avatar avatar-sm avatar-logo">
                                                                    <span className="initial-wrap bg-dark">
                                                                        <Image src={symbolAvatar12} alt="logo" />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="media-body d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <h6 className="mb-0">Figma</h6>
                                                                    <div className="fs-7 text-muted">设计工具</div>
                                                                    <div className="d-flex align-items-center fs-8 text-muted"><i className="ri-download-cloud-2-line fs-7 me-1 text-primary" />15M 次下载</div>
                                                                </div>
                                                                <HkBadge size="sm" bg="primary" >
                                                                    <span><span className="icon"><i className="ri-star-s-fill" /></span>4.5</span>
                                                                </HkBadge>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </div>
                        <h6 className="text-center mt-10 mb-4">相似应用</h6>
                        <Row>
                            <Col xl={3} md={6}>
                                <Card className="card-border text-center">
                                    <Card.Body>
                                        <div className="avatar avatar-sm avatar-violet mb-3">
                                            <span className="initial-wrap">Cb</span>
                                        </div>
                                        <div className="app-name">caoba</div>
                                        <div className="app-cat">聊天应用</div>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <Rating initialValue={3} readonly size="20" className="d-flex align-items-center me-2" />
                                            <span className="fs-8">3,672</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} md={6}>
                                <Card className="card-border text-center">
                                    <Card.Body>
                                        <div className="avatar avatar-sm avatar-logo mb-3">
                                            <span className="initial-wrap">
                                                <Image src={symbolAvatar4} alt="logo" />
                                            </span>
                                        </div>
                                        <div className="app-name">caoba</div>
                                        <div className="app-cat">仪表盘模板</div>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <Rating initialValue={3} readonly size="20" className="d-flex align-items-center me-2" />
                                            <span className="fs-8">3,672</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} md={6}>
                                <Card className="card-border text-center">
                                    <Card.Body>
                                        <div className="avatar avatar-sm avatar-logo mb-3">
                                            <span className="initial-wrap">
                                                <Image src={symbolAvatar1} alt="logo" />
                                            </span>
                                        </div>
                                        <div className="app-name">Tinder</div>
                                        <div className="app-cat">交友应用</div>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <Rating initialValue={4} readonly size="20" className="d-flex align-items-center me-2" />
                                            <span className="fs-8">3,672</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} md={6}>
                                <Card className="card-border text-center">
                                    <Card.Body>
                                        <div className="avatar avatar-sm avatar-logo mb-3">
                                            <span className="initial-wrap">
                                                <Image src={symbolAvatar16} alt="logo" />
                                            </span>
                                        </div>
                                        <div className="app-name">Github</div>
                                        <div className="app-cat">极客开发</div>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <Rating initialValue={3.5} allowFraction readonly size="20" className="d-flex align-items-center me-2" />
                                            <span className="fs-8">3,672</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </SimpleBar>
            </div>
            {/* Write Reveiw */}
            <ReviewModal show={showReviewModal} closeModal={() => setShowReviewModal(!showReviewModal)} />

        </>
    )
}

export default Body

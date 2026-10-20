'use client';
import Image from 'next/image';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

//Images
import symbolAvatar1 from '@/assets/img/symbol-avatar-1.png';
import symbolAvatar4 from '@/assets/img/symbol-avatar-4.png';
import symbolAvatar5 from '@/assets/img/symbol-avatar-5.png';
import symbolAvatar6 from '@/assets/img/symbol-avatar-6.png';
import symbolAvatar7 from '@/assets/img/symbol-avatar-7.png';
import symbolAvatar9 from '@/assets/img/symbol-avatar-9.png';
import symbolAvatar10 from '@/assets/img/symbol-avatar-10.png';
import symbolAvatar11 from '@/assets/img/symbol-avatar-11.png';
import symbolAvatar12 from '@/assets/img/symbol-avatar-12.png';
import symbolAvatar13 from '@/assets/img/symbol-avatar-13.png';
import symbolAvatar14 from '@/assets/img/symbol-avatar-14.png';
import symbolAvatar15 from '@/assets/img/symbol-avatar-15.png';
import symbolAvatar16 from '@/assets/img/symbol-avatar-1.png';
import logoAvatar1 from '@/assets/img/logo-avatar-1.png';
import logoAvatar2 from '@/assets/img/logo-avatar-2.png';
import logoAvatar3 from '@/assets/img/logo-avatar-3.png';
import logoAvatar5 from '@/assets/img/logo-avatar-5.png';
import logoAvatar8 from '@/assets/img/logo-avatar-8.png';
import logoAvatar10 from '@/assets/img/logo-avatar-10.png';


const Body = () => {
    return (
        <div className="integrations-body">
            <SimpleBar className="nicescroll-bar">
                <Container className="mt-md-7 mt-3">
                    <div className="d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between mb-5">
                        <div>
                            <h5>为你推荐</h5>
                            <p>因为你安装了 caoba 模板，以下是为你推荐的应用。</p>
                        </div>
                        <a href="#" className="fs-7 flex-shrink-0"><u>查看全部</u></a>
                    </div>
                    <Row>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm avatar-logo mb-3">
                                        <span className="initial-wrap">
                                            <Image src={symbolAvatar14} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Intercom</div>
                                    <div className="app-cat">聊天应用</div>
                                    <p className="p-sm multine-ellipsis">Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae.</p>
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
                                        <Image src={logoAvatar2} alt="user" className="avatar-img" />
                                    </div>
                                    <div className="app-name">Swiggy</div>
                                    <div className="app-cat">外卖配送</div>
                                    <p className="p-sm multine-ellipsis">Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Dictum fusce ut placerat orci. Semper viverra nam libero justo laoreet sit amet.</p>
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
                                        <Image src={logoAvatar10} alt="user" className="avatar-img" />
                                    </div>
                                    <div className="app-name">Medium</div>
                                    <div className="app-cat">博客</div>
                                    <p className="p-sm multine-ellipsis">Purus viverra accumsan in nisl nisi scelerisque. Quam vulputate dignissim suspendisse in est ante. Est ultricies integer quis auctor elit sed.</p>
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
                                            <Image src={symbolAvatar12} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Figma</div>
                                    <div className="app-cat">设计工具</div>
                                    <p className="p-sm multine-ellipsis">Viverra nam libero justo laoreet sit amet cursus sit amet. Faucibus vitae aliquet nec ullamcorper.</p>
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
                            <p>全球数百万人使用并喜爱的应用。</p>
                        </div>
                        <a href="#" className="fs-7 flex-shrink-0"><u>查看全部</u></a>
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
                                    <p className="p-sm multine-ellipsis">Id diam maecenas ultricies mi eget mauris. At consectetur lorem donec massa sapien faucibus et.</p>
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
                                            <Image src={symbolAvatar4} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">caoba</div>
                                    <div className="app-cat">仪表盘模板</div>
                                    <p className="p-sm multine-ellipsis">Ac ut consequat semper viverra nam libero justo laoreet sit. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo.</p>
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
                                            <Image src={symbolAvatar1} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Tinder</div>
                                    <div className="app-cat">交友应用</div>
                                    <p className="p-sm multine-ellipsis">Laoreet suspendisse interdum consectetur libero id faucibus. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. </p>
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
                                            <Image src={symbolAvatar16} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Github</div>
                                    <div className="app-cat">极客开发</div>
                                    <p className="p-sm multine-ellipsis">Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Elit at imperdiet dui accumsan sit. Condimentum lacinia.</p>
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
                                            <Image src={symbolAvatar5} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Dribbble</div>
                                    <div className="app-cat">灵感创意</div>
                                    <p className="p-sm multine-ellipsis">Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae.</p>
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
                                        <Image src={logoAvatar1} className="avatar-img" alt="logo" />
                                    </div>
                                    <div className="app-name">Phone Pay</div>
                                    <div className="app-cat">支付</div>
                                    <p className="p-sm multine-ellipsis">Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Dictum fusce ut placerat orci. Semper viverra nam libero justo laoreet sit amet. </p>
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
                                        <Image src={logoAvatar3} className="avatar-img" alt="logo" />
                                    </div>
                                    <div className="app-name">Coursera</div>
                                    <div className="app-cat">在线课程</div>
                                    <p className="p-sm multine-ellipsis">Purus viverra accumsan in nisl nisi scelerisque. Quam vulputate dignissim suspendisse in est ante. Est ultricies integer quis auctor elit sed. </p>
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
                                            <Image src={symbolAvatar15} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Kickstarter</div>
                                    <div className="app-cat">众筹</div>
                                    <p className="p-sm multine-ellipsis">Viverra nam libero justo laoreet sit amet cursus sit amet. Faucibus vitae aliquet nec ullamcorper. </p>
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
                            <p>为热爱开发的你准备，不在乎别人在做什么。</p>
                        </div>
                        <a href="#" className="fs-7 flex-shrink-0"><u>查看全部</u></a>
                    </div>
                    <Row>
                        <Col xxl={3} xl={4} md={6}>
                            <Card className="card-border card-int mb-4">
                                <Card.Body>
                                    <div className="avatar avatar-sm avatar-logo mb-3">
                                        <span className="initial-wrap">
                                            <Image src={symbolAvatar9} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Propswala</div>
                                    <div className="app-cat">玩具与帐篷</div>
                                    <p className="p-sm multine-ellipsis">Ac ut consequat semper viverra nam libero justo laoreet sit. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo.</p>
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
                                            <Image src={symbolAvatar7} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Icons8</div>
                                    <div className="app-cat">图标</div>
                                    <p className="p-sm multine-ellipsis">Laoreet suspendisse interdum consectetur libero id faucibus. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. </p>
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
                                            <Image src={symbolAvatar6} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Behance</div>
                                    <div className="app-cat">协作</div>
                                    <p className="p-sm multine-ellipsis">Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Elit at imperdiet dui accumsan sit. Condimentum lacinia.</p>
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
                                            <Image src={symbolAvatar10} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Medium</div>
                                    <div className="app-cat">出版</div>
                                    <p className="p-sm multine-ellipsis">Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae.</p>
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
                                            <Image src={symbolAvatar11} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Node Js</div>
                                    <div className="app-cat">javascript</div>
                                    <p className="p-sm multine-ellipsis">Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Dictum fusce ut placerat orci. Semper viverra nam libero justo laoreet sit amet. </p>
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
                                        <Image src={logoAvatar8} className="avatar-img" alt="logo" />
                                    </div>
                                    <div className="app-name">Indian Type Factory</div>
                                    <div className="app-cat">字体</div>
                                    <p className="p-sm multine-ellipsis">Purus viverra accumsan in nisl nisi scelerisque. Quam vulputate dignissim suspendisse in est ante. Est ultricies integer quis auctor elit sed. </p>
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
                                        <Image src={logoAvatar5} className="avatar-img" alt="logo" />
                                    </div>
                                    <div className="app-name">City Deals</div>
                                    <div className="app-cat">优惠</div>
                                    <p className="p-sm multine-ellipsis">Viverra nam libero justo laoreet sit amet cursus sit amet. Faucibus vitae aliquet nec ullamcorper. </p>
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
                                            <Image src={symbolAvatar13} alt="logo" />
                                        </span>
                                    </div>
                                    <div className="app-name">Sketch</div>
                                    <div className="app-cat">设计工具</div>
                                    <p className="p-sm multine-ellipsis">Id diam maecenas ultricies mi eget mauris. At consectetur lorem donec massa sapien faucibus et.</p>
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

import React, { useEffect } from 'react';
import { Button, Col, Container, Form, Nav, Row, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
import { toggleCollapsedNav } from '../../../redux/action/Theme';

//Image
import avatar3 from '../../../assets/img/avatar3.jpg';

const EditProfile = ({ toggleCollapsedNav }) => {

    useEffect(() => {
        toggleCollapsedNav(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <div className="hk-pg-header pt-7 pb-4">
                <h1 className="pg-title">编辑个人资料</h1>
                <p>头像组件用于代表用户，显示个人照片、姓名首字母或备用图标。</p>
            </div>
            {/* Page Body */}
            <div className="hk-pg-body">
                <Tab.Container defaultActiveKey="tabBlock1">
                    <Row className="edit-profile-wrap">
                        <Col xs={4} sm={3} lg={2}>
                            <div className="nav-profile mt-4">
                                <div className="nav-header">
                                    <span>账户</span>
                                </div>
                                <Nav as="ul" variant="tabs" className="nav-light nav-vertical">
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="tabBlock1">
                                            <span className="nav-link-text">公开资料</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="tabBlock2">
                                            <span className="nav-link-text">账户设置</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="tabBlock3">
                                            <span className="nav-link-text">隐私设置</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="tabBlock4">
                                            <span className="nav-link-text">登录与安全</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link>
                                            <span className="nav-link-text">通知</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link>
                                            <span className="nav-link-text">人脉</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link>
                                            <span className="nav-link-text">账单信息</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Col>
                        <Col lg={10} sm={9} xs={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="tabBlock1">
                                    <Form>
                                        <Row className="gx-3">
                                            <Col sm={12}>
                                                <Form.Group>
                                                    <div className="media align-items-center">
                                                        <div className="media-head me-5">
                                                            <div className="avatar avatar-rounded avatar-xxl">
                                                                <img src={avatar3} alt="user" className="avatar-img" />
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <Button variant="soft-primary" className="btn-file mb-1">
                                                                上传照片
                                                                <Form.Control type="file" className="upload" />
                                                            </Button>
                                                            <Form.Text as="div" className="form-text text-muted">
                                                                建议上传 450×450 像素的图片以获得更好的预览效果，最大不超过 5MB。
                                                            </Form.Text>
                                                        </div>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="title title-xs title-wth-divider text-primary text-uppercase my-4"><span>个人信息</span></div>
                                        <Row className="gx-3">
                                            <Col sm={6}>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label>名字</Form.Label>
                                                    <Form.Control type="text" defaultValue="凯特" />
                                                </Form.Group>
                                            </Col>
                                            <Col sm={6}>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label>姓氏</Form.Label>
                                                    <Form.Control type="text" defaultValue="琼斯" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="gx-3">
                                            <Col sm={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>所在地</Form.Label>
                                                    <Form.Control type="text" defaultValue="纽约一号巷" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="gx-3">
                                            <Col sm={12}>
                                                <Form.Group className="mb-3">
                                                    <div className="form-label-group">
                                                        <Form.Label>简介</Form.Label>
                                                        <small className="text-muted">1200</small>
                                                    </div>
                                                    <Form.Control as="textarea" rows={8} placeholder="写一条内部备注" />
                                                    <Form.Text muted>
                                                        简单介绍一下自己，这将会显示在你的个人资料页面。
                                                    </Form.Text>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="title title-xs title-wth-divider text-primary text-uppercase my-4">
                                            <span>其他信息</span>
                                        </div>
                                        <Row className="gx-3">
                                            <Col sm={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>个人网站</Form.Label>
                                                    <Form.Control type="text" defaultValue="caoba.com" />
                                                </Form.Group>
                                            </Col>
                                            <Col sm={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>电话</Form.Label>
                                                    <Form.Control type="tel" defaultValue="xxxxxxx987" />
                                                </Form.Group>
                                                <Form.Check
                                                    type='checkbox'
                                                    id="customCheckList4"
                                                    label="对我的号码保密"
                                                />
                                            </Col>
                                        </Row>
                                        <Button variant="primary" className="mt-5">保存更改</Button>
                                    </Form>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tabBlock2">
                                    <div className="title-lg fs-4"><span>账户设置</span></div>
                                    <p className="mb-4">头像组件用于代表用户，显示个人照片、姓名首字母或备用图标。</p>
                                    <Form>
                                        <Row className="gx-3">
                                            <Col sm={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>用户名</Form.Label>
                                                    <Form.Control type="text" defaultValue="凯特" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="gx-3">
                                            <Col sm={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>邮箱</Form.Label>
                                                    <Form.Control type="text" defaultValue="纽约一号巷" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="gx-3">
                                            <Col sm={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>URL</Form.Label>
                                                    <Form.Control type="text" defaultValue="caoba.com" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="title title-xs title-wth-divider text-primary text-uppercase my-4"><span>跟踪代码</span></div>
                                        <Row className="gx-3">
                                            <Col sm={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Google Analytics 跟踪代码</Form.Label>
                                                    <Form.Control type="text" defaultValue="UA-1387652-1" />
                                                    <Form.Text muted>
                                                        在你的 Google Analytics 账户中跟踪浏览量和个人资料访问量，例如 UA-0000000-0
                                                    </Form.Text>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="title title-xs title-wth-divider text-primary text-uppercase my-4"><span>账户变更</span></div>
                                        <Row className="gx-3">
                                            <Col sm={6}>
                                                <Form.Group className="mb-3">
                                                    <Link to="#" className="h5 d-block mb-0">删除账户</Link>
                                                    <Form.Text muted>
                                                        删除账户及你的所有数据
                                                    </Form.Text>
                                                </Form.Group>
                                            </Col>
                                            <Col sm={6} className="text-end">
                                                <Form.Group className="mb-3">
                                                    <Button variant="danger">关闭账户</Button>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Button variant="primary" className="mt-5">保存更改</Button>
                                    </Form>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tabBlock3">
                                    <div className="title-lg fs-4 mb-4">
                                        <span>隐私设置</span>
                                    </div>
                                    <Form>
                                        <Row className="gx-3">
                                            <Col sm={12}>
                                                <Form.Check className="form-check-lg">
                                                    <Form.Check.Input id="customChecks1" />
                                                    <Form.Check.Label htmlFor="customChecks1">允许他人通过邮箱地址找到我</Form.Check.Label>
                                                    <Form.Text muted className="d-block">拥有你邮箱地址的人可以通过 caoba 联系到你</Form.Text>
                                                </Form.Check>
                                                <div className="separator" />
                                                <Form.Check className="form-check-lg">
                                                    <Form.Check.Input id="customChecks2" />
                                                    <Form.Check.Label htmlFor="customChecks2">对我的手机号码保密</Form.Check.Label>
                                                    <Form.Text muted className="d-block">任何人都无法通过你的手机号码找到你。你的手机号码将不再与你的联系人共享。</Form.Text>
                                                </Form.Check>
                                                <div className="separator" />
                                                <Form.Check className="form-check-lg">
                                                    <Form.Check.Input id="customChecks3" />
                                                    <Form.Check.Label htmlFor="customChecks3">保持我的位置共享开启</Form.Check.Label>
                                                    <Form.Text muted className="d-block">Jmapack Web 应用会随时随地共享你的位置</Form.Text>
                                                </Form.Check>
                                                <div className="separator" />
                                                <Form.Check className="form-check-lg">
                                                    <Form.Check.Input id="customChecks4" />
                                                    <Form.Check.Label htmlFor="customChecks4">通过精选合作伙伴共享数据</Form.Check.Label>
                                                    <Form.Text muted className="d-block">这是一段用于演示的占位文本，仅用于填充界面版式，正式发布时会被真实内容替换。</Form.Text>
                                                </Form.Check>
                                            </Col>
                                        </Row>
                                        <Button variant="primary" className="mt-5">保存更改</Button>
                                    </Form>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tabBlock4">
                                    <div className="title-lg fs-4"><span>登录与安全</span></div>
                                    <p className="mb-4">头像组件用于代表用户，显示个人照片、姓名首字母或备用图标。</p>
                                    <Form>
                                        <div className="title title-xs title-wth-divider text-primary text-uppercase my-4"><span>密码设置</span></div>
                                        <Row className="gx-3">
                                            <Col sm={12}>
                                                <Form.Group>
                                                    <Form.Label>密码</Form.Label>
                                                    <Form.Control type="password" defaultValue="Katervewe" />
                                                    <Button variant="primary" className="mt-3">修改密码</Button>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="title title-xs title-wth-divider text-primary text-uppercase my-4"><span>其他安全设置</span></div>
                                        <Row className="gx-3">
                                            <Col sm={12}>
                                                <Form.Group>
                                                    <Form.Label>两步验证 (2FA)</Form.Label>
                                                    <Form.Text muted className="d-block">
                                                        两步验证能大幅降低你 Google 账户中的个人信息被盗用的风险。为什么？因为黑客不仅要拿到你的密码和用户名，还得拿到你的手机。系统可能会向<strong>你之前预留的号码</strong>发送一个<a href="#some" className="text-primary">6 位数字</a>验证码。验证码可以通过短信（SMS）或语音电话发送，具体取决于你选择的设置。为确认是你本人，请在登录界面输入该验证码。
                                                    </Form.Text>
                                                    <Button variant="primary" className="mt-3">添加身份验证</Button>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
            {/* /Page Body */}
        </Container>

    )
}

const mapStateToProps = ({ theme }) => {
    const { navCollapsed } = theme;
    return { navCollapsed }
};

export default connect(mapStateToProps, { toggleCollapsedNav })(EditProfile);

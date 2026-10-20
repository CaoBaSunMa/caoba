import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CommanFooter1 from '../../CommanFooter1';

//Images
import logo from '../../../../assets/img/logo-light.png';
import signupBg from '../../../../assets/img/signup-bg.jpg';
import slide1 from '../../../../assets/img/slide1.jpg';
import slide2 from '../../../../assets/img/slide2.jpg';

const Signup = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="hk-pg-wrapper py-0">
            <div className="hk-pg-body py-0">
                <Container fluid>
                    <Row className="auth-split">
                        <Col xl={5} lg={6} md={5} className="d-md-block d-none bg-primary-dark-3 bg-opacity-85 position-relative">
                            <img className="bg-img" src={signupBg} alt="bg-img" />
                            <div className="auth-content py-8">
                                <Row>
                                    <Col xxl={8} className="mx-auto">
                                        <div className="text-center">
                                            <h3 className="text-white mb-2">为您下一个 Web 项目准备的高质量 Bootstrap 模板。</h3>
                                            <p className="text-white">立即开始您的 <u>14 天免费</u> 试用。</p>
                                        </div>
                                        <ul className="list-icon text-white mt-4">
                                            <li className="mb-1">
                                                <p><i className="ri-check-fill" /><span>这里提供了多种不同形式的 Lorem Ipsum 段落文本，以某种形式，通过注入的幽默呈现。</span></p>
                                            </li>
                                            <li className="mb-1">
                                                <p><i className="ri-check-fill" /><span>这里提供了多种不同形式的 Lorem Ipsum 段落文本，以某种形式，通过注入的幽默呈现。</span></p>
                                            </li>
                                        </ul>
                                        <Row className="gx-3 mt-7">
                                            <Col lg={6}>
                                                <Card className="card-shadow">
                                                    <Card.Img variant="top" src={slide1} alt="Card img cap" />
                                                    <Card.Body>
                                                        <Card.Title className="text-uppercase">帮助中心</Card.Title>
                                                        <Card.Text>这是一张更宽的卡片，附有辅助文本。</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={6}>
                                                <Card className="card-shadow">
                                                    <Card.Img variant="top" src={slide2} alt="Card img cap" />
                                                    <Card.Body>
                                                        <Card.Title className="text-uppercase">研究中心</Card.Title>
                                                        <Card.Text>这是一张更宽的卡片，附有辅助文本。</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                            <p className="p-xs text-white credit-text opacity-55">所有插画均由 <a href="https://icons8.com/ouch/" target="_blank" className="link-white" rel="noreferrer"><u>OUCH</u></a> 提供</p>
                        </Col>
                        <Col xl={7} lg={6} md={7} sm={10} className="position-relative mx-auto">
                            <div className="auth-content flex-column pt-8 pb-md-8 pb-13">
                                <div className="text-center mb-7">
                                    <Link to="/" className="navbar-brand me-0">
                                        <img className="brand-img d-inline-block" src={logo} alt="brand" />
                                    </Link>
                                </div>
                                <Form className="w-100">
                                    <Row>
                                        <Col xxl={5} xl={7} lg={10} className="mx-auto">
                                            <h4 className="text-center mb-4">注册 caoba</h4>
                                            <Button variant="outline-dark" className="btn-rounded btn-block mb-3">
                                                <span>
                                                    <span className="icon">
                                                        <FontAwesomeIcon icon={faGoogle} />
                                                    </span>
                                                    <span>使用 Gmail 注册</span>
                                                </span>
                                            </Button>
                                            <Button variant="social-facebook" className="btn-social btn-rounded btn-block">
                                                <span>
                                                    <span className="icon">
                                                        <FontAwesomeIcon icon={faFacebook} />
                                                    </span>
                                                    <span>使用 Facebook 注册</span>
                                                </span>
                                            </Button>
                                            <div className="title-sm title-wth-divider divider-center my-4"><span>或</span></div>
                                            <Row className="gx-3">
                                                <Col lg={6} as={Form.Group} className="mb-3">
                                                    <Form.Label>姓名</Form.Label>
                                                    <Form.Control placeholder="请输入您的姓名" type="text" />
                                                </Col>
                                                <Col lg={6} as={Form.Group} className="mb-3">
                                                    <Form.Label>用户名</Form.Label>
                                                    <Form.Control placeholder="请输入用户名" type="text" />
                                                </Col>
                                                <Col lg={12} as={Form.Group} className="mb-3">
                                                    <Form.Label>邮箱</Form.Label>
                                                    <Form.Control placeholder="请输入您的邮箱" type="text" />
                                                </Col>
                                                <Col lg={12} as={Form.Group} className="mb-3">
                                                    <Form.Label>密码</Form.Label>
                                                    <InputGroup className="password-check">
                                                        <span className="input-affix-wrapper affix-wth-text">
                                                            <Form.Control placeholder="至少 6 个字符" type={showPassword ? "text" : "password"} />
                                                            <Link to="#" className="input-suffix text-primary text-uppercase fs-8 fw-medium" onClick={() => setShowPassword(!showPassword)} >
                                                                {showPassword
                                                                    ?
                                                                    <span>隐藏</span>
                                                                    :
                                                                    <span>显示</span>
                                                                }
                                                            </Link>
                                                        </span>
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                            <Form.Check id="logged_in" className="form-check-sm mb-3" >
                                                <Form.Check.Input type="checkbox" defaultChecked />
                                                <Form.Check.Label className="text-muted fs-7">
                                                    创建账户即表示您已阅读并同意我们的 <Link to="#">使用条款</Link> 和 <Link to="#">隐私政策</Link>。我们可能会通过默认的 <Link to="#">通知设置</Link>向您告知最新更新。
                                                </Form.Check.Label>
                                            </Form.Check>
                                            <Button variant='primary' className="btn-rounded btn-uppercase btn-block" as={Link} to="login" >创建账户</Button>
                                            <p className="p-xs mt-2 text-center">已有账号？ <Link to="#"><u>登录</u></Link></p>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                            {/* Page Footer */}
                            <CommanFooter1 />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default Signup

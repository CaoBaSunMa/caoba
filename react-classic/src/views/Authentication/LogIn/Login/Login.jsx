import React, { useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { ExternalLink } from 'react-feather';
import { Link } from 'react-router-dom';

//Images
import logo from '../../../../assets/img/logo-light.png';
import logoutImg from '../../../../assets/img/macaroni-logged-out.png';

const Login = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push("/");
    }

    return (
        <div className="hk-pg-wrapper py-0" >
            <div className="hk-pg-body py-0">
                <Container fluid>
                    <Row className="auth-split">
                        <Col xl={5} lg={6} md={7} className="position-relative mx-auto">
                            <div className="auth-content flex-column pt-8 pb-md-8 pb-13">
                                <div className="text-center mb-7">
                                    <Link to="/" className="navbar-brand me-0">
                                        <img className="brand-img d-inline-block" src={logo} alt="brand" />
                                    </Link>
                                </div>
                                <Form className="w-100" onSubmit={e => handleSubmit(e)} >
                                    <Row>
                                        <Col xl={7} sm={10} className="mx-auto">
                                            <div className="text-center mb-4">
                                                <h4>登录您的账户</h4>
                                                <p>这里提供了多种不同形式的 Lorem Ipsum 段落文本，以某种形式，通过注入的幽默呈现。</p>
                                            </div>
                                            <Row className="gx-3">
                                                <Col as={Form.Group} lg={12} className="mb-3" >
                                                    <div className="form-label-group">
                                                        <Form.Label>用户名</Form.Label>
                                                    </div>
                                                    <Form.Control placeholder="请输入用户名或邮箱" type="text" value={userName} onChange={e => setUserName(e.target.value)} />
                                                </Col>
                                                <Col as={Form.Group} lg={12} className="mb-3" >
                                                    <div className="form-label-group">
                                                        <Form.Label>密码</Form.Label>
                                                        <Link to="#" className="fs-7 fw-medium">忘记密码？</Link>
                                                    </div>
                                                    <InputGroup className="password-check">
                                                        <span className="input-affix-wrapper affix-wth-text">
                                                            <Form.Control placeholder="请输入密码" value={password} onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} />
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
                                            <div className="d-flex justify-content-center">
                                                <Form.Check id="logged_in" className="form-check-sm mb-3" >
                                                    <Form.Check.Input type="checkbox" defaultChecked />
                                                    <Form.Check.Label className="text-muted fs-7">保持登录</Form.Check.Label>
                                                </Form.Check>
                                            </div>
                                            <Button variant="primary" type="submit" className="btn-uppercase btn-block">登录</Button>
                                            <p className="p-xs mt-2 text-center">caoba 新用户？ <Link to="#"><u>创建新账户</u></Link></p>
                                            <Link to="#" className="d-block extr-link text-center mt-4">
                                                <span className="feather-icon">
                                                    <ExternalLink />
                                                </span>
                                                <u className="text-muted">向我们的帮助论坛发送反馈</u>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                            {/* Page Footer */}
                            <div className="hk-footer border-0">
                                <Container fluid as="footer" className="footer">
                                    <Row>
                                        <div className="col-xl-8 text-center">
                                            <p className="footer-text pb-0"><span className="copy-text">caoba © {new Date().getFullYear()} 保留所有权利。</span> <a href="#some" target="_blank">隐私政策</a><span className="footer-link-sep">|</span><a href="#some" target="_blank">条款与条件</a><span className="footer-link-sep">|</span><a href="#some" target="_blank">系统状态</a></p>
                                        </div>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col xl={7} lg={6} md={5} sm={10} className="d-md-block d-none position-relative bg-primary-light-5">
                            <div className="auth-content flex-column text-center py-8">
                                <Row>
                                    <Col xxl={7} xl={8} lg={11} className="mx-auto">
                                        <h2 className="mb-4">认识全新 Pro caoba 2.0</h2>
                                        <p>这里有许多可用的 Lorem Ipsum 段落变体，以某种形式，通过注入方式呈现。</p>
                                        <Button variant="flush-primary" className="btn-uppercase mt-2">开始导览</Button>
                                    </Col>
                                </Row>
                                <img src={logoutImg} className="img-fluid w-sm-50 mt-7" alt="login" />
                            </div>
                            <p className="p-xs credit-text opacity-55">所有插画均由 <Link to="#" href="https://icons8.com/ouch/" target="_blank" rel="noreferrer" className="text-light"><u>Icons8</u></Link> 提供</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Login

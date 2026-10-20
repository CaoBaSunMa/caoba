import React, { useState } from 'react';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CommanFooter1 from '../../CommanFooter1';

//Image
import logo from '../../../../assets/img/logo-light.png';

const SignupClassic = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="hk-pg-wrapper pt-0 pb-xl-0 pb-5">
            <div className="hk-pg-body pt-0 pb-xl-0">
                <Container>
                    <Row>
                        <Col sm={10} className="position-relative mx-auto">
                            <div className="auth-content py-8">
                                <Form className="w-100">
                                    <Row>
                                        <Col xxl={5} xl={7} lg={8} sm={10} className="mx-auto">
                                            <div className="text-center mb-7">
                                                <Link className="navbar-brand me-0" to="/" >
                                                    <img className="brand-img d-inline-block" src={logo} alt="brand" />
                                                </Link>
                                            </div>
                                            <Card className="card-border">
                                                <Card.Body>
                                                    <h4 className="text-center mb-0">注册 caoba</h4>
                                                    <p className="p-xs mt-2 mb-4 text-center">
                                                        已有账号？ <Link to="login-classic"><u>登录</u></Link>
                                                    </p>
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
                                                    <Button variant='primary' className="btn-rounded btn-uppercase btn-block" as={Link} to="login-classic" >创建账户</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Page Footer */}
            <CommanFooter1 />
        </div>

    )
}

export default SignupClassic

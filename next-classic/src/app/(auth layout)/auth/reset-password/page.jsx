'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import CommonFooter1 from '../CommonFooter1';

//image
import logo from '@/assets/img/logo-light.png';

const ResetPassword = () => {
    return (
        <div className="hk-pg-wrapper pt-0 pb-xl-0 pb-5">
            <div className="hk-pg-body pt-0 pb-xl-0">
                <Container>
                    <Row>
                        <Col sm={10} className="position-relative mx-auto">
                            <div className="auth-content py-8">
                                <Form className="w-100">
                                    <Row>
                                        <Col lg={5} md={7} sm={10} className="mx-auto">
                                            <div className="text-center mb-7">
                                                <Link href="/" className="navbar-brand me-0">
                                                    <Image className="brand-img d-inline-block" src={logo} alt="brand" />
                                                </Link>
                                            </div>
                                            <Card className="card-flush">
                                                <Card.Body className="text-center">
                                                    <h4>重置您的密码</h4>
                                                    <p className="mb-4">别担心，我们会向您的恢复邮箱发送 6 位验证码，用于重置您的密码。</p>
                                                    <Row className="gx-3">
                                                        <Col lg={12} as={Form.Group} className="mb-3">
                                                            <div className="form-label-group">
                                                                <Form.Label htmlFor="userName">邮箱</Form.Label>
                                                                <a href="#" className="fs-7 fw-medium">忘记用户名？</a>
                                                            </div>
                                                            <Form.Control id="userName" placeholder="恢复邮箱" type="email" />
                                                        </Col>
                                                    </Row>
                                                    <Button variant="primary" className="btn-uppercase btn-block">发送验证码</Button>
                                                    <p className="p-xs mt-2 text-center">未收到验证码？ <a href="#"><u>重新发送</u></a></p>
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
            <CommonFooter1 />
        </div>

    )
}

export default ResetPassword

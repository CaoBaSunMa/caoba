'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Button, Col, Container, Row } from 'react-bootstrap';

//Image
import fatalErrorImg from '@/assets/img/macaroni-fatal-error.png';

const PagNotFoundDemonstration = () => {
    return (
        <Container>
            <div className="hk-pg-body">
                <Row>
                    <Col xl={7} lg={6} className="d-lg-block d-none">
                        <div className="auth-content py-md-0 py-8">
                            <Row>
                                <Col xl={12} className="text-center">
                                    <Image src={fatalErrorImg} className="img-fluid w-sm-80 w-50" alt="login" />
                                    <p className="p-xs mt-5 text-light">插画由 <a href="https://icons8.com/ouch/" target="_blank" className="text-light" rel="noreferrer"><u>Icons8</u></a> 提供</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xl={5} lg={6} md={7} sm={10}>
                        <div className="auth-content py-8">
                            <div className="w-100">
                                <Row>
                                    <Col xxl={9} xl={8} lg={11}>
                                        <h1 className="display-4 fw-bold mb-2">404</h1>
                                        <p className="p-lg">抱歉，找不到请求的页面。请尝试使用其他名称查找。</p>
                                        <Button variant="primary" as={Link} href="/" className="mt-4">返回应用</Button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>

    )
}

export default PagNotFoundDemonstration;

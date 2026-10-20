'use client';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { ExternalLink } from 'react-feather';

const PageFooter = () => {
    return (
        <div className="hk-footer">
            <Container as="footer" className="footer">
                <Row>
                    <Col xl={8}>
                        <p className="footer-text">
                            <span className="copy-text">caoba © {new Date().getFullYear()} 保留所有权利</span> <Link href="#">隐私政策</Link><span className="footer-link-sep">|</span><Link href="#">条款与条件</Link><span className="footer-link-sep">|</span><Link href="#">系统状态</Link></p>
                    </Col>
                    <Col xl={4}>
                        <Link href="#" className="footer-extr-link link-default">
                            <span className="feather-icon">
                                <ExternalLink />
                            </span>
                            <u>前往帮助论坛反馈</u>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PageFooter

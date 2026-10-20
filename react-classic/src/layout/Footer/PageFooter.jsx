import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ExternalLink } from 'react-feather';
import { Link } from 'react-router-dom';

const PageFooter = () => {
    return (
        <div className="hk-footer">
            <Container as="footer" className="footer">
                <Row>
                    <Col xl={8}>
                        <p className="footer-text">
                            <span className="copy-text">caoba © {new Date().getFullYear()} 保留所有权利</span> <Link to="#">隐私政策</Link><span className="footer-link-sep">|</span><Link to="#">条款与条件</Link><span className="footer-link-sep">|</span><Link to="#">系统状态</Link></p>
                    </Col>
                    <Col xl={4}>
                        <Link to="#" className="footer-extr-link link-default">
                            <span className="feather-icon">
                                <ExternalLink />
                            </span>
                            <u>向我们的帮助论坛发送反馈</u>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PageFooter

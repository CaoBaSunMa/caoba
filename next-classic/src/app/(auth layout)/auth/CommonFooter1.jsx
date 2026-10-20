import { Col, Container, Row } from 'react-bootstrap';

const CommonFooter1 = () => {
    return (
        <div className="hk-footer border-0">
            <Container as="footer" className="footer">
                <Row>
                    <Col xl={8} className="text-center">
                        <p className="footer-text pb-0">
                            <span className="copy-text">caoba © {new Date().getFullYear()} 保留所有权利。</span>
                            <a href="#">隐私政策</a>
                            <span className="footer-link-sep">|</span><a href="#">条款与条件</a><span className="footer-link-sep">|</span><a href="#">系统状态</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CommonFooter1

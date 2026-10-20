import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {

    return (
        <div className="hk-footer border-0 bg-transparent">
            <Container as="footer" className="footer">
                <Row>
                    <Col xl={8} className="text-center">
                        <p className="footer-text pb-0">
                            <span className="copy-text text-white opacity-55">caoba © {new Date().getFullYear()} 保留所有权利。</span><a href="#" className="text-white opacity-55">隐私政策</a><span className="footer-link-sep text-white opacity-55">|</span><a href="#" className="text-white opacity-55">条款与条件</a><span className="footer-link-sep text-white opacity-55">|</span><a href="#" className="text-white opacity-55">系统状态</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer

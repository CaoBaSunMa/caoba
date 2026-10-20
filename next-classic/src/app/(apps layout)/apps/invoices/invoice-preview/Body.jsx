'use client';
import SimpleBar from 'simplebar-react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Image from 'next/image';

//Images
import logo from '@/assets/img/logo-light.png';

const Body = () => {
    return (
        <div className="invoice-body">
            <SimpleBar className="nicescroll-bar">
                <Container>
                    <div className="template-invoice-wrap mt-xxl-5 p-md-5 p-3">
                        <Row>
                            <Col lg={3} md={5} className="order-md-0 order-1">
                                <Image src={logo} alt="logo" />
                            </Col>
                            <Col lg={4} md={4} className="offset-lg-5 offset-md-3 mb-md-0 mb-2">
                                <h2 className="d-flex justify-content-md-end mb-0">发票</h2>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col md={4} className="order-md-0 order-1">
                                <div className="address-wrap">
                                    <h6>caoba</h6>
                                    <p>4747, Pearl Street</p>
                                    <p>Rainy day Drive</p>
                                    <p>Washington DC 42341</p>
                                    <p>caoba_01@caoba.com</p>
                                </div>
                            </Col>
                            <Col md={5} className="offset-md-3 mb-4 mb-md-0">
                                <div className="d-flex justify-content-md-end">
                                    <div className="text-md-end me-3">
                                        <div className="mb-1">发票编号*</div>
                                        <div className="mb-1">开票日期*</div>
                                        <div className="mb-1">到期日*</div>
                                        <div>客户编号</div>
                                    </div>
                                    <div className="text-dark">
                                        <div className="mb-1">0001</div>
                                        <div className="mb-1">24/08/2020</div>
                                        <div className="mb-1">签收即付</div>
                                        <div>321456</div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="separator separator-light" />
                        <Row>
                            <Col md={3}>
                                <h6 className="text-uppercase fs-7 mb-2">开票对象</h6>
                                <div className="Billto-wrap">
                                    <h6>Supernova consultant</h6>
                                    <p>4747, Pearl Street</p>
                                    <p>Rainy day Drive</p>
                                    <p>Washington DC 42341</p>
                                    <p>caoba_01@caoba.com</p>
                                </div>
                            </Col>
                        </Row>
                        <div className="table-wrap mt-6">
                            <Table bordered responsive>
                                <thead className="thead-primary">
                                    <tr>
                                        <th>项目</th>
                                        <th className="text-end">数量</th>
                                        <th className="text-end">单价</th>
                                        <th className="text-end">折扣</th>
                                        <th className="text-end">金额</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="w-70">
                                            <h6>重新设计 agencyclick.com</h6>
                                            <p>这是我的项目描述。如果行内放不下一整句话，文字区域会自动增大以便完整显示。</p>
                                        </td>
                                        <td className="text-end text-dark">8</td>
                                        <td className="w-15 text-end text-dark">60.00</td>
                                        <td className="text-end text-dark">5%</td>
                                        <td className="w-20 text-end text-dark">¥420.5</td>
                                    </tr>
                                    <tr>
                                        <td className="w-70">
                                            <h6>品牌重塑</h6>
                                        </td>
                                        <td className="text-end text-dark">1</td>
                                        <td className="w-15 text-end text-dark">150.00</td>
                                        <td className="text-end text-dark">0%</td>
                                        <td className="w-20 text-end text-dark">¥140.5</td>
                                    </tr>
                                    <tr>
                                        <td className="w-70">
                                            <h6>社交媒体营销</h6>
                                        </td>
                                        <td className="text-end text-dark">20</td>
                                        <td className="w-15 text-end text-dark">30.00</td>
                                        <td className="text-end text-dark">5%</td>
                                        <td className="w-20 text-end text-dark">¥540.5</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} rowSpan={4} className="border-0" />
                                        <td colSpan={2}>小计</td>
                                        <td className="text-end text-dark">¥1101.0</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>项目折扣</td>
                                        <td className="text-end text-dark">¥10.0</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>额外折扣</td>
                                        <td className="text-end text-dark">¥0</td>
                                    </tr>
                                    <tr className="border-0">
                                        <td colSpan={2} className="text-dark border">总计</td>
                                        <td className="text-end text-dark border">¥1101.0</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <Row className="mt-3">
                            <Col lg={5}>
                                <h6>给客户的备注</h6>
                                <p>感谢您选择 caoba 提供设计服务。如果您今后还需要其他帮助，这里有一张可用于后续项目的优惠券。只需致电我们并提及优惠券代码：&ldquo;10-springhnc&rdquo;。</p>
                            </Col>
                            <Col lg={7} className="text-lg-end mt-lg-0 mt-3">
                                <h5 className="mt-lg-7">凯瑟琳·泽塔·琼斯</h5>
                                <p>caoba 联合创始人</p>
                            </Col>
                        </Row>
                        <div className="separator separator-light mt-7" />
                        <Row>
                            <Col md={12} className="col-md-12">
                                <h6>条款与条件</h6>
                                <ol className="ps-3">
                                    <li>请在发票开具之日起 15 天内付款，逾期未付将按 14% 的年利率收取逾期利息。</li>
                                    <li>汇款时请注明发票编号。</li>
                                </ol>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </SimpleBar>
        </div>
    )
}

export default Body

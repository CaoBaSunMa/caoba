'use client';
import Image from 'next/image';
import { Button, Card, Col, Row } from 'react-bootstrap';
import HkProgressBar from '@/components/@hk-progressbar/@hk-progressbar';
import ActiveUserMap from './ChartData/ActiveUserMap';

//Images
import UsFlag from '@/styles/fonts/flags/4x3/us.svg';
import IndianFlag from '@/styles/fonts/flags/4x3/in.svg';
import UkFlag from '@/styles/fonts/flags/4x3/gb.svg';
import AustralianFlag from '@/styles/fonts/flags/4x3/au.svg';
import CanadianFlag from '@/styles/fonts/flags/4x3/ca.svg';

const ActiveUserCard = () => {
    return (
        <Card className="card-border mb-0 h-100">
            <Card.Header className="card-header-action">
                <h6>活跃用户</h6>
                <div className="card-action-wrap">
                    <Button variant="outline-light">实时图表</Button>
                </div>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col md={8} >
                        <ActiveUserMap />
                    </Col>
                    <Col md={4}>
                        <div className="media align-items-center mb-3">
                            <div className="media-head me-3">
                                <div className="avatar avatar-xxs avatar-rounded">
                                    <Image src={UsFlag} alt="用户头像" className="avatar-img" />
                                </div>
                            </div>
                            <div className="media-body">
                                <HkProgressBar.Wrapper>
                                    <HkProgressBar.Label className="mb-0">美国</HkProgressBar.Label>
                                    <div className="d-flex align-items-center">
                                        <HkProgressBar now={80} variant="blue-dark-3" rounded size="xs" className="flex-1" />
                                        <div className="fs-8 mnw-30p ms-3">80%</div>
                                    </div>
                                </HkProgressBar.Wrapper>
                            </div>
                        </div>
                        <div className="media align-items-center mb-3">
                            <div className="media-head me-3">
                                <div className="avatar avatar-xxs avatar-rounded">
                                    <Image src={IndianFlag} alt="用户头像" className="avatar-img" />
                                </div>
                            </div>
                            <div className="media-body">
                                <HkProgressBar.Wrapper>
                                    <HkProgressBar.Label className="mb-0">印度</HkProgressBar.Label>
                                    <div className="d-flex align-items-center">
                                        <HkProgressBar variant="blue" rounded size="xs" className="flex-1" now={50} />
                                        <div className="fs-8 mnw-30p ms-3">50%</div>
                                    </div>
                                </HkProgressBar.Wrapper>
                            </div>
                        </div>
                        <div className="media align-items-center mb-3">
                            <div className="media-head me-3">
                                <div className="avatar avatar-xxs avatar-rounded">
                                    <Image src={UkFlag} alt="用户头像" className="avatar-img" />
                                </div>
                            </div>
                            <div className="media-body">
                                <HkProgressBar.Wrapper>
                                    <HkProgressBar.Label className="mb-0">英国</HkProgressBar.Label>
                                    <div className="d-flex align-items-center">
                                        <HkProgressBar variant="primary" rounded size="xs" className="flex-1" now={30} />
                                        <div className="fs-8 mnw-30p ms-3">30%</div>
                                    </div>
                                </HkProgressBar.Wrapper>
                            </div>
                        </div>
                        <div className="media align-items-center mb-3">
                            <div className="media-head me-3">
                                <div className="avatar avatar-xxs avatar-rounded">
                                    <Image src={AustralianFlag} alt="用户头像" className="avatar-img" />
                                </div>
                            </div>
                            <div className="media-body">
                                <HkProgressBar.Wrapper>
                                    <HkProgressBar.Label className="mb-0">澳大利亚</HkProgressBar.Label>
                                    <div className="d-flex align-items-center">
                                        <HkProgressBar variant="grey-dark-2" rounded size="xs" className="flex-1" now={15} />
                                        <div className="fs-8 mnw-30p ms-3">15%</div>
                                    </div>
                                </HkProgressBar.Wrapper>
                            </div>
                        </div>
                        <div className="media align-items-center">
                            <div className="media-head me-3">
                                <div className="avatar avatar-xxs avatar-rounded">
                                    <Image src={CanadianFlag} alt="用户头像" className="avatar-img" />
                                </div>
                            </div>
                            <div className="media-body">
                                <HkProgressBar.Wrapper>
                                    <HkProgressBar.Label className="mb-0">加拿大</HkProgressBar.Label>
                                    <div className="d-flex align-items-center">
                                        <HkProgressBar variant="grey" rounded size="xs" className="flex-1" now={10} />
                                        <div className="fs-8 mnw-30p ms-3">10%</div>
                                    </div>
                                </HkProgressBar.Wrapper>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ActiveUserCard

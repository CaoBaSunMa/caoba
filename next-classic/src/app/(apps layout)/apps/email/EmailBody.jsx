'use client';
import { Badge, Button, Card, Dropdown, Form } from 'react-bootstrap';
import { ArrowDown, ArrowRight, CornerUpLeft, Edit, MoreVertical, Paperclip, Printer, Star, Trash2 } from 'react-feather';
import SimpleBar from 'simplebar-react';
import HkTooltip from '@/components/@hk-tooltip/HkTooltip';
import Image from 'next/image';
import HkChips from '@/components/@hk-chips/@hk-chips';
import HkAccordion from '@/components/@hk-accordion/@hk-accordion';

//Images
import avatar2 from '@/assets/img/avatar2.jpg';
import avatar10 from '@/assets/img/avatar10.jpg';
import avatar11 from '@/assets/img/avatar11.jpg';
import avatar12 from '@/assets/img/avatar12.jpg';
import avatar13 from '@/assets/img/avatar13.jpg';
import sign from '@/assets/img/caoba.svg';

const EmailBody = () => {


    return (
        <div className="email-body">
            <SimpleBar className="nicescroll-bar">
                <div className="single-email-subject">
                    <div>
                        <h4 className="fw-light">您购买的商品有可用更新。</h4>
                        <Badge bg="orange" pill className="badge-sm flex-shrink-0 ms-3">更新</Badge>
                    </div>
                    <div className="email-options-wrap">
                        <Button variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="打印">
                            <HkTooltip id="tooltip1" placement="top" title="打印" >
                                <span className="icon">
                                    <span className="feather-icon">
                                        <Printer />
                                    </span>
                                </span>
                            </HkTooltip>
                        </Button>
                        <Button variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover">
                            <HkTooltip id="tooltip2" placement="top" title="回复" >
                                <span className="icon">
                                    <span className="feather-icon">
                                        <CornerUpLeft />
                                    </span>
                                </span>
                            </HkTooltip>
                        </Button>
                        <Button variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover">
                            <HkTooltip id="tooltip3" placement="top" title="转发" >
                                <span className="icon">
                                    <span className="feather-icon">
                                        <ArrowRight />
                                    </span>
                                </span>
                            </HkTooltip>
                        </Button>
                    </div>
                </div>

                <div id="accordionSimpleExample" className="accordion accordion-simple single-email-thread">
                    <div className="accordion-item">
                        <div id="simple-headingOne" className="accordion-header">
                            <div>
                                <div className="email-head">
                                    <div data-bs-toggle="collapse" data-bs-target="#simple-collapseOne" role="button" aria-expanded="false" />
                                    <div className="media">
                                        <div className="media-head">
                                            <div className="avatar d-8">
                                                <Image src={avatar2} alt="用户" className="avatar-img rounded-circle" />
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <div>摩根·弗里曼</div>
                                            <div className="fs-7">
                                                <span>发给</span>
                                                <Dropdown bsPrefix="mail-desc-dropdown">
                                                    <Dropdown.Toggle as="a" className="link-dark ms-1" href="#">我</Dropdown.Toggle >
                                                    <Dropdown.Menu>
                                                        <div>
                                                            <span>发件人：</span><span>摩根 <span>&lt;morganfreeman@caoba.com&gt;</span></span>
                                                        </div>
                                                        <div>
                                                            <span>收件人：</span><span>caoba <span>&lt;contact@caoba.com&gt;</span></span>
                                                        </div>
                                                        <div>
                                                            <span>日期：</span><span>12月30日 16:22</span>
                                                        </div>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="email-head-action">
                                        <div className="email-time">12月30日 16:22</div>
                                        <span className="email-star marked">
                                            <span className="feather-icon">
                                                <Star />
                                            </span>
                                        </span>
                                        <Button as="a" href="#" size="sm" className="btn-icon btn-rounded flush-soft-hover btn-flush-dark">
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <CornerUpLeft />
                                                </span>
                                            </span>
                                        </Button>
                                        <Dropdown>
                                            <Dropdown.Toggle as="a" href="#" size="sm" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret">
                                                <span className="icon">
                                                    <span className="feather-icon">
                                                        <MoreVertical />
                                                    </span></span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item>转发</Dropdown.Item>
                                                <Dropdown.Item>删除</Dropdown.Item>
                                                <Dropdown.Item>举报垃圾邮件</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="simple-collapseOne" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <p>嗨，caoba，</p>
                                <p>
                                    我们想通知您，您的商品 caoba - caoba 管理后台模板，更新现已可在您的
                                    下载页面获取。
                                </p>
                                <p>提醒：您需要登录后才能下载更新。</p>
                                <p className="mt-3 mb-4">
                                    您可以在以下页面管理您商品的通知：
                                    <a href="#some"><u>您的下载页面。</u></a>
                                </p>
                                <p>此致，<br />caoba 团队</p>
                                <Image className="d-block mt-2 mb-3" src={sign} alt="签名" />
                                <div className="separator separator-light" />
                                <div className="text-end">
                                    <a href="#some" className="link-theme fs-7"><u>全部下载</u></a>
                                </div>
                                <div className="email-attachment-wrap">
                                    <div className="attachment-box">
                                        <div>
                                            <div className="media">
                                                <div className="avatar avatar-icon avatar-sm avatar-blue">
                                                    <span className="initial-wrap fs-3">
                                                        <i className="ri-file-excel-2-fill" />
                                                    </span>
                                                </div>
                                                <div className="media-body">
                                                    <p className="file-name">Website_content.xls</p>
                                                    <p className="file-size">2,635 KB</p>
                                                </div>
                                            </div>
                                            <div className="file-overlay">
                                                <button className="btn btn-sm btn-icon btn-rounded btn-primary"><span className="icon">
                                                    <ArrowDown />
                                                </span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="attachment-box">
                                        <div>
                                            <div className="media">
                                                <div className="avatar avatar-icon avatar-sm avatar-warning">
                                                    <span className="initial-wrap fs-3">
                                                        <i className="ri-file-zip-fill" />
                                                    </span>
                                                </div>
                                                <div className="media-body">
                                                    <p className="file-name">caoba.zip</p>
                                                    <p className="file-size">2.45 GB</p>
                                                </div>
                                            </div>
                                            <div className="file-overlay">
                                                <button className="btn btn-sm btn-icon btn-rounded btn-primary"><span className="icon"><ArrowDown /></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div id="simple-headingTwo" className="accordion-header">
                            <div>
                                <div className="email-head">
                                    <div data-bs-toggle="collapse" data-bs-target="#simple-collapseTwo" role="button" aria-expanded="true" />
                                    <div className="media">
                                        <div className="media-head">
                                            <div className="avatar d-8">
                                                <Image src={avatar2} alt="用户" className="avatar-img rounded-circle" />
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <div>摩根·弗里曼</div>
                                            <div className="fs-7">
                                                <span>发给</span>
                                                <Dropdown bsPrefix="mail-desc-dropdown">
                                                    <Dropdown.Toggle as="a" className="link-dark ms-1" href="#">我</Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <div>
                                                            <span>发件人：</span><span>摩根 <span>&lt;morganfreeman@caoba.com&gt;</span></span>
                                                        </div>
                                                        <div>
                                                            <span>收件人：</span><span>caoba <span>&lt;contact@caoba.com&gt;</span></span>
                                                        </div>
                                                        <div>
                                                            <span>日期：</span><span>1月1日 09:30</span>
                                                        </div>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="email-head-action">
                                        <div className="email-time">1月1日 09:30</div>
                                        <span className="email-star marked">
                                            <span className="feather-icon">
                                                <Star />
                                            </span>
                                        </span>
                                        <Button as="a" href="#" size="sm" className="btn-icon btn-rounded flush-soft-hover btn-flush-dark">
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <CornerUpLeft />
                                                </span>
                                            </span>
                                        </Button>
                                        <Dropdown>
                                            <Dropdown.Toggle as="a" href="#" size="sm" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret">
                                                <span className="icon">
                                                    <span className="feather-icon">
                                                        <MoreVertical />
                                                    </span></span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item>转发</Dropdown.Item>
                                                <Dropdown.Item>删除</Dropdown.Item>
                                                <Dropdown.Item>举报垃圾邮件</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="simple-collapseTwo" className="collapse show">
                            <div className="accordion-body">
                                <p>
                                    您好，我购买了这套管理后台模板，请帮我安装并部署，我希望网站能够正常运行。
                                    提醒：您需要登录后才能下载更新。
                                </p>
                                <p className="mb-4">
                                    提醒：您需要登录后才能下载更新。
                                </p>
                                <p>此致，<br />caoba 团队</p>
                                <Image className="d-block mt-2 mb-3" src={sign} alt="签名" />
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div id="simple-headingThree" className="accordion-header">
                            <div>
                                <div className="email-head">
                                    <div data-bs-toggle="collapse" data-bs-target="#simple-collapseThree" role="button" aria-expanded="true" />
                                    <div className="media">
                                        <div className="media-head">
                                            <div className="avatar d-8">
                                                <Image src={avatar10} alt="用户" className="avatar-img rounded-circle" />
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <div>管理员</div>
                                            <div className="fs-7">
                                                <span>发给</span>
                                                <Dropdown bsPrefix="mail-desc-dropdown">
                                                    <Dropdown.Toggle as="a" className="link-dark ms-1" href="#">摩根</Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <div>
                                                            <span>发件人：</span><span>管理员 <span>&lt;admin@caoba.com&gt;</span></span>
                                                        </div>
                                                        <div>
                                                            <span>收件人：</span><span>摩根 <span>&lt;morganfreeman@caoba.com&gt;</span></span>
                                                        </div>
                                                        <div>
                                                            <span>日期：</span><span>1月2日 10:21</span>
                                                        </div>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="email-head-action">
                                        <div className="email-time">1月2日 10:21</div>
                                        <span className="email-star"><span className="feather-icon">
                                            <Star />
                                        </span></span>
                                        <Button as="a" href="#" size="sm" className="btn-icon btn-rounded flush-soft-hover btn-flush-dark">
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <CornerUpLeft />
                                                </span>
                                            </span>
                                        </Button>
                                        <Dropdown>
                                            <Dropdown.Toggle as="a" href="#" size="sm" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret">
                                                <span className="icon">
                                                    <span className="feather-icon">
                                                        <MoreVertical />
                                                    </span></span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item>转发</Dropdown.Item>
                                                <Dropdown.Item>删除</Dropdown.Item>
                                                <Dropdown.Item>举报垃圾邮件</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="simple-collapseThree" className="collapse show">
                            <div className="accordion-body">
                                <p>您好，</p>
                                <p>能否请您指出哪些页面出现了错误？</p>
                                <div className="my-5">
                                    <Button variant="outline-light" className="me-2" data-bs-toggle="collapse" data-bs-target="#compose_email" aria-expanded="false">
                                        <span>
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <CornerUpLeft />
                                                </span>
                                            </span>
                                            <span>回复</span>
                                        </span>
                                    </Button>
                                    <Button variant="outline-light" data-bs-toggle="collapse" data-bs-target="#compose_email" aria-expanded="false">
                                        <span>
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <ArrowRight />
                                                </span>
                                            </span>
                                            <span>转发</span>
                                        </span>
                                    </Button>
                                </div>
                                <div id="compose_email" className="collapse mt-7">
                                    <div className="d-flex">
                                        <div className="media">
                                            <div className="media-head me-3">
                                                <div className="avatar avatar-icon avatar-soft-light avatar-rounded d-8">
                                                    <span className="initial-wrap">
                                                        <i className="ri-user-fill" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <Form as={Card} className="card-shadow w-100">
                                            <Card.Body>
                                                <Form.Group>
                                                    <div className="d-flex flex-wrap">
                                                        <HkChips className="mb-2 me-2" variant="primary" src={avatar11} dismissable >
                                                            摩根
                                                        </HkChips>

                                                        <HkChips className="mb-2 me-2" variant="primary" src={avatar12} dismissable >
                                                            查理
                                                        </HkChips>

                                                        <HkChips className="mb-2 me-2" variant="primary" src={avatar13} dismissable >
                                                            温斯顿
                                                        </HkChips>

                                                        <Form.Control type="text" className="border-0 p-0 shadow-none flex-1 mb-2 me-2" placeholder="添加收件人" />
                                                    </div>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control as="textarea" rows={8} placeholder="输入内容" className="mb-3" />
                                                </Form.Group>
                                                <Form.Group className="d-flex justify-content-between mb-0">
                                                    <div>
                                                        <Button variant="primary" className="me-2" type="submit">发送</Button>
                                                        <Button variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover">
                                                            <HkTooltip id="addFlag" title="添加标记" placement="top" >
                                                                <span className="icon">
                                                                    <span className="feather-icon">
                                                                        <Paperclip />
                                                                    </span>
                                                                </span>
                                                            </HkTooltip>
                                                        </Button>
                                                    </div>
                                                    <div>
                                                        <Button variant="flush-dark" className="btn-iconbtn-rounded flush-soft-hover">
                                                            <HkTooltip id="draft" title="保存草稿" placement="top">
                                                                <span className="icon">
                                                                    <span className="feather-icon">
                                                                        <Edit />
                                                                    </span>
                                                                </span>
                                                            </HkTooltip>
                                                        </Button>
                                                        <Button variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover">
                                                            <HkTooltip id="delete" title="删除" placement="top" >
                                                                <span className="icon">
                                                                    <span className="feather-icon">
                                                                        <Trash2 />
                                                                    </span>
                                                                </span>
                                                            </HkTooltip>
                                                        </Button>
                                                    </div>
                                                </Form.Group>
                                            </Card.Body>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SimpleBar >
        </div >
    )
}

export default EmailBody

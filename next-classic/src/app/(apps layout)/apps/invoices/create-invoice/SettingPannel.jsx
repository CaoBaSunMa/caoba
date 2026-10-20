'use client';
import { useState } from 'react';
import { Button, ButtonGroup, Card, Form, InputGroup } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

const SettingPannel = ({ onHide }) => {

    const [accentClr, setAccentClr] = useState("#007D88");
    const [headingClr, setHeadingClr] = useState("#1F2327");
    const [textClr, setTextClr] = useState("#646A71")

    return (
        <div className="invoice-settings">
            <SimpleBar className="nicescroll-bar">
                <Button bsPrefix="btn-close" className="info-close" onClick={onHide}>
                    <span aria-hidden="true">×</span>
                </Button>
                <div className="collapse-simple mt-lg-0 mt-2">
                    <Card>
                        <Card.Header>
                            <a role="button" data-bs-toggle="collapse" href="#currency" aria-expanded="true">货币</a>
                        </Card.Header>
                        <div id="currency" className="collapse show">
                            <Form.Group className="mt-2 mb-3">
                                <Form.Label>货币符号</Form.Label>
                                <Form.Select>
                                    <option value={0}>人民币（¥）</option>
                                    <option value={1}>美元（$ USD）</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                    </Card>
                    <Card>
                        <Card.Header>
                            <a role="button" data-bs-toggle="collapse" href="#typography" aria-expanded="true">排版</a>
                        </Card.Header>
                        <div id="typography" className="collapse show">
                            <div className="form-group mt-2">
                                <Form.Label>字体</Form.Label>
                                <Form.Select>
                                    <option value={0}>Arial</option>
                                    <option value={1}>Times New Roman</option>
                                </Form.Select>
                            </div>
                            <Form.Group className="mb-3">
                                <Form.Label>字号</Form.Label>
                                <Form.Select>
                                    <option value={0}>16px</option>
                                    <option value={1}>20px</option>
                                    <option value={2}>24px</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>对齐</Form.Label>
                                <div>
                                    <ButtonGroup role="group">
                                        <Button variant="outline-secondary"><i className="fa fa-align-left text-primary" /></Button>
                                        <Button variant="outline-secondary"><i className="fa fa-align-center" /></Button>
                                        <Button variant="outline-secondary"><i className="fa fa-align-right" /></Button>
                                        <Button variant="outline-secondary"><i className="fa fa-align-justify" /></Button>
                                    </ButtonGroup>
                                </div>
                            </Form.Group>
                        </div>
                    </Card>
                    <Card>
                        <Card.Header>
                            <a role="button" data-bs-toggle="collapse" href="#color" aria-expanded="true">颜色</a>
                        </Card.Header>
                        <div id="color" className="collapse show">
                            <div className="form-group mt-2">
                                <Form.Label>强调色</Form.Label>
                                <InputGroup className="input-group color-picker" title="使用横向选项">
                                    <InputGroup.Text className="colorpicker-input-addon">
                                        <Form.Control
                                            type="color"
                                            id="exampleColorInput1"
                                            title="选择颜色"
                                            value={accentClr}
                                            onChange={e => setAccentClr(e.target.value)}
                                        />
                                    </InputGroup.Text>
                                    <Form.Control type="text" value={accentClr} onChange={() => setAccentClr(accentClr)} />
                                </InputGroup>
                            </div>
                            <Form.Group className="mb-3">
                                <Form.Label>标题颜色</Form.Label>
                                <InputGroup className="input-group color-picker" title="使用横向选项">
                                    <InputGroup.Text className="colorpicker-input-addon">
                                        <Form.Control
                                            type="color"
                                            id="exampleColorInput2"
                                            title="选择颜色"
                                            value={headingClr}
                                            onChange={e => setHeadingClr(e.target.value)}
                                        />
                                    </InputGroup.Text>
                                    <Form.Control type="text" value={headingClr} onChange={() => setHeadingClr(headingClr)} />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>文字颜色</Form.Label>
                                <InputGroup className="input-group color-picker" title="使用横向选项">
                                    <InputGroup.Text className="colorpicker-input-addon">
                                        <Form.Control
                                            type="color"
                                            id="exampleColorInput3"
                                            title="选择颜色"
                                            value={textClr}
                                            onChange={e => setTextClr(e.target.value)}
                                        />
                                    </InputGroup.Text>
                                    <Form.Control type="text" value={textClr} onChange={() => setTextClr(textClr)} />
                                </InputGroup>
                            </Form.Group>
                        </div>
                    </Card>
                    <Card>
                        <Card.Header>
                            <a role="button" data-bs-toggle="collapse" href="#action" aria-expanded="true">操作</a>
                        </Card.Header>
                        <div id="action" className="collapse show">
                            <Form.Group className="mt-2 mb-3">
                                <Form.Label>定时发送</Form.Label>
                                <input type="text" className="form-control" />
                            </Form.Group>
                        </div>
                    </Card>
                    <Card>
                        <Card.Header>
                            <a role="button" data-bs-toggle="collapse" href="#option" aria-expanded="true">选项</a>
                        </Card.Header>
                        <div id="option" className="collapse show">
                            <div className="button-list">
                                <Button variant='light'  className="btn-block">获取链接</Button>
                                <Button variant="light"  className="btn-block">下载发票</Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </SimpleBar>
        </div>
    )
}

export default SettingPannel

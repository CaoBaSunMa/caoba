'use client';
import { useEffect, useState } from 'react';
import { Button, Col, Collapse, Container, Form, Row, Table } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import EditInfo from './EditInfo';
import AddNewClient from './AddNewClient';
import { nanoid } from 'nanoid';
import HkInlineEdit from '@/components/@hk-editable-component/HkInlineEdit';
import HkDropZone from '@/components/@hk-drop-zone/HkDropZone';
import HkSimpleCollapse from '@/components/@hk-collapse/@hk-simple-collapse';

const Body = () => {
    const [editInfo, setEditInfo] = useState(false);
    const [addNewClient, setAddNewClient] = useState(false);
    const [subTotal, setSubTotal] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);
    const [extraDiscount, setExtraDiscount] = useState({ discValue: 0, discType: "per" });
    const [grossTotal, setGrossTotal] = useState(0);

    const [itemList, setItemList] = useState([
        {
            id: 0,
            title: "重新设计 agencyclick.com",
            quantity: 1,
            price: 150,
            discount: 2,
            discountType: "per",
            totalPrice: 147,
            description: "这是我的项目描述。如果行内放不下一整句话，文字区域会自动增大以便完整显示。"
        },

    ])

    const [termAndConditions, setTermAndConditions] = useState([
        {
            id: 0,
            conditon: "请在发票开具之日起 15 天内付款，逾期未付将按 14% 的年利率收取逾期利息。",
        },
        {
            id: 1,
            conditon: "汇款时请注明发票编号。",
        },
    ])

    //add new itemList
    const addItem = (event) => {
        event.preventDefault();
        const newItem = {
            id: nanoid(),
            title: "",
            quantity: 0,
            price: 0,
            discount: 0,
            discountType: "per",
            totalPrice: 0,
            description: ""
        }

        setItemList([...itemList, newItem])
    }


    //update itemList onChange of input field
    const updateItemList = index => e => {
        let newArr = [...itemList]

        if (e.target.name === "title") {
            newArr[index].title = e.target.value
        }
        else if (e.target.name === "quantity") {
            newArr[index].quantity = e.target.value
        }
        else if (e.target.name === "price") {
            newArr[index].price = e.target.value
        }
        else if (e.target.name === "discount") {
            newArr[index].discount = e.target.value
            // console.log("value:" + typeof e.target.value);

        }
        else if (e.target.name === "discountType") {
            newArr[index].discountType = e.target.value
        }
        else if (e.target.name === "description") {
            newArr[index].description = e.target.value
        };

        //set new data in itemList
        setItemList(newArr);

        //Count totalPrice
        if (newArr[index].discountType === "per") {
            let disc = itemList[index].price - (itemList[index].price * itemList[index].discount / 100);
            newArr[index].totalPrice = newArr[index].quantity * disc;
        }
        else {
            let disc = itemList[index].price - itemList[index].discount
            newArr[index].totalPrice = newArr[index].quantity * disc;
        }
    }

    //Delete Invoice item
    const deleteItem = (itemId) => {
        const newList = [...itemList];
        const index = itemList.findIndex((item) => item.id === itemId);
        newList.splice(index, 1);
        setItemList(newList);
    }

    //Calculate gross total
    useEffect(() => {
        const CountSubtotal = itemList.reduce((ttl, datas) => ttl = ttl + datas.totalPrice, 0);
        setSubTotal((CountSubtotal))
        const disct = itemList.reduce((ttl, datas) => ttl = ttl + parseInt(datas.discount), 0);
        setTotalDiscount(disct);

        if (extraDiscount.discType === "per") {
            setGrossTotal(subTotal - (subTotal * extraDiscount.discValue / 100));
        }
        else {
            setGrossTotal(subTotal - extraDiscount.discValue);
        }

    }, [itemList, subTotal, extraDiscount])

    //update T&C
    const updateTC = index => e => {
        let updatedArr = [...termAndConditions]
        updatedArr[index] = e.target.value;
        setTermAndConditions(updatedArr);
    }
    // Add New T&C
    const addNewConditon = (event) => {
        event.preventDefault();
        const newCondition = {
            id: nanoid(),
            conditon: ""
        }
        setTermAndConditions([...termAndConditions, newCondition])
    }

    //Delete T&C
    const deleteCondition = (itemId) => {
        let newConditions = [...termAndConditions];
        let index = termAndConditions.findIndex((item) => item.id === itemId);
        newConditions.splice(index, 1);
        setTermAndConditions(newConditions);
    }


    return (
        <>
            <div className="invoice-body">
                <SimpleBar className="nicescroll-bar">
                    <Container>
                        <div className="create-invoice-wrap mt-xxl-5 p-md-5 p-3">
                            <Row>
                                <Col lg={3} md={5} className="order-md-0 order-1">
                                    <HkDropZone>
                                        上传 Logo
                                    </HkDropZone>
                                </Col>
                                <Col lg={4} md={4} className="offset-lg-5 offset-md-3 mb-md-0 mb-4">
                                    <span className="d-flex align-items-center justify-content-md-end mb-0 inline-editable-wrap">
                                        <HkInlineEdit as="h2" id="editable1" value="发票" left />
                                    </span>

                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col xxl={3}>
                                    <HkSimpleCollapse
                                        bsPrefix="a"
                                        href="#"
                                        targetId="address_collpase"
                                        collapsed={false}
                                        title="- 您的商家信息"
                                        headerClass="d-inline-block mb-3"
                                    >
                                        <div id="address_collpase">
                                            <div className="address-wrap">
                                                <h6>caoba</h6>
                                                <p>4747, Pearl Street</p>
                                                <p>Rainy Day Drive, </p>
                                                <p>Washington DC 42156</p>
                                                <p>caoba_01@caoba.com</p>
                                            </div>
                                            <a href="#" className="d-inline-flex align-items-center mt-2" onClick={() => setEditInfo(!editInfo)} >
                                                <i className="ri-pencil-line me-1" /> 编辑信息
                                            </a>
                                        </div>
                                    </HkSimpleCollapse>
                                </Col>
                                <Col xxl={4} className="offset-xxl-5 mt-xxl-0 mt-6">
                                    <Form>
                                        <Row className="gx-3">
                                            <Col lg={6} as={Form.Group} className="mb-3" >
                                                <Form.Control defaultValue="发票编号*" type="text" />
                                            </Col>
                                            <Col lg={6} as={Form.Group} className="mb-3" >
                                                <Form.Control defaultValue="0001" type="text" />
                                            </Col>
                                        </Row>
                                        <Row className="gx-3">
                                            <Col lg={6} as={Form.Group} className="mb-3" >
                                                <Form.Control defaultValue="开票日期*" type="text" />
                                            </Col>
                                            <Col lg={6} as={Form.Group} className="mb-3" >
                                                <Form.Control name="single-date-pick" defaultValue="24/2/2020" type="text" />
                                            </Col>
                                        </Row>
                                        <Row className="gx-3">
                                            <Col lg={6} as={Form.Group} className="mb-3" >
                                                <Form.Control defaultValue="到期日*" type="text" />
                                            </Col>
                                            <Col lg={6} as={Form.Group} className="mb-3" >
                                                <Form.Select>
                                                    <option value={0}>签收即付</option>
                                                    <option value={1}>一</option>
                                                    <option value={2}>二</option>
                                                    <option value={3}>三</option>
                                                </Form.Select>
                                            </Col>
                                        </Row>
                                        <Row className="gx-3">
                                            <Col lg={6} as={Form.Group} className="mb-3" >
                                                <Form.Control defaultValue="客户编号" type="text" />
                                            </Col>
                                            <Col lg={6} as={Form.Group} className="mb-3" >
                                                <Form.Control defaultValue={32321} type="text" />
                                            </Col>
                                        </Row>
                                        <div className="repeater">
                                            <div data-repeater-list="category-group">
                                                <Row className="gx-3" data-repeater-item style={{ display: 'none' }}>
                                                    <Col lg={6} as={Form.Group} className="mb-3" >
                                                        <Form.Control placeholder="标签" type="text" />
                                                    </Col>
                                                    <Col lg={6} as={Form.Group} className="mb-3" >
                                                        <Form.Control placeholder="值" type="text" />
                                                    </Col>
                                                </Row>
                                            </div>
                                            <a data-repeater-create className="d-inline-flex align-items-center" href="#">
                                                <i className="ri-add-box-line me-1" /> 添加更多字段
                                            </a>
                                        </div>
                                    </Form>
                                </Col>
                            </Row>
                            <div className="separator separator-light" />
                            <Row>
                                <Col xxl={3} className="mb-xxl-0 mb-4">
                                    <h6>开票对象</h6>
                                    <Form>
                                        <Form.Group className="mb-3" >
                                            <Form.Select>
                                                <option value={0}>Supernova consultant</option>
                                                <option value={1}>一</option>
                                                <option value={2}>二</option>
                                                <option value={3}>三</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <a href="#" className="d-inline-flex align-items-center" onClick={() => setAddNewClient(!addNewClient)} >
                                            <i className="ri-add-box-line me-1" /> 添加新客户
                                        </a>
                                    </Form>
                                    <div className="Billto-wrap mt-4">
                                        <h6>Supernova consultant</h6>
                                        <p>Sycamore Street</p>
                                        <p>San Antonio Valley,</p>
                                        <p>CA 34668</p>
                                        <p>thompson_peter@super.co</p>
                                    </div>
                                    <a className="d-inline-flex align-items-center mt-2" data-bs-toggle="modal" data-bs-target="#billed_info" href="#some">
                                        <i className="ri-pencil-line me-1" /> 编辑信息
                                    </a>
                                </Col>
                                <Col xxl={4} className="offset-xxl-5">
                                    <h6>收货地址</h6>
                                    <div className="repeater">
                                        <HkSimpleCollapse
                                            bsPrefix="a"
                                            href="#"
                                            targetId="shipto_collpase"
                                            collapsed={true}
                                            title={<><i className="ri-add-box-line me-1" /> 添加收货地址</>}
                                            headerClass="d-inline-flex align-items-center"
                                        >
                                            <div id="shipto_collpase">
                                                <Row className="gx-3">
                                                    <div className="col-sm-12 form-group">
                                                        <Form.Control placeholder="客户公司名称" type="text" />
                                                    </div>
                                                    <div className="col-sm-12 form-group">
                                                        <Form.Control placeholder="地址" type="text" />
                                                    </div>
                                                    <Col lg={6} as={Form.Group} className="mb-3" >
                                                        <Form.Control placeholder="城市" type="text" />
                                                    </Col>
                                                    <Col lg={6} as={Form.Group} className="mb-3" >
                                                        <Form.Control placeholder="邮政编码" type="text" />
                                                    </Col>
                                                    <div className="col-sm-12 form-group">
                                                        <Form.Control placeholder="州/省" type="text" />
                                                    </div>
                                                    <div className="col-sm-12 form-group">
                                                        <Form.Control placeholder="国家" type="text" />
                                                    </div>
                                                    <div className="col-sm-12 form-group">
                                                        <Form.Control placeholder="GSTIN 在此处输入 GSTIN（选填）" type="text" />
                                                    </div>
                                                </Row>
                                            </div>
                                        </HkSimpleCollapse>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col sm>
                                    <form className="form-inline p-3 bg-grey-light-5 rounded">
                                        <div className="row gx-3 align-items-center">
                                            <div className="col-xl-auto mb-xl-0 mb-2">
                                                <label className="form-label mb-xl-0">筛选</label>
                                            </div>
                                            <div className="col-xl-auto mb-xl-0 mb-2">
                                                <select className="form-select">
                                                    <option value={0}>数字格式</option>
                                                    <option value={1}>一</option>
                                                    <option value={2}>二</option>
                                                    <option value={3}>三</option>
                                                </select>
                                            </div>
                                            <div className="col-xl-auto mb-xl-0 mb-2">
                                                <select className="form-select">
                                                    <option value={0}>添加/移除列</option>
                                                    <option value={1}>一</option>
                                                    <option value={2}>二</option>
                                                    <option value={3}>三</option>
                                                </select>
                                            </div>
                                            <div className="col-xl-auto">
                                                <select className="form-select">
                                                    <option value={0}>人民币 (¥)</option>
                                                    <option value={1}>一</option>
                                                    <option value={2}>二</option>
                                                    <option value={3}>三</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </Col>
                            </Row>
                            <div className="table-wrap mt-5">
                                <div className="invoice-table-wrap">
                                    {itemList.map((items, index) => (
                                        <Table bordered className="invoice-table" key={index}>
                                            <thead className="thead-primary">
                                                <tr>
                                                    <th>项目</th>
                                                    <th>数量</th>
                                                    <th>单价</th>
                                                    <th colSpan={2}>折扣</th>
                                                    <th>金额</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="table-row-gap"><td /></tr>
                                                <tr>
                                                    <td className="w-70 rounded-top-start border-end-0 border-bottom-0">
                                                        <Form.Control type="text" name="title" value={items.title} onChange={updateItemList(index)} />
                                                    </td>
                                                    <td className="border-end-0 border-bottom-0">
                                                        <Form.Control type="text" name="quantity" className="qty" value={items.quantity} onChange={updateItemList(index)} />
                                                    </td>
                                                    <td className="w-15 border-end-0 border-bottom-0">
                                                        <Form.Control type="text" name="price" className="price" value={items.price} onChange={updateItemList(index)} />
                                                    </td>
                                                    <td className="border-end-0 border-bottom-0">
                                                        <Form.Control type="text" name="discount" className="discount w-60p" value={items.discount} onChange={updateItemList(index)} />
                                                    </td>
                                                    <td className="border-end-0 border-bottom-0">
                                                        <Form.Select name="discountType" value={items.discountType} onChange={updateItemList(index)} className="disc-type w-70p">
                                                            <option value="per">%</option>
                                                            <option value="cur">₹</option>
                                                        </Form.Select>
                                                    </td>
                                                    <td className="w-20  rounded-end  bg-primary-light-5 close-over position-relative" rowSpan={2}><Form.Control type="text" className="bg-transparent border-0 p-0 total" value={items.totalPrice} readOnly />
                                                        <Button bsPrefix="btn-close" className="close-row" onClick={() => deleteItem(items.id)} >
                                                            <span aria-hidden="true">×</span>
                                                        </Button></td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={5} className="rounded-bottom-start border-end-0">
                                                        <Form.Control type="text" name="description" value={items.description} onChange={updateItemList(index)} />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    ))}
                                    <a className="d-inline-flex align-items-center add-new-row" href="#" onClick={addItem} >
                                        <i className="ri-add-box-line me-1" /> 添加新项目
                                    </a>
                                </div>
                            </div>
                            <Row className="justify-content-end">
                                <Col xxl={6} className="mt-5">
                                    <div className="table-wrap">
                                        <Table responsive bordered className="subtotal-table">
                                            <tbody>
                                                <tr>
                                                    <td colSpan={3} className="rounded-top-start border-end-0 border-bottom-0">小计</td>
                                                    <td className="rounded-top-end border-bottom-0 w-30 bg-primary-light-5">
                                                        <Form.Control type="text" className="bg-transparent border-0 p-0 gross-total" value={subTotal} readOnly />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={3} className="border-end-0 border-bottom-0">项目折扣</td>
                                                    <td className="border-bottom-0  bg-primary-light-5">
                                                        <Form.Control type="text" className="bg-transparent border-0 p-0 gross-discount" value={totalDiscount} readOnly />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border-end-0 border-bottom-0">额外折扣</td>
                                                    <td className="border-end-0 border-bottom-0 w-25">
                                                        <Form.Control type="text" className="extdiscount" name="discValue" value={extraDiscount.discValue} onChange={e => setExtraDiscount({ ...extraDiscount, [e.target.name]: e.target.value })} />
                                                    </td>
                                                    <td className="border-end-0 border-bottom-0 w-25">
                                                        <Form.Select className="form-select extra-disc-type" name="discType" value={extraDiscount.discType} onChange={e => setExtraDiscount({ ...extraDiscount, [e.target.name]: e.target.value })} >
                                                            <option value="per">%</option>
                                                            <option value="cur">₹</option>
                                                        </Form.Select>
                                                    </td>
                                                    <td className="border-bottom-0  bg-primary-light-5">
                                                        <Form.Control type="text" className="bg-transparent border-0 p-0 extdiscount-read" value={extraDiscount.discValue} readOnly />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={3} className="rounded-bottom-start border-end-0 bg-primary-light-5">
                                                        <span className="text-dark">总计</span>
                                                    </td>
                                                    <td className="rounded-bottom-end  bg-primary-light-5">
                                                        <Form.Control type="text" className="bg-transparent border-0 p-0 totalPrice" value={grossTotal} readOnly />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col xxl={5} className="order-2 order-xxl-0">
                                    <Form.Group>
                                        <div className="form-label-group">
                                            <Form.Label>给客户的备注</Form.Label>
                                            <small className="text-muted">1400</small>
                                        </div>
                                        <Form.Control as="textarea" rows={6} placeholder="撰写内部备注" defaultValue={""} />
                                        <Button variant="outline-light" className="mt-2">添加备注</Button>
                                    </Form.Group>
                                </Col>
                                <Col xxl={4} className="offset-xxl-3 text-xxl-end mb-xxl-0 mb-3">
                                    <div className="btn btn-light btn-link text-primary btn-file bg-transparent p-0 border-0">
                                        <span className="d-inline-flex align-items-center">
                                            <i className="ri-add-box-line me-1" /> 添加签名（可选）
                                            <input type="file" className="upload" />
                                        </span>
                                    </div>
                                    <HkSimpleCollapse
                                        bsPrefix="a"
                                        href="#"
                                        targetId="label_collpase"
                                        collapsed={false}
                                        title={<><i className="ri-add-box-line me-1" /> 添加名称与标签</>}
                                        headerClass="d-inline-flex align-items-center mt-2"
                                    >
                                        <div className="mt-5" id="label_collpase">
                                            <Form.Group className="form-group close-over">
                                                <Form.Control type="text" className="form-control" defaultValue="凯瑟琳·泽塔·琼斯" />
                                                <Button bsPrefix="btn-close" className="close-input">
                                                    <span aria-hidden="true">×</span>
                                                </Button>
                                            </Form.Group>
                                            <Form.Group className="form-group close-over">
                                                <Form.Control type="text" className="form-control" defaultValue="caoba 联合创始人" />
                                                <Button bsPrefix="btn-close" className="close-input">
                                                    <span aria-hidden="true">×</span>
                                                </Button>
                                            </Form.Group>
                                        </div>
                                    </HkSimpleCollapse>
                                    {/* <div>
                                        <a className="d-inline-flex align-items-center mt-2" data-bs-toggle="collapse" href="#label_collpase">
                                            <i className="ri-add-box-line me-1" /> Add Name &amp; Label
                                        </a>
                                    </div>
                                    <div className="collapse show mt-5" id="label_collpase">
                                        <Form.Group className="form-group close-over">
                                            <Form.Control type="text" className="form-control" defaultValue="Katherine Zeta Jones" />
                                            <Button bsPrefix="btn-close" className="close-input">
                                                <span aria-hidden="true">×</span>
                                            </Button>
                                        </Form.Group>
                                        <Form.Group className="form-group close-over">
                                            <Form.Control type="text" className="form-control" defaultValue="Co-founder caoba" />
                                            <Button bsPrefix="btn-close" className="close-input">
                                                <span aria-hidden="true">×</span>
                                            </Button>
                                        </Form.Group>
                                    </div> */}
                                </Col>
                            </Row>
                            <div className="separator separator-light" />
                            <h6 className="mb-4">条款与条件</h6>
                            <div className="repeater">
                                <ol className="ps-3" data-repeater-list="category-group">
                                    {
                                        termAndConditions.map((datas, index) => (
                                            <li className="form-group close-over" key={index} >
                                                <Form.Control type="text" name="conditon" value={datas.conditon} onChange={updateTC(index)} />
                                                <Button bsPrefix="btn-close" className="close-input" onClick={() => deleteCondition(datas.id)} >
                                                    <span aria-hidden="true">×</span>
                                                </Button>
                                            </li>
                                        ))
                                    }

                                </ol>
                                <a href="#" className="d-inline-flex align-items-center" onClick={addNewConditon}>
                                    <i className="ri-add-box-line me-1" /> 添加新条款行
                                </a>
                            </div>
                            <div className="separator separator-light" />
                            <div className="btn btn-light btn-file mb-4">
                                上传附件
                                <Form.Control type="file" className="upload" />
                            </div>

                            <HkSimpleCollapse
                                bsPrefix="a"
                                href="#"
                                targetId="memo_collpase"
                                collapsed={false}
                                title={<><i className="ri-add-box-line me-1" /> 添加个人备忘</>}
                                headerClass="d-inline-flex align-items-center my-2"
                            >
                                <Row id="memo_collpase">
                                    <Col xxl={5}>
                                        <Form.Group className="mb-3" >
                                            <div className="form-label-group">
                                                <Form.Label>个人备忘</Form.Label>
                                                <small className="text-muted">1400</small>
                                            </div>
                                            <Form.Control as="textarea" rows={6} placeholder="撰写内部备注" defaultValue={""} />
                                            <Button variant="outline-light" className="mt-2">添加备注</Button>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </HkSimpleCollapse>
                        </div>
                    </Container>
                </SimpleBar>
            </div>

            {/* Edit Info */}
            <EditInfo show={editInfo} hide={() => setEditInfo(!editInfo)} />

            {/* Billed Edit Info */}
            <AddNewClient show={addNewClient} hide={() => setAddNewClient(!addNewClient)} />
        </>
    )
}

export default Body

<template>
  <div class="invoice-body">
    <simplebar class="nicescroll-bar">
      <div class="container">
        <div class="create-invoice-wrap mt-xxl-5 p-md-5 p-3">
          <div class="row">
            <div class="col-lg-3 col-md-5 order-md-0 order-1">
              <div class="upload-logo">
                <HkDropzone> 上传 Logo </HkDropzone>
              </div>
            </div>
            <div class="col-lg-4 offset-lg-5 offset-md-3 col-md-4 mb-md-0 mb-4">
              <HkInlineEdit
                as="h2"
                id="invoice"
                left
                value="发票"
                class="d-flex align-items-center justify-content-md-end mb-0 inline-editable-wrap"
              />
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-xxl-3">
              <a
                class="d-inline-block mb-3"
                data-bs-toggle="collapse"
                href="#address_collpase"
                role="button"
                aria-expanded="false"
              >
                - 您的商家信息
              </a>
              <div class="collapse show" id="address_collpase">
                <div class="address-wrap">
                  <h6>caoba</h6>
                  <p>4747, Pearl Street</p>
                  <p>Rainy Day Drive,</p>
                  <p>Washington DC 42156</p>
                  <p>caoba_01@caoba.com</p>
                </div>
                <a
                  class="d-inline-flex align-items-center mt-2"
                  data-bs-toggle="modal"
                  data-bs-target="#edit_info"
                  href="#"
                >
                  <i class="ri-pencil-line me-1"></i> 编辑信息
                </a>
              </div>
            </div>
            <div class="col-xxl-4 offset-xxl-5 mt-xxl-0 mt-6">
              <form>
                <div class="row gx-3">
                  <div class="col-lg-6 form-group">
                    <input class="form-control" value="发票编号*" type="text" />
                  </div>
                  <div class="col-lg-6 form-group">
                    <input class="form-control" value="0001" type="text" />
                  </div>
                </div>
                <div class="row gx-3">
                  <div class="col-lg-6 form-group">
                    <input class="form-control" value="开票日期*" type="text" />
                  </div>
                  <div class="col-lg-6 form-group">
                    <input
                      class="form-control"
                      name="single-date-pick"
                      value="24/2/2020"
                      type="text"
                    />
                  </div>
                </div>
                <div class="row gx-3">
                  <div class="col-lg-6 form-group">
                    <input class="form-control" value="到期日*" type="text" />
                  </div>
                  <div class="col-lg-6 form-group">
                    <select class="form-select">
                      <option selected="">签收即付</option>
                      <option value="1">一</option>
                      <option value="2">二</option>
                      <option value="3">三</option>
                    </select>
                  </div>
                </div>
                <div class="row gx-3">
                  <div class="col-lg-6 form-group">
                    <input class="form-control" value="客户编号" type="text" />
                  </div>
                  <div class="col-lg-6 form-group">
                    <input class="form-control" value="32321" type="text" />
                  </div>
                </div>
                <div class="repeater">
                  <div data-repeater-list="category-group">
                    <div class="row gx-3" data-repeater-item style="display: none">
                      <div class="col-lg-6 form-group">
                        <input class="form-control" placeholder="标签" type="text" />
                      </div>
                      <div class="col-lg-6 form-group">
                        <input class="form-control" placeholder="值" type="text" />
                      </div>
                    </div>
                  </div>
                  <a
                    data-repeater-create
                    class="d-inline-flex align-items-center"
                    href="#"
                  >
                    <i class="ri-add-box-line me-1"></i> 添加更多字段
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div class="separator separator-light"></div>
          <div class="row">
            <div class="col-xxl-3 mb-xxl-0 mb-4">
              <h6>开票对象</h6>
              <form>
                <div class="form-group">
                  <select class="form-select">
                    <option selected="">Supernova consultant</option>
                    <option value="1">一</option>
                    <option value="2">二</option>
                    <option value="3">三</option>
                  </select>
                </div>
                <a
                  class="d-inline-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#billed_info"
                  href="#"
                >
                  <i class="ri-add-box-line me-1"></i> 添加新客户
                </a>
              </form>
              <div class="Billto-wrap mt-4">
                <h6>Supernova consultant</h6>
                <p>Sycamore Street</p>
                <p>San Antonio Valley,</p>
                <p>CA 34668</p>
                <p>thompson_peter@super.co</p>
              </div>
              <a
                class="d-inline-flex align-items-center mt-2"
                data-bs-toggle="modal"
                data-bs-target="#billed_info"
                href="#"
              >
                <i class="ri-pencil-line me-1"></i> 编辑信息
              </a>
            </div>
            <div class="col-xxl-4 offset-xxl-5">
              <h6>收货地址</h6>
              <div class="repeater">
                <div class="collapse" id="shipto_collpase">
                  <div class="row gx-3">
                    <div class="col-sm-12 form-group">
                      <input
                        class="form-control"
                        placeholder="客户公司名称"
                        type="text"
                      />
                    </div>
                    <div class="col-sm-12 form-group">
                      <input class="form-control" placeholder="地址" type="text" />
                    </div>
                    <div class="col-lg-6 form-group">
                      <input class="form-control" placeholder="城市" type="text" />
                    </div>
                    <div class="col-lg-6 form-group">
                      <input class="form-control" placeholder="邮政编码" type="text" />
                    </div>
                    <div class="col-sm-12 form-group">
                      <input class="form-control" placeholder="州/省" type="text" />
                    </div>
                    <div class="col-sm-12 form-group">
                      <input class="form-control" placeholder="国家" type="text" />
                    </div>
                    <div class="col-sm-12 form-group">
                      <input
                        class="form-control"
                        placeholder="GSTIN 在此处输入 GSTIN（选填）"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <a
                  data-bs-toggle="collapse"
                  href="#shipto_collpase"
                  class="d-inline-flex align-items-center"
                >
                  <i class="ri-add-box-line me-1"></i> 添加收货地址
                </a>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-sm">
              <form class="form-inline p-3 bg-grey-light-5 rounded">
                <div class="row gx-3 align-items-center">
                  <div class="col-xl-auto mb-xl-0 mb-2">
                    <label class="form-label mb-xl-0">筛选</label>
                  </div>
                  <div class="col-xl-auto mb-xl-0 mb-2">
                    <select class="form-select">
                      <option selected="">数字格式</option>
                      <option value="1">一</option>
                      <option value="2">二</option>
                      <option value="3">三</option>
                    </select>
                  </div>
                  <div class="col-xl-auto mb-xl-0 mb-2">
                    <select class="form-select">
                      <option selected="">添加/移除列</option>
                      <option value="1">一</option>
                      <option value="2">二</option>
                      <option value="3">三</option>
                    </select>
                  </div>
                  <div class="col-xl-auto">
                    <select class="form-select">
                      <option selected="">美元 ($ USD)</option>
                      <option value="1">一</option>
                      <option value="2">二</option>
                      <option value="3">三</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="table-wrap mt-5">
            <div class="invoice-table-wrap">
              <table
                v-for="(item, index) in itemList"
                :key="item.id"
                class="table table-bordered invoice-table"
              >
                <thead class="thead-primary">
                  <tr>
                    <th>项目</th>
                    <th>数量</th>
                    <th>单价</th>
                    <th colspan="2">折扣</th>
                    <th>金额</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-row-gap">
                    <td></td>
                  </tr>
                  <tr>
                    <td class="w-70 rounded-top-start border-end-0 border-bottom-0">
                      <input
                        type="text"
                        class="form-control"
                        v-model="item.title"
                        @input="updateItemList(index)"
                      />
                    </td>
                    <td class="border-end-0 border-bottom-0">
                      <input
                        type="text"
                        class="form-control qty"
                        v-model="item.quantity"
                        @input="updateItemList(index)"
                      />
                    </td>
                    <td class="w-15 border-end-0 border-bottom-0">
                      <input
                        type="text"
                        class="form-control price"
                        v-model="item.price"
                        @input="updateItemList(index)"
                      />
                    </td>
                    <td class="border-end-0 border-bottom-0">
                      <input
                        type="text"
                        class="form-control discount w-60p"
                        v-model="item.discount"
                        @input="updateItemList(index)"
                      />
                    </td>
                    <td class="border-end-0 border-bottom-0">
                      <select
                        class="form-select disc-type w-70p"
                        v-model="item.discountType"
                        @select="updateItemList(index)"
                      >
                        <option value="per">%</option>
                        <option value="cur">₹</option>
                      </select>
                    </td>
                    <td
                      class="w-20 rounded-end bg-primary-light-5 close-over position-relative"
                      rowspan="2"
                    >
                      <input
                        type="text"
                        class="form-control bg-transparent border-0 p-0 total"
                        v-model="item.totalPrice"
                        readonly
                      />
                      <button
                        type="button"
                        class="close-row btn-close"
                        @click="deleteItem(item.id)"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="5" class="rounded-bottom-start border-end-0">
                      <input
                        type="text"
                        class="form-control"
                        v-model="item.description"
                        @input="updateItemList(index)"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <a
                class="d-inline-flex align-items-center add-new-row"
                href="#"
                @click="addItem"
              >
                <i class="ri-add-box-line me-1"></i> 添加新项目
              </a>
            </div>
          </div>

          <div class="row justify-content-end">
            <div class="col-xxl-6 mt-5">
              <div class="table-wrap">
                <div class="table-responsive">
                  <table class="table table-bordered subtotal-table">
                    <tbody>
                      <tr>
                        <td
                          colspan="3"
                          class="rounded-top-start border-end-0 border-bottom-0"
                        >
                          小计
                        </td>
                        <td
                          class="rounded-top-end border-bottom-0 w-30 bg-primary-light-5"
                        >
                          <input
                            type="text"
                            class="form-control bg-transparent border-0 p-0 gross-total"
                            v-model="subTotal"
                            readonly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" class="border-end-0 border-bottom-0">
                          项目折扣
                        </td>
                        <td class="border-bottom-0 bg-primary-light-5">
                          <input
                            type="text"
                            class="form-control bg-transparent border-0 p-0 gross-discount"
                            value=""
                            readonly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td class="border-end-0 border-bottom-0">额外折扣</td>
                        <td class="border-end-0 border-bottom-0 w-25">
                          <input type="text" class="form-control extdiscount" value="0" />
                        </td>
                        <td class="border-end-0 border-bottom-0 w-25">
                          <select class="form-select extra-disc-type">
                            <option selected value="1">%</option>
                            <option value="2">₹</option>
                          </select>
                        </td>
                        <td class="border-bottom-0 bg-primary-light-5">
                          <input
                            type="text"
                            class="form-control bg-transparent border-0 p-0 extdiscount-read"
                            value="0"
                            readonly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          class="rounded-bottom-start border-end-0 bg-primary-light-5"
                        >
                          <span class="text-dark">总计</span>
                        </td>
                        <td class="rounded-bottom-end bg-primary-light-5">
                          <input
                            type="text"
                            class="form-control bg-transparent border-0 p-0 subtotal"
                            value=""
                            readonly
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-xxl-5 order-2 order-xxl-0">
              <div class="form-group">
                <div class="form-label-group">
                  <label class="form-label">给客户的备注</label>
                  <small class="text-muted">1400</small>
                </div>
                <textarea
                  class="form-control"
                  rows="6"
                  placeholder="撰写内部备注"
                ></textarea>
                <button class="btn btn-outline-light mt-2">添加备注</button>
              </div>
            </div>
            <div class="col-xxl-4 offset-xxl-3 text-xxl-end mb-xxl-0 mb-3">
              <div
                class="btn btn-light btn-link text-primary btn-file bg-transparent p-0 border-0"
              >
                <span class="d-inline-flex align-items-center">
                  <i class="ri-add-box-line me-1"></i> 添加签名（可选）
                  <input type="file" class="upload" />
                </span>
              </div>
              <div>
                <a
                  class="d-inline-flex align-items-center mt-2"
                  data-bs-toggle="collapse"
                  href="#label_collpase"
                >
                  <i class="ri-add-box-line me-1"></i> 添加名称与标签
                </a>
              </div>
              <div class="collapse show mt-5" id="label_collpase">
                <div class="form-group close-over">
                  <input type="text" class="form-control" value="凯瑟琳·泽塔·琼斯" />
                  <button type="button" class="close-input btn-close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="form-group close-over">
                  <input type="text" class="form-control" value="caoba 联合创始人" />
                  <button type="button" class="close-input btn-close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="separator separator-light"></div>
          <h6 class="mb-4">条款与条件</h6>
          <div class="repeater">
            <ol class="ps-3" data-repeater-list="category-group">
              <li
                v-for="(terms, index) in termAndConditions"
                :key="index"
                class="form-group close-over"
              >
                <input
                  type="text"
                  class="form-control"
                  v-model="terms.conditon"
                  @input="updateTC(index)"
                />
                <button
                  type="button"
                  class="close-input btn-close"
                  @click="deleteCondition(terms.id)"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </li>
            </ol>
            <a
              data-repeater-create
              class="d-inline-flex align-items-center"
              href="#"
              @click="addNewConditon"
            >
              <i class="ri-add-box-line me-1"></i> 添加新条款行
            </a>
          </div>
          <div class="separator separator-light"></div>
          <div class="btn btn-light btn-file mb-4">
            上传附件
            <input type="file" class="upload" />
          </div>
          <div class="my-2">
            <a
              class="d-inline-flex align-items-center"
              data-bs-toggle="collapse"
              href="#memo_collpase"
            >
              <i class="ri-add-box-line me-1"></i> 添加个人备忘
            </a>
          </div>

          <div class="collapse show" id="memo_collpase">
            <div class="row">
              <div class="col-xxl-5">
                <div class="form-group">
                  <div class="form-label-group">
                    <label class="form-label">个人备忘</label>
                    <small class="text-muted">1400</small>
                  </div>
                  <textarea
                    class="form-control"
                    rows="6"
                    placeholder="撰写内部备注"
                  ></textarea>
                  <button class="btn btn-outline-light mt-2">添加备注</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </simplebar>
  </div>
  <SettingPannel @toggle-setting-pannel="toggleSettingPannel" />
</template>

<script>
import { nanoid } from "nanoid";
import HkInlineEdit from "@/hk-components/@hk-inline-editor/HkInlineEdit.vue";
import SettingPannel from "./SettingPannel.vue";

export default {
  name: "CreateInvoice",
  components: {
    HkInlineEdit,
    SettingPannel,
  },
  props: {
    showSidebar: Boolean,
  },
  data() {
    return {
      editInfo: false,
      addNewClient: false,
      subTotal: 0,
      totalDiscount: 0,
      extraDiscount: { discValue: 0, discType: "per" },
      grossTotal: 0,
      itemList: [
        {
          id: 0,
          title: "重新设计 agencyclick.com",
          quantity: 1,
          price: 150,
          discount: 2,
          discountType: "per",
          totalPrice: 147,
          description:
            "这是我的项目描述。如果行内放不下一整句话，文字区域会自动增大以便完整显示。",
        },
      ],
      termAndConditions: [
        {
          id: 0,
          conditon:
            "请在发票开具之日起 15 天内付款，逾期未付将按 14% 的年利率收取逾期利息。",
        },
        {
          id: 1,
          conditon: "汇款时请注明发票编号。",
        },
      ],
    };
  },

  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
    toggleSettingPannel() {
      this.$emit("toggle-setting-pannel");
    },

    addItem(event) {
      event.preventDefault();
      const newItem = {
        id: nanoid(),
        title: "",
        quantity: 0,
        price: 0,
        discount: 0,
        discountType: "per",
        totalPrice: 0,
        description: "",
      };
      this.itemList.push(newItem);
    },
    updateItemList(index) {
      return (e) => {
        let newArr = [...this.itemList];
        if (e.target.name === "title") {
          newArr[index].title = e.target.value;
        } else if (e.target.name === "quantity") {
          newArr[index].quantity = e.target.value;
        } else if (e.target.name === "price") {
          newArr[index].price = e.target.value;
        } else if (e.target.name === "discount") {
          newArr[index].discount = e.target.value;
        } else if (e.target.name === "discountType") {
          newArr[index].discountType = e.target.value;
        } else if (e.target.name === "description") {
          newArr[index].description = e.target.value;
        }
        this.itemList = newArr;
        if (newArr[index].discountType === "per") {
          let disc =
            this.itemList[index].price -
            (this.itemList[index].price * this.itemList[index].discount) / 100;
          newArr[index].totalPrice = newArr[index].quantity * disc;
        } else {
          let disc = this.itemList[index].price - this.itemList[index].discount;
          newArr[index].totalPrice = newArr[index].quantity * disc;
        }
      };
    },
    deleteItem(itemId) {
      const newList = [...this.itemList];
      const index = this.itemList.findIndex((item) => item.id === itemId);
      newList.splice(index, 1);
      this.itemList = newList;
    },
    updateTC(index) {
      return (e) => {
        let updatedArr = [...this.termAndConditions];
        updatedArr[index] = e.target.value;
        this.termAndConditions = updatedArr;
      };
    },
    addNewConditon(event) {
      event.preventDefault();
      const newCondition = {
        id: nanoid(),
        conditon: "",
      };
      this.termAndConditions.push(newCondition);
    },
    deleteCondition(itemId) {
      let newConditions = [...this.termAndConditions];
      let index = this.termAndConditions.findIndex((item) => item.id === itemId);
      newConditions.splice(index, 1);
      this.termAndConditions = newConditions;
    },
  },
  computed: {
    CountSubtotal() {
      return this.itemList.reduce((ttl, datas) => (ttl = ttl + datas.totalPrice), 0);
    },
    disct() {
      return this.itemList.reduce(
        (ttl, datas) => (ttl = ttl + parseInt(datas.discount)),
        0
      );
    },
  },
  watch: {
    itemList: {
      handler() {
        this.subTotal = this.CountSubtotal;
        this.totalDiscount = this.disct;
        if (this.extraDiscount.discType === "per") {
          this.grossTotal =
            this.subTotal - (this.subTotal * this.extraDiscount.discValue) / 100;
        } else {
          this.grossTotal = this.subTotal - this.extraDiscount.discValue;
        }
      },
      deep: true,
    },
    subTotal() {
      if (this.extraDiscount.discType === "per") {
        this.grossTotal =
          this.subTotal - (this.subTotal * this.extraDiscount.discValue) / 100;
      } else {
        this.grossTotal = this.subTotal - this.extraDiscount.discValue;
      }
    },
    extraDiscount: {
      handler() {
        if (this.extraDiscount.discType === "per") {
          this.grossTotal =
            this.subTotal - (this.subTotal * this.extraDiscount.discValue) / 100;
        } else {
          this.grossTotal = this.subTotal - this.extraDiscount.discValue;
        }
      },
      deep: true,
    },
  },
};
</script>

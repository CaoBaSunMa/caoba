<template>
  <div class="invoiceapp-detail-wrap">
    <InvoiceHeader
      :showSidebar="showSidebar"
      :saving="saving"
      @toggle-sidebar="toggleSidebar"
      @toggle-setting-pannel="toggleSettingPannel"
      @save="doSave"
      @preview="doPreview"
      @template-change="applyTemplate"
    />
    <div class="invoice-body">
      <simplebar class="nicescroll-bar">
        <div class="container">
          <div class="create-invoice-wrap mt-xxl-5 p-md-5 p-3">
            <div class="row">
              <div class="col-lg-3 col-md-5 order-md-0 order-1">
                <div class="upload-logo">
                  <HkDropZone> 上传 Logo </HkDropZone>
                  <div v-if="signature" class="fs-7 text-muted mt-2">签名文件：{{ signature }}</div>
                </div>
              </div>
              <div class="col-lg-4 offset-lg-5 offset-md-3 col-md-4 mb-md-0 mb-4">
                <HkInlineEdit
                  as="h2"
                  id="invoice-title"
                  left
                  :value="draftStore.title"
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
                    <h6>{{ draftStore.draft.merchant.company }}</h6>
                    <p>{{ draftStore.draft.merchant.address1 }}</p>
                    <p>{{ draftStore.draft.merchant.address2 }}</p>
                    <p>{{ draftStore.draft.merchant.email }}</p>
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
                      <label class="form-label mb-1">发票编号</label>
                      <input class="form-control" placeholder="发票编号" type="text" v-model="draftStore.draft.invoiceNumber" />
                    </div>
                    <div class="col-lg-6 form-group">
                      <label class="form-label mb-1">开票日期</label>
                      <input class="form-control" type="date" v-model="draftStore.draft.issueDate" />
                    </div>
                  </div>
                  <div class="row gx-3">
                    <div class="col-lg-6 form-group">
                      <label class="form-label mb-1">到期日</label>
                      <select class="form-select" v-model="dueOption" @change="onDueChange">
                        <option value="immediate">签收即付</option>
                        <option value="7">7 天内</option>
                        <option value="15">15 天内</option>
                        <option value="30">30 天内</option>
                      </select>
                    </div>
                    <div class="col-lg-6 form-group">
                      <label class="form-label mb-1">客户编号</label>
                      <input class="form-control" placeholder="客户编号" type="text" v-model="draftStore.draft.clientCode" />
                    </div>
                  </div>
                  <div class="repeater">
                    <div data-repeater-list="category-group">
                      <div
                        class="row gx-3"
                        v-for="(field, idx) in draftStore.draft.extraFields"
                        :key="field.id"
                        data-repeater-item
                      >
                        <div class="col-lg-6 form-group">
                          <input class="form-control" placeholder="标签" type="text" v-model="field.label" />
                        </div>
                        <div class="col-lg-6 form-group d-flex">
                          <input class="form-control" placeholder="值" type="text" v-model="field.value" />
                          <button
                            type="button"
                            class="btn btn-icon btn-flush-dark btn-rounded ms-1"
                            title="移除"
                            @click="draftStore.removeExtraField(field.id)"
                          >
                            <span class="icon"><span class="feather-icon"><feather-icon name="x"></feather-icon></span></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <a
                      class="d-inline-flex align-items-center"
                      href="javascript:void(0);"
                      @click.prevent="draftStore.addExtraField()"
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
                    <input
                      class="form-control"
                      type="text"
                      placeholder="客户公司名称"
                      v-model="draftStore.draft.client.company"
                    />
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
                  <h6>{{ draftStore.draft.client.company }}</h6>
                  <p>{{ draftStore.draft.client.address1 }}</p>
                  <p>{{ draftStore.draft.client.address2 }}</p>
                  <p>{{ draftStore.draft.client.email }}</p>
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
                        <input class="form-control" placeholder="客户公司名称" type="text" v-model="draftStore.draft.shipto.company" />
                      </div>
                      <div class="col-sm-12 form-group">
                        <input class="form-control" placeholder="地址" type="text" v-model="draftStore.draft.shipto.address" />
                      </div>
                      <div class="col-lg-6 form-group">
                        <input class="form-control" placeholder="城市" type="text" v-model="draftStore.draft.shipto.city" />
                      </div>
                      <div class="col-lg-6 form-group">
                        <input class="form-control" placeholder="邮政编码" type="text" v-model="draftStore.draft.shipto.zip" />
                      </div>
                      <div class="col-sm-12 form-group">
                        <input class="form-control" placeholder="州/省" type="text" v-model="draftStore.draft.shipto.state" />
                      </div>
                      <div class="col-sm-12 form-group">
                        <input class="form-control" placeholder="国家" type="text" v-model="draftStore.draft.shipto.country" />
                      </div>
                      <div class="col-sm-12 form-group">
                        <input
                          class="form-control"
                          placeholder="GSTIN 在此处输入 GSTIN（选填）"
                          type="text"
                          v-model="draftStore.draft.shipto.gstin"
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
                      <select class="form-select" v-model="draftStore.draft.settings.font">
                        <option>Arial</option>
                        <option>Times New Roman</option>
                        <option>Noto Sans SC</option>
                      </select>
                    </div>
                    <div class="col-xl-auto mb-xl-0 mb-2">
                      <select class="form-select" v-model="draftStore.draft.settings.fontSize">
                        <option value="14px">14px</option>
                        <option value="16px">16px</option>
                        <option value="20px">20px</option>
                      </select>
                    </div>
                    <div class="col-xl-auto">
                      <select
                        class="form-select"
                        :value="draftStore.draft.settings.currency"
                        @change="onCurrencyChange"
                      >
                        <option value="CNY">人民币（¥ CNY）</option>
                        <option value="USD">美元（$ USD）</option>
                        <option value="INR">印度卢比（₹）</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="table-wrap mt-5">
              <div class="invoice-table-wrap">
                <table v-for="(item, index) in draftStore.draft.items" :key="item.id" class="table table-bordered invoice-table">
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
                        <input type="text" class="form-control" placeholder="项目名称" v-model="item.title" />
                      </td>
                      <td class="border-end-0 border-bottom-0">
                        <input
                          type="number"
                          class="form-control qty"
                          :value="item.quantity"
                          @input="onItemInput(index, 'quantity', $event)"
                        />
                      </td>
                      <td class="w-15 border-end-0 border-bottom-0">
                        <input
                          type="number"
                          class="form-control price"
                          :value="item.price"
                          @input="onItemInput(index, 'price', $event)"
                        />
                      </td>
                      <td class="border-end-0 border-bottom-0">
                        <input
                          type="number"
                          class="form-control discount w-60p"
                          :value="item.discount"
                          @input="onItemInput(index, 'discount', $event)"
                        />
                      </td>
                      <td class="border-end-0 border-bottom-0">
                        <select
                          class="form-select disc-type w-70p"
                          :value="item.discountType"
                          @change="onItemInput(index, 'discountType', $event)"
                        >
                          <option value="per">%</option>
                          <option value="cur">¥</option>
                        </select>
                      </td>
                      <td
                        class="w-20 rounded-end bg-primary-light-5 close-over position-relative"
                        rowspan="2"
                      >
                        <input
                          type="text"
                          class="form-control bg-transparent border-0 p-0 total"
                          :value="fmtMoney(item.totalPrice)"
                          readonly
                        />
                        <button
                          type="button"
                          class="close-row btn-close"
                          @click="draftStore.removeItem(item.id)"
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
                          placeholder="项目描述"
                          v-model="item.description"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <a
                  class="d-inline-flex align-items-center add-new-row"
                  href="javascript:void(0);"
                  @click.prevent="draftStore.addItem()"
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
                          <td colspan="3" class="rounded-top-start border-end-0 border-bottom-0">小计</td>
                          <td class="rounded-top-end border-bottom-0 w-30 bg-primary-light-5">
                            <input type="text" class="form-control bg-transparent border-0 p-0 gross-total" :value="fmtMoney(subtotal)" readonly />
                          </td>
                        </tr>
                        <tr>
                          <td colspan="3" class="border-end-0 border-bottom-0">项目折扣</td>
                          <td class="border-bottom-0 bg-primary-light-5">
                            <input type="text" class="form-control bg-transparent border-0 p-0 gross-discount" :value="fmtMoney(itemDiscount)" readonly />
                          </td>
                        </tr>
                        <tr>
                          <td class="border-end-0 border-bottom-0">额外折扣</td>
                          <td class="border-end-0 border-bottom-0 w-25">
                            <input type="number" class="form-control extdiscount" v-model="extraDiscount.value" />
                          </td>
                          <td class="border-end-0 border-bottom-0 w-25">
                            <select class="form-select extra-disc-type" v-model="extraDiscount.type">
                              <option value="per">%</option>
                              <option value="cur">¥</option>
                            </select>
                          </td>
                          <td class="border-bottom-0 bg-primary-light-5">
                            <input type="text" class="form-control bg-transparent border-0 p-0 extdiscount-read" :value="fmtMoney(extraDiscountAmount)" readonly />
                          </td>
                        </tr>
                        <tr>
                          <td colspan="3" class="rounded-bottom-start border-end-0 bg-primary-light-5">
                            <span class="text-dark">总计</span>
                          </td>
                          <td class="rounded-bottom-end bg-primary-light-5">
                            <input type="text" class="form-control bg-transparent border-0 p-0 subtotal" :value="fmtMoney(grandTotal)" readonly />
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
                    <small class="text-muted">{{ draftStore.draft.notes.length }}/1400</small>
                  </div>
                  <textarea
                    class="form-control"
                    rows="6"
                    placeholder="撰写给客户的备注"
                    v-model="draftStore.draft.notes"
                  ></textarea>
                  <button class="btn btn-outline-light mt-2" type="button" @click="notesDone">添加备注</button>
                </div>
              </div>
              <div class="col-xxl-4 offset-xxl-3 text-xxl-end mb-xxl-0 mb-3">
                <div class="btn btn-light btn-link text-primary btn-file bg-transparent p-0 border-0">
                  <span class="d-inline-flex align-items-center">
                    <i class="ri-add-box-line me-1"></i> 添加签名（可选）
                    <input type="file" class="upload" @change="onSignature" />
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
                  <div class="form-group d-flex">
                    <input
                      type="text"
                      class="form-control me-1"
                      placeholder="新标签，回车添加"
                      v-model="tagInput"
                      @keydown.enter.prevent="draftStore.addTag(tagInput); tagInput = ''"
                    />
                    <button type="button" class="btn btn-outline-light" @click="draftStore.addTag(tagInput); tagInput = ''">添加</button>
                  </div>
                  <div class="form-group close-over" v-for="tag in draftStore.draft.tags" :key="tag">
                    <input type="text" class="form-control" :value="tag" readonly />
                    <button type="button" class="close-input btn-close" @click="draftStore.removeTag(tag)">
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
                  v-for="terms in draftStore.draft.terms"
                  :key="terms.id"
                  class="form-group close-over"
                >
                  <input
                    type="text"
                    class="form-control"
                    v-model="terms.conditon"
                    @input="draftStore.persist()"
                  />
                  <button
                    type="button"
                    class="close-input btn-close"
                    @click="draftStore.removeTerm(terms.id)"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </li>
              </ol>
              <a
                class="d-inline-flex align-items-center"
                href="javascript:void(0);"
                @click.prevent="draftStore.addTerm()"
              >
                <i class="ri-add-box-line me-1"></i> 添加新条款行
              </a>
            </div>
            <div class="separator separator-light"></div>
            <div class="btn btn-light btn-file mb-4">
              上传附件
              <input type="file" class="upload" @change="onAttachment" />
            </div>
            <div v-if="attachments.length" class="mb-2">
              <span v-for="at in attachments" :key="at" class="badge badge-soft-secondary me-2">{{ at }}</span>
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
                      <small class="text-muted">{{ draftStore.draft.memo.length }}/1400</small>
                    </div>
                    <textarea
                      class="form-control"
                      rows="6"
                      placeholder="撰写内部备注"
                      v-model="draftStore.draft.memo"
                    ></textarea>
                    <button class="btn btn-outline-light mt-2" type="button" @click="memoDone">添加备注</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </simplebar>
    </div>
    <SettingPannel @toggle-setting-pannel="toggleSettingPannel" />
  </div>
</template>

<script>
import HkDropZone from "@/hk-components/@hk-dropzone/HkDropzone.vue";
import InvoiceHeader from "./InvoiceHeader.vue";
import HkInlineEdit from "@/hk-components/@hk-inline-editor/HkInlineEdit.vue";
import SettingPannel from "./SettingPannel.vue";
import { useInvoiceDraftStore, formatDate, currencySymbol } from "@/stores/invoiceDraftStore";
import { useInvoiceStore } from "@/stores/invoiceStore";
import Swal from "sweetalert2";

export default {
  name: "CreateInvoice",
  components: {
    InvoiceHeader,
    HkDropZone,
    HkInlineEdit,
    SettingPannel,
  },
  props: {
    showSidebar: Boolean,
  },
  setup() {
    const draftStore = useInvoiceDraftStore();
    const invoiceStore = useInvoiceStore();
    return { draftStore, invoiceStore };
  },
  data() {
    return {
      saving: false,
      dueOption: "immediate",
      extraDiscount: { value: 0, type: "cur" },
      tagInput: "",
      signature: "",
      attachments: [],
    };
  },
  computed: {
    subtotal() {
      return this.draftStore.subtotal;
    },
    itemDiscount() {
      return this.draftStore.itemDiscountTotal;
    },
    extraDiscountAmount() {
      return this.draftStore.extraDiscountAmount;
    },
    grandTotal() {
      return this.draftStore.grandTotal;
    },
  },
  created() {
    this.setupFromRoute();
    // 同步本地额外折扣状态到草稿 store（可持久化）
    this.extraDiscount = { ...this.draftStore.draft.extraDiscount };
  },
  watch: {
    "$route.query.edit"() {
      this.setupFromRoute();
    },
    "$route.query.kind"() {
      this.setupFromRoute();
    },
    extraDiscount: {
      deep: true,
      handler(v) {
        this.draftStore.patch({ extraDiscount: { ...v } });
      },
    },
  },
  methods: {
    fmtMoney(v) {
      return currencySymbol(this.draftStore.draft.settings.currency) + (Number(v) || 0).toFixed(2);
    },
    setupFromRoute() {
      this.attachments = [];
      this.signature = "";
      this.dueOption = "immediate";
      const editId = this.$route.query.edit;
      const kind = this.$route.query.kind;
      const tmpl = this.$route.query.template;
      if (editId) {
        this.loadInvoice(editId);
        return;
      }
      // 新建模式：重置草稿为默认模板内容，避免沿用上一份发票数据
      this.draftStore.reset();
      this.draftStore.draft.dueDate = "签收即付";
      this.extraDiscount = { value: 0, type: "cur" };
      if (tmpl) {
        this.draftStore.patch({ template: decodeURIComponent(tmpl) });
      }
      if (kind === "estimate") {
        this.draftStore.setKind("estimate");
      }
    },
    async loadInvoice(id) {
      try {
        const inv = await this.invoiceStore.fetchInvoice(id);
        const items = await this.invoiceStore.fetchItems(id);
        this.draftStore.patch({
          id: inv.id,
          invoiceNumber: inv.invoiceNumber || "",
          issueDate: inv.issueDate ? inv.issueDate.slice(0, 10) : formatDate(new Date()),
          dueDate: inv.dueDate ? inv.dueDate.slice(0, 10) : "签收即付",
          clientCode: inv.clientCode || "",
          client: {
            company: inv.clientName || "",
            email: inv.clientEmail || "",
            address1: (inv.clientAddress || "").split(", ")[0] || "",
            address2: (inv.clientAddress || "").split(", ").slice(1).join(", ") || "",
          },
          status: inv.status || "DRAFT",
          kind: inv.kind === "ESTIMATE" ? "estimate" : "invoice",
          template: inv.template || "标准",
          notes: inv.notes || "",
          memo: inv.memo || "",
          tags: this.parseTags(inv.tags),
          terms: (inv.terms || "").split("\n").filter(Boolean).map((conditon, i) => ({ id: "t" + Date.now() + i, conditon })),
          settings: {
            ...this.draftStore.draft.settings,
            currency: inv.currency || "CNY",
            symbol: currencySymbol(inv.currency || "CNY"),
          },
          items: items.length
            ? items.map((it) => ({
                id: it.id,
                title: it.title || "",
                description: it.description || "",
                quantity: it.quantity ?? 1,
                price: Number(it.unitPrice || 0),
                discount: Number(it.discount || 0),
                discountType: it.discountType === "cur" ? "cur" : "per",
                totalPrice: Number(it.amount || 0),
              }))
            : this.draftStore.draft.items,
        });
        this.dueOption = inv.dueDate ? "15" : "immediate";
        this.extraDiscount = { value: Number(inv.discount || 0), type: "cur" };
      } catch (e) {
        Swal.fire({ icon: "error", title: "加载失败", text: e.response?.data?.message || e.message });
      }
    },
    parseTags(tags) {
      if (!tags) return [];
      try {
        const arr = typeof tags === "string" ? JSON.parse(tags) : tags;
        return Array.isArray(arr) ? arr : [];
      } catch (e) {
        return [];
      }
    },
    onItemInput(index, field, e) {
      const item = this.draftStore.draft.items[index];
      if (!item) return;
      let val = e.target.value;
      if (field === "quantity" || field === "price" || field === "discount") {
        val = Number(val) || 0;
      }
      item[field] = val;
      this.draftStore.recalcItem(index);
      this.draftStore.persist();
    },
    onCurrencyChange(e) {
      this.draftStore.setSettings({ currency: e.target.value, symbol: currencySymbol(e.target.value) });
    },
    onSignature(e) {
      const f = e.target.files && e.target.files[0];
      if (f) {
        this.signature = f.name;
        this.draftStore.patch({ signature: f.name });
        Swal.fire({ icon: "success", title: "签名已上传", timer: 1200, showConfirmButton: false });
      }
    },
    onAttachment(e) {
      const files = Array.from(e.target.files || []).map((f) => f.name);
      if (files.length) {
        this.attachments = this.attachments.concat(files);
        Swal.fire({ icon: "success", title: `已上传 ${files.length} 个附件`, timer: 1200, showConfirmButton: false });
      }
      e.target.value = "";
    },
    onDueChange() {
      if (this.dueOption === "immediate") {
        this.draftStore.draft.dueDate = "签收即付";
      } else {
        const d = new Date();
        d.setDate(d.getDate() + Number(this.dueOption));
        this.draftStore.draft.dueDate = formatDate(d);
      }
      this.draftStore.persist();
    },
    notesDone() {
      this.draftStore.persist();
      Swal.fire({ icon: "success", title: "备注已保存", timer: 1200, showConfirmButton: false });
    },
    memoDone() {
      this.draftStore.persist();
      Swal.fire({ icon: "success", title: "备忘已保存", timer: 1200, showConfirmButton: false });
    },
    applyTemplate(name) {
      this.draftStore.patch({ template: name });
    },
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
    toggleSettingPannel() {
      this.$emit("toggle-setting-pannel");
    },
    buildPayload() {
      const d = this.draftStore.draft;
      return {
        invoiceNumber: d.invoiceNumber,
        clientName: d.client.company,
        clientEmail: d.client.email,
        clientCode: d.clientCode,
        clientAddress: [d.client.address1, d.client.address2].filter(Boolean).join(", "),
        currency: d.settings.currency,
        dueDate: d.dueDate && d.dueDate !== "签收即付" ? d.dueDate : null,
        issueDate: d.issueDate || null,
        notes: d.notes,
        memo: d.memo,
        tags: JSON.stringify(d.tags || []),
        terms: (d.terms || []).map((t) => t.conditon).filter(Boolean).join("\n"),
        template: d.template,
        kind: d.kind === "estimate" ? "ESTIMATE" : "INVOICE",
        status: d.status || "DRAFT",
        items: d.items
          .filter((it) => it.title || it.description)
          .map((it) => ({
            title: it.title,
            description: it.description,
            quantity: Number(it.quantity) || 0,
            unitPrice: Number(it.price) || 0,
            discount: Number(it.discount) || 0,
            discountType: it.discountType === "cur" ? "cur" : "per",
          })),
      };
    },
    async doSave() {
      if (this.saving) return;
      this.saving = true;
      try {
        const d = this.draftStore.draft;
        const inv = await this.invoiceStore.saveInvoice({
          ...d,
          subtotal: this.subtotal,
          discount: this.extraDiscountAmount,
          tax: 0,
        });
        // 编辑后回填 id，避免再次保存时重复创建
        this.draftStore.patch({ id: inv.id, status: inv.status || d.status });
        Swal.fire({
          icon: "success",
          title: d.kind === "estimate" ? "估算单已保存" : "发票已保存",
          text: `编号 ${inv.invoiceNumber}`,
          confirmButtonText: "查看列表",
          showCancelButton: true,
          cancelButtonText: "继续编辑",
        }).then((r) => {
          if (r.isConfirmed) this.$router.push("/apps/invoice/invoice-list");
        });
      } catch (e) {
        Swal.fire({ icon: "error", title: "保存失败", text: e.response?.data?.message || e.message });
      } finally {
        this.saving = false;
      }
    },
    doPreview() {
      this.draftStore.persist();
      this.$router.push("/apps/invoice/invoice-preview");
    },
  },
};
</script>
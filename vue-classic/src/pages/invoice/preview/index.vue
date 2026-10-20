<template>
  <div class="invoiceapp-detail-wrap">
    <PreviewHeader :showSidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
    <div class="invoice-body">
      <simplebar class="nicescroll-bar">
        <div class="container">
          <div class="template-invoice-wrap mt-xxl-5 p-md-5 p-3">
            <div class="row">
              <div class="col-lg-3 col-md-5 order-md-0 order-1">
                <img src="@/assets/img/logo-light.png" alt="logo" />
              </div>
              <div class="col-lg-4 offset-lg-5 offset-md-3 col-md-4 mb-md-0 mb-2">
                <h2 class="d-flex justify-content-md-end mb-0">{{ draftStore.title }}</h2>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-md-4 order-md-0 order-1">
                <div class="address-wrap">
                  <h6>{{ draftStore.draft.merchant.company }}</h6>
                  <p>{{ draftStore.draft.merchant.address1 }}</p>
                  <p>{{ draftStore.draft.merchant.address2 }}</p>
                  <p>{{ draftStore.draft.merchant.email }}</p>
                </div>
              </div>
              <div class="col-md-5 offset-md-3 mb-4 mb-md-0">
                <div class="d-flex justify-content-md-end">
                  <div class="text-md-end me-3">
                    <div class="mb-1">发票编号*</div>
                    <div class="mb-1">开票日期*</div>
                    <div class="mb-1">到期日*</div>
                    <div>客户编号</div>
                  </div>
                  <div class="text-dark text-end">
                    <div class="mb-1">{{ draftStore.draft.invoiceNumber }}</div>
                    <div class="mb-1">{{ fmtDate(draftStore.draft.issueDate) }}</div>
                    <div class="mb-1">{{ draftStore.draft.dueDate }}</div>
                    <div>{{ draftStore.draft.clientCode || "-" }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="separator separator-light"></div>
            <div class="row">
              <div class="col-md-3">
                <h6 class="text-uppercase fs-7 mb-2">开票对象</h6>
                <div class="Billto-wrap">
                  <h6>{{ draftStore.draft.client.company }}</h6>
                  <p>{{ draftStore.draft.client.address1 }}</p>
                  <p>{{ draftStore.draft.client.address2 }}</p>
                  <p>{{ draftStore.draft.client.email }}</p>
                </div>
              </div>
            </div>
            <div class="table-wrap mt-6">
              <div class="table-responsive">
                <table class="table table-bordered">
                  <thead class="thead-primary">
                    <tr>
                      <th>项目</th>
                      <th class="text-end">数量</th>
                      <th class="text-end">单价</th>
                      <th class="text-end">折扣</th>
                      <th class="text-end">金额</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in draftStore.draft.items" :key="item.id">
                      <td class="w-70">
                        <h6>{{ item.title }}</h6>
                        <p v-if="item.description">{{ item.description }}</p>
                      </td>
                      <td class="text-end text-dark">{{ item.quantity }}</td>
                      <td class="w-15 text-end text-dark">{{ fmtMoney(item.price) }}</td>
                      <td class="text-end text-dark">
                        {{ item.discountType === "cur" ? fmtMoney(item.discount) : (item.discount || 0) + "%" }}
                      </td>
                      <td class="w-20 text-end text-dark">{{ fmtMoney(item.totalPrice) }}</td>
                    </tr>
                    <tr>
                      <td colspan="2" rowspan="4" class="border-0"></td>
                      <td colspan="2">小计</td>
                      <td class="text-end text-dark">{{ fmtMoney(subtotal) }}</td>
                    </tr>
                    <tr>
                      <td colspan="2">项目折扣</td>
                      <td class="text-end text-dark">{{ fmtMoney(itemDiscount) }}</td>
                    </tr>
                    <tr>
                      <td colspan="2">额外折扣</td>
                      <td class="text-end text-dark">{{ fmtMoney(extraDiscountAmount) }}</td>
                    </tr>
                    <tr class="border-0">
                      <td colspan="2" class="text-dark border">总计</td>
                      <td class="text-end text-dark border">{{ fmtMoney(grandTotal) }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-lg-5">
                <h6>给客户的备注</h6>
                <p>{{ draftStore.draft.notes || "无备注" }}</p>
              </div>
              <div class="col-lg-7 text-lg-end mt-lg-0 mt-3">
                <h5 v-for="tag in draftStore.draft.tags" :key="tag" class="mt-lg-7">{{ tag }}</h5>
                <p>签名：{{ draftStore.draft.signature || "未设置" }}</p>
              </div>
            </div>
            <div class="separator separator-light mt-7"></div>
            <div class="row">
              <div class="col-md-12">
                <h6>条款与条件</h6>
                <ol class="ps-3">
                  <li v-for="(terms, i) in draftStore.draft.terms" :key="i">
                    {{ terms.conditon }}
                  </li>
                </ol>
              </div>
            </div>
            <div class="d-flex gap-2 mt-4">
              <button class="btn btn-primary d-md-none d-inline-block" @click="printNow">打印 / 导出 PDF</button>
            </div>
          </div>
        </div>
      </simplebar>
    </div>
  </div>
</template>

<script>
import PreviewHeader from "./PreviewHeader.vue";
import { useInvoiceDraftStore, currencySymbol } from "@/stores/invoiceDraftStore";

export default {
  name: "InvoicePreview",
  components: {
    PreviewHeader,
  },
  props: {
    showSidebar: Boolean,
  },
  setup() {
    const draftStore = useInvoiceDraftStore();
    return { draftStore };
  },
  computed: {
    symbol() {
      return currencySymbol(this.draftStore.draft.settings.currency);
    },
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
  methods: {
    fmtMoney(v) {
      return this.symbol + (Number(v) || 0).toFixed(2);
    },
    fmtDate(v) {
      if (!v) return "-";
      const d = new Date(v);
      if (isNaN(d.getTime())) return v;
      return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
    },
    printNow() {
      window.print();
    },
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
  },
};
</script>
<template>
  <div class="invoice-body">
    <simplebar class="nicescroll-bar">
      <div class="container">
        <div class="template-invoice-wrap mt-xxl-5 p-md-5 p-3">
          <div class="row">
            <div class="col-lg-3 col-md-5 order-md-0 order-1">
              <img src="@/assets/img/logo-light.png" alt="logo" />
            </div>
            <div class="col-lg-4 offset-lg-5 offset-md-3 col-md-4 mb-md-0 mb-2">
              <h2 class="d-flex justify-content-md-end mb-0">发票</h2>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-4 order-md-0 order-1">
              <div class="address-wrap">
                <h6>caoba</h6>
                <p>4747, Pearl Street</p>
                <p>Rainy day Drive</p>
                <p>Washington DC 42341</p>
                <p>caoba_01@caoba.com</p>
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
                <div class="text-dark">
                  <div class="mb-1">0001</div>
                  <div class="mb-1">24/08/2020</div>
                  <div class="mb-1">签收即付</div>
                  <div>321456</div>
                </div>
              </div>
            </div>
          </div>
          <div class="separator separator-light"></div>
          <div class="row">
            <div class="col-md-3">
              <h6 class="text-uppercase fs-7 mb-2">开票对象</h6>
              <div class="Billto-wrap">
                <h6>Supernova consultant</h6>
                <p>4747, Pearl Street</p>
                <p>Rainy day Drive</p>
                <p>Washington DC 42341</p>
                <p>caoba_01@caoba.com</p>
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
                  <tr>
                    <td class="w-70">
                      <h6>重新设计 agencyclick.com</h6>
                      <p>
                        这是我的项目描述。如果行内放不下一整句话，文字区域会自动增大以便完整显示。
                      </p>
                    </td>
                    <td class="text-end text-dark">8</td>
                    <td class="w-15 text-end text-dark">60.00</td>
                    <td class="text-end text-dark">5%</td>
                    <td class="w-20 text-end text-dark">¥420.5</td>
                  </tr>
                  <tr>
                    <td class="w-70">
                      <h6>品牌重塑</h6>
                    </td>
                    <td class="text-end text-dark">1</td>
                    <td class="w-15 text-end text-dark">150.00</td>
                    <td class="text-end text-dark">0%</td>
                    <td class="w-20 text-end text-dark">¥140.5</td>
                  </tr>
                  <tr>
                    <td class="w-70">
                      <h6>社交媒体营销</h6>
                    </td>
                    <td class="text-end text-dark">20</td>
                    <td class="w-15 text-end text-dark">30.00</td>
                    <td class="text-end text-dark">5%</td>
                    <td class="w-20 text-end text-dark">¥540.5</td>
                  </tr>
                  <tr>
                    <td colspan="2" rowspan="4" class="border-0"></td>
                    <td colspan="2">小计</td>
                    <td class="text-end text-dark">¥1101.0</td>
                  </tr>
                  <tr>
                    <td colspan="2">项目折扣</td>
                    <td class="text-end text-dark">¥10.0</td>
                  </tr>
                  <tr>
                    <td colspan="2">额外折扣</td>
                    <td class="text-end text-dark">¥0</td>
                  </tr>
                  <tr class="border-0">
                    <td colspan="2" class="text-dark border">总计</td>
                    <td class="text-end text-dark border">¥1101.0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-lg-5">
              <h6>给客户的备注</h6>
              <p>
                感谢您选择 caoba 提供设计服务。如果您今后还需要其他帮助，这里有一张可用于后续项目的优惠券。只需致电我们并提及优惠券代码："10-springhnc"。
              </p>
            </div>
            <div class="col-lg-7 text-lg-end mt-lg-0 mt-3">
              <h5 class="mt-lg-7">凯瑟琳·泽塔·琼斯</h5>
              <p>caoba 联合创始人</p>
            </div>
          </div>
          <div class="separator separator-light mt-7"></div>
          <div class="row">
            <div class="col-md-12">
              <h6>条款与条件</h6>
              <ol class="ps-3">
                <li>
                  请在发票开具之日起 15 天内付款，逾期未付将按 14% 的年利率收取逾期利息。
                </li>
                <li>汇款时请注明发票编号。</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </simplebar>
  </div>
</template>

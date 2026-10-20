<template>
  <div class="invoice-body">
    <simplebar class="nicescroll-bar">
      <BContainer>
        <div class="my-md-7 my-3">
          <h3 class="mb-4">选择你的起始模板</h3>
          <BForm @submit.prevent>
            <BRow>
              <BCol md="4" class="mb-md-0 mb-3">
                <BFormInput type="text" placeholder="搜索模板" />
              </BCol>
              <BCol md="4" class="mb-md-0 mb-3">
                <BFormSelect model-value="1">
                  <BFormSelectOption value="1">热门</BFormSelectOption>
                  <BFormSelectOption value="2">经典</BFormSelectOption>
                  <BFormSelectOption value="3">流行</BFormSelectOption>
                  <BFormSelectOption value="4">简约</BFormSelectOption>
                </BFormSelect>
              </BCol>
              <BCol md="4">
                <BFormSelect model-value="1">
                  <BFormSelectOption value="1">全部分类</BFormSelectOption>
                  <BFormSelectOption value="2">商务</BFormSelectOption>
                  <BFormSelectOption value="3">工作室</BFormSelectOption>
                  <BFormSelectOption value="4">个人</BFormSelectOption>
                </BFormSelect>
              </BCol>
            </BRow>
          </BForm>
          <h5 class="mt-7 mb-3">高级模板</h5>
          <BRow class="text-center">
            <BCol xl="2" sm="4" tag="a" href="#" class="d-block mb-5">
              <BCard no-body class="card-border">
                <img
                  class="card-img"
                  src="@/assets/img/templates/template1.png"
                  alt="卡片图片"
                />
              </BCard>
              <h6 class="mb-0">标准</h6>
            </BCol>
            <BCol xl="2" sm="4" tag="a" href="#" class="d-block mb-5">
              <BCard no-body class="card-border">
                <img
                  class="card-img"
                  src="@/assets/img/templates/template2.png"
                  alt="卡片图片"
                />
              </BCard>
              <h6 class="mb-0">简约</h6>
            </BCol>
            <BCol xl="2" sm="4" tag="a" href="#" class="d-block mb-5">
              <BCard no-body class="card-border">
                <img
                  class="card-img"
                  src="@/assets/img/templates/template3.png"
                  alt="卡片图片"
                />
              </BCard>
              <h6 class="mb-0">基础</h6>
            </BCol>
            <BCol xl="2" sm="4" tag="a" href="#" class="d-block mb-5">
              <BCard no-body class="card-border">
                <img
                  class="card-img"
                  src="@/assets/img/templates/template4.png"
                  alt="卡片图片"
                />
              </BCard>
              <h6 class="mb-0">经典</h6>
            </BCol>
          </BRow>
          <h5 class="mt-7 mb-3">商务</h5>
          <div class="row text-center">
            <BCol xl="2" sm="4" tag="a" href="#" class="d-block mb-5">
              <BCard no-body class="card-border">
                <img
                  class="card-img"
                  src="@/assets/img/templates/template5.png"
                  alt="卡片图片"
                />
              </BCard>
              <h6 class="mb-0">形式发票</h6>
            </BCol>
            <BCol xl="2" sm="4" tag="a" href="#" class="d-block mb-5">
              <BCard no-body class="card-border">
                <img
                  class="card-img"
                  src="@/assets/img/templates/template6.png"
                  alt="卡片图片"
                />
              </BCard>
              <h6 class="mb-0">贸易</h6>
            </BCol>
            <BCol xl="2" sm="4" tag="a" href="#" class="d-block mb-5">
              <BCard no-body class="card-border">
                <img
                  class="card-img"
                  src="@/assets/img/templates/template7.png"
                  alt="卡片图片"
                />
              </BCard>
              <h6 class="mb-0">临时</h6>
            </BCol>
            <BCol xl="2" sm="4" tag="a" href="#" class="d-block mb-5">
              <BCard no-body class="card-border">
                <img
                  class="card-img"
                  src="@/assets/img/templates/template8.png"
                  alt="卡片图片"
                />
              </BCard>
              <h6 class="mb-0">主要</h6>
            </BCol>
            <BCol xl="2" sm="4" tag="a" href="#" class="d-block mb-5">
              <BCard no-body class="card-border">
                <img
                  class="card-img"
                  src="@/assets/img/templates/template1.png"
                  alt="卡片图片"
                />
              </BCard>
              <h6 class="mb-0">马特·奥佩尔</h6>
            </BCol>
            <BCol xl="2" sm="4" tag="a" href="#" class="d-block mb-5">
              <BCard no-body class="card-border">
                <img
                  class="card-img"
                  src="@/assets/img/templates/template2.png"
                  alt="卡片图片"
                />
              </BCard>
              <h6 class="mb-0">自由职业者</h6>
            </BCol>
            <BCol xl="2" sm="4" tag="a" href="#" class="d-block mb-5">
              <BCard no-body class="card-border">
                <img
                  class="card-img"
                  src="@/assets/img/templates/template3.png"
                  alt="卡片图片"
                />
              </BCard>
              <h6 class="mb-0">设计师</h6>
            </BCol>
            <BCol xl="2" sm="4" tag="a" href="#" class="d-block mb-5">
              <BCard no-body class="card-border">
                <img
                  class="card-img"
                  src="@/assets/img/templates/template4.png"
                  alt="卡片图片"
                />
              </BCard>
              <h6 class="mb-0">服务</h6>
            </BCol>
            <BCol xl="2" sm="4" tag="a" href="#" class="d-block mb-5">
              <BCard no-body class="card-border">
                <img
                  class="card-img"
                  src="@/assets/img/templates/template5.png"
                  alt="卡片图片"
                />
              </BCard>
              <h6 class="mb-0">服务</h6>
            </BCol>
            <BCol xl="2" sm="4" tag="a" href="#" class="d-block mb-5">
              <BCard no-body class="card-border">
                <img
                  class="card-img"
                  src="@/assets/img/templates/template6.png"
                  alt="卡片图片"
                />
              </BCard>
              <h6 class="mb-0">服务</h6>
            </BCol>
            <BCol xl="2" sm="4" tag="a" href="#" class="d-block mb-5">
              <BCard no-body class="card-border">
                <img
                  class="card-img"
                  src="@/assets/img/templates/template7.png"
                  alt="卡片图片"
                />
              </BCard>
              <h6 class="mb-0">服务</h6>
            </BCol>
            <BCol xl="2" sm="4" tag="a" href="#" class="d-block mb-5">
              <BCard no-body class="card-border">
                <img
                  class="card-img"
                  src="@/assets/img/templates/template8.png"
                  alt="卡片图片"
                />
              </BCard>
              <h6 class="mb-0">服务</h6>
            </BCol>
          </div>
        </div>
      </BContainer>
    </simplebar>
  </div>
</template>

<script setup></script>

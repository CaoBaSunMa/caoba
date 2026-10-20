<template>
  <BModal ref="createNewContact" id="add_new_contact" size="lg" hide-header centered>
    <BCloseButton @click="closeModal">
      <span aria-hidden="true">×</span>
    </BCloseButton>
    <h5 class="mb-5">新建联系人</h5>
    <BForm @submit.prevent>
      <BRow gutter-x="3">
        <BCol sm="2">
          <BFormGroup class="mb-3">
            <HkDropzone class="dropify-square"> 上传照片 </HkDropzone>
          </BFormGroup>
        </BCol>
        <BCol sm="10">
          <BFormGroup class="mb-3">
            <BFormTextarea class="mnh-100p" placeholder="添加个人简介" rows="4" />
          </BFormGroup>
        </BCol>
      </BRow>
      <div class="title title-xs title-wth-divider text-primary text-uppercase my-4">
        <span>基本信息</span>
      </div>
      <BRow gutter-x="3">
        <BCol sm="4">
          <BFormGroup label="名" label-for="first-name" class="mb-3">
            <BFormInput id="first-name" type="text" />
          </BFormGroup>
        </BCol>
        <BCol sm="4">
          <BFormGroup label="中间名" label-for="middle-name" class="mb-3">
            <BFormInput id="middle-name" type="text" />
          </BFormGroup>
        </BCol>
        <BCol sm="4">
          <BFormGroup label="姓" label-for="last-name" class="mb-3">
            <BFormInput id="last-name" type="text" />
          </BFormGroup>
        </BCol>
      </BRow>
      <BRow gutter-x="3">
        <BCol sm="6">
          <BFormGroup label="邮箱 ID" label-for="email" class="mb-3">
            <BFormInput id="email" type="email" />
          </BFormGroup>
        </BCol>
        <BCol sm="6">
          <BFormGroup label="电话" label-for="phone" class="mb-3">
            <BFormInput id="phone" type="tel" />
          </BFormGroup>
        </BCol>
      </BRow>
      <BRow gutter-x="3">
        <BCol sm="4">
          <BFormGroup label="城市" label-for="city" class="mb-3">
            <BFormSelect id="city" model-value="selected">
              <BFormSelectOption value="selected">--</BFormSelectOption>
              <BFormSelectOption value="1">一</BFormSelectOption>
              <BFormSelectOption value="2">二</BFormSelectOption>
              <BFormSelectOption value="3">三</BFormSelectOption>
            </BFormSelect>
          </BFormGroup>
        </BCol>
        <BCol sm="4">
          <BFormGroup label="州/省" label-for="state" class="mb-3">
            <BFormSelect id="state" model-value="selected">
              <BFormSelectOption value="selected">--</BFormSelectOption>
              <BFormSelectOption value="1">一</BFormSelectOption>
              <BFormSelectOption value="2">二</BFormSelectOption>
              <BFormSelectOption value="3">三</BFormSelectOption>
            </BFormSelect>
          </BFormGroup>
        </BCol>
        <BCol sm="4">
          <BFormGroup label="国家" label-for="country" class="mb-3">
            <BFormSelect id="country" model-value="selected">
              <BFormSelectOption value="selected">--</BFormSelectOption>
              <BFormSelectOption value="1">一</BFormSelectOption>
              <BFormSelectOption value="2">二</BFormSelectOption>
              <BFormSelectOption value="3">三</BFormSelectOption>
            </BFormSelect>
          </BFormGroup>
        </BCol>
      </BRow>
      <div class="title title-xs title-wth-divider text-primary text-uppercase my-4">
        <span>公司信息</span>
      </div>
      <BRow gutter-x="3">
        <BCol sm="6">
          <BFormGroup label="公司名称" label-for="company-name" class="mb-3">
            <BFormInput id="company-name" type="text" />
          </BFormGroup>
        </BCol>
        <BCol sm="6">
          <BFormGroup label="职位" label-for="desig" class="mb-3">
            <BFormInput id="desig" type="text" />
          </BFormGroup>
        </BCol>
        <BCol sm="6">
          <BFormGroup label="网站" label-for="website" class="mb-3">
            <BFormInput id="website" type="text" />
          </BFormGroup>
        </BCol>
        <BCol sm="6">
          <BFormGroup label="工作电话" label-for="work-phone" class="mb-3">
            <BFormInput id="work-phone" type="text" />
          </BFormGroup>
        </BCol>
      </BRow>
      <div class="title title-xs title-wth-divider text-primary text-uppercase my-4">
        <span>补充信息</span>
      </div>
      <BRow gutter-x="3">
        <BCol sm="12">
          <BFormGroup label="标签" label-for="tags" class="mb-3">
            <hk-tag :option="tags" />
            <small class="form-text text-muted">
              每个联系人最多可添加 4 个标签
            </small>
          </BFormGroup>
        </BCol>
      </BRow>
      <BRow gutter-x="3">
        <BCol sm="6">
          <BFormGroup class="mb-3">
            <BFormInput type="text" placeholder="Facebook" />
          </BFormGroup>
        </BCol>
        <BCol sm="6">
          <BFormGroup class="mb-3">
            <BFormInput type="text" placeholder="Twitter" />
          </BFormGroup>
        </BCol>
        <BCol sm="6">
          <BFormGroup class="mb-3">
            <BFormInput type="text" placeholder="LinkedIn" />
          </BFormGroup>
        </BCol>
        <BCol sm="6">
          <BFormGroup class="mb-3">
            <BFormInput type="text" placeholder="Gmail" />
          </BFormGroup>
        </BCol>
      </BRow>
    </BForm>

    <template #footer>
      <BButton variant="secondary" @click="closeModal"> 放弃 </BButton>
      <BButton variant="primary" @click="closeModal">新建联系人</BButton>
    </template>
  </BModal>
</template>

<script setup>
const tags = ref([]);
// Modal reference
const createNewContact = ref(null);

// Function to close the modal
const closeModal = () => {
  createNewContact.value.hide(); // Close the modal programmatically
};
</script>

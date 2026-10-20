<template>
  <div class="profile-intro">
    <BCard no-body class="card-flush mw-400p bg-transparent">
      <BCardBody>
        <div class="avatar avatar-xxl avatar-rounded position-relative mb-2">
          <img
            src="@/assets/img/avatar3.jpg"
            alt="user"
            class="avatar-img border border-4 border-white"
          />
          
          <HkBadge
            variant="success"
            indicator
            indicatorSize="xl"
            class="position-bottom-end-overflow-1 me-1"
          />
        </div>
        <h4>
          凯特·琼斯
          <i
            class="bi-check-circle-fill fs-6 text-blue"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="高赞专家"
          ></i>
        </h4>
        <p>用设计与技术，把好点子变成好产品。</p>
        <ul class="list-inline fs-7 mt-2 mb-0">
          <li class="list-inline-item d-sm-inline-block d-block mb-sm-0 mb-1 me-3">
            <i class="bi bi-briefcase me-1"></i>
            <a href="#">联合创始人，</a>
            <a href="#">caoba</a>
          </li>

          <li class="list-inline-item d-sm-inline-block d-block mb-sm-0 mb-1 me-3">
            <i class="bi bi-geo-alt me-1"></i>
            <a href="#">旧金山，</a>
            <a href="#">美国</a>
          </li>
        </ul>
      </BCardBody>
    </BCard>
  </div>
</template>



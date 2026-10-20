<template>
  <nav class="calendarapp-sidebar">
    <simplebar class="nicescroll-bar">
      <div class="menu-content-wrap">
        <BDropdown variant="primary" toggle-class="btn-rounded btn-block" text="创建">
          <BDropdownItem href="#" v-b-modal.create_new_event>
            <span class="feather-icon dropdown-icon">
              <feather-icon name="calendar"></feather-icon>
            </span>
            <span>新建日程</span>
          </BDropdownItem>
          <BDropdownItem href="#" v-b-modal.set_new_reminder>
            <span class="feather-icon dropdown-icon">
              <feather-icon name="bell"></feather-icon>
            </span>
            <span>设置提醒</span>
          </BDropdownItem>
        </BDropdown>
        <div class="text-center mt-4">
          <div id="inline_calendar" class="d-inline-block">
            <date-range-picker
              :single-date-picker="true"
              :show-dropdowns="false"
              :date-range="dateRange"
              :ranges="false"
              :auto-apply="true"
              opens="inline"
              control-container-class="invisible position-absolute"
            />
          </div>
        </div>
        <div class="separator separator-light"></div>
        <div class="title-sm text-primary">近期日程</div>
        <div class="upcoming-event-wrap">
          <BNav class="nav-light navbar-nav flex-column">
            <BNavItem href="#">
              <div class="d-flex align-items-center">
                <HkBadge
                  variant="violet"
                  size="lg"
                  indicator
                  indicatorSize="lg"
                  class="me-2"
                />
                <span class="event-time">今天，17:00 起</span>
              </div>
              <div class="event-name">caoba 团队会议</div>
            </BNavItem>
            <BNavItem href="#">
              <div class="d-flex align-items-center">
                <HkBadge
                  variant="primary"
                  size="lg"
                  indicator
                  indicatorSize="lg"
                  class="me-2"
                />
                <span class="event-time">明天，14:35</span>
              </div>
              <div class="event-name">靛蓝航空飞往印尼</div>
            </BNavItem>
            <BNavItem href="#">
              <div class="d-flex align-items-center">
                <HkBadge
                  variant="warning"
                  size="lg"
                  indicator
                  indicatorSize="lg"
                  class="me-2"
                />
                <span class="event-time">7月24日，09:30</span>
              </div>
              <div class="event-name">Awwwards 大会</div>
            </BNavItem>
          </BNav>
        </div>
        <div class="separator separator-light"></div>
        <div class="d-flex align-items-center justify-content-between mb-2">
          <div class="title-sm text-primary mb-0">分类</div>
          <BTooltip show target="add_event">添加分类</BTooltip>
          <BButton
            id="add_event"
            variant="light"
            size="xs"
            href="#"
            class="btn-icon btn-rounded"
            v-b-modal.add_new_cat
          >
            <span class="icon">
              <feather-icon name="plus"></feather-icon>
            </span>
          </BButton>
        </div>
        <div class="categories-wrap">
          <BFormCheckbox
            v-for="(events, index) in upcomingEvents"
            :key="index"
            v-model="selectedEvents"
            :value="events"
          >
            {{ events }}
          </BFormCheckbox>
        </div>
      </div>
    </simplebar>
    <!--Sidebar Fixnav-->
    <div class="calendarapp-fixednav">
      <div class="hk-toolbar">
        <BNav class="nav-light">
          <BNavItem>
            <BButton
              variant="flush-dark"
              class="btn-icon btn-rounded flush-soft-hover"
              v-b-tooltip="'设置'"
              href="#"
            >
              <span class="icon">
                <feather-icon name="settings"></feather-icon>
              </span>
            </BButton>
          </BNavItem>
          <BNavItem>
            <BButton
              variant="flush-dark"
              class="btn-icon btn-rounded flush-soft-hover"
              href="#"
              v-b-tooltip="'归档'"
            >
              <span class="icon">
                <feather-icon name="archive"></feather-icon>
              </span>
            </BButton>
          </BNavItem>
          <BNavItem>
            <BButton
              variant="flush-dark"
              class="btn-icon btn-rounded flush-soft-hover"
              href="#"
              v-b-tooltip="'帮助'"
            >
              <span class="icon">
                <feather-icon name="book"></feather-icon>
              </span>
            </BButton>
          </BNavItem>
        </BNav>
      </div>
    </div>
    <!--/ Sidebar Fixnav-->
  </nav>
</template>

<script setup>
const dateRange = ref({
  startDate: new Date(),
  endDate: new Date(),
});

const upcomingEvents = ["会议", "航班", "生日", "大会"];
const selectedEvents = ref(["会议", "航班", "生日"]);
</script>

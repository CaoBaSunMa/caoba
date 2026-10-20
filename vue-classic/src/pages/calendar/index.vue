<template>
  <div class="hk-pg-body py-0">
    <div :class="['calendarapp-wrap', { 'calendarapp-sidebar-toggle': !showSidebar }]">
      <CalendarSidebar />
      <div class="calendarapp-content">
        <div id="calendar" class="w-100 d-flex flex-column">
          <header class="cd-header">
            <div class="d-flex flex-1 justify-content-start">
              <button class="btn btn-outline-light me-3" @click="goToToday">今天</button>
              <button
                class="btn btn-flush-dark btn-icon btn-rounded flush-soft-hover"
                @click="goToPrev"
              >
                <span class="icon">
                  <FontAwesomeIcon :icon="faChevronLeft" size="sm" />
                </span>
              </button>
              <button
                class="btn btn-flush-dark btn-icon btn-rounded flush-soft-hover"
                @click="goToNext"
              >
                <span class="icon">
                  <FontAwesomeIcon :icon="faChevronRight" size="sm" />
                </span>
              </button>
            </div>
            <div class="d-flex flex-1 justify-content-center">
              <h4 class="mb-0">{{ formattedDate }}</h4>
            </div>
            <div class="cd-options-wrap d-flex flex-1 justify-content-end">
              <div class="btn-group d-none d-md-flex" role="group">
                <button
                  class="btn btn-outline-light"
                  @click="handleView('dayGridMonth')"
                  :class="{ active: currentView === 'dayGridMonth' }"
                >
                  月
                </button>
                <button
                  class="btn btn-outline-light"
                  @click="handleView('timeGridWeek')"
                  :class="{ active: currentView === 'timeGridWeek' }"
                >
                  周
                </button>
                <button
                  class="btn btn-outline-light"
                  @click="handleView('dayGridWeek')"
                  :class="{ active: currentView === 'dayGridWeek' }"
                >
                  日
                </button>
                <button
                  class="btn btn-outline-light"
                  @click="handleView('listWeek')"
                  :class="{ active: currentView === 'listWeek' }"
                >
                  列表
                </button>
              </div>
              <a
                class="btn btn-flush-dark btn-icon btn-rounded flush-soft-hover hk-navbar-togglable"
                @click="toggleTopNav"
              >
                <span class="icon">
                  <span class="feather-icon">
                    <feather-icon
                      name="chevron-down"
                      v-if="layoutStore.$state.topNavCollapse"
                    />
                    <feather-icon name="chevron-up" v-else />
                  </span>
                </span>
              </a>
            </div>
            <div
              :class="['hk-sidebar-togglable', { active: !showSidebar }]"
              @click="toggleSidebar"
            />
          </header>

          <!-- FullCalendar Component -->
          <FullCalendar :options="calendarOptions" ref="calendarRef" />
        </div>
      </div>

      <!-- New Event -->
      <NewEvents :calendarRef="calendarRef" :on-add-event="addEventToApi" />
      <!-- /New Event -->
      <!-- Set Reminder -->
      <ReminderModal />
      <!-- Add Category -->
      <CategoryModal />
    </div>
  </div>

  <!-- Event Drawer -->
  <EventDrawer
    :show="showEventInfo"
    @eventDelete="deleteEvent"
    :eventInfo="eventInfo"
    @close="closeEventInfo"
  />
</template>

<script>
import { computed, ref, onMounted } from "vue";
import { useLayoutStore } from "@/stores/layout";
import { useCalendarStore } from "@/stores/calendarStore";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import "@fullcalendar/core/locales/zh-cn";
import moment from "moment";
//icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
//components
import CalendarSidebar from "./CalendarSidebar.vue";
import NewEvents from "./NewEvents.vue";
import ReminderModal from "./ReminderModal.vue";
import CategoryModal from "./CategoryModal.vue";
import EventDrawer from "./EventDrawer.vue";

export default {
  components: {
    FullCalendar,
    FontAwesomeIcon,
    CalendarSidebar,
    NewEvents,
    ReminderModal,
    CategoryModal,
    EventDrawer,
  },

  setup() {
    const showSidebar = ref(true);
    const calendarRef = ref(null);
    const currentView = ref("dayGridMonth");
    const date = ref(moment());
    const layoutStore = useLayoutStore();
    const calendarStore = useCalendarStore();
    //event info
    const showEventInfo = ref(false);
    const targetedEvent = ref(null);
    const eventInfo = ref(null);

    const formattedDate = computed(() => {
      return date.value.format("YYYY年MM月");
    });

    const goToPrev = () => {
      const calendarApi = calendarRef.value.getApi();
      calendarApi.prev();
    };

    const goToNext = () => {
      const calendarApi = calendarRef.value.getApi();
      calendarApi.next();
    };

    const goToToday = () => {
      const calendarApi = calendarRef.value.getApi();
      calendarApi.today();
    };

    const handleDatesSet = (info) => {
      calendarStore.fetchEvents(info.startStr, info.endStr);
    };

    const handleView = (view) => {
      const calendarApi = calendarRef.value.getApi();
      calendarApi.changeView(view);
      currentView.value = view;
    };

    const toggleTopNav = () => {
      layoutStore.toggleTopNav();
    };

    const toggleSidebar = () => {
      showSidebar.value = !showSidebar.value;
    };

    const handleEventClick = (clickInfo) => {
      showEventInfo.value = true;
      targetedEvent.value = clickInfo.event;
      eventInfo.value = clickInfo.event._def.title;
    };

    const closeEventInfo = () => {
      showEventInfo.value = false;
    };

    const deleteEvent = async () => {
      const evt = targetedEvent.value;
      if (!evt) return;
      const id = evt.id;
      try {
        await calendarStore.deleteEvent(id);
        evt.remove();
      } catch (e) {
        // 保留本地事件；后端删除失败
      }
      closeEventInfo();
    };

    // 由 NewEvents 调用：新增事件走后端 API 并刷新日历
    const addEventToApi = async (data) => {
      await calendarStore.createEvent(data);
      const calendarApi = calendarRef.value.getApi();
      calendarApi.removeAllEvents();
      calendarApi.addEventSource(calendarStore.calendarEvents);
    };

    onMounted(() => {
      calendarStore.fetchEvents();
      calendarStore.fetchReminders();
      // 将后端事件注入日历
      const calendarApi = calendarRef.value && calendarRef.value.getApi();
      if (calendarApi) {
        calendarApi.removeAllEvents();
        calendarApi.addEventSource(calendarStore.calendarEvents);
      }
    });

    return {
      calendarRef,
      currentView,
      formattedDate,
      goToPrev,
      goToNext,
      goToToday,
      handleDatesSet,
      handleView,
      showSidebar,
      toggleSidebar,
      //pinia states
      layoutStore,
      calendarStore,
      toggleTopNav,
      // FullCalendar plugins
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
      interactionPlugin,
      //event click
      handleEventClick,
      eventInfo,
      showEventInfo,
      closeEventInfo,
      deleteEvent,
      addEventToApi,
    };
  },

  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
        themeSystem: "bootstrap",
        headerToolbar: false,
        locale: "zh-cn",
        initialView: "dayGridMonth",
        dateClick: this.handleDatesSet,
        droppable: true,
        editable: true,
        windowResizeDelay: 500,
        height: "100%",
        events: this.calendarStore ? this.calendarStore.calendarEvents : [],
        eventClick: this.handleEventClick,
      },
      faChevronLeft,
      faChevronRight,
    };
  },

  watch: {
    "calendarStore.calendarEvents"(newEvents) {
      const api = this.$refs.calendarRef && this.$refs.calendarRef.getApi();
      if (api) {
        api.removeAllEvents();
        api.addEventSource(newEvents);
      }
    },
  },
};
</script>

<template>
  <div class="hk-pg-body py-0">
    <div :class="['calendarapp-wrap', { 'calendarapp-sidebar-toggle': !showSidebar }]">
      <CalendarSidebar />
      <div class="calendarapp-content">
        <div id="calendar" class="w-100 d-flex flex-column">
          <header class="cd-header">
            <div class="d-flex flex-1 justify-content-start">
              <BButton variant="outline-light" class="me-3" @click="goToToday">
                今天
              </BButton>
              <BButton
                variant="flush-dark"
                class="btn-icon btn-rounded flush-soft-hover"
                @click="goToPrev"
              >
                <span class="icon">
                  <font-awesome-icon icon="fas fa-chevron-left" size="sm" />
                </span>
              </BButton>
              <BButton
                variant="flush-dark"
                class="btn-icon btn-rounded flush-soft-hover"
                @click="goToNext"
              >
                <span class="icon">
                  <font-awesome-icon icon="fas fa-chevron-right" size="sm" />
                </span>
              </BButton>
            </div>
            <div class="d-flex flex-1 justify-content-center">
              <h4 class="mb-0">{{ currentMonth }}</h4>
            </div>
            <div class="cd-options-wrap d-flex flex-1 justify-content-end">
              <BButtonGroup class="d-none d-md-flex">
                <BButton
                  variant="outline-light"
                  :active="currentView === 'dayGridMonth'"
                  @click="handleView('dayGridMonth')"
                >
                  月
                </BButton>
                <BButton
                  variant="outline-light"
                  :active="currentView === 'timeGridWeek'"
                  @click="handleView('timeGridWeek')"
                >
                  周
                </BButton>
                <BButton
                  variant="outline-light"
                  :active="currentView === 'dayGridWeek'"
                  @click="handleView('dayGridWeek')"
                >
                  日
                </BButton>
                <BButton
                  variant="outline-light"
                  :active="currentView === 'listWeek'"
                  @click="handleView('listWeek')"
                >
                  列表
                </BButton>
              </BButtonGroup>
              <BButton
                href="#"
                variant="flush-dark"
                class="btn-icon btn-rounded flush-soft-hover hk-navbar-togglable"
                @click="layoutStore.toggleTopNav()"
              >
                <span class="icon">
                  <feather-icon
                    :name="
                      layoutStore.$state.topNavCollapse ? 'chevron-down' : 'chevron-up'
                    "
                  />
                </span>
              </BButton>
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
      <NewEvents :calendarRef="calendarRef" />
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
import { ref } from "vue";
import { useLayoutStore } from "@/stores/layout";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import "@fullcalendar/core/locales/zh-cn";
import moment from "moment";
//components
import { CalendarEvents } from "@/components/calendar/events";
import CalendarSidebar from "@/components/calendar/CalendarSidebar.vue";
import NewEvents from "@/components/calendar/NewEvents.vue";
import ReminderModal from "@/components/calendar/ReminderModal.vue";
import CategoryModal from "@/components/calendar/CategoryModal.vue";
import EventDrawer from "@/components/calendar/EventDrawer.vue";

export default {
  components: {
    FullCalendar,
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
    const currentMonth = ref(date.value.format("YYYY年MM月"));
    const layoutStore = useLayoutStore();
    //event info
    const showEventInfo = ref(false);
    const targetedEvent = ref(null);
    const eventInfo = ref(null);

    const updateCurrentMonth = () => {
      const calendarApi = calendarRef.value.getApi();
      const currentDate = calendarApi.getDate(); // Get the active date
      currentMonth.value = moment(currentDate).format("YYYY年MM月");
    };

    const goToPrev = () => {
      const calendarApi = calendarRef.value.getApi();
      calendarApi.prev();
      updateCurrentMonth();
    };

    const goToNext = () => {
      const calendarApi = calendarRef.value.getApi();
      calendarApi.next();
      updateCurrentMonth();
    };

    const goToToday = () => {
      const calendarApi = calendarRef.value.getApi();
      calendarApi.today();
    };

    const handleDatesSet = (info) => {
      // You can use this method to fetch new events based on the current view's date range
      console.log("Current view date range:", info.startStr, info.endStr);
    };

    const handleView = (view) => {
      const calendarApi = calendarRef.value.getApi();
      calendarApi.changeView(view);
      currentView.value = view;
      // Additional logic to change the view
    };

    const toggleSidebar = () => {
      showSidebar.value = !showSidebar.value;
    };

    const handleEventClick = (clickInfo) => {
      showEventInfo.value = true;
      targetedEvent.value = clickInfo.event;
      eventInfo.value = clickInfo.event._def.title;
      console.log("Event clicked:", eventInfo.value);
    };

    const closeEventInfo = () => {
      showEventInfo.value = false;
    };

    const deleteEvent = () => {
      // const calendarApi = calendarRef.value.getApi();
      // calendarApi.getEventById(targetedEvent.value.id).remove();
      // closeEventInfo();
      targetedEvent.value.remove();
    };

    return {
      calendarRef,
      currentView,
      currentMonth,
      goToPrev,
      goToNext,
      goToToday,
      handleDatesSet,
      handleView,
      showSidebar,
      toggleSidebar,
      //pinia states
      layoutStore,
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
        events: CalendarEvents,
        eventClick: this.handleEventClick,
      },
    };
  },
};
</script>

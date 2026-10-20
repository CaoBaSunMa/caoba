<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    import { layoutStore } from '$lib/stores/layout.js';
    import FullCalendar from 'svelte-fullcalendar';  // Use the correct wrapper
    import dayGridPlugin from '@fullcalendar/daygrid';
    import timeGridPlugin from '@fullcalendar/timegrid';
    import listPlugin from '@fullcalendar/list';
    import interactionPlugin from '@fullcalendar/interaction';
    import moment from 'moment';
    import { CalendarEvents } from '$lib/components/calendar/events.js';
    import CalendarSidebar from '$lib/components/calendar/CalendarSidebar.svelte';
    import NewEvents from '$lib/components/calendar/NewEvents.svelte';
    import ReminderModal from '$lib/components/calendar/ReminderModal.svelte';
    import CategoryModal from '$lib/components/calendar/CategoryModal.svelte';
    import EventDrawer from '$lib/components/calendar/EventDrawer.svelte';
  
    let showSidebar = true;
    let calendarRef;  // Bind to the FullCalendar component for API access
    let currentView = 'dayGridMonth';
    let date = moment();
    let showEventInfo = false;
    let eventInfo = null;
    let targetedEvent = null;
  
    $: formattedDate = date.format('YYYY年MM月');
  
    function goToPrev() {
      if (calendarRef) {
        const calendarApi = calendarRef.getAPI();  // Note: getAPI() for svelte-fullcalendar
        calendarApi.prev();
      }
    }
  
    function goToNext() {
      if (calendarRef) {
        const calendarApi = calendarRef.getAPI();
        calendarApi.next();
      }
    }
  
    function goToToday() {
      if (calendarRef) {
        const calendarApi = calendarRef.getAPI();
        calendarApi.today();
      }
    }
  
    function handleDatesSet(info) {
      console.log('Current view date range:', info.startStr, info.endStr);
    }
  
    function handleView(view) {
      if (calendarRef) {
        const calendarApi = calendarRef.getAPI();
        calendarApi.changeView(view);
        currentView = view;
      }
    }
  
    function toggleTopNav() {
      layoutStore.toggleTopNav();
    }
  
    function toggleSidebar() {
      showSidebar = !showSidebar;
    }
  
    function handleEventClick(clickInfo) {
      showEventInfo = true;
      targetedEvent = clickInfo.event;
      eventInfo = clickInfo.event.title;  // Adjusted for FullCalendar API
      console.log('Event clicked:', eventInfo);
    }
  
    function closeEventInfo() {
      showEventInfo = false;
    }
  
    function deleteEvent() {
      if (targetedEvent) {
        targetedEvent.remove();
        closeEventInfo();
      }
    }
  
    let calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
      themeSystem: 'bootstrap',
      headerToolbar: false,
      locale: 'zh-cn',
      initialView: 'dayGridMonth',
      dateClick: handleDatesSet,
      eventClick: handleEventClick,
      droppable: true,
      editable: true,
      windowResizeDelay: 500,
      height: '100%',
      events: CalendarEvents
    };

    // Ensure FullCalendar is initialized after mount to avoid SSR issues
  onMount(() => {
    return () => {
      // Cleanup if necessary
    };
  });
  </script>
  
  <div class="hk-pg-body py-0">
    <div class="calendarapp-wrap" class:calendarapp-sidebar-toggle={!showSidebar}>
      <CalendarSidebar />
      <div class="calendarapp-content">
        <div id="calendar" class="w-100 d-flex flex-column">
          <header class="cd-header">
            <div class="d-flex flex-1 justify-content-start">
              <button class="btn btn-outline-light me-3" on:click={goToToday}>今天</button>
              <button class="btn btn-flush-dark btn-icon btn-rounded flush-soft-hover" on:click={goToPrev}>
                <span class="icon">
                  <i class="fas fa-chevron-left fa-sm"></i>
                </span>
              </button>
              <button class="btn btn-flush-dark btn-icon btn-rounded flush-soft-hover" on:click={goToNext}>
                <span class="icon">
                  <i class="fas fa-chevron-right fa-sm"></i>
                </span>
              </button>
            </div>
            <div class="d-flex flex-1 justify-content-center">
              <h4 class="mb-0">{formattedDate}</h4>
            </div>
            <div class="cd-options-wrap d-flex flex-1 justify-content-end">
              <div class="btn-group d-none d-md-flex" role="group">
                <button class="btn btn-outline-light" class:active={currentView === 'dayGridMonth'} on:click={() => handleView('dayGridMonth')}>月</button>
                <button class="btn btn-outline-light" class:active={currentView === 'timeGridWeek'} on:click={() => handleView('timeGridWeek')}>周</button>
                <button class="btn btn-outline-light" class:active={currentView === 'dayGridWeek'} on:click={() => handleView('dayGridWeek')}>日</button>
                <button class="btn btn-outline-light" class:active={currentView === 'listWeek'} on:click={() => handleView('listWeek')}>列表</button>
              </div>
              <a class="btn btn-flush-dark btn-icon btn-rounded flush-soft-hover hk-navbar-togglable" on:click|preventDefault={toggleTopNav}>
                <span class="icon">
                  <span class="feather-icon">
                    {#if $layoutStore.topNavCollapse}
                      <i data-feather="chevron-down"></i>
                    {:else}
                      <i data-feather="chevron-up"></i>
                    {/if}
                  </span>
                </span>
              </a>
            </div>
            <div class="hk-sidebar-togglable" class:active={!showSidebar} on:click={toggleSidebar} />
          </header>
          <FullCalendar bind:this={calendarRef} options={calendarOptions} />
        </div>
      </div>
      <NewEvents {calendarRef} />
      <ReminderModal />
      <CategoryModal />
    </div>
    <EventDrawer show={showEventInfo} {eventInfo} on:eventDelete={deleteEvent} on:close={closeEventInfo} />
  </div>
  
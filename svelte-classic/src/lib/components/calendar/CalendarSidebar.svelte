<script>
// @ts-nocheck

    import InlineCalendar from '$lib/components/calendar/InlineCalendar.svelte';
    import { ArchiveIcon, BellIcon, BookIcon, CalendarIcon, PlusIcon, SettingsIcon } from 'svelte-feather-icons';
    import { DatePicker } from '@svelte-plugins/datepicker';
  import { format } from 'date-fns';

  let startDate = new Date();
  let dateFormat = 'MM/dd/yy';
  let isOpen = true;


  const formatDate = (dateString) => {
    if (isNaN(new Date(dateString))) {
      return '';
    }

    return dateString && format(new Date(dateString), dateFormat) || '';
  };
  let formattedStartDate = formatDate(startDate);

  const onChange = () => {
    startDate = new Date(formattedStartDate);
  };

  $: formattedStartDate = formatDate(startDate);
    
  </script>
  
  <nav class="calendarapp-sidebar">
    <div class="nicescroll-bar">
      <div class="menu-content-wrap">
        <button
          class="btn btn-primary btn-rounded btn-block dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          创建
        </button>
        <div class="dropdown-menu">
          <a
            class="dropdown-item"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#create_new_event"
          >
            <span class="feather-icon dropdown-icon">
              <CalendarIcon />
            </span>
            <span>新建日程</span>
          </a>
          <a
            class="dropdown-item"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#set_new_reminder"
          >
            <span class="feather-icon dropdown-icon">
              <BellIcon />
            </span>
            <span>设置提醒</span>
          </a>
        </div>
        <div class="text-center mt-4">
          <div id="inline_calendar" class="d-inline-block">
            <!-- <InlineCalendar /> -->
            <DatePicker bind:isOpen bind:startDate>
              <input type="text" class="form-control invisible position-absolute" placeholder="选择日期"   />
            </DatePicker>
          </div>
        </div>
        <div class="separator separator-light"></div>
        <div class="title-sm text-primary">近期日程</div>
        <div class="upcoming-event-wrap">
            <ul class="nav nav-light navbar-nav flex-column">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <div class="d-flex align-items-center">
                    <span
                      class="badge badge-violet badge-indicator badge-indicator-lg me-2"
                    ></span>
                    <span class="event-time">今天，17:00 起</span>
                  </div>
                  <div class="event-name">caoba 团队会议</div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <div class="d-flex align-items-center">
                    <span
                      class="badge badge-primary badge-indicator badge-indicator-lg me-2"
                    ></span>
                    <span class="event-time">明天，14:35</span>
                  </div>
                  <div class="event-name">靛蓝航空飞往印尼</div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <div class="d-flex align-items-center">
                    <span
                      class="badge badge-warning badge-indicator badge-indicator-lg me-2"
                    ></span>
                    <span class="event-time">7月24日，09:30</span>
                  </div>
                  <div class="event-name">Awwwards 大会</div>
                </a>
              </li>
            </ul>
          </div>
        <div class="separator separator-light"></div>
        <div class="d-flex align-items-center justify-content-between mb-2">
            <div class="title-sm text-primary mb-0">分类</div>
            <a
              href="#"
              class="btn btn-xs btn-icon btn-rounded btn-light"
              data-bs-toggle="modal"
              data-bs-target="#add_new_cat"
            >
              <span
                class="icon"
            
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="添加分类"
              >
                <span class="feather-icon">
                  <PlusIcon />
                </span>
              </span>
            </a>
          </div>
        <div class="categories-wrap">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="customChecksc1"
              checked
            />
            <label class="form-check-label" for="customChecksc1">会议</label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="customChecksc2"
              checked
            />
            <label class="form-check-label" for="customChecksc2">航班</label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="customChecksc3"
              checked
            />
            <label class="form-check-label" for="customChecksc3">生日</label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="customChecksc4"
            />
            <label class="form-check-label" for="customChecksc4">大会</label>
          </div>
          <!-- Other categories -->
        </div>
      </div>
    </div>
    <div class="calendarapp-fixednav">
      <div class="hk-toolbar">
        <ul class="nav nav-light">
            <li class="nav-item nav-link">
              <a
                class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="设置"
                href="#"
              >
                <span class="icon">
                  <span class="feather-icon">
                    <SettingsIcon />
                  </span>
                </span>
              </a>
            </li>
            <li class="nav-item nav-link">
              <a
                href="#"
                class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
            
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="归档"
              >
                <span class="icon">
                  <span class="feather-icon">
                    <ArchiveIcon />
                  </span>
                </span>
              </a>
            </li>
            <li class="nav-item nav-link">
              <a
                href="#"
                class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
            
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="帮助"
              >
                <span class="icon">
                  <span class="feather-icon">
                    <BookIcon />
                  </span>
                </span>
              </a>
            </li>
          </ul>
      </div>
    </div>
  </nav>
  
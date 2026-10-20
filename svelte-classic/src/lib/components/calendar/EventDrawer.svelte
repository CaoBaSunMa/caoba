<script>
// @ts-nocheck

    import { createEventDispatcher } from 'svelte';
    import Swal from 'sweetalert2';
    import avatar11 from '../../../assets/img/avatar11.jpg';
    import avatar12 from '../../../assets/img/avatar12.jpg';
    import avatar13 from '../../../assets/img/avatar13.jpg';
    import { CalendarIcon, CheckSquareIcon, ClockIcon, Edit2Icon, ExternalLinkIcon, EyeIcon, MapPinIcon, MenuIcon, Trash2Icon, UserPlusIcon } from 'svelte-feather-icons';
    import HkScrollbar from '../../../hk-components/@hk-scrollbar/HkScrollbar.svelte';
  
    export let show = false;
    export let eventInfo = null;
  
    let editable = false;
    let eventDate = { startDate: new Date(), endDate: new Date() };
    let eventTime = { startDate: new Date(), endDate: new Date() };
    let eventColor = '#009B84';
  
    const dispatch = createEventDispatcher();
  
    function toggleEditable() {
      editable = !editable;
    }
  
    function closeDrawer() {
      dispatch('close');
    }
  
    function deleteEvent() {
      Swal.fire({
        html: '<div class="mb-3"><i class="ri-delete-bin-6-line fs-5 text-danger"></i></div><h5 class="text-danger">删除便签？</h5><p>删除后将从您的库中永久移除。</p>',
        customClass: {
          confirmButton: 'btn btn-outline-secondary text-danger',
          cancelButton: 'btn btn-outline-secondary text-grey',
          container: 'swal2-has-bg'
        },
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: '确定，删除便签',
        cancelButtonText: '不，保留便签',
        reverseButtons: true,
        showClass: { popup: 'animate__animated animate__fadeInDown' },
        hideClass: { popup: 'animate__animated animate__fadeOutUp' }
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch('eventDelete');
          Swal.fire({
            html: '<div class="d-flex align-items-center"><i class="ri-delete-bin-5-fill me-2 fs-3 text-danger"></i><h5 class="text-danger mb-0">日程已删除！</h5></div>',
            timer: 2000,
            customClass: { content: 'p-0 text-left', actions: 'justify-content-start' },
            showConfirmButton: false,
            buttonsStyling: false,
            showClass: { popup: 'animate__animated animate__fadeInDown' },
            hideClass: { popup: 'animate__animated animate__fadeOutUp' }
          });
        }
      });
    }
  </script>
  
  <div
    class="hk-drawer calendar-drawer drawer-right"
    class:drawer-toggle={show}
    style="border: none; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1)"
  >
    {#if !editable}
    <div>
      <div class="drawer-header">
        <div class="drawer-header-action">
          <a
            href="#"
            id="edit_event"
            class="btn btn-sm btn-icon btn-flush-secondary btn-rounded flush-soft-hover"
            on:click|preventDefault={toggleEditable}
          >
            <span class="icon">
              <span class="feather-icon">
                <Edit2Icon />
              </span>
            </span>
          </a>
          <a
            href="#"
            id="del_event"
            class="btn btn-sm btn-icon btn-flush-secondary btn-rounded flush-soft-hover"
            on:click|preventDefault={deleteEvent}
          >
            <span class="icon">
              <span class="feather-icon">
                <Trash2Icon />
              </span>
            </span>
          </a>
          <a
            href="#"
            class="btn btn-sm btn-icon btn-flush-secondary btn-rounded flush-soft-hover me-2"
          >
            <span class="icon">
              <span class="feather-icon">
                <ExternalLinkIcon />
              </span>
            </span>
          </a>
          <button type="button" class="drawer-close btn-close" on:click={closeDrawer}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>
      <div class="drawer-body">
        <HkScrollbar class="nicescroll-bar">
          <div class="drawer-content-wrap">
            <div class="event-head mb-4">
              <span
                class="badge badge-violet badge-indicator badge-indicator-xl flex-shrink-0 me-2"
              ></span>
              <div>
                <div class="event-name">{eventInfo}</div>
                <span>日程</span>
              </div>
            </div>
            <ul class="event-detail">
                <li>
                  <span class="ev-icon-wrap">
                    <span class="feather-icon">
                      <CalendarIcon />
                    </span>
                  </span>
                  2020年8月18日 - 2020年8月19日
                </li>
                <li>
                  <span class="ev-icon-wrap">
                    <span class="feather-icon">
                      <ClockIcon />
                    </span>
                  </span>
                  08:40 - 17:40
                </li>
                <li>
                  <span class="ev-icon-wrap">
                    <span class="feather-icon">
                      <MapPinIcon />
                    </span>
                  </span>
                  加拿大奥斯陆
                </li>
                <li>
                  <span class="ev-icon-wrap">
                    <span class="feather-icon">
                      <CheckSquareIcon />
                    </span>
                  </span>
                  会议
                </li>
                <li>
                  <span class="ev-icon-wrap">
                    <span class="feather-icon">
                      <EyeIcon />
                    </span>
                  </span>
                  默认可见性
                </li>
                <li>
                  <span class="ev-icon-wrap">
                    <span class="feather-icon">
                      <UserPlusIcon />
                    </span>
                  </span>
                  <div class="d-flex flex-wrap">
                    <div class="chip chip-primary user-chip mb-2 me-2">
                      <span>
                        <span class="avatar">
                          <img src={avatar11} alt="用户" class="avatar-img" />
                        </span>
                        <span class="chip-text">摩根</span>
                      </span>
                    </div>
                    <div class="chip chip-primary user-chip mb-2 me-2">
                      <span>
                        <span class="avatar">
                          <img src={avatar12} alt="用户" class="avatar-img" />
                        </span>
                        <span class="chip-text">查理</span>
                      </span>
                    </div>
                    <div class="chip chip-primary user-chip mb-2 me-2">
                      <span>
                        <span class="avatar">
                          <img src={avatar13} alt="用户" class="avatar-img" />
                        </span>
                        <span class="chip-text">温斯顿</span>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <span class="ev-icon-wrap"
                    >
                    <span class="feather-icon">
                        <MenuIcon />
                        </span
                  >
                </span>
                  与全球分公司团队及管理层举行的年度会议，讨论增长规划与财年报告
                </li>
              </ul>
          </div>
        </HkScrollbar>
      </div>
    </div>
    {:else}
    <div>
      <div class="drawer-header">
        <div class="drawer-header-action">
          <a
            href="#"
            class="btn btn-sm btn-icon btn-flush-secondary btn-rounded flush-soft-hover me-2"
          >
            <span class="icon">
              <span class="feather-icon">
                <i data-feather="external-link"></i>
              </span>
            </span>
          </a>
          <button
            type="button"
            class="drawer-edit-close btn-close"
            on:click={toggleEditable}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>
      <div class="drawer-body">
        <div class="nicescroll-bar">
          <div class="drawer-content-wrap">
            <div class="event-head mb-4">
              <span
                class="badge badge-violet badge-indicator badge-indicator-xl flex-shrink-0 me-2"
              ></span>
              <div>
                <div class="event-name" contenteditable="true">{eventInfo}</div>
                <div class="form-group mt-2 mb-0">
                  <div class="form-check form-check-inline ps-0">
                    <div class="form-check">
                      <input
                        type="radio"
                        id="event_1"
                        name="eventSelect"
                        class="form-check-input"
                        checked
                      />
                      <label class="form-check-label" for="event_1">日程</label>
                    </div>
                  </div>
                  <div class="form-check form-check-inline ps-0">
                    <div class="form-check">
                      <input
                        type="radio"
                        id="reminder_1"
                        name="eventSelect"
                        class="form-check-input"
                      />
                      <label class="form-check-label" for="reminder_1">提醒</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form>
              <!-- Placeholder for date-range-picker -->
              <div class="form-group">
                <input type="text" class="form-control" placeholder="选择日期范围" />
              </div>
              <!-- Other form fields -->
            </form>
          </div>
        </div>
      </div>
      <div class="drawer-footer d-flex justify-content-end">
        <button class="btn btn-secondary drawer-edit-close me-2" on:click={toggleEditable}>
          放弃
        </button>
        <button class="btn btn-primary drawer-edit-close" on:click={toggleEditable}>
          保存
        </button>
      </div>
    </div>
    {/if}
  </div>
  
  <style>
    /* Add your CSS here */
  </style>
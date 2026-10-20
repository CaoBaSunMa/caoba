<script>
    let dateRange = { startDate: new Date() };
  </script>
  
  <!-- Placeholder for date-range-picker -->
  <div class="inline-calendar">
    <input type="text" class="form-control" placeholder="选择日期" bind:value={dateRange.startDate} />
  </div>
  
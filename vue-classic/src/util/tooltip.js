// tooltip.js
import { Tooltip } from 'bootstrap';

export const tooltipDirective = {
  mounted(el) {
    new Tooltip(el);
  }
};

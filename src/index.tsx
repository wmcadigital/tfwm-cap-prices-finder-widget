import habitat from 'preact-habitat';
import App from './components/App/App';

habitat(App).render({
  selector: '[data-widget-host="tfwm-cap-prices-finder"]',
  clean: true,
});

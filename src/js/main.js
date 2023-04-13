import './vendor';
import './helpers';
import './components/social';
import { ieFix } from './vendor/ie-fix';
import { vhFix } from './vendor/vh-fix';
import { actualYear } from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';


import './components/jquery.nice-select';
import './components/swiper_materials';
import './components/swiper_solutions';
import './components/swiper_vendors';
import './components/swiper_news';
import './components/swiper_grid';
import './components/navigation';
import './components/switcher';
import './components/displaying';
import './components/dropdown';

$('select').niceSelect();

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

header.init();
lazyLoading.init();

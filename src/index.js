import './style/style.scss';
import githubIcon from './img/github.png';
import { initialEvent } from './dom-manip';

const footerGithubImg = document.querySelector('.github-icon');
footerGithubImg.src = githubIcon;

initialEvent();

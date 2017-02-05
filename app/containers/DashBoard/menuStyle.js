/*
 * less/style.less
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 21.08.2016
 */
/*
 * less/utils.less
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 21.08.2016
 */

import { injectGlobal } from 'styled-components'

injectGlobal`
  .metismenu {
    background: #303336;
    font-family: 'Open Sans', sans-serif;
    font-size: 12pt;
    overflow: hidden;
    position: relative;
    height: inherit;
  }
  .metismenu > .metismenu-container > .metismenu-item > .metismenu-link {
    line-height: 2.5em;
  }
  .metismenu > .metismenu-container > .metismenu-item > .metismenu-link .metismenu-state-icon {
    line-height: 2.5em;
  }
  .metismenu::after {
    box-shadow: 0 0 0.4em rgba(0, 0, 0, 0.5) inset;
    -webkit-box-shadow: 0 0 0.4em rgba(0, 0, 0, 0.5) inset;
    content: " ";
    pointer-events: none;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
  .metismenu-container,
  .metismenu-item {
    margin: 0 0 0 0;
    padding: 0;
  }
  .metismenu-container {
    list-style: none;
  }
  .metismenu-container .metismenu-container {
    box-shadow: 0 0.3em 0.3em -0.3em #0c0d0e inset, 0 -0.3em 0.3em -0.3em #0c0d0e inset;
    -webkit-box-shadow: 0 0.3em 0.3em -0.3em #0c0d0e inset, 0 -0.3em 0.3em -0.3em #0c0d0e inset;
    transition: padding 300ms;
    -webkit-transition: padding 300ms;
    background: rgba(255, 255, 255, 0.05);
  }
  .metismenu-container .metismenu-container .metismenu-item > .metismenu-link {
    height: 0;
    overflow: hidden;
    padding-right: 1em;
  }
  .metismenu-container .metismenu-container .metismenu-link {
    padding-left: 1em;
  }
  .metismenu-container .metismenu-container .metismenu-container .metismenu-link {
    padding-left: 2em;
  }
  .metismenu-container.visible {
    padding: .5em 0;
  }
  .metismenu-container.visible > .metismenu-item > .metismenu-link {
    height: 2.5em;
  }
  .metismenu-link {
    color: #DDD;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.5);
    -webkit-text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.5);
    transition: height 300ms, color 300ms, background-color 300ms;
    -webkit-transition: height 300ms, color 300ms, background-color 300ms;
    display: block;
    line-height: 2.5em;
    text-decoration: none;
  }
  .metismenu-link:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #f7f7f7;
  }
  .metismenu-link.active {
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    -webkit-text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    background: #F53;
    color: #FFF;
  }
  .metismenu-link.has-active-child {
    color: #F53;
  }
  I.metismenu-icon {
    text-align: center;
    width: 3em;
  }
  I.metismenu-state-icon {
    transition: transform 300ms;
    -webkit-transition: transform 300ms;
    float: right;
    line-height: 2.5em;
    text-align: center;
    width: 3em;
  }
  I.metismenu-state-icon.rotate-minus-90 {
    transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
  }
`

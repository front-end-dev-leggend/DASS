import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';
import CustomScrollbars from 'util/CustomScrollbars';
import { IconImageMenu } from 'components/IconImageMenu/IconImageMenu';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
class SidenavContent extends Component {
  componentDidMount() {
    const {history} = this.props;
    const that = this;
    const pathname = `${history.location.pathname}`;// get current path

    const menuLi = document.getElementsByClassName('menu');
    for (let i = 0; i < menuLi.length; i++) {
      menuLi[i].onclick = function (event) {

        const parentLiEle = that.closest(this, 'li');
        if (menuLi[i].classList.contains('menu') && parentLiEle !== null) {
          event.stopPropagation();

          if (menuLi[i].classList.contains('open')) {
            menuLi[i].classList.remove('open', 'active');
          } else {
            menuLi[i].classList.add('open', 'active');
          }
        } else {
          for (let j = 0; j < menuLi.length; j++) {
            const parentLi = that.closest(this, 'li');
            if (menuLi[j] !== this && (parentLi === null || !parentLi.classList.contains('open'))) {
              //menuLi[j].classList.remove('open');
            } else {
              if (menuLi[j].classList.contains('open')) {
                menuLi[j].classList.remove('open');
              } else {
                menuLi[j].classList.add('open');
              }
            }
          }
        }
      }
    }

    const activeLi = document.querySelector('a[href="' + pathname + '"]');// select current a element
    try {
      const activeNav = this.closest(activeLi, 'ul'); // select closest ul
      if (activeNav.classList.contains('sub-menu')) {
        this.closest(activeNav, 'li').classList.add('open');
      } else {
        this.closest(activeLi, 'li').classList.add('open');
      }
    } catch (error) {

    }
  }

  componentWillReceiveProps(nextProps) {
    const {history} = nextProps;
    const pathname = `${history.location.pathname}`;// get current path

    const activeLi = document.querySelector('a[href="' + pathname + '"]');// select current a element
    try {
      const activeNav = this.closest(activeLi, 'ul'); // select closest ul
      if (activeNav.classList.contains('sub-menu')) {
        this.closest(activeNav, 'li').classList.add('open');
      } else {
        this.closest(activeLi, 'li').classList.add('open');
      }
    } catch (error) {

    }
  }

  closest(el, selector) {
    try {
      let matchesFn;
      // find vendor prefix
      ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
        if (typeof document.body[fn] === 'function') {
          matchesFn = fn;
          return true;
        }
        return false;
      });

      let parent;

      // traverse parents
      while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
          return parent;
        }
        el = parent;
      }
    } catch (e) {

    }

    return null;
  }



  render() {
    
    const ButtonFont = styled(Button)`
          font-family: Prompt, sans-0serif !important;
      `
    return (
      <CustomScrollbars className=" scrollbar">
        <ul className="nav-menu">
          <li className="menu no-arrow">
            <NavLink to="/app/sample-page">
              <IconImageMenu path="overview.png" />
              <span className="nav-text"><IntlMessages id="sidebar.overview"/> </span>
            </NavLink>
          </li>
          <li className="menu">
            <ButtonFont>
              <IconImageMenu path="customer.png" /> 
              <span className="nav-text"><IntlMessages id="sidebar.customers"/></span>
            </ButtonFont>
            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon"
                         to="/app/custom-views/simple-list">
                                    <span className="nav-text"><IntlMessages id="sidebar.customers.list"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/custom-views/strip-list">
                                    <span className="nav-text"><IntlMessages id="sidebar.customers.personslist"/></span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="menu">
            <ButtonFont>
              <IconImageMenu path="comunicate.png" /> 
              <span className="nav-text"><IntlMessages id="sidebar.communicate"/></span>
            </ButtonFont>
            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon"
                         to="/app/custom-views/simple-list">
                                    <span className="nav-text"><IntlMessages id="sidebar.sms"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/custom-views/strip-list">
                                    <span className="nav-text"><IntlMessages id="sidebar.email"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/custom-views/card-list">
                                    <span className="nav-text"><IntlMessages id="sidebar.line"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/custom-views/card-list">
                                    <span className="nav-text"><IntlMessages id="sidebar.instagram"/></span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="menu no-arrow">
            <NavLink to="/app/dashboard/template">
              <IconImageMenu path="analytics.png" /> 
              <span className="nav-text"><IntlMessages id="sidebar.analytics"/></span>
            </NavLink>
          </li>

          <li className="menu no-arrow">
            <NavLink to="/app/dashboard/template">
              <IconImageMenu path="report.png" /> 
              <span className="nav-text"><IntlMessages id="sidebar.report"/></span>
            </NavLink>
          </li>

          <li className="menu">
            <ButtonFont>
              <IconImageMenu path="importdata.png" /> 
              <span className="nav-text"><IntlMessages id="sidebar.importdata"/></span>
            </ButtonFont>
            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon" to="/app/form/components">
                  <span className="nav-text"><IntlMessages id="sidebar.importdata.excel"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/form/stepper">
                <span className="nav-text"><IntlMessages id="sidebar.importdata.csv"/></span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="menu">
            <ButtonFont className="void">
              <IconImageMenu path="exportdata.png" /> 
              <span className="nav-text"><IntlMessages id="sidebar.exportdata"/></span>
            </ButtonFont>

            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon" to="/app/editor/ck">
                  <span className="nav-text"><IntlMessages id="sidebar.editors.CKEditor"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/editor/wysiswyg">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.editors.WYSISWYGEditor"/></span>
                </NavLink>
              </li>
            </ul>

          </li>

          <li className="menu">
            <ButtonFont className="void">
              <IconImageMenu path="setting.png" /> 
              <span className="nav-text"><IntlMessages id="sidebar.setting"/></span>
            </ButtonFont>

            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon" to="/app/pickers/date-time">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.pickers.dateTimePickers"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/pickers/color">
                  <span className="nav-text"><IntlMessages id="sidebar.pickers.colorPickers"/></span>
                </NavLink>
              </li>
            </ul>

          </li>

          <li className="menu">
            <ButtonFont className="void">
              <IconImageMenu path="contact.png" />
              <span className="nav-text"><IntlMessages id="sidebar.helpcontact"/></span>
            </ButtonFont>

            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon" to="/app/extensions/dnd">
                  <span className="nav-text"><IntlMessages id="sidebar.qa"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/extensions/dropzone">
                  <span className="nav-text"><IntlMessages id="sidebar.fullyinteractive"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/extensions/sweet-alert">
                  <span className="nav-text"><IntlMessages id="sidebar.guideline"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/extensions/notification">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.talktous"/></span>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="menu no-arrow">
            <NavLink to="/app/dashboard/template">
              <IconImageMenu path="aboutus.png" />
              <span className="nav-text"><IntlMessages id="sidebar.aboutus"/></span>
            </NavLink>
          </li>
        </ul>
      </CustomScrollbars>
    );
  }
}

export default withRouter(SidenavContent);

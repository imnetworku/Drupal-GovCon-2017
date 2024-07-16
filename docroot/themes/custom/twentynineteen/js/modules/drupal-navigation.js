/**
 * Drupal Behavior.
 *
 * The original module export has been replaced with the following Drupal
 * behavior, which takes advantage of the context object when initializing the
 * carousel.
 */

((Drupal, drupalSettings) => {
  'use strict';

  Drupal.behaviors.navgiation = {
    attach: (context, settings) => {
      const topMenuLinks = context.querySelectorAll('.menu-main__item > a');
      const subMenu = context.querySelector('.menu-submenu');
      var siteBranding = document.querySelector('.region-branding');
      var coreSponsor = siteBranding.querySelector('.block-views-blockcore-sponsors-listing-sponsors');
      var mobileMenu = document.querySelector('.mm-menu--offcanvas .mm-panels .mm-panel .mm-listview');
      if (coreSponsor && mobileMenu) {
        var coreSponsorClone = coreSponsor.cloneNode(true);
          mobileMenu.appendChild(coreSponsorClone);
      }
    }
  }

})(Drupal, drupalSettings);

<?php
// Checks if composer is running inside Lando.

if (getenv('LANDO_INFO') == false) {
    passthru("npm --prefix docroot/themes/custom/twentynineteen ci");
    passthru("npm --prefix docroot/themes/custom/twentynineteen run build");
}

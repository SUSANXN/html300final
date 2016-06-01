/*
  LocalStorageSettings.js
*/


(function() {
'use strict';
//=============================================================================


var SETTINGS_KEY = 'LSS_Settings';
var settings = getSettings( );
if ( settings.name ) {
    showRequestPage( );
} else {
    showFormPage( );
}

$('#edit-settings').on( 'click', showFormPage );
$('#clear-settings').on( 'click', clearSettings );

//=============================================================================

function getSettings( ) {
    var settingsString = localStorage[ SETTINGS_KEY ];
    if ( settingsString ) {
        return JSON.parse( settingsString );
    } else {
        return { };
    }
}

//-----------------------------------------------------------------------------

function saveSettings( ) {
    localStorage[ SETTINGS_KEY ] = JSON.stringify( settings );
}

//=============================================================================

function showRequestPage( ) {
    $('.show-name').text( settings.name );

    $('#Request-page').show( );
    $('#form-page').hide( );
}

//=============================================================================

function showFormPage( ) {
    $('#name').val( settings.name );
    $('#submit').one( 'click', updateSettings );

    $('#Request-page').hide( );
    $('#form-page').show( );

    //-------------------------------------------------------------------------

    function updateSettings( evt ) {
        evt.preventDefault( );
        settings.name = $('#name').val();
        saveSettings( );
        showRequestPage( );
    }
}

//=============================================================================

function clearSettings( ) {
    localStorage.removeItem( SETTINGS_KEY );
}

//=============================================================================
})();
require.config({
  baseUrl: '/js',
  paths: {
    'modules': 'modules',
    'panels': 'panels',
    'shared': '../shared/js'
  },
  shim: {
    'settings': {
      exports: 'Settings'
    },
    'shared/apn_helper': {
      exports: 'ApnHelper'
    },
    'shared/async_storage': {
      exports: 'asyncStorage'
    },
    'shared/icc_helper': {
      exports: 'IccHelper'
    },
    'shared/keyboard_helper': {
      exports: 'KeyboardHelper',
      deps: ['shared/input_mgmt/input_app_list']
    },
    'shared/language_list': {
      exports: 'LanguageList'
    },
    'shared/lazy_loader': {
      exports: 'LazyLoader'
    },
    'shared/manifest_helper': {
      exports: 'ManifestHelper'
    },
    'shared/screen_layout': {
      exports: 'ScreenLayout'
    },
    'shared/settings_url': {
      exports: 'SettingsURL'
    },
    'shared/omadrm/fl': {
      exports: 'ForwardLock'
    },
    'shared/settings_listener': {
      exports: 'SettingsListener'
    },
    'shared/toaster': {
      exports: 'Toaster'
    },
    'shared/template': {
      exports: 'Template'
    },
    'shared/sim_settings_helper': {
      exports: 'SimSettingsHelper'
    },
    'shared/tz_select': {
      exports: 'tzSelect'
    },
    'shared/wifi_helper': {
      exports: 'WifiHelper'
    },
    'shared/bluetooth_helper': {
      exports: 'BluetoothHelper'
    },
    'shared/simslot': {
      exports: 'SIMSlot'
    },
    'shared/simslot_manager': {
      exports: 'SIMSlotManager',
      deps: ['shared/simslot']
    },
    'shared/mobile_operator': {
      exports: 'MobileOperator'
    },
    'utils': {
      exports: ''
    },
    'shared/device_storage/enumerate_all': {
      exports: 'enumerateAll'
    },
    'shared/airplane_mode_helper': {
      exports: 'AirplaneModeHelper'
    }
  },
  modules: [
    {
      name: 'main'
    },
    {
      name: 'modules/apn/apn_settings_manager',
      exclude: [
        'main',
        'modules/async_storage',
        'modules/mvvm/observable'
      ]
    },
    {
      name: 'panels/root/panel',
      exclude: [
        'main',
        'modules/battery',
        'modules/bluetooth/bluetooth_v1',
        'modules/bluetooth/bluetooth',
        'modules/apps_cache'
      ]
    },
    {
      name: 'panels/languages/panel',
      exclude: [
        'main',
        'shared/keyboard_helper',
        'modules/date_time'
      ]
    },
    {
      name: 'panels/frame/panel',
      exclude: ['main']
    },
    {
      name: 'panels/feedback_send/panel',
      exclude: ['main']
    },
    {
      name: 'panels/feedback_choose/panel',
      exclude: ['main']
    },
    {
      name: 'panels/help/panel',
      exclude: ['main']
    },
    {
      name: 'panels/app_permissions_detail/panel',
      exclude: ['main']
    },
    {
      name: 'panels/app_permissions_list/panel',
      exclude: [
        'main',
        'modules/apps_cache'
      ]
    },
    {
      name: 'panels/screen_lock/panel',
      exclude: ['main']
    },
    {
      name: 'panels/screen_lock_passcode/panel',
      exclude: ['main']
    },
    {
      name: 'panels/display/panel',
      exclude: [
        'main',
        'modules/mvvm/observable'
      ]
    },
    {
      name: 'panels/keyboard/panel',
      exclude: [
        'main',
        'modules/mvvm/list_view',
        'modules/mvvm/observable',
        'modules/mvvm/observable_array',
        'modules/keyboard_context'
      ]
    },
    {
      name: 'panels/keyboard_add_layouts/panel',
      exclude: [
        'main',
        'modules/mvvm/list_view',
        'modules/mvvm/observable',
        'modules/mvvm/observable_array',
        'modules/keyboard_context',
        'shared/keyboard_helper'
      ]
    },
    {
      name: 'panels/keyboard_enabled_default/dialog',
      exclude: [
        'main'
      ]
    },
    {
      name: 'panels/app_storage/panel',
      exclude: [
        'main',
        'modules/mvvm/observable'
      ]
    },
    {
      name: 'panels/wifi/panel',
      exclude: ['main']
    },
    {
      name: 'panels/wifi_auth/panel',
      exclude: ['main']
    },
    {
      name: 'panels/wifi_enter_certificate_nickname/panel',
      exclude: ['main']
    },
    {
      name: 'panels/wifi_join_hidden/panel',
      exclude: ['main']
    },
    {
      name: 'panels/wifi_manage_certificates/panel',
      exclude: ['main']
    },
    {
      name: 'panels/wifi_manage_networks/panel',
      exclude: ['main']
    },
    {
      name: 'panels/wifi_select_certificate_file/panel',
      exclude: ['main']
    },
    {
      name: 'panels/wifi_status/panel',
      exclude: ['main']
    },
    {
      name: 'panels/wifi_wps/panel',
      exclude: ['main']
    },
    {
      name: 'panels/date_time/panel',
      exclude: [
        'main',
        'modules/mvvm/observable',
        'modules/date_time'
      ]
    },
    {
      name: 'panels/browsing_privacy/panel',
      exclude: ['main']
    },
    {
      name: 'panels/search/panel',
      exclude: ['main']
    },
    {
      name: 'panels/homescreens/panel',
      exclude: [
        'main',
        'modules/apps_cache'
      ]
    },
    {
      name: 'panels/sound/panel',
      exclude: ['main']
    },
    {
      name: 'panels/simcard_manager/panel',
      exclude: ['main']
    },
    {
      name: 'panels/hotspot/panel',
      exclude: [
        'main',
        'modules/mvvm/observable'
      ]
    },
    {
      name: 'panels/hotspot_wifi_settings/panel',
      exclude: [
        'main',
        'modules/mvvm/observable'
      ]
    }
  ]
});
(function (window) {
  window.__env = window.__env || {};
  window.__env.TESTNET_ENABLED = ${ __TESTNET_ENABLED__ };
  window.__env.TESTNET4_ENABLED = ${ __TESTNET4_ENABLED__ };
  window.__env.SIGNET_ENABLED = ${ __SIGNET_ENABLED__ };
  window.__env.LIQUID_ENABLED = ${ __LIQUID_ENABLED__ };
  window.__env.LIQUID_TESTNET_ENABLED = ${ __LIQUID_TESTNET_ENABLED__ };
  window.__env.MAINNET_ENABLED = ${ __MAINNET_ENABLED__ };
  window.__env.ITEMS_PER_PAGE = ${ __ITEMS_PER_PAGE__ };
  window.__env.KEEP_BLOCKS_AMOUNT = ${ __KEEP_BLOCKS_AMOUNT__ };
  window.__env.NGINX_PROTOCOL = '${__NGINX_PROTOCOL__}';
  window.__env.NGINX_HOSTNAME = '${__NGINX_HOSTNAME__}';
  window.__env.NGINX_PORT = '${__NGINX_PORT__}';
  window.__env.BLOCK_WEIGHT_UNITS = ${ __BLOCK_WEIGHT_UNITS__ };
  window.__env.MEMPOOL_BLOCKS_AMOUNT = ${ __MEMPOOL_BLOCKS_AMOUNT__ };
  window.__env.BASE_MODULE = '${__BASE_MODULE__}';
  window.__env.ROOT_NETWORK = '${__ROOT_NETWORK__}';
  window.__env.MEMPOOL_WEBSITE_URL = '${__MEMPOOL_WEBSITE_URL__}';
  window.__env.LIQUID_WEBSITE_URL = '${__LIQUID_WEBSITE_URL__}';
  window.__env.MINING_DASHBOARD = ${ __MINING_DASHBOARD__ };
  window.__env.AUDIT = ${ __AUDIT__ };
  window.__env.MAINNET_BLOCK_AUDIT_START_HEIGHT = ${ __MAINNET_BLOCK_AUDIT_START_HEIGHT__ };
  window.__env.TESTNET_BLOCK_AUDIT_START_HEIGHT = ${ __TESTNET_BLOCK_AUDIT_START_HEIGHT__ };
  window.__env.SIGNET_BLOCK_AUDIT_START_HEIGHT = ${ __SIGNET_BLOCK_AUDIT_START_HEIGHT__ };
  window.__env.LIGHTNING = ${ __LIGHTNING__ };
  window.__env.HISTORICAL_PRICE = ${ __HISTORICAL_PRICE__ };
  window.__env.ADDITIONAL_CURRENCIES = ${ __ADDITIONAL_CURRENCIES__ };
  window.__env.ACCELERATOR = ${ __ACCELERATOR__ };
  window.__env.ACCELERATOR_BUTTON = ${ __ACCELERATOR_BUTTON__ };
  window.__env.PUBLIC_ACCELERATIONS = ${ __PUBLIC_ACCELERATIONS__ };
  window.__env.SERVICES_API = '${__SERVICES_API__}';

  // FIXME: Insert values at build time
  window.__env.GIT_COMMIT_HASH = '${__GIT_COMMIT_HASH__}';
  window.__env.PACKAGE_JSON_VERSION = '${__MEMPOOL_VERSION__}';
}(this));

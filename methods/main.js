const retrieve = require('./1_accounts');
const read_contract = require('./2_read_smart_contract');
// const sendContract_eth = require('./3_send_signed_transaction');
// const write_contract = require('./4_write_contract');
const contractEvents = require('./5_contract_event_stream');

module.exports = {
  retrieve,
  read_contract,
  contractEvents,
};

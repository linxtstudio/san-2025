'use strict';
const { getBaseParticipants, getParticipantDetail , updateTotalTransaction } = require("../../repositories/event.repository")
const { calculateTotalTransaction } = require("../../utils/transaction.util");

module.exports = {
  async up (queryInterface, Sequelize) {
    const participants = await getBaseParticipants({}, {})

    for (let i = 0; i < participants.rows.length; i++) {
      const participant = await getParticipantDetail({ id: participants.rows[i].id })
      const totalTransaction = calculateTotalTransaction(participant)

      await updateTotalTransaction({
        id: participant.id,
        total_transaction: totalTransaction,
      })
    }

    console.log('COMPLETED!')
  },

  async down (queryInterface, Sequelize) {
    //
  }
};

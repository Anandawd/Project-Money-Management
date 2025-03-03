"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Transactions", [
      {
        id: 1,
        name: "Gaji Bulanan",
        amount: 50000,
        date: "2025-03-01T10:00:00Z",
        type: "income",
        category: "Salary",
        wallet: "Bank",
        note: "Gaji bulan Maret 2025",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Belanja Bulanan",
        amount: 15000,
        date: "2025-03-02T15:30:00Z",
        type: "expense",
        category: "Groceries",
        wallet: "Cash",
        note: "Belanja kebutuhan sehari-hari",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Pembayaran Listrik",
        amount: 30000,
        date: "2025-03-03T09:00:00Z",
        type: "expense",
        category: "Utilities",
        wallet: "Bank",
        note: "Pembayaran tagihan listrik bulan Februari",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "Investasi Saham",
        amount: 2000000,
        date: "2025-03-04T12:00:00Z",
        type: "investment",
        category: "Stocks",
        wallet: "Brokerage Account",
        note: "Pembelian saham perusahaan XYZ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: "Makan Malam",
        amount: 25000,
        date: "2025-03-05T19:00:00Z",
        type: "expense",
        category: "Dining",
        wallet: "Cash",
        note: "Makan malam bersama teman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Transactions", null, {});
  },
};

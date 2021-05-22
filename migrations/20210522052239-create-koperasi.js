"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("koperasis", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      namaKoperasi: {
        type: Sequelize.STRING,
      },
      nomorBadanHukum: {
        type: Sequelize.STRING,
      },
      tanggalBadanHukum: {
        type: Sequelize.DATE,
      },
      jalan: {
        type: Sequelize.STRING,
      },
      rt: {
        type: Sequelize.STRING,
      },
      rw: {
        type: Sequelize.STRING,
      },
      kelurahan: {
        type: Sequelize.STRING,
      },
      kecamatan: {
        type: Sequelize.STRING,
      },
      telepon: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      website: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      bentukKoperasi: {
        type: Sequelize.STRING,
      },
      jenisKoperasi: {
        type: Sequelize.STRING,
      },
      kelompokKoperasi: {
        type: Sequelize.STRING,
      },
      sektorUsaha: {
        type: Sequelize.STRING,
      },
      tahunKepengurusan: {
        type: Sequelize.STRING,
      },
      ketuaKepengurusan: {
        type: Sequelize.STRING,
      },
      bendaharaKepengurusan: {
        type: Sequelize.STRING,
      },
      sekretarisKepengurusan: {
        type: Sequelize.STRING,
      },

      tahunPengawasan: {
        type: Sequelize.STRING,
      },
      ketuaPengawasan: {
        type: Sequelize.STRING,
      },
      anggotaPengawasan: {
        type: Sequelize.STRING,
      },

      SNIK: {
        type: Sequelize.STRING,
      },
      nomorSNIK: {
        type: Sequelize.STRING,
      },
      nomorNIK: {
        type: Sequelize.STRING,
      },
      SISP: {
        type: Sequelize.STRING,
      },
      NPWP: {
        type: Sequelize.STRING,
      },
      NIB: {
        type: Sequelize.STRING,
      },
      SIUP: {
        type: Sequelize.STRING,
      },
      TDP: {
        type: Sequelize.STRING,
      },
      tahunKelembagaan: {
        type: Sequelize.STRING,
      },
      jumlahAnggota: {
        type: Sequelize.STRING,
      },
      anggotaL: {
        type: Sequelize.STRING,
      },
      anggotaP: {
        type: Sequelize.STRING,
      },
      jumlahKaryawan: {
        type: Sequelize.STRING,
      },
      manager: {
        type: Sequelize.STRING,
      },
      tglRAT: {
        type: Sequelize.DATE,
      },
      modalSendiri: {
        type: Sequelize.INTEGER,
      },
      modalLuar: {
        type: Sequelize.INTEGER,
      },
      nilaiAset: {
        type: Sequelize.INTEGER,
      },
      volumeUsaha: {
        type: Sequelize.INTEGER,
      },
      SHU: {
        type: Sequelize.INTEGER,
      },
      diklat: {
        type: Sequelize.STRING,
      },
      pembiayaan: {
        type: Sequelize.STRING,
      },
      mitra: {
        type: Sequelize.STRING,
      },
      aturanRT: {
        type: Sequelize.STRING,
      },
      aturanKhusus: {
        type: Sequelize.STRING,
      },
      peraturanKhusus: {
        type: Sequelize.TEXT,
      },
      SOP: {
        type: Sequelize.TEXT,
      },
      SOM: {
        type: Sequelize.TEXT,
      },
      penilaian: {
        type: Sequelize.STRING,
      },
      hasilPenilaian: {
        type: Sequelize.STRING,
      },
      skorPenilaian: {
        type: Sequelize.STRING,
      },
      pemeringkatan: {
        type: Sequelize.STRING,
      },
      predikat: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("koperasis");
  },
};

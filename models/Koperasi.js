"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Koperasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Koperasi.belongsTo(models.User);
    }
  }
  Koperasi.init(
    {
      userId: DataTypes.INTEGER,
      namaKoperasi: DataTypes.STRING,
      nomorBadanHukum: DataTypes.STRING,
      tanggalBadanHukum: DataTypes.DATE,
      jalan: DataTypes.STRING,
      rt: DataTypes.STRING,
      rw: DataTypes.STRING,
      kelurahan: DataTypes.STRING,
      kecamatan: DataTypes.STRING,
      telepon: DataTypes.STRING,
      email: DataTypes.STRING,
      website: DataTypes.STRING,
      status: DataTypes.STRING,
      bentukKoperasi: DataTypes.STRING,
      jenisKoperasi: DataTypes.STRING,
      kelompokKoperasi: DataTypes.STRING,
      sektorUsaha: DataTypes.STRING,
      tahunKepengurusan: DataTypes.STRING,
      ketuaKepengurusan: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("ketuaKepengurusan").split(";");
        },
        set(val) {
          return this.setDataValue("ketuaKepengurusan", val.join(";"));
        },
      },
      bendaharaKepengurusan: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("bendaharaKepengurusan").split(";");
        },
        set(val) {
          return this.setDataValue("bendaharaKepengurusan", val.join(";"));
        },
      },
      sekretarisKepengurusan: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("sekretarisKepengurusan").split(";");
        },
        set(val) {
          return this.setDataValue("sekretarisKepengurusan", val.join(";"));
        },
      },
      tahunPengawasan: DataTypes.STRING,
      ketuaPengawasan: DataTypes.STRING,
      anggotaPengawasan: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("anggotaPengawasan").split(";");
        },
        set(val) {
          return this.setDataValue("anggotaPengawasan", val.join(";"));
        },
      },
      SNIK: DataTypes.STRING,
      nomorSNIK: DataTypes.STRING,
      nomorNIK: DataTypes.STRING,
      SISP: DataTypes.STRING,
      NPWP: DataTypes.STRING,
      NIB: DataTypes.STRING,
      SIUP: DataTypes.STRING,
      TDP: DataTypes.STRING,
      tahunKelembagaan: DataTypes.STRING,
      jumlahAnggota: DataTypes.STRING,
      anggotaL: DataTypes.STRING,
      anggotaP: DataTypes.STRING,
      jumlahKaryawan: DataTypes.STRING,
      manager: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("manager").split(";");
        },
        set(val) {
          return this.setDataValue("manager", val.join(";"));
        },
      },
      tglRAT: DataTypes.DATE,
      modalSendiri: DataTypes.INTEGER,
      modalLuar: DataTypes.INTEGER,
      nilaiAset: DataTypes.INTEGER,
      volumeUsaha: DataTypes.INTEGER,
      SHU: DataTypes.INTEGER,
      diklat: {
        type: DataTypes.STRING,
        get() {
          return JSON.parse(this.getDataValue("diklat"));
        },
        set(val) {
          return this.setDataValue("diklat", JSON.stringify(val));
        },
      },
      pembiayaan: {
        type: DataTypes.STRING,
        get() {
          return JSON.parse(this.getDataValue("pembiayaan"));
        },
        set(val) {
          return this.setDataValue("pembiayaan", JSON.stringify(val));
        },
      },
      mitra: {
        type: DataTypes.STRING,
        get() {
          return JSON.parse(this.getDataValue("mitra"));
        },
        set(val) {
          return this.setDataValue("mitra", JSON.stringify(val));
        },
      },
      aturanRT: DataTypes.STRING,
      aturanKhusus: DataTypes.STRING,
      peraturanKhusus: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("peraturanKhusus").split(";");
        },
        set(val) {
          return this.setDataValue("peraturanKhusus", val.join(";"));
        },
      },
      SOP: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("SOP").split(";");
        },
        set(val) {
          return this.setDataValue("SOP", val.join(";"));
        },
      },
      SOM: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("SOM").split(";");
        },
        set(val) {
          return this.setDataValue("SOM", val.join(";"));
        },
      },
      penilaian: DataTypes.STRING,
      hasilPenilaian: DataTypes.STRING,
      skorPenilaian: DataTypes.STRING,
      pemeringkatan: DataTypes.STRING,
      predikat: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Koperasi",
    }
  );
  return Koperasi;
};

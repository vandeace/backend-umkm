'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class koperasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      koperasi.belongsTo(models.user);
    }
  }
  koperasi.init(
    {
      userId: DataTypes.INTEGER,
      namaKoperasi: DataTypes.STRING,
      nomorBadanHukum: DataTypes.STRING,
      tanggalBadanHukum: DataTypes.STRING,
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
      tglNonAktif: DataTypes.STRING,
      ketNonAktif: DataTypes.STRING,
      tahunKepengurusan: DataTypes.STRING,
      ketuaKepengurusan: {
        type: DataTypes.STRING,
        get() {
          return JSON.parse(this.getDataValue('ketuaKepengurusan'));
        },
        set(val) {
          return this.setDataValue('ketuaKepengurusan', JSON.stringify(val));
        },
      },
      bendaharaKepengurusan: {
        type: DataTypes.STRING,
        get() {
          return JSON.parse(this.getDataValue('bendaharaKepengurusan'));
        },
        set(val) {
          return this.setDataValue(
            'bendaharaKepengurusan',
            JSON.stringify(val)
          );
        },
      },
      sekretarisKepengurusan: {
        type: DataTypes.STRING,
        get() {
          return JSON.parse(this.getDataValue('sekretarisKepengurusan'));
        },
        set(val) {
          return this.setDataValue(
            'sekretarisKepengurusan',
            JSON.stringify(val)
          );
        },
      },
      tahunPengawasan: DataTypes.STRING,
      ketuaPengawasan: DataTypes.STRING,
      anggotaPengawasan: {
        type: DataTypes.STRING,
        get() {
          return JSON.parse(this.getDataValue('anggotaPengawasan'));
        },
        set(val) {
          return this.setDataValue('anggotaPengawasan', JSON.stringify(val));
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
          return JSON.parse(this.getDataValue('manager'));
        },
        set(val) {
          return this.setDataValue('manager', JSON.stringify(val));
        },
      },
      tglRAT: DataTypes.STRING,
      modalSendiri: DataTypes.STRING,
      modalLuar: DataTypes.STRING,
      nilaiAset: DataTypes.STRING,
      volumeUsaha: DataTypes.STRING,
      SHU: DataTypes.STRING,
      diklatAnggota: DataTypes.STRING,
      diklat: {
        type: DataTypes.STRING,
        get() {
          return JSON.parse(this.getDataValue('diklat'));
        },
        set(val) {
          return this.setDataValue('diklat', JSON.stringify(val));
        },
      },
      pembiayaan: {
        type: DataTypes.STRING,
        get() {
          return JSON.parse(this.getDataValue('pembiayaan'));
        },
        set(val) {
          return this.setDataValue('pembiayaan', JSON.stringify(val));
        },
      },
      pemasaran: {
        type: DataTypes.STRING,
        get() {
          return JSON.parse(this.getDataValue('pemasaran'));
        },
        set(val) {
          return this.setDataValue('pemasaran', JSON.stringify(val));
        },
      },
      mitra: {
        type: DataTypes.STRING,
        get() {
          return JSON.parse(this.getDataValue('mitra'));
        },
        set(val) {
          return this.setDataValue('mitra', JSON.stringify(val));
        },
      },
      aturanRT: DataTypes.STRING,
      aturanKhusus: DataTypes.STRING,
      peraturanKhusus: {
        type: DataTypes.STRING,
        get() {
          return JSON.parse(this.getDataValue('peraturanKhusus'));
        },
        set(val) {
          return this.setDataValue('peraturanKhusus', JSON.stringify(val));
        },
      },
      SOP: {
        type: DataTypes.STRING,
        get() {
          return JSON.parse(this.getDataValue('SOP'));
        },
        set(val) {
          return this.setDataValue('SOP', JSON.stringify(val));
        },
      },
      SOM: {
        type: DataTypes.STRING,
        get() {
          return JSON.parse(this.getDataValue('SOM'));
        },
        set(val) {
          return this.setDataValue('SOM', JSON.stringify(val));
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
      modelName: 'koperasi',
    }
  );
  return koperasi;
};

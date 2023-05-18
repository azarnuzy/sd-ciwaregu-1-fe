export const asalMuasal = [
  {
    name: 'asalMuasal',
    id: 'rumahTangga',
    value: 'Rumah Tangga',
    params: {
      required: true,
    },
    label: 'Rumah Tangga',
  },

  {
    name: 'asalMuasal',
    id: 'TKPaud',
    value: 'TK/Paud',
    params: {
      required: true,
    },
    label: 'TK/Paud',
  },
  {
    name: 'asalMuasal',
    id: 'pindahan',
    value: 'Pindahan',
    params: {
      required: true,
    },
    label: 'Pindahan',
  },
]

export const jenisKelamin = [
  {
    name: 'jenisKelamin',
    id: 'lakiLaki',
    value: 'Laki Laki',
    params: {
      required: true,
      onChange: (e) => {
        console.log(e.target)
      },
    },
    label: 'Laki Laki',
  },
  {
    name: 'jenisKelamin',
    id: 'perempuan',
    value: 'Perempuan',
    params: {
      required: true,
      onChange: (e) => {
        console.log(e.target)
      },
    },
    label: 'Perempuan',
  },
]

export const agamaIndonesia = [
  { 1: 'Islam' },
  { 2: 'Kristen Protestan' },
  { 3: 'Katolik' },
  { 4: 'Hindu' },
  { 5: 'Buddha' },
  { 6: 'Konghucu' },
]

export const pendidikan = [
  {
    1: 'Tidak Sekolah',
  },
  {
    2: 'Putus Sd',
  },
  {
    3: 'SD Sederajat',
  },
  {
    4: 'SMP Sederajat ',
  },
  {
    5: 'SMA Sederajat ',
  },
  {
    6: 'D1 ',
  },
  {
    7: 'D2 ',
  },
  {
    8: 'D3 ',
  },
  {
    9: 'D4/S1 ',
  },
  {
    10: 'S2 ',
  },
  {
    11: 'S3',
  },
]

export const pekerjaan = [
  {
    1: 'Tidak Bekerja',
  },
  {
    2: 'Nelayan',
  },
  {
    3: 'Petani',
  },
  {
    4: 'Peternak',
  },
  {
    5: 'PNS/TNI/Polri',
  },
  {
    6: 'Karyawanswasta',
  },
  {
    7: 'Pedagang Kecil',
  },
  {
    8: 'Pedagang Besar',
  },
  {
    9: 'Wiraswasta',
  },
  {
    10: 'Wirausaha',
  },
  {
    11: 'Buruh',
  },
  {
    12: 'Pensiunan',
  },
  {
    13: 'Lainnya',
  },
]

export const penghasilanAyah = [
  {
    name: 'penghasilanAyah',
    id: 'kurang1JutaAyah',
    value: 'Kurang dari Rp1.000.000',
    params: {
      required: true,
    },
    label: 'Kurang dari Rp1.000.000',
  },
  {
    name: 'penghasilanAyah',
    id: 'antara1Sampai2JutaAyah',
    value: 'Rp1.000.000 - Rp2.000.000',
    params: {
      required: true,
    },
    label: 'Rp1.000.000 - Rp2.000.000',
  },
  {
    name: 'penghasilanAyah',
    id: 'lebih2JutaAyah',
    value: 'Lebih dari Rp2.000.000',
    params: {
      required: true,
    },
    label: 'Lebih dari Rp2.000.000',
  },
]
export const penghasilanIbu = [
  {
    name: 'penghasilanIbu',
    id: 'kurang1JutaIbu',
    value: 'Kurang dari Rp1.000.000',
    params: {
      required: true,
    },
    label: 'Kurang dari Rp1.000.000',
  },
  {
    name: 'penghasilanIbu',
    id: 'antara1Sampai2JutaIbu',
    value: 'Rp1.000.000 - Rp2.000.000',
    params: {
      required: true,
    },
    label: 'Rp1.000.000 - Rp2.000.000',
  },
  {
    name: 'penghasilanIbu',
    id: 'lebih2JutaIbu',
    value: 'Lebih dari Rp2.000.000',
    params: {
      required: true,
    },
    label: 'Lebih dari Rp2.000.000',
  },
]
export const penghasilanWali = [
  {
    name: 'penghasilanWali',
    id: 'kurang1JutaWali',
    value: 'Kurang dari Rp1.000.000',
    params: {
      required: true,
    },
    label: 'Kurang dari Rp1.000.000',
  },
  {
    name: 'penghasilanWali',
    id: 'antara1Sampai2JutaWali',
    value: 'Rp1.000.000 - Rp2.000.000',
    params: {
      required: true,
    },
    label: 'Rp1.000.000 - Rp2.000.000',
  },
  {
    name: 'penghasilanWali',
    id: 'lebih2JutaWali',
    value: 'Lebih dari Rp2.000.000',
    params: {
      required: true,
    },
    label: 'Lebih dari Rp2.000.000',
  },
]

export const dataPage2 = [
  {
    nameInput: {
      name: 'ayahName',
      label: 'Nama Ayah Kandung',
      placeholder: 'Masukan Nama Ayah Kandung',
      id: 'ayahName',
      params: { required: true },
      errorText: 'Nama Ayah Kandung Harus Diisi',
    },
    pendidikanInput: {
      id: 'ayahPendidikan',
      errorText: 'Pendidikan Harus Diisi',
      label: 'Pendidikan',
      defaultValue: 'Pilih Salah Satu',
      data: pendidikan,
    },
    pekerjaanInput: {
      id: 'ayahPekerjaan',
      data: pekerjaan,
      errorText: 'Pekerjaan Harus Diisi',
      label: 'Pekerjaan',
      defaultValue: 'Pilih Salah Satu',
    },
    penghasilanInput: {
      data: penghasilanAyah,
      id: 'penghasilanAyah',
      value: 'penghasilanAyah',
      label: 'Penghasilan',
      errorText: 'Penghasilan Ayah harus Diisi',
      params: { required: true },
    },
  },
  {
    nameInput: {
      name: 'ibuName',
      label: 'Nama Ibu Kandung',
      placeholder: 'Masukan Nama Ibu Kandung',
      id: 'ibuName',
      params: { required: true },
      errorText: 'Nama Ibu Kandung Harus Diisi',
    },
    pendidikanInput: {
      id: 'ibuPendidikan',
      errorText: 'Pendidikan Harus Diisi',
      label: 'Pendidikan',
      defaultValue: 'Pilih Salah Satu',
      data: pendidikan,
    },
    pekerjaanInput: {
      id: 'ibuPekerjaan',
      data: pekerjaan,
      errorText: 'Pekerjaan Harus Diisi',
      label: 'Pekerjaan',
      defaultValue: 'Pilih Salah Satu',
    },
    penghasilanInput: {
      data: penghasilanIbu,
      id: 'penghasilanIbu',
      value: 'penghasilanIbu',
      label: 'Penghasilan',
      errorText: 'Penghasilan Ibu harus Diisi',
      params: { required: true },
    },
  },
  {
    nameInput: {
      name: 'waliName',
      label: 'Nama Wali Kandung',
      placeholder: 'Masukan Nama Wali Kandung',
      id: 'waliName',
      // params: { required: true },
      errorText: 'Nama Wali Kandung Harus Diisi',
    },
    pendidikanInput: {
      id: 'waliPendidikan',
      errorText: 'Pendidikan Harus Diisi',
      label: 'Pendidikan',
      defaultValue: 'Pilih Salah Satu',
      data: pendidikan,
    },
    pekerjaanInput: {
      id: 'waliPekerjaan',
      data: pekerjaan,
      errorText: 'Pekerjaan Harus Diisi',
      label: 'Pekerjaan',
      defaultValue: 'Pilih Salah Satu',
    },
    penghasilanInput: {
      data: penghasilanWali,
      id: 'penghasilanWali',
      value: 'penghasilanIbu',
      label: 'Penghasilan',
      errorText: 'Penghasilan Wali harus Diisi',
      // params: { required: true },
    },
  },
]

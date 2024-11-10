interface ItemRiwayat {
  jenjang: string;
  sekolah: string;
  tahun: string;
}

function ItemRiwayat({ jenjang, sekolah, tahun }: ItemRiwayat) {
  return (
    <div className="border-2 m-2 rounded-lg bg-yellow-200 text-blue-600 p-3">
      <div>{jenjang}</div>
      <div>{sekolah}</div>
      <div>{tahun}</div>
    </div>
  );
}

export default function RiwayatPendidikan() {
  return (
    <div className="container">
      <h2 className="mt-40 text-2xl text-blue-900 font-bold">Riwayat Pendidikan</h2>
      
      <ItemRiwayat jenjang="SD" sekolah="Bojong Braja" tahun="2009-2015" />
      <ItemRiwayat jenjang="SMP" sekolah="SMPN 3 Rancaekek" tahun="2015-2018" />
      <ItemRiwayat jenjang="SMA" sekolah="MAN 2 Bandung" tahun="2018-2021" />
      <ItemRiwayat jenjang="Diploma" sekolah="Al Ma'soem" tahun="2022-2025" />
      <ItemRiwayat jenjang="Sarjana" sekolah="UNPAD" tahun="2025-2027" />
      <ItemRiwayat jenjang="Magister" sekolah="UNPAD" tahun="2027-2029" />
    </div>
  );
}

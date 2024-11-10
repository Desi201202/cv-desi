interface ItemRiwayatPekerjaanProps {
    tahun: string;
    instansi: string;
    sebagai: string;
}

function ItemRiwayatPekerjaan({ tahun, instansi, sebagai }: ItemRiwayatPekerjaanProps) {
    return (
        <div className="border-2 m-2 rounded-lg bg-pink-300 text-blue-600 p-3">
            <div>{tahun}</div>
            <div>{instansi}</div>
            <div>{sebagai}</div>
        </div>
    );
}

export default function RiwayatPekerjaan() {
    return (
        <div className="container">
            <h2 className="mt-40 text-2xl text-blue-900 font-bold">Riwayat Pekerjaan</h2>
            
            <ItemRiwayatPekerjaan tahun="2019-2020" instansi="XXI" sebagai="Guide" />
            <ItemRiwayatPekerjaan tahun="2020" instansi="Dealer Honda" sebagai="Sales Marketing" />
            <ItemRiwayatPekerjaan tahun="2021-2022" instansi="PT Kahatex" sebagai="Cutting" />
            <ItemRiwayatPekerjaan tahun="2023" instansi="Rabbani" sebagai="Administrasi" />
        </div>
    );
}

import React from 'react';

function App() {
  const [qidiruvSozi, QidiruvniOzgartir] = React.useState("");
  const [tanlanganKategoriya, KategoriyaniOzgartir] = React.useState("Barchasi");

  const yangiliklarRuyxati = [
    { id: 1, sarlavha: "Sun'iy intellekt ta'limda yangi imkoniyatlar ochmoqda", kategoriya: "Texnologiya", korishlar: 1250 },
    { id: 2, sarlavha: "Samarqandda yosh dasturchilar uchun maxsus marafon bo'lib o'tdi", kategoriya: "Ta'lim", korishlar: 980 },
    { id: 3, sarlavha: "O'zbekistonda IT markazlar soni yana oshdi", kategoriya: "Texnologiya", korishlar: 1500 },
    { id: 4, sarlavha: "Matematika fanidan Respublika olimpiadasi boshlanmoqda", kategoriya: "Ta'lim", korishlar: 450 },
    { id: 5, sarlavha: "Yangi 2026-yilda kutilayotgan eng qiziqarli kosmik kashfiyotlar", kategoriya: "Fan", korishlar: 2100 },
    { id: 6, sarlavha: "Sportchilarimiz xalqaro musobaqada yuqori o'rinlarni qo'lga kiritishdi", kategoriya: "Sport", korishlar: 820 },
    { id: 7, sarlavha: "Dasturlashni noldan o'rganish uchun eng yaxshi 5 ta qadam", kategoriya: "Texnologiya", korishlar: 3400 },
    { id: 8, sarlavha: "Maktab o'quvchilari uchun maxsus loyihalar tanlovi e'lon qilindi", kategoriya: "Ta'lim", korishlar: 670 },
    { id: 9, sarlavha: "Futbol bo'yicha Milliy kubok bahslari qizg'in davom etmoqda", kategoriya: "Sport", korishlar: 1100 },
    { id: 10, sarlavha: "Tarixiy obidalarimizni raqamlashtirish ishlari boshlandi", kategoriya: "Madaniyat", korishlar: 530 },
    { id: 11, sarlavha: "Elektron tijorat platformalari xavfsizligi kuchaytirilmoqda", kategoriya: "Texnologiya", korishlar: 890 },
    { id: 12, sarlavha: "Kitobxonlikni targ'ib qilish bo'yicha yangi loyiha taqdim etildi", kategoriya: "Madaniyat", korishlar: 740 }
  ];

  // Qidiruv va kategoriya bo'yicha filtrlash
  const filtringlanganYangiliklar = [];
  for (let i = 0; i < yangiliklarRuyxati.length; i++) {
    const item = yangiliklarRuyxati[i];
    const mosKeladimi = item.sarlavha.toLowerCase().includes(qidiruvSozi.toLowerCase());
    const kategoriyaMos = tanlanganKategoriya === "Barchasi" || item.kategoriya === tanlanganKategoriya;

    if (mosKeladimi && kategoriyaMos) {
      filtringlanganYangiliklar.push(item);
    }
  }

  // Ko'rishlar soni bo'yicha saralash (Top uchun)
  const saralanganRoyxat = [...yangiliklarRuyxati];
  saralanganRoyxat.sort(function(a, b) {
    return b.korishlar - a.korishlar;
  });

  const topUchta = [saralanganRoyxat[0], saralanganRoyxat[1], saralanganRoyxat[2]];

  function qidiruvniOzgartirdi(hodisa) {
    QidiruvniOzgartir(hodisa.target.value);
  }

  function kategoriyaniTanladi(kategoriyaNomi) {
    KategoriyaniOzgartir(kategoriyaNomi);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Yangiliklar Katalogi</h1>

      {/* Qidiruv inputi */}
      <div style={{ marginBottom: "15px" }}>
        <input 
          type="text" 
          placeholder="Yangiliklarni qidirish..." 
          value={qidiruvSozi} 
          onChange={qidiruvniOzgartirdi}
          style={{ padding: "8px", width: "300px", fontSize: "16px" }}
        />
      </div>

      {/* Kategoriya filterlari */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={function() { kategoriyaniTanladi("Barchasi"); }} style={{ marginRight: "5px" }}>Barchasi</button>
        <button onClick={function() { kategoriyaniTanladi("Texnologiya"); }} style={{ marginRight: "5px" }}>Texnologiya</button>
        <button onClick={function() { kategoriyaniTanladi("Ta'lim"); }} style={{ marginRight: "5px" }}>Ta'lim</button>
        <button onClick={function() { kategoriyaniTanladi("Sport"); }} style={{ marginRight: "5px" }}>Sport</button>
        <button onClick={function() { kategoriyaniTanladi("Fan"); }} style={{ marginRight: "5px" }}>Fan</button>
        <button onClick={function() { kategoriyaniTanladi("Madaniyat"); }}>Madaniyat</button>
      </div>

      {/* Popular (Top 3) qismi */}
      <div style={{ marginBottom: "25px", background: "#f9f9f9", padding: "15px", borderRadius: "8px" }}>
        <h3>🔥 Eng ommabop (Top 3)</h3>
        <ul>
          {topUchta.map(function(item) {
            return (
              <li key={item.id}>
                {item.sarlavha} ({item.korishlar} marta ko'rilgan)
              </li>
            );
          })}
        </ul>
      </div>

      {/* Yangiliklar ro'yxati yoki Empty State */}
      <div>
        <h3>Barcha yangiliklar</h3>
        {filtringlanganYangiliklar.length === 0 ? (
          <p style={{ color: "red", fontStyle: "italic" }}>Hech qanday yangilik topilmadi (Empty state).</p>
        ) : (
          <ul>
            {filtringlanganYangiliklar.map(function(item) {
              return (
                <li key={item.id} style={{ marginBottom: "10px" }}>
                  <strong>{item.sarlavha}</strong> <em>{item.kategoriya}</em> ({item.korishlar} marta ko'rilgan)
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
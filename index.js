// Andijondagi 31-maktabda o'qitiladigan 18 ta fan
const schoolSubjects = [
  {
    name: "Matematika",
    category: "exact",
    grades: "1–11 sinflar",
    icon: "📐",
    desc: "Arifmetika, algebra, geometriya hamda mantiqiy masalalar yechish ko'nikmalarini shakllantirish."
  },
  {
    name: "Informatika va AT",
    category: "exact",
    grades: "5–11 sinflar",
    icon: "💻",
    desc: "Kompyuter savodxonligi, ofis dasturlari, algoritmlar va dasturlash asoslari."
  },
  {
    name: "Fizika",
    category: "exact",
    grades: "7–11 sinflar",
    icon: "⚡",
    desc: "Mexanika, issiqlik, elektr va optika qonuniyatlarini nazariy hamda amaliy o'rganish."
  },
  {
    name: "Astronomiya",
    category: "exact",
    grades: "11-sinf",
    icon: "🔭",
    desc: "Quyosh sistemasi, yulduzlar olami va koinot tuzilishi haqidagi fan."
  },
  {
    name: "Kimyo",
    category: "natural",
    grades: "7–11 sinflar",
    icon: "🧪",
    desc: "Kimyoviy elementlar, reaksiyalar, moddalarning xossalari va amaliy tajribalar."
  },
  {
    name: "Biologiya",
    category: "natural",
    grades: "5–11 sinflar",
    icon: "🧬",
    desc: "O'simliklar, hayvonot dunyosi, odam anatomiyasi va tirik organizmlar tuzilishi."
  },
  {
    name: "Geografiya",
    category: "natural",
    grades: "5–11 sinflar",
    icon: "🌍",
    desc: "O'zbekiston va jahon geografiyasi, iqlim, aholi va tabiiy boyliklar."
  },
  {
    name: "Tabiiy fanlar (Science)",
    category: "natural",
    grades: "1–6 sinflar",
    icon: "🌱",
    desc: "Atrof-muhit va tabiat hodisalarini boshlang'ich hamda o'rta sinflarda o'rganish."
  },
  {
    name: "Ona tili",
    category: "languages",
    grades: "1–11 sinflar",
    icon: "📖",
    desc: "Savodxonlik, nutq madaniyati, grammatika va to'g'ri yozish qoidalari."
  },
  {
    name: "Adabiyot",
    category: "languages",
    grades: "5–11 sinflar",
    icon: "✒️",
    desc: "O'zbek va jahon adabiyoti namunalari, badiiy asarlar tahlili va mutolaa madaniyati."
  },
  {
    name: "Ingliz tili",
    category: "languages",
    grades: "1–11 sinflar",
    icon: "🇬🇧",
    desc: "Ingliz tilida o'qish, eshitish, yozish va erkin gapirish ko'nikmalarini rivojlantirish."
  },
  {
    name: "Rus tili",
    category: "languages",
    grades: "2–11 sinflar",
    icon: "🗣️",
    desc: "Rus tilida og'zaki va yozma muloqot hamda til qoidalarini o'zlashtirish."
  },
  {
    name: "Nemis tili",
    category: "languages",
    grades: "5–11 sinflar",
    icon: "🇩🇪",
    desc: "Qo'shimcha xorijiy til sifatida nemis tili asoslarini o'rganish."
  },
  {
    name: "O'zbekiston tarixi",
    category: "social",
    grades: "5–11 sinflar",
    icon: "🏛️",
    desc: "Vatanimizning qadimgi, o'rta asrlar va yangi davr tarixi hamda madaniy merosi."
  },
  {
    name: "Jahon tarixi",
    category: "social",
    grades: "6–11 sinflar",
    icon: "📜",
    desc: "Jahon xalqlari tarixi, sivilizatsiyalar va muhim tarixiy jarayonlar."
  },
  {
    name: "Tarbiya / Davlat va Huquq",
    category: "social",
    grades: "1–11 sinflar",
    icon: "⚖️",
    desc: "Odob-axloq, fuqarolik madaniyati, huquqiy savodxonlik va vatanparvarlik."
  },
  {
    name: "Tasviriy san'at va Chizmachilik",
    category: "social",
    grades: "1–9 sinflar",
    icon: "🎨",
    desc: "Rangtasvir, ijodiy fikrlash va geometrik-texnik chizmachilik asoslari."
  },
  {
    name: "Jismoniy tarbiya va Texnologiya",
    category: "social",
    grades: "1–11 sinflar",
    icon: "⚽",
    desc: "Sog'lom turmush tarzi, sport o'yinlari hamda amaliy hunarmandchilik va texnologiya."
  }
];

function renderSubjects(filter = "all") {
  const grid = document.getElementById("subjectsGrid");
  const filtered =
    filter === "all"
      ? schoolSubjects
      : schoolSubjects.filter((item) => item.category === filter);

  grid.innerHTML = filtered
    .map(
      (subj) => `
      <div class="subject-card">
        <div class="subject-top">
          <span class="subject-icon">${subj.icon}</span>
          <span class="grade-badge">${subj.grades}</span>
        </div>
        <h3>${subj.name}</h3>
        <p>${subj.desc}</p>
      </div>
    `
    )
    .join("");
}

function filterSubjects(category, btn) {
  document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderSubjects(category);
}

function toggleMobileMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

function openModal() {
  document.getElementById("applyModal").classList.add("open");
}

function closeModal() {
  document.getElementById("applyModal").classList.remove("open");
}

function submitApplication(event) {
  event.preventDefault();
  const name = document.getElementById("applicantName").value;
  alert(`Rahmat, ${name}! Arizangiz Andijon shahridagi 31-maktab (Semashko) qabuliga yuborildi.`);
  event.target.reset();
  closeModal();
}

renderSubjects();
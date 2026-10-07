import type { NavItem, Principle, Stat } from "./types";

export const profile = {
  name: "이나영",
  nameEn: "Nayoung Lee",
  logo: { left: "NAYOUNG", right: "LEE" },
  role: "Backend Developer",
  domain: "Financial System Developer",
  github: "https://github.com/naayoung",
  // TODO: 실제 이메일 주소로 바꿔주세요.
  email: "your.email@example.com",
};

export const nav: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "tech", label: "Tech" },
  { id: "projects", label: "Projects" },
  { id: "career", label: "Career" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  status: "현재 시중은행 금융 시스템 개발 중",
  eyebrow: "Backend Developer",
  headline: ["거래의 흐름을", "정확하게 연결하는"],
  highlight: "정확하게",
  nameLine: "개발자 이나영입니다.",
  description: [
    "금융 시스템에서 전문이 들어오고, 처리되고, 원장에 반영될 때까지.",
    "데이터가 어긋나지 않는지를 확인하고 안전하게 시스템을 연결하는 일을 합니다.",
  ],
  stackLine: ["Java", "Spring", "Oracle", "Financial System"],
  /** 채용 담당자가 30초 안에 볼 핵심 키워드 */
  keywords: ["ISO 20022", "한국은행 금융망", "금융 전문 처리", "계정계 원장 반영", "Oracle 데이터 검증", "시스템 이행"],
};

export const about = {
  title: "About Me",
  quote: ["문제가 발생한 지점을 추측하기보다", "데이터의 흐름을 따라 확인합니다."],
  paragraphs: [
    "약 4년간 게임 레벨 디자이너로 일하며 플레이 데이터와 사용자 행동을 근거로 문제를 찾고 개선해 왔습니다. 이후 개발자로 전향해 지금은 금융 시스템을 개발하고 있습니다.",
    "시중은행 프로젝트에서 금융 전문 처리, 전문 상태값 매핑, 계정계 원장 반영, 데이터 검증과 시스템 이행을 경험했습니다. 문제가 생기면 인터페이스 정의서와 화면 값, 데이터베이스 원장 값을 차례로 대조하며 원인이 생긴 위치를 좁혀 가는 방식을 중요하게 생각합니다.",
    "빠르게 동작하는 코드보다 다른 개발자가 읽고 유지보수하기 쉬운 코드를 만들고 싶습니다. 금융 도메인 경험을 바탕으로 Java/Spring 백엔드 개발자로 전문성을 넓혀 가고 있습니다.",
  ],
};

// 숫자는 여기에서만 수정하면 About 영역에 그대로 반영됩니다.
export const stats: Stat[] = [
  { value: "01", unit: "+ yrs", label: "금융 개발 경력", caption: "시중은행 금융 시스템" },
  { value: "02", label: "금융 시스템 이행", caption: "한국은행 금융망 연계" },
  { value: "04", unit: "+ yrs", label: "게임 서비스 경험", caption: "레벨 디자인 · 데이터 분석" },
  { value: "Java", label: "Main Backend Stack", caption: "Spring · Oracle" },
];

export const workStyle: { title: string; caption: string; items: Principle[] } = {
  title: "How I Work",
  caption: "일하는 방식은 기술 스택보다 오래 남는다고 생각합니다.",
  items: [
    {
      no: "01",
      title: "Trace the Flow",
      body: "문제가 발생하면 전문 → 업무 처리 → DB → 화면까지 데이터 흐름을 따라 확인합니다.",
      icon: "route",
    },
    {
      no: "02",
      title: "Verify Before Guessing",
      body: "추측하기보다 인터페이스 정의서와 실제 값을 대조해 원인을 좁혀갑니다.",
      icon: "scan",
    },
    {
      no: "03",
      title: "Build for the Next Developer",
      body: "현재 동작하는 것뿐 아니라 다음 개발자가 읽고 수정할 수 있는 코드를 지향합니다.",
      icon: "code",
    },
  ],
};

export const contact = {
  title: "Let's Build Reliable Systems.",
  body: ["안정적인 시스템과", "좋은 사용자 경험을 만드는 개발자가 되고 있습니다."],
  footer: "Built with curiosity and reliability.",
};

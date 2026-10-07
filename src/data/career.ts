import type { CareerItem } from "./types";

// 최근 경력부터 순서대로 작성합니다.
export const career: CareerItem[] = [
  {
    period: "Now",
    role: "Financial System Developer",
    org: "미르이즈 · 시중은행 프로젝트",
    current: true,
    summary: "시중은행 금융 시스템 개발. 한국은행 금융망 연계 프로젝트에서 전문 처리부터 원장 반영, 이행까지 담당했습니다.",
    bullets: ["금융 시스템 개발", "금융 전문 처리", "데이터 검증", "시스템 이행"],
  },
  {
    period: "Training",
    role: "Developer Training",
    org: "금융 IT 개발 교육",
    summary: "Java 백엔드부터 화면, 배포 환경까지 웹 서비스 전 과정을 학습하며 개발자로 전향했습니다.",
    tags: ["Java", "Spring", "SQL", "Docker", "Linux", "React"],
  },
  {
    period: "Previous · 약 4년",
    role: "Game Level Designer",
    org: "게임 개발",
    summary: "게임 플레이 데이터와 사용자 행동을 기반으로 레벨을 설계하고 개선했습니다.",
    bullets: ["플레이 데이터 기반 레벨 설계·개선", "A/B Test 및 데이터 분석"],
  },
];

// 이전 경력과 현재 업무를 잇는 연결고리
export const throughLine = {
  title: "같은 방식, 다른 데이터",
  caption: "사용자 행동을 분석하고 문제를 개선하던 경험이 현재 시스템의 데이터 흐름을 분석하는 방식으로 이어졌습니다.",
  steps: ["Observe", "Narrow down", "Fix & Verify"],
  rows: [
    { label: "Game Level Design", values: ["플레이 데이터 · 이탈 구간", "레벨 구간별 원인 분석", "레벨 수정 · A/B Test"] },
    { label: "Financial System", values: ["전문 · 거래 상태값", "정의서 · 화면 · 원장 대조", "로직 수정 · 재검증"] },
  ],
};

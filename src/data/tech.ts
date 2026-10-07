import type { TechCategory } from "./types";

// status: "work" = 실무에서 사용, "project" = 개인·교육 프로젝트 및 학습
// usage: 아이콘을 클릭했을 때 보여지는 실제 사용처
export const techCategories: TechCategory[] = [
  {
    id: "backend",
    title: "Backend",
    caption: "서버 · 업무 로직",
    items: [
      { name: "Java", icon: "openjdk", status: "project", usage: "주력 백엔드 언어. 교육 과정과 개인 프로젝트(PointPay Guard)에서 도메인 모델과 서비스 로직을 구현했습니다." },
      { name: "Spring", icon: "spring", status: "project", usage: "교육 프로젝트에서 DI, 트랜잭션 관리 등 Spring 핵심 구조를 학습하고 적용했습니다." },
      { name: "Spring Boot", icon: "springboot", status: "project", usage: "개인 및 교육 프로젝트에서 REST API와 백엔드 서비스를 구현했습니다." },
      { name: "JPA", icon: "hibernate", status: "project", usage: "PointPay Guard에서 결제·주문·지갑 엔티티를 매핑하고, 비관적 락으로 동시 잔액 차감을 제어했습니다." },
      { name: "QueryDSL", mono: "QD", status: "project", usage: "교육 프로젝트에서 타입 안전한 동적 조회 쿼리를 작성했습니다." },
      { name: "MyBatis", mono: "MB", status: "project", usage: "교육 프로젝트에서 SQL Mapper 기반 데이터 접근 계층을 구현했습니다." },
      { name: "Servlet / JSP", mono: "JSP", status: "project", usage: "웹 요청 처리 흐름을 이해하기 위해 교육 과정에서 Servlet/JSP 기반 웹 애플리케이션을 만들었습니다." },
      { name: "JDBC", mono: "JDBC", status: "project", usage: "커넥션, PreparedStatement, 트랜잭션 처리 등 DB 접근의 기본 동작을 학습했습니다." },
      { name: "ProFrame C", mono: "PF", status: "work", usage: "금융 프로젝트의 온라인 거래 프레임워크. 대외 전문 송수신과 업무 처리, 원장 반영 로직을 개발했습니다." },
    ],
  },
  {
    id: "database",
    title: "Database",
    caption: "데이터 저장 · 검증",
    items: [
      { name: "Oracle", mono: "ORA", status: "work", usage: "금융 전문 처리 결과와 원장 데이터를 검증하고, 거래 상태를 확인하는 데 사용했습니다." },
      { name: "SQL", mono: "SQL", status: "work", usage: "전문 처리 결과, 거래 상태, 원장 반영 여부를 직접 조회해 화면 값·인터페이스 정의서와 대조했습니다." },
      { name: "MySQL", icon: "mysql", status: "project", usage: "교육 및 개인 프로젝트의 서비스 데이터베이스로 사용했습니다." },
      { name: "MariaDB", icon: "mariadb", status: "project", usage: "교육 프로젝트에서 서비스 데이터베이스로 사용했습니다." },
    ],
  },
  {
    id: "financial",
    title: "Financial System",
    caption: "금융 도메인 실무",
    items: [
      { name: "ISO 20022", mono: "ISO", status: "work", usage: "한국은행 금융망 ISO 20022 전환 프로젝트에서 전문 송수신 처리와 상태값 매핑을 담당했습니다." },
      { name: "Financial Message Processing", mono: "MSG", status: "work", usage: "기관 간 대외 전문을 수신·검증·처리하고 응답 전문을 송신하는 흐름을 개발했습니다." },
      { name: "Account Ledger Integration", mono: "LDG", status: "work", usage: "처리된 거래를 계정계 원장에 반영하고, 전문 응답·화면·원장 값을 대조해 정합성을 확인했습니다." },
      { name: "Interface Integration", mono: "IF", status: "work", usage: "인터페이스 정의서를 기준으로 기관 간 연계 테스트를 진행하고 시스템 전환·이행을 지원했습니다." },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    caption: "화면 · 데모",
    items: [
      { name: "React", icon: "react", status: "project", usage: "PointPay Guard의 결제 흐름 데모 화면(대시보드, 승인·취소·정산)을 만들었습니다." },
      { name: "JavaScript", icon: "javascript", status: "project", usage: "교육 및 개인 프로젝트에서 화면 로직을 구현했습니다." },
      { name: "jQuery", icon: "jquery", status: "project", usage: "JSP 기반 교육 프로젝트에서 화면 이벤트와 비동기 요청을 처리했습니다." },
      { name: "styled-components", icon: "styledcomponents", status: "project", usage: "React 교육 프로젝트에서 컴포넌트 단위 스타일링에 사용했습니다." },
      { name: "Bootstrap", icon: "bootstrap", status: "project", usage: "교육 프로젝트에서 반응형 화면 레이아웃을 구성했습니다." },
    ],
  },
  {
    id: "tools",
    title: "Infrastructure / Tools",
    caption: "환경 · 협업",
    items: [
      { name: "Git", icon: "git", status: "project", usage: "개인·팀 프로젝트의 버전 관리와 협업에 사용합니다." },
      { name: "Docker", icon: "docker", status: "project", usage: "PointPay Guard에서 PostgreSQL·Redis 로컬 환경을 docker compose로 구성했습니다." },
      { name: "Linux", icon: "linux", status: "project", usage: "교육 과정에서 서버 환경 구성과 기본 운영 명령을 학습했습니다." },
    ],
  },
];

export const techStatusLabel = {
  work: "실무 사용",
  project: "프로젝트 · 학습",
} as const;

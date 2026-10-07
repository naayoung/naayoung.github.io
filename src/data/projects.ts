import type { PersonalProject, ProfessionalProject } from "./types";

// 보안상 구체적인 기관 내부 시스템명, 실제 전문 데이터는 적지 않습니다.
export const professionalProjects: ProfessionalProject[] = [
  {
    no: "01",
    title: "한국은행 금융망 ISO 20022 도입",
    period: "",
    client: "시중은행 · 대외계 / 계정계",
    tags: ["Financial System", "ISO 20022", "Oracle", "ProFrame C"],
    summary: "한국은행 금융망의 메시지 규격을 ISO 20022 기반으로 전환하는 프로젝트에 참여했습니다.",
    responsibilities: [
      "대외 금융 전문 송수신 처리",
      "전문 상태값 매핑",
      "계정계 원장 반영",
      "기관 간 연계 테스트",
      "전문 응답값 / 화면 / 원장값 검증",
      "UETR / MsgID 기반 거래 추적",
    ],
    flow: {
      title: "Verification Path",
      caption: "한 건의 거래를 끝까지 확인하는 순서",
      steps: [
        { label: "전문 응답", detail: "상태값 · 응답 코드" },
        { label: "화면 조회", detail: "거래 상태 표시값" },
        { label: "계정계 원장", detail: "실제 반영 금액 · 상태" },
      ],
      footnote: "UETR / MsgID로 동일 거래를 연결해 추적",
    },
    keyPoint: "한 건의 거래가 정상적으로 완료됐는지 전문 응답만 확인하는 것이 아니라, 화면과 계정계 원장까지 대조했습니다.",
  },
  {
    no: "02",
    title: "한국은행 원화국제결제망 구축",
    period: "",
    client: "시중은행 · 결제 / 원장",
    tags: ["Financial System", "Payment", "Oracle", "ProFrame C"],
    summary: "역외 원화 결제를 지원하는 금융 시스템 구축 프로젝트에 참여했습니다.",
    responsibilities: [
      "기관 간 전문 처리",
      "거래 원장 반영",
      "지급 취소 / 반환 처리",
      "전문 Validation",
      "시스템 전환 및 이행",
      "오류 데이터 확인",
    ],
    flow: {
      title: "Problem Solving · 취소/반환 Validation",
      caption: "앞 단계에서 실패하면 즉시 거절하고 다음 단계로 넘기지 않음",
      steps: [
        { label: "중복 거래 확인", detail: "이미 처리된 요청인가" },
        { label: "원거래 존재 확인", detail: "취소·반환 대상이 있는가" },
        { label: "거래 상태 확인", detail: "취소 가능한 상태인가" },
        { label: "금액 · 필수값 검증", detail: "원거래와 일치하는가" },
      ],
    },
    keyPoint: "검증 순서를 명확하게 만들어 잘못된 거래가 뒤 단계까지 진행되지 않도록 했습니다.",
  },
];

// 배열에 항목을 추가하면 Personal Projects 카드가 자동으로 생성됩니다.
export const personalProjects: PersonalProject[] = [
  {
    title: "PointPay Guard",
    tagline: "같은 결제 요청이 여러 번 들어와도 결제와 포인트 차감이 정확히 한 번만 일어나도록 만든 포인트 결제 시스템",
    description:
      "버튼 연타나 네트워크 재시도, 승인·정산·취소의 동시 실행처럼 결제에서 틀리면 안 되는 정합성 문제를 직접 재현하고 테스트로 검증하는 데 집중한 프로젝트입니다.",
    image: { src: "/projects/pointpay-guard.jpg", alt: "PointPay Guard 결제 이벤트 이력 화면. READY에서 APPROVING, APPROVED, SETTLED로 이어지는 상태 전이가 표시되어 있다." },
    stack: ["Java", "Spring Boot", "JPA", "PostgreSQL", "Redis", "Docker", "React", "TypeScript"],
    features: [
      {
        title: "멱등성 이중 방어",
        body: "Redis SET NX로 Idempotency Key를 선점하고, DB Unique Constraint를 최종 방어선으로 둬 중복 결제를 차단",
      },
      {
        title: "도메인 상태 전이 관리",
        body: "상태는 도메인 메서드로만 변경하고 SETTLED 이후 취소 같은 잘못된 전이를 차단, 모든 전이를 이벤트 이력으로 기록",
      },
      {
        title: "동시성 검증",
        body: "같은 키 요청 5,000건을 동시성 200으로 실행해 결제 생성 1건, 잔액 차감 1회만 발생함을 테스트로 확인",
      },
    ],
    pipeline: ["Redis Key / Lock", "Transaction", "Pessimistic Lock", "DB Unique Constraint"],
    verification: "승인 성공 1건 · 중복 요청 4,999건 · 결제 생성 1건 · 잔액 차감 1회",
    github: "https://github.com/naayoung/point-pay-guard",
  },
];

export type NavItem = { id: string; label: string };

export type Stat = { value: string; unit?: string; label: string; caption?: string };

export type Principle = { no: string; title: string; body: string; icon: "route" | "scan" | "code" };

export type TechStatus = "work" | "project";

export type TechItem = {
  name: string;
  /** simple-icons 슬러그. 없으면 monogram 배지로 표시 */
  icon?: string;
  /** icon이 없을 때 배지에 들어갈 짧은 글자 */
  mono?: string;
  status: TechStatus;
  /** 클릭 시 보여줄 실제 사용처 */
  usage: string;
};

export type TechCategory = { id: string; title: string; caption: string; items: TechItem[] };

export type FlowStep = { label: string; detail?: string };

export type ProfessionalProject = {
  no: string;
  title: string;
  /** 비워두면 표시되지 않습니다 */
  period?: string;
  client: string;
  tags: string[];
  summary: string;
  responsibilities: string[];
  flow: { title: string; caption: string; steps: FlowStep[]; footnote?: string };
  keyPoint: string;
};

export type PersonalProject = {
  title: string;
  tagline: string;
  description: string;
  image?: { src: string; alt: string };
  stack: string[];
  features: { title: string; body: string }[];
  /** 상세 모달에 표시되는 정합성 흐름 */
  pipeline?: string[];
  verification?: string;
  github?: string;
  /** 라이브 데모가 있으면 [View Project]가 데모로 연결되고, 없으면 상세 모달이 열립니다 */
  demo?: string;
};

export type CareerItem = {
  period: string;
  role: string;
  org: string;
  current?: boolean;
  summary: string;
  bullets?: string[];
  tags?: string[];
};

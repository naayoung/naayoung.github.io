# naayoung.github.io

백엔드 개발자 이나영의 포트폴리오 사이트입니다. 금융 시스템 실무 경험(ISO 20022, 금융 전문 처리, 원장 반영, 시스템 이행)을 중심으로 구성했습니다.

**Stack** · React · Vite · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide · Simple Icons

## 실행

```bash
npm install
npm run dev       # 개발 서버 http://localhost:5173
npm run build     # 타입 체크 + 프로덕션 빌드 (dist/)
npm run preview   # 빌드 결과 미리보기
```

## 내용 수정

화면 코드를 건드리지 않고 `src/data/`의 파일만 수정하면 됩니다.

| 파일 | 내용 |
| --- | --- |
| `src/data/profile.ts` | 이름, 이메일, GitHub, Hero 문구, About, 숫자 통계, How I Work, Contact |
| `src/data/projects.ts` | 실무 프로젝트(Professional), 개인 프로젝트(Personal) — 배열에 추가하면 카드 자동 생성 |
| `src/data/tech.ts` | 기술 스택 카테고리, 실무/학습 구분, 클릭 시 보이는 사용처 설명 |
| `src/data/career.ts` | 경력 Timeline, 이전 경력과의 연결(Through-line) |

- 개인 프로젝트 이미지는 `public/projects/`에 넣고 `image.src`에 `/projects/파일명`으로 적습니다.
- 개인 프로젝트에 `demo` URL을 넣으면 [View Project]가 데모로 연결되고, 없으면 상세 모달이 열립니다.
- 새 기술 아이콘은 `src/components/ui/BrandIcon.tsx`에 simple-icons 아이콘을 추가합니다. 아이콘이 없으면 `mono` 글자 배지로 표시됩니다.

## 구조

```
src/
  components/   Header, Hero, HeroConsole, About, WorkStyle, ProfessionalProjects,
                TechStack, PersonalProjects, Career, Contact, Footer, ui/
  data/         profile.ts, projects.ts, tech.ts, career.ts, types.ts
  hooks/        useTheme, useActiveSection
public/         favicon, OG 이미지, 프로젝트 이미지
```

## 배포 (GitHub Pages)

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 빌드 후 GitHub Pages에 배포합니다.

최초 1회 설정: 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 선택하세요.

단일 페이지(앵커 스크롤)라서 별도의 SPA 라우팅 설정은 필요하지 않습니다. `<username>.github.io`가 아닌 다른 이름의 저장소로 배포한다면 `vite.config.ts`의 `base`를 `"/<repo-name>/"`으로 바꿔주세요.

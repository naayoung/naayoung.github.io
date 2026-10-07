# naayoung.github.io

이나영의 개인 포트폴리오 사이트입니다. 빌드 과정 없이 순수 HTML/CSS/JS로 만들어 GitHub Pages로 바로 배포됩니다.

## 내용 수정하기

사이트에 보이는 모든 텍스트(소개, 기술 스택, 경력, 프로젝트, 링크)는 `assets/data.js` 한 파일에서 수정합니다.

## 구조

- `index.html` — 페이지 뼈대
- `assets/data.js` — 사이트 내용
- `assets/style.css` — 스타일 (라이트/다크 테마)
- `assets/main.js` — 내용 렌더링, 테마 전환, 스크롤 애니메이션

## 로컬에서 보기

```bash
python3 -m http.server 8000
# http://localhost:8000
```

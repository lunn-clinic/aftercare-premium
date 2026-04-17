# 룬피부과 사후관리 가이드 — 인수인계 문서

> 직원이 이 문서만 보고도 **텍스트 수정 → 미리보기 → 배포**까지 할 수 있도록 작성했습니다.

---

## 1. 이 프로젝트는 무엇인가?

룬피부과에서 **시술받은 환자에게 주는 명함 QR 전용 사후관리 가이드 웹사이트**입니다.

- 환자가 구매한 **케어 라인**(Basic / Premium)에 따라 다른 URL로 연결
- **한국어 / English / 中文** 3개 언어 지원
- 환자가 자기 시술을 고르면 시기별 회복 가이드 표시

---

## 2. URL 구조 (명함 QR 인쇄용)

```
/                         → 언어 선택 페이지
/ko                       → 한국어 · 케어 라인 선택
/ko/basic                 → 한국어 · 베이직 라인 (7개 시술)
/ko/premium               → 한국어 · 프리미엄 라인 (4개 시술)
/ko/basic/botox           → 한국어 · 베이직 · 보톡스 개별 가이드
/ko/premium/ulthera       → 한국어 · 프리미엄 · 울쎄라 개별 가이드

/en, /en/basic, /en/basic/botox, ...
/zh, /zh/basic, /zh/basic/botox, ...
```

### 명함 QR 발급 예시

| 환자 유형 | QR 인쇄용 URL |
|---|---|
| 한국인 · 베이직 구매 | `https://도메인/ko/basic` |
| 한국인 · 프리미엄 구매 | `https://도메인/ko/premium` |
| 중국인 · 베이직 | `https://도메인/zh/basic` |
| 중국인 · 프리미엄 | `https://도메인/zh/premium` |
| 영어권 · 베이직 | `https://도메인/en/basic` |
| 영어권 · 프리미엄 | `https://도메인/en/premium` |

---

## 3. 시술 티어 분류 (현재)

### Basic Line (7개)
| slug | 시술명 | 카테고리 |
|---|---|---|
| botox | 보톡스 | 주사·볼륨 |
| filler | 필러 | 주사·볼륨 |
| collagen-volume-basic | 콜라겐 볼륨 (기본) | 주사·볼륨 |
| pigment-laser | 색소 레이저 | 레이저 |
| co2-laser | CO2 레이저 | 레이저 |
| skin-booster | 스킨부스터 | 재생·관리 |
| skincare | 피부관리 | 재생·관리 |

### Premium Line (4개)
| slug | 시술명 | 카테고리 |
|---|---|---|
| ulthera | 울쎄라 | 리프팅·타이트닝 |
| lifting-laser | 리프팅 레이저 (써마지·온다) | 리프팅·타이트닝 |
| thread-lifting | 실 리프팅 | 리프팅·타이트닝 |
| collagen-volume-bio | 바이오자극 볼륨 (쥬베룩·스컬트라·에스테필) | 주사·볼륨 |

### 티어 재분류가 필요할 때

`src/data/treatments-meta.ts` 열고 `tier` 필드를 `"basic"` 또는 `"premium"`으로 변경. 나머지는 자동 반영됩니다.

---

## 4. 파일 구조 (직원이 건드릴 영역만)

```
src/data/
├── treatments-meta.ts   ← 티어·카테고리·재방문 주기 (숫자 메타)
├── treatments-ko.ts     ← 한국어 시술 내용 11개
├── treatments-en.ts     ← 영어 시술 내용 11개 (⚠️ AI 초안 — 감수 필요)
├── treatments-zh.ts     ← 중국어 시술 내용 11개 (⚠️ AI 초안 — 감수 필요)
├── i18n.ts              ← UI 버튼·타이틀 번역 사전
└── types.ts             ← 타입 정의 (건드리지 말 것)
```

**디자인/레이아웃/코드는 건드릴 필요 없음.** 텍스트만 위 5개 파일에서 수정합니다.

---

## 5. 감수가 필요한 부분 (⚠️ 중요)

### `treatments-en.ts` 와 `treatments-zh.ts`

두 파일은 AI 번역 **초안**입니다. 반드시 다음을 감수하세요.

1. **의학 용어 정확성**
   - 예: "Bio-Stimulator Volume" vs "Biostimulator Filler" — 업계에서 통용되는 표기로 통일
   - 중국어의 경우 "鼻唇沟" 같은 부위명·"皮秒" 같은 장비명이 중국 시장에서 사용되는 표현인지 확인

2. **의료 광고법 / 규제 대응**
   - 미국·캐나다는 FDA 기준으로 "Lifting Laser"가 Thermage·ONDA를 포함해도 되는지
   - 중국은 医疗广告法에 따라 효과 단정 표현 ("12年" 대신 "12~18 个月" 유지) 확인

3. **문화적 뉘앙스**
   - 한국어 "박형권 원장" → 영어·중국어에서 이름 표기 방식 ("Dr. Park" vs "Park Hyungkwon, MD")
   - 현재는 "Dr. Park Hyungkwon" / "朴衡權院长" 로 초안 작성됨

4. **제품명 / 장비명**
   - Juvelook·Sculptra·Esthefil 같은 제품은 국가별로 허가 상태가 다름 → 해당 국가에서 승인된 것만 언급

감수 후 해당 파일의 상단 주석 `⚠️ AI translation draft` 부분을 `✅ Reviewed by [이름] [날짜]`로 교체해 주세요.

---

## 6. 텍스트 수정 방법 (비개발자용)

### 예시: 보톡스 한국어 설명 수정

1. VS Code 또는 메모장으로 `src/data/treatments-ko.ts` 열기
2. `"botox":` 찾기
3. 수정하고 싶은 텍스트 (예: `heroLine2`) 변경
4. 저장
5. 브라우저 새로고침 → 즉시 반영

### 예시: UI 버튼 문구 수정 (예: "View Guide")

1. `src/data/i18n.ts` 열기
2. `en:` 블록에서 `viewGuide: "View Guide"` 찾기
3. 원하는 문구로 수정 후 저장

### 주의사항

- **따옴표**(`"`) 안의 내용만 바꾸세요
- 쉼표(`,`) 중괄호(`{ }`) 대괄호(`[ ]`)는 건드리지 마세요
- 줄바꿈은 `\n` 두 글자로 표기 (실제 Enter 키 아님)
- 수정 후 브라우저에서 확인: 에러가 나면 되돌리기(`Cmd+Z`)

---

## 7. 로컬에서 미리보기 — 5개 포트 체계 (명함 QR 1:1 매핑)

### 7-1. 5개 포트 한꺼번에 띄우기 (운영 권장)

```bash
cd ~/Desktop/곽현수/개발/lunn-aftercare-cards
npm run build      # 한 번만 (코드/텍스트 변경 시 재실행)
npm run start:all  # 5개 포트 동시 구동
```

### 7-2. 포트 매핑표

| 포트 | 자동 진입 | 용도 | 담당 |
|---|---|---|---|
| **4100** | `/` 언어 선택 화면 | 직원 전체 미리보기 · 운영용 | 총괄 |
| **4101** | `/ko/basic` (7개 시술) | 한국인 · 베이직 구매자 명함 QR | 한국어 담당 |
| **4102** | `/ko/premium` (4개 시술) | 한국인 · 프리미엄 구매자 명함 QR | 한국어 담당 |
| **4103** | `/en/premium` (**11개 시술 전부**) | 영어권 환자 명함 QR | 영어 담당 |
| **4104** | `/zh/premium` (**11개 시술 전부**) | 중국인 환자 명함 QR | 중국어 담당 |

> **정책 (현재 확정)**
> - **한국어**: 베이직(7) / 프리미엄(4) 분리 유지 — 환자 구매 라인에 맞춰 명함 QR 분기
> - **영어·중국어**: 티어 구분 없이 **프리미엄 허브 하나에 11개 시술 전부** 노출. 외국인 환자는 어떤 시술을 받았든 같은 URL로 진입 → 자기 시술 클릭해서 확인
> - `/en`, `/en/basic` 으로 들어와도 자동으로 `/en/premium` 으로 리디렉트 (중국어도 동일)
> - 각 시술 상세 페이지의 **시너지(추천) 섹션은 그대로 유지** — 시술별로 이어하면 좋은 조합 제안

### 7-3. 개별 포트만 띄우고 싶을 때

```bash
npm run dev:home         # 4100 (언어 선택 · 개발용)
npm run dev:ko-basic     # 4101
npm run dev:ko-premium   # 4102
npm run dev:en           # 4103
npm run dev:zh           # 4104

# 또는 production 모드 (빌드 후)
npm run start:home / start:ko-basic / start:ko-premium / start:en / start:zh
```

> **중요**: Next.js 제약상 `npm run dev:*` 는 동시에 **하나만** 실행 가능합니다.
> 5개 동시 구동은 반드시 `npm run start:all` (production 모드)로 진행하세요.

### 7-4. 서버 전체 끄기

```bash
# concurrently 실행 터미널에서 Ctrl+C
# 또는 강제:
pkill -f "next start"
```

### 7-5. 콘텐츠 수정 후 반영

```bash
npm run build       # 코드/텍스트 변경 사항 반영
pkill -f "next start"
npm run start:all   # 재구동
```

### 7-6. 실제 배포 시 권장 구조

로컬은 5개 포트로 운영해도 되지만, 실서비스에서는 **단일 도메인** 하나에 5개 URL 을 두는 게 표준입니다. Vercel 배포 후 도메인 `lunn-aftercare.com` 한 개만 구입하면 됩니다.

| 명함 QR 인쇄용 URL (배포 후) |
|---|
| `https://lunn-aftercare.com/ko/basic` |
| `https://lunn-aftercare.com/ko/premium` |
| `https://lunn-aftercare.com/en` |
| `https://lunn-aftercare.com/zh` |

---

## 8. 배포 (Vercel 무료 배포)

1. https://vercel.com 가입 (GitHub 연동)
2. 이 폴더를 GitHub에 업로드
3. Vercel에서 `New Project` → GitHub 저장소 선택
4. **Build Command**를 `npm run build` 그대로
5. 배포 완료 후 받은 URL을 명함 QR에 사용

**도메인 연결**
- 구매한 도메인(예: lunn-aftercare.com)을 Vercel에서 연결
- 명함 QR은 `https://lunn-aftercare.com/ko/basic` 같은 형식으로 인쇄

---

## 9. 새 시술 추가 방법

### 예: "보톡스 바디" 시술 추가

1. `treatments-meta.ts` 맨 아래에 추가:
   ```ts
   { slug: "botox-body", tier: "basic", categoryKey: "injection", rebookingMonths: 6 },
   ```

2. `treatments-ko.ts`, `treatments-en.ts`, `treatments-zh.ts` 3개 파일 모두에 `"botox-body": { ... }` 블록 추가

3. 다른 시술 블록을 복사해서 구조만 맞추면 됨 (필드 이름은 똑같이)

4. 저장 → 브라우저 새로고침

---

## 10. 자주 쓰는 운영 팁

### Q. 티어를 변경하고 싶어요 (예: 보톡스를 프리미엄으로)
A. `treatments-meta.ts`에서 `tier: "basic"` → `tier: "premium"` 변경. 끝.

### Q. 시술을 숨기고 싶어요 (삭제는 아니고 임시 비노출)
A. `treatments-meta.ts`에서 해당 줄을 **`//`로 주석 처리** 하면 됨.
```ts
// { slug: "skincare", tier: "basic", ... },
```

### Q. 병원 전화번호/주소가 바뀌었어요
A. 현재 하드코딩된 부분 없음. 필요 시 `i18n.ts`에 추가 후 `footerDisclaimer` 등에서 참조.

### Q. 로고를 넣고 싶어요
A. `public/` 폴더에 로고 파일(예: `logo.svg`)을 넣고, `PageBanner.tsx` 상단에서 `<Image>` 태그로 표시.

---

## 11. 다음 단계 로드맵

- [ ] 영어·중국어 번역 의료진 감수
- [ ] 로고·병원 공식 컬러 검토
- [ ] 실제 도메인 구매·Vercel 배포
- [ ] QR 코드 생성 후 명함 인쇄 테스트
- [ ] 환자 10명 대상 UX 테스트
- [ ] (선택) 일본어 추가 → `ja` 폴더 신규 생성
- [ ] (선택) 번체 중문 추가 → `zh-TW` 추가

---

## 12. 긴급 연락

- 개발자: (담당자 연락처 기재)
- 배포 플랫폼 계정: (관리자 이메일 기재)

---

*마지막 업데이트: 초기 셋업 완료 · 영·중 번역 AI 초안 상태*

# 원티드 프리온보딩 프론트엔드 3주차 과제 


## 🎯 과제 

- 목표 : 검색창 및 검색어 추천 기능 구현 (feat: [한국임상정보](https://clinicaltrialskorea.com/) 사이트 검색영역 클론)
- 기간 : 2023. 01. 10 ~ 2023. 01. 13

<br/>

## ✨ 프로젝트 실행 방법

### 클라이언트

```
git clone https://github.com/preonbording-5/pre-onboarding-8th-3-5

npm install
npm start
```

### 서버

```md
git clone https://github.com/walking-sunset/assignment-api_8th

npm install
npm start 
```
* `localhost:4000`에 API 서버를 실행해 주세요.


<br/>

## 📌 배포 링크
[클라이언트 배포 링크]()

<br/>

## 📁 src 폴더 구조

```
src
 ┣ lib
 ┃ ┣ images
 ┃ ┃ ┣ logo.png
 ┃ ┃ ┗ search_icon.svg
 ┃ ┗ type
 ┃ ┃ ┗ 
 ┣ ui
 ┃ ┣ components
 ┃ ┃ ┣ common
 ┃ ┃ ┃ ┗ NavBar.tsx
 ┃ ┃ ┗ layout
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┣ Layout.tsx
 ┃ ┃ ┃ ┗ Page.tsx
 ┃ ┣ core
 ┃ ┃ ┗ GlobalStyles.ts
 ┃ ┗ pages
 ┃ ┃ ┗ SearchPage.tsx
 ┣ App.tsx
 ┗ index.tsx
```

<br/>

## ✅ Best Practice 선정 및 개발 과정

[1. API 호출별 로컬 캐싱]()    
[2. 불필요 API 요청 방지]()    
[3. 키보드로 추천 검색어 이동]()    

<br/>

### ✔️ Commit Message Convention

| Prefix   | Description                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------ |
| build    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)    |
| ci       | Changes to our CI configuration files and scripts                                                      |
| docs     | Documentation only changes                                                                             |
| feat     | A new feature                                                                                          |
| fix      | A bug fix                                                                                              |
| perf     | A code change that improves performance                                                                |
| refactor | A code change that neither fixes a bug nor adds a feature                                              |
| style    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |
| test     | Adding missing tests or correcting existing tests                                                      |

<br/>

## 💪 팀원 소개

| 이름      | 개인 Repository 주소                      |
| --------- | ----------------------------------------- |
| 박인      | https://github.com/innie0526              |
| 오신정    | https://github.com/ShinjungOh             |
| 이민지    | https://github.com/vanillovin             |
| 이정우    | https://github.com/azerose                |
| 황성택    | https://github.com/Seongtaek-H            |

<br/>

## 🛠 기술 스택 및 라이브러리
```
React, TypeScript, styled-components, ESLint, Prettier
```

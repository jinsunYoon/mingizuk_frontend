# **Mingizuk**

<a href="http://mingizuk.com/" target="_blank">![최종발표 ppt](https://user-images.githubusercontent.com/49370511/144515247-796bad51-8e96-47b6-aae8-bd89a9937d67.jpg)</a>
<br />

## 🐤 <strong>밍기적</strong>을 소개합니다.</h1>

저희 밍기적은 조금의 운동이라도 큰 결심이 필요한 분들을 위해 제작이 되었습니다. <br/>
밍기적은 '작은 움직임이라도 그건 기적이다!' 라며 격려하고 북돋아주며 최소한의 운동을 장려합니다.

### FrontEnd

-   <a href="https://github.com/kyuung?tab=repositories" target="_blank">이경아</a>
-   <a href="https://github.com/sunysty" target="_blank">석지선</a>
-   <a href="https://github.com/jinsunYoon" target="_blank">윤진선</a>

🐤 [Mingizuk 링크](http://mingizuk.com/)

🎥 [Youtube 링크](https://www.youtube.com/watch?v=y7q-AGfavoc)

📚 [Notion 링크](https://twilight-cardigan-0a3.notion.site/9cf811e7752d49b8a4be427d6dd16970)

🗂️ [Backend Repo 링크](https://github.com/hanghae99-team6-actualProject/backend)

📝 [Wireframe 링크](https://www.figma.com/file/b7D016ukiDg0kNX8c4md0U/%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=1246%3A3396)

<h4>Usage</h4>

<img src="https://img.shields.io/badge/PWA-4285F4?style=for-the-badge&logo=Google Chrome&logoColor=white">
<img src="https://img.shields.io/badge/Create React App-09D3AC?style=for-the-badge&logo=CreateReactApp&logoColor=white">
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
<img src="https://img.shields.io/badge/Redux tool kit-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
<img src="https://img.shields.io/badge/Axios-6F02B5?style=for-the-badge&logo=Axios&logoColor=white">
<img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=Socket.io&logoColor=white">
<img src="https://img.shields.io/badge/moment-64BAFF?style=for-the-badge&logo=moment&logoColor=white">
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier=white">
<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass=white">
<img src="https://img.shields.io/badge/clsx-41454A?style=for-the-badge&logo=clsx=white">
<img src="https://img.shields.io/badge/Styled components-DB7093?style=for-the-badge&logo=styledComponents=white">
<img src="https://img.shields.io/badge/recharts-A100FF?style=for-the-badge&logo=recharts=white">
<img src="https://img.shields.io/badge/IcoMoon react-825794?style=for-the-badge&logo=IcoMoon=white">
<img src="https://img.shields.io/badge/sweetalert2-440AEF0?style=for-the-badge&logo=sweetalert=white">
<img src="https://img.shields.io/badge/aws-232F3E?style=for-the-badge&logo=aws&logoColor=white">
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white">
<img src="https://img.shields.io/badge/Lighthouse-F44B21?style=for-the-badge&logo=Lighthouse&logoColor=white">
<img src="https://img.shields.io/badge/cra bundle analyzer-00A98F?style=for-the-badge&logo=cra-bundle-analyzer&logoColor=white">
<img src="https://img.shields.io/badge/dotenv-E8E8E8?style=for-the-badge&logo=dotenv&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

<br/>

## 목차

[1. 개요](#개요)

[2. 프로젝트 구조](#프로젝트-구조)

[3. 프로젝트 주요 기능](#프로젝트-주요-기능)

[4. Mingizuk Page](#Mingizuk-Page)

<br/>
<br/>

<hr/>
<br/>

## 개요

-   프로젝트 이름: **Mingizuk**

-   기획 & 개발기간 : 2021-10-23 ~ 2021-12-03

-   개발 언어 : JavaScript

-   개발 라이브러리 : React.js

-   협업 툴 : git / Notion / figma / slack

-   개발 인원 : 8명

    -   **Front end** : **이경아, 석지선, 윤진선**
    -   **Back end** : **김영우, 양주혁, 임성찬**
    -   **Designer** : **김예진, 김수빈**

<br/>
<hr/>
<br/>

## 프로젝트 구조

![KakaoTalk_Photo_2021-12-03-08-39-02](https://user-images.githubusercontent.com/49370511/144520097-e9f661c4-b89b-4d63-880e-e729ab309756.jpeg)

## 프로젝트 주요 기능

### 🌱 주요 기능

1. 로그인, 회원가입, 소셜로그인 ( 구글, 네이버, 카카오 )
2. 캐릭터 성장, 루틴 (운동) 기능
3. 모임 (게시판) 기능
4. 유저 활동 기록
5. 유저 피드백과 그에 따른 향후 기능 발전 계획

<hr/>

### ① 로그인, 회원가입, 소셜로그인

-   access token과 refresh token을 사용, 만료 시 자동으로 요청을 보내 토큰 업데이트 하는 방식을 사용하였습니다.
-   서버에서 passport 모듈을 이용한 소셜 로그인을 하였습니다.
-   로그인이 되어있지 않아도 접근할 수 있는 Public Router / 로그인시에만 접근할 수 있는 Private Router 분리를 분리하였습니다.
    <br/><br/>

<hr/>

### ② 캐릭터 성장, 루틴 (운동) 기능

> **커스텀 루틴 / 프리셋 루틴**

-   원하는 동작의 횟수를 조정하여 루틴을 커스텀합니다.
-   밍기적에서 제공하는 추천 루틴을 사용할 수도 있습니다.
    <br/><br/>

> **메인 화면 (캐릭터, 루틴 수행)**

-   가장 선호하는 루틴을 메인 루틴으로 설정합니다.
-   메인 화면에서 운동을 완료하여 **경험치**를 받아 캐릭터를 성장 시킵니다.
-   일정 경험치를 획득한 캐릭터는 레벨업을 하고 최종 성장한 캐릭터는 마이페이지 캐릭터 콜렉션에 저장됩니다.
-   루틴은 한 동작 완료 시 중단했다가 추후에 이어서 할 수 있으며, 루틴을 완료하면 재시작할 수 있습니다.

<hr/>

### ③ 모임 (게시판) 기능

> **게시글 필터링, 정렬**

-   **지역기반**
    -   자신이 사는 지역의 모임글만 모아 볼 수 있습니다.
    -   selete-box를 통해 원하는 시군구를 골라, 서버에 데이터를 요청하고 response를 유저에게 보여줍니다.
-   **좋아요순** : 인기 많은 게시물순으로 정렬합니다.
    -   like가 많은 순서대로 sort함수를 사용해서 post_list에 담긴 값들을 정렬, 리렌더링 해 유저에게 보여줍니다.

> **위치, 날짜 기반 글쓰기**

-   지역이 중요한 데이터인 만큼, 유저가 좀 더 쉽게 위치를 선택할 수 있도록 **카카오 지도 검색 api**를 사용하였습니다.
-   해당 모임의 **날짜를 설정**하여 글을 쓸 수 있습니다. 날짜가 지나면 모임에 참여할 수 없습니다.

> **좋아요, 댓글 기능**

-   맘에 드는 글을 좋아요 할 수 있고, 댓글도 남길 수 있습니다.

> **모임 참여, 모임 떠나기 기능**

-   유저는 맘에 드는 모임에 참여 버튼을 눌러 참여할 수 있습니다.
-   참여 버튼을 누르면, 채팅방에 참여할 수 있는 권한이 주어집니다.
-   더 이상 그 모임에 남아있고 싶지 않으면 떠나기 기능을 사용하여 모임을 떠날 수 있습니다.

> **채팅 기능**

-   **socket.io** 를 사용하여 구현하였습니다.
-   댓글만으로는 유저들끼리 소통이 어려울 것 같다고 판단하여, 각 모임에 **채팅방**을 개설할 수 있게 하였습니다.
-   실시간 채팅이지만, 유저가 보낸 채팅 목록은 계속 그 채팅방에 남아있습니다.
-   내가 모임의 host라면, **공지**를 등록 / 수정 / 삭제 할 수 있습니다.
-   불필요한 데이터를 줄이기 위해, 모임 기간이 종료되면 해당 채팅방도 사라집니다.

<hr/>

### ④ 유저 활동 기록

> **마이페이지**

-   **내가 개설한 모임** : 모임 게시판에서 내가 개설한 모임을 모아볼 수 있습니다.
-   **내가 좋아요한 모임** : 모임 게시판에서 내가 좋아요한 모임을 모아볼 수 있습니다.
-   **내가 참여한 모임** : 모임 게시판에서 내가 참여한 모임을 모아볼 수 있습니다.
-   **내가 댓글단 모임** : 모임 게시판에서 내가 단 댓글들을 모아볼 수 있습니다.

> **히스토리**

-   rechart 라이브러리를 사용하여 바 그래프를 구현하였습니다.
-   날짜 기반으로, 내가 가입한 날짜부터 오늘까지의 통계를 그래프로 보여줍니다.

> 메인 - **해비트래커**

-   이번 달 기준으로, 내가 운동을 한 날에 회색 박스가 보라색으로 채워집니다.
-   깃허브에 잔디가 심어지듯, 오늘 내가 한 동작이라도 했다면 작은 박스에 색이 칠해집니다.

<hr/>

### ⑤ 유저 피드백과 그에 따른 향후 기능 발전 계획

-   **프로필 사진**

        -   각 유저가 현재 키우고 있는 캐릭터 이미지를 모임 게시판에서도 보이기

-   **알림 기능**

        - 운동을 일정 시간 안하면 알림 울리기
        - 내가 쓴 게시글에 누군가 참여하면 알리 울리기
        - 채팅 알림

-   **액션 종류, 루틴 프리셋 종류 추가**

<br />
<hr/>
<br />

# Mingizuk Page

<div align=center>
<h2>루틴</h2><img align=top src="https://answer-c.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2021-12-03+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+3.49.31.png"  width="205" height="400"/>
<img align=top src="https://answer-c.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2021-12-03+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+3.49.48.png"  width="210" height="400"/><div>
<br />
<br />
<div align=center>
<h2>모임 게시판</h2><img align=top src="https://answer-c.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2021-12-03+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+3.52.16.png"  width="210" height="400"/>
<img align=top src="https://answer-c.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2021-12-03+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+3.52.46.png"  width="205" height="400"/><div>
<br />

<br />
<div align=center>
<h2>Habit Tracker & Graph</h2>
  <img align=top  width="240" height="135" src="https://answer-c.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2021-12-03+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+3.35.32.png"/><img align=top src="https://answer-c.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2021-12-03+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+3.35.40.png"  width="260" height="500"/>
</div>

<br />
<br />

<div align=center>
  <h2>다양한 로그인 방식이 제공됩니다.</h2>
  <br />
  <div align=center>
  <img align=top src="https://answer-c.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2021-12-03+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+3.34.51.png"  width="240" height="500"/><img align=top src="https://answer-c.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2021-12-03+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+3.39.53.png"  width="240" height="500"/>
</div>
</div>
<br />
<br />
<br />
<h1 align=left>User Flow Chart</h1>
<img src="https://answer-c.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2021-12-03+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+3.36.11.png">

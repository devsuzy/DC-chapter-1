# Chapter 1 Web APIs 

### Web APIs란?

- http / https 차이? 
: https는 보안 처리, 네트워크 전송을 암호키를 통해 보안처리가 되어있음 

### 브라우저 좌표

- Element.getBoundingClientRect()
: 요소의 너비와 높이, left / top / right / bottom 값을 알 수 있음

- 주의! 좌표 값은 항상 (0,0) 부터 계산됨 (right, bottom도 마찬가지)

1. Page x,y : 전체 문서의 시작점 부터의 좌표값
2. Client x,y : 현재 보여지는 브라우저 윈도우의 좌표값

### Scroll 함수

- window.scroll 
(scrollBy, scrollTo, scrollIntoVIew …)

### 자바스크립트 load 출력 순서

- defer > Event (DOMContentLoaded) > Event (load)

- defer, DOMContentLoaded : html만 완료 되면 호출
- load : css, images 등 모든 리소스가 출력 된 다음 호출 

### 실전 문제 1 - 마우스 이동에 따라 좌표 찾기

1. Event - mousemove
2. clientX, clientY

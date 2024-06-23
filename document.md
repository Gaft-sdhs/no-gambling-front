# 게임 설명

> 앞서 이 게임의 설명은 아래 코드를 기준으로 설명하고 있습니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consolidated Page</title>
    <style>
        :root {
            font-size: 16px; /* 1rem = 16px */
        }
        body {
            background-color: #161921;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: 'Arial', sans-serif;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 1.25rem; /* 20px */
            border: 0.125rem solid #444; /* 2px */
            border-radius: 0.625rem; /* 10px */
            box-shadow: 0 0 0.9375rem rgba(0, 0, 0, 0.5); /* 15px */
            background-color: #161921;
        }
        .timer {
            font-size: 1.5rem; /* 24px */
            margin-bottom: 1.25rem; /* 20px */
        }
        .timer span {
            color: #FF4136;
        }
        .main-content {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 1.25rem; /* 20px */
        }
        .gambling-area {
            width: 18.75rem; /* 300px */
            height: 18.75rem; /* 300px */
            background-color: #ffffff;
            border: 0.125rem solid #444; /* 2px */
            border-radius: 0.625rem; /* 10px */
            margin-right: 1.25rem; /* 20px */
            position: relative;
        }
        .gambling-list {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
        .circle {
            width: 3.75rem; /* 60px */
            height: 3.75rem; /* 60px */
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem; /* 24px */
            color: white;
            font-weight: bold;
            margin: 0.625rem 0; /* 10px */
            box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.5); /* 10px */
        }
        .circle:nth-child(1) {
            background-color: #2ECC40;
        }
        .circle:nth-child(2) {
            background-color: #FF4136;
        }
        .circle:nth-child(3) {
            background-color: #0074D9;
        }
        .circle:nth-child(4) {
            background-color: #B10DC9;
        }
        .betting-area {
            display: flex;
            justify-content: center;
            gap: 0.625rem; /* 10px */
        }
        .bottom-box {
            width: 5rem; /* 80px */
            height: 5rem; /* 80px */
            border-radius: 0.625rem; /* 10px */
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem; /* 24px */
            color: white;
            font-weight: bold;
            background-color: #161921;
            border: 0.125rem solid #444; /* 2px */
            box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.5); /* 10px */
            transition: transform 0.2s, box-shadow 0.2s;
            cursor: pointer;
            user-select: none;
        }
        .bottom-box:nth-child(1) {
            background-color: #FF4136;
        }
        .bottom-box:nth-child(2) {
            background-color: #0074D9;
        }
        .bottom-box:nth-child(3) {
            background-color: #2ECC40;
        }
        .bottom-box:nth-child(4) {
            background-color: #FF851B;
        }
        .bottom-box:active {
            transform: scale(0.9);
            box-shadow: 0 0 0.9375rem rgba(0, 0, 0, 0.8); /* 15px */
        }
        @keyframes reveal {
            0% { transform: rotate(0deg); opacity: 0; }
            100% { transform: rotate(360deg); opacity: 1; }
        }
        .reveal-number {
            animation: reveal 2s ease-in-out;
        }
        .bars {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 1.25rem; /* 20px */
        }
        .bar {
            height: 0.625rem; /* 10px */
            border-radius: 0.3125rem; /* 5px */
            transition: width 0.5s ease-in-out;
        }
        .bar:nth-child(1) {
            background-color: #FF4136;
        }
        .bar:nth-child(2) {
            background-color: #2ECC40;
        }
        .bar:nth-child(3) {
            background-color: #0074D9;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="timer">
            Timer: <span>00:00</span>
        </div>
        <div class="main-content">
            <div class="gambling-area"></div>
            <div class="gambling-list">
                <div class="circle">rand</div>
                <div class="circle">1</div>
                <div class="circle">2</div>
                <div class="circle">3</div>
            </div>
        </div>
        <div class="bars">
            <div class="bar" id="bar1"></div>
            <div class="bar" id="bar2"></div>
            <div class="bar" id="bar3"></div>
        </div>
        <div class="betting-area">
            <div class="bottom-box" style="background-color: #FF4136;">+</div>
            <div class="bottom-box" style="background-color: #0074D9;">-</div>
            <div class="bottom-box" style="background-color: #2ECC40;">=</div>
            <div class="bottom-box" style="background-color: #FF851B;">res</div>
        </div>
    </div>
    <script>
        function updateBars() {
            let value1 = Math.random() * 50;
            let value2 = Math.random() * (50 - value1);
            let value3 = 100 - value1 - value2;

            document.getElementById('bar1').style.width = value1 + '%';
            document.getElementById('bar2').style.width = value2 + '%';
            document.getElementById('bar3').style.width = value3 + '%';
        }
        setInterval(updateBars, 1000);
    </script>
</body>
</html>

```

## 간단한 게임의 흐름
> 일단 자세한 것 보다 게임의 흐름을 알려드릴게요

이 게임은 임의에 값 3개의 합을 위에 숫자를 보고 +,-,=에 배팅하여 돈을 따는 게임 입니다.<br>
한 게임당 5분의 시간이 주어집니다.<br>
5분의 게임 시간이 끝나면 2분의 결과 확인 시간이 주어집니다.

## 5분동안의 게임 (자세하게 구현 할 것)
1. 타이머
```html
<span>00:00</span> 이 부분에 게임 시작 5분에 타이머, 그리고 결과 확인의 2분의 타이머가 표시됩니다. 1분 이하의 시간이 되면 빨간색으로 표시되며 깜빡여야 합니다.
```

2. 임의에 값들 <br>
```html
  <div class="circle">rand</div>
  <div class="circle">1</div>
  <div class="circle">2</div>
  <div class="circle">3</div>
  <div class="bottom-box" style="background-color: #FF851B;">res</div>
```
지금부터 이 값들이 의미하는 것을 알려드리겠습니다.<br>
"rand" : 1부터 30까지의 랜덤 값이 배정되며 사용자에게 게임이 시작되면 표시됩니다. (사용자는 이 값을 보고 나머지 1,2,3의 합을 예상하여 배팅합니다.)<Br>
<br>
"1,2,3" : 각각 1부터 9까지의 랜덤 값이 배정되며 게임이 끝나면 innertext 같은 속성으로 랜덤 값을 알려줍니다.
"1,2,3"의 값은 1초마다 변하며 게임이 끝날때 더해 res에 표시하고 사용자에게 알려줍니다.
"res" " 1,2,3의 랜덤 값을 모두 더한 값 입니다. 게임이 끝나면 innertext 같은 속성으로 랜덤 값을 알려줍니다.

## 배팅
```html
  <div class="bottom-box" style="background-color: #FF4136;">+</div>
  <div class="bottom-box" style="background-color: #0074D9;">-</div>
  <div class="bottom-box" style="background-color: #2ECC40;">=</div>
  <div class="bottom-box" style="background-color: #FF851B;">res</div>
```
"+" : 사용자가 rand값을 보고 res값을 예상 할 때 res값이 rand값 보다 더 크다면 걸었던 금액에 1~2배(랜덤)으로 돈을 따게 됩니다.<br>

"-" : 사용자가 rand값을 보고 res값을 예상 할 때 res값이 rand값 보다 더 작다면 걸었던 금액에 1~2배(랜덤)으로 돈을 따게 됩니다.<br>
"=" : rand 값과 res값이 같을 경우 걸었던 금액의 3배를 얻습니다.



## 모달창
"+,-,=" 버튼을 누르면 배팅할 수 있는 모달창이 가운데 나온다<br>
이는 html,css로 구현하며 현재 사용자의 이름, 자산과 돈을 걸수 있는 인터페이스가 있다.<br>
한번 버튼을 눌러 배팅을 하면 게임이 끝나기 전 까지 배팅을 할 수 없으며 모달창과 버튼이 눌러지지 않도록 한다.

## user
사용자 class를 만들어서 관리한다.<br>
사용자의 이름, 자산, 게임 횟수를 로컬 스토리지로 <br>
기본 사용자 이름은 "user", 기본 자산은 1000000

## 구현 규칙
- 객체지향 방식으로
- 각 기능을 함수로
- 게임의 취약점을 보안해서
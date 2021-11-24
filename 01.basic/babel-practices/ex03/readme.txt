Bable Pugin

라이브러리 설치
$ npm i -D @babel/core @babel/cli
 
 플러그인 적용
1. 블록 스코프 변수 플러그인(@babel/plugin-trasform-block-scoping)
$ npm i -D @babel/plugin-trasform-block-scoping
$ npx babel src/ex.js -o dist/ex.js --pulgins @babel/plugin-trasform-block-scoping

2. 객체분해- 파라미터 플러그인(@babel/plugin-trasform-parameters)

3. 템플릿 문자열 변환 플러그인(@babel/plugin-trasform-template-literals)

4. for..of 변환 플러그인(@babel/plugin-trasform-for-of)

5. 모두 적용해 보기
$ npm i -D @babel/plugin-transform-block-scoping @babel/plugin-transform-parameters @babel/plugin-transform-template-literals @babel/plugin-transform-for-of
$ npx babel src/ex.js -o dist/ex.js --plugins @babel/plugin-transform-block-scoping --plugins @babel/plugin-transform-parameters --plugins @babel/plugin-transform-template-literals --plugins @babel/plugin-transform-for-of
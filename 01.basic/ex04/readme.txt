ex04: 애플리케이션 번들링(bundling)
(webpack은 번들링도구)

1. webpack은 작게 분리된 많은 애플리케이션 모듈(js,css,img ,font...)들의 의존성을 분석해서 하나의 js파일로 묶어주는 도구이다.
2. 묶어준 하나의 js파일을 번들(bundle)이라 하고 묶는 작업을 번들링(bundling)이라고 한다.
3. 번들링은 단순히 모듈들을 하나의 파일로 묶는 작업만을 의미하지 않는다. -> 빌드작업도 한다.
4. 빌드작업
    1) linting(ESLint, 문법체크) 작업
    2) document 작업(JDoc) 작업 (우리가 만든 작업들을 문서화 처리 한다- 꼭 해야하는건 아님)
    3) test(Mocha, Jest) 작업
    4) 난독화(변수치환 상수치환하는것)/ 압축(Uglyfy) 작업
    5) (최종적으로) 번들링 
5. 자바스크립트 뿐만 아니라 다양한 assets(css,img,font...)들도 모듈을 취급을 한다.
6. 설치
    $ npm i -D ewbpack webpack-cli
    $ npm .\node_modules\.bin\webpack --version
    $ npm webpack --version

    $npx webpack ./src/index.js > dist 폴더에 번들링 된다.
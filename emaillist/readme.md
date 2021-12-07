## React Pracractices - Integration(개발 환경 통합)

## Configuration
1. Application(Project) Structure
   <pre>
   /app
    |--- /backend
    |       |--- /logging
    |       |       |--- index.js
    |       |--- /routes
    |       |       |--- [index.js]
    |       |       |--- authorized.js
    |       |       |--- error.js
    |       |--- /controllers
    |       |--- /models
    |       |--- /views
    |       |       |--- /error
    |       |               |--- [404.ejs]
    |       |               |--- [500.ejs]
    |       |--- /public
    |       |--- [index.js]
    |       |--- [app.config.env]    
    |--- /frontend
    |       |--- /config
    |       |       |--- babel.config.json
    |       |       |--- [webpack.config.json]
    |       |--- /public
    |       |       |--- favicon.ico
    |       |       |--- index.html
    |       |--- /src
    |       |--- /assets
    |--- /node_modules
    |--- package.json
    |--- package-lock.json
   </pre>
2. nodemon
3. webpack dev server
4. package.json
5. concurrently
6. node application

### emaillist
    - 개발 통합 설정(with Node Backend)
    - backend: Fully APIs(Node Exporess기반)
    - Frontend: React(SPA)
    - AJAX: fetch 기반

### cors란?
1. origin
   URL에서 protocol + host + port를 합친 것
   ```
   > location.origin
   <'http://localhost:999'
   ```

2. 같은 origin vs 다른 origin
3. Same Orign Policy    (사용자 보안상의 보호를 위해서 )
   브라우저가 동일 출처 정책(SOP)를 지켜서 다른 출처의 리소스 접근을 금지
   - 외부 리소스를 못가져오는 단점
   - XSS 등과 같은 보안 취약점을 사전에 방지할 수 있다.

4. CORS(Cross Origin Resource Sharing): 브라우저 정책 (mode:cors로 설정되어있음)
```
Access to fetch at 'http://localhost:8888/api' from origin 'http://localhost:9999' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

```

 1. simple request
   <pre>
         JS               browser            server
         ------------>       ------------>
                              GET /api

                             <------------
                                 200 ok
                                 Access-Control-Allow-Origin: *  (모든접근에 대해서 허락하겠다.)
                               ============================
                                 "{...........}"
   respons <----------

   </pre>

   조건:
   1) GET, HEAD, POST 중의 하나의 method를 쓰는 경우
   2) Accept, Accept-Lan

 2. preflight request
   <pre>
      JS               browser            server
         ------------>       ------------>
            fetch()            OPTIONS /api
                              Access-Control-Allow-Method: PUT / DELETE ....등등



                             <------------
                                 200 ok
                                 Access-Control-Allow-Origin:'*'  (모든접근에 대해서 허락하겠다.)
                                
                             ------------> 
                              GET /api
                              <------------
                              200 ok
                              Access-Control-Allow-Origin:* 
                               ============================
                                 "{...........}"
   respons <----------
   </pre>
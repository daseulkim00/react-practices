const App = function(){
    const app = document.createElement('h1');
    app.textContent = 'Hello World';
    return app;
}

//렌더링
document
    .getElementById('root')
    .appendChild(App());
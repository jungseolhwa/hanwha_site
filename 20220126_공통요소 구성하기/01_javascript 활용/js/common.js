/*common.js*/
var headerSpace = document.querySelector("#header");
var headerCont = `
<header>
    <div class="wrap">
        <div class="logo">
            <a href="./"><img src="./img/logo.png" alt=""></a>
        </div>
        <div class="menu">
            <ul>
                <li><a href="./sub1.html">MENU1</a></li>
                <li><a href="./sub2.html">MENU2</a></li>
                <li><a href="./sub3.html">SUB3</a></li>
                <li><a href="./sub4.html">SUB4</a></li>
            </ul>
        </div>
    </div>
</header>
`;
headerSpace.innerHTML = headerCont;


var footerSpace = document.querySelector("#footer");
var footerCont = `
<footer>
    <p>&copy; Hanhwa E&C. All rights reserved.</p>
</footer>
`;
footerSpace.innerHTML = footerCont;

/*이벤트 파트(공통요소)*/
/*클릭 이벤트*/

/*리사이즈 이벤트*/

/*스크롤 이벤트*/



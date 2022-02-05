var headerSpace = document.querySelector("#header");
var headerCont = `
<div id="header_box">
            <div class="logo"><a href="index.html"><img src="./img/logo.png" alt=""></a></div>
            <nav>
                <div id="menu_box">
                    <ul>
                        <li class="main_menu"><a href="info.html"> Hanwha E&C</a> 
                            <ul class="sub" id="Lsub">
                                <li><a href="">경영이념</a></li>
                                <li><a href="">연혁</a></li>
                                <li><a href="">조직도</a></li>
                                <li><a href="">재무정보</a></li>
                                <li><a href="">CI</a></li>
                                <li><a href="">BI</a></li>
                                <li><a href="">찾아오시는길</a></li>
                            </ul>
                        </li>
                        <li class="main_menu"><a href="">BUSINESS</a> 
                            <ul class="sub">
                                <li><a href="">토목 사업</a></li>
                                <li><a href="">건축 사업</a></li>
                                <li><a href="">주택 사업</a></li>
                                <li><a href="">플랜트 사업</a></li>
                                <li><a href="">기술연구소</a></li>
                            </ul>
                        </li>
                        <li class="main_menu"><a href="">PR CENTER</a> 
                            <ul class="sub" id="Lsub2">
                                <li><a href="">사회공헌</a></li>
                                <li><a href="">공익사업</a></li>
                                <li><a href="">활동내용</a></li>
                                <li><a href="">윤리경영</a></li>
                                <li><a href="">공지사항</a></li>
                                <li><a href="">사내소식</a></li>
                                <li><a href="">홍보자료실</a></li>
                            </ul>
                        </li>
                        <li class="main_menu"><a href="">CAREERS</a> 
                            <ul class="sub">
                                <li><a href="">인재개발</a></li>
                                <li><a href="">인사제도</a></li>
                                <li><a href="">직무소개</a></li>
                                <li><a href="">채용공고</a></li>
                                <li><a href="">채용FAQ</a></li>
                            </ul>
                        </li>
                        <li class="main_menu"><a href="">CUSTOMER</a> 
                            <ul class="sub">
                                <li><a href="">고객문의</a></li>
                                <li><a href="">고객문의확인</a></li>
                                <li><a href="">사이버신문고</a></li>
                                <li><a href="">FAQ</a></li>
                            </ul>
                        </li>
                    </ul>
            </div>
            </nav>
            <div id="icone">
                <div class="lang1"></div>
                <div class="lang2"></div>
                <div onclick="dp_menu()" class="ham"></div>
            </div>
        </div>
    

        <div id="drop_menu">
            <div id="drop_box">
                <div id="box_logo">
                    <a href="index.html"></a>
                </div>
                <div id="dropmenu_list">
                    <ul>
                        <li class="main_menu2">
                            <a class="ul_title" href="info.html"> Hanwha E&C</a> 
                            <ul class="sub2" >
                                <li><a href="">경영이념</a></li>
                                <li><a href="">연혁</a></li>
                                <li><a href="">조직도</a></li>
                                <li><a href="">재무정보</a></li>
                                <li><a href="">CI</a></li>
                                <li><a href="">BI</a></li>
                                <li><a href="">찾아오시는길</a></li>
                            </ul>
                        </li>
                        <li class="main_menu2"><a class="ul_title" href="">BUSINESS</a> 
                            <ul class="sub2">
                                <li><a href="">토목 사업</a></li>
                                <li><a href="">건축 사업</a></li>
                                <li><a href="">주택 사업</a></li>
                                <li><a href="">플랜트 사업</a></li>
                                <li><a href="">기술연구소</a></li>
                            </ul>
                        </li>
                        <li class="main_menu2"><a class="ul_title" href="">PR CENTER</a> 
                            <ul class="sub2" >
                                <li><a href="">사회공헌</a></li>
                                <li><a href="">공익사업</a></li>
                                <li><a href="">활동내용</a></li>
                                <li><a href="">윤리경영</a></li>
                                <li><a href="">공지사항</a></li>
                                <li><a href="">사내소식</a></li>
                                <li><a href="">홍보자료실</a></li>
                            </ul>
                        </li>
                        <li class="main_menu2"><a class="ul_title" href="">CAREERS</a> 
                            <ul class="sub2">
                                <li><a href="">인재개발</a></li>
                                <li><a href="">인사제도</a></li>
                                <li><a href="">직무소개</a></li>
                                <li><a href="">채용공고</a></li>
                                <li><a href="">채용FAQ</a></li>
                            </ul>
                        </li>
                        <li class="main_menu2"><a class="ul_title" href="">CUSTOMER</a> 
                            <ul class="sub2">
                                <li><a href="">고객문의</a></li>
                                <li><a href="">고객문의확인</a></li>
                                <li><a href="">사이버신문고</a></li>
                                <li><a href="">FAQ</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div  id="close">
                   
                </div>
                


            </div>


        </div>
`;
headerSpace.innerHTML = headerCont;


var footerSpace = document.querySelector("footer");
var footerCont = `
<div id="footer_box">
<div id="foot_logo"><img src="./img/footer_logo.png" alt=""></div>
<div id="footer_txt">
    <ul>
        <li>해외현장 임직원 가족 |</li>
        <li>개인정보 처리방침 |</li>
        <li>공정거래 사업지침 |</li>
        <li>협력업체 시스템 </li>
    </ul>
    <div id="copyright">
        <p>서울시 영등포구 여의대로 24 전경련회관<br>
        TEL 02.2055.6000 080.729.2400<br>
        Copyright 2022 Hanwha Engineering & Construction corp.</p>
    </div>
</div>

<div id="sns">
<img id="sns_icon" src="./img/sns.png" alt="">
<div id="site">
    <img onclick="sitehead()" id="s_head" src="./img/site_head.jpg" alt="">
    <img id="s_body" src="./img/site_body.jpg" alt="">
</div>  
</div>
</div>
`;
footerSpace.innerHTML = footerCont;

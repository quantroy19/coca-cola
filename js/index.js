class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: var(--header-height);
                    z-index: 10;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: var(--primary-color);
                    height: 90px;
                    padding: 0 50px;
                }
                
                .logo img {
                    width: 60px;
                    object-fit: contain;
                    margin-top: 4px;
                    transition: transform 1s ease-in-out;
                }
                
                .logo img:hover {
                    transform: rotate(1440deg);
                }
                
                .nav-menu {
                    margin-right: auto;
                    padding-left: 40px;
                }
                
                .menu {
                    padding-left: 0;
                    margin: 0;
                    list-style: none;
                    display: flex;
                    justify-content: space-between;
                }
                
                .menu li a {
                    text-decoration: none;
                    font-family: titleFont;
                    color: var(--text-color);
                    font-size: 16px;
                    padding: 0 20px;
                    display: block;
                }
                
                .menu li a:hover {
                    animation: animateColor ease-in-out 0.8s infinite;
                }
                
                .form-search {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: auto;
                }
                
                .form-search__input {
                    padding: 8px 66px 8px 30px;
                    border: none;
                    outline: none;
                    border-radius: 20px;
                }
                
                .form-search__btn {
                    position: absolute;
                    top: -25%;
                    right: -20px;
                    object-fit: contain;
                    width: 50px;
                    height: 50px;
                    border: none;
                    border: none;
                    outline: none;
                    border-radius: 50%;
                    background-color: #0065c3;
                    overflow: hidden;
                }
                
                .form-search__btn i {
                    display: block;
                    font-size: 28px;
                    color: #fffaf3;
                    transform: translateY(1px);
                    transition: rotate ease-in-out 0.3s;
                }
                
                .form-search__btn:hover i {
                    cursor: pointer;
                    transform: scale(1.2);
                    animation: animateColor ease-in-out 1s infinite;
                }
                
                
                /* =================user================ */
                
                .user {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-around;
                    margin-right: 80px;
                }
                
                .user-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .user-top span {
                    position: relative;
                    display: block;
                }
                
                .user-top span:first-child::before {
                    position: absolute;
                    content: '';
                    top: 0;
                    right: 0;
                    width: 1px;
                    height: 100%;
                    background-color: #fffaf3;
                }
                
                .user-top span a {
                    display: block;
                    color: #fffaf3;
                    text-transform: uppercase;
                    font-size: 12px;
                    font-weight: normal;
                    text-decoration: none;
                }
                
                .user-top span:first-child {
                    padding-right: 10px;
                }
                
                .user-top span:last-child {
                    padding-left: 10px;
                }
                
                .user-main {
                    position: relative;
                }
                
                .user-main a img {
                    width: 32px;
                    transform: translate(-10px, -4px);
                }
                
                .user-main .quantity-cart {
                    position: absolute;
                    content: '';
                    top: -8px;
                    right: -2px;
                    height: 20px;
                    width: 20px;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    color: #ff0000;
                    background-color: #fffaf3;
                    animation: animateBounce ease-in-out 2s infinite;
                    font-weight: bold;
                }
            </style>

            <header>
                <div class="logo">
                    <a href="index.html">
                        <img src="img/logo.png" alt="" class="img-fluid">
                    </a>
                </div>
                <nav class="nav-menu">
                    <ul class="menu">
                        <li><a href="product.html">Sản phẩm</a></li>
                        <li><a href="news.html">Tin tức</a></li>
                        <li><a href="about.html">Giới thiệu</a></li>
                        <li><a href="">Về chúng tôi</a></li>
                    </ul>
                </nav>
                <form action="" class="form-search">
                    <input type="text" placeholder="Product search" class="form-search__input">
                    <button type="submit" class="form-search__btn"><i class="fas fa-search"></i></button>

                </form>
                <section class="user">
                    <div class="user-top">
                        <span><a href="">Đăng kí</a></span>
                        <span><a href="">Đăng nhập</a></span>
                    </div>
                    <div class="user-main">
                        <a href="">
                            <img src="img/icon cart.png" alt="" class="img-fluid">
                            <span class="quantity-cart">3</span>
                        </a>
                    </div>
                </section>
            </header>
        `
    }
}
customElements.define('my-header', MyHeader)


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                footer {
                    height: 300px;
                    width: 100%;
                    background-color: #0065c3;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 50px;
                }

                .footer-logo {
                    margin-right: 60px;
                }

                .footer-logo img {
                    width: 100px;
                }

                .footer-logo img {
                    width: 150px;
                    object-fit: contain;
                    margin-top: 4px;
                    transition: transform 1s ease-in-out;
                }

                .footer-logo img:hover {
                    transform: rotate(1440deg);
                }

                .footer-list {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-gap: 40px;
                }

                .footer-item a {
                    display: block;
                    font-size: 16px;
                    text-transform: uppercase;
                    color: var(--text-color);
                    text-decoration: none;
                    font-weight: bold;
                    margin: 26px 0;
                }

                .footer-item a:hover {
                    animation: animateColor ease-in-out 0.8s infinite;
                }

                .footer-follow {
                    width: 25%;
                    text-align: center;
                }

                .footer-follow button {
                    padding: 10px 20px;
                    border-radius: 20px;
                    background-color: #0065c3;
                    border: 2px solid #fffaf3;
                    text-transform: uppercase;
                    color: #fffaf3;
                    font-weight: bold;
                    cursor: pointer;
                    outline: none;
                    margin-bottom: 20px;
                }

                .footer-follow button:hover {
                    background-color: rgb(255, 250, 243);
                    color: rgb(0, 101, 195);
                }

                .footer-social {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 30px;
                    padding: 0 50px;
                    text-align: center;
                }

                .footer-social a {
                    display: block;
                    text-decoration: none;
                    color: #0065c3;
                    font-size: 30px;
                    background-color: #fffaf3;
                    width: 44px;
                    height: 44px;
                    border-radius: 8px;
                }

                .footer-social a:hover {
                    filter: brightness(0.5);
                }

                .footer-social a i {
                    display: block;
                    transform: translateY(8px);
                }
            </style>
            <footer>
                <div class="footer-logo">
                    <a href="">
                        <img src="img/logo-large.png" alt="" class="img-fluid">
                    </a>
                </div>
                <div class="footer-list">
                    <div class="footer-item">
                        <a href="">liên hệ chúng tôi</a>
                        <a href="">Điều khoản và điều kiện</a>
                        <a href="">chính sách bảo mật</a>
                    </div>
                    <div class="footer-item">
                        <a href="">Bản quyền</a>
                        <a href="">Sự thật sản phẩm</a>
                        <a href="">Định vị vửa hàng</a>
                    </div>
                    <div class="footer-item">
                        <a href="">phục vụ pepsi</a>
                        <a href="">về quảng cáo</a>
                        <a href="">đối tác tiềm năng</a>
                    </div>
                </div>
                <div class="footer-follow">
                    <button>Theo dõi chúng tôi</button>
                    <div class="footer-social">
                        <a href="">
                            <i class="ti-twitter"></i>
                        </a>
                        <a href="">
                            <i class="ti-facebook"></i>
                        </a>
                        <a href="">
                            <i class="ti-instagram"></i>
                        </a>
                        <a href="">
                            <i class="ti-youtube"></i>
                        </a>
                    </div>
                </div>
            </footer>
        `
    }
}

customElements.define('my-footer', MyFooter)
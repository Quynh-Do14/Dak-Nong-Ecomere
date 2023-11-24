import React from 'react'

export const HeaderPage = () => {
    return (
        <header class="header-area header-two transparent-header">
            <div class="header-navigation navigation-white">
                <div class="nav-overlay"></div>
                <div class="container-fluid">
                    <div class="primary-menu">
                        <div class="site-branding">
                            <a href="index.html" class="brand-logo">
                                <img src="assets/images/logo/logo-white.png" alt="Site Logo" />
                            </a>
                        </div>
                        <div class="nav-menu">
                            <div class="mobile-logo mb-30 d-block d-xl-none">
                                <a href="index.html" class="brand-logo">
                                    <img src="assets/images/logo/logo-black.png" alt="Site Logo" />
                                </a>
                            </div>
                            <div class="nav-search mb-30 d-block d-xl-none ">
                                <form>
                                    <div class="form_group">
                                        <input type="email" class="form_control" placeholder="Search Here" name="email" required />
                                        <button class="search-btn"><i class="fas fa-search"></i></button>
                                    </div>
                                </form>
                            </div>
                            <nav class="main-menu">
                                <ul>
                                    <li class="menu-item has-children"><a href="#">Home</a>
                                        <ul class="sub-menu">
                                            <li><a href="index.html">Home 01</a></li>
                                            <li><a href="index-2.html">Home 02</a></li>
                                            <li><a href="index-3.html">Home 03</a></li>
                                            <li><a href="index-4.html">Home 04</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item has-children"><a href="#">Tours</a>
                                        <ul class="sub-menu">
                                            <li><a href="tour.html">Tours</a></li>
                                            <li><a href="tour-details.html">Tours Details</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item has-children"><a href="#">Destination</a>
                                        <ul class="sub-menu">
                                            <li><a href="destination.html">Destination</a></li>
                                            <li><a href="destination-details.html">Destination Details</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item has-children"><a href="#">Blog</a>
                                        <ul class="sub-menu">
                                            <li><a href="blog-list.html">Blog List</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item has-children"><a href="#">Pages</a>
                                        <ul class="sub-menu">
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="gallery.html">Our Gallery</a></li>
                                            <li><a href="events.html">Our Events</a></li>
                                            <li><a href="shop.html">Our Shop</a></li>
                                            <li><a href="product-details.html">Product Details</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                            <div class="menu-button mt-40 d-xl-none">
                                <a href="contact.html" class="main-btn secondary-btn">Book Now<i class="fas fa-paper-plane"></i></a>
                            </div>
                        </div>
                        <div class="nav-right-item">
                            <div class="search-btn" data-bs-toggle="modal" data-bs-target="#search-modal"><i class="far fa-search"></i></div>
                            <div class="menu-button d-xl-block d-none">
                                <a href="contact.html" class="main-btn primary-btn">Book Now<i class="fas fa-paper-plane"></i></a>
                            </div>
                            <div class="navbar-toggler">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

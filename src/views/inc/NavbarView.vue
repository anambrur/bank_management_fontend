<script>

export default {
    name: 'NavbarView'
}
</script>



<template>
    <nav class="sidebar">
        <div class="logo d-flex justify-content-between">
            <a href="index.html"><img src="/img/logo.png" alt="image" /></a>
            <div class="sidebar_close_icon d-lg-none">
                <i class="ti-close"></i>
            </div>
        </div>
        <ul id="sidebar_menu">
            <li class="side_menu_title">
                <span>Dashboard</span>
            </li>
            <li class="mm-active">
                <a class="has-arrow" href="#" aria-expanded="false">
                    <img src="/img/menu-icon/1.svg" alt="image" />
                    <span>Dashboard</span>
                </a>
                <ul>
                    <li><a class="active" href="index.html">Dashboard 1</a></li>
                    <li><a href="index_2.html">Dashboard 2</a></li>
                </ul>
            </li>
            <li class="side_menu_title">
                <span>Services</span>
            </li>
            <li class>
                <a class="has-arrow" href="#" aria-expanded="false">
                    <img src="/img/menu-icon/2.svg" alt="image" />
                    <span>Account Type</span>
                </a>
                <ul>
                    <li>
                        <RouterLink to="/dashboard/accountType">Account Type List</RouterLink>
                    </li>
                </ul>
            </li>
            <li class>
                <a class="has-arrow" href="#" aria-expanded="false">
                    <img src="/img/menu-icon/2.svg" alt="image" />
                    <span>Loan Section</span>
                </a>
                <ul>
                    <li>
                        <RouterLink to="/dashboard/loanType">Loan Type List</RouterLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <RouterLink to="/dashboard/loan">Loan List</RouterLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <RouterLink to="/dashboard/loanProposal">Loan Proposal List</RouterLink>
                    </li>
                </ul>
            </li>
            <li class>
                <a class="has-arrow" href="#" aria-expanded="false">
                    <img src="/img/menu-icon/2.svg" alt="image" />
                    <span>Deposit Section</span>
                </a>
                <ul>
                    <li>
                        <RouterLink to="/dashboard/depositType">Deposit Type List</RouterLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <RouterLink to="/dashboard/deposit">Deposit List</RouterLink>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

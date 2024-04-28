<script setup>
import NavbarViewVue from "../inc/NavbarView.vue";

</script>

<template>
    <main>

        <NavbarViewVue />
        <section class="main_content dashboard_part">
            <div class="container card card-body mt-5 ms-2">
                <!-- <div class="serach_field-area">
                    <div class="search_inner">
                        <form action="#">
                            <div class="search_field ">
                                <input type="text" placeholder="Search here..." />
                            </div>
                            <button type="submit">
                                <img src="/img/icon/icon_search.svg" alt="image" />
                            </button>
                        </form>
                    </div>
                </div> -->

                <div class="input-group rounded">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                        aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <h4 class="m-3 table_heading">Account Type List</h4>
                    </div>
                    <div class="col-md-6 text-end mt-2">
                        <button class="btn btn-warning">Add New</button>
                        
                    </div>

                </div>

                <table class="table table-striped ">
                    <thead class="table_color">
                        <tr>
                            <th scope="col">SL</th>
                            <th scope="col">A/C Type</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>
                                <button class="btn btn-success btn-sm me-2">Edit</button>
                                <button class="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>

</template>
<script>
import NavbarViewVue from "../inc/NavbarView.vue";
// import axios from 'axios'

export default {
    components: {
        NavbarViewVue
    },
    // data() {
    //     return {
    //         accountType: []
    //     }
    // },
    // mounted() {
    //     console.log('hello this is anam')
    //     this.getAccountType();
    // },
    // methods: {
    //     getAccountType() {
    //         axios.get('http://127.0.0.1:8000/api/accountType')
    //             .then(res => {
    //                 this.accountType = (res.data.data)
    //             })

    //     }

    // }
}

</script>

<template>
    <main>
        <NavbarViewVue/>
        
        <section class="main_content dashboard_part">
            <div class="container card card-body mt-5 ms-2">

                <div class="row">
                    <div class="col-md-4">
                        <div class="input-group rounded">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                                aria-describedby="search-addon" />
                            <span class="input-group-text border-0" id="search-addon">
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <h4 class="m-3 table_heading">Deposit List</h4>
                    </div>
                    <div class="col-md-6 text-end mt-2">
                        <RouterLink to="/dashboard/depositAdd" class="btn btn-warning">Add New</RouterLink>
                        
                    </div>

                </div>

                <table class="table table-striped ">
                    <thead class="table_color">
                        <tr>
                            <th scope="col">SL</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Deposit Date</th>
                            <th scope="col">Deposit Scheme</th>
                            <th scope="col">Deposit Type</th>
                            <th scope="col">Interest Rate</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <th>Rakib Khan</th>
                            <th>29/04/2024</th>
                            <th>5000</th>
                            <th>FDR</th>
                            <th>12%</th>
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
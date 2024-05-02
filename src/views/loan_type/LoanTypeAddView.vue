<script>
import NavbarViewVue from "../inc/NavbarView.vue";
// import axios from 'axios'

export default {
    components: {
        NavbarViewVue
    },
    // data() {
    //     return {
    //         loanTypeAdd: {
    //             name:''
    //         }
    //     }
    // },
    // mounted() {
    //     // console.log('saveAccountType')
    //     this.saveLoanType();
    // },
    // methods: {
    //     saveLoanType() {
    //         axios.post('http://127.0.0.1:8000/api/loanType')
    //             .then(res => {
    //                 this.loanType = (res.data.data)
    //             })

    //     }

    // }
}

</script>
<template>
    <main>
        <NavbarViewVue />
        <section class="main_content dashboard_part">
            <div class="container card mt-5 ms-2">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card-header mt-5">
                            <h4 class=" table_heading">Loan Type Add</h4>
                        </div>
                        <div class="card-body">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Loan Type</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1"
                                        placeholder="Enter Loan Type">
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
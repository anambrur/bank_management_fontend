<script>
import NavbarViewVue from "../inc/NavbarView.vue";
// import axios from 'axios'

export default {
    components: {
        NavbarViewVue
    },
    // data() {
    //     return {
    //         loanAdd: {
    //             name:''
    //         }
    //     }
    // },
    // mounted() {
    //     // console.log('saveloan')
    //     this.saveLoan();
    // },
    // methods: {
    //     saveLoan() {
    //         axios.post('http://127.0.0.1:8000/api/loan')
    //             .then(res => {
    //                 this.loan = (res.data.data)
    //             })

    //     }

    // }
}

</script>
<template>
    <main>
        <NavbarViewVue/>

        <section class="main_content dashboard_part">
            <div class="container card mt-5 ms-2">
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="card-header mt-5">
                            <h4 class=" table_heading">Add Loan</h4>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Name</label>
                                    <input type="text" class="form-control" placeholder="Enter Customer Name">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Loan Type</label>
                                    <select class="form-select col-md-10" >
                                        <option value="0">Loan Type </option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Loan Proposal Amount</label>
                                    <input type="text" class="form-control" placeholder="Enter Loan Proposan Amount">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label"> Amount</label>
                                    <input type="text" class="form-control" placeholder="Enter Amount">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Date</label>
                                    <input type="date" class="form-control" placeholder="Enter Date">
                                </div>
                            </div>
                          </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                        
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>
</template>
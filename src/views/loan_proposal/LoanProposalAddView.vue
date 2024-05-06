<script>
import NavbarViewVue from "../inc/NavbarView.vue";
import axios from 'axios'

export default {
    components: {
        NavbarViewVue
    },
    data() {
        return {
            url: 'http://127.0.0.1:8000/api/loanProposal',
            selectCustomer: '',
            selectLoanType: '',
            amount: '',
            date: '',
            tenure: '',
            loanPorosal:''

        }
    },
    mounted() {
        this.getloanProposal();
    },
    methods: {
        getloanProposal() {
            axios.get('http://127.0.0.1:8000/api/loanProposal')
                .then(res => {
                    this.loanPorosal = (res.data.data)
                    // console.log(res)
                })

        },
        saveloanPorosal() {
            this.axios.post(`${this.url}`, {
                customer_id: this.selectCustomer,
                loan_type_id: this.selectLoanType,
                amount: this.amount,
                date: this.date,
                tenure: this.tenure

            })
                .then(res => {
                    this.$router.push("/dashboard/loanPorosal")
                })
        }

    },
    watch: {
        'loanPorosal': function () {
            if (this.loanPorosal.length < 4) {
                this.loanPorosalError = 'Loan Proposal Required'
            } else {
                this.loanPorosalError = ''
            }
        }
    }
}

</script>
<template>
    <main>
        <NavbarViewVue />

        <section class="main_content dashboard_part">
            <div class="container card mt-5 ms-2">
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="card-header mt-5">
                            <h4 class=" table_heading">Add Loan Proposal</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Customer Name</label>
                                        <select class="form-select col-md-10" v-model="selectCustomer">
                                            <option disabled value="">Customer Name</option>
                                            <option v-for="(d, i) in customers" :key="i" :value="d.id">{{ d.customer}}</option>
                                        </select>
                                        <p style="color:red" v-if="loanPorosalError">{{ loanPorosalError }}</p>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Loan Type</label>
                                        <select class="form-select col-md-10" v-model="selectLoanType">
                                            <option disabled value=""> Please Select the Loan Type </option>
                                            <option v-for="(d, i) in loanTypes" :key="i" :value="d.id"></option>
                                        </select>
                                        <p style="color:red" v-if="loanTypeError">{{ loanTypeError }}</p>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Amount</label>
                                        <input type="text" class="form-control"
                                            placeholder="Enter Loan Proposan Amount">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Date</label>
                                        <input type="date" class="form-control" placeholder="Enter Date">
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label"> Tenure(Month)</label>
                                        <input type="text" class="form-control" placeholder="Enter Amount">
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
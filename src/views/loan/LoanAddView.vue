<script>
import NavbarViewVue from "../inc/NavbarView.vue";
// import axios from 'axios'

export default {
    components: {
        NavbarViewVue
    },
    data() {
        return {
            url: 'http://127.0.0.1:8000/api/loan',
            name: '',
            selectLoanType: '',
            loanProposalAmount: '',
            amount: '',
            date: ''

        }
    },
    mounted() {
        this.getloanType();
    },
    methods: {
        getloanType() {
            axios.get('http://127.0.0.1:8000/api/loanType')
                .then(res => {
                    this.loanType = (res.data.data)
                })

        },
        saveLoan(){
            this.axios.post(`${this.url}`,{
                customer_id: this.name,
                loan_type_id: this.selectLoanType,
                loan_proposal_id: this.loanProposalAmount,
                amount: this.amount,
                date: this.date

            })
            .then(res=> {
                this.$router.push("/dashboard/loan")
            })
        }

    },
    watch: {
        'loan': function () {
            if (this.loan.length < 4) {
                this.loanError = 'Loan Required'
            } else {
                this.loanError = ''
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
                            <h4 class=" table_heading">Add Loan</h4>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="handleSubmit">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Name</label>
                                            <input type="text" v-model="name" class="form-control" placeholder="Enter Customer Name">
                                            <p style="color: red" v-if="nameError">{{ nameError }}</p>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Loan Type</label>
                                            <select class="form-select col-md-10" v-model="selectLoanType">
                                                <option disabled value=""> Please Select the Loan Type </option>
                                                <option v-for="(d,i) in loanType" :key="i" :value="d.id"></option>
                                            </select>
                                            <p style="color:red" v-if="loanTypeError">{{ loanTypeError }}</p>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Loan Proposal
                                                Amount</label>
                                            <input type="text" v-model="loanProposalAmount" class="form-control"
                                                placeholder="Enter Loan Proposan Amount">
                                                <p style="color: red;" v-if="loanProposalAmountError">{{ loanProposalAmountError }}</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label"> Amount</label>
                                            <input type="text" v-model="amount" class="form-control" placeholder="Enter Amount">
                                            <p style="color: red;" v-if="amountError">{{ amountError }}</p>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Date</label>
                                            <input type="date" v-model="date" class="form-control" placeholder="Enter Date">
                                            <p style="color: red;" v-if="dateError">{{ dateError }}</p>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>
</template>
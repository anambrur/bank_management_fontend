<script>
import NavbarViewVue from "../inc/NavbarView.vue";
import axios from 'axios'

export default {
    components: {
        NavbarViewVue
    },
    data() {
        return {
            deposit: '',
            depositError: ''
        }
    },
    mounted() {
        // this.savedepositType();
    },
    methods: {
        savedepositType() {
            const DepositTypeData = {
                deposit_type: this.deposit
            }
            axios.post('http://127.0.0.1:8000/api/depositType', DepositTypeData)
                .then(res => {
                    this.loanType = (res.data.data)
                    console.log(res.data.data)
                    this.$router.push("/dashboard/depositType")
                })

        },
        handleSubmit() {
            if (this.depositType.length < 1) {
                this.depositTypeError = 'Deposit type is required';
                return;
            }
        }

    },
    watch: {
        'depositType': function () {
            if (this.depositType.length < 4) {
                this.depositTypeError = 'Deposit type Required'
            } else {
                this.depositTypeError = ''
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
                    <div class="col-md-6">
                        <div class="card-header mt-5">
                            <h4 class=" table_heading">Deposit Type Add</h4>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="handleSubmit">

                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Deposit Type</label>
                                    <input type="text" v-model="deposit" class="form-control" id="exampleInputEmail1"
                                        placeholder="Enter Loan Type">
                                    <p style="color:red" v-if="depositError">{{ depositError }}</p>
                                </div>
                                <button type="submit" @click="savedepositType" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
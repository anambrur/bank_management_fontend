<template>
    <main>
        <NavbarViewVue />

        <section class="main_content dashboard_part">
            <div class="container card mt-5 ms-2">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card-header mt-5">
                            <h4 class=" table_heading">Card Details Add</h4>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="handleSubmit">
                                <div class="mb-3">
                                    <label for="customer" class="form-label">Customer Name</label>
                                    <select v-model="selectedCustomer" class="form-select col-md-10" >
                                        <option value="">Customer Name</option>
                                        <option v-for="(d, i) in customer" :key="i" :value="d.id" >{{d.customer_name}}</option>
                                        <p style="color:red" v-if="customerError">{{ customerError }}</p>
                                    </select>

                                </div>

                                <div class="mb-3">
                                    <label for="cardType" class="form-label">Card Type</label>
                                    <select v-model="selectedCardType" class="form-select col-md-10" >
                                        <option value="">Card Type </option>
                                        <option v-for="(d, i) in cardType" :key="i" :value="d.id" >{{d.card_type}}</option>
                                        <p style="color:red" v-if="cardTypeError">{{ cardTypeError }}</p>
                                    </select>

                                </div>
                                <div class="mb-3">
                                    <label for="card_number" class="form-label">Card Number</label>
                                    <input type="text" v-model="card_number" class="form-control" id="card_number"
                                        placeholder="Enter Card number">
                                    <p style="color:red" v-if="cardError">
                                        {{ cardError }}</p>
                                </div>


                                <button type="submit" @click="saveCardDetails" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>
</template>

<script>
import NavbarViewVue from "../inc/NavbarView.vue";
import axios from 'axios'

export default {
    components: {
        NavbarViewVue
    },
    data() {
        return {
            url: 'http://127.0.0.1:8000/api/card',
            customer: [],
            cardType: [],
            card_number: '',
            selectedCustomer: '',
            selectedCardType: '',
            cardTypeError: '',
            customerError: '',
            cardError: '',
        }
    },
    mounted() {
        this.getcardType();
         this.getcustomer();

    },
    methods: {
        getcustomer() {
            axios.get('http://127.0.0.1:8000/api/customer')
                .then(res => {
                    this.customer = (res.data.data)
                })
                .catch(error => {
                    console.error('Error fetching customer',error);
                });

        },
        getcardType() {
            axios.get('http://127.0.0.1:8000/api/cardType')
                .then(res => {
                    this.cardType = (res.data.data)
                })
                .catch(error => {
                    console.error('Error fetching Card types',error);
                });

        },



        // handleSubmit
        saveCardDetails() {
            // console.log(this.name)
            const data = {
                customer_id: this.selectedCustomer,
                card_type_id: this.selectedCardType,
                card_number: this.card_number,

            };
            console.log(data);
            axios.post(this.url, data)
                .then(res => {
                    console.log(res)
                     this.$router.push("/dashboard/cardDetails");
                })
                .catch(error => {
                console.error('Error fetching Card',error);
                
                
                });

        },
        clearErrors() {
            this.customerError ,
            this.depositTypeError ,
            this.cardError        
        }


    },
    //     watch: {
    //         'name': function () {
    //             if (this.name.length < 4) {
    //                 this.nameError = 'Card Details is Required'
    //             } else {
    //                 this.nameError = ''
    //             }
    //         }
    //     }
}

</script>
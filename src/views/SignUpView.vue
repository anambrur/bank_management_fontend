<template>
    <section class="container">
        <div class="container card mt-5 ms-2">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card-header mt-5">
                        <h4 class="table_heading text-center">Customer Sign Up</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="handleSubmit">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Name</label>
                                        <input type="text" v-model="name" class="form-control" id="name"
                                            placeholder="Enter Your Name">
                                        <p style="color:red" v-if="nameError">
                                            {{ nameError }}
                                        </p>
                                    </div>

                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" v-model="email" class="form-control" id="email"
                                            placeholder="Enter Your Email">
                                        <p style="color:red" v-if="emailError">
                                            {{ emailError }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="phone" class="form-label">Phone</label>
                                        <input type="text" v-model="phone" class="form-control" id="phone"
                                            placeholder="Enter Your Mobile">
                                        <p style="color:red" v-if="phoneError">
                                            {{ phoneError }}
                                        </p>
                                    </div>

                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="address" class="form-label">Address</label>
                                        <input type="text" v-model="address" class="form-control" id="address"
                                            placeholder="Enter Your address">
                                        <p style="color:red" v-if="addressError">
                                            {{ addressError }}
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="nidNumber" class="form-label">NID Number</label>
                                        <input type="text" v-model="nidNumber" class="form-control" id="nidNumber"
                                            placeholder="Enter Your NID Number">
                                        <p style="color:red" v-if="nidNumberError">
                                            {{ nidNumberError }}
                                        </p>
                                    </div>

                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="date" class="form-label">Date of Birth</label>
                                        <input type="date" v-model="date" class="form-control" id="date"
                                            placeholder="Enter Your date">
                                        <p style="color:red" v-if="dateError">
                                            {{ dateError }}
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="nomineeName" class="form-label">Nominee Name</label>
                                        <input type="text" v-model="nomineeName" class="form-control" id="nomineeName"
                                            placeholder="Enter Your Nominee Name">
                                        <p style="color:red" v-if="nomineeNameError">
                                            {{ nomineeNameError }}
                                        </p>
                                    </div>

                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="nomineePhone" class="form-label">Nominee Phone</label>
                                        <input type="text" v-model="nomineePhone" class="form-control" id="nomineePhone"
                                            placeholder="Enter Your Nominee Mobile Number">
                                        <p style="color:red" v-if="nomineePhoneError">
                                            {{ nomineePhoneError }}
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="nomineeNID" class="form-label">Nominee NID</label>
                                        <input type="text" v-model="nomineeNID" class="form-control" id="nomineeNID"
                                            placeholder="Enter Your Nominee Name">
                                        <p style="color:red" v-if="nomineeNIDError">
                                            {{ nomineeNIDError }}
                                        </p>
                                    </div>

                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="document" class="form-label">Document</label>
                                        <input type="text" v-model="document" class="form-control" id="document"
                                            placeholder="Enter Your Nominee Mobile Number">
                                        <p style="color:red" v-if="documentError">
                                            {{ documentError }}
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="nomineeNid" class="form-label">Account Type</label>
                                        <select class="form-select" v-model="accountType"
                                            aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <p style="color:red" v-if="nomineeNidError">
                                            {{ nomineeNidError }}
                                        </p>
                                    </div>

                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="formFileMultiple" class="form-label">Image</label>
                                        <input class="form-control" type="file" id="formFileMultiple" multiple>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <button type="submit" @click="savaCustomer" class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            url: 'http://127.0.0.1:8000/api/customer',
            name: '',
            email: '',
            phone: '',
            address: '',
            nidNumber: '',
            date: '',
            nomineeName: '',
            nomineePhone: '',
            nomineeNID: '',
            accountType: '',
            document: '',
            photo: ''
        }


    },
    mounted() {
        // console.log('savaAccountType')
        // this.savaAccountType();

    },
    methods: {
        savaCustomer() {
            // const CustomerData = {
            //     customer_name: this.name,
            //     email: this.email,
            //     mobile: this.phone,
            //     address: this.address,
            //     photo: this.photo,
            //     nid_number: this.nidNumber,
            //     date_of_birth: this.date,
            //     nominee_name: this.nomineeName,
            //     nominee_mobile: this.nomineePhone,
            //     nominee_nid_number: this.nomineeNID,
            //     document: this.document,
            //     account_type_id: this.accountType,
            // }
            // console.log(CustomerData)

            axios.post(`${this.url}`, {
                customer_name: this.name,
                email: this.email,
                mobile: this.phone,
                address: this.address,
                photo: this.photo,
                nid_number: this.nidNumber,
                date_of_birth: this.date,
                nominee_name: this.nomineeName,
                nominee_mobile: this.nomineePhone,
                nominee_nid_number: this.nomineeNID,
                document: this.document,
                account_type_id: this.accountType,
            })
                .then(res => {
                    // this.accountType = (res.data.data)
                    console.log(res)
                    // this.$router.push("/dashboard/accountType")
                })

        },
        // handleSubmit() {
        //     if (this.name.length < 1) {
        //         this.nameError = 'Account type is required';
        //         return;
        //     }
        // }

    },
    // watch: {
    //     'name': function () {
    //         if (this.name.length < 4) {
    //             this.nameError = 'Account type Required'
    //         } else {
    //             this.nameError = ''
    //         }
    //     }
    // }

}
</script>
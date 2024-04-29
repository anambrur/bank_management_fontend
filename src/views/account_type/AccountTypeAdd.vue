<script>
import NavbarViewVue from "../inc/NavbarView.vue";
import axios from 'axios'

export default {
    components: {
        NavbarViewVue
    },
    data() {
        return {
            accountTypeAdd: {
                name:''
            }
        }
    },
    mounted() {
        // console.log('savaAccountType')
        this.savaAccountType();
    },
    methods: {
        savaAccountType() {
            axios.post('http://127.0.0.1:8000/api/accountType')
                .then(res => {
                    this.accountType = (res.data.data)
                    console.log(res.data.data)
                })

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
                            <h4 class=" table_heading">Account Type Add</h4>
                        </div>
                        <div class="card-body">
                            
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Account Type</label>
                                    <input type="text" v-model="accountTypeAdd.name" class="form-control" id="exampleInputEmail1"
                                        placeholder="Enter Account Type">
                                </div>
                                <button type="submit" @click="savaAccountType" class="btn btn-primary">Submit</button>
                           
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>
</template>
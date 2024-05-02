<script>
import NavbarView from '../inc/NavbarView.vue';

export default {
    components: {
        NavbarView

    },
}
</script>


<template>
    <main>
        <NavbarView/>
        <section class="main_content dashboard_part">
            <div class="container card mt-5 ms-2">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card-header mt-5">
                            <h4 class="table_heading">Interest Rate Add</h4>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Interest Rate</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1"
                                        placeholder="Enter Interest Rate">
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
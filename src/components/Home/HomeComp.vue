


<template>
    <div>
        <User-Comp-Vue :user="user" required="yes" @saySomething="fromEmit">
            <div class="container">
                <h1>Hello My Name is {{ user.name }}</h1>
            </div>
        </User-Comp-Vue>
        <button @click="changeName('SOME ARG', $event)" class="btn btn-success">Change name</button>
        &nbsp;
        <button @click="changeOccupation('GAMER')" class="btn btn-primary">Change occupation</button>


        <hr />

        <form @submit="submitForm">
            <input type="text" v-model="form.name" />
            <input type="text" v-model="form.lastname" />
            <button type="submit">Submit</button>
        </form>


        <hr />
        <div>
            {{ message }}
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import UserCompVue from './UserComp.vue';
import { ref, computed, watch, reactive } from 'vue';
export default {
    components: {
        UserCompVue
    },
    setup() {
        const form = reactive({
            name: '',
            lastname: ''
        });
        const user = reactive({
            age: 18,
            name: 'Francis',
            occupation: 'DEV',
            bilingual: false
        });
        /// FUNCTIONS
        function changeName(arg1, event) {
            user.name = 'Ronald';
        }
        const changeOccupation = (arg) => {
            user.occupation = arg;
        }
        const submitForm = (e) => {
            e.preventDefault();
            //console.log(form);
        }
        const fromEmit = (arg) => {
            console.log('FROM EMMIT !!', arg)
        }
        // COMPUTED
        const message = computed(() => {
            return `Hello, i am ${user.name} and i am a ${user.occupation}`
        });

        /// WATCH
        watch(user, (newUser, oldUser) => {
            // console.log(newUser,'NEW');
            // console.log(oldUser,'OLD');
        });

        return {
            user,
            form,
            submitForm,
            changeName,
            changeOccupation,
            message,
            fromEmit
        }
    }
}
</script>
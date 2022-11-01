import axios from "axios"
import { ref } from "vue"
import { useRouter } from "vue-router";

export default function useUsers() {
    const users = ref([])
    const user = ref([])
    const router = useRouter();

    const errors = ref('');

    const getUsers = async () => {
        let response = await axios.get('/api/users')
        users.value = response.data.data;
    }

    const getUser = async (id) => {
        let response = await axios.get(`/api/users/${id}`)
        user.value = response.data.data;
    }

    const storeUser = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/users/', data)
            await router.push({ name: 'users.index' })
        } catch (error) {
            if(error.response.status === 422) {
                for(const key in error.response.data.errors) {
                    errors.value += error.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const updateUser = async (id) => {
        errors.value = ''
        try {
            await axios.put(`/api/users/${id}`, user.value)
            await router.push({ name: 'users.index' })
        } catch (error) {
            if(error.response.status === 422) {
                for(const key in error.response.data.errors) {
                    errors.value += error.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const destroyUser = async (id) => {
        await axios.delete(`/api/users/${id}`)
    }

    return {
        users,
        user,
        errors,
        getUsers,
        getUser,
        storeUser,
        updateUser,
        destroyUser,
    }
}
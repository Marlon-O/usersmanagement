<template>
    <div class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md">
        <div class="flex place-content-end mb-4">
            <div class="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
                <router-link :to="{ name: 'users.create' }" class="text-sm font-medium">Create company</router-link>
            </div>
        </div>

        <table class="min-w-full border divide-y divide-gray-200">
            <thead>
                <tr>
                    <th class="px-6 py-3 bg-gray-50">
                        <span
                            class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Name</span>
                    </th>
                    <th class="px-6 py-3 bg-gray-50">
                        <span
                            class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Email</span>
                    </th>
                </tr>
            </thead>

            <tbody class="bg-white divide-y divide-gray-200 divide-solid">
                <template v-for="user in users" :key="user.id">
                    <tr class="bg-white">
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap text-center">
                            {{ user.name }}
                        </td>
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap text-center">
                            {{ user.email }}
                        </td>
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                            <router-link
                                :to="{ name: 'users.edit', params: { id: user.id } }"
                                class="mr-2 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                                    Edit
                            </router-link>
                            <button @click="deleteUser(user.id)"
                                    class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                            Delete</button>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import useUsers from "../../composables/users";

export default {
    setup() {
        const { users, getUsers, destroyUser } = useUsers()

        onMounted(getUsers)

        const deleteUser = async (id) => {

            if(!window.confirm('Are your sure?')) {
                return;
            }

            await destroyUser(id);
            await getUsers();
        }

        return {
            users,
            deleteUser,
        }
    }
}
</script>
<script>
export default {
    name: 'Pagination',
    props: {
        currentPage: Number,
        lastPage: Number
    },
    emits: ['changePage']
}
</script>

<template>
   <nav v-if="lastPage" aria-label="Page navigation example" class="my-3 d-flex justify-content-end">
        <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a @click.prevent="$emit('changePage', currentPage - 1 )" class="page-link" href="#"> Previous</a>
            </li>
            <li class="page-item" :class="{ active: pageNum === currentPage }" v-for="pageNum in lastPage">
                <a @click.prevent="$emit('changePage', pageNum)" class="page-link" href="#">
                    {{pageNum}}
                </a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === lastPage }">
              <a @click.prevent="$emit('changePage', currentPage + 1 )" class="page-link" href="#"> Next</a>
            </li>
        </ul>
    </nav> 
</template>
<template>
<div class="container">
    <div class="filter-nav">
        <router-link to="/my-polls/add-poll" class="filter">Add Poll</router-link>
        <!-- <router-link to="/my-polls/all-polls" class="filter">All Polls</router-link> -->
    </div>
        <router-view />
</div>
</template>

<script>

</script>

<style scoped>
.container {
    padding: 10px 30px;
}

.filter-nav {
    display: flex;
    justify-content: center;
}

.filter {
    text-decoration: none;
    font-size: .95em;
    font-weight: 600;
    padding: 10px 40px;
    border: none;
    color: white;
    background-color: rgba(0, 0, 0, .5);
}

.filter:hover {
    background-color: rgba(0, 0, 0, .7);
    color: white;
}

a.router-link-active {
    border-bottom: 3px solid white;
}
</style>

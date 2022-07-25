import { ref } from "vue";

let getPosts = () => {
    let posts = ref([]);
    let error = ref("");
    let load = async () => {
        try {
            let response = await fetch("http://localhost:3000/posts");
            console.log(response);
            if (response.status === 404) {
                throw new Error("Not found url");
            }
            let datas = await response.json();
            posts.value = datas;
        } catch (err) {
            error.value = err.message;
            alert(error.value);
        }
    };
    return {posts, error, load}
}

export default getPosts;
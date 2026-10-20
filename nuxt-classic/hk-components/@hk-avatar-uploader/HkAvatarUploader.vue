<template>
    <label for="photo-upload" class="avtuploder-circle">
        <div class='avtuploder-wrapper'>
            <img :src="imageSrc" alt='demo Img' class='avtuploder-preview' width="115" height="115" />
        </div>
        <input id="photo-upload" type="file" @change="onUpload" class="d-none" />
    </label>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'HkAvatarUploader',
    props: {
        defaultImg: String
    },
    setup(props) {
        const imageSrc = ref(props.defaultImg);

        const onUpload = (event) => {
            event.preventDefault();
            const file = event.target.files[0];
            if (file) {
                imageSrc.value = URL.createObjectURL(file);
            }
        };

        return { imageSrc, onUpload };
    }
};
</script>
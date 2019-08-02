<template>
    <div>
        <dl v-for="(item ,index) in list" :key="index">
            <dt>
                <img :src="item.img" alt="" />
            </dt>
            <dd>
                {{item.name}}
            </dd>
        </dl>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            list:[]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        axios.get('/api/list').then(res=>{
            console.log(res)
            if(res.data.code === 1){
                this.list = res.data.data
            }
        })
    },


    mounted(){

    }
}
</script>
<style scoped lang="">

</style>
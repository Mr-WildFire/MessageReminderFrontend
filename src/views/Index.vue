<template>
    <div>
        <span>你好，世界！</span>
        <el-input placeholder="请输入内容" v-model="input"></el-input>
        <el-button @click="heloword">默认按钮</el-button>
    </div>
</template>

<script>
import { HelloWord } from './Api';

export default {
    name: "Index",
    data() {
        return {
            input: '',
        }
    },
    methods: {
        heloword() {
            HelloWord().then(res => {
                this.input = res.data;
                this.$message({
                    message: res.data,
                    type: 'success'
                })
            })
        }
    }
}
</script>
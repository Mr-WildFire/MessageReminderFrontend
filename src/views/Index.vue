<template>
    <el-container>
        <el-header>
            <Header></Header>
        </el-header>
        <el-main>
            <el-row :gutter="20">
                <el-col :span="18">
                    <el-input placeholder="请输入待提醒事项" v-model="message" clearable></el-input>
                </el-col>
                <el-col :span="3">
                    <el-select v-model="select_value" filterable placeholder="请选择级别">
                        <el-option v-for="item in options" :key="item.value" :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="3">
                    <el-button type="success" @click="addMessage()">提交</el-button>
                </el-col>
            </el-row>
            <el-row>
                <span style="text-align: center;display:block;">今日重要事件表</span>
            </el-row>
            <el-row>
                <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
                    @selection-change="">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column label="提交时间" width="240">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column prop="level" label="重要程度" width="240">
                    </el-table-column>
                    <el-table-column prop="message" label="具体信息" show-overflow-tooltip>
                    </el-table-column>
                </el-table>
                <!-- <div style="margin-top: 20px">
                    <el-button @click="">批量删除</el-button>
                </div> -->
            </el-row>
            <hr>

        </el-main>
    </el-container>
</template>


<script>
import { HelloWord, AddMessage, GetMessage } from './Api';
import header from "./Header.vue"

export default {
    name: "Index",
    data() {
        return {
            message: '',
            options: [{
                value: 'high',
            }, {
                value: 'middle',
            }, {
                value: 'low',
            }],
            select_value: 'low',
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
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
        },
        addMessage() {
            let params = {
                "message": this.message,
                "level": this.select_value
            }
            AddMessage(params).then(res => {
                if (res.data.code == "200") {
                    this.$message({
                        message: res.data.message,
                        type: 'success'
                    })
                }
                this.getMessage();
            })
        },
        getMessage() {
            GetMessage().then(res => {
                if (res.data.code == "200") {
                    this.tableData = res.data.data;
                    console.log(this.tableData)

                    this.$message({
                        message: res.data.message,
                        type: '查询成功!'
                    })
                }
            })
        },
    },
    components: {
        'Header': header
    },
    created() {
        this.getMessage()
    }
}
</script>
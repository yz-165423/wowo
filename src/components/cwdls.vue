<template>
<div>
<agent-head></agent-head>

<div class="agent">
<p class="title">申请成为代理商</p >
</div>

<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
<el-form-item label="用户名" prop="username">
<el-input v-model="ruleForm.username" placeholder="请填写您的用户名"></el-input>
</el-form-item>

<el-form-item label="密码" prop="pass">
<el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="请填写您的密码"></el-input>
</el-form-item>
<el-form-item label="确认密码" prop="checkPass">
<el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="确认密码"></el-input>
</el-form-item>

<el-form-item label="联系人" prop="name">
<el-input v-model="ruleForm.name" placeholder="请填写您的姓名"></el-input>
</el-form-item>
<el-form-item label="所在城市" prop="region">
<v-distpicker>
:province="province" 
:city="city" 
:area="area"
@selected="onSelected"
</v-distpicker>
</el-form-item>
<el-form-item label="微信号" prop="wx">
<el-input v-model="ruleForm.wx" placeholder="请填写您的微信号"></el-input>
</el-form-item>
<el-form-item label="联系电话" prop="phone">
<el-input v-model="ruleForm.phone" placeholder="请填写您的联系电话"></el-input>
</el-form-item>
<el-form-item>
<el-button type="danger" round>提交</el-button>
</el-form-item>
</el-form>

<agent-foot></agent-foot>

</div>
</template>
<script>

import heading from "./head.vue";
import footing from "./footer.vue";
import VDistpicker from 'v-distpicker'

export default {
data(){
return{
ruleForm: {
username: '',
pass: '',
checkpass: '',
name: '',
region: '',
wx: '',
phone: ''
},
rules: {
username: [
{ required: true, message: '请填写您的用户名', trigger: 'blur' },
{ min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
],
pass: [
{ validator: this.validatePass, trigger: 'blur' },
{ min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
],
checkPass: [
{ validator: this.validatePass2, trigger: 'blur' }
],
name: [
{ required: true, message: '请填写您的姓名', trigger: 'blur' },
{ min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
],
wx: [
{ required: true, message: '请填写您的微信号', trigger: 'blur' }
],
phone: [
{ required: true, message: '请填写正确的手机号码', trigger: 'blur' }
],
province: [],
city: [],
area: []
}
}
},
methods: {
onSelected(data) {
this.province = data.province.value;
this.city = data.city.value;
this.area = data.area.value;
this.ruleForm.province = this.province;
this.ruleForm.city = this.city;
this.ruleForm.area = this.area;
console.log(this.province)
console.log(this.city)
console.log(this.area)
},
submitForm(formName) {
this.$refs[formName].validate((valid) => {
if (valid) {
alert('submit!');
} else {
console.log('error submit!!');
return false;
}
});
},
resetForm(formName) {
this.$refs[formName].resetFields();
},
validatePass(rule, value, callback){
if (value === '') {
callback(new Error('请输入密码'));
} else {
if (this.ruleForm.checkPass !== '') {
this.$refs.ruleForm.validateField('checkPass');
}
callback();
}
},
validatePass2(rule, value, callback){
if (value === '') {
callback(new Error('请再次输入密码'));
} else if (value !== this.ruleForm.pass) {
callback(new Error('两次输入密码不一致!'));
} else {
callback();
}
}
},
components:{
'agent-head':heading,
'agent-foot':footing,
'v-distpicker':VDistpicker
}
}
</script>
<style scoped>
 .agent{
width: 100%;
height: auto;
min-width: 1200px;
padding-top: 60px;
}
.agent>.title{
font-size: 24px;
color: #474747;
font-weight: bold;
margin-top: 80px;
text-align: center;
text-indent: 0;
}
.el-form{
width: 635px;
margin: 80px auto 140px;
}
.el-button{
width: 200px;
height: 40px;
font-size: 17px;
margin-top: 50px;
margin-left: 120px
}
.v-distpicker{
background-color: #FFF;
background-image: none;
border-radius: 4px;
border: 1px solid #DCDFE6;
box-sizing: border-box;
color: #606266;
display: inline-block;
font-size: inherit;
height: 40px;
line-height: 40px;
outline: 0;
padding: 0 15px;
transition: border-color .2s cubic-bezier(.645,.045,.355,1);
width: 100%;
}
.distpicker-address-wrapper select{
padding: .5rem .75rem;
height: 40px;
font-size: 1rem;
line-height: 1.25;
color: #464a4c;
background-color: #fff;
background-image: none;
}
</style>

<template>
    <a-layout class="layout">
        <a-layout-header>
            <div class="logo" />
            <!-- <a-menu theme="dark" mode="horizontal" :selectedKeys="selectedKeys" :style="{ lineHeight: '64px' }">
                <a-menu-item key="1">nav 1</a-menu-item>
                <a-menu-item key="2">nav 2</a-menu-item>
                <a-menu-item key="3">nav 3</a-menu-item>
            </a-menu> -->
        </a-layout-header>
        <a-layout-content>
            <div class="sign-up-header"
                style="background-image: url('https://demos.creative-tim.com/muse-vue-ant-design-dashboard-pro/images/bg-signup.jpg');">
                <div class="content">
                    <h1 class="mb-5 signup-header-title">Sign Up</h1>
                    <p class="text-lg signup-header-subtitle">Hãy có trải nghiệm tốt nhất khi sử dụng phần mềm của chúng tôi
                    </p>
                </div>
            </div>
            <template>
                <div class="register-wrap-form">
                    <a-card class="register-body-form" title="Register With" :bordered="false">
                        <div class="register-content">
                            <div class="register-content-selection">
                                <button type="button" class="ant-btn"><img
                                        src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard-pro/images/logos/logos-facebook.svg"
                                        alt=""></button>
                                <button type="button" class="ant-btn"><img
                                        src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard-pro/images/logos/logo-apple.svg"
                                        alt=""></button>
                                <button type="button" class="ant-btn"><img
                                        src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard-pro/images/logos/Google__G__Logo.svg.png"
                                        alt=""></button>
                            </div>
                            <div class="register-content-selection--other">
                                <hr class="gradient-line">
                                <p class="font-semibold text-muted wrap-label"><span class="label">Or</span></p>
                            </div>

                            <a-form :form="form" @submit="handleSubmit">
                                <a-form-item v-bind="formItemLayout" label="E-mail">
                                    <a-input v-decorator="[
                                        'email',
                                        {
                                            rules: [
                                                {
                                                    type: 'email',
                                                    message: 'The input is not valid E-mail!',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Please input your E-mail!',
                                                },
                                            ],
                                        },
                                    ]" placeholder="E-mail">
                                        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                                    </a-input>

                                </a-form-item>
                                <a-form-item v-bind="formItemLayout" label="Password" has-feedback>
                                    <a-input v-decorator="[
                                        'password',
                                        {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Please input your password!',
                                                },
                                                {
                                                    validator: validateToNextPassword,
                                                },
                                            ],
                                        },
                                    ]" type="password" placeholder="Password">
                                        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                                    </a-input>

                                </a-form-item>
                                <a-form-item v-bind="formItemLayout" label="Confirm Password" has-feedback>
                                    <a-input v-decorator="[
                                        'confirm',
                                        {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Please confirm your password!',
                                                },
                                                {
                                                    validator: compareToFirstPassword,
                                                },
                                            ],
                                        },
                                    ]" type="password" placeholder="Confirm Password" @blur="handleConfirmBlur">
                                        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                                    </a-input>

                                </a-form-item>

                                <!-- <a-form-item v-bind="formItemLayout" label="Phone Number">
                                    <a-input v-decorator="[
                                        'phone',
                                        {
                                            rules: [{ required: true, message: 'Please input your phone number!' }],
                                        },
                                    ]" placeholder="Phone Number" style="width: 100%">
                                        <a-select slot="addonBefore" v-decorator="['prefix', { initialValue: '84' }]"
                                            style="width: 70px">
                                            <a-select-option value="84">
                                                +84
                                            </a-select-option>
                                        </a-select>
                                        <a-icon slot="prefix" type="phone" style="color: rgba(0,0,0,.25)" />
                                    </a-input>

                                </a-form-item> -->
                                <a-form-item style="text-align: center;">
                                    <a-button type="primary" html-type="submit">
                                        Register
                                    </a-button>
                                </a-form-item>
                            </a-form>
                        </div>
                    </a-card>
                </div>
            </template>
        </a-layout-content>

        <a-layout-footer style="text-align: center">
            Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
    </a-layout>
</template>
<script lang="js">
import { defineComponent } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
const auth = getAuth();

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Signup",
    data: () => ({
        confirmDirty: false,
        autoCompleteResult: [],
        email: '',
        password: '',
        formItemLayout: {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        },
        tailFormItemLayout: {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        },
    }),
    beforeCreate() {
        this.form = this.$form.createForm(this, { name: 'register' });
    },
    watch: {
        '$route': {
            handler(to) {
                const self = this
                console.log(to)
                self.defineForm = to.name
            },
            immediate: true
        }
    },
    methods: {
        handleConfirmBlur(e) {
            const value = e.target.value;
            this.confirmDirty = this.confirmDirty || !!value;
        },
        compareToFirstPassword(rule, value, callback) {
            const form = this.form;
            if (value && value !== form.getFieldValue('password')) {
                callback('Two passwords that you enter is inconsistent!');
            } else {
                callback();
            }
        },
        validateToNextPassword(rule, value, callback) {
            const form = this.form;
            if (value && this.confirmDirty) {
                form.validateFields(['confirm'], { force: true });
            }
            callback();
        },

        //Handle Register
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    createUserWithEmailAndPassword(auth, values.email, values.password)
                        .then((userCredential) => {
                            // Signed in 
                            const user = userCredential.user;
                            console.log(user)
                            if (user) {
                                this.$router.push({ path: '/login' })
                            }
                            // ...
                        })
                        .catch((error) => {
                            console.log(error.code)
                            if (error.code) {
                                this.$notification.error({
                                    message: 'Account Registration Failed',
                                    description:
                                        'This is Email is already use for Registration',
                                });
                            }
                            // ..
                        });
                }
            })
        },

    },
});
</script>
<style lang="scss"></style>
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
                    <h1 class="mb-5 signup-header-title">Login</h1>
                    <p class="text-lg signup-header-subtitle">Hãy có trải nghiệm tốt nhất khi sử dụng phần mềm của chúng tôi
                    </p>
                </div>
            </div>
            <template>
                <div class="register-wrap-form">
                    <a-card class="register-body-form" title="Login With" :bordered="false">
                        <div class="register-content">
                            <div class="register-content-selection">
                                <button type="button" class="ant-btn"><img
                                        src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard-pro/images/logos/logos-facebook.svg"
                                        alt=""></button>
                                <button type="button" class="ant-btn"><img
                                        src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard-pro/images/logos/logo-apple.svg"
                                        alt=""></button>
                                <button type="button" class="ant-btn" @click="signInWithGmail()"><img
                                        src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard-pro/images/logos/Google__G__Logo.svg.png"
                                        alt=""></button>

                            </div>
                            <div class="register-content-selection--other">
                                <hr class="gradient-line">
                                <p class="font-semibold text-muted wrap-label"><span class="label">Or</span></p>
                            </div>

                            <a-form id="components-form-demo-normal-login" :form="form" class="login-form"
                                @submit="handleSubmitLogin">
                                <a-form-item>
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

                                <a-form-item>
                                    <a-input v-decorator="[
                                        'password',
                                        { rules: [{ required: true, message: 'Please input your Password!' }] },
                                    ]" type="password" placeholder="Password">
                                        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                                    </a-input>
                                </a-form-item>
                                <a-form-item>
                                    <a-checkbox v-decorator="[
                                        'remember',
                                        {
                                            valuePropName: 'checked',
                                            initialValue: true,
                                        },
                                    ]">
                                        Remember me
                                    </a-checkbox>
                                    <a class="login-form-forgot" href="">
                                        Forgot password
                                    </a>
                                    <a-button :loading="loading" type="primary" html-type="submit"
                                        class="login-form-button">
                                        Log in
                                    </a-button>
                                    Or
                                    <a href="/signup">
                                        register now!
                                    </a>
                                </a-form-item>
                                <a-form-item>
                                    <input v-model.lazy="msg"/>
                                    <input v-model.number="age" type="number"/>
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
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
const auth = getAuth();

//Specify additional OAuth 2.0 scopes that you want to request from the authentication provider.
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// To apply the default browser preference instead of explicitly setting it.
auth.languageCode = 'vn';


provider.setCustomParameters({
    'login_hint': 'user@example.com'
});

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Login",
    data: () => ({
        confirmDirty: false,
        autoCompleteResult: [],
        defineForm: 'Login',
        email: '',
        password: '',
        loading: false,
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
        this.form = this.$form.createForm(this, { name: 'normal_login' });
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
        handleSubmitLogin(e) {
            this.loading = true
            e.preventDefault()
            this.form.validateFields((err, values) => {
                console.log(values.msg, values.age)
                let self = this
                if (!err) {
                    signInWithEmailAndPassword(auth, values.email, values.password)
                        .then((userCredential) => {
                            // Signed in 
                            const user = userCredential.user;
                            console.log(user)
                            if (user.uid || user.accessToken) {
                                //Gửi user.uid về cho BE để nhận accessToken service
                                this.loading = false
                                console.log('test')
                                self.$router.push({ path: '/dashboard' })
                            }
                            else {
                                self.$notification.error({
                                    message: 'Something went wrong',
                                    description:
                                        'Please try again!',
                                });
                            }
                            // ...
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            if (errorCode) {
                                self.$notification.error({
                                    message: 'Login Unsuccessful',
                                    description:
                                        'Your Email or password is not correct. Please try again',
                                });
                            }
                            this.loading = false
                        });
                }
            });
        },

        signInWithGmail() {
            signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    if (user) {
                        this.loading = false
                        console.log('test')
                        this.$router.push({ path: '/dashboard' })
                    }
                    else {
                        this.loading = true
                    }

                    console.log(token, user)
                    // IdP data available using getAdditionalUserInfo(result)
                    // ...
                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...

                    console.log(errorCode, errorMessage, email, credential)
                });
        }

    },
});
</script>
<style lang="scss"></style>
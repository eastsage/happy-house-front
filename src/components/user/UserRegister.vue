<template>
    <b-container class="bv-example-row mt-3">
        <h3 class="underline-steelblue"><b-icon icon="person-circle"></b-icon> 회원가입</h3>
        <div>
            <div class="centered-card">
                <div class="card px-5 py-5">
                    <img
                        style="margin-left: auto; margin-right: auto"
                        src="@/assets/hlogo3.png"
                        width="30%"
                    />
                    <b-card-text> </b-card-text>
                    <b-card-text class="font-weight-bold">
                        간편하게 가입하고 다양한 서비스를 이용하세요.
                    </b-card-text>
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                        <b-form-group
                            class="font-weight-bold"
                            label-align="left"
                            id="input-group-1"
                            label="아이디:"
                            label-for="input-1"
                        >
                            <div class="d-flex">
                                <b-form-input
                                    id="input-1"
                                    v-model="form.username"
                                    placeholder="아이디를 입력해 주세요."
                                    required
                                    autocomplete="off"
                                ></b-form-input>
                            </div>
                        </b-form-group>

                        <b-form-group
                            class="font-weight-bold"
                            label-align="left"
                            id="input-group-2"
                            label="비밀번호:"
                            label-for="input-2"
                        >
                            <b-input-group v-if="showPassword">
                                <b-form-input
                                    id="input-2"
                                    type="text"
                                    v-model="form.password"
                                    placeholder="비밀번호를 입력해 주세요."
                                    required
                                    autocomplete="off"
                                    @blur="checkPw"
                                ></b-form-input>
                                <b-input-group-append>
                                    <b-button
                                        variant="outline-secondary"
                                        class="custom-button"
                                        @click="toggleShow"
                                    >
                                        <b-icon icon="eye-fill" aria-hidden="true"></b-icon>
                                    </b-button>
                                </b-input-group-append>
                            </b-input-group>
                            <b-input-group v-else>
                                <b-form-input
                                    id="input-2"
                                    class="custom-input"
                                    type="password"
                                    v-model="form.password"
                                    placeholder="비밀번호를 입력해 주세요."
                                    required
                                    autocomplete="off"
                                    @blur="checkPw"
                                ></b-form-input>
                                <b-input-group-append>
                                    <b-button
                                        variant="outline-secondary"
                                        class="custom-button"
                                        @click="toggleShow"
                                    >
                                        <b-icon
                                            else
                                            icon="eye-slash-fill"
                                            aria-hidden="true"
                                        ></b-icon>
                                    </b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </b-form-group>

                        <b-form-group
                            class="font-weight-bold"
                            label-align="left"
                            id="input-group-3"
                            label="비밀번호 재확인:"
                            label-for="input-3"
                        >
                            <b-input-group v-if="showRepassword">
                                <b-form-input
                                    id="input-3"
                                    type="text"
                                    v-model="form.rePassword"
                                    placeholder="비밀번호 재확인을 입력해 주세요."
                                    required
                                    autocomplete="off"
                                    @blur="checkRepw"
                                ></b-form-input>
                                <b-input-group-append>
                                    <b-button
                                        variant="outline-secondary"
                                        class="custom-button"
                                        @click="retoggleShow"
                                    >
                                        <b-icon icon="eye-fill" aria-hidden="true"></b-icon>
                                    </b-button>
                                </b-input-group-append>
                            </b-input-group>
                            <b-input-group v-else>
                                <b-form-input
                                    id="input-3"
                                    type="password"
                                    v-model="form.rePassword"
                                    placeholder="비밀번호 재확인을 입력해 주세요."
                                    required
                                    autocomplete="off"
                                    @blur="checkRepw"
                                ></b-form-input>
                                <b-input-group-append>
                                    <b-button
                                        variant="outline-secondary"
                                        class="custom-button"
                                        @click="retoggleShow"
                                    >
                                        <b-icon
                                            else
                                            icon="eye-slash-fill"
                                            aria-hidden="true"
                                        ></b-icon>
                                    </b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </b-form-group>
                        <div v-show="checkedRepw" class="msg">
                            <div v-if="!isValidRePassword" class="danger">
                                비밀번호가 일치하지 않습니다.
                            </div>
                        </div>

                        <b-form-radio-group
                            id="btn-radios"
                            v-model="form.selectedRole"
                            :options="form.roles"
                            button-variant="outline-success"
                            size="lg"
                            name="radio-btn-outline"
                            buttons
                        ></b-form-radio-group>
                        <br />
                        <br />

                        <div class="d-flex justify-content-center">
                            <b-button
                                class="submit-button"
                                type="submit"
                                variant="outline-primary"
                                @click="submit"
                                >가입하기</b-button
                            >
                            <b-button class="reset-button" type="reset" variant="outline-danger"
                                >다시 입력</b-button
                            >
                        </div>
                    </b-form>
                </div>
            </div>
        </div>
    </b-container>
</template>

<script>
import http from "@/router/axios-common.js";

export default {
    data() {
        return {
            form: {
                username: "",
                password: "",
                rePassword: "",
                selectedRole: "",
                roles: [
                    { text: "일반 회원", value: "ROLE_CUSTOMER" },
                    { text: "판매자 회원", value: "ROLE_SELLER" },
                ],
            },
            show: true,
            showPassword: false,
            showRepassword: false,

            checkedRepw: false,

            isValidUsername: false,
            isValidPassword: false,
            isValidRePassword: false,
            isValidselectedRole: false,

            errMsgForUsername: "",
            errMsgForName: "",
        };
    },
    created() {},
    methods: {
        onSubmit(event) {
            event.preventDefault();
        },
        onReset(event) {
            event.preventDefault();
            // Reset our form values
            this.form.username = "";
            this.form.password = "";
            this.form.rePassword = "";
            this.form.selectedRole = "";
            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
        },
        toggleShow() {
            this.showPassword = !this.showPassword;
        },
        retoggleShow() {
            this.showRepassword = !this.showRepassword;
        },

        checkId() {
            if (this.form.username.length > 0) this.isValidUsername = true;
        },

        checkPw() {
            if (this.form.password.length > 0) this.isValidPassword = true;
        },
        checkRepw() {
            this.checkedRepw = true;
            if (this.form.password == this.form.rePassword) this.isValidRePassword = true;
            else this.isValidRePassword = false;
        },
        submit() {
            //아이디 값이랑 이름 값 true로 안바껴서 그냥 반대로함
            if (this.isValidUsername) {
                alert("아이디를 입력해 주세요.");
            } else if (!this.isValidPassword) {
                alert("비밀번호를 입력해 주세요.");
            } else if (!this.isValidRePassword) {
                alert("비밀번호 재확인을 입력해 주세요.");
            } else if (this.selectedRole) {
                alert("역할을 선택해주세요.");
            } else {
                http.post("/vue/user/join", {
                    username: this.form.username,
                    password: this.form.password,
                    roles: this.form.selectedRole,
                })
                    .then((response) => {
                        if (response.data.result == "join success!") {
                            alert("회원가입이 완료되었습니다.");
                            this.$router.push("/user/login");
                        } else {
                            alert("회원가입 실패");
                        }
                    })
                    .catch((exp) => alert(exp + ": 회원가입 실패"));
            }
        },
    },
};
</script>

<style scoped>
.underline-steelblue {
    display: inline-block;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgba(72, 190, 233, 0.3) 30%);
    font-weight: bold;
}
.custom-input,
.custom-button {
    height: 38px; /* 원하는 높이로 조정 */
    line-height: 1.5;
}
.card {
    height: 600px;
    width: 70%;
}
.centered-card {
    display: flex;
    justify-content: center;
}
.submit-button,
.reset-button {
    margin-left: 5px;
    margin-right: 5px;
    width: 100px;
}
.check-button {
    height: 38px;
    width: 140px;
    margin-left: 5px;
}
div.msg {
    margin-bottom: 1rem;
}
.primary {
    color: #007bff;
}
.danger {
    color: #dc3545;
}
</style>

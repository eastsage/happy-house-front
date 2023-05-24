<template>
<b-container class="bv-example-row mt-3">
    <h3 class="underline-steelblue"><b-icon icon="person-circle"></b-icon> 회원가입</h3>
    <div>
        <div class="centered-card">
            <div class="card px-5 py-5">
              <img style="margin-left: auto; margin-right: auto;" src = "@/assets/hlogo3.png" width="30%" />
              <b-card-text>
      
              </b-card-text>
              <b-card-text class="font-weight-bold">
                간편하게 가입하고 다양한 서비스를 이용하세요.
              </b-card-text>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group class="font-weight-bold" label-align="left" id="input-group-1" label="아이디:" label-for="input-1">
                        <div class="d-flex">
                            <b-form-input
                                id="input-1"
                                v-model="form.id"
                                placeholder="아이디를 입력해 주세요."
                                required
                                autocomplete="off"
                            ></b-form-input>
                        </div>
                    </b-form-group>
                    

                    <b-form-group class="font-weight-bold" label-align="left" id="input-group-2" label="비밀번호:" label-for="input-2">
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
                                <b-button variant="outline-secondary" class="custom-button" @click="toggleShow">
                                    <b-icon
                                        icon="eye-fill"
                                        aria-hidden="true"
                                    ></b-icon>
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
                                <b-button variant="outline-secondary" class="custom-button" @click="toggleShow">
                                    <b-icon
                                        else
                                        icon="eye-slash-fill"
                                        aria-hidden="true"
                                    ></b-icon>
                                </b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form-group>

                    <b-form-group class="font-weight-bold" label-align="left" id="input-group-3" label="비밀번호 재확인:" label-for="input-3">
                        <b-input-group v-if="showRepassword">
                            <b-form-input
                                id="input-3"
                                type="text"
                                v-model="form.repassword"
                                placeholder="비밀번호 재확인을 입력해 주세요."
                                required
                                autocomplete="off"
                                @blur="checkRepw"
                            ></b-form-input>
                            <b-input-group-append>
                                <b-button variant="outline-secondary" class="custom-button" @click="retoggleShow">
                                    <b-icon
                                        icon="eye-fill"
                                        aria-hidden="true"
                                    ></b-icon>
                                </b-button>
                            </b-input-group-append>
                        </b-input-group>
                        <b-input-group v-else>
                            <b-form-input
                                id="input-3"
                                type="password"
                                v-model="form.repassword"
                                placeholder="비밀번호 재확인을 입력해 주세요."
                                required
                                autocomplete="off"
                                @blur="checkRepw"
                            ></b-form-input>
                            <b-input-group-append>
                                <b-button variant="outline-secondary" class="custom-button" @click="retoggleShow">
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
                        <div v-if="!isValidRepw" class="danger">비밀번호가 일치하지 않습니다.</div>
                    </div>

                    <b-form-group class="font-weight-bold" label-align="left" id="input-group-4" label="이름:" label-for="input-4">
                        <div class="d-flex">
                            <b-form-input
                                id="input-4"
                                v-model="form.name"
                                placeholder="이름을 입력해 주세요."
                                required
                                autocomplete="off"
                            ></b-form-input>
                        </div>
                    </b-form-group>
                    
                    
                    <div class="d-flex justify-content-center">
                        <b-button class="submit-button" type="submit" variant="outline-primary" @click="submit">가입하기</b-button>
                        <b-button class="reset-button" type="reset" variant="outline-danger">다시 입력</b-button>
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
                id: '',
                password: '',
                repassword: '',
                role: '',
                name: '',
            },
            show: true,
            showPassword: false,
            showRepassword: false,

            checkedRepw:false,

            isValidId:false,
            isValidPw:false,
            isValidRepw:false,
            isValidName:false,

            errMsgForId:'',
            errMsgForName:'',
        }
    },
    created() {
        this.form.role = this.$route.params.role;
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.id = ''
            this.form.password = ''
            this.form.repassword = ''
            this.form.name = ''
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
    toggleShow() {
        this.showPassword = !this.showPassword;
    },
    retoggleShow() {
        this.showRepassword = !this.showRepassword;
    },
    
    
    checkId() {
        if(this.form.id.length > 0) this.isValidId=true;
    },
    
    checkPw() {
        if(this.form.password.length > 0) this.isValidPw=true;
    },
    checkRepw() {
        this.checkedRepw=true;
        if(this.form.password == this.form.repassword) this.isValidRepw=true;
        else this.isValidRepw=false;
    },
    checkName() {
        if(this.form.name.length > 0) this.isValidName=true;
    },
    submit() {
        //아이디 값이랑 이름 값 true로 안바껴서 그냥 반대로함
        if(this.isValidId) {
            alert("아이디를 입력해 주세요.");
        }
        else if(!this.isValidPw) {
            alert("비밀번호를 입력해 주세요.");
        }
        else if(!this.isValidRepw) {
            alert("비밀번호 재확인을 입력해 주세요.");
        }
        else if(this.isValidName){
            alert("이름을 입력해주세요.");
        }
        
        else {
            http.post("/api/user/join", {
                id:this.form.id,
                pw:this.form.password,
                name:this.form.name,
                role:this.form.role
            })
            .then(response => {
                if(response.data.result == "join success!") {
                    alert("회원가입이 완료되었습니다.");
                    this.$router.push("/login");
                }
                else {
                    alert("회원가입 실패");
                }
            })
            .catch(exp => alert(exp + ": 회원가입 실패"));
        }
    }
    }
}
</script>

<style scoped>
.underline-steelblue {
  display: inline-block;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgba(72, 190, 233, 0.3) 30%);
  font-weight: bold;
}
.custom-input, .custom-button {
  height: 38px; /* 원하는 높이로 조정 */
  line-height: 1.5;
}
.card{
    height: 600px;
    width: 70%;
}
.centered-card{
    display: flex;
    justify-content: center;
}
.submit-button, .reset-button{
    margin-left: 5px;
    margin-right: 5px;
    width: 100px;
}
.check-button{
    height: 38px;
    width: 140px;
    margin-left: 5px;
}
div.msg{
    margin-bottom: 1rem;
}
.primary{
    color: #007bff;
}
.danger{
    color: #dc3545;
}
</style>
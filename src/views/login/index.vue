<!--<template>-->
<!--  <div class="view-account">-->
<!--    <div class="view-account-header"></div>-->
<!--    <div class="view-account-container">-->
<!--      <div class="view-account-top">-->
<!--        <div class="view-account-top-logo m-0">-->
<!--          <img class="m-auto" style="margin: auto" src="@/assets/images/logo.png" alt="" />-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="view-account-form">-->
<!--        <n-form-->
<!--            ref="formRef"-->
<!--            label-placement="left"-->
<!--            size="large"-->
<!--            :model="formInline"-->
<!--            :rules="rules"-->
<!--        >-->
<!--          <n-form-item path="username">-->
<!--            <n-input v-model:value="formInline.username" placeholder="用户名:super@a.com">-->
<!--              <template #prefix>-->
<!--                <n-icon size="18" color="#808695">-->
<!--                  <PersonOutline />-->
<!--                </n-icon>-->
<!--              </template>-->
<!--            </n-input>-->
<!--          </n-form-item>-->
<!--          <n-form-item path="password">-->
<!--            <n-input-->
<!--                v-model:value="formInline.password"-->
<!--                type="password"-->
<!--                showPasswordOn="click"-->
<!--                placeholder="密码:123123"-->
<!--            >-->
<!--              <template #prefix>-->
<!--                <n-icon size="18" color="#808695">-->
<!--                  <LockClosedOutline />-->
<!--                </n-icon>-->
<!--              </template>-->
<!--            </n-input>-->
<!--          </n-form-item>-->
<!--          <n-form-item>-->
<!--            <n-button type="primary" @click="handleSubmit" size="large" :loading="loading" block>-->
<!--              登录-->
<!--            </n-button>-->
<!--          </n-form-item>-->
<!--        </n-form>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script lang="ts" setup>-->
<!--import { reactive, ref } from "vue";-->
<!--import { PersonOutline, LockClosedOutline} from "@vicons/ionicons5";-->
<!--import {useUserStore} from "@/store/user";-->
<!--import {useRouter} from "vue-router";-->
<!--// import { useMessage } from 'naive-ui';-->

<!--// const message = useMessage();-->
<!--// (<any>window).$message = useMessage();-->

<!--interface FormState {-->
<!--  email: string;-->
<!--  password: string;-->
<!--}-->

<!--const formRef = ref();-->
<!--const loading = ref(false);-->
<!--const userStore = useUserStore();-->
<!--const router = useRouter()-->

<!--const formInline = reactive({-->
<!--  username: 'super@a.com',-->
<!--  password: '123123'-->
<!--})-->

<!--// 验证规则-->
<!--const rules = {-->
<!--  // 失去焦点时触发-->
<!--  username:{ required: true, message: "请输入用户名", trigger: "blur" },-->
<!--  password:{ required: true, message: "请输入密码", trigger: "blur" },-->
<!--};-->

<!--const handleSubmit = () =>{-->
<!--//  表单验证-->
<!--  formRef.value.validate(async(errors:any) =>{-->
<!--    console.log(!errors)-->
<!--    if(!errors){-->
<!--      // return; // 有错误就返回，不执行，不再往下发送请求-->
<!--      // 接收数据-->
<!--      const {username,password}= formInline;-->
<!--      // 显示登录中-->
<!--      loading.value = true;-->
<!--      // 调整数据结构-->
<!--      const params:FormState={-->
<!--        email:username,-->
<!--        password-->
<!--      };-->
<!--      try{-->
<!--        // 执行登录操作-->
<!--        console.log(params)-->
<!--        userStore.login(params).then(_res =>{-->
<!--          // 关闭窗口-->
<!--          // Comment(res);-->
<!--          // message.success("登陆成功");-->
<!--          loading.value = false;-->
<!--          // 弹出提示  登陆成功-->
<!--          // 跳转回首页-->
<!--          // router.push({name: "dashboard"});-->
<!--          console.log(_res)-->
<!--        }).catch(()=>{-->
<!--          loading.value = false;-->
<!--        });-->
<!--        // 成功跳转到首页-->
<!--        // 失败后提示-->
<!--      }finally {-->
<!--        loading.value = false;-->
<!--      }-->
<!--    }else {-->
<!--      // message.error('请填写完整信息，并且进行验证码校验')-->

<!--    }-->
<!--  })-->
<!--}-->

<!--</script>-->

<!--<style lang="less" scoped>-->
<!--.view-account {-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  height: 100vh;-->
<!--  overflow: auto;-->

<!--  &-container {-->
<!--    flex: 1;-->
<!--    padding: 32px 12px;-->
<!--    max-width: 384px;-->
<!--    min-width: 320px;-->
<!--    margin: 0 auto;-->
<!--  }-->

<!--  &-top {-->
<!--    padding: 32px 0;-->
<!--    text-align: center;-->

<!--    &-desc {-->
<!--      font-size: 14px;-->
<!--      color: #808695;-->
<!--    }-->
<!--  }-->

<!--  &-other {-->
<!--    width: 100%;-->
<!--  }-->

<!--  .default-color {-->
<!--    color: #515a6e;-->

<!--    .ant-checkbox-wrapper {-->
<!--      color: #515a6e;-->
<!--    }-->
<!--  }-->
<!--}-->

<!--@media (min-width: 768px) {-->
<!--  .view-account {-->
<!--    background-image: url('../../assets/images/login.svg');-->
<!--    background-repeat: no-repeat;-->
<!--    background-position: 50%;-->
<!--    background-size: 100%;-->
<!--  }-->

<!--  .page-account-container {-->
<!--    padding: 32px 0 24px 0;-->
<!--  }-->
<!--}-->
<!--</style>-->


<!--<script src="../../vite-env.d.ts"></script>-->
<template>
  <div class="view-account">
    <div class="view-account-header"></div>
    <div class="view-account-container">
      <div class="view-account-top">
        <div class="view-account-top-logo m-0">
          <img class="m-auto" style="margin: auto" src="@/assets/images/logo.png" alt=""/>
        </div>
      </div>
      <div class="view-account-form">
        <n-form
            ref="formRef"
            label-placement="left"
            size="large"
            :model="formInline"
            :rules="rules"
        >
          <n-form-item path="username">
            <n-input v-model:value="formInline.username" placeholder="用户名:super@a.com">
              <template #prefix>
                <n-icon size="18" color="#808695">
                  <PersonOutline/>
                </n-icon>
              </template>
            </n-input>
          </n-form-item>
          <n-form-item path="password">
            <n-input
                v-model:value="formInline.password"
                type="password"
                showPasswordOn="click"
                placeholder="密码:123123"
            >
              <template #prefix>
                <n-icon size="18" color="#808695">
                  <LockClosedOutline/>
                </n-icon>
              </template>
            </n-input>
          </n-form-item>
          <n-form-item>
            <n-button type="primary" @click="handleSubmit" size="large" :loading="loading" block>
              登录
            </n-button>
          </n-form-item>
        </n-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import {PersonOutline, LockClosedOutline} from "@vicons/ionicons5";
//这个导入的是导入的store/user 里面的 userUserStore
import {useUserStore} from "@/store/user";
import {useRouter} from "vue-router";
import { useMessage } from 'naive-ui';

//
const message = useMessage();
//在window上全局挂载useMessage （成功的，失败的...）
(<any>window).$message = useMessage();
//定义了一个接口说明他们的类型  根据api登录 Body参数设置
interface FormState {
  email: string;
  password: string;
}
//表单验证 做了一个引用
const formRef = ref();
//点击登录之后按钮加载状态 true转圈圈
const loading = ref(false);
//这个useUserStore（）是上边导入的
const userStore = useUserStore();
const router = useRouter();
//在表单里面进行双向绑定的 发送给后台
//v-model:value="formInline.username"
const formInline = reactive({
  username: 'super@a.com',
  password: '123123'
})

// 验证规则 表单验证
const rules = {
  // 失去焦点时触发
  username: {required: true, message: "请输入用户名", trigger: "blur"},
  password: {required: true, message: "请输入密码", trigger: "blur"},
};

//点击事件
const handleSubmit = () => {
  console.log(formInline)
  //这里面有用户名和密码
  // 表单验证 这里来验证表单是否正确
  formRef.value.validate(async (errors: any) => {
    console.log(!errors)
    if (!errors) {
      //标点验证通过  true
      // return; // 有错误就返回，不执行，不再往下发送请求
      // 接收数据
      const {username, password} = formInline;
      // 显示登录中  转圈圈
      loading.value = true;
      // 调整数据结构  我表单和后台传的不一样
      //params 调整好的
      const params: FormState = {
        email: username,
        password
      };
      try {
        console.log(params)
        // 执行登录操作 这里的userStore 是上边定义的调方法 useUserStore
        //这里的login是状态里面的登录方法() params 调整好的数据  把他给了userInfo
        //登录页面调的状态的login
        //这个res就是return过来的 response
        userStore.login(params).then(_res => {      // res是userStore里面返回的数据
          // 关闭窗口
          // Comment(res);
          message.success("登陆成功");
          loading.value = false;
          // 弹出提示  登陆成功
          // 跳转回首页
          router.push({name: "dashboard"});
          console.log(_res)
        }).catch(() => {
          // console.log(err);
          loading.value = false;
        });
        // 成功跳转到首页
        // 失败后提示

      } finally {
        loading.value = false;
      }
    } else {
      // message.error('请填写完整信息，并且进行验证码校验')
    }
  })
}

</script>

<style lang="less" scoped>
.view-account {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;

  &-container {
    flex: 1;
    padding: 32px 12px;
    max-width: 384px;
    min-width: 320px;
    margin: 0 auto;
  }

  &-top {
    padding: 32px 0;
    text-align: center;

    &-desc {
      font-size: 14px;
      color: #808695;
    }
  }

  &-other {
    width: 100%;
  }

  .default-color {
    color: #515a6e;

    .ant-checkbox-wrapper {
      color: #515a6e;
    }
  }
}

@media (min-width: 768px) {
  .view-account {
    background-image: url('../../assets/images/login.svg');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100%;
  }

  .page-account-container {
    padding: 32px 0 24px 0;
  }
}
</style>
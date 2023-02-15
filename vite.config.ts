import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

import {resolve} from 'path';
function pathResolve (dir:string){
  //获取绝对路径的方法
  return resolve(process.cwd(),'.',dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],

//  简化路径要加的内容
  resolve:{
    alias:[
      {
      //  简化路径前缀，使用绝对地址
        find:'@',
        replacement:(pathResolve('src'))
      }
    ]
  },
  //配置版本号
  server:{
    host:'localhost',
    port :8000
  }

  // resolve:{
  //   alias:[
  //     {
  //       // 简化路径前缀，使用绝对地址
  //       find:'@',
  //       replacement:(pathResolve('src'))
  //     }
  //   ]
  //
  // },
})
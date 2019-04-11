<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {
    debugger
    let onWatch = (obj, setBind, getLogger) => {
      let handler = {
        get(target, property, receiver) {
          getLogger(target, property);
          return Reflect.get(target, property, receiver);
        },
        set(target, property, value, receiver) {
          setBind(value, property);
          return Reflect.set(target, property, value);
        }
      };
      return new Proxy(obj, handler);
    };

    let obj = { a: 1 };
    let p = onWatch(
      obj,
      (v, property) => {
        console.log(`监听到属性${property}改变为${v}`);
      },
      (target, property) => {
        console.log(`'${property}' = ${target[property]}`);
      }
    );
    p.a = 2; // 监听到属性a改变
    p.a; // 'a' = 2
  },
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
</style>

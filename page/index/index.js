
import { formatTime, getParams, checkPhone, environMent } from '../../resources/js/util.js';
new Vue({
    el: '#app',
    data: {
        dataText: ''
    },
    created() {

    },
    methods: {
        getTime() {
            this.dataText = formatTime(new Date());
        },
        getParams() {
            let params = getParams();
            this.dataText = JSON.stringify(params);
        },
        checkPhone() {
            let flag = checkPhone(this.dataText);
            $.toast(flag ? '验证通过' : '手机号有误', flag ? 'success' : 'text')
        },
        environMent() {
            this.dataText = JSON.stringify(environMent())
        },
        init() {
            $.ajax({
                url: 'https://duearn.com/tmk/app/task/taskDetail/126',
                type: "post",
                contentType: "application/json; charset=utf-8",
                data: {},
                cache: false,
                async: false,
                success: function (result) {
                    console.log(res)
                }
            });
        },
    },

})
const app = new Vue({
    el: '#root',
    data: {
        newTask: {
                task: '',
                done: false,
                type: ''
        },
        arrTask: [
            {
                task: 'Get kicked from school',
                done: false,
                type: 'normal'
            },
            {
                task: 'Search on google "how to center a div"',
                done: false,
                type: 'easy'
            },
            {
                task: 'Call mom and say her that I already eat! (lie)',
                done: false,
                type: 'easy'
            },
            {
                task: 'Gonna catch them all',
                done: true,
                type: 'hard'
            },
        ],
    },
    methods:{
        value0 () {
            document.getElementById('newTask').value = ''
        },
        addTask(){
            if(this.newTask.task != '') {
                this.arrTask.unshift(this.newTask);
                this.newTask = {
                    task: '',
                    done: false,
                    type: ''
                };
            }
        }
    }
});
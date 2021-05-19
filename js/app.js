

var vm=new Vue({
 el:"#container",
 data:{
    title:'',
    content:'',
    error:'',
    notes:[
         
     ]
 },methods:{
     addnote:function(){
        if(this.title && this.content){
             this.notes.push({title:`${this.title}`,content:`${this.content}`})
        }else if(!this.title){
            return this.error='not writer Title'
        }else{
            return this.error='not writer Text'
        }
         
     }
 },
})
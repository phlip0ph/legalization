Vue.component('cube', {
    props: {
        title: String,
        author: String,
        previewImage: String,
        preview: String,
        headerImage: String,
        title1: String,
        title2: String,
        title3: String,
        content1: String,
        content2: String,
        content3: String,
    },
    template:`
    <div class = "section">
        <div class = "section-button" v-bind:class="[isActive ? 'show' : 'hidden']" @click="expand()">
                <h3>{{title}}</h3> 
                <h4>{{author}}</h4>
                <img class="previewImage" :src="previewImage"></img>
                <p>{{preview}}</p>
        <div class = "overlay" >
            <img class = "headerImage" :src="headerImage"></img>
            <h4>{{title1}}</h4>
            <p>{{content1}}</p>
            <h4>{{title2}}</h4>
            <p>{{content2}}</p>
            <h4>{{title3}}</h4>
            <p>{{content3}}</p>
        </div>
        </div> 
    </div>
    `,
    data: function(){
        return { isActive: false }
    },
    methods:{
        expand: function(event){
            if(this.isActive){
                this.isActive = false
            }
            else{this.isActive = true}

        }
    }
})
new Vue({el: '#sections-area'})
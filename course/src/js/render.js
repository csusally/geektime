import Engine from "../components/template/engine";

// let tmpl1 = `<div class="newslist">
//     <div class="img" v-if="info.showImage"><img src="{{image}}"/></div>
//     <div class="date" v-if="info.showDate">{{info.name}}</div>
//     <div class="img">{{info.name}}</div>
// </div>`;
let tmpl = `<div class="newslist">
    <div class="img" v-if="showImage"><img src="{{image}}"/></div>
    <div class="date" v-if="name">{{name}}</div>
    <div class="img">{{name}}</div>
</div>`;
 
var data = {
    image: "some image0",
    name: "Name",
    showImage: true,
};

// var data1 = {
//     image: "some img", 
//     info: {
//         showImage: true, 
//         showDate:false, 
//         name: "aaa"
//     }
    
// };

export default function test() {
    let dom = new Engine().render(tmpl, data);
    // let dom1 =  new Engine().render(tmpl1, data1);

    console.log("result:", dom)
    // console.log("result1:", dom1)
}


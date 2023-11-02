import { create } from "apisauce";

const api = create({
    //  baseURL: 'http://192.168.251.206:1337/api',
     baseURL: 'http://192.168.0.104:1337/api',
    //  baseURL: 'http://192.168.112.206:1337/api',
    // baseURL:'https://tubeguruji-admin.herokuapp.com/api',
    headers: { 
        "X-API-Key":"e120626226fe396d04731a64148399f82afb8e548521c5543d979d1fb7e8714af568e59f233f610fcb5e829d9e6c067d6c80cbedf27f24aee189806f8e5adbc577889dc7b01ad3018e3c1c4549ca30d2e1b20e250590af5c5f8f8b23b30909204d145218867c0187c7c2e3002ab89607ea5de310946f3fbeb25e72bb623229f8"
      },
  })

const getSlider=()=>api.get('/sliders?populate=*');
const getVideoCourse=()=>api.get('/video-courses?populate=*');
const getCourseList=(type)=>
api.get('/course-lists?filters[type][$eq]='
+type+'&populate[Topic][populate][0]=Content&populate[image][populate][0]=image');

const setCourseProgress=(data)=>api.post('/course-progresses',data);

const getCourseProgress=(uid,courseId)=>
api.get('/course-progresses?filters[uid][$eq]='
+uid+'&filters[courseId][$eq]='+courseId)
export default{
    getSlider,
    getVideoCourse,
    getCourseList, 
    setCourseProgress,
    getCourseProgress
}
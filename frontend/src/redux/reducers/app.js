import axios from "axios";

const SET_PAGE_STATE = 'SET_PAGE_STATE';
const SET_TEACHERS = 'SET_TEACHERS';
const SET_COOKS = 'SET_COOKS';
const SET_PROGRESS = 'SET_PROGRESS';
const SET_ABOUT = 'SET_ABOUT';
const SET_HISTORY = 'SET_HISTORY';
const SET_GALLERY = 'SET_GALLERY';

const DOMAIN = 'http://asiacambridge.edu.kg/';
const serverDocumentation = `${DOMAIN}api/swagger/`;
const optionServer = `${DOMAIN}api/settings/`;
const teachersAPI = `/api/teachers/`;
const cooksAPI = `/api/cooks/`;
const progressAPI = `api/settings/progress/`;
const aboutAPI = `api/settings/about/`;
const historyAPI = `api/settings/history/`;
const galleryAPI = `api/gallery`;


const initState = {
    DOMAIN,
    teachers: [],
    cooks: [],
    pageState: localStorage.getItem("pageState") ? localStorage.getItem("pageState") : "home",
    progress: [],
    about: [],
    history:[],
    gallery:[],
};

const returnCase = (key, state, action) =>{
    return {
        ...state,
        [key]: action[key]
    }
};

export const app = (state = initState, action) => {
    switch (action.type) {
        case SET_PAGE_STATE: {
           return returnCase('pageState', state, action);
        }
        case SET_TEACHERS: {
            return returnCase('teachers', state, action)
        }
        case SET_COOKS: {
            return returnCase('cooks', state, action)
        }
        case SET_ABOUT:{
            return returnCase('about', state, action)
        }
        case SET_PROGRESS:{
            return returnCase('progress', state, action)
        }
        case SET_GALLERY :{
            return returnCase('gallery', state, action)
        }
        case SET_HISTORY :{
            return returnCase('history', state, action)
        }
        default:
            return state
    }
};

export const setPageSate = () => {
    let pageState;
    return (dispatch) => {
        switch (true) {
            case window.location.href.includes('contact'): {
                pageState = 'contact';
                break
            }
            case window.location.href.includes('about'): {
                pageState = 'about';
                break
            }
            case window.location.href.includes('teachers'): {
                pageState = 'teachers';
                break
            }
            case window.location.href.includes('gallery'): {
                pageState = 'gallery';
                break
            }
            default : {
                pageState = 'home'
            }

        }
        localStorage.setItem("pageState", pageState);
        return dispatch({type: SET_PAGE_STATE, pageState})
    }
};


const getFunction = (API, type, key) => {
    return (dispatch) => {
        axios(API)
            .then(({data}) => {
                return dispatch({type, [key]: data})
            })
            .catch((error) => {
                console.log(error);
            })

    }
};

export const getTeachers = () => {
    return getFunction(teachersAPI, SET_TEACHERS, 'teachers');
};

export const getCooks = () => {
    return getFunction(cooksAPI, SET_COOKS, 'cooks');
};

export const getAbout = () => {
    return getFunction(aboutAPI, SET_ABOUT, 'about');
};
export  const getProgress = () =>{
  return getFunction(progressAPI, SET_PROGRESS, 'progress');
};

export const getHistory = () =>{
    return getFunction(historyAPI, SET_HISTORY, 'history');
};

export const getGallery = () =>{
    return getFunction(galleryAPI, SET_GALLERY, 'gallery')
};

export const getAllData = (dispatch) =>{
    dispatch(getTeachers());
    dispatch(getCooks());
    dispatch(getAbout());
    dispatch(getProgress());
    dispatch(getHistory());
    dispatch(getGallery());
};

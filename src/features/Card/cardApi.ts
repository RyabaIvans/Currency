import { instance } from '../../Common/api';

export const CourseApi = {

    // получение всех юзеров
    course: () => {
        return instance.get<ResponseCourse>('');
    },

};

export type ResponseCourse = ResponseCourseChild[];
export type ResponseCourseChild = {
	r030: number;
	txt: string;
	rate: number;
	cc: string;
	exchangedate: string;
}
import { ICourse } from '../models/Course';
import { BaseDatabase } from './BaseDatabase';

export class CourseDb extends BaseDatabase {
	public TABLE_NAME = 'LabeCourses';

	public async setNewObject(course: ICourse) {
		await super.setNewObject(course)
	}

	public async getObjectBySpecifics(
		name: string,
		value: string
	) {
		return super.getObjectBySpecifics(name, value)
	}

	public async setUpdate(
		WProp: string,
		WValue: any,
		UProp: string,
		UValue: any
	) {
		super.setUpdate(WProp, WValue, UProp, UValue);
	}

	public async getActiveCourses() {
		const result = await BaseDatabase.connection(this.TABLE_NAME)
			.select()
			.whereNot('module', 0);

		return result;
	}
}
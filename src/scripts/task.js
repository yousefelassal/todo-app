export default class Task {
    constructor(name, notes, project, date, image, star) {
        this.name = name;
        this.notes = notes;
        this.project = project;
        this.isCompleted = false;
        this.date = date;
        this.image = image;
        this.star = star;
    }
    
    getIsCompleted() {
        return this.isCompleted;
    }

    toggleStar() {
        this.star = !this.star;
    }

    toggleComplete() {
        this.isCompleted = !this.isCompleted;
    }
}
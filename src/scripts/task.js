export default class Task {
    constructor(name, notes, project, date, image, star, isCompleted, id) {
        this.name = name;
        this.notes = notes;
        this.project = project;
        this.isCompleted = isCompleted;
        this.date = date;
        this.image = image;
        this.star = star;
        this.id = id;
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

    getID() {
        return this.id;
    }
}
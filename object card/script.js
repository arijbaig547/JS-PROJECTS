function Car(name, color, image) {
    this.name = name;
    this.color = color;
    this.image = image;
}

const cars = [
    new Car("Honda Civic", "Red", "https://images.unsplash.com/photo-1594070319944-7c0cbebb6f58?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
    new Car("Toyota Corolla", "White", "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
    new Car("Ford Mustang", "Black", "https://images.unsplash.com/photo-1603553329474-99f95f35394f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
    new Car("Ford", "Grey", "https://images.unsplash.com/photo-1604108415419-6d4bd73a1c2c?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
    new Car("Ferrari", "Red", "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
    new Car("Lamborghini", "Orange", "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
    new Car("Bugatti", "Blue", "https://images.unsplash.com/photo-1627454820903-9646d6ca61f5?q=80&w=1337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
    new Car("Mehran", "Grey", "https://images.unsplash.com/photo-1618205062886-3976f4bb8219?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
    new Car("BMW", "Golden", "https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?q=80&w=1490&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
    new Car("Ford Mustang", "Black", "https://images.unsplash.com/photo-1603553329474-99f95f35394f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
];

const cards = document.querySelectorAll(".card");

cars.forEach((car, index) => {
    if (cards[index]) {
        cards[index].querySelector(".card-img-top").src = car.image;
        cards[index].querySelector(".card-title").textContent = car.name;
        cards[index].querySelector(".card-text").textContent = car.color;
    }
});

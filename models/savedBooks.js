module.exports = (sequelize,DataTypes) => {
    
    const Model = sequelize.define('savedbooks', {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        description: DataTypes.STRING,
        book_img: DataTypes.STRING
    })

    return Model;
}
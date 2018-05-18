
module.exports = function(mongoose){
    var DojoSchema = new mongoose.Schema({
        name: { type: String },
        }, { timestamps: true })
    mongoose.model('Dojo', DojoSchema); 
}

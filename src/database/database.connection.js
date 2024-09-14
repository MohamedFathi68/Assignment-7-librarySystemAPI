import  mongoose  from 'mongoose';


export const connection = mongoose.connect('mongodb://127.0.0.1:27017/library').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


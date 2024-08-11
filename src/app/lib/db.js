const{ username,password} = process.env
export const connectionStr="mongodb+srv://"+username+":"+password+"@cluster0.o1r0z6e.mongodb.net/db?retryWrites=true&w=majority&appName=Cluster0";
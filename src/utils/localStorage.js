export const loadData = (key) => {
    try{
        let data = localStorage.getItem(key);
        data = JSON.parse(data);
        return data;
    }
    catch(error){
        console.log(error);
        return undefined;
    }
}

export const saveData = (key, data) => {
    localStorage.setItem(key, JSON.parse(data));
}
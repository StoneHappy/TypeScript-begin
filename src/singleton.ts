export default class Singleton{
    private static instance: Singleton;

    protected constructor() {
        
    }

    public static getinstance() {
        if(!this.instance)
        {
            this.instance = new Singleton();
        }

        return this.instance;
    }

    public log() {
        console.log("adsd");
    }
}
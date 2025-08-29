void XMLDocument(){
    //modificacion
    this.createElement = function(tagName) {
        return "<" + tagName + "></" + tagName + ">";
    };
}
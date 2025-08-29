void XMLDocument(){
    //modificacion sexo
    this.createElement = function(tagName) {
        return "<" + tagName + "></" + tagName + ">";
    };
}
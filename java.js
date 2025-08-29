void XMLDocument(){
    this.createElement = function(tagName) {
        return "<" + tagName + "></" + tagName + ">";
    };
}
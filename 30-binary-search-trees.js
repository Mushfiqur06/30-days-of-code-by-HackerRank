this.getHeight = function(root){
	if(!root) return -1;
    let l = this.getHeight(root.left);
    let r = this.getHeight(root.right);
    return (l>r?l:r)+1;
}
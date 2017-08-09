module.exports.create = function(req, res){};

module.exports.new = function(req, res){
    res.send("<form method='post' action='/articles'>\
        <input type='text' placeholder='title' name='title'/>\
        <input type='text' placeholder='author' name='author'/>\
        <textarea name='body'></textarea>\
        </form>")
};
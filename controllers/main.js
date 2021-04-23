exports.getIndex = (req, res) => {
   res.sendFile(process.env.VIEWS_DIRNAME + '/index.html');
}

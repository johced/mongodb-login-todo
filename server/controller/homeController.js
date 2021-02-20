// *** Render Start Page ***
exports.showStart = (req, res) => {
  try {
    res.render('index.ejs', { message: '' });
  } catch (err) {
    console.log(err);
  }
};

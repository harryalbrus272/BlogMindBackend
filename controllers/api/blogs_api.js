const Blogs = require('../../models/Blogs');

module.exports.list = async (req, res) => {
  try {
    let blogs = await Blogs.find({}).sort('-createdAt');
    return res.status(200).json({
      blogs,
      message: 'List of blogs',
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      success: false,
    });
  }
};

module.exports.saveBlogs = async (req, res) => {
  const { title, content } = req.body;
  if (title && content) {
    try {
      let result = await Blogs.create({
        title,
        content,
      });
      if (result)
        return res.status(200).json({
          success: true,
          message: 'Order Created',
          result,
        });
    } catch (error) {
      return res.status(500).json({
        message: 'Internal Server Error',
        success: false,
      });
    }
  } else {
    return res.status(400).json({
      message: 'Missing body parameters',
      success: false,
    });
  }
};

module.exports.blogDetails = async (req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      let result = await Blogs.findById(id);
      if (result)
        return res.status(200).json({
          success: true,
          message: 'Blog Found',
          result,
        });
    } catch (error) {
      return res.status(500).json({
        message: 'Internal Server Error',
        success: false,
        error,
      });
    }
  } else {
    return res.status(400).json({
      message: 'Blog Id not available in the params',
      success: false,
    });
  }
};

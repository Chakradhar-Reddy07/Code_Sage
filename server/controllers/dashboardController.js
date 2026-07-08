const {
  getDashboardStats,
} = require("../services/dashboardService");

const dashboard = async (req, res) => {
  try {

    const stats = await getDashboardStats(
      req.user.id
    );

    return res.status(200).json({
      success: true,
      stats,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });

  }
};

module.exports = {
  dashboard,
};
module.exports = function ({ addComponents }) {
  const dropdown = {
    ".dropdown": {
      position: "relative",
    },
    ".dropdown-menu": {
      display: "none",
      position: "absolute",
      minWidth: "200px",
      backgroundColor: "#ffffff",
      boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
      zIndex: "1",
    },
    ".dropdown:hover .dropdown-menu": {
      display: "block",
    },
    ".dropdown-menu a": {
      color: "black",
      padding: "12px 16px",
      textDecoration: "none",
      display: "block",
    },
    ".dropdown-menu a:hover": {
      backgroundColor: "#ddd",
    },
  };

  addComponents(dropdown);
};

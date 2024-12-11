const pool = require("../pool");

const createUser = async (req, res) => {
  const { first_name, last_name, email, password, phone_number } = req.body;

  // Ensure that all required fields are present
  if (!first_name || !last_name || !email || !password || !phone_number) {
    return res.status(400).json({ msg: 'Please provide all required fields' });
  }

  try {
    // Hash the password before saving to the database
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    const result = await pool.query(
      "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [first_name, last_name, email, password]
    );

    // Respond with the newly created user (excluding the password)
    const newUser = result.rows[0];
    delete newUser.password;  // Don't send the password in the response

    res.json(newUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {createUser}
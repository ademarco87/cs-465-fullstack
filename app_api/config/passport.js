const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use(new LocalStrategy({
  usernameField: 'email',
}, async (username, password, done) => {
  try {
    console.log("🔍 Passport strategy hit for:", username);
    const user = await User.findOne({ email: username });

    if (!user) {
      console.log("❌ User not found");
      return done(null, false, { message: 'Incorrect email.' });
    }

    if (!user.validPassword(password)) {
      console.log("❌ Invalid password");
      return done(null, false, { message: 'Incorrect password.' });
    }

    console.log("✅ Strategy success");
    return done(null, user);
  } catch (err) {
    console.error("❌ DB error:", err);
    return done(err);
  }
}));

import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "hhtp://localhost:5000/api/auth/google/callback" 
}, function(_,__, profile, done){
    console.log(profile)
}))


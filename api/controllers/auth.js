import User from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { errorHandler } from "../errorHandler.js";

export const register = async (req, res, next) => {
    const salt = bcrypt.genSaltSync(8)
    const hashPassword = bcrypt.hashSync(req.body.password, salt)
    const newUser = new User({ password: hashPassword, ...req.body })

    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })

        if (!user) {
            return next(errorHandler(404, "User not found"))
        }
        const validPassword = bcrypt.compareSync(req.body.password, user.password)

        if (!validPassword) {
            return next(errorHandler(400, "Invalid password or email"))

        }

        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiredIn: "1d" })
        const { password, ...otherDetails } = user._doc

        res.cookie("access_token", token, { httpOnly: true }).status(200).json(otherDetails)
    } catch (error) {
        next(error)
    }
}
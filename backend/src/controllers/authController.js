import { User } from "../models/userModel.js";
import { registerValidate, loginValidate } from "../validations/userValidation.js";

export const Register = async(req, res) => {
 try {
    

 } catch (error) {
    console.log(error.message)
    res.status(500).json({message: "Something went wrong"})
 }
}

export const Login = async(req, res) => {
 try {
    
 } catch (error) {
    console.log(error.message)
    res.status(500).json({message: "Something went wrong"})
 }
}

export const Logout = async(req, res) => {
 try {
    
 } catch (error) {
    console.log(error.message)
    res.status(500).json({message: "Something went wrong"})
 }
}

export const Me = async(req, res) => {
 try {
    
 } catch (error) {
    console.log(error.message)
    res.status(500).json({message: "Something went wrong"})
 }
}

export const RefreshToken = async(req, res) => {
 try {
    
 } catch (error) {
    console.log(error.message)
    res.status(500).json({message: "Something went wrong"})
 }
}

export const ForgotPassword = async(req, res) => {
 try {
    
 } catch (error) {
    console.log(error.message)
    res.status(500).json({message: "Something went wrong"})
 }
}

export const ResetPassword = async(req, res) => {
 try {
    
 } catch (error) {
    console.log(error.message)
    res.status(500).json({message: "Something went wrong"})
 }
}
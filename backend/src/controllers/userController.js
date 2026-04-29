import { User } from "../models/userModel.js";
import { registerValidate, loginValidate } from "../validations/userValidation.js";

export const Create = async(req, res) => {
 try {
    
 } catch (error) {
    console.log(error.message)
    res.status(500).json({message: "Something went wrong"})
 }
}

export const Fetch = async(req, res) => {
 try {
    
 } catch (error) {
    console.log(error.message)
    res.status(500).json({message: "Something went wrong"})
 }
}

export const FetchById = async(req, res) => {
 try {
    
 } catch (error) {
    console.log(error.message)
    res.status(500).json({message: "Something went wrong"})
 }
}

export const Update = async(req, res) => {
 try {
    
 } catch (error) {
    console.log(error.message)
    res.status(500).json({message: "Something went wrong"})
 }
}

export const Delete = async(req, res) => {
 try {
    
 } catch (error) {
    console.log(error.message)
    res.status(500).json({message: "Something went wrong"})
 }
}
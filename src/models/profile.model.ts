import { Schema, model, SchemaTypes } from "mongoose";
import { IProfile } from "../types";

const profileSchema = new Schema<IProfile>({
    profile_name: { type: SchemaTypes.String, required: true },
    profile_phone: { type: SchemaTypes.String, required: true },
    profile_address: { type: SchemaTypes.String, required: true },
    profile_resume: { type: SchemaTypes.String, required: true },
    profile_company: { type: SchemaTypes.String, required: true },
    profile_position: { type: SchemaTypes.String, required: true },
    user_id: { type: SchemaTypes.ObjectId, ref: "User", required: true },
},
{
    timestamps: true
});


export const Profile = model<IProfile>('Profile', profileSchema);
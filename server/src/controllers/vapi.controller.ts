

import type { Request, Response, NextFunction } from "express";
import User from "../models/user.model.ts";
import { initiateOutboundCall } from "../services/vapi.service.ts";

// POST /api/vapi/call
export const startCall = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { phoneNumber, preferredCourse } = req.body;

    if (!phoneNumber || phoneNumber.trim().length < 10) {
      res.status(400).json({ success: false, message: "Valid phone number is required." });
      return;
    }

    const currentUser = (req as any).user;
    const user = await User.findById(currentUser.userId).select("name email");

    if (!user) {
      res.status(404).json({ success: false, message: "User not found." });
      return;
    }

    console.log("Initiating outbound call with:");
    console.log({
      phoneNumber,
      preferredCourse,
      userName: user.name,
    });

    const result = await initiateOutboundCall({
        phoneNumber: phoneNumber.trim(),
        userName: user.name,
        preferredCourse,
        userEmail: ""
    });
    
    console.log("VAPI CALL RESULT:");
    console.log(result);

    res.status(200).json({
      success: true,
      message: "Call initiated. You will receive a call shortly.",
      data: { callId: result.id, status: result.status },
    });
  } catch (error: any) {

  console.error("========== VAPI CONTROLLER ERROR ==========");
  console.error(error);

  if (error.response) {
    console.error("STATUS:", error.response.status);
    console.error("DATA:", error.response.data);
  }

  console.error("MESSAGE:", error.message);
  console.error("==========================================");

  res.status(500).json({
    success: false,
    message:
      error.response?.data?.message ||
      error.message ||
      "Failed to initiate call",
  });
}
};
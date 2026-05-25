# backend/main.py — Wavyloan FastAPI Backend (Mock Mode)

# DEMO ONLY — SYNTHETIC DATA — NO REAL PII
 
from fastapi import FastAPI, HTTPException

from fastapi.middleware.cors import CORSMiddleware

from fastapi.responses import FileResponse

from pydantic import BaseModel

import os
 
app = FastAPI(title="Wavyloan API", version="1.0.0")
 
app.add_middleware(

    CORSMiddleware,

    allow_origins=["http://localhost:8080", "http://localhost:5173", "http://localhost:3000"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],

)
 
class ApplicationRequest(BaseModel):

    applicant_id: str
 
MOCK_RESPONSES = {

    "WL-2024-001": {

        "status": "success",

        "applicant_id": "WL-2024-001",

        "profile": {

            "full_name": "Alex Chen",

            "employer": "TechCorp Consulting LLC",

            "gross_annual_income": 95000,

            "loan_amount_requested": 350000,

            "property_value": 450000,

            "property_address": "123 Maple Street, Springfield IL",

            "monthly_debt_payments": 820,

            "down_payment": 100000,

            "loan_purpose": "Purchase",

            "extraction_confidence": 0.95

        },

        "assessment": {

            "risk_score": 72,

            "risk_tier": "Medium-Low",

            "fico_score": 742,

            "dti_ratio": 0.278,

            "ltv_ratio": 0.778,

            "payment_history_clean": True,

            "key_drivers": [

                {"factor": "FICO Score", "impact": "Positive", "detail": "742 indicates strong credit history"},

                {"factor": "DTI Ratio", "impact": "Positive", "detail": "27.8% is well within QM 43% threshold"},

                {"factor": "LTV Ratio", "impact": "Neutral", "detail": "77.8% requires PMI but within conventional limits"},

                {"factor": "Thin File", "impact": "Negative", "detail": "Only 3 open tradelines reduces score confidence"}

            ],

            "reasoning_summary": "Solid credit profile with clean payment history and manageable DTI. Primary risk is thin credit file."

        },

        "compliance_report": {

            "overall_status": "Pass",

            "fair_lending_flag": False,

            "checks": [

                {"rule_name": "APR Disclosure", "regulation": "TILA Reg Z", "status": "Pass", "citation": "12 CFR 1026.19", "finding": "APR will be disclosed at application per TILA requirements."},

                {"rule_name": "Settlement Cost Disclosure", "regulation": "RESPA", "status": "Pass", "citation": "12 CFR 1024.7", "finding": "TRID disclosure required within 3 business days."},

                {"rule_name": "DTI QM Threshold", "regulation": "QM Rule", "status": "Pass", "citation": "12 CFR 1026.43(e)", "finding": "DTI of 27.8% is within QM 43% threshold."},

                {"rule_name": "Fair Lending Review", "regulation": "ECOA / FHA", "status": "Pass", "citation": "15 U.S.C. 1691", "finding": "No protected-class characteristics in decisioning factors."},

                {"rule_name": "HMDA Reporting", "regulation": "HMDA", "status": "Advisory", "citation": "12 CFR 1003", "finding": "HMDA LAR entry required upon application receipt."}

            ]

        },

        "decision": {

            "decision": "Conditional Approve",

            "conditions": [

                "Provide homeowner insurance policy prior to closing",

                "Complete title search within 30 days",

                "PMI enrollment required (LTV 77.8%)"

            ],

            "rationale": "Strong creditworthiness: FICO 742, clean 24-month payment history, DTI 27.8% well below QM limit. All compliance checks passed.",

            "human_review_required": False,

            "confidence_score": 0.87

        },

        "comms": {

            "email_subject": "Your Mortgage Application — Conditional Approval",

            "email_body": "Dear Alex,\n\nWe are pleased to inform you that your mortgage application for 123 Maple Street has been conditionally approved for $350,000.\n\nConditions to satisfy prior to closing:\n1. Homeowner's insurance policy\n2. Clean title commitment\n3. PMI enrollment\n\nYour loan officer will contact you within 24 hours.\n\nWarm regards,\nWavyloan Team\n\n[DEMO — SYNTHETIC DATA ONLY]",

            "sms_message": "Great news Alex! Your Wavyloan mortgage is conditionally approved. Check your email for details. [DEMO]",

            "voice_script": "Hi Alex, great news! Your mortgage application for 123 Maple Street has been conditionally approved for $350,000. Your loan officer will contact you within 24 hours to finalize the remaining conditions. Congratulations!",

            "in_app_notification": "Your application is conditionally approved! Tap to view conditions."

        },

        "audit_log": [

            {"timestamp": "2024-11-20T10:00:01Z", "agent": "IntakeAgent", "action": "Document OCR complete", "status": "success"},

            {"timestamp": "2024-11-20T10:00:08Z", "agent": "RiskAgent", "action": "Credit bureau pulled, risk score calculated: 72/100", "status": "success"},

            {"timestamp": "2024-11-20T10:00:15Z", "agent": "ComplianceAgent", "action": "5 regulatory checks completed — 4 Pass, 1 Advisory", "status": "success"},

            {"timestamp": "2024-11-20T10:00:22Z", "agent": "UnderwritingAgent", "action": "Decision issued: Conditional Approve (confidence 87%)", "status": "success"},

            {"timestamp": "2024-11-20T10:00:28Z", "agent": "CommsAgent", "action": "Email, SMS, voice notification generated", "status": "success"}

        ]

    },

    "WL-2024-002": {

        "status": "success",

        "applicant_id": "WL-2024-002",

        "profile": {

            "full_name": "Jordan Blake",

            "employer": "RetailCo Inc.",

            "gross_annual_income": 52000,

            "loan_amount_requested": 280000,

            "property_value": 295000,

            "property_address": "456 Oak Avenue, Columbus OH",

            "monthly_debt_payments": 1210,

            "down_payment": 15000,

            "loan_purpose": "Purchase",

            "extraction_confidence": 0.92

        },

        "assessment": {

            "risk_score": 38,

            "risk_tier": "High",

            "fico_score": 591,

            "dti_ratio": 0.481,

            "ltv_ratio": 0.949,

            "payment_history_clean": False,

            "key_drivers": [

                {"factor": "FICO Score", "impact": "Negative", "detail": "591 is below conventional lending threshold of 620"},

                {"factor": "DTI Ratio", "impact": "Negative", "detail": "48.1% significantly exceeds QM 43% threshold"},

                {"factor": "LTV Ratio", "impact": "Negative", "detail": "94.9% is very high — minimal equity position"},

                {"factor": "Payment History", "impact": "Negative", "detail": "2 late payments (30-day) in past 24 months"}

            ],

            "reasoning_summary": "High-risk profile driven by elevated DTI, low FICO, minimal down payment, and recent late payments. Does not meet conventional lending criteria."

        },

        "compliance_report": {

            "overall_status": "Advisory",

            "fair_lending_flag": False,

            "checks": [

                {"rule_name": "APR Disclosure", "regulation": "TILA Reg Z", "status": "Pass", "citation": "12 CFR 1026.19", "finding": "APR disclosure required at application."},

                {"rule_name": "Settlement Cost Disclosure", "regulation": "RESPA", "status": "Pass", "citation": "12 CFR 1024.7", "finding": "TRID disclosure required within 3 business days."},

                {"rule_name": "DTI QM Threshold", "regulation": "QM Rule", "status": "Fail", "citation": "12 CFR 1026.43(e)", "finding": "DTI of 48.1% exceeds QM 43% safe harbor threshold."},

                {"rule_name": "Fair Lending Review", "regulation": "ECOA / FHA", "status": "Pass", "citation": "15 U.S.C. 1691", "finding": "Decision based solely on financial factors."},

                {"rule_name": "HMDA Reporting", "regulation": "HMDA", "status": "Advisory", "citation": "12 CFR 1003", "finding": "HMDA LAR entry required. Denial reason codes must be documented."}

            ]

        },

        "decision": {

            "decision": "Deny",

            "conditions": [],

            "rationale": "Application denied due to: (1) FICO 591 below minimum 620 threshold, (2) DTI 48.1% exceeds QM 43% limit, (3) LTV 94.9% with insufficient reserves, (4) two 30-day late payments in 24 months. Applicant may reapply after 12 months of on-time payments and debt reduction.",

            "human_review_required": False,

            "confidence_score": 0.91

        },

        "comms": {

            "email_subject": "Your Mortgage Application — Decision Notice",

            "email_body": "Dear Jordan,\n\nThank you for your mortgage application. After careful review, we are unable to approve your application at this time.\n\nPrimary reasons:\n1. Debt-to-income ratio exceeds qualifying limits\n2. Credit score below minimum threshold\n3. Insufficient down payment for requested loan amount\n\nYou have the right to request a free copy of your credit report. You may reapply after addressing these factors.\n\nWarm regards,\nWavyloan Team\n\n[DEMO — SYNTHETIC DATA ONLY]",

            "sms_message": "Jordan, a decision has been made on your Wavyloan application. Please check your email for details. [DEMO]",

            "voice_script": "Hi Jordan, this is Wavyloan with an update on your mortgage application. Unfortunately, we are unable to approve your application at this time due to qualifying ratio requirements. Please check your email for detailed information and next steps. We encourage you to reapply in the future.",

            "in_app_notification": "A decision has been made on your application. Tap to view details."

        },

        "audit_log": [

            {"timestamp": "2024-11-20T11:00:01Z", "agent": "IntakeAgent", "action": "Document OCR complete", "status": "success"},

            {"timestamp": "2024-11-20T11:00:08Z", "agent": "RiskAgent", "action": "Credit bureau pulled, risk score calculated: 38/100", "status": "success"},

            {"timestamp": "2024-11-20T11:00:15Z", "agent": "ComplianceAgent", "action": "5 checks — 3 Pass, 1 Fail, 1 Advisory", "status": "success"},

            {"timestamp": "2024-11-20T11:00:22Z", "agent": "UnderwritingAgent", "action": "Decision issued: Deny (confidence 91%)", "status": "success"},

            {"timestamp": "2024-11-20T11:00:28Z", "agent": "CommsAgent", "action": "Denial notice generated", "status": "success"}

        ]

    },

    "WL-2024-003": {

        "status": "success",

        "applicant_id": "WL-2024-003",

        "profile": {

            "full_name": "Sam Patel",

            "employer": "MedTech Corp.",

            "gross_annual_income": 185000,

            "loan_amount_requested": 400000,

            "property_value": 650000,

            "property_address": "789 Pine Boulevard, Austin TX",

            "monthly_debt_payments": 1290,

            "down_payment": 250000,

            "loan_purpose": "Purchase",

            "extraction_confidence": 0.97

        },

        "assessment": {

            "risk_score": 88,

            "risk_tier": "Low",

            "fico_score": 798,

            "dti_ratio": 0.182,

            "ltv_ratio": 0.615,

            "payment_history_clean": True,

            "key_drivers": [

                {"factor": "FICO Score", "impact": "Positive", "detail": "798 is excellent — top tier credit profile"},

                {"factor": "DTI Ratio", "impact": "Positive", "detail": "18.2% is well below all qualifying thresholds"},

                {"factor": "LTV Ratio", "impact": "Positive", "detail": "61.5% — strong equity position, no PMI required"},

                {"factor": "Asset Reserves", "impact": "Positive", "detail": "$285,000 liquid reserves — 8+ months PITI coverage"}

            ],

            "reasoning_summary": "Exceptional credit profile across all dimensions. High income, strong assets, low debt burden, excellent FICO. Straightforward approval."

        },

        "compliance_report": {

            "overall_status": "Pass",

            "fair_lending_flag": False,

            "checks": [

                {"rule_name": "APR Disclosure", "regulation": "TILA Reg Z", "status": "Pass", "citation": "12 CFR 1026.19", "finding": "APR disclosure required at application."},

                {"rule_name": "Settlement Cost Disclosure", "regulation": "RESPA", "status": "Pass", "citation": "12 CFR 1024.7", "finding": "TRID disclosure required within 3 business days."},

                {"rule_name": "DTI QM Threshold", "regulation": "QM Rule", "status": "Pass", "citation": "12 CFR 1026.43(e)", "finding": "DTI of 18.2% is well within QM safe harbor."},

                {"rule_name": "Fair Lending Review", "regulation": "ECOA / FHA", "status": "Pass", "citation": "15 U.S.C. 1691", "finding": "No protected-class characteristics in decisioning factors."},

                {"rule_name": "HMDA Reporting", "regulation": "HMDA", "status": "Pass", "citation": "12 CFR 1003", "finding": "HMDA LAR entry required upon application receipt."}

            ]

        },

        "decision": {

            "decision": "Approve",

            "conditions": [],

            "rationale": "Clean approval: FICO 798, DTI 18.2%, LTV 61.5%, 24 months clean payment history, strong liquid reserves of $285,000. All compliance checks passed. No conditions required.",

            "human_review_required": False,

            "confidence_score": 0.96

        },

        "comms": {

            "email_subject": "Congratulations — Your Mortgage is Approved!",

            "email_body": "Dear Sam,\n\nCongratulations! Your mortgage application for 789 Pine Boulevard has been approved for $400,000.\n\nNo conditions are required. Your loan officer will contact you within 24 hours to schedule closing.\n\nThank you for choosing Wavyloan.\n\nWarm regards,\nWavyloan Team\n\n[DEMO — SYNTHETIC DATA ONLY]",

            "sms_message": "Congratulations Sam! Your Wavyloan mortgage is APPROVED for $400,000. No conditions required. [DEMO]",

            "voice_script": "Hi Sam, fantastic news! Your mortgage application for 789 Pine Boulevard has been fully approved for $400,000 with no conditions required. Your loan officer will be in touch within 24 hours to schedule your closing. Congratulations and welcome to your new home!",

            "in_app_notification": "Congratulations! Your mortgage is fully approved. Tap to view details."

        },

        "audit_log": [

            {"timestamp": "2024-11-20T12:00:01Z", "agent": "IntakeAgent", "action": "Document OCR complete — confidence 97%", "status": "success"},

            {"timestamp": "2024-11-20T12:00:08Z", "agent": "RiskAgent", "action": "Credit bureau pulled, risk score calculated: 88/100", "status": "success"},

            {"timestamp": "2024-11-20T12:00:15Z", "agent": "ComplianceAgent", "action": "5 checks — 5 Pass, 0 Fail, 0 Advisory", "status": "success"},

            {"timestamp": "2024-11-20T12:00:22Z", "agent": "UnderwritingAgent", "action": "Decision issued: Approve (confidence 96%)", "status": "success"},

            {"timestamp": "2024-11-20T12:00:28Z", "agent": "CommsAgent", "action": "Approval notification generated", "status": "success"}

        ]

    }

}
 
@app.get("/api/health")

def health():

    return {"status": "ok", "service": "Wavyloan API", "mode": "mock"}
 
@app.post("/api/process-application")

async def process_application(request: ApplicationRequest):

    applicant_id = request.applicant_id

    # Extract just the ID portion if full label was sent e.g. "WL-2024-001"

    for key in MOCK_RESPONSES:

        if key in applicant_id:

            applicant_id = key

            break

    response = MOCK_RESPONSES.get(applicant_id)

    if not response:

        response = MOCK_RESPONSES["WL-2024-001"]

    return response
 
@app.get("/api/voice/{applicant_id}")

async def get_voice(applicant_id: str):

    audio_path = f"data/audio/{applicant_id}_voice_update.mp3"

    if os.path.exists(audio_path):

        return FileResponse(audio_path, media_type="audio/mpeg")

    raise HTTPException(status_code=404, detail="Voice file not found")
 
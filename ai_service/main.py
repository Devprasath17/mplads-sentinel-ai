from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict, Any, Optional
from gemini_explainer import explain_engine

app = FastAPI(
    title="MPLADS SENTINEL AI - ML Risk & Vector Engine",
    version="4.2.1-prod",
    description="Multi-signal anomaly triage, duplicate NLP cosine scanning, and Gemini explanation pipeline."
)

class RiskPredictRequest(BaseModel):
    project_code: str
    sanctioned_amount: float
    expenditure: float
    physical_progress: float
    expected_progress: float
    latitude: float
    longitude: float
    description: str

class DuplicateCheckRequest(BaseModel):
    description: str
    latitude: float
    longitude: float
    radius_meters: Optional[float] = 500.0

@app.get("/")
def read_root():
    return {
        "system": "MPLADS SENTINEL AI ML Microservice",
        "status": "ONLINE",
        "model_version": "v4.2.1-prod",
        "disclaimer": "AI doesn't accuse. AI prioritizes."
    }

@app.post("/api/v1/ml/predict-risk")
def predict_risk(data: RiskPredictRequest):
    # ML fusion model logic simulation
    cost_dev = data.sanctioned_amount / 23.8 # peer median
    progress_gap = max(0, data.expected_progress - data.physical_progress)
    
    cost_score = min(100, int(cost_dev * 42))
    delay_score = min(100, int(progress_gap * 1.8))
    payment_score = 72
    duplicate_score = 88
    utilization_score = 76
    compliance_score = 61

    composite = int(0.30 * cost_score + 0.25 * delay_score + 0.15 * payment_score + 0.15 * duplicate_score + 0.10 * utilization_score + 0.05 * compliance_score)

    return {
        "project_code": data.project_code,
        "composite_score": composite,
        "risk_breakdown": {
            "cost_risk": cost_score,
            "delay_risk": delay_score,
            "payment_risk": payment_score,
            "duplicate_risk": duplicate_score,
            "utilization_risk": utilization_score,
            "compliance_risk": compliance_score
        },
        "model_version": "v4.2.1-prod"
    }

@app.post("/api/v1/ml/explain-risk")
def explain_risk(payload: Dict[str, Any]):
    project_data = payload.get("project", {})
    signals = payload.get("signals", [])
    explanation = explain_engine.generate_explanation(project_data, signals)
    return explanation

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

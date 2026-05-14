from fastapi import FastAPI
from pydantic import BaseModel
from typing import Literal

app = FastAPI(title="Caos API", version="0.1.0")

Mode = Literal["chat", "code", "projects", "memory", "image", "voice", "automation", "dev"]

class ChatRequest(BaseModel):
    mode: Mode
    message: str

class MemoryEntry(BaseModel):
    type: str
    text: str

memory_store: list[MemoryEntry] = [
    MemoryEntry(type="system", text="Caos API iniciou com memoria local em processo.")
]

@app.get("/health")
def health():
    return {"status": "ok", "service": "caos-api"}

@app.post("/chat")
def chat(request: ChatRequest):
    return {
        "mode": request.mode,
        "reply": f"Caos recebeu em modo {request.mode}: {request.message}",
        "actions": []
    }

@app.get("/memory")
def list_memory():
    return {"items": memory_store}

@app.post("/memory")
def add_memory(entry: MemoryEntry):
    memory_store.append(entry)
    return {"saved": True, "item": entry}

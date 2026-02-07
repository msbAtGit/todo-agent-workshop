from pydantic import BaseModel

class TodoCreate(BaseModel):
    title: str

class TodoUpdate(BaseModel):
    title: str | None = None
    status: str | None = None

class TodoOut(BaseModel):
    id: int
    title: str
    status: str

    class Config:
        from_attributes = True

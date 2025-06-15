# python-service/test_app.py
import pytest
from app import app # Importa a instância 'app' do seu app.py

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_hello_python(client):
    """Testa se a rota raiz retorna a mensagem correta."""
    rv = client.get('/')
    assert rv.status_code == 200
    assert b"Olá do meu serviço Python!" in rv.data

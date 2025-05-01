
---

### **`API.md`**
```markdown
<!-- filepath: [API.md](http://_vscodecontentref_/0) -->

# Documentação da API

## Endpoints

### **Autenticação**
- **POST** `/api/auth/login`
  - **Descrição**: Autentica o usuário e retorna um token JWT.
  - **Body**:
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```

- **POST** `/api/auth/register`
  - **Descrição**: Registra um novo usuário.
  - **Body**:
    ```json
    {
      "name": "string",
      "email": "string",
      "password": "string"
    }
    ```

### **NFSe**
- **GET** `/api/nfse`
  - **Descrição**: Retorna as NFSes emitidas pelo usuário autenticado.
  - **Headers**:
    ```json
    {
      "Authorization": "Bearer <token>"
    }
    ```

- **POST** `/api/nfse`
  - **Descrição**: Cria uma nova NFSe.
  - **Body**:
    ```json
    {
      "clientName": "string",
      "value": "number",
      "description": "string"
    }
    ```

### **DAS**
- **POST** `/api/das/calculate`
  - **Descrição**: Calcula o valor do DAS com base no faturamento mensal.
  - **Body**:
    ```json
    {
      "monthlyRevenue": "number"
    }
    ```

- **POST** `/api/das/payment`
  - **Descrição**: Gera um boleto ou Pix para pagamento do DAS.
  - **Body**:
    ```json
    {
      "dasValue": "number",
      "paymentMethod": "string"
    }
    ```

### **Alertas**
- **GET** `/api/alerts`
  - **Descrição**: Retorna os alertas do usuário autenticado.
  - **Headers**:
    ```json
    {
      "Authorization": "Bearer <token>"
    }
    ```